
import { Metadata } from "next";
import BlogPost from "./content";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = {
    title: "Email Marketing Automation: Complete 2024 Playbook | ARC AI Blog",
    excerpt: "Master email marketing automation with our 2024 playbook. Learn essential workflows, segmentation, and personalization strategies.",
    featuredImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&auto=format&fit=crop&q=80"
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://arcai.agency/blog/email-marketing-automation`,
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
      canonical: `https://arcai.agency/blog/email-marketing-automation`,
    },
  };
}

export default function Page() {
  return <BlogPost />;
}
