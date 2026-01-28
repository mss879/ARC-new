
import { Metadata } from "next";
import AIChatbotsContent from "./content";

export const metadata: Metadata = {
  title: "AI Chatbots Service | ARC AI",
  description: "Deploy intelligent chatbots with ARC AI. Our AI-driven chatbots enhance customer support, automate operations, and operate 24/7 with advanced cognitive capabilities.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Chatbots Service | ARC AI",
    description: "Transform customer support and automate business operations with AI-driven chatbots from ARC AI.",
    url: "https://arcai.agency/services/ai-chatbots",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://arcai.agency/shareable-img.png",
        width: 1200,
        height: 630,
        alt: "ARC AI Chatbots Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbots Service | ARC AI",
    description: "Deploy intelligent chatbots with ARC AI. Automate operations and enhance support.",
    images: ["https://arcai.agency/shareable-img.png"],
  }
};

export default function AIChatbotsPage() {
  return <AIChatbotsContent />;
}
