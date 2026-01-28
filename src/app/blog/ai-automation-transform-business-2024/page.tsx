
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const post = {
    title: "How AI Automation is Transforming Businesses in 2024 | ARC AI Blog",
    excerpt: "Discover how AI automation is revolutionizing business operations, reducing costs, and driving growth in 2024. Expert insights from ARC AI.",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/ai-automation-transform-business-2024`,
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
      canonical: `https://arcai.agency/blog/ai-automation-transform-business-2024`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
