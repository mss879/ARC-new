import { Metadata } from "next";
import SmartFunnelsContent from "@/components/SmartFunnelsContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
    title: "Smart Sales Funnels & Marketing Automation | ARC AI",
    description: "Intelligent sales funnels that guide prospects from lead to customer automatically. Maximize conversions with behavior-based automation and personalization.",
    keywords: [
        "sales funnels", "marketing automation", "lead nurturing",
        "conversion optimization", "email marketing automation",
        "sales pipeline automation", "customer journey mapping"
    ],
    authors: [{ name: "ARC AI Agency" }],
    openGraph: {
        title: "Smart Sales Funnels & Marketing Automation | ARC AI",
        description: "Turn leads into customers on autopilot. Intelligent funnels that nurture, qualify, and convert 24/7.",
        url: "https://arcai.agency/services/smart-funnels",
        siteName: "ARC AI Agency",
        images: [
            {
                url: "https://arcai.agency/shareable-img.png",
                width: 1200,
                height: 630,
                alt: "Smart Sales Funnels & Marketing Automation | ARC AI",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Smart Sales Funnels & Marketing Automation | ARC AI",
        description: "Turn leads into customers on autopilot.",
        images: ["https://arcai.agency/shareable-img.png"],
    },
    alternates: {
        canonical: "https://arcai.agency/services/smart-funnels"
    }
};

export default function SmartFunnelsPage() {
    return (
        <>
            <SchemaOrg
                type="service-page"
                pageTitle="Smart Funnels"
                pageDescription="Intelligent sales funnels and marketing automation services."
                pageUrl="https://arcai.agency/services/smart-funnels"
                serviceName="Sales Funnel Automation"
                serviceDescription="Automated sales funnels that nurture leads and drive conversions."
            />
            <SmartFunnelsContent />
        </>
    );
}
