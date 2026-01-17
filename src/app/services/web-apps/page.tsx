import { Metadata } from "next";
import WebAppsContent from "@/components/WebAppsContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
    title: "Custom Web App Development Services | ARC AI",
    description: "Enterprise-grade custom web applications, SaaS platforms, and internal tools built with Next.js and React. Scalable, secure, and tailored to your business.",
    keywords: [
        "custom web apps", "SaaS development", "web application development",
        "enterprise software", "internal tools", "Next.js development",
        "React web apps", "secure web portals"
    ],
    openGraph: {
        title: "Custom Web App Development Services | ARC AI",
        description: "Build software that scales with your business. Custom web apps tailored to your unique workflows.",
        url: "https://arcai.agency/services/web-apps",
        type: "website",
        images: ["https://arcai.agency/shareable-img.png"]
    },
    alternates: {
        canonical: "https://arcai.agency/services/web-apps"
    }
};

export default function WebAppsPage() {
    return (
        <>
            <SchemaOrg
                type="service-page"
                pageTitle="Custom Web Apps"
                pageDescription="Custom web applications built with modern technologies to solve complex business problems."
                pageUrl="https://arcai.agency/services/web-apps"
                serviceName="Web App Development"
                serviceDescription="Full-cycle custom web application development including design, development, and deployment."
            />
            <WebAppsContent />
        </>
    );
}
