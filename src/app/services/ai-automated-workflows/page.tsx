
import { Metadata } from "next";
import AIAutomatedWorkflowsContent from "./content";

export const metadata: Metadata = {
  title: "AI Automated Workflows Services | ARC AI",
  description: "Streamline your business with AI automated workflows from ARC AI. Boost productivity, reduce errors, and operate 24/7.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Automated Workflows Services | ARC AI",
    description: "Automate your business processes and scale efficiently with ARC AI.",
    url: "https://arcai.agency/services/ai-automated-workflows",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://arcai.agency/shareable-img.png",
        width: 1200,
        height: 630,
        alt: "ARC AI Automated Workflows",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automated Workflows Services | ARC AI",
    description: "Automate your business processes and scale efficiently with ARC AI.",
    images: ["https://arcai.agency/shareable-img.png"],
  }
};

export default function AIAutomatedWorkflowsPage() {
  return <AIAutomatedWorkflowsContent />;
}
