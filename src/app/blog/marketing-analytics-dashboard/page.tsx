
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const post = {
    title: "Building the Ultimate Marketing Analytics Dashboard | ARC AI Blog",
    excerpt: "Learn how to build a marketing analytics dashboard that drives decisions. Track key metrics, ROI, and performance in one place.",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/marketing-analytics-dashboard`,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
    alternates: {
      canonical: `https://arcai.agency/blog/marketing-analytics-dashboard`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
