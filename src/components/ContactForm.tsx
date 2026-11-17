"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ArrowDot } from "./home/ui";
import { hasConsent } from "@/lib/consent";
import { supabase } from '@/lib/supabase';
import {
  getAnalyticsIdentity,
  newLeadId,
  trackEvent,
  trackFormSubmitted,
} from "@/lib/analytics/tracker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ── Validation helpers ──────────────────────────────────────────────────────
const PHONE_ALLOWED_CHARS = /^[0-9+\-\s()]*$/;
const PHONE_MIN_DIGITS = 7;
const PHONE_MAX_LENGTH = 20;
const NAME_MIN_LENGTH = 2;
const MESSAGE_MIN_LENGTH = 10;

function extractDigits(value: string): string {
  return value.replace(/\D/g, "");
}

function validateName(value: string): string | null {
  if (!value.trim()) return "Name is required";
  if (value.trim().length < NAME_MIN_LENGTH) return "Name must be at least 2 characters";
  if (/\d/.test(value)) return "Name should not contain numbers";
  return null;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMAIL_MAX_LENGTH = 254;

/**
 * A visitor has to leave one way to reach them, and it can be either. In Sri
 * Lanka that is usually a phone or WhatsApp number; plenty of business buyers
 * would rather give an email. Asking for both loses people who have only one
 * to hand.
 */
const NEED_ONE_CONTACT = "Add a phone number or an email so we can reply";

function validatePhone(value: string, email: string): string | null {
  if (!value.trim()) return email.trim() ? null : NEED_ONE_CONTACT;
  if (!PHONE_ALLOWED_CHARS.test(value)) return "Only digits, +, -, spaces, and parentheses are allowed";
  const digits = extractDigits(value);
  if (digits.length < PHONE_MIN_DIGITS) return `Phone number must have at least ${PHONE_MIN_DIGITS} digits`;
  if (value.length > PHONE_MAX_LENGTH) return "Phone number is too long";
  return null;
}

function validateEmail(value: string, phone: string): string | null {
  const email = value.trim();
  if (!email) return phone.trim() ? null : NEED_ONE_CONTACT;
  if (email.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(email)) return "Enter a valid email address";
  return null;
}

function validateMessage(value: string): string | null {
  if (!value.trim()) return "Message is required";
  if (value.trim().length < MESSAGE_MIN_LENGTH) return `Message must be at least ${MESSAGE_MIN_LENGTH} characters`;
  return null;
}

type FieldErrors = {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  message?: string | null;
};

/** What the enquiry is about. Sent to the CRM as the subject. */
const NEEDS = [
  "AI agent (WhatsApp, website or voice)",
  "ERP or point of sale system",
  "Online store",
  "Content Office",
  "Website or web app",
  "Not sure yet",
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  company: "",
  website: "",
  companyWebsite: "",
  subject: "",
  message: "",
};

/**
 * What brought this visitor here, remembered for the whole session.
 *
 * The campaign parameters are on the URL of the page they LAND on, and by the
 * time they reach the contact form they have usually clicked through two or
 * three pages and lost them. Stashing them on first sight means the CRM
 * learns which ad or post actually produced the enquiry instead of recording
 * "website" for everything.
 *
 * sessionStorage, not localStorage: attribution belongs to this visit.
 */
const ATTRIBUTION_KEY = "arc_attribution";

type Attribution = {
  utm: Record<string, string>;
  referrer: string;
  landing_url: string;
  ref: string;
};

function readAttribution(): Attribution {
  const empty: Attribution = { utm: {}, referrer: "", landing_url: "", ref: "" };
  if (typeof window === "undefined") return empty;

  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (stored) return { ...empty, ...JSON.parse(stored) };
  } catch {
    // Private mode, or a corrupt value. Fall through and read the URL.
  }

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
  ]) {
    const value = params.get(key);
    if (value) utm[key] = value.slice(0, 200);
  }

  const fresh: Attribution = {
    utm,
    // Our own pages are not a referrer — that would record the site as the
    // source of its own traffic.
    referrer:
      document.referrer && !document.referrer.includes(window.location.host)
        ? document.referrer.slice(0, 500)
        : "",
    landing_url: window.location.href.slice(0, 500),
    ref: (params.get("ref") || "").slice(0, 60),
  };

  // Kept for the rest of the visit only with analytics consent; without it
  // the values from this page are still sent with this enquiry.
  if (!hasConsent("analytics")) return fresh;
  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(fresh));
  } catch {
    // Nothing to do — the values are still used for this submission.
  }
  return fresh;
}

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    readAttribution();
  }, []);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Check if mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ── Analytics ─────────────────────────────────────────────────────────────
  //
  // The tracker records the start (first focus) and every submit attempt on
  // its own, keyed by data-form below. What it cannot see is whether the
  // send WORKED, so the success path reports that — and only that — through
  // trackFormSubmitted, carrying the lead id that went to the CRM with the
  // enquiry. One id on both sides is what lets the CRM's lead ledger match
  // this exact conversion to this exact lead instead of guessing by time.

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // ── Validate all fields and return true if form is valid ──────────────────
  function validateAll(): boolean {
    const errors: FieldErrors = {
      name: validateName(formData.name),
      phone: validatePhone(formData.phone, formData.email),
      email: validateEmail(formData.email, formData.phone),
      message: validateMessage(formData.message),
    };
    setFieldErrors(errors);
    setTouched({ name: true, phone: true, email: true, message: true });
    return !errors.name && !errors.phone && !errors.email && !errors.message;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run full validation before submitting
    if (!validateAll()) {
      trackEvent("form_field", {
        element: "contact_form",
        meta: { form_id: "contact_form", outcome: "validation_failed" },
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Minted before the request, so the CRM receives the same id the
    // analytics conversion will carry.
    const leadId = newLeadId();
    const identity = getAnalyticsIdentity();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ...readAttribution(),
          lead_id: leadId,
          analytics_session_id: identity.session_id,
          analytics_visitor_id: identity.visitor_id,
          ...(identity.test ? { test: true } : {}),
        }),
      });

      if (response.ok) {
        // Also save as CRM lead via Supabase RPC
        try {
          await supabase.rpc('submit_contact_form', {
            p_full_name: formData.name,
            ...(formData.phone.trim() ? { p_phone: formData.phone.trim() } : {}),
            p_email: formData.email.trim() || null,
            p_company: formData.company || null,
            p_subject: formData.subject || null,
            p_message: formData.message,
            p_source: 'website contact form',
          });
        } catch (crmError) {
          console.error('CRM lead save error:', crmError);
          // Don't block the user — webhook already sent
        }

        // Only here: the request was accepted. This is the one moment that
        // is genuinely a conversion, and it is the moment the funnel, the
        // per-page conversion count and the CRM's lead ledger are all built
        // from.
        trackFormSubmitted("contact_form", "contact_form", {
          lead_id: leadId,
          meta: { subject: formData.subject || null },
        });

        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData(EMPTY_FORM);
        setFieldErrors({});
        setTouched({});
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message");
      }
    } catch (error) {
      // A failed send is not a conversion, and it IS worth knowing about —
      // a form that silently fails looks identical in the analytics to a
      // form nobody bothers to fill in.
      trackEvent("error", {
        element: "contact_form",
        element_text: error instanceof Error ? error.message : "contact submit failed",
        meta: { form_id: "contact_form" },
      });
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Phone-specific handler that strips invalid characters ─────────────────
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Strip any character that isn't a digit, +, -, space, or parenthesis
    const sanitised = raw.replace(/[^0-9+\-\s()]/g, "");
    const updated = { ...formData, phone: sanitised };
    setFormData(updated);
    if (touched.phone || touched.email) {
      setFieldErrors((prev) => ({
        ...prev,
        phone: validatePhone(sanitised, updated.email),
        email: validateEmail(updated.email, sanitised),
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // Re-validate on change only if field was already touched
    if (touched[name]) {
      if (name === "name") setFieldErrors((prev) => ({ ...prev, name: validateName(value) }));
      if (name === "message") setFieldErrors((prev) => ({ ...prev, message: validateMessage(value) }));
    }
    // Phone and email answer for each other, so both are re-checked together.
    if (name === "email" && (touched.email || touched.phone)) {
      setFieldErrors((prev) => ({
        ...prev,
        email: validateEmail(value, updated.phone),
        phone: validatePhone(updated.phone, value),
      }));
    }
  };

  // ── Mark field as touched on blur & validate ──────────────────────────────
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (name === "name") setFieldErrors((prev) => ({ ...prev, name: validateName(value) }));
    if (name === "phone" || name === "email") {
      const phone = name === "phone" ? value : formData.phone;
      const email = name === "email" ? value : formData.email;
      setFieldErrors((prev) => ({
        ...prev,
        phone: validatePhone(phone, email),
        email: validateEmail(email, phone),
      }));
    }
    if (name === "message") setFieldErrors((prev) => ({ ...prev, message: validateMessage(value) }));
  };

  // Inline error message component
  const FieldError = ({ error }: { error?: string | null }) => {
    if (!error) return null;
    return (
      <p className="text-ember-deep text-sm mt-1.5 pl-1 animate-[fadeIn_0.2s_ease-out]">
        {error}
      </p>
    );
  };

  const errorRingClass = "ring-2 ring-[#FF4925]/70";

  return (
    <form
      onSubmit={handleSubmit}
      id="contact-form"
      data-form="contact_form"
      className="cream-card space-y-5 p-5 sm:p-8 lg:p-10"
      noValidate
    >
      {/* Name & Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder={isMobile ? "Name" : "Enter your name"}
            required
            aria-label="Your name"
            aria-invalid={!!fieldErrors.name}
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-white border border-ink/10 text-ink text-base md:text-base placeholder:text-ink-mute focus-visible:ring-2 focus-visible:ring-[#FF4925]/60 focus-visible:ring-offset-0 rounded-xl h-14 px-5 ${touched.name && fieldErrors.name ? errorRingClass : ""}`}
          />
          {touched.name && <FieldError error={fieldErrors.name} />}
        </div>
        <div>
          <Input
            type="tel"
            name="phone"
            inputMode="tel"
            placeholder={isMobile ? "Phone" : "Phone or WhatsApp number"}
            aria-label="Phone or WhatsApp number"
            aria-invalid={!!fieldErrors.phone}
            value={formData.phone}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            maxLength={PHONE_MAX_LENGTH}
            className={`bg-white border border-ink/10 text-ink text-base md:text-base placeholder:text-ink-mute focus-visible:ring-2 focus-visible:ring-[#FF4925]/60 focus-visible:ring-offset-0 rounded-xl h-14 px-5 ${touched.phone && fieldErrors.phone ? errorRingClass : ""}`}
          />
          {touched.phone && <FieldError error={fieldErrors.phone} />}
        </div>
      </div>

      {/* Email & Company Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder={isMobile ? "Email" : "Email address"}
            aria-label="Email address"
            aria-invalid={!!fieldErrors.email}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={EMAIL_MAX_LENGTH}
            className={`bg-white border border-ink/10 text-ink text-base md:text-base placeholder:text-ink-mute focus-visible:ring-2 focus-visible:ring-[#FF4925]/60 focus-visible:ring-offset-0 rounded-xl h-14 px-5 ${touched.email && fieldErrors.email ? errorRingClass : ""}`}
          />
          {touched.email && <FieldError error={fieldErrors.email} />}
        </div>
        <div>
          <Input
            type="text"
            name="company"
            placeholder={isMobile ? "Company" : "Company name"}
            aria-label="Company name"
            value={formData.company}
            onChange={handleChange}
            className="bg-white border border-ink/10 text-ink text-base md:text-base placeholder:text-ink-mute focus-visible:ring-2 focus-visible:ring-[#FF4925]/60 focus-visible:ring-offset-0 rounded-xl h-14 px-5"
          />
        </div>
      </div>
      <p className="text-sm text-ink-mute pl-1 -mt-1">
        A phone number or an email is enough. Leave whichever you prefer.
      </p>

      {/* Company Website & What they need Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            name="website"
            inputMode="url"
            placeholder={isMobile ? "Website" : "Company website"}
            aria-label="Company website"
            value={formData.website || formData.companyWebsite}
            onChange={(e) => {
              const val = e.target.value;
              setFormData((prev) => ({ ...prev, website: val, companyWebsite: val }));
            }}
            className="bg-white border border-ink/10 text-ink text-base md:text-base placeholder:text-ink-mute focus-visible:ring-2 focus-visible:ring-[#FF4925]/60 focus-visible:ring-offset-0 rounded-xl h-14 px-5"
          />
        </div>
        <div>
          <div className="relative">
          <select
            name="subject"
            aria-label="What do you need?"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full appearance-none bg-white border border-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4925]/60 rounded-xl h-14 pl-5 pr-12 text-base ${formData.subject ? "text-ink" : "text-ink-mute"}`}
          >
            <option value="">What do you need?</option>
            {NEEDS.map((need) => (
              <option key={need} value={need} className="text-ink">
                {need}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-mute" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <Textarea
          name="message"
          placeholder="Message"
          required
          aria-label="Your message"
          aria-invalid={!!fieldErrors.message}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`bg-white border border-ink/10 text-ink text-base md:text-base placeholder:text-ink-mute focus-visible:ring-2 focus-visible:ring-[#FF4925]/60 focus-visible:ring-offset-0 rounded-xl min-h-[160px] resize-none px-5 py-4 ${touched.message && fieldErrors.message ? errorRingClass : ""}`}
        />
        {touched.message && <FieldError error={fieldErrors.message} />}
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`cut-card [--cut:14px] relative p-4 ${
            submitStatus.type === "success"
              ? "bg-green-600/10 [--cut-line:rgba(22,163,74,0.25)] text-green-800"
              : "bg-red-600/10 [--cut-line:rgba(220,38,38,0.25)] text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Section */}
      <div className="space-y-6 pt-2">
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-6">
          <p className="text-sm text-ink-mute leading-relaxed order-2 md:order-1">
            By submitting you agree to<br />our <a href="/terms-of-service" className="underline hover:text-ink transition-colors">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-ink transition-colors">Privacy Policy</a>
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="pill-btn pill-btn--ember pill-btn--lg order-1 w-full disabled:cursor-not-allowed disabled:opacity-50 md:order-2 md:w-auto"
          >
            {isSubmitting ? "Sending..." : "Submit"}
            <ArrowDot />
          </button>
        </div>
      </div>
    </form>
  );
}
