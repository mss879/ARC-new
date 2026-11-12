import { Metadata } from "next";
import BlogList from "@/components/BlogList";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "ARC AI Blog | AI, Automation and Systems for Sri Lankan Business",
  description: "Guides on AI agents, automation, websites and business systems for Sri Lankan businesses, from the ARC AI team.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Digital Marketing & AI Insights | ARC AI Blog",
    description: "Expert insights on AI automation, digital marketing, and web technology to help your business grow.",
    url: "https://www.arcai.agency/blog",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing & AI Insights | ARC AI Blog",
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
    title: "Digital Marketing & AI Insights | ARC AI Blog",
    description: "Expert insights on AI automation, digital marketing, and web technology to help your business grow.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/blog"
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

export default function BlogPage() {
  return (
    <>
      <SchemaOrg
        type="blog"
        pageTitle="Insights & Expertise"
        pageDescription="Explore cutting-edge strategies in AI automation and digital marketing."
        pageUrl="https://arcai.agency/blog"
      />
      <BlogList />
    </>
  );
}
