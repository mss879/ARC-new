import { Metadata } from "next";
import ConsultingAuditsContent from "./content";

export const metadata: Metadata = {
  title: "Consulting & Automation Audits in Sri Lanka | ARC AI",
  description: "Expert strategic consulting to map your business processes and identify high-ROI AI integration opportunities.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | Consulting & Automation Audits",
    description: "Expert strategic consulting to map your business processes and identify high-ROI AI integration opportunities.",
    url: "https://www.arcai.agency/services/consulting-audits",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Consulting & Automation Audits",
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
    title: "ARC AI | Consulting & Automation Audits",
    description: "Expert strategic consulting to map your business processes and identify high-ROI AI integration opportunities.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/consulting-audits"
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

export default function ConsultingAuditsPage() {
  return <ConsultingAuditsContent />;
}