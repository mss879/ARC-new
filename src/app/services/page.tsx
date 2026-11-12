import { Metadata } from "next";
import ServicesList from "@/components/ServicesList";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Services | AI Agents, Automation and Business Systems — ARC AI",
  description: "AI agents, workflow automation, websites, web apps and business systems, built by ARC AI in Colombo.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Digital Marketing & AI Automation Services | ARC AI",
    description: "Transform your business with our AI-powered digital services. From smart websites to automated workflows, we deliver results that matter.",
    url: "https://www.arcai.agency/services",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing & AI Automation Services | ARC AI",
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
    title: "Digital Marketing & AI Automation Services | ARC AI",
    description: "Transform your business with our AI-powered digital services.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services"
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

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg
        type="services"
        pageTitle="Our Services"
        pageDescription="Comprehensive digital marketing and AI-powered services including web design, smart ad campaigns, and automated workflows."
        pageUrl="https://www.arcai.agency/services"
      />
      <ServicesList />
    </>
  );
}
