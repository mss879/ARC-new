
import { Metadata } from "next";
import BlogPost from "./content";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = {
    title: "AI Chatbots for Customer Service: 2024 Guide | ARC AI Blog",
    excerpt: "Learn how AI chatbots are revolutionizing customer service. A complete guide to implementation, benefits, and best practices.",
    featuredImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/ai-chatbots-customer-service`,
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
      canonical: `https://arcai.agency/blog/ai-chatbots-customer-service`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
