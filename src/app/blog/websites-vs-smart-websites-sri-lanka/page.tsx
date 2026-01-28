
import { Metadata } from "next";
import BlogPost from "./content";

export async function generateMetadata(): Promise<Metadata> {
    // In a static export or simple structure, we can just return the static data directly.
    // The user requested this specific structure.

    const post = {
        title: "Websites vs. Smart Websites: Why Sri Lankan Businesses Need to Upgrade | ARC AI Blog",
        excerpt: "Discover the difference between traditional static websites and modern Smart Websites. Learn why Sri Lankan businesses need to upgrade for 24/7 engagement and global reach.",
        featuredImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=80"
    };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://arcai.agency/blog/websites-vs-smart-websites-sri-lanka`,
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
            canonical: `https://arcai.agency/blog/websites-vs-smart-websites-sri-lanka`,
        },
    };
}

export default function Page() {
    return <BlogPost />;
}
