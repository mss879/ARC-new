import { Metadata } from "next";
import ServicesList from "@/components/ServicesList";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Digital Marketing & AI Automation Services | ARC AI",
  description: "Explore our comprehensive suite of digital services including AI automation, smart web design, chatbots, and data-driven digital marketing strategies.",
  keywords: [
    "AI automation services", "digital marketing services", "web design agency",
    "AI chatbots", "workflow automation", "content generation", "custom web apps",
    "brand identity design", "smart ad campaigns", "digital transformation"
  ],
  openGraph: {
    title: "Digital Marketing & AI Automation Services | ARC AI",
    description: "Transform your business with our AI-powered digital services. From smart websites to automated workflows, we deliver results that matter.",
    url: "https://arcai.agency/services",
    type: "website",
    images: ["https://arcai.agency/shareable-img.png"]
  },
  alternates: {
    canonical: "https://arcai.agency/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg
        type="services"
        pageTitle="Our Services"
        pageDescription="Comprehensive digital marketing and AI-powered services including web design, smart ad campaigns, and automated workflows."
        pageUrl="https://arcai.agency/services"
      />
      <ServicesList />
    </>
  );
}
