/* ── Single source of truth for /software-companies-sri-lanka ──
 * The visible page (content.tsx + sections/), the JSON-LD (page.tsx) and the sitemap
 * all read from this file so they can never drift apart.
 * Company profiles live in company-list.ts; types in types.ts.
 */
import { companies } from "./company-list";
import type { Company, Tier } from "./types";

export { companies };
export type { Company, Tier, CompanyType, Rating, RatingKind, SourceLink } from "./types";

/* Year shown in the title, H2s and FAQ. Roll it forward only together with a
 * re-verification pass of the profiles and statistics. */
export const GUIDE_YEAR = 2026;

export const PAGE_URL = "https://www.arcai.agency/software-companies-sri-lanka";

export const PAGE_DATES = {
    published: "2026-04-19",
    // Only bump `modified` when the page content substantively changes.
    modified: "2026-11-12",
};

export function formatDisplayDate(iso: string): string {
    return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}

export function formatMonthYear(iso: string): string {
    return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        timeZone: "UTC",
    });
}

/* ── Sources for every industry figure on the page ──
 * Link the specific document, never a homepage. */
export const SOURCES = {
    edbNineMonths: { label: "EDB: export performance, January–September 2026", url: "https://www.srilankabusiness.com/news/sri-lankas-exports-surpass-usd-13-6-bn-in-the-first-nine-months-of-2026-recording-5-percent-growth.html" },
    edbFirstHalf: { label: "EDB: export performance, first half of 2026", url: "https://www.srilankabusiness.com/news/sri-lanka-s-exports-cross-us-9-billion-milestone-in-the-first-half-of-2026-reflecting-sustained-growth-momentum.html" },
    edbFullYear2025: { label: "EDB: export performance, full year 2025", url: "https://www.srilankabusiness.com/news/sri-lankas-export-performance-exceeded-us-17.2-billion-in-2025.html" },
    edbIctServices: { label: "EDB: ICT services sector page", url: "https://www.srilankabusiness.com/ict-services/" },
    slasscomReview: { label: "Daily FT: SLASSCOM 2025/26 year in review", url: "https://www.ft.lk/it-telecom-tech/SLASSCOM-reflects-on-a-year-of-creating-opportunities-strengthening-Sri-Lanka-s-knowledge-and-innovation-industry/50-794672" },
    slasscomGraduates: { label: "Daily Mirror: Sri Lanka hits 17,000 annual IT graduate target", url: "https://www.dailymirror.lk/breaking-news/Sri-Lanka-hits-17-000-annual-IT-graduate-target-as-industry-turns-focus-to-AI-upskilling/108-325508" },
    budgetSpeech2026: { label: "Ministry of Finance: Budget Speech 2026", url: "https://treasury.gov.lk/api/file/6dcc7475-cdf4-4c15-b167-0767ae17330b" },
    dataReportal2026: { label: "DataReportal: Digital 2026, Sri Lanka", url: "https://datareportal.com/reports/digital-2026-sri-lanka" },
    efEpi2025: { label: "Daily Mirror: Sri Lanka ranks 73rd in the EF English Proficiency Index", url: "https://www.dailymirror.lk/breaking-news/Sri-Lanka-ranks-73rd-in-global-English-proficiency-index/108-347824" },
    nasscomWorkforce: { label: "PTI / The Week: NASSCOM FY26 technology workforce", url: "https://www.theweek.in/wire-updates/business/2026/02/24/india-fy26-tech-revenues-seen-6.1-pc-up-at-usd-315-bn-jobs-also-grow-nasscom.html" },
    ibpapWorkforce: { label: "The Philippine Star: IT-BPM sector, 2025", url: "https://www.philstar.com/business/2026/01/01/2498004/it-bpm-sector-track-hit-40-billion-revenue-goal" },
    trace: { label: "TRACE Expert City: About", url: "https://tracesrilanka.lk/about" },
    orionCity: { label: "Daily FT: Orion City, Destination for Innovation", url: "https://www.ft.lk/it-telecom-tech/Orion-City-Destination-for-Innovation/50-787566" },
    hatch: { label: "Hatch: About", url: "https://hatch.lk/about/" },
    spiralation: { label: "ICTA: Spiralation", url: "https://icta.lk/projects/digital-industry/spiralation" },
    govTech: { label: "The Sunday Times: GovTech replaces ICTA", url: "https://www.sundaytimes.lk/260315/business-times/govtech-replaces-icta-set-up-in-2003-633968.html" },
    wipo: { label: "WIPO Lex: Sri Lanka treaty membership", url: "https://www.wipo.int/wipolex/en/members/profile/LK" },
    ieeeXtreme: { label: "Wikipedia: IEEEXtreme past results", url: "https://en.wikipedia.org/wiki/IEEEXtreme" },
    clutchSriLanka: { label: "Clutch: developers in Sri Lanka", url: "https://clutch.co/lk/developers" },
} as const;

