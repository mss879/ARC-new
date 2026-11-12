// Server Component - Optimized for SEO
import { Metadata } from "next";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";
import PreloaderProvider from "@/components/PreloaderProvider";
import HomeFaq from "@/components/home/HomeFaq";
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
      <SchemaOrg type="home" faq={homeFaq} />

      {/* The page's <h1> is the headline people read, inside <Hero />. */}

      {/* Page-level preloader: covers everything (navbar, hero, all sections)
          from the first paint and holds until the homepage assets are loaded */}
      <PreloaderProvider>
        <Navbar />

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

        <SystemsPreviews />

        {/* Below the fold - dynamically imported and lazy loaded */}
        <ServicesSection />
        <ClientsSection />
        <PortfolioCarousel />
        <Process />

        {/* The guide and location links that used to sit here as a "Locations
            We Serve" grid are now in the footer, on every page. */}
        <HomeFaq />

          <CTA />
        </article>

        <Footer />
      </PreloaderProvider>
    </div>
  );
}
