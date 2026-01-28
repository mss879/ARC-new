
import { Metadata } from "next";
import MotionDesignContent from "./content";

export const metadata: Metadata = {
  title: "Motion Design Services | ARC AI",
  description: "Bring your digital experiences to life with ARC AI's motion design services. User-centric animations, micro-interactions, and visual storytelling.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Motion Design Services | ARC AI",
    description: "Transform your interfaces with engaging motion design from ARC AI.",
    url: "https://arcai.agency/services/motion-design",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://arcai.agency/shareable-img.png",
        width: 1200,
        height: 630,
        alt: "ARC AI Motion Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Design Services | ARC AI",
    description: "Transform your interfaces with engaging motion design from ARC AI.",
    images: ["https://arcai.agency/shareable-img.png"],
  }
};

export default function MotionDesignPage() {
  return <MotionDesignContent />;
}
