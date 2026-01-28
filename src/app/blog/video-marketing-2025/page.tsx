
import { Metadata } from "next";
import BlogPost from "./content";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = {
    title: "Video Marketing Mastery: Dominate YouTube, TikTok & Reels | ARC AI Blog",
    excerpt: "Dominate video marketing in 2025. Strategies for YouTube, TikTok, and Instagram Reels to grow your audience and drive sales.",
    featuredImage: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/video-marketing-2025`,
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
      canonical: `https://arcai.agency/blog/video-marketing-2025`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
