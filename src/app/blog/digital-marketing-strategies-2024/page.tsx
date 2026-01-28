
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const post = {
    title: "Digital Marketing Strategies for 2024: The Competitive Edge | ARC AI Blog",
    excerpt: "Stay ahead with the top digital marketing strategies for 2024. From AI personalization to video mastery, discover what works.",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/digital-marketing-strategies-2024`,
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
      canonical: `https://arcai.agency/blog/digital-marketing-strategies-2024`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
