// Server Component - Optimized for SEO
import { Metadata } from "next";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

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
const ClientsSection = dynamic(() => import("@/components/ClientsSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const Features = dynamic(() => import("@/components/Features"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const AIServices = dynamic(() => import("@/components/AIServices"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const ProblemSection = dynamic(() => import("@/components/ProblemSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const SolutionSection = dynamic(() => import("@/components/SolutionSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const Integrations = dynamic(() => import("@/components/Integrations"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const Process = dynamic(() => import("@/components/Process"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const CTA = dynamic(() => import("@/components/CTA"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
  loading: () => <SectionLoader />
});

// Client-only component - imported separately
import FloatingActions from "@/components/FloatingActions";

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "AI Automation and Digital Marketing Company UK | Sri Lanka | ARC AI",
  description: "Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services. Transform your business with cutting-edge technology.",
  keywords: [
    "AI digital agency UK", "web design agency London", "AI automation UK", "digital marketing UK",
    "AI chatbot development UK", "web development agency UK", "branding agency UK",
    "AI digital agency Sri Lanka", "web design agency Colombo", "digital marketing Sri Lanka",
    "AI web design", "artificial intelligence marketing", "chatbot development", "workflow automation"
  ],
  openGraph: {
    title: "ARC AI - AI Automation and Digital Marketing Company",
    description: "Leading AI automation and digital marketing company in UK & Sri Lanka. Transform your business with cutting-edge web design, AI automation, and digital marketing.",
    url: "https://arcai.agency",
    type: "website",
    images: [
      {
        url: "https://arcai.agency/-shareable-img.png",
        width: 1200,
        height: 630,
        alt: "ARC AI - AI Automation and Digital Marketing Company"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ARC AI - AI Automation and Digital Marketing Company",
    description: "Leading AI automation and digital marketing company in UK & Sri Lanka",
    images: ["https://arcai.agency/-shareable-img.png"]
  },
  alternates: {
    canonical: "https://arcai.agency"
  }
};

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-black">
    <div className="animate-pulse text-white/60">Loading...</div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Schema.org Structured Data for SEO */}
      <SchemaOrg type="home" />

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white focus:top-4 focus:left-4"
      >
        Skip to main content
      </a>

      <Navbar />

      {/* Main content wrapper with semantic HTML */}
      <main id="main-content" role="main">
        {/* Above the fold - load immediately */}
        <Hero />

        {/* Below the fold - dynamically imported and lazy loaded */}
        <WhyUs />
        <Benefits />
        <ClientsSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <Features />
        <AIServices />
        <Integrations />
        <Process />
        <CTA />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
