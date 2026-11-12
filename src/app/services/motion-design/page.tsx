
import { Metadata } from "next";
import MotionDesignContent from "./content";

export const metadata: Metadata = {
  title: "Motion Design & Animation Agency in Sri Lanka | ARC AI",
  description: "Bring your brand to life with motion design. ARC AI creates UI animations, micro-interactions & visual storytelling for businesses in Sri Lanka.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Motion Design Services | ARC AI",
    description: "Transform your interfaces with engaging motion design from ARC AI.",
    url: "https://www.arcai.agency/services/motion-design",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Motion Design Services",
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
    title: "Motion Design Services | ARC AI",
    description: "Transform your interfaces with engaging motion design from ARC AI.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/motion-design"
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

export default function MotionDesignPage() {
  return <MotionDesignContent />;
}