export type SourceKey = keyof typeof SOURCES;

/* Headline figures, each tied to its source. Rendered in the "Key statistics" block. */
export const keyStats: { value: string; text: string; source: SourceKey }[] = [
    { value: "US$1,240.67M", text: "ICT/BPM export earnings, January–September 2026, up 3.69% year-on-year.", source: "edbNineMonths" },
    { value: "US$1,644.83M", text: "ICT/BPM export earnings for the full year 2025, up 8.81%.", source: "edbFullYear2025" },
    { value: "US$5 billion", text: "Export revenue target for the ICT/BPM sector by 2030.", source: "edbIctServices" },
    { value: "175,000", text: "Professionals in the industry, across more than 680 IT and BPM companies.", source: "slasscomReview" },
    { value: "17,000", text: "IT graduates entering the workforce each year.", source: "slasscomGraduates" },
    { value: "Rs. 25.5bn+", text: "Government investment in digitalisation planned for 2026.", source: "budgetSpeech2026" },
    { value: "59.7%", text: "Internet penetration: 13.9 million users at the end of 2025.", source: "dataReportal2026" },
    { value: "73rd of 123", text: "Sri Lanka in the EF English Proficiency Index 2025, just ahead of India (74th).", source: "efEpi2025" },
];

/* ── Build-time guard ──
 * A profile without a source, without a verification date, or with a duplicate
 * anchor must never ship. In a production build this throws and fails the build;
 * in development it only warns so work in progress still renders. */
{
    const problems: string[] = [];
    const seen = new Set<string>();
    for (const c of companies) {
        if (c.sources.length === 0) problems.push(`${c.name}: no sources`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(c.verifiedOn)) problems.push(`${c.name}: no verifiedOn date`);
        if (seen.has(c.slug)) problems.push(`${c.name}: duplicate slug "${c.slug}"`);
        seen.add(c.slug);
    }
    if (problems.length > 0) {
        const message = `software-companies-sri-lanka: ${problems.length} profile problem(s):\n  ${problems.join("\n  ")}`;
        if (process.env.NODE_ENV === "production") throw new Error(message);
        console.warn(message);
    }
}

/* Never hardcode the number of companies anywhere; use this. */
export const companyCount = companies.length;

/* Title and description shown in search results and when the page is shared.
 * The title keeps the exact phrase first and stays under 55 characters. */
export const PAGE_TITLE = `Software Companies in Sri Lanka: Top ${companyCount} List (${GUIDE_YEAR})`;
export const PAGE_DESCRIPTION = `${companyCount} software companies in Sri Lanka compared by size, specialty, city and type, with the biggest employers, published rates and internship links.`;
export const PAGE_SOCIAL_TITLE = `Top ${companyCount} Software Companies in Sri Lanka (${GUIDE_YEAR} List)`;
export const PAGE_IMAGE_URL = `${PAGE_URL}/opengraph-image`;

/* ── Tiers ── */

export const categoryOrder: Tier[] = ["Enterprise & Global", "Mid-Market & Growth", "Boutique & Specialist"];

