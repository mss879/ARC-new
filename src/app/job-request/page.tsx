import { Metadata } from "next";
import JobRequestForm from "./JobRequestForm";

// SEO Metadata for Job Request Page
export const metadata: Metadata = {
  title: "Start Your Project | ARC AI — AI & Web Agency Sri Lanka",
  description:
    "Submit your project request to ARC AI. Tell us about your website, AI automation, or branding needs and get a free consultation. No commitment required.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Start Your Project | ARC AI",
    description:
      "Submit your project request and get a free consultation from ARC AI — AI automation, web design, and branding experts in Sri Lanka.",
    url: "https://www.arcai.agency/job-request",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Start Your Project with ARC AI",
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
    title: "Start Your Project | ARC AI",
    description:
      "Submit your project request and get a free consultation from ARC AI.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/job-request",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function JobRequestPage() {
  return <JobRequestForm />;
}
