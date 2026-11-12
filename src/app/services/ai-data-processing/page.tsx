import { Metadata } from "next";
import AIDataProcessingContent from "./content";

export const metadata: Metadata = {
  title: "AI Data Processing in Sri Lanka | ARC AI",
  description: "Intelligently extract clean data from messy PDFs, receipts, and emails directly into your database using NLP.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | AI Data Processing",
    description: "Intelligently extract clean data from messy PDFs, receipts, and emails directly into your database using NLP.",
    url: "https://www.arcai.agency/services/ai-data-processing",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI AI Data Processing",
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
    title: "ARC AI | AI Data Processing",
    description: "Intelligently extract clean data from messy PDFs, receipts, and emails directly into your database using NLP.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-data-processing"
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

export default function AIDataProcessingPage() {
  return <AIDataProcessingContent />;
}