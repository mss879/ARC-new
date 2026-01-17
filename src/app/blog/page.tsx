import { Metadata } from "next";
import BlogList from "@/components/BlogList";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Digital Marketing & AI Insights | ARC AI Blog",
  description: "Stay ahead with the latest trends in AI automation, digital marketing strategies, SEO optimization, and web technology from ARC AI experts.",
  keywords: [
    "AI automation blog", "digital marketing updates", "SEO tips 2025",
    "business automation strategies", "marketing technology trends",
    "artificial intelligence insights", "web development best practices"
  ],
  openGraph: {
    title: "Digital Marketing & AI Insights | ARC AI Blog",
    description: "Expert insights on AI automation, digital marketing, and web technology to help your business grow.",
    url: "https://arcai.agency/blog",
    type: "website",
    images: ["https://arcai.agency/shareable-img.png"]
  },
  alternates: {
    canonical: "https://arcai.agency/blog"
  }
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
