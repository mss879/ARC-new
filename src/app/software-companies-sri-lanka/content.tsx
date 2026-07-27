import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    CheckCircle2,
    Globe,
    Users,
    TrendingUp,
    Shield,
    Cpu,
    Building2,
    Rocket,
    Award,
    BarChart3,
    BookOpen,
    Briefcase,
    MapPin,
    ExternalLink,
    HelpCircle,
    Star,
    DollarSign,
    Scale,
    Landmark,
    GraduationCap,
    CircleDot,
    Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { FAQItem, ScrollProgressBar, ActiveTOC, SocialShareButtons, BackToTop, InteractiveComparisonTable } from "./ClientComponents";
import { companies, companyWebsites, companyCategories, categoryOrder, categoryDescriptions, faqs, PAGE_DATES, formatDisplayDate } from "./page-data";
import { ExportEarningsChart, RateComparisonChart } from "./Charts";

/* ── Data ─────────────────────────────────────────────────────── */

const tocItems = [
    { id: "methodology", label: "How We Evaluated These Companies" },
    { id: "industry-overview", label: "Sri Lanka's Software Industry in 2026" },
    { id: "what-to-look-for", label: "What to Look for in a Software Partner" },
    { id: "rankings", label: "The 23 Leading Firms by Category" },
    { id: "comparison-table", label: "At-a-Glance Comparison" },
    { id: "pricing", label: "How Much Does Development Cost?" },
    { id: "sri-lanka-vs-india", label: "Sri Lanka vs India vs Philippines" },
    { id: "tech-ecosystem", label: "Tech Hubs & Ecosystem" },
    { id: "why-outsource", label: "Why Outsource Software Development to Sri Lanka?" },
    { id: "industry-voices", label: "Industry Voices & Data Points" },
    { id: "proven-results", label: "Proven Results from This Market" },
    { id: "faq", label: "Frequently Asked Questions" },
];


/* — Main Content ————————————————————————————————————————————————————————————————————————————————————————— */