export const categoryMeta: Record<Tier, { id: string; heading: string; description: string }> = {
    "Enterprise & Global": {
        id: "enterprise-software-companies",
        heading: "Large and Enterprise Software Companies in Sri Lanka",
        description: "Large-scale companies with 500+ employees, global operations, and enterprise-grade platforms.",
    },
    "Mid-Market & Growth": {
        id: "mid-size-software-companies",
        heading: "Mid-Size Software Development Companies in Sri Lanka",
        description: "Established firms with 100–500 employees delivering specialised software services.",
    },
    "Boutique & Specialist": {
        id: "boutique-software-companies",
        heading: "Boutique Software Studios and Startups in Sri Lanka",
        description: "Agile, focused teams under 100 employees with deep specialisation in specific technology domains.",
    },
};

/* Companies ordered exactly as they render on the page (by tier, then list order).
 * The DOM, the comparison table and the ItemList structured data all use this order. */
export const companiesInRenderOrder: Company[] = categoryOrder.flatMap((category) =>
    companies.filter((c) => c.category === category)
);

/* Kept for other pages that import them. Derived, so they cannot drift. */
export const companyWebsites: Record<string, string> = Object.fromEntries(companies.map((c) => [c.name, c.website]));
export const companyCategories: Record<string, string> = Object.fromEntries(companies.map((c) => [c.name, c.category]));
export const categoryDescriptions: Record<string, string> = Object.fromEntries(
    categoryOrder.map((c) => [c, categoryMeta[c].description])
);

/* Numeric size used for sorting. Sri Lanka headcount when a source states one,
 * otherwise the first number in the displayed band. */
export function sizeSortValue(c: Company): number {
    if (c.slHeadcount) return c.slHeadcount.approx;
    const match = c.size.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, ""), 10) : 0;
}

const byName = (list: Company[]) => list.map((c) => c.name);

const joinNames = (names: string[]): string =>
    names.length <= 1 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

/* Firms a buyer can actually hire: services companies only. */
export const hireableCompanies: Company[] = companiesInRenderOrder.filter((c) => c.type === "Services");
export const productCompanies: Company[] = companiesInRenderOrder.filter((c) => c.type === "Product");
export const captiveCentres: Company[] = companiesInRenderOrder.filter((c) => c.type === "Captive centre");

/* ── Derived lists for the expansion sections ── */

/* Biggest employers: only companies whose Sri Lanka headcount a source states, and
 * only those with at least 300 people locally, so the ranking is not padded with
 * small firms that happen to publish a number while larger ones do not. */
export const topBySriLankaHeadcount: Company[] = companies
    .filter((c) => c.slHeadcount && c.slHeadcount.approx >= 300)
    .sort((a, b) => b.slHeadcount!.approx - a.slHeadcount!.approx || a.name.localeCompare(b.name, "en"))
    .slice(0, 10);

/* Large companies that publish only a company-wide figure: named beside the ranking, not in it. */
export const largeWithoutLocalFigure: Company[] = companiesInRenderOrder.filter(
    (c) => c.category === "Enterprise & Global" && !c.slHeadcount
);

export const withInternships: Company[] = companiesInRenderOrder.filter((c) => c.internshipUrl);

/* Glassdoor scores resting on at least 20 employee reviews, highest first. */
export const employeeRated: Company[] = companies
    .filter((c) => c.employeeRating && (c.employeeRating.reviews ?? 0) >= 20)
    .sort(
        (a, b) =>
            parseFloat(b.employeeRating!.value) - parseFloat(a.employeeRating!.value) || a.name.localeCompare(b.name, "en")
    );

/* Companies that publish an hourly rate band on Clutch. */
export const publishedRates: Company[] = companiesInRenderOrder.filter((c) => c.clutch?.hourlyRate);

export const companiesByDistrict: { district: string; companies: Company[] }[] = (() => {
    const map = new Map<string, Company[]>();
    for (const c of companiesInRenderOrder) map.set(c.district, [...(map.get(c.district) ?? []), c]);
    return [...map.entries()]
        .map(([district, list]) => ({ district, companies: list }))
        .sort((a, b) => b.companies.length - a.companies.length || a.district.localeCompare(b.district, "en"));
})();

export const outsideColombo: Company[] = companiesInRenderOrder.filter((c) => c.district !== "Colombo");

