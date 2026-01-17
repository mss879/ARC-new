import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - Digital Marketing & AI Solutions",
    description: "Comprehensive digital marketing and AI-powered services including web design, smart ad campaigns, automated workflows, AI chatbots, content generation, and custom solutions.",
    keywords: [
        "digital marketing services", "AI automation services", "web design agency",
        "smart ad campaigns", "AI chatbots", "workflow automation", "content generation",
        "web development", "brand identity", "marketing funnels", "backend systems"
    ],
    openGraph: {
        title: "Services - Digital Marketing & AI Solutions",
        description: "Comprehensive digital marketing and AI-powered services to transform your business and drive growth.",
        url: "https://arcai.agency/services",
        type: "website",
        images: [{
            url: "https://arcai.agency/shareable-img.png",
            width: 1200,
            height: 630,
            alt: "ARC Digital Canvas Services"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Services - Digital Marketing & AI Solutions",
        description: "Comprehensive digital marketing and AI-powered services",
        images: ["https://arcai.agency/shareable-img.png"]
    },
    alternates: {
        canonical: "https://arcai.agency/services"
    }
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
