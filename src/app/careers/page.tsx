// Server Component - Optimized for SEO
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CareersClient from "./CareersClient";

// SEO Metadata for Careers Page
export const metadata: Metadata = {
  title: "Careers at ARC AI | Join Our Team in Colombo",
  description: "Join ARC AI — explore open positions in AI engineering, web development, design & marketing across Sri Lanka. Build the future of AI.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Careers at ARC AI — Join Our Team",
    description: "Explore open positions at ARC AI. We're looking for talented individuals to help us build the future of AI automation and digital marketing across Sri Lanka.",
    url: "https://www.arcai.agency/careers",
    siteName: "ARC AI Agency",
    images: [{
      url: "https://www.arcai.agency/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Careers at ARC AI - Join Our Team",
      type: "image/jpeg",
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcaiagency",
    creator: "@arcaiagency",
    title: "Careers at ARC AI — Join Our Team",
    description: "Explore open positions at ARC AI. Build the future of AI automation and digital marketing.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/careers"
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.arcai.agency"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Careers",
      "item": "https://www.arcai.agency/careers"
    }
  ]
};

export default function CareersPage() {
  return (
    <div className="home-cream min-h-screen bg-transparent">
      <ScrollToTop />
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main>
        <CareersClient />
      </main>
      <Footer />
    </div>
  );
}
