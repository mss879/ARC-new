// Server Component - Optimized for SEO
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { clientLogos } from "@/lib/client-logos";
import StoreLocator from "@/components/StoreLocator";
import PauseOffscreen from "@/components/home/PauseOffscreen";
import ContactIcon, { type ContactIconKind } from "@/components/contact/ContactIcon";
import { booking, company, hours, office, phones, whatsapp } from "@/content/site-facts";

// SEO Metadata for Contact Page
export const metadata: Metadata = {
  title: "Contact ARC AI | AI Agents & Business Systems, Colombo",
  description: "Talk to ARC AI in Colombo about AI agents, automation, ERP, POS and e-commerce systems. Book a 30-minute call, send a message, or try our WhatsApp AI agent.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Contact ARC AI",
    description: "Talk to ARC AI in Colombo about AI agents, automation and business systems. Book a call, send a message, or try our WhatsApp AI agent.",
    url: "https://www.arcai.agency/contact",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ARC AI",
        type: "image/jpeg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcaiagency",
    creator: "@arcaiagency",
    title: "Contact ARC AI",
    description: "Book a call, send a message, or try our WhatsApp AI agent.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/contact"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Each card in "Contact Information": an orange animated icon, a label and its details.
function InfoCard({ icon, label, children }: { icon: ContactIconKind; label: string; children: React.ReactNode }) {
  return (
    <div className="cream-card flex flex-col gap-6 p-6 lg:p-7">
      <span
        className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ember-ink"
        aria-hidden="true"
      >
        <ContactIcon kind={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-medium text-ink-mute">{label}</p>
        <div className="mt-2 space-y-1 text-lg leading-snug text-ink">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    // .home-cream is the grey-cream theme (see "Home page: grey-cream theme" in
    // src/index.css). This page has no dark hero, so the header is told its
    // top state sits on a light page, and the footer starts as a rounded block.
    <div className="home-cream min-h-screen">
      <SchemaOrg
        type="contact"
        pageTitle="Contact Us"
        pageDescription="Talk to ARC AI in Colombo about AI agents, automation and business systems."
        pageUrl="https://www.arcai.agency/contact"
      />
      <Navbar />
      <Breadcrumbs
        tone="cream"
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]}
      />

      <main>
        {/* Contact Section */}
        <section className="px-4 pb-16 pt-8 md:px-8 md:pt-12 lg:px-20 lg:pb-24 lg:pt-14" aria-label="Contact form">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
              {/* Left Column */}
              <div>
                <h1 className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                  Let&apos;s work
                  <br />
                  <span className="text-ember-ink">together</span>
                </h1>

                <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft lg:mt-9">
                  Tell us what you want to automate or build: an AI agent for WhatsApp or phone calls, an ERP or point-of-sale system, an online store, or something that does not have a name yet. We reply within 24 hours.
                </p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-mute">
                  {company.overseasNote}
                </p>
              </div>

              {/* Right Column - Form */}
              <div className="space-y-6">
                <ContactForm />

                {/* Book a Call */}
                <p className="pl-1 text-base text-ink-soft">
                  Prefer to hop on a call?{" "}
                  <a
                    href={booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book a ${booking.minutes}-minute call with ARC AI (opens in new tab)`}
                    className="font-semibold text-ember-deep underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    Book a {booking.minutes}-minute call
                  </a>{" "}
                  instead.
                </p>
              </div>
            </div>

            {/* Trust Logos Carousel */}
            <div className="mt-20 lg:mt-28" role="region" aria-label="Trusted by clients">
              <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-mute">
                TRUSTED BY
              </p>

              {/* The strip fades out at both ends and stops while off screen. */}
              <PauseOffscreen className="relative mt-8 overflow-hidden mask-gradient">
                <div className="flex gap-10 animate-scroll-trust">
                  {[0, 1].map((copy) =>
                    clientLogos.map((logo, i) => {
                      const dark = ['care-arena-ceylon', 'essential'].includes(logo.file);
                      return (
                        <div
                          key={`logo-${copy}-${i}`}
                          aria-hidden={copy === 1 ? true : undefined}
                          className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border p-3.5 md:h-24 md:w-24 md:p-4 ${dark ? 'border-black bg-black' : 'border-ink/10 bg-white'}`}
                        >
                          <img
                            src={`/logos/${logo.file}.webp`}
                            alt={copy === 0 ? `${logo.name} logo - ARC AI client` : ""}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </PauseOffscreen>
            </div>

            {/* Contact Information */}
            <div className="mt-20 lg:mt-28" role="region" aria-label="Contact information">
              <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-ink md:text-5xl lg:text-6xl">
                Contact <span className="text-ember-ink">Information</span>
              </h2>

              <PauseOffscreen className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4">
                <InfoCard icon="mail" label="Email address">
                  <a
                    href="mailto:support@arcai.agency"
                    className="block break-words font-medium text-ember-deep transition-colors hover:text-ink"
                  >
                    support@arcai.agency
                  </a>
                  <p className="pt-1 text-sm text-ink-mute">We&apos;ll respond within 24 hours</p>
                </InfoCard>

                <InfoCard icon="phone" label="Phone numbers">
                  <a href={`tel:${phones.sriLanka.e164}`} className="block transition-colors hover:text-ember-deep">
                    {phones.sriLanka.display}
                  </a>
                  <a href={`tel:${phones.international.e164}`} className="block transition-colors hover:text-ember-deep">
                    {phones.international.display} <span className="text-base text-ink-mute">(International)</span>
                  </a>
                  <p className="pt-1 text-sm text-ink-mute">{hours.oneLine}</p>
                </InfoCard>

                <InfoCard icon="pin" label="Office">
                  <p>{office.street}</p>
                  <p>
                    {office.district}, {office.country}
                  </p>
                </InfoCard>

                <InfoCard icon="clock" label="Business hours">
                  {hours.periods.map((period) => (
                    <p key={period.label}>
                      {period.label}: {period.time}
                    </p>
                  ))}
                  <p className="pt-1 text-sm text-ink-mute">Sri Lanka time.</p>
                </InfoCard>

                {/* WhatsApp AI Agent: the one dark card */}
                <div className="ink-card flex flex-col justify-between gap-6 p-6 sm:col-span-2 md:flex-row md:items-center lg:p-8 xl:col-span-4">
                  <div className="space-y-3">
                    <p className="flex items-center gap-2 text-sm font-semibold text-[#3BE07E]">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" aria-hidden="true"></span>
                      WhatsApp AI Agent
                    </p>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] text-paper-white md:text-3xl">
                      Speak to our AI Agent
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-paper-white/70">
                      Want to speak to our AI agent on WhatsApp? Click below to start a conversation instantly and get immediate answers to your queries.
                    </p>
                  </div>
                  <a
                    href={whatsapp.agent.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cut-btn [--cut:10px] inline-flex shrink-0 items-center justify-center gap-2.5 bg-[#25D366] px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-[#3BE07E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.91 1.505 5.599 0 10.154-4.55 10.158-10.15.002-2.71-1.05-5.259-2.961-7.17C16.84 1.427 14.29 1.372 11.582 1.372c-5.6 0-10.156 4.549-10.16 10.15-.001 1.882.5 3.719 1.45 5.343l-.973 3.55 3.65-.957zm12.383-7.228c-.33-.165-1.951-.963-2.251-1.073-.3-.109-.518-.165-.736.165-.218.329-.844 1.073-1.036 1.293-.19.22-.382.247-.712.082-.33-.165-1.393-.513-2.653-1.637-.98-.874-1.64-1.953-1.832-2.282-.19-.33-.02-.508.145-.671.149-.148.33-.384.495-.576.165-.192.22-.33.33-.549.11-.22.055-.411-.028-.576-.082-.165-.736-1.774-1.009-2.433-.266-.64-.537-.552-.736-.562-.19-.01-.409-.011-.627-.011-.218 0-.573.082-.873.411-.3.33-1.146 1.124-1.146 2.742 0 1.618 1.173 3.181 1.336 3.398.164.218 2.31 3.527 5.596 4.952.782.339 1.393.541 1.869.692.786.25 1.5.215 2.064.13.629-.094 1.951-.798 2.225-1.57.275-.771.275-1.432.193-1.57-.083-.138-.3-.22-.63-.385z" />
                    </svg>
                    +94 76 466 2384
                  </a>
                </div>
              </PauseOffscreen>
            </div>

            {/* Office map */}
            <div className="mt-16 lg:mt-20">
              <StoreLocator />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
