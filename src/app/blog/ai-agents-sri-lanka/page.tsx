
import { Metadata } from "next";
import BlogPost from "./content";

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // Static metadata for this specific page
    const post = {
        title: "The Rise of AI Agents: Transforming Business Operations in Sri Lanka | ARC AI Blog",
        excerpt: "Learn how AI Agents are revolutionizing Sri Lankan industries from tourism to real estate by automating tasks and improving customer engagement.",
        featuredImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=80"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://arcai.agency/blog/ai-agents-sri-lanka`,
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
            canonical: `https://arcai.agency/blog/ai-agents-sri-lanka`,
        },
    };
}

export default function Page() {
    return <BlogPost />;
}
