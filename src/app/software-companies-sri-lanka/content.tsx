import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { ScrollProgressBar, ActiveTOC, SocialShareButtons, BackToTop } from "./ClientComponents";
import { Hero, ComparisonSection, ProfilesSection, HireSection, KeyTakeaways, KeyStatistics, Methodology, Faq } from "./sections/Core";
import { IndustryOverview, TechEcosystem } from "./sections/Industry";
import { WhatToLookFor, Versus, WhyOutsource } from "./sections/BuyerGuide";
import { TopTen, CareersSection, CitySection, Pricing } from "./sections/Extra";
import { ProvenResults, RelatedReading, BottomCta, AuthorBox, PageNav } from "./sections/Publisher";
import { GUIDE_YEAR, PAGE_TITLE, PAGE_URL, companyCount } from "./page-data";

/* This file only decides the ORDER of the page. The list comes first: people who
 * search "software companies in Sri Lanka" want the companies, not the background.
 * Copy lives in sections/, data in page-data.ts and company-list.ts. */

const tocItems = [
    { id: "biggest", label: "Biggest Employers" },
    { id: "comparison-table", label: `Compare All ${companyCount} Companies` },
    { id: "enterprise-software-companies", label: "Large & Enterprise Companies" },
    { id: "mid-size-software-companies", label: "Mid-Size Companies" },
    { id: "boutique-software-companies", label: "Boutique Studios & Startups" },
    { id: "hire", label: "Companies You Can Hire" },
    { id: "careers", label: "Jobs & Internships" },
    { id: "by-city", label: "Companies by City" },
    { id: "what-to-look-for", label: "What to Look for in a Partner" },
    { id: "pricing", label: "How Much Does Development Cost?" },
    { id: "sri-lanka-vs-india", label: "Sri Lanka vs India vs Philippines" },
    { id: "why-outsource", label: "Why Outsource to Sri Lanka?" },
    { id: "industry-overview", label: `The Software Industry in ${GUIDE_YEAR}` },
    { id: "tech-ecosystem", label: "Tech Hubs & Ecosystem" },
    { id: "methodology", label: "How This List Is Verified" },
    { id: "faq", label: "Frequently Asked Questions" },
];

export default function SoftwareCompaniesContent() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <ScrollProgressBar />
            <BackToTop />
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Software Companies in Sri Lanka" },
                ]}
            />

            <Hero />

            <div className="px-4 md:px-8 pb-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
                <ActiveTOC items={tocItems} />

                <article className="flex-1 w-full max-w-none min-w-0">
                    {/* 1. The list */}
                    <TopTen />
                    <ComparisonSection />
                    <ProfilesSection />

                    {/* 2. For buyers */}
                    <HireSection />

                    {/* 2b. For job-seekers */}
                    <CareersSection />
                    <CitySection />
                    <KeyTakeaways />
                    <WhatToLookFor />
                    <Pricing />
                    <Versus />
                    <WhyOutsource />

                    {/* 3. Background and how the list is made */}
                    <IndustryOverview />
                    <KeyStatistics />
                    <TechEcosystem />
                    <Methodology />
                    <ProvenResults />

                    {/* 4. Questions, next steps, author */}
                    <Faq />
                    <RelatedReading />
                    <BottomCta />
                    <AuthorBox />

                    <div className="mt-12 pt-8 border-t border-ink/10">
                        <SocialShareButtons url={PAGE_URL} title={PAGE_TITLE} />
                    </div>
                    <PageNav />
                </article>
            </div>
            <Footer />
        </div>
    );
}
