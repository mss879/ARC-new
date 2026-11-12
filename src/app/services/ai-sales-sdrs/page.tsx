import { Metadata } from "next";
import AISalesSDRsContent from "./content";

export const metadata: Metadata = {
  title: "AI Sales Reps (SDRs) in Sri Lanka | ARC AI",
  description: "Automated prospectors that research targets and write hyper-personalized cold emails at massive scale.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | AI Sales Reps (SDRs)",
    description: "Automated prospectors that research targets and write hyper-personalized cold emails at massive scale.",
    url: "https://www.arcai.agency/services/ai-sales-sdrs",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI AI Sales Reps (SDRs)",
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
    title: "ARC AI | AI Sales Reps (SDRs)",
    description: "Automated prospectors that research targets and write hyper-personalized cold emails at massive scale.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-sales-sdrs"
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

export default function AISalesSDRsPage() {
  return <AISalesSDRsContent />;
}