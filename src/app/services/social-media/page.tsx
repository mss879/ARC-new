
import { Metadata } from "next";
import SocialMediaContent from "./content";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Sri Lanka | ARC AI",
  description: "Grow your brand on social media with ARC AI. Data-driven strategy, content creation & community management for businesses in Sri Lanka.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Social Media Marketing Service | ARC AI",
    description: "Transform your social media presence with ARC AI. Strategic content creation and management.",
    url: "https://www.arcai.agency/services/social-media",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Social Media Service",
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
    title: "Social Media Marketing Service | ARC AI",
    description: "Boost your social media presence with ARC AI. Strategic content creation and management.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/social-media"
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

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
