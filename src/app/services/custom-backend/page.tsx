import { Metadata } from "next";
import CustomBackendContent from "@/components/CustomBackendContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
    title: "Custom Backend & API Development Services | ARC AI",
    description: "Scalable backend systems, RESTful APIs, and cloud infrastructure designed for high performance and security. Power your business with robust engineering.",
    keywords: [
        "backend development", "API development", "cloud infrastructure",
        "scalable systems", "database design", "microservices architecture",
        "Node.js development", "AWS cloud services"
    ],
    authors: [{ name: "ARC AI Agency" }],
    openGraph: {
        title: "Custom Backend & API Development Services | ARC AI",
        description: "Build the engine that powers your business. Secure, scalable backend infrastructure designed for growth.",
        url: "https://arcai.agency/services/custom-backend",
        siteName: "ARC AI Agency",
        images: [
            {
                url: "https://arcai.agency/shareable-img.png",
                width: 1200,
                height: 630,
                alt: "Custom Backend & API Development Services | ARC AI",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Backend & API Development Services | ARC AI",
        description: "Build the engine that powers your business.",
        images: ["https://arcai.agency/shareable-img.png"],
    },
    alternates: {
        canonical: "https://arcai.agency/services/custom-backend"
    }
};

export default function CustomBackendPage() {
    return (
        <>
            <SchemaOrg
                type="service-page"
                pageTitle="Custom Backend Systems"
                pageDescription="Scalable backend systems and API development services."
                pageUrl="https://arcai.agency/services/custom-backend"
                serviceName="Backend Development"
                serviceDescription="Architecting and building robust backend infrastructure and APIs."
            />
            <CustomBackendContent />
        </>
    );
}
