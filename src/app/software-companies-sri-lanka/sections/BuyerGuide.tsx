/* Section copy moved verbatim out of content.tsx so the page order can change
 * without retyping it. Edit the copy here; content.tsx only decides the order. */
import Link from "next/link";
import { Shield, Cpu, Briefcase, Users, TrendingUp, Globe, Scale, Award, Building2 } from "lucide-react";
import { SOURCES } from "../page-data";

export function WhatToLookFor() {
    return (
        <>
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
                                    desc: "Sri Lankan engineering teams generally work in English, but verify their project management methodology. Look for agile/Scrum adoption with regular sprint demos, transparent JIRA/Linear boards, and dedicated account managers. Request a trial sprint before committing to a long-term engagement.",
                                },
                                {
                                    icon: Shield,
                                    title: "4. Security & Compliance",
                                    desc: "For enterprise or regulated industry projects, verify their security posture: ISO 27001 certification, SOC2 compliance practices, GDPR awareness, and secure SDLC processes. Ask specifically about code review workflows, vulnerability scanning (SAST/DAST), and data encryption standards at rest and in transit.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "5. Scalability & Talent Retention",
                                    desc: "Can they scale from 3 to 30 engineers as your project grows? What is their annual developer retention rate? High turnover is a critical red flag — you lose accumulated domain knowledge with every departure. Ask for their retention numbers directly.",
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
        </>
    );
}

export function Versus() {
    return (
        <>
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
                                        { factor: "Talent Pool Size", sl: "About 175,000 (SLASSCOM)", india: "About 5.95 million (NASSCOM, FY26)", ph: "About 1.9 million in IT-BPM (IBPAP, 2025)" },
                                        { factor: "English Proficiency", sl: "Strong in the IT workforce; 73rd in EF EPI 2025", india: "Varies by region; 74th in EF EPI 2025", ph: "Very High (US-influenced)" },
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

                        <p className="text-neutral-500 text-xs italic">
                            Talent pool figures: <a href={SOURCES.slasscomReview.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM</a>, <a href={SOURCES.nasscomWorkforce.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">NASSCOM</a> and <a href={SOURCES.ibpapWorkforce.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">IBPAP</a>. English ranking: <a href={SOURCES.efEpi2025.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">EF English Proficiency Index 2025</a>. The qualitative rows are our own assessment.
                        </p>

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
        </>
    );
}

export function WhyOutsource() {
    return (
        <>
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
                                    desc: "English is taught as a second language from primary school and is the working language of the software industry, so engineering teams deal with overseas clients directly. Country-wide proficiency is more mixed: the EF English Proficiency Index 2025 places Sri Lanka 73rd of 123, just ahead of India. Judge a vendor by the people you will actually work with, and ask for a call with the delivery team before you sign.",
                                },
                                {
                                    icon: Award,
                                    title: "Quality Over Volume",
                                    desc: "Rather than competing on scale, Sri Lankan firms compete on quality. The country produces about 17,000 IT graduates a year, a small pipeline next to India's, which pushes firms toward smaller, more senior teams. University of Moratuwa teams placed first worldwide in the IEEEXtreme programming competition in 2009 and third in 2014.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Competitive Cost Structure",
                                    desc: "Most Sri Lankan firms that publish a rate on Clutch list it at under $50 an hour. See the pricing section above for the published rates of companies in this guide.",
                                },
                                {
                                    icon: Globe,
                                    title: "Strategic Timezone (UTC+5:30)",
                                    desc: "Full-day overlap with European teams enables seamless standups, sprint reviews, and pair programming sessions. Partial overlap with US East Coast enables critical evening handoffs.",
                                },
                                {
                                    icon: Building2,
                                    title: "Government-Backed Digital Growth",
                                    desc: "The 2026 Budget Speech sets out government investment of over Rs. 25.5 billion in digitalisation. GovTech Sri Lanka, a state-owned company approved by Cabinet in May 2025 to take over from ICTA, leads implementation of national digital projects, and TRACE Expert City offers purpose-built tech facilities.",
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
                        <p className="text-neutral-500 text-xs italic">
                            Sources: <a href={SOURCES.efEpi2025.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">EF English Proficiency Index 2025</a>, <a href={SOURCES.slasscomGraduates.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM graduate figures</a>, <a href={SOURCES.ieeeXtreme.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">IEEEXtreme results</a>, <a href={SOURCES.budgetSpeech2026.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Budget Speech 2026</a>, <a href={SOURCES.govTech.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">GovTech and ICTA</a>, <a href={SOURCES.wipo.url} target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">WIPO treaty membership</a>.
                        </p>
                    </section>
        </>
    );
}
