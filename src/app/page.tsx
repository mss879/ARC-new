// Server Component - Optimized for SEO
import { Metadata } from "next";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import PreloaderProvider from "@/components/PreloaderProvider";

// Dynamic imports for below-the-fold components (reduce initial bundle)
// Using loading fallback to prevent layout shift
const WhyUs = dynamic(() => import("@/components/WhyUs"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const Benefits = dynamic(() => import("@/components/Benefits"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const ClientsSection = dynamic(() => import("@/components/ClientsSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const Features = dynamic(() => import("@/components/Features"));
const AIServices = dynamic(() => import("@/components/AIServices"));
const ProblemSection = dynamic(() => import("@/components/ProblemSection"));
const PortfolioCarousel = dynamic(() => import("@/components/PortfolioCarousel"));
const SolutionSection = dynamic(() => import("@/components/SolutionSection"));
const Integrations = dynamic(() => import("@/components/Integrations"));
const Process = dynamic(() => import("@/components/Process"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

// Client-only component - imported separately

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "ARC AI | AI Automation & Web Design Agency UK & Sri Lanka",
  description: "ARC AI: Leading AI automation & web design agency in UK & Sri Lanka. Expert AI chatbots, automation workflows, branding & digital marketing. Get a free quote.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI - AI Automation and Digital Marketing Company",
    description: "Leading AI automation and digital marketing company in UK & Sri Lanka. Transform your business with cutting-edge web design, AI automation, and digital marketing.",
    url: "https://www.arcai.agency",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI - AI Automation and Digital Marketing Company",
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
    title: "ARC AI - AI Automation and Digital Marketing Company",
    description: "Leading AI automation and digital marketing company in UK & Sri Lanka",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency"
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

// Loading fallback component — invisible to search engines
const SectionLoader = () => (
  <div className="w-full h-96 bg-black" aria-busy="true" aria-label="Loading section" />
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Start the hero video download as soon as the HTML arrives — before any
          JavaScript loads — so it finishes while the preloader plays. React
          hoists this into <head>; crossOrigin="anonymous" makes it match the
          fetch() in Hero so the browser reuses the same download. */}
      <link
        rel="preload"
        as="fetch"
        href="/Recreate_video_with_logo_202605251335.mp4"
        crossOrigin="anonymous"
      />

      {/* Schema.org Structured Data for SEO */}
      <SchemaOrg type="home" showFAQ={true} />

      {/* SEO H1 — keyword-rich, visible, single H1 for the entire page */}
      <h1 className="sr-only">ARC AI — AI Automation & Web Design Agency in UK & Sri Lanka | Top AI Company in Sri Lanka</h1>

      {/* Page-level preloader: covers everything (navbar, hero, all sections)
          from the first paint and holds until the homepage assets are loaded */}
      <PreloaderProvider>
        <Navbar />

        {/* Main content wrapper with semantic HTML */}
        <article>
        {/* Above the fold - load immediately */}
        <Hero />

        {/* Below the fold - dynamically imported and lazy loaded */}
        <WhyUs />
        <Benefits />
        <ClientsSection />
        <ProblemSection />
        <PortfolioCarousel />
        <SolutionSection />
        <ServicesSection />
        <Features />
        <AIServices />
        <Integrations />
        <Process />

        {/* Internal link equity — funnels authority to pillar pages */}
        <section className="relative bg-black py-24 px-6 lg:px-12" aria-label="Locations we serve">
          <div className="max-w-5xl mx-auto">

            {/* Location pages — internal link equity funnel */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Locations We Serve
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/ai-agency-birmingham" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">AI Agency Birmingham</p>
                  <p className="text-sm text-zinc-400 mt-1">AI automation, web design & digital marketing in Birmingham, UK.</p>
                </a>
                <a href="/ai-automation-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">AI Automation Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">AI automation & web design services for businesses across Sri Lanka.</p>
                </a>
                <a href="/ai-companies-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">Top AI Companies in Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">Discover why ARC AI is the #1 AI company in Sri Lanka for 2026.</p>
                </a>
                <a href="/ai-consultants-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">AI Consultants Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">Expert AI consulting &amp; strategic audits for Sri Lankan enterprises.</p>
                </a>
                <a href="/web-design-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">Web Design Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">Premium web design &amp; development services for businesses in Sri Lanka.</p>
                </a>
                <a href="/software-companies-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">Software Companies Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">Top software development companies in Sri Lanka — 2026 guide.</p>
                </a>
              </div>
            </div>

          </div>
        </section>

          <CTA />
        </article>

        <Footer />
      </PreloaderProvider>
    </div>
  );
}
