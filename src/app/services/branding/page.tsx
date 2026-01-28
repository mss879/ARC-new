
import { Metadata } from "next";
import BrandingContent from "./content";

export const metadata: Metadata = {
  title: "Branding Services | ARC AI",
  description: "Craft a unique and powerful brand identity with ARC AI. Logo design, brand strategy, visual systems, and comprehensive brand guidelines.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Branding Services | ARC AI",
    description: "Build a brand that stands out with ARC AI's expert branding services.",
    url: "https://arcai.agency/services/branding",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://arcai.agency/shareable-img.png",
        width: 1200,
        height: 630,
        alt: "ARC AI Branding Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Services | ARC AI",
    description: "Build a brand that stands out with ARC AI's expert branding services.",
    images: ["https://arcai.agency/shareable-img.png"],
  }
};

export default function BrandingPage() {
  return <BrandingContent />;
}
