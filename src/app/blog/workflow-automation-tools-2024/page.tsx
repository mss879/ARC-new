
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const post = {
    title: "Top 10 Workflow Automation Tools Every Business Needs | ARC AI Blog",
    excerpt: "Discover the top 10 workflow automation tools for 2024. Streamline your business, save time, and boost productivity with AI automation.",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/workflow-automation-tools-2024`,
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
      canonical: `https://arcai.agency/blog/workflow-automation-tools-2024`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
