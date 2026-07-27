import { Metadata } from "next";
import SoftwareCompaniesContent from "./content";
import { companiesInRenderOrder, companyWebsites, faqs, PAGE_DATES } from "./page-data";

export const metadata: Metadata = {
    title: "Software Companies in Sri Lanka: 23 Top Firms Compared (2026)",
    description:
        "Independent 2026 review of 23 software companies in Sri Lanka — rates from $20–$60/hr, specialties, ratings and how to choose the right partner.",
    openGraph: {
        title: "23 Top Software Companies in Sri Lanka, Rated & Compared (2026)",
        description:
            "An independent editorial review of 23 Sri Lankan software firms across enterprise, mid-market, and boutique tiers — pricing, specialties, and comparisons.",
        url: "https://www.arcai.agency/software-companies-sri-lanka",
        locale: "en_GB",
        type: "article",
        publishedTime: PAGE_DATES.published,
        modifiedTime: PAGE_DATES.modified,
        authors: ["https://www.arcai.agency/about"],
        images: [
            {
                url: "https://www.arcai.agency/software-companies-sri-lanka-guide-2026.webp",
                width: 1200,
                height: 630,
                alt: "Software Companies in Sri Lanka 2026 Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@arcaiagency",
        creator: "@arcaiagency",
        title: "23 Top Software Companies in Sri Lanka, Rated & Compared (2026)",
        description:
            "An independent editorial review of 23 Sri Lankan software firms — pricing, specialties, and comparisons.",
        images: ["https://www.arcai.agency/software-companies-sri-lanka-guide-2026.webp"],
    },
    alternates: {
        canonical: "https://www.arcai.agency/software-companies-sri-lanka",
    },
    robots: {
        index: true,
        follow: true,
    },
};

/* ── Structured Data — generated from page-data.ts so schema always matches the visible page ── */

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
        },
    })),
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Software Companies in Sri Lanka: 23 Top Firms Compared (2026)",
    description:
        "Independent 2026 review of 23 software companies in Sri Lanka — rates from $20–$60/hr, specialties, ratings and how to choose the right partner.",
    image: "https://www.arcai.agency/software-companies-sri-lanka-guide-2026.webp",
    author: {
        "@type": "Person",
        name: "Shahid Shamir",
        url: "https://www.arcai.agency/about",
        jobTitle: "Founder & Lead Engineer",
        worksFor: {
            "@type": "Organization",
            name: "ARC AI",
            url: "https://www.arcai.agency",
        },
        knowsAbout: ["Software development", "AI automation", "Sri Lanka IT industry"],
        sameAs: [
            "https://www.linkedin.com/in/shahid-shamir-2ab901105/",
        ],
    },
    publisher: {
        "@type": "Organization",
        name: "ARC AI",
        logo: {
            "@type": "ImageObject",
            url: "https://www.arcai.agency/logo.png",
        },
        sameAs: [
            "https://www.linkedin.com/company/105845719",
        ],
    },
    datePublished: PAGE_DATES.published,
    dateModified: PAGE_DATES.modified,
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.arcai.agency/software-companies-sri-lanka",
    },
};

/* The page groups companies by tier and explicitly disclaims subjective ranking,
 * so the ItemList is unordered and mirrors the exact on-page render order. */
const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: companiesInRenderOrder.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: companiesInRenderOrder.map((company, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: company.name,
        url: companyWebsites[company.name],
        description: company.tagline,
    })),
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.arcai.agency",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Software Companies in Sri Lanka",
            item: "https://www.arcai.agency/software-companies-sri-lanka",
        },
    ],
};

/* Organization and LocalBusiness schemas removed — they belong on /about, not an editorial guide page */

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Organization and LocalBusiness schemas removed — belong on /about page */}
            <SoftwareCompaniesContent />
        </>
    );
}
