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
    openGraph: {
        title: "Custom Backend & API Development Services | ARC AI",
        description: "Build the engine that powers your business. Secure, scalable backend infrastructure designed for growth.",
        url: "https://arcai.agency/services/custom-backend",
        type: "website",
        images: ["https://arcai.agency/shareable-img.png"]
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
