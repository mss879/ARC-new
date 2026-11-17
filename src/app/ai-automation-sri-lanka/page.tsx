import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "AI Agency Sri Lanka | Web Design & AI Automation Colombo — ARC AI",
  description: "ARC AI is an AI automation and software company based in Colombo. Custom AI chatbots, workflow automation, smart websites, and digital marketing for businesses across Sri Lanka.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Agency Sri Lanka — Web Design & AI Automation | ARC AI",
    description: "An AI agency in Colombo. Custom AI chatbots, workflow automation, SEO-optimised websites, and data-driven digital marketing.",
    url: "https://www.arcai.agency/ai-automation-sri-lanka",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI — Sri Lanka AI Agency",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency Sri Lanka — ARC AI",
    description: "Custom AI chatbots, workflow automation, and web design for Sri Lankan businesses.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/ai-automation-sri-lanka",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SriLankaPage() {
  return (
    <div className="home-cream min-h-screen bg-transparent text-ink">
      <SchemaOrg
        type="services"
        pageTitle="AI Agency Sri Lanka"
        pageDescription="ARC AI is an AI automation and software company based in Colombo."
        pageUrl="https://www.arcai.agency/ai-automation-sri-lanka"
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Agency Sri Lanka" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-deep">
            Colombo, Sri Lanka
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.035em] leading-[1.05]">
            AI Automation &{" "}
            <span className="text-ember-ink">
              Web Design Agency
            </span>{" "}
            in Sri Lanka
          </h1>
          <p className="text-xl text-ink-soft max-w-3xl leading-relaxed">
            ARC AI is Sri Lanka&apos;s premier AI automation and web design agency,
            headquartered in Colombo. We help Sri Lankan businesses — from
            ambitious startups to established enterprises — leverage cutting-edge
            artificial intelligence, smart website development, and data-driven
            marketing to grow faster, reduce costs, and compete globally.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact"
              className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] px-8 py-4 bg-ember text-ink font-semibold hover:scale-105 transition-transform"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="cut-btn [--cut:12px] px-8 py-4 [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold hover:[--cut-line:rgba(27,26,23,0.3)] transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-12 border-t border-ink/10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.035em]">
              AI & Digital Services for Sri Lankan Businesses
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              Sri Lanka&apos;s digital economy is growing rapidly, and businesses that adopt AI early will have a decisive competitive advantage. ARC AI brings world-class AI solutions, smart website development, and digital marketing expertise to Sri Lankan businesses across Colombo, Kandy, Galle, and beyond. Learn why ARC AI is recognised as one of the <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">top AI companies in Sri Lanka</Link>, and explore our comprehensive guide to all <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">software companies in Sri Lanka</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Smart Websites for Sri Lanka</h3>
              <p className="text-ink-soft leading-relaxed">
                We build Smart Websites — AI-powered websites that go beyond static brochures. Our Sri Lankan clients get websites that actively engage visitors with AI chatbots, capture leads automatically, answer customer queries in Sinhala, Tamil, or English, and provide real-time analytics. Built on Next.js and React for blazing-fast performance and top Google rankings.
              </p>
              <Link href="/services/web-design-development" className="text-ember-deep text-sm font-medium hover:underline">
                Learn more about Smart Websites →
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI Chatbots in Sinhala & Tamil</h3>
              <p className="text-ink-soft leading-relaxed">
                Our AI chatbots for Sri Lankan businesses operate 24/7 in Sinhala, Tamil, and English — handling customer inquiries, booking appointments, qualifying leads, and processing orders across WhatsApp, Facebook Messenger, and your website. Reduce customer service costs by up to 60% while improving response times from hours to seconds.
              </p>
              <Link href="/services/ai-chatbots" className="text-ember-deep text-sm font-medium hover:underline">
                Learn more about AI Chatbots →
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI Workflow Automation</h3>
              <p className="text-ink-soft leading-relaxed">
                Automate your business processes with intelligent AI workflows tailored to Sri Lankan industries. From automated invoice processing and inventory management to CRM integrations and WhatsApp marketing automation, our solutions save Sri Lankan businesses 20+ hours per week while eliminating human error.
              </p>
              <Link href="/services/ai-automated-workflows" className="text-ember-deep text-sm font-medium hover:underline">
                Learn more about AI Automation →
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Digital Marketing & Branding</h3>
              <p className="text-ink-soft leading-relaxed">
                Our data-driven digital marketing services are designed specifically for the Sri Lankan market. We offer social media management across Facebook, Instagram, TikTok, and LinkedIn, Google Ads optimisation, SEO for local and international search, content marketing, and complete brand identity design. Every campaign is measured, optimised, and reported on.
              </p>
              <Link href="/services/social-media" className="text-ember-deep text-sm font-medium hover:underline">
                Learn more about Digital Marketing →
              </Link>
            </div>
          </div>

          {/* Why Sri Lankan businesses choose ARC AI */}
          <div className="space-y-8">
            <h2 className="text-3xl font-medium tracking-[-0.035em]">
              Why Sri Lankan Businesses Choose ARC AI
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
                <h3 className="text-lg font-semibold">Local + Global Expertise</h3>
                <p className="text-ink-soft leading-relaxed">
                  ARC AI works from Colombo, so it knows the Sri Lankan market first-hand. Clients overseas are served remotely by the same team. We understand Sri Lanka&apos;s unique digital landscape, consumer behaviour, and regulatory environment.
                </p>
              </div>
              <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
                <h3 className="text-lg font-semibold">Multilingual AI Solutions</h3>
                <p className="text-ink-soft leading-relaxed">
                  Our AI solutions work in Sinhala, Tamil, and English — ensuring your chatbots, content, and marketing reach all Sri Lankan audiences. We build culturally aware AI that understands local context, slang, and communication preferences.
                </p>
              </div>
              <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
                <h3 className="text-lg font-semibold">Competitive Pricing</h3>
                <p className="text-ink-soft leading-relaxed">
                  ARC AI delivers world-class AI and web solutions at competitive Sri Lankan rates. Our dual-market model means you get UK-quality work at prices that make sense for the Sri Lankan market. We offer flexible payment plans and packages for all business sizes.
                </p>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.035em]">
              Industries We Serve in Sri Lanka
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Tourism & Hospitality",
                "Real Estate",
                "E-Commerce",
                "Healthcare",
                "Education",
                "Manufacturing",
                "Fintech",
                "Food & Beverage",
                "Logistics",
                "Retail",
                "Legal Services",
                "Construction",
              ].map((industry) => (
                <div
                  key={industry}
                  className="cut-card [--cut:12px] relative p-4 [--cut-line:rgba(27,26,23,0.1)] text-center"
                >
                  <span className="text-sm text-ink-soft">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.035em]">
              Frequently Asked Questions — AI Agency Sri Lanka
            </h2>
            <div className="space-y-4">
              <details className="cut-card [--cut:12px] relative group [--cut-line:rgba(27,26,23,0.1)] p-6" open>
                <summary className="text-ink font-medium cursor-pointer list-none flex items-center justify-between">
                  Does ARC AI have an office in Sri Lanka?
                  <span className="text-ink-mute group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-ink-soft mt-4 leading-relaxed">
                  Yes. ARC AI has its Sri Lankan office in Colombo. Our local team of AI engineers, web developers, and digital marketers work with Sri Lankan businesses in-person and remotely. We serve clients across Colombo, Kandy, Galle, Negombo, and all other cities in Sri Lanka.
                </p>
              </details>
              <details className="cut-card [--cut:12px] relative group [--cut-line:rgba(27,26,23,0.1)] p-6">
                <summary className="text-ink font-medium cursor-pointer list-none flex items-center justify-between">
                  Can ARC AI build a website in Sinhala or Tamil?
                  <span className="text-ink-mute group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-ink-soft mt-4 leading-relaxed">
                  Yes. We build multilingual websites that support Sinhala, Tamil, and English with proper RTL/LTR rendering, Unicode fonts, and SEO optimisation for each language. Our AI chatbots also support multilingual conversations in all three languages.
                </p>
              </details>
              <details className="cut-card [--cut:12px] relative group [--cut-line:rgba(27,26,23,0.1)] p-6">
                <summary className="text-ink font-medium cursor-pointer list-none flex items-center justify-between">
                  How much does a website cost in Sri Lanka with ARC AI?
                  <span className="text-ink-mute group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-ink-soft mt-4 leading-relaxed">
                  Website pricing varies based on complexity, features, and scale. We offer competitively priced packages tailored to the Sri Lankan market, from simple landing pages to complex e-commerce platforms and AI-powered smart websites. Contact us for a free consultation and customised quote for your project.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <CTA tone="cream" />
      <Footer tone="dark" />
    </div>
  );
}