/* Hourly-rate bands listed by the firms on the first page of Clutch's Sri Lanka
 * developer directory. Re-count and update `checkedOn` when you refresh the guide. */
export const CLUTCH_SNAPSHOT = {
    url: "https://clutch.co/lk/developers",
    /* Organic listings on page 1, sponsored cards excluded. */
    counted: 50,
    under25: 10,
    from25to49: 27,
    from50up: 11,
    notListed: 2,
    checkedOn: "2026-11-12",
};

/* Self-reported pay on Levels.fyi. A small sample: say so wherever it is quoted. */
export const PAY_SNAPSHOT = {
    url: "https://www.levels.fyi/t/software-engineer/locations/sri-lanka",
    medianMonthlyLkr: "373,500",
    submissions: 40,
    topPaying: ["WSO2", "Sysco", "IFS"],
    checkedOn: "2026-11-12",
};

/* Review scores backed by a meaningful number of reviews, highest first.
 * Used in the FAQ so the answer always matches the profiles. */
const wellReviewed: Company[] = companies
    .filter((c) => c.rating && (c.rating.reviews ?? 0) >= 20)
    .sort((a, b) => parseFloat(b.rating!.value) - parseFloat(a.rating!.value) || a.name.localeCompare(b.name, "en"));

/* Largest verified Sri Lanka headcounts, used in the FAQ. */
const largestInSriLanka: Company[] = topBySriLankaHeadcount.slice(0, 4);
const headcountList = joinNames(topBySriLankaHeadcount.map((c) => `${c.name} (${c.slHeadcount!.label})`));

/* ── What changed, shown on the page ── */

export const CHANGELOG: { date: string; items: string[] }[] = [
    {
        date: "2026-11-12",
        items: [
            `Expanded the guide to ${companyCount} companies. Each new profile was researched from the company's own website plus at least one independent source.`,
            "Added a ranking of the biggest employers by published Sri Lanka headcount, a jobs and internships section, and a list of companies by city.",
            "Replaced the estimated rate tables with rates that companies publish themselves.",
            "Re-checked every company profile against the company's own website, its LinkedIn page and reputable press, and listed the sources on each profile.",
            "Corrected founding years for ten companies (Calcey Technologies, Arimac, Rootcode, 99x, Fcode Labs, Allion Technologies, Loons Lab, Surge Global, Mitra AI and Zone24x7) and updated headquarters and team sizes across the list.",
            "Recorded two changes of identity: Mitra Innovation now trades as Mitra AI, and Calcey Technologies and Surge Global merged into the Short Circuit group in 2025.",
            "Replaced ratings we could not confirm. A score now appears only when it comes from client or product reviews and rests on at least five reviews.",
            "Removed project examples and client claims that could not be traced to a published source, and removed one company whose details could no longer be verified.",
            "Updated the industry statistics to the Export Development Board's January–September 2026 figures and corrected the 2030 export target to US$5 billion.",
            "Moved the company list to the top of the page and gave every company its own link.",
        ],
    },
];

/* ── FAQs (also emitted as FAQPage structured data) ── */

const scaleNames = joinNames(byName(companiesInRenderOrder.slice(0, 5)));

