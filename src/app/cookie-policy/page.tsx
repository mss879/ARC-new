import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { company } from "@/content/site-facts";
import { CONSENT_MAX_AGE_DAYS, GA_MEASUREMENT_ID } from "@/lib/consent";

const PAGE_URL = "https://www.arcai.agency/cookie-policy";

export const metadata: Metadata = {
  title: "Cookie Policy | ARC AI",
  description:
    "The cookies and similar storage used on arcai.agency, what each one does, how long it is kept, and how to accept, refuse or change your choice.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Cookie Policy | ARC AI",
    description: "The cookies used on arcai.agency and how to control them.",
    url: PAGE_URL,
    siteName: "ARC AI",
    type: "website",
  },
  robots: { index: true, follow: true },
};

/*
 * Keep this page in step with the code. Every item listed here is set by
 * something in src/lib/consent.ts, src/components/CookieConsent.tsx,
 * src/lib/analytics/tracker.ts, src/components/ContactForm.tsx or
 * src/components/TurnstileWidget.tsx. When a
 * tracker is added, list it here, raise CONSENT_VERSION in
 * src/lib/consent.ts (so every visitor is asked again) and update the date.
 */
const LAST_UPDATED = "21 November 2026";

type Item = { name: string; by: string; purpose: string; kept: string };

const essential: Item[] = [
  {
    name: "arc_consent",
    by: "ARC AI (local storage)",
    purpose: "Remembers the cookie choices you made, so we do not ask on every page.",
    kept: `${Math.round(CONSENT_MAX_AGE_DAYS / 30)} months, then we ask again`,
  },
  {
    name: "Cloudflare Turnstile",
    by: "Cloudflare (contact form only)",
    purpose:
      "Checks that a contact-form message comes from a person, not a spam bot. It runs once you start filling in the form and looks at signals such as your IP address and browser. Cloudflare uses them only to detect bots and improve that detection, not to identify you or for advertising.",
    kept: "Not stored by us. Cloudflare's Turnstile privacy notice explains what it keeps.",
  },
];

const analytics: Item[] = [
  {
    name: "_ga",
    by: "Google Analytics",
    purpose: "Tells one visitor from another so we can count visitors.",
    kept: "2 years",
  },
  {
    name: `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, "")}`,
    by: "Google Analytics",
    purpose: "Keeps track of the current visit.",
    kept: "2 years",
  },
  {
    name: "arc_an_vid, arc_an_ft",
    by: "ARC AI (local storage)",
    purpose: "Recognises a returning visitor and remembers how they first found us.",
    kept: "Until you withdraw consent or clear your browser's storage",
  },
  {
    name: "arc_an_sid and other arc_an_ entries",
    by: "ARC AI (local storage)",
    purpose:
      "Group the pages of one visit and measure time on the site. If you send us an enquiry, it is linked to that visit so we know what brought you here.",
    kept: "A visit ends after 30 minutes without activity",
  },
  {
    name: "arc_attribution",
    by: "ARC AI (session storage)",
    purpose:
      "Remembers how you arrived on this visit (for example, from an ad) so it can be included with an enquiry you send.",
    kept: "Until you close the tab",
  },
];

