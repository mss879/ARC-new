
import { Metadata } from "next";
import AIContentGenerationContent from "./content";

export const metadata: Metadata = {
  title: "AI Content Generation Services in Sri Lanka | ARC AI",
  description: "Scale content creation with AI in Sri Lanka. ARC AI generates SEO articles, ad copy, social content & more — aligned with your brand, at scale.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Content Generation Services | ARC AI",
    description: "Generate high-quality, on-brand content at scale with ARC AI.",
    url: "https://www.arcai.agency/services/ai-content-generation",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Content Generation Services",
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
    title: "AI Content Generation Services | ARC AI",
    description: "Generate high-quality, on-brand content at scale with ARC AI.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-content-generation"
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

export default function AIContentGenerationPage() {
  return <AIContentGenerationContent />;
}
