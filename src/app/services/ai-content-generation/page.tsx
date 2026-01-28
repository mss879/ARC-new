
import { Metadata } from "next";
import AIContentGenerationContent from "./content";

export const metadata: Metadata = {
  title: "AI Content Generation Services | ARC AI",
  description: "Scale your content creation with ARC AI's advanced generation services. High-quality, SEO-optimized content aligned with your brand voice.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Content Generation Services | ARC AI",
    description: "Generate high-quality, on-brand content at scale with ARC AI.",
    url: "https://arcai.agency/services/ai-content-generation",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://arcai.agency/shareable-img.png",
        width: 1200,
        height: 630,
        alt: "ARC AI Content Generation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generation Services | ARC AI",
    description: "Generate high-quality, on-brand content at scale with ARC AI.",
    images: ["https://arcai.agency/shareable-img.png"],
  }
};

export default function AIContentGenerationPage() {
  return <AIContentGenerationContent />;
}
