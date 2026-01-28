
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    const post = {
        title: "AI Analytics & Business Intelligence: The Future of Data | ARC AI Blog",
        excerpt: "Discover how AI analytics and Business Intelligence are reshaping decision making. comprehensive guide to data-driven growth.",
        featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://arcai.agency/blog/ai-analytics-business-intelligence`,
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
            canonical: `https://arcai.agency/blog/ai-analytics-business-intelligence`,
        },
    };
}

export default function Page() {
    return <BlogPost />;
}
