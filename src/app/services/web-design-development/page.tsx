import { Metadata } from "next";
import WebDesignContent from "@/components/WebDesignContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Professional Web Design & Development Services | ARC AI",
  description: "Custom web design and development services using Next.js and React. We build fast, responsive, and SEO-friendly websites that convert visitors into customers.",
  keywords: [
    "web design agency UK", "custom website development", "Next.js developers",
    "React web development", "SEO web design", "responsive website design",
    "ecommerce website development", "corporate website design"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Professional Web Design & Development Services | ARC AI",
    description: "Transform your online presence with our expert web design and development services. Fast, secure, and beautiful websites.",
    url: "https://arcai.agency/services/web-design-development",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://arcai.agency/shareable-img.png",
        width: 1200,
        height: 630,
        alt: "Professional Web Design & Development Services | ARC AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Design & Development Services | ARC AI",
    description: "Transform your online presence with our expert web design and development services.",
    images: ["https://arcai.agency/shareable-img.png"],
  },
  alternates: {
    canonical: "https://arcai.agency/services/web-design-development"
  }
};

export default function WebDesignPage() {
  return (
    <>
      <SchemaOrg
        type="service-page"
        pageTitle="Web Design & Development"
        pageDescription="Custom web design and development services for modern businesses."
        pageUrl="https://arcai.agency/services/web-design-development"
        serviceName="Web Design & Development"
        serviceDescription="Professional web design and development including responsive design, SEO optimization, and custom web applications."
      />
      <WebDesignContent />
    </>
  );
}
