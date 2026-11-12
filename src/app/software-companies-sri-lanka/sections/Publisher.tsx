/* Section copy moved verbatim out of content.tsx so the page order can change
 * without retyping it. Edit the copy here; content.tsx only decides the order. */
import Link from "next/link";
import { companyCount } from "../page-data";
import { BarChart3, Star, Briefcase, TrendingUp, Rocket, ArrowRight, ArrowLeft } from "lucide-react";

export function ProvenResults() {
    return (
        <>
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
                            As stated in our <a href="#methodology" className="text-[rgb(255,73,37)] hover:underline no-underline">methodology</a>, ARC AI publishes this guide and is <em>deliberately excluded from the {companyCount}-company list above</em>. The figures here describe our own delivery record — not a competitive placement.
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
        </>
    );
}

export function RelatedReading() {
    return (
        <>
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
        </>
    );
}

export function BottomCta() {
    return (
        <>
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
        </>
    );
}

export function AuthorBox() {
    return (
        <>
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
                                        Industry figures come from the <a href="https://www.srilankabusiness.com/ict-services/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Export Development Board (EDB)</a>, <a href="https://slasscom.lk/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM</a>, the Ministry of Finance&apos;s Budget Speech 2026 and DataReportal; ratings from <a href="https://clutch.co/lk" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Clutch</a>, <a href="https://www.gartner.com/reviews" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Gartner Peer Insights</a> and G2; and company facts from each company&apos;s own website, LinkedIn page and reputable press. Every profile lists its sources — readers are encouraged to verify details via the listed websites and third-party review platforms.
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
        </>
    );
}

export function PageNav() {
    return (
        <>
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
        </>
    );
}
