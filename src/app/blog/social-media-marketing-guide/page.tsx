
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
  const post = {
    title: "Complete Social Media Marketing Guide for Business Growth | ARC AI Blog",
    excerpt: "A complete guide to social media marketing for business growth. Learn platform strategies, content calendars, and analytics.",
    featuredImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/social-media-marketing-guide`,
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
      canonical: `https://arcai.agency/blog/social-media-marketing-guide`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
