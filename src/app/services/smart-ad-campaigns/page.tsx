import { Metadata } from "next";
import SmartAdCampaignsContent from "./content";

export const metadata: Metadata = {
  title: "Smart Ad Campaigns in Sri Lanka | ARC AI",
  description: "Data-driven Meta and Google advertising campaigns that scale ROI. ARC AI serves businesses in Sri Lanka.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | Smart Ad Campaigns",
    description: "Data-driven Meta and Google advertising campaigns that scale ROI. ARC AI serves businesses in Sri Lanka.",
    url: "https://www.arcai.agency/services/smart-ad-campaigns",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Smart Ad Campaigns",
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
    title: "ARC AI | Smart Ad Campaigns",
    description: "Data-driven Meta and Google advertising campaigns that scale ROI. ARC AI serves businesses in Sri Lanka.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/smart-ad-campaigns"
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

export default function SmartAdCampaignsPage() {
  return <SmartAdCampaignsContent />;
}