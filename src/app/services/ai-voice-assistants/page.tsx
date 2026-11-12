import { Metadata } from "next";
import AIVoiceAssistantsContent from "./content";

export const metadata: Metadata = {
  title: "AI Voice Assistants in Sri Lanka | ARC AI",
  description: "Human-sounding AI voice agents to call inbound leads instantly and handle 24/7 customer support.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | AI Voice Assistants",
    description: "Human-sounding AI voice agents to call inbound leads instantly and handle 24/7 customer support.",
    url: "https://www.arcai.agency/services/ai-voice-assistants",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI AI Voice Assistants",
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
    title: "ARC AI | AI Voice Assistants",
    description: "Human-sounding AI voice agents to call inbound leads instantly and handle 24/7 customer support.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-voice-assistants"
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

export default function AIVoiceAssistantsPage() {
  return <AIVoiceAssistantsContent />;
}