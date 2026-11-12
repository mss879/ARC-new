
import { Metadata } from "next";
import BrandingContent from "./content";

export const metadata: Metadata = {
  title: "Branding Agency in Sri Lanka | ARC AI",
  description: "Build a powerful brand identity with ARC AI. Expert branding agency serving Sri Lanka — logo design, brand strategy, visual identity & guidelines.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Branding Services | ARC AI",
    description: "Build a brand that stands out with ARC AI's expert branding services.",
    url: "https://www.arcai.agency/services/branding",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Branding Services",
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
    title: "Branding Services | ARC AI",
    description: "Build a brand that stands out with ARC AI's expert branding services.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/branding"
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

export default function BrandingPage() {
  return <BrandingContent />;
}
