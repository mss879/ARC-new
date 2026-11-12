import { Metadata } from "next";
import AIMultiAgentSystemsContent from "./content";

export const metadata: Metadata = {
  title: "AI Multi-Agent Systems in Sri Lanka | ARC AI",
  description: "Complete organizational intelligence with specialized AI agents working together securely.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | AI Multi-Agent Systems",
    description: "Complete organizational intelligence with specialized AI agents working together securely.",
    url: "https://www.arcai.agency/services/ai-multi-agent-systems",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI AI Multi-Agent Systems",
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
    title: "ARC AI | AI Multi-Agent Systems",
    description: "Complete organizational intelligence with specialized AI agents working together securely.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-multi-agent-systems"
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

export default function AIMultiAgentSystemsPage() {
  return <AIMultiAgentSystemsContent />;
}