export default function SoftwareCompaniesContent() {
    return (
        <div className="min-h-screen bg-black text-white">
            <ScrollProgressBar />
            <BackToTop />
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Software Companies in Sri Lanka" },
                ]}
            />

            {/* — Hero ————————————————————————————————————————————————————————————————————————————————————————————— */}
            <section className="relative px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-[rgb(255,73,37)] transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Articles
                    </Link>

                    <div>
                        <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 backdrop-blur-sm text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                            Industry Guide · Updated July 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Software Companies in Sri Lanka
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,73,37)] to-orange-500">
                                23 Top Firms Rated & Compared (2026)
                            </span>
                        </h1>
                        
                        {/* Direct answer paragraph — featured snippet target */}
                        <p className="text-lg text-neutral-200 mb-6 max-w-3xl font-medium">
                            The best software companies in Sri Lanka in 2026 are WSO2, Virtusa, 99x, IFS, LSEG Technology, Calcey Technologies, and Rootcode. This guide reviews 23 IT companies and software firms across enterprise, mid-market, and boutique tiers — with pricing, ratings, and comparisons.
                        </p>

                        <p className="text-xl text-neutral-400 mb-8 max-w-3xl">
                            We reviewed 23 software development firms and IT companies across the island — from enterprise giants employing 30,000+ engineers to agile AI-native studios. Updated with H1 2026 industry statistics, re-verified pricing benchmarks, and expert evaluation criteria.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-neutral-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 19, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>19 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <span>23 companies reviewed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Search className="w-4 h-4" />
                                <span>10 FAQs answered</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Last updated: {formatDisplayDate(PAGE_DATES.modified)}</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <SocialShareButtons />
                        </div>
                    </div>

                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl mt-10">
                        <Image
                            src="/software-companies-sri-lanka-guide-2026.webp"
                            alt="Overview of software development offices and technology teams working in Colombo, Sri Lanka"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                </div>
            </section>

            {/* — Key Takeaways (Featured Snippet Target) ———————————————————————————————————————————————————————— */}
            <section className="px-4 md:px-8 pb-8 -mt-4 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="rounded-2xl border border-[rgb(255,73,37)]/20 bg-[rgb(255,73,37)]/[0.03] p-6 md:p-8 space-y-4"
                    >
                        <p className="text-sm font-bold uppercase tracking-wider text-[rgb(255,73,37)]">
                            Key Takeaways
                        </p>
                        <ul className="space-y-3 text-neutral-300">
                            <li className="flex items-start gap-3">
                                <span className="text-[rgb(255,73,37)] mt-1 font-bold">→</span>
                                <span><strong className="text-white">Sri Lanka is a premier destination for software outsourcing</strong>, offering high-quality engineering talent with excellent English proficiency at competitive rates ($20–$60/hour).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[rgb(255,73,37)] mt-1 font-bold">→</span>
                                <span><strong className="text-white">The market has three distinct tiers:</strong> Enterprise firms (like WSO2, Virtusa, LSEG Technology), Mid-Market specialists (Calcey, Rootcode, Fcode Labs), and Agile boutique studios (like Addix and Loons Lab).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[rgb(255,73,37)] mt-1 font-bold">→</span>
                                <span><strong className="text-white">Choosing the right software development company in Sri Lanka</strong> depends on your project size. Startups benefit from boutique firms, while large multinationals typically partner with enterprise-scale vendors.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[rgb(255,73,37)] mt-1 font-bold">→</span>
                                <span><strong className="text-white">Compared to India</strong>, Sri Lanka focuses on quality over volume, making it ideal for teams of 3–30 developers requiring senior attention and design excellence.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* — Content Grid with Sticky Sidebar ———————————————————————————————————————————————————————————— */}
            <div className="px-4 md:px-8 pb-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
                
                {/* — Table of Contents (Sticky Sidebar) —————————————————————————————————————————————————————————— */}
                <ActiveTOC items={tocItems} />

                {/* — Article Body ———————————————————————————————————————————————————————————————————————————————— */}
                <article id="main-content" className="flex-1 w-full prose prose-invert prose-lg max-w-none min-w-0 mt-8">
                    {/* — Section 0: Methodology ———————————————————————————————————————————————————————————— */}
                    <section
                        id="methodology"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-8 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-[rgb(255,73,37)]" />
                            How We Evaluated These Companies
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Transparency builds trust. Here is the exact methodology used to evaluate the <strong>software companies in Sri Lanka</strong> featured in this guide. Unlike paid directory listings, our evaluation is editorial and independent.
                        </p>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8 my-8">
                            <h3 className="text-lg font-bold text-white mb-4">Evaluation Criteria (Weighted)</h3>
                            <div className="space-y-4">
                                {[
                                    { criterion: "Technical Capability & Innovation", weight: "25%", desc: "Technology stack modernity, AI/cloud adoption, architectural quality, open-source contributions." },
                                    { criterion: "Market Reputation & Track Record", weight: "20%", desc: "Industry recognition, awards, Clutch/Gartner ratings, years of operation, notable client portfolio." },
                                    { criterion: "Client Portfolio & Case Studies", weight: "20%", desc: "Quality and diversity of delivered projects, verifiable outcomes, industry-specific expertise." },
                                    { criterion: "Scale & Growth Trajectory", weight: "15%", desc: "Team size, revenue growth indicators, international expansion, hiring momentum." },
                                    { criterion: "Specialisation & Differentiation", weight: "10%", desc: "Unique value proposition, niche expertise, defensible market position." },
                                    { criterion: "Communication & Process Maturity", weight: "10%", desc: "Agile adoption, project management transparency, English proficiency, timezone flexibility." },
                                ].map((item) => (
                                    <div key={item.criterion} className="flex gap-4 items-start">
                                        <span className="text-[rgb(255,73,37)] font-bold text-sm w-12 shrink-0 pt-0.5">
                                            {item.weight}
                                        </span>
                                        <div>
                                            <div className="font-semibold text-white text-sm">{item.criterion}</div>
                                            <div className="text-xs text-neutral-500 mt-0.5">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-neutral-400 text-sm italic">
                            <strong>Publisher Note:</strong> This guide is researched and published by ARC AI. ARC AI is <em>not</em> included in the rankings below. All 23 companies were evaluated independently using the criteria outlined above. We encourage readers to verify all claims by contacting the listed companies directly and consulting third-party review platforms such as Clutch, GoodFirms, and Glassdoor.
                        </p>
                    </section>

                    {/* — Section 1: Industry Overview ————————————————————————————————————————————————————— */}
                    <section
                        id="industry-overview"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka's Software Industry in 2026
                        </h2>

                        <p className="text-xl text-neutral-200 mb-6">
                            Sri Lanka's ICT/BPM sector has entered a defining growth phase. What was historically viewed as a lower-cost alternative to India has matured into a high-quality, specialist-driven ecosystem — home to some of the top IT outsourcing companies, tech companies, and software firms in Sri Lanka and South Asia — that global enterprises actively seek out for complex engineering work.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                            {[
                                { value: "$885.4M", label: "H1 2026 IT Exports", icon: TrendingUp },
                                { value: "+17.6%", label: "YoY Export Growth (H1)", icon: BarChart3 },
                                { value: "175K+", label: "IT Professionals", icon: Users },
                                { value: "LKR 30B", label: "2026 Digital Budget", icon: Building2 },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center"
                                >
                                    <stat.icon className="w-5 h-5 text-[rgb(255,73,37)] mx-auto mb-2" />
                                    <div className="text-2xl font-black text-white">{stat.value}</div>
                                    <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <p className="text-neutral-300">
                            According to the <a href="https://www.srilankabusiness.com/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Export Development Board (EDB)</a>, the country's ICT/BPM sector earned US$885.4 million from exports in the first half of 2026 — up 17.6% year-on-year — with June alone contributing US$150.5 million. January 2026 set a monthly record at US$177.8 million, a 60.2% jump over the previous January. The sector now employs over 175,000 skilled professionals and has reached what industry analysts describe as a “tipping point” in foreign exchange generation, placing it among the country's top five export earners.
                        </p>

                        <ExportEarningsChart />

                        <p className="text-neutral-300 mt-4">
                            The government has signalled strong commitment to digital infrastructure with a 2026 national budget allocation of approximately 30 billion LKR (~US$98 million) for major digitisation projects, including the Unique Digital Identity initiative, the e-Grama Niladhari programme, and the Digital Economy Advancement Program. Internet penetration stands at approximately 59.7% of the population (~13.9 million users), with mobile broadband coverage expanding via 4G and emerging 5G deployments.
                        </p>

                        <p className="text-neutral-300 mt-4">
                            Structurally, the industry is undergoing a strategic pivot from basic “digitisation” (cloud migration, simple CRM/ERP implementation) toward what analysts at the Morning Herald and <a href="https://slasscom.lk/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM</a> are calling <strong>“intelligent operations”</strong> — leveraging <Link href="/ai-automation-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI automation</Link>, multi-agent systems, and domain-specific AI models to build fundamentally smarter software. This shift is creating a two-tier market: established firms integrating AI into existing enterprise offerings, and newer <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI-native studios</Link> building entirely on modern architectures from day one. For a broader look at web-specific capabilities, see our guide on <Link href="/web-design-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">web design companies in Sri Lanka</Link>.
                        </p>

                        <p className="text-neutral-300 mt-4 text-sm italic">
                            Sources: <a href="https://www.srilankabusiness.com/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Export Development Board of Sri Lanka</a>, <a href="https://slasscom.lk/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM</a>, <a href="https://www.cbsl.gov.lk/en/publications/economic-and-financial-reports/annual-economic-review" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Central Bank of Sri Lanka Annual Economic Review 2025</a>, <a href="https://datareportal.com/reports/digital-2026-sri-lanka" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">DataReportal Digital 2026 Sri Lanka</a>, National Budget 2026.
                        </p>
                    </section>

                    {/* — Section 2: What to Look For ————————————————————————————————————————————————— */}
                    <section
                        id="what-to-look-for"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-[rgb(255,73,37)]" />
                            What to Look for in a Software Partner
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Finding a vendor is straightforward; finding the <em>right partner</em> requires structured evaluation. Whether you're a startup building an MVP or a Fortune 500 company modernising legacy systems, these six pillars should guide your selection when evaluating <strong>software development companies in Sri Lanka</strong>. For guidance specific to <Link href="/ai-consultants-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI consultants</Link>, see our dedicated guide.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                            {[
                                {
                                    icon: Cpu,
                                    title: "1. Technical Expertise & Architecture",
                                    desc: "Evaluate their technology stack. Are they building with modern frameworks (React, Next.js, serverless) or relying on legacy monolithic architectures? In 2026, look for firms that can natively integrate AI and deploy to cloud-edge environments. Ask to see their GitHub or architecture documentation.",
                                },
                                {
                                    icon: Briefcase,
                                    title: "2. Portfolio & Domain Experience",
                                    desc: "Request specific case studies in your industry vertical. A firm that has built fintech platforms will have very different expertise from one specialising in travel tech or healthcare. Domain knowledge reduces project risk, accelerates delivery timelines, and avoids costly architectural mistakes.",
                                },
                                {
                                    icon: Users,
                                    title: "3. Communication & Process Maturity",
                                    desc: "Sri Lankan teams generally have excellent English proficiency, but verify their project management methodology. Look for agile/Scrum adoption with regular sprint demos, transparent JIRA/Linear boards, and dedicated account managers. Request a trial sprint before committing to a long-term engagement.",
                                },
                                {
                                    icon: Shield,
                                    title: "4. Security & Compliance",
                                    desc: "For enterprise or regulated industry projects, verify their security posture: ISO 27001 certification, SOC2 compliance practices, GDPR awareness, and secure SDLC processes. Ask specifically about code review workflows, vulnerability scanning (SAST/DAST), and data encryption standards at rest and in transit.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "5. Scalability & Talent Retention",
                                    desc: "Can they scale from 3 to 30 engineers as your project grows? What is their annual developer retention rate? High turnover is a critical red flag — you lose accumulated domain knowledge with every departure. Top Sri Lankan firms maintain 85%+ retention. Ask for their retention numbers directly.",
                                },
                                {
                                    icon: Globe,
                                    title: "6. Timezone & Cultural Alignment",
                                    desc: "Sri Lanka's UTC+5:30 timezone provides full-day overlap with European teams and partial overlap with US East Coast (evening calls). Assess their willingness to adjust schedules, and confirm whether they have experience working with clients in your region. Cultural alignment on communication norms can make or break a remote partnership.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-6"
                                >
                                    <item.icon className="w-6 h-6 text-[rgb(255,73,37)] mb-3" />
                                    <h3 className="text-base font-bold text-white mb-2 m-0">{item.title}</h3>
                                    <p className="text-sm text-neutral-400 m-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* — Section 3: Company Rankings ————————————————————————————————————————————————— */}
                    <section
                        id="rankings"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-4 flex items-center gap-3">
                            <Award className="w-8 h-8 text-[rgb(255,73,37)]" />
                            The 23 Leading Software Development Companies in Sri Lanka (2026)
                        </h2>
                        <p className="text-neutral-400 mb-10">
                            Grouped by company size and market tier rather than subjective ranking. This list covers the full spectrum — from global enterprise giants with 30,000+ employees to agile AI-native studios with fewer than 50 engineers — so you can find a partner that genuinely matches your project{"'"}s specific needs and budget.
                        </p>

                        {/* Interactive comparison table */}
                        <div id="comparison-table" className="mb-12 bg-neutral-950 border border-neutral-800 rounded-xl p-4 md:p-6 scroll-mt-24">
                            <h3 className="text-lg font-bold text-white mb-1">Quick Comparison: Filter & Sort</h3>
                            <p className="text-xs text-neutral-500 mb-4">Filter by company tier and sort by any column to quickly compare all 23 firms.</p>
                            <InteractiveComparisonTable
                                companies={companies.map((c) => ({
                                    name: c.name,
                                    founded: c.founded,
                                    specialty: c.specialty,
                                    size: c.size,
                                    rating: c.rating,
                                    bestFor: c.bestFor,
                                    category: companyCategories[c.name] || "Other",
                                }))}
                            />
                        </div>

                        <div className="space-y-12">
                            {categoryOrder.map((category) => {
                                const categoryCompanies = companies.filter(
                                    (c) => companyCategories[c.name] === category
                                );
                                return (
                                    <div key={category}>
                                        <div className="mb-6 pb-4 border-b border-neutral-800">
                                            <h3 className="text-xl font-bold text-white mb-1 m-0">{category}</h3>
                                            <p className="text-sm text-neutral-500 m-0">{categoryDescriptions[category]}</p>
                                        </div>
                                        <div className="space-y-6">
                                            {categoryCompanies.map((company) => (
                                                <div
                                                    key={company.name}
                                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8 hover:border-neutral-700 transition-colors"
                                                >
                                                    {/* Header */}
                                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white m-0 mb-1">
                                                                {company.name}
                                                            </h3>
                                                            <p className="text-sm text-[rgb(255,73,37)] font-medium m-0">
                                                                {company.tagline}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            {company.rating && (
                                                                company.ratingUrl ? (
                                                                    <a href={company.ratingUrl} target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-1 px-2.5 py-1 bg-neutral-900 rounded-full border border-neutral-800 hover:border-yellow-500/40 transition-colors no-underline">
                                                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                                                        <span className="text-xs font-bold text-white">{company.rating}</span>
                                                                        <span className="text-xs text-neutral-500">/ 5</span>
                                                                    </a>
                                                                ) : (
                                                                    <div className="flex items-center gap-1 px-2.5 py-1 bg-neutral-900 rounded-full border border-neutral-800">
                                                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                                                        <span className="text-xs font-bold text-white">{company.rating}</span>
                                                                        <span className="text-xs text-neutral-500">/ 5</span>
                                                                    </div>
                                                                )
                                                            )}
                                                            {companyWebsites[company.name] && (
                                                                <Link
                                                                    href={companyWebsites[company.name]}
                                                                    target="_blank"
                                                                    rel="nofollow noopener noreferrer"
                                                                    className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline"
                                                                >
                                                                    <ExternalLink className="w-3 h-3" />
                                                                    Visit
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Meta row */}
                                                    <div className="flex flex-wrap gap-4 text-xs text-neutral-500 mb-5">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" /> Est. {company.founded}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="w-3 h-3" /> {company.hq}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Users className="w-3 h-3" /> {company.size} employees
                                                        </span>
                                                        {company.ratingSource && (
                                                            company.ratingUrl ? (
                                                                <a href={company.ratingUrl} target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-1 text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">
                                                                    <Star className="w-3 h-3" /> {company.ratingSource}
                                                                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                                                                </a>
                                                            ) : (
                                                                <span className="flex items-center gap-1">
                                                                    <Star className="w-3 h-3" /> {company.ratingSource}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-neutral-300 mb-5">{company.description}</p>

                                                    {/* Notable Project / Case Study */}
                                                    {company.projectExample && (
                                                        <div className="bg-neutral-900/40 p-4 rounded-lg border border-neutral-800/50 mb-5 relative overflow-hidden">
                                                            <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(255,73,37)]"></div>
                                                            <div className="flex items-start gap-3">
                                                                <Briefcase className="w-4 h-4 text-[rgb(255,73,37)] shrink-0 mt-0.5" />
                                                                <div>
                                                                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                                                                        Notable Project
                                                                    </div>
                                                                    <p className="text-sm text-neutral-300 italic m-0">
                                                                        "{company.projectExample}"
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Notable clients & Tech stack */}
                                                    {(company.notableClients || company.techStack) && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                                            {company.notableClients && (
                                                                <div className="text-xs">
                                                                    <span className="text-neutral-500 font-semibold uppercase tracking-wider">Notable Clients: </span>
                                                                    <span className="text-neutral-400">{company.notableClients}</span>
                                                                </div>
                                                            )}
                                                            {company.techStack && (
                                                                <div className="text-xs">
                                                                    <span className="text-neutral-500 font-semibold uppercase tracking-wider">Tech Stack: </span>
                                                                    <span className="text-neutral-400">{company.techStack}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* Services + Best For */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                        <div>
                                                            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                                                                Core Services
                                                            </div>
                                                            <ul className="space-y-1.5 m-0 p-0 list-none">
                                                                {company.services.map((s) => (
                                                                    <li key={s} className="flex items-center gap-2 text-sm text-neutral-300">
                                                                        <CheckCircle2 className="w-3.5 h-3.5 text-[rgb(255,73,37)] shrink-0" />
                                                                        {s}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/50">
                                                            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                                                <Rocket className="w-3.5 h-3.5" /> Best For
                                                            </div>
                                                            <p className="text-sm text-neutral-300 m-0">{company.bestFor}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* — Section 5: Pricing ——————————————————————————————————————————————————————————— */}
                    <section
                        id="pricing"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <DollarSign className="w-8 h-8 text-[rgb(255,73,37)]" />
                            How Much Does Software Development Cost in Sri Lanka?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            <strong className="text-white">In short:</strong> expect $20–$35/hour at boutique studios, $35–$50 at mid-market firms, and $45–$60 at enterprise-grade vendors — roughly a third to a half of comparable UK or US rates. Below is a detailed breakdown of current market rates, re-verified against Clutch and GoodFirms listings in Q3 2026. For web-specific pricing, see our <Link href="/web-design-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">web design Sri Lanka pricing guide</Link>, and for AI-specific services, visit our <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI companies guide</Link>.
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 my-8">
                            <table className="w-full text-sm border border-neutral-800 min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Company Tier</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Hourly Rate (USD)</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Monthly Dedicated Dev</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Typical Profile</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Boutique / Startup</td>
                                        <td className="p-4">$20 – $35</td>
                                        <td className="p-4">$2,500 – $3,500</td>
                                        <td className="p-4 text-xs text-neutral-400">Small teams, agile, founder-led. e.g. Addix, Fcode Labs</td>
                                    </tr>
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Mid-Market</td>
                                        <td className="p-4">$35 – $50</td>
                                        <td className="p-4">$3,500 – $5,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Established teams, structured processes. e.g. Calcey, Surge, Rootcode</td>
                                    </tr>
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Enterprise</td>
                                        <td className="p-4">$45 – $60</td>
                                        <td className="p-4">$5,000 – $7,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Large-scale, compliance-ready. e.g. Virtusa, 99x, Mitra</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-white">Specialised / Niche</td>
                                        <td className="p-4">$40 – $80</td>
                                        <td className="p-4">$4,500 – $8,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Domain experts (ERP, travel tech). e.g. IFS, CodeGen, WSO2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">How Does Sri Lanka Compare Globally?</h3>
                        <div className="overflow-x-auto -mx-4 md:mx-0 my-6">
                            <table className="w-full text-sm border border-neutral-800 min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Country</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Average Hourly Rate (USD)</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">vs Sri Lanka</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    {[
                                        { country: "🇺🇸 United States", rate: "$100 – $200", vs: "3–6x more expensive" },
                                        { country: "🇬🇧 United Kingdom", rate: "$80 – $150", vs: "2.5–5x more expensive" },
                                        { country: "🇦🇺 Australia", rate: "$80 – $140", vs: "2.5–4x more expensive" },
                                        { country: "🇵🇱 Poland / Eastern Europe", rate: "$40 – $80", vs: "1.5–2x more expensive" },
                                        { country: "🇮🇳 India", rate: "$18 – $50", vs: "Comparable (SL often higher quality/capita)" },
                                        { country: "🇱🇰 Sri Lanka", rate: "$20 – $60", vs: "—" },
                                        { country: "🇵🇭 Philippines", rate: "$20 – $50", vs: "Comparable (SL stronger in engineering)" },
                                        { country: "🇻🇳 Vietnam", rate: "$18 – $45", vs: "Comparable" },
                                    ].map((row) => (
                                        <tr key={row.country} className="border-b border-neutral-800/50">
                                            <td className="p-4 font-medium whitespace-nowrap">{row.country}</td>
                                            <td className="p-4">{row.rate}</td>
                                            <td className="p-4 text-xs text-neutral-400">{row.vs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <RateComparisonChart />

                        <p className="text-neutral-400 text-sm italic">
                            Rates are estimates based on publicly available data, <a href="https://clutch.co/lk/it-services" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Clutch listings</a>, <a href="https://www.goodfirms.co/software-development/sri-lanka" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">GoodFirms profiles</a>, and industry surveys, re-verified as of Q3 2026. Actual rates vary by project complexity, seniority requirements, and engagement model.
                        </p>
                    </section>

                    {/* — Section 6: SL vs India vs Philippines —————————————————————————————————— */}
                    <section
                        id="sri-lanka-vs-india"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka vs India vs Philippines: Which Should You Choose?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            This is one of the most common questions when evaluating offshore software development options. Each market has distinct advantages depending on your project requirements:
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 my-8">
                            <table className="w-full text-sm border border-neutral-800 min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Factor</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇱🇰 Sri Lanka</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇮🇳 India</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇵🇭 Philippines</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    {[
                                        { factor: "Talent Pool Size", sl: "175,000+ IT professionals", india: "5,000,000+ IT professionals", ph: "1,500,000+ in IT/BPO" },
                                        { factor: "English Proficiency", sl: "Very High (South Asia leading)", india: "High (varies by region)", ph: "Very High (US-influenced)" },
                                        { factor: "Average Hourly Rate", sl: "$20 – $60", india: "$18 – $50", ph: "$20 – $50" },
                                        { factor: "Timezone (UTC)", sl: "+5:30 (EU overlap)", india: "+5:30 (EU overlap)", ph: "+8:00 (APAC overlap)" },
                                        { factor: "Quality per Capita", sl: "Very High (selective)", india: "Varies widely", ph: "Good (BPO-focused)" },
                                        { factor: "Best For", sl: "Quality-focused teams of 3–30", india: "Scale: teams of 50–500+", ph: "BPO, support, content" },
                                        { factor: "Key Differentiator", sl: "Elite talent density, design quality", india: "Massive scale, every niche covered", ph: "Cultural alignment with US clients" },
                                        { factor: "Scalability Risk", sl: "Limited for 100+ teams", india: "Low — massive pipeline", ph: "Moderate — engineering talent thinner" },
                                    ].map((row) => (
                                        <tr key={row.factor} className="border-b border-neutral-800/50">
                                            <td className="p-4 font-medium text-white whitespace-nowrap">{row.factor}</td>
                                            <td className="p-4 text-sm">{row.sl}</td>
                                            <td className="p-4 text-sm">{row.india}</td>
                                            <td className="p-4 text-sm">{row.ph}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 my-8">
                            <h3 className="text-lg font-bold text-white mb-3 m-0">The Bottom Line</h3>
                            <p className="text-neutral-400 m-0 text-sm">
                                <strong className="text-white">Choose Sri Lanka</strong> when you need a high-quality team of 3–30 developers with excellent communication, design sensibility, and willingness to operate as a genuine extension of your team. The selective talent pipeline means higher average skill per developer.
                                <br /><br />
                                <strong className="text-white">Choose India</strong> when you need massive scale (50–500+ developers), hyper-specific niche skills, or the lowest possible entry-level rates. India's ecosystem covers virtually every technology and domain.
                                <br /><br />
                                <strong className="text-white">Choose the Philippines</strong> when your primary need is BPO, customer support, or content operations — especially if you need strong cultural alignment with US clientele. For deep software engineering, Sri Lanka and India typically offer stronger options.
                            </p>
                        </div>
                    </section>

                    {/* — Section 7: Tech Ecosystem ————————————————————————————————————————————— */}
                    <section
                        id="tech-ecosystem"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Landmark className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka's Tech Hubs & Ecosystem
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Understanding where these firms operate and the supporting ecosystem provides valuable context for evaluating potential partners:
                        </p>

                        <div className="space-y-6 my-8">
                            {[
                                {
                                    icon: Building2,
                                    name: "TRACE Expert City, Maradana",
                                    desc: "Sri Lanka's premier technology park and the heart of software companies in Colombo, purpose-built for IT companies. Houses Calcey Technologies, multiple startups, and innovation labs. Managed by the University of Moratuwa. Provides shared infrastructure, networking events, and incubation programmes.",
                                },
                                {
                                    icon: Building2,
                                    name: "Orion City, Colombo 09",
                                    desc: "A major IT tower in Colombo hosting several technology companies and BPO operations. Provides enterprise-grade office infrastructure, backup power, and connectivity for mission-critical operations.",
                                },
                                {
                                    icon: GraduationCap,
                                    name: "University Pipeline",
                                    desc: "The University of Moratuwa (ranked #1 for engineering in Sri Lanka), University of Colombo School of Computing (UCSC), and the Informatics Institute of Technology (IIT) produce approximately 10,000 IT graduates annually. Government-supported bootcamps and micro-credential programmes through the new GOVTECH initiative supplement the university pipeline.",
                                },
                                {
                                    icon: CircleDot,
                                    name: "SLASSCOM",
                                    desc: "The Sri Lanka Association of Software and Service Companies (slasscom.lk) is the national industry body representing 300+ member companies. SLASSCOM publishes annual industry reports, runs talent development initiatives, organises international trade missions, and advocates for policy reform to support the IT sector. Membership is a positive indicator of company standing.",
                                },
                                {
                                    icon: Globe,
                                    name: "Startup Ecosystem",
                                    desc: "Colombo's startup scene has matured significantly since 2020, with accelerators like Hatch (by Sri Lanka Telecom), Spiralation, and Blue Ocean Ventures supporting early-stage tech companies. The government has also established a Rs. 1.5 billion startup fund under the Ministry of Digital Economy to further support tech entrepreneurs.",
                                },
                            ].map((hub) => (
                                <div key={hub.name} className="flex gap-4">
                                    <div className="w-10 h-10 bg-[rgb(255,73,37)]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <hub.icon className="w-5 h-5 text-[rgb(255,73,37)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{hub.name}</h3>
                                        <p className="text-neutral-400 m-0 text-sm">{hub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* — Section 8: Why Outsource to SL —————————————————————————————————————— */}
                    <section
                        id="why-outsource"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Why Outsource Software Development to Sri Lanka?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Sri Lanka may not have the sheer scale of India or the Philippines, but that's increasingly seen as an advantage. Here is what sets Sri Lankan <strong>software companies</strong> apart in the global outsourcing landscape:
                        </p>

                        <div className="space-y-6 my-8">
                            {[
                                {
                                    icon: Users,
                                    title: "English Proficiency",
                                    desc: "Sri Lanka consistently ranks among the top English-speaking nations in South Asia. English is taught as a second language from primary school and used as the medium of instruction at most universities. This results in naturally fluent communication — not just competent translation — significantly reducing friction in remote collaborations.",
                                },
                                {
                                    icon: Award,
                                    title: "Quality Over Volume",
                                    desc: "Rather than competing on scale, Sri Lankan firms compete on quality. The country produces roughly 10,000 IT graduates annually — a manageable pipeline that allows companies to be highly selective in hiring. The result is teams with higher average skill levels per capita compared to mass-production talent markets. Several Sri Lankan engineers have won global competitive programming awards.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Competitive Cost Structure",
                                    desc: "Hourly rates of $20–$60 USD offer 50–70% savings over UK or US teams without compromising quality. Following the 2022 economic adjustment, the rupee has stabilised and the cost structure has become even more attractive for international clients while still supporting strong local engineering salaries.",
                                },
                                {
                                    icon: Globe,
                                    title: "Strategic Timezone (UTC+5:30)",
                                    desc: "Full-day overlap with European teams enables seamless standups, sprint reviews, and pair programming sessions. Partial overlap with US East Coast enables critical evening handoffs. This timezone advantage is frequently cited by UK, European, and Australian clients as a primary reason for choosing Sri Lanka.",
                                },
                                {
                                    icon: Building2,
                                    title: "Government-Backed Digital Growth",
                                    desc: "The 2026 national budget allocated ~US$98 million for digitisation projects. The new GOVTECH initiative (replacing ICTA) leads digital governance, TRACE Expert City offers purpose-built tech facilities, and BOI incentives attract international companies to establish R&D centres. This infrastructure commitment signals long-term stability for the sector.",
                                },
                                {
                                    icon: Shield,
                                    title: "Intellectual Property Safety",
                                    desc: "Sri Lanka has established IP protection frameworks and is a signatory to major international intellectual property treaties (Berne Convention, Paris Convention, TRIPS). This provides legal recourse for IP disputes — an important consideration for companies outsourcing proprietary software development.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="w-10 h-10 bg-[rgb(255,73,37)]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-[rgb(255,73,37)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-neutral-400 m-0 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* — Industry Voices ————————————————————————————————————————————————————— */}
                    <section
                        id="industry-voices"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Award className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Industry Voices & Data Points
                        </h2>
                        <p className="text-neutral-400 mb-8">
                            What industry bodies, analysts, and trade publications are saying about the island's software sector in 2026.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    quote: "Sri Lanka's IT/BPM sector recorded US$885.4 million in export earnings in the first half of 2026 — a 17.6% year-on-year increase — signalling a structural shift from cost-centre outsourcing to value-added digital engineering.",
                                    source: "Export Development Board of Sri Lanka (EDB)",
                                    url: "https://www.srilankabusiness.com/",
                                    context: "Monthly Export Performance Reports, January–June 2026",
                                },
                                {
                                    quote: "The Sri Lankan IT workforce is shifting from execution-only outsourcing to intellectual property co-creation. Companies like WSO2 and 99x are now building products, not just providing staff augmentation.",
                                    source: "SLASSCOM Industry Report 2026",
                                    url: "https://slasscom.lk/",
                                    context: "Annual Industry Overview & Talent Pipeline Analysis",
                                },
                                {
                                    quote: "Sri Lanka produces approximately 10,000 IT graduates annually from a highly selective university system, competing on quality rather than volume — a fundamentally different proposition from India's scale-first model.",
                                    source: "University Grants Commission of Sri Lanka / SLASSCOM",
                                    url: "https://www.ugc.ac.lk/",
                                    context: "Higher Education Statistics, 2025",
                                },
                                {
                                    quote: "The government's 2026 digital budget of approximately 30 billion LKR (~US$98M) — including the Unique Digital Identity initiative and e-Grama Niladhari programme — represents the largest public-sector technology investment in Sri Lanka's history.",
                                    source: "National Budget 2026 / Central Bank of Sri Lanka",
                                    url: "https://www.cbsl.gov.lk/en/publications/economic-and-financial-reports/annual-economic-review",
                                    context: "Annual Economic Review 2025 & Budget Estimates 2026",
                                },
                                {
                                    quote: "ICT/BPM export revenue reached US$1,645 million in 2025 — up 8.8% year-on-year — and the industry is targeting US$3 billion in exports and a US$15 billion contribution to the digital economy by 2030, making software one of Sri Lanka's top export earners.",
                                    source: "Export Development Board (EDB) & SLASSCOM",
                                    url: "https://www.srilankabusiness.com/ict/",
                                    context: "ICT/BPM Export Performance & 2030 Industry Targets",
                                },
                            ].map((item) => (
                                <blockquote key={item.source} className="bg-neutral-950 border-l-4 border-[rgb(255,73,37)] rounded-r-xl p-6 m-0">
                                    <p className="text-neutral-200 mb-4 italic leading-relaxed">
                                        &ldquo;{item.quote}&rdquo;
                                    </p>
                                    <footer className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[rgb(255,73,37)] hover:underline no-underline">
                                            — {item.source}
                                        </a>
                                        <span className="text-xs text-neutral-600">{item.context}</span>
                                    </footer>
                                </blockquote>
                            ))}
                        </div>
                    </section>

                    {/* — Proven Results (Publisher Experience / Social Proof) ————————————————————— */}
                    <section
                        id="proven-results"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <BarChart3 className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Proven Results from This Market
                        </h2>

                        <p className="text-neutral-300 mb-4">
                            Research is only half the story. We don&apos;t just write about Sri Lanka&apos;s software industry — we build in it every week. The outcomes below come from our own client engagements across Sri Lanka and the UK — see our <Link href="/case-studies" className="text-[rgb(255,73,37)] hover:underline">Sri Lanka software case studies</Link> for the full write-ups. We include them for transparency about the hands-on experience behind this guide, and to illustrate what a capable <strong>software company in Sri Lanka</strong> can realistically deliver.
                        </p>
                        <p className="text-neutral-500 text-sm italic mb-8">
                            As stated in our <a href="#methodology" className="text-[rgb(255,73,37)] hover:underline no-underline">methodology</a>, ARC AI publishes this guide and is <em>deliberately excluded from the 23-company ranking above</em>. The figures here describe our own delivery record — not a competitive placement.
                        </p>

                        {/* Aggregate stats strip */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                            {[
                                { icon: Star, value: "4.9/5", label: "Average client rating" },
                                { icon: Briefcase, value: "100+", label: "Projects delivered" },
                                { icon: TrendingUp, value: "+67%", label: "Avg. lead increase" },
                                { icon: Rocket, value: "50+", label: "Products shipped" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center">
                                    <stat.icon className="w-5 h-5 text-[rgb(255,73,37)] mx-auto mb-2" />
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-neutral-600 -mt-4 mb-8">
                            Based on verified ARC AI client reviews and delivered projects across the UK and Sri Lanka.
                        </p>

                        {/* Result cards from real case studies */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {[
                                {
                                    client: "Tourism & Hospitality",
                                    location: "Sri Lanka",
                                    tags: ["AI Chatbot", "Smart Website"],
                                    summary: "A 24/7 multilingual (Sinhala, Tamil & English) AI assistant replaced 6–12 hour email response times.",
                                    metrics: [
                                        { label: "Booking enquiries", value: "+167%" },
                                        { label: "Response time", value: "99% faster" },
                                        { label: "Support cost", value: "−60%" },
                                    ],
                                },
                                {
                                    client: "Real Estate Agency",
                                    location: "Colombo, Sri Lanka",
                                    tags: ["AI Sales SDR", "Smart Website"],
                                    summary: "Automated lead qualification and viewing scheduling freed the sales team from manual follow-up.",
                                    metrics: [
                                        { label: "Qualified leads", value: "+247%" },
                                        { label: "Viewings booked", value: "+160%" },
                                        { label: "Agent admin time", value: "−75%" },
                                    ],
                                },
                                {
                                    client: "E-Commerce Retailer",
                                    location: "Birmingham, UK",
                                    tags: ["Next.js Rebuild", "SEO"],
                                    summary: "A full rebuild on Next.js plus a technical SEO overhaul turned a slow store into a revenue engine.",
                                    metrics: [
                                        { label: "Monthly revenue", value: "+183%" },
                                        { label: "Organic traffic", value: "+237%" },
                                        { label: "PageSpeed score", value: "32 → 94" },
                                    ],
                                },
                            ].map((cs) => (
                                <div key={cs.client} className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {cs.tags.map((t) => (
                                            <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-[rgb(255,73,37)]/10 text-[rgb(255,73,37)] border border-[rgb(255,73,37)]/20 uppercase tracking-wider font-semibold">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-0.5 m-0">{cs.client}</h3>
                                    <p className="text-xs text-neutral-500 mb-3 m-0">{cs.location}</p>
                                    <p className="text-sm text-neutral-400 mb-4 m-0">{cs.summary}</p>
                                    <div className="mt-auto space-y-2 border-t border-neutral-800 pt-4">
                                        {cs.metrics.map((m) => (
                                            <div key={m.label} className="flex items-center justify-between gap-2">
                                                <span className="text-xs text-neutral-500">{m.label}</span>
                                                <span className="text-sm font-bold text-[rgb(255,73,37)]">{m.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
                            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(255,73,37)] hover:underline no-underline">
                                Read the full case studies
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(255,73,37)] hover:underline no-underline">
                                Browse client success stories &amp; reviews
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>

                    {/* — Section 9: FAQs —————————————————————————————————————————————————————— */}
                    <section
                        id="faq"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Frequently Asked Questions
                        </h2>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl px-6 md:px-8">
                            {faqs.map((faq) => (
                                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </section>

                    {/* — Related Articles ———————————————————————————————————————————————————— */}
                    <section
                        className="mt-16"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Related Reading</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    title: "Client Success Stories & Verified Reviews",
                                    href: "/success-stories",
                                    tag: "Social Proof",
                                },
                                {
                                    title: "Case Studies — Real Results & Metrics",
                                    href: "/case-studies",
                                    tag: "Case Studies",
                                },
                                {
                                    title: "How AI Is Transforming Sri Lankan Businesses in 2026",
                                    href: "/blog/how-ai-transforms-sri-lanka-businesses-2026",
                                    tag: "AI Case Studies",
                                },
                                {
                                    title: "Top Automation Companies in Sri Lanka",
                                    href: "/blog/automation-companies-sri-lanka",
                                    tag: "Process Automation",
                                },
                                {
                                    title: "AI Companies in Sri Lanka — Complete Guide",
                                    href: "/ai-companies-sri-lanka",
                                    tag: "AI Companies",
                                },
                                {
                                    title: "Smart Websites in Sri Lanka — The 2026 Standard",
                                    href: "/blog/smart-websites-sri-lanka-2026",
                                    tag: "Web Technology",
                                },
                                {
                                    title: "AI Agents for Sri Lankan Businesses",
                                    href: "/blog/ai-agents-sri-lanka",
                                    tag: "AI Agents",
                                },
                                {
                                    title: "Web Design Companies in Sri Lanka — 2026 Guide",
                                    href: "/web-design-sri-lanka",
                                    tag: "Web Design",
                                },
                            ].map((article) => (
                                <Link
                                    key={article.href}
                                    href={article.href}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-[rgb(255,73,37)]/30 transition-colors no-underline group"
                                >
                                    <span className="text-xs text-[rgb(255,73,37)] font-semibold uppercase tracking-wider">
                                        {article.tag}
                                    </span>
                                    <p className="text-white font-semibold mt-2 mb-0 group-hover:text-[rgb(255,73,37)] transition-colors text-sm">
                                        {article.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Bottom CTA (subtle) ─────────────────── */}
                    <section
                        className="mt-16"
                    >
                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 text-center">
                            <div className="flex items-center justify-center gap-1.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[rgb(255,73,37)] fill-[rgb(255,73,37)]" />
                                ))}
                                <span className="text-sm text-neutral-400 ml-2">4.9/5 from 100+ projects delivered</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Need help choosing the right software partner?
                            </h3>
                            <p className="text-neutral-400 mb-6 max-w-xl mx-auto text-sm">
                                Every project has unique requirements — budget, timeline, technology stack, and team size. If you&apos;re evaluating Sri Lankan software partners for your next project, we&apos;re happy to share our perspective based on years of operating in this market — no strings attached.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors text-sm no-underline"
                                >
                                    Get a Free Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/success-stories"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 text-neutral-200 font-semibold rounded-lg hover:border-[rgb(255,73,37)]/40 hover:text-[rgb(255,73,37)] transition-colors text-sm no-underline"
                                >
                                    See client success stories
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ── Author / E-E-A-T Section ─────────────── */}
                    <section
                        className="mt-16"
                    >
                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-start gap-5">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(255,73,37)] to-orange-600 flex items-center justify-center shrink-0" role="img" aria-label="Shahid Shamir — Founder of ARC AI">
                                    <span className="text-white text-xl font-black tracking-wide">SS</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 m-0">About the Author</h3>
                                    <p className="text-sm text-[rgb(255,73,37)] font-medium mb-3 m-0">
                                        <a href="https://www.linkedin.com/in/shahid-shamir-2ab901105/" target="_blank" rel="noopener noreferrer" className="hover:underline">Shahid Shamir</a> &middot; Founder &amp; Lead Engineer, <a href="https://www.linkedin.com/company/105845719" target="_blank" rel="noopener noreferrer" className="hover:underline">ARC AI</a>
                                    </p>
                                    <p className="text-sm text-neutral-400 m-0">
                                        This guide was researched and compiled by Shahid Shamir, founder of ARC AI, with 4+ years of hands-on experience building software products across Colombo and Birmingham (UK). Having delivered 100+ projects for clients in tourism, real estate, fintech, and e-commerce, Shahid evaluates the Sri Lankan software landscape from direct industry participation — not desk research.
                                    </p>
                                    <p className="text-sm text-neutral-400 mt-3 m-0">
                                        Data sourced from the <a href="https://www.srilankabusiness.com/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Export Development Board (EDB)</a>, <a href="https://www.cbsl.gov.lk/en/publications/economic-and-financial-reports/annual-economic-review" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Central Bank Annual Economic Review 2025</a>, <a href="https://slasscom.lk/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM</a>, <a href="https://clutch.co/lk" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Clutch</a>, <a href="https://www.goodfirms.co/software-development/sri-lanka" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">GoodFirms</a>, and <a href="https://www.gartner.com/reviews" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Gartner Peer Insights</a>. Companies were independently evaluated — readers are encouraged to verify all claims via the listed websites and third-party review platforms.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <a href="https://www.linkedin.com/in/shahid-shamir-2ab901105/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">LinkedIn (Personal)</a>
                                        <span className="text-neutral-800">|</span>
                                        <a href="https://www.linkedin.com/company/105845719" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">LinkedIn (ARC AI)</a>
                                        <span className="text-neutral-800">|</span>
                                        <Link href="/about" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">About ARC AI</Link>
                                        <span className="text-neutral-800">|</span>
                                        <Link href="/contact" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">Contact Us</Link>
                                        <span className="text-neutral-800">|</span>
                                        <Link href="/blog" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">More Articles</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Tags ─────────────────────────────────── */}
                    <div
                        className="mt-12 pt-8 border-t border-neutral-800"
                    >
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                            Topics Covered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { tag: "Software Companies Sri Lanka", href: "/blog" },
                                { tag: "IT Outsourcing Sri Lanka", href: "/blog" },
                                { tag: "Software Development Colombo", href: "/web-design-sri-lanka" },
                                { tag: "AI Development Sri Lanka", href: "/ai-companies-sri-lanka" },
                                { tag: "Enterprise Software", href: "/blog" },
                                { tag: "Offshore Development", href: "/blog" },
                                { tag: "Sri Lanka vs India", href: "#comparison" },
                                { tag: "AI Automation", href: "/ai-automation-sri-lanka" },
                                { tag: "AI Consultants", href: "/ai-consultants-sri-lanka" },
                                { tag: "Web Design Sri Lanka", href: "/web-design-sri-lanka" },
                            ].map((item) => (
                                <Link
                                    key={item.tag}
                                    href={item.href}
                                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-[rgb(255,73,37)]/30 hover:text-[rgb(255,73,37)] transition-colors no-underline"
                                >
                                    {item.tag}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6">
                            <SocialShareButtons />
                        </div>
                    </div>

                    {/* ── Navigation ───────────────────────────── */}
                    <div
                        className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between"
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">All Articles</div>
                            </div>
                        </Link>
                        <Link
                            href="/ai-companies-sri-lanka"
                            className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors text-right"
                        >
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Related</div>
                                <div className="font-semibold">AI Companies Guide</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Cross-link to Web Design Guide */}
                    <div
                        className="mt-8 bg-gradient-to-br from-[rgb(255,73,37)]/10 via-neutral-950 to-black border border-[rgb(255,73,37)]/20 rounded-xl p-6"
                    >
                        <Link href="/web-design-sri-lanka" className="flex items-center justify-between gap-4 group no-underline">
                            <div>
                                <div className="text-xs font-bold text-[rgb(255,73,37)] uppercase tracking-widest mb-1">Related Pillar Guide</div>
                                <h4 className="text-lg font-bold text-white group-hover:text-[rgb(255,73,37)] transition-colors m-0">Web Design Companies in Sri Lanka — The Complete 2026 Guide</h4>
                                <p className="text-sm text-neutral-400 mt-1 m-0">12 agencies evaluated · Pricing benchmarks · WordPress vs Next.js</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-neutral-400 group-hover:text-[rgb(255,73,37)] transition-colors shrink-0" />
                        </Link>
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    );
}
