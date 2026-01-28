
import { Metadata } from "next";
import SocialMediaContent from "./content";

export const metadata: Metadata = {
  title: "Social Media Marketing Service | ARC AI",
  description: "Boost your social media presence with ARC AI. We provide data-driven strategies, content creation, and community management to help you grow your audience.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Social Media Marketing Service | ARC AI",
    description: "Transform your social media presence with ARC AI. Strategic content creation and management.",
    url: "https://arcai.agency/services/social-media",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://arcai.agency/shareable-img.png",
        width: 1200,
        height: 630,
        alt: "ARC AI Social Media Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Service | ARC AI",
    description: "Boost your social media presence with ARC AI. Strategic content creation and management.",
    images: ["https://arcai.agency/shareable-img.png"],
  }
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
