// Server Component - Optimized for SEO
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { clientLogos } from "@/lib/client-logos";
import StoreLocator from "@/components/StoreLocator";

// SEO Metadata for Contact Page
export const metadata: Metadata = {
  title: "Contact ARC AI | Top AI Company Sri Lanka & UK — Get a Free Quote",
  description: "Contact ARC AI — top AI company in Sri Lanka & UK. Free consultation for AI automation, chatbots, web design & digital marketing.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Contact ARC AI - AI Agency UK & Sri Lanka",
    description: "Ready to transform your business with AI? Contact ARC AI for web design, AI automation, and digital marketing services in UK and Sri Lanka.",
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
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcaiagency",
    creator: "@arcaiagency",
    title: "Contact ARC AI",
    description: "Get in touch for AI-powered digital solutions",
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[rgb(10,10,10)] dark">
      <SchemaOrg
        type="contact"
        pageTitle="Contact Us"
        pageDescription="Ready to transform your business with AI? Contact ARC AI for web design, AI automation, branding, and digital marketing services."
        pageUrl="https://www.arcai.agency/contact"
      />
      <Navbar />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Contact" }
      ]} />

      <main>

        {/* Contact Section */}
        <section className="pt-8 md:pt-12 lg:pt-16 pb-20 px-6 lg:px-12" aria-label="Contact form">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 xl:gap-32">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Title */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                      (CONTACT US)
                    </p>
                  </div>

                  <div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white uppercase leading-[0.9] tracking-tight">
                      LET'S
                      <br />
                      WORK
                      <br />
                      TOGETHER
                    </h1>
                  </div>
                </div>

                {/* Description */}
                <div className="max-w-md">
                  <p className="text-base text-[rgb(119,119,119)] leading-relaxed">
                    Have a project in mind? As one of the <a href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">top AI companies in Sri Lanka</a> and the UK, we deliver AI automation, web design, and digital marketing that drives real results. Let&apos;s create something great together!
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="space-y-8">
                <ContactForm />

                {/* Book a Call */}
                <div className="text-left pl-2">
                  <p className="text-base text-[rgb(119,119,119)]">
                    Prefer to hop on a call?{" "}
                    <a
                      href="https://cal.com"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      aria-label="Book a call with ARC AI (opens in new tab)"
                      className="text-[rgb(255,73,37)] hover:text-[rgb(255,93,57)] underline transition-colors font-medium"
                    >
                      Book a call
                    </a>{" "}
                    instead.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Logos Carousel */}
            <div className="mt-20 mb-12" role="region" aria-label="Trusted by clients">
              <div className="text-center mb-8">
                <p className="text-sm text-[rgb(119,119,119)] uppercase tracking-wider">
                  TRUSTED BY 100+ CLIENTS
                </p>
              </div>

              <div className="relative overflow-hidden">
                {/* Gradient masks on sides */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[rgb(10,10,10)] to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[rgb(10,10,10)] to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

                {/* Scrolling container */}
                <div className="flex gap-12 animate-scroll-trust">
                  {/* First set of logos */}
                  {clientLogos.map((logo, i) => (
                    <div
                      key={`logo-1-${i}`}
                      className={`flex-shrink-0 w-24 h-24 rounded-full ${['care-arena-ceylon', 'essential'].includes(logo.file) ? 'bg-black' : 'bg-white'} backdrop-blur-sm border ${['care-arena-ceylon', 'essential'].includes(logo.file) ? 'border-white/10' : 'border-black/5 shadow-sm'} p-4 flex items-center justify-center hover:scale-105 transition-all duration-300`}
                    >
                      <img
                        src={`/logos/${logo.file}.webp`}
                        alt={`${logo.name} logo - ARC AI client`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {clientLogos.map((logo, i) => (
                    <div
                      key={`logo-2-${i}`}
                      className={`flex-shrink-0 w-24 h-24 rounded-full ${['care-arena-ceylon', 'essential'].includes(logo.file) ? 'bg-black' : 'bg-white'} backdrop-blur-sm border ${['care-arena-ceylon', 'essential'].includes(logo.file) ? 'border-white/10' : 'border-black/5 shadow-sm'} p-4 flex items-center justify-center hover:scale-105 transition-all duration-300`}
                    >
                      <img
                        src={`/logos/${logo.file}.webp`}
                        alt={`${logo.name} logo - ARC AI client`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-24 mb-16">
              <div className="h-px w-full bg-[rgb(40,40,40)]"></div>
            </div>

            {/* Visit Us Section */}
            <div className="space-y-12" role="region" aria-label="Contact information">
              {/* Title */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(202,202,202)] uppercase tracking-tight">
                  Contact Information
                </h2>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Email Address */}
                <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" aria-hidden="true"></div>
                  {/* Reflection effect */}
                  <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                        (EMAIL ADDRESS)
                      </p>
                    </div>
                    <div>
                      <a
                        href="mailto:support@arcai.agency"
                        className="text-lg text-[rgb(255,73,37)] hover:text-[rgb(255,93,57)] transition-colors leading-relaxed block"
                      >
                        support@arcai.agency
                      </a>
                      <p className="text-sm text-[rgb(119,119,119)] mt-2">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" aria-hidden="true"></div>
                  {/* Reflection effect */}
                  <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                        (PHONE NUMBERS)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <a
                        href="tel:+447466368427"
                        className="text-lg text-[rgb(202,202,202)] hover:text-white transition-colors leading-relaxed block"
                      >
                        +44 7466 368427 (UK)
                      </a>
                      <a
                        href="tel:+94771852522"
                        className="text-lg text-[rgb(202,202,202)] hover:text-white transition-colors leading-relaxed block"
                      >
                        +94 771852522 (Sri Lanka)
                      </a>
                      <p className="text-sm text-[rgb(119,119,119)] mt-2">
                        Available 9 AM - 6 PM GMT (UK) / 2:30 PM - 11:30 PM IST (Sri Lanka)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" aria-hidden="true"></div>
                  {/* Reflection effect */}
                  <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                        (OFFICE LOCATIONS)
                      </p>
                    </div>
                    <div>
                      <p className="text-lg text-[rgb(202,202,202)] leading-relaxed">
                        Colombo 4, Sri Lanka
                      </p>
                      <p className="text-lg text-[rgb(202,202,202)] leading-relaxed mt-2">
                        Birmingham, UK
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" aria-hidden="true"></div>
                  {/* Reflection effect */}
                  <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                        (BUSINESS HOURS)
                      </p>
                    </div>
                    <div>
                      <p className="text-lg text-[rgb(202,202,202)] leading-relaxed">
                        Monday - Friday: 9 AM - 6 PM
                      </p>
                      <p className="text-lg text-[rgb(202,202,202)] leading-relaxed mt-2">
                        Weekend: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp AI Agent */}
                <div className="group relative space-y-4 bg-gradient-to-br from-green-500/[0.05] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 hover:border-green-500/40 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden md:col-span-2">
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-50 pointer-events-none" aria-hidden="true"></div>
                  {/* Reflection effect */}
                  <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-green-500/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
                  {/* Content */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-green-400 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        WhatsApp AI Agent
                      </p>
                      <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                        Speak to our AI Agent
                      </h3>
                      <p className="text-sm md:text-base text-[rgb(160,160,160)] max-w-xl">
                        Want to speak to our AI agent on WhatsApp? Click below to start a conversation instantly and get immediate answers to your queries.
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://wa.me/94764662384"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg shadow-green-600/20"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.91 1.505 5.599 0 10.154-4.55 10.158-10.15.002-2.71-1.05-5.259-2.961-7.17C16.84 1.427 14.29 1.372 11.582 1.372c-5.6 0-10.156 4.549-10.16 10.15-.001 1.882.5 3.719 1.45 5.343l-.973 3.55 3.65-.957zm12.383-7.228c-.33-.165-1.951-.963-2.251-1.073-.3-.109-.518-.165-.736.165-.218.329-.844 1.073-1.036 1.293-.19.22-.382.247-.712.082-.33-.165-1.393-.513-2.653-1.637-.98-.874-1.64-1.953-1.832-2.282-.19-.33-.02-.508.145-.671.149-.148.33-.384.495-.576.165-.192.22-.33.33-.549.11-.22.055-.411-.028-.576-.082-.165-.736-1.774-1.009-2.433-.266-.64-.537-.552-.736-.562-.19-.01-.409-.011-.627-.011-.218 0-.573.082-.873.411-.3.33-1.146 1.124-1.146 2.742 0 1.618 1.173 3.181 1.336 3.398.164.218 2.31 3.527 5.596 4.952.782.339 1.393.541 1.869.692.786.25 1.5.215 2.064.13.629-.094 1.951-.798 2.225-1.57.275-.771.275-1.432.193-1.57-.083-.138-.3-.22-.63-.385z" />
                        </svg>
                        +94 76 466 2384
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Locator Section */}
            <div className="mt-20 w-full max-w-[1200px] mx-auto">
              <StoreLocator />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

