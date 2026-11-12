
import { Metadata } from "next";
import AIAgentsContent from "./content";

export const metadata: Metadata = {
  title: "AI Agent Development in Sri Lanka | ARC AI",
  description: "AI agents for your website, WhatsApp and phone line that answer customers around the clock, qualify leads and hand over to your team.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Agents Service | ARC AI",
    description: "Transform customer support and automate business operations with AI-driven AI agents from ARC AI.",
    url: "https://www.arcai.agency/services/ai-chatbots",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Agents Service",
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
    title: "AI Agents Service | ARC AI",
    description: "Deploy intelligent AI agents with ARC AI. Automate operations and enhance support.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-chatbots"
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

export default function AIAgentsPage() {
  return <AIAgentsContent />;
}
