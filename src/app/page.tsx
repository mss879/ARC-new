// Server Component - Optimized for SEO
import { Metadata } from "next";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import PreloaderProvider from "@/components/PreloaderProvider";
import HomeFaq from "@/components/home/HomeFaq";
import ProblemsSection from "@/components/home/ProblemsSection";
import TryAgents from "@/components/home/TryAgents";
import InControl from "@/components/home/InControl";
import YourData from "@/components/home/YourData";
import GuidesSection from "@/components/home/GuidesSection";
import { SystemsIntro, SystemsPreviews } from "@/components/home/SystemsShowcase";
import { homeFaq } from "@/content/home-faq";

// Dynamic imports for below-the-fold components (reduce initial bundle)
// Using loading fallback to prevent layout shift
const WhyUs = dynamic(() => import("@/components/WhyUs"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const ClientsSection = dynamic(() => import("@/components/ClientsSection"));
const PortfolioCarousel = dynamic(() => import("@/components/PortfolioCarousel"));
const Process = dynamic(() => import("@/components/Process"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));


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
  <div className="w-full h-96" aria-busy="true" aria-label="Loading section" />
);

export default function HomePage() {
  return (
    // .home-cream turns on the grey-cream theme for this page only (see
    // "Home page: grey-cream theme" in src/index.css). The header, the
    // logo ring and the closing block are shared with the dark pages, so each
    // is told which look to use.
    <div className="home-cream min-h-screen">
      {/* Start the hero video download as soon as the HTML arrives — before any
          JavaScript loads — so it finishes while the preloader plays. React
          hoists this into <head>; crossOrigin="anonymous" makes it match the
          fetch() in Hero so the browser reuses the same download. */}
      <link
        rel="preload"
        as="fetch"
        href="/hero-arc-ai-glass-1080p.mp4"
        crossOrigin="anonymous"
      />

      {/* Schema.org Structured Data for SEO */}
      <SchemaOrg type="home" faq={homeFaq} />

      {/* The page's <h1> is the headline people read, inside <Hero />. */}

      {/* Page-level preloader: covers everything (navbar, hero, all sections)
          from the first paint and holds until the homepage assets are loaded */}
      <PreloaderProvider>
        <Navbar lightTop={false} />

        {/* Main content wrapper with semantic HTML */}
        <article>
        {/* Above the fold - load immediately */}
        <Hero />

        {/* What ARC AI builds: five systems, each with a live demo. This took
            the place of six generic blocks (why choose us, problem, solution,
            AI features, AI services, integrations). The services list is kept,
            after Why Us, and now covers every service. */}
        <SystemsIntro />

        {/* Third on the page, straight after "What we build". */}
        <WhyUs />

        {/* The everyday problems, each linking down to the preview of the
            system that fixes it, so the previews read as the answer. */}
        <ProblemsSection />

        <SystemsPreviews />

        {/* Straight after watching the previews: try a real agent while the
            interest is highest. Then the doubt that follows ("what if it gets
            it wrong?") is answered at once. */}
        <TryAgents />
        <InControl />

        {/* Below the fold - dynamically imported and lazy loaded */}
        <ServicesSection />
        <ClientsSection tone="cream" />
        <PortfolioCarousel />
        <Process />

        {/* Near the decision: ownership and data, which is when lock-in
            worries surface. Then the guides, a next step for anyone still
            comparing, before the page ends on questions and the call to
            action. */}
        <YourData />
        <GuidesSection />

        {/* The guide and location links that used to sit here as a "Locations
            We Serve" grid are now in the footer, on every page. */}
        <HomeFaq />

          <CTA tone="cream" />
        </article>

        <Footer tone="dark" />
      </PreloaderProvider>
    </div>
  );
}
