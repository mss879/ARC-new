
import { Metadata } from "next";
import BlogPost from "./content";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = {
    title: "Influencer Marketing Strategy: Partner Your Way to Growth | ARC AI Blog",
    excerpt: "A comprehensive guide to influencer marketing strategy in 2025. Partner with the right influencers to drive growth and ROI.",
    featuredImage: "https://images.unsplash.com/photo-1611926653670-e52b0fc8cc6e?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/influencer-marketing-strategy`,
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
      canonical: `https://arcai.agency/blog/influencer-marketing-strategy`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