const marketing: Item[] = [
  {
    name: "_fbp",
    by: "Meta (Facebook and Instagram)",
    purpose: "Shows us whether our ads bring people to the site.",
    kept: "90 days",
  },
  {
    name: "_fbc",
    by: "Meta (Facebook and Instagram)",
    purpose: "Set when you arrive by clicking one of our ads on Facebook or Instagram, to connect the visit to that ad.",
    kept: "90 days",
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="home-cream min-h-screen">
      <Navbar />
      <Breadcrumbs
        tone="cream"
        items={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy" },
        ]}
      />
      <article className="mx-auto max-w-[800px] px-6 pb-32 pt-10 text-ink md:pt-12 lg:pb-40">
        <h1 className="mb-4 text-4xl font-medium tracking-[-0.035em] md:text-5xl">Cookie Policy</h1>
        <p className="mb-12 text-ink-mute">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-10 leading-relaxed">
          <p>
            This policy explains the cookies and similar technologies used on www.arcai.agency by{" "}
            {company.legalName} (registration number {company.registrationNumber}), Colombo, Sri Lanka: what
            each one does, how long it is kept and how you can control it. Please read it together with our{" "}
            <a href="/privacy-policy" className="text-ember-deep underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>

          <Section title="1. What cookies are">
            <p>
              Cookies are small text files that a website stores in your browser. Websites also use similar
              technologies, such as local storage and session storage, which work in much the same way. In this
              policy, &ldquo;cookies&rdquo; covers all of them.
            </p>
          </Section>

          <Section title="2. Your choice">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                When you first visit, we ask whether you accept cookies. Until you choose, only the essential item
                below is used. If you reject cookies, or ignore the banner, nothing else is turned on.
              </li>
              <li>
                You can accept all cookies, reject all of them, or choose by category. Rejecting is as easy as
                accepting, and the site works the same either way.
              </li>
              <li>
                You can change your mind at any time with &ldquo;Cookie settings&rdquo; at the bottom of every page,
                or with the button below. If you withdraw consent, we delete the cookies our site set and reload the
                page without them.
              </li>
              <li>
                We ask again after {Math.round(CONSENT_MAX_AGE_DAYS / 30)} months, or sooner if we start using a new
                kind of cookie.
              </li>
            </ul>
            <CookieSettingsButton className="cut-btn [--cut:10px] [--cut-line:#1B1A17] mt-5 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/5" />
          </Section>

          <Section title="3. The cookies we use">
            <CookieGroup
              title="Essential (always on)"
              intro="Needed for the site to work as you asked. These are not used to track you."
              items={essential}
            />
            <CookieGroup
              title="Analytics (only with your consent)"
              intro="Help us understand which pages are useful and how people find us, so we can improve the site."
              items={analytics}
            />
            <CookieGroup
              title="Marketing (only with your consent)"
              intro="Help us see whether our advertising works. We do not sell your data."
              items={marketing}
            />
          </Section>

          <Section title="4. Services from other companies">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold">Google Maps</strong> on our contact page loads only when you press
                &ldquo;Show map&rdquo;. Google then sets its own cookies, described in{" "}
                <ExternalLink href="https://policies.google.com/technologies/cookies">Google&apos;s cookie policy</ExternalLink>.
              </li>
              <li>
                <strong className="font-semibold">Calendly</strong> provides our booking window. It loads only when
                you choose to book a call, and Calendly may then set its own cookies, described in{" "}
                <ExternalLink href="https://calendly.com/legal/privacy-notice">Calendly&apos;s privacy notice</ExternalLink>.
              </li>
              <li>
                Google Analytics and the Meta pixel are run by Google and Meta. Their own policies explain how they
                handle data:{" "}
                <ExternalLink href="https://policies.google.com/privacy">Google</ExternalLink>,{" "}
                <ExternalLink href="https://www.facebook.com/privacy/policy/">Meta</ExternalLink>.
              </li>
            </ul>
          </Section>

          <Section title="5. Controlling cookies in your browser">
            <p>
              Your browser&apos;s settings also let you block or delete cookies. If you block the essential item, we
              cannot remember your choice and will ask again on your next visit. Google offers a{" "}
              <ExternalLink href="https://tools.google.com/dlpage/gaoptout">browser add-on</ExternalLink> that stops
              Google Analytics on every site you visit.
            </p>
          </Section>

          <Section title="6. Changes to this policy">
            <p>
              When we change this policy we update the date at the top. If we start using a new kind of cookie, we ask
              for your consent again before using it.
            </p>
          </Section>

          <Section title="7. Contact us">
            <p>
              Questions about cookies or your data:{" "}
              <a href={`mailto:${company.email}`} className="text-ember-deep underline underline-offset-2">
                {company.email}
              </a>
              .
            </p>
          </Section>
        </div>
      </article>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-medium tracking-[-0.035em] text-ink">{title}</h2>
      {children}
    </section>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-ember-deep underline underline-offset-2">
      {children}
    </a>
  );
}

/** A category of cookies, one card per item (a table would not fit a phone). */
function CookieGroup({ title, intro, items }: { title: string; intro: string; items: Item[] }) {
  return (
    <div className="mt-6 first:mt-0">
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm text-ink-soft">{intro}</p>
      <dl className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
        {items.map((item) => (
          <div key={item.name} className="grid gap-1 py-3 text-sm sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:gap-4">
            <dt className="break-words font-mono text-[13px] text-ink">{item.name}</dt>
            <dd className="text-ink-soft">
              <span className="block">{item.purpose}</span>
              <span className="mt-1 block text-xs text-ink-mute">
                Set by {item.by} · Kept for: {item.kept}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
