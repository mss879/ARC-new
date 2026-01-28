
import { Metadata } from "next";
import BlogPost from "./content";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = {
    title: "SEO Optimization Best Practices to Rank #1 on Google | ARC AI Blog",
    excerpt: "Master SEO in 2024 with our guide to ranking #1 on Google. Learn technical SEO, keyword research, and link building strategies.",
    featuredImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/seo-optimization-best-practices`,
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
      canonical: `https://arcai.agency/blog/seo-optimization-best-practices`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
