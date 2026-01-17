// Server Component - Optimized for SEO
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import ContactForm from "@/components/ContactForm";

// SEO Metadata for Contact Page
export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | ARC Digital Canvas",
  description: "Ready to transform your business with AI? Contact ARC Digital Canvas for web design, AI automation, branding, and digital marketing services in UK and Sri Lanka.",
  keywords: [
    "contact ARC Digital Canvas", "get in touch", "request quote",
    "AI agency contact UK", "web design inquiry", "digital marketing contact",
    "AI automation consultation", "branding inquiry", "schedule call",
    "digital agency contact Sri Lanka", "project inquiry"
  ],
  openGraph: {
    title: "Contact ARC Digital Canvas - Get in Touch",
    description: "Ready to transform your business with AI? Contact us for web design, AI automation, and digital marketing services.",
    url: "https://arcai.agency/contact",
    type: "website",
    images: [{
      url: "https://arcai.agency/shareable-img.png",
      width: 1200,
      height: 630,
      alt: "Contact ARC Digital Canvas"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ARC Digital Canvas",
    description: "Get in touch for AI-powered digital solutions",
    images: ["https://arcai.agency/shareable-img.png"]
  },
  alternates: {
    canonical: "https://arcai.agency/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[rgb(10,10,10)] dark">
      <SchemaOrg
        type="contact"
        pageTitle="Contact Us"
        pageDescription="Ready to transform your business with AI? Contact ARC Digital Canvas for web design, AI automation, branding, and digital marketing services."
        pageUrl="https://arcai.agency/contact"
      />
      <Navbar />

      {/* Contact Section */}
      <section className="pt-48 md:pt-56 lg:pt-64 pb-20 px-6 lg:px-12">
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
                  Have a project in mind? We'd love to hear about it. Let's create something great together!
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
                    rel="noopener"
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
          <div className="mt-20 mb-12">
            <div className="text-center mb-8">
              <p className="text-sm text-[rgb(119,119,119)] uppercase tracking-wider">
                TRUSTED BY 100+ CLIENTS
              </p>
            </div>

            <div className="relative overflow-hidden">
              {/* Gradient masks on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[rgb(10,10,10)] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[rgb(10,10,10)] to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling container */}
              <div className="flex gap-12 animate-scroll-trust">
                {/* First set of logos */}
                {Array.from({ length: 21 }, (_, i) => (
                  <div
                    key={`logo-1-${i}`}
                    className="flex-shrink-0 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center hover:border-white/20 transition-all duration-300"
                  >
                    <img
                      src={`/trust${i + 1}.png`}
                      alt={`Client ${i + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {Array.from({ length: 21 }, (_, i) => (
                  <div
                    key={`logo-2-${i}`}
                    className="flex-shrink-0 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center hover:border-white/20 transition-all duration-300"
                  >
                    <img
                      src={`/trust${i + 1}.png`}
                      alt={`Client ${i + 1}`}
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
          <div className="space-y-12">
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
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                {/* Reflection effect */}
                <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none"></div>
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
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                {/* Reflection effect */}
                <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none"></div>
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
                      Available 9 AM - 6 PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="group relative space-y-4 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                {/* Reflection effect */}
                <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none"></div>
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
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                {/* Reflection effect */}
                <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:opacity-75 opacity-50 transition-opacity duration-500 pointer-events-none"></div>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

