"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from '@/lib/supabase';
import { markConversion, trackEvent } from "@/lib/analytics/tracker";
import { Button } from "@/components/ui/button";
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

function validatePhone(value: string): string | null {
  if (!value.trim()) return "Phone number is required";
  if (!PHONE_ALLOWED_CHARS.test(value)) return "Only digits, +, -, spaces, and parentheses are allowed";
  const digits = extractDigits(value);
  if (digits.length < PHONE_MIN_DIGITS) return `Phone number must have at least ${PHONE_MIN_DIGITS} digits`;
  if (value.length > PHONE_MAX_LENGTH) return "Phone number is too long";
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
  message?: string | null;
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    website: "",
    companyWebsite: "",
    subject: "",
    message: "",
  });

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
  // The tracker's delegated listeners see this form, but they cannot see
  // whether it worked. Being capture-phase they fire on the native submit
  // event — before validateAll() has run and long before /api/contact has
  // answered — so a rejected or failed submission was being recorded as a
  // completed one, and a conversion, irreversibly. `data-analytics-manual`
  // on the <form> below turns that inference off and this component reports
  // the outcome it actually knows.
  const startedRef = useRef(false);
  const startedAtRef = useRef<number | null>(null);

  const noteStart = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    startedAtRef.current = Date.now();
    trackEvent("form_start", {
      element: "contact_form",
      meta: { form_id: "contact_form" },
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // ── Validate all fields and return true if form is valid ──────────────────
  function validateAll(): boolean {
    const errors: FieldErrors = {
      name: validateName(formData.name),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };
    setFieldErrors(errors);
    setTouched({ name: true, phone: true, message: true });
    return !errors.name && !errors.phone && !errors.message;
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Also save as CRM lead via Supabase RPC
        try {
          await supabase.rpc('submit_contact_form', {
            p_full_name: formData.name,
            p_phone: formData.phone,
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
        // per-page conversion count and the CRM's converted-visits list are
        // all built from.
        trackEvent("form_submit", {
          element: "contact_form",
          value: startedAtRef.current
            ? Math.round((Date.now() - startedAtRef.current) / 1000)
            : null,
          meta: { form_id: "contact_form", subject: formData.subject || null },
        });
        markConversion("contact_form", { form_id: "contact_form" });

        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          company: "",
          website: "",
          companyWebsite: "",
          subject: "",
          message: "",
        });
        setFieldErrors({});
        setTouched({});
        // A second send is a second form fill, not a continuation of the first.
        startedRef.current = false;
        startedAtRef.current = null;
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
    if (touched.phone) {
      setFieldErrors((prev) => ({ ...prev, phone: validatePhone(sanitised) }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // Re-validate on change only if field was already touched
    if (touched[name]) {
      if (name === "name") setFieldErrors((prev) => ({ ...prev, name: validateName(value) }));
      if (name === "message") setFieldErrors((prev) => ({ ...prev, message: validateMessage(value) }));
    }
  };

  // ── Mark field as touched on blur & validate ──────────────────────────────
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (name === "name") setFieldErrors((prev) => ({ ...prev, name: validateName(value) }));
    if (name === "phone") setFieldErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    if (name === "message") setFieldErrors((prev) => ({ ...prev, message: validateMessage(value) }));
  };

  // Inline error message component
  const FieldError = ({ error }: { error?: string | null }) => {
    if (!error) return null;
    return (
      <p className="text-[#FF4925] text-xs mt-1.5 pl-1 animate-[fadeIn_0.2s_ease-out]">
        {error}
      </p>
    );
  };

  const errorRingClass = "ring-1 ring-[#FF4925]/60";

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={noteStart}
      id="contact-form"
      data-form="contact_form"
      data-analytics-manual
      className="space-y-6 bg-[rgb(20,20,20)] border border-[rgb(40,40,40)] rounded-3xl p-8 lg:p-10"
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
            className={`bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-1 focus-visible:ring-[#FF4925]/50 focus-visible:ring-offset-0 rounded-xl h-14 px-6 ${touched.name && fieldErrors.name ? errorRingClass : ""}`}
          />
          {touched.name && <FieldError error={fieldErrors.name} />}
        </div>
        <div>
          <Input
            type="tel"
            name="phone"
            inputMode="tel"
            placeholder={isMobile ? "Phone" : "Phone number"}
            required
            aria-label="Phone number"
            aria-invalid={!!fieldErrors.phone}
            value={formData.phone}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            maxLength={PHONE_MAX_LENGTH}
            className={`bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-1 focus-visible:ring-[#FF4925]/50 focus-visible:ring-offset-0 rounded-xl h-14 px-6 ${touched.phone && fieldErrors.phone ? errorRingClass : ""}`}
          />
          {touched.phone && <FieldError error={fieldErrors.phone} />}
        </div>
      </div>

      {/* Company Name & Company Website Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            type="text"
            name="company"
            placeholder={isMobile ? "Company" : "Company name"}
            aria-label="Company name"
            value={formData.company}
            onChange={handleChange}
            className="bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-1 focus-visible:ring-[#FF4925]/50 focus-visible:ring-offset-0 rounded-xl h-14 px-6"
          />
        </div>
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
            className="bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-1 focus-visible:ring-[#FF4925]/50 focus-visible:ring-offset-0 rounded-xl h-14 px-6"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          aria-label="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-1 focus-visible:ring-[#FF4925]/50 focus-visible:ring-offset-0 rounded-xl h-14 px-6"
        />
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
          className={`bg-[rgb(30,30,30)] border-none text-white placeholder:text-[rgb(90,90,90)] focus-visible:ring-1 focus-visible:ring-[#FF4925]/50 focus-visible:ring-offset-0 rounded-xl min-h-[160px] resize-none px-6 py-4 ${touched.message && fieldErrors.message ? errorRingClass : ""}`}
        />
        {touched.message && <FieldError error={fieldErrors.message} />}
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-xl ${
            submitStatus.type === "success"
              ? "bg-green-500/10 border border-green-500/20 text-green-500"
              : "bg-red-500/10 border border-red-500/20 text-red-500"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Section */}
      <div className="space-y-6 pt-2">
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-6">
          <p className="text-sm text-[rgb(119,119,119)] leading-relaxed order-2 md:order-1">
            By submitting you agree to<br />our <a href="/terms-of-service" className="underline hover:text-white transition-colors">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-white transition-colors">Privacy Policy</a>
          </p>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-14 px-10 bg-transparent hover:bg-[rgb(255,73,37)] text-[rgb(255,73,37)] hover:text-[rgb(10,10,10)] font-bold uppercase tracking-wider rounded-full border-2 border-[rgb(255,73,37)] transition-all duration-300 flex items-center gap-2 whitespace-nowrap w-full md:w-auto order-1 md:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "SENDING..." : "SUBMIT"}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-45deg]">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    </form>
  );
}