export const faqs: { q: string; a: string }[] = [
    {
        q: `What are the top-rated software development companies in Sri Lanka for ${GUIDE_YEAR}?`,
        a: `There is no official ranking. Among companies in this guide whose scores rest on a meaningful number of public reviews, the highest are ${joinNames(
            wellReviewed.map((c) => `${c.name} (${c.rating!.value}/5 from ${c.rating!.reviews!.toLocaleString("en-US")} ${c.rating!.kind.toLowerCase()} on ${c.rating!.platform})`)
        )}. The best-known names by scale are ${scaleNames}. The full list covers ${companyCount} companies across enterprise platforms, product engineering, ERP, capital markets technology, cloud, healthcare and travel tech.`,
    },
    {
        q: "Why is Sri Lanka considered a good destination for software outsourcing?",
        a: "Sri Lanka offers an English-speaking engineering workforce of about 175,000 professionals and about 17,000 new IT graduates a year (both SLASSCOM figures), published rates that are mostly under $50 an hour, and a UTC+5:30 timezone that overlaps with European and Middle Eastern business hours. Unlike larger outsourcing markets, Sri Lanka competes on quality over volume, so teams tend to be smaller and more senior.",
    },
    {
        q: "How much does it cost to hire a software development company in Sri Lanka?",
        a: `Most Sri Lankan software firms that publish a rate list it at under $50 an hour. Of the ${CLUTCH_SNAPSHOT.counted} firms on the first page of Clutch's Sri Lanka developer directory in ${formatMonthYear(CLUTCH_SNAPSHOT.checkedOn)}, ${CLUTCH_SNAPSHOT.under25 + CLUTCH_SNAPSHOT.from25to49} listed rates below $50 an hour (${CLUTCH_SNAPSHOT.under25} under $25 and ${CLUTCH_SNAPSHOT.from25to49} at $25–$49), ${CLUTCH_SNAPSHOT.from50up} listed $50 or more and ${CLUTCH_SNAPSHOT.notListed} listed no rate. ${publishedRates.length > 0 ? `${publishedRates.length} companies in this guide publish their own rate band, shown in the pricing section. ` : ""}A directory band is not a quote: the price depends on seniority, engagement model and domain, so ask for a written quote against your brief.`,
    },
    {
        q: "What services do software companies in Sri Lanka typically offer?",
        a: "Sri Lankan software companies offer custom software development, mobile app development (iOS and Android), web application development, enterprise resource planning (ERP), quality assurance and testing, UI/UX design, cloud migration and DevOps, AI and machine learning, API integration, IT staff augmentation, and managed services. Many firms also specialise in a vertical such as fintech, healthtech, travel tech, or e-commerce.",
    },
    {
        q: "Which programming languages and technologies are popular among Sri Lankan software companies?",
        a: "The most widely used technologies include JavaScript and TypeScript (React, Next.js, Angular, Node.js), Java (Spring Boot), Python, C# and .NET, PHP (Laravel), and mobile frameworks such as React Native, Flutter, Swift and Kotlin. AWS, Azure and Google Cloud are all in common use, alongside Docker and Kubernetes. Where a profile above lists a tech stack, it comes from that company's own careers, case-study or engineering pages.",
    },
    {
        q: "How do I choose the right software development partner in Sri Lanka?",
        a: "Evaluate partners across six areas: (1) technical expertise: does their stack match your requirements? (2) portfolio and case studies: have they delivered in your domain? (3) communication: do they work in agile sprints with transparent project tooling? (4) security and compliance: look for ISO 27001, SOC 2 practices and GDPR awareness. (5) scalability and retention: can they grow the team, and what is their annual developer retention rate? (6) timezone and cultural fit. Also ask for reference calls with existing clients and check independent review platforms such as Clutch or GoodFirms.",
    },
    {
        q: "Is Sri Lanka better than India for software outsourcing?",
        a: "It depends on your priorities. India offers far greater scale (about 5.95 million technology employees, according to NASSCOM, against Sri Lanka's 175,000) and lower entry-level rates. Sri Lanka offers smaller teams with more senior attention per project, comparable quality at competitive rates, and the same timezone advantage for European clients. For projects needing 3–30 developers with strong communication and design quality, Sri Lanka is often the better fit. For projects needing 100+ developers or very specialised niche skills, India's larger talent pool is an advantage. Many clients use both.",
    },
    {
        q: "What are the biggest software companies in Sri Lanka?",
        a: topBySriLankaHeadcount.length >= 5
            ? `By the number of people employed in Sri Lanka, the biggest software and IT companies with a published local headcount are ${headcountList}. Each figure comes from the company or from press coverage and is linked in the list at the top of this guide. Companies that do not publish a Sri Lanka headcount are not ranked.`
            : `The best-known large employers are ${scaleNames}. Few companies publish a Sri Lanka-specific headcount, so this guide does not rank them by size.`,
    },
    {
        q: "What are the top 10 software companies in Sri Lanka?",
        a: `There is no official top 10. The only objective ranking this guide publishes is by published Sri Lanka headcount: ${headcountList}. Other large employers, such as ${joinNames(byName(largeWithoutLocalFigure))}, publish only company-wide figures and are not ranked. For quality, compare the profiles: each lists the company's specialty, published clients, review scores where enough reviews exist, and its sources.`,
    },
    {
        q: "Which software companies in Sri Lanka offer internships?",
        a: withInternships.length > 0
            ? `${withInternships.length} companies in this guide publish a page for internships, graduate or trainee programmes: ${joinNames(byName(withInternships))}. The jobs and internships section links to each programme page. Many other companies take interns without a dedicated page, so check the careers link on each profile.`
            : "Most larger software companies in Sri Lanka take interns, usually through their careers pages. Check the careers link on each profile.",
    },
    {
        q: "Which software companies are based outside Colombo?",
        a: outsideColombo.length > 0
            ? `Most of the industry is in the Colombo district, but ${outsideColombo.length} companies in this guide have their main Sri Lankan office elsewhere: ${joinNames(outsideColombo.map((c) => `${c.name} (${c.city})`))}.`
            : "Almost all of Sri Lanka's larger software companies have their main office in the Colombo district, which includes nearby towns such as Nugegoda, Nawala, Malabe and Moratuwa.",
    },
    {
        q: "Which are the highest-paying software companies in Sri Lanka?",
        a: `There is no official pay ranking. The best public indicator is Levels.fyi, which collects self-reported pay: in ${formatMonthYear(PAY_SNAPSHOT.checkedOn)} it showed a median total compensation of LKR ${PAY_SNAPSHOT.medianMonthlyLkr} a month for software engineers in Sri Lanka and listed ${joinNames([...PAY_SNAPSHOT.topPaying])} as its top-paying companies. That rests on only ${PAY_SNAPSHOT.submissions} submissions, so treat it as a rough guide. The jobs section of this guide also lists Glassdoor scores for every company with at least 20 employee reviews.`,
    },
    {
        q: "How many software companies are there in Sri Lanka?",
        a: `SLASSCOM's 2025/26 review counts more than 680 IT and BPM companies employing about 175,000 professionals. The Export Development Board's own sector page cites 500+ ICT companies and 146,000 people employed. This guide profiles ${companyCount} of the best known, each checked against its own published sources.`,
    },
    {
        q: "What is SLASSCOM and how does it relate to Sri Lankan software companies?",
        a: "SLASSCOM (Sri Lanka Association for Software and Services Companies) is the national chamber for the IT and business process management industry, with more than 300 member companies. It advocates on policy, talent development and international market access, publishes industry reviews, and runs events and startup programmes. Most of the larger Sri Lankan software firms are members, and membership is generally seen as a positive sign of a company's standing.",
    },
    {
        q: "Which software development companies in Sri Lanka can I hire for a project?",
        a: `${hireableCompanies.length} of the ${companyCount} companies in this guide are services firms that take client projects, including ${joinNames(byName(hireableCompanies.slice(0, 6)))}. Product companies such as ${joinNames(byName(productCompanies.slice(0, 3)))} sell their own software instead, and captive centres such as ${joinNames(byName(captiveCentres.slice(0, 2)))} build only for their parent company and cannot be hired.`,
    },
    {
        q: "What is the best custom software development company in Sri Lanka for startups?",
        a: "For startups, boutique and mid-size services firms are usually the best fit because they offer senior attention, modern stacks and flexible engagement models. In this guide, Calcey Technologies, Rootcode and Fcode Labs all publish product work for startups and scale-ups. Compare their profiles above and ask each for a case study in your sector.",
    },
    {
        q: "How do Sri Lankan software engineers rank globally?",
        a: `There is no global ranking of engineers by country, but there are verifiable indicators. University of Moratuwa teams placed first worldwide in the IEEEXtreme programming competition in 2009 and third in 2014. Global companies also run large engineering centres in Sri Lanka: ${joinNames(
            largestInSriLanka.map((c) => `${c.name} (${c.slHeadcount!.label} people)`)
        )}.`,
    },
];
