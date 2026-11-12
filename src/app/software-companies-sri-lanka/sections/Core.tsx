/* The list-first sections of /software-companies-sri-lanka.
 * Everything here is a Server Component and reads from page-data.ts, so the
 * visible page and the structured data cannot drift apart. */
import Link from "next/link";
import { Award, BarChart3, HelpCircle, Scale, Handshake } from "lucide-react";
import { InteractiveComparisonTable } from "../ClientComponents";
import {
    CHANGELOG,
    GUIDE_YEAR,
    PAGE_DATES,
    SOURCES,
    captiveCentres,
    categoryMeta,
    categoryOrder,
    companies,
    companiesInRenderOrder,
    companyCount,
    faqs,
    formatDisplayDate,
    formatMonthYear,
    hireableCompanies,
    keyStats,
    productCompanies,
    sizeSortValue,
} from "../page-data";
import type { Company } from "../types";
import s from "../pillar.module.css";

const H2 = "text-2xl md:text-4xl font-bold text-white mt-16 mb-6 flex items-center gap-3";
const ICON = "hidden md:block w-8 h-8 shrink-0 text-[rgb(255,73,37)]";
const LINK = "text-[rgb(255,73,37)] hover:underline";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const TYPE_LABEL: Record<Company["type"], string> = {
    Product: "Product company",
    Services: "Services company",
    "Captive centre": "Captive centre (not for hire)",
};

/* ── Hero ── */

const jumpLinks = [
    { href: "#comparison-table", label: `Compare all ${companyCount}` },
    { href: "#hire", label: "Companies you can hire" },
    { href: "#pricing", label: "Rates" },
    { href: "#what-to-look-for", label: "How to choose" },
    { href: "#faq", label: "FAQ" },
];

export function Hero() {
    return (
        <section className="relative px-4 md:px-8 pt-6 md:pt-14 pb-8 md:pb-10">
            <div className="relative z-10 max-w-4xl mx-auto">
                <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                    Industry Guide · Updated {formatMonthYear(PAGE_DATES.modified)}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Software Companies in Sri Lanka
                </h1>
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,73,37)] to-orange-500">
                    {companyCount} Top Firms Compared ({GUIDE_YEAR})
                </p>

                {/* Direct answer paragraph: factual, no subjective "best". */}
                <p className="text-base md:text-lg text-neutral-200 mb-5 max-w-3xl font-medium">
                    The best-known software companies in Sri Lanka are WSO2, Virtusa, 99x, IFS, LSEG Technology,
                    Sysco LABS, Calcey Technologies and Rootcode. This guide compares {companyCount} software
                    development and IT companies by size, specialty and type, from global enterprise platforms to
                    boutique studios, and links every profile to its sources.
                </p>

                <ul className="flex flex-wrap gap-x-5 gap-y-1 text-neutral-400 text-sm list-none p-0 m-0">
                    <li>Published {formatDisplayDate(PAGE_DATES.published)}</li>
                    <li>
                        <span className="text-green-500" aria-hidden="true">✓</span> Last updated{" "}
                        <time dateTime={PAGE_DATES.modified}>{formatDisplayDate(PAGE_DATES.modified)}</time>
                    </li>
                    <li>{companyCount} companies</li>
                    <li>{faqs.length} questions answered</li>
                </ul>

                <nav aria-label="Jump to" className="flex flex-wrap gap-2 mt-5">
                    {jumpLinks.map((j) => (
                        <a
                            key={j.href}
                            href={j.href}
                            className="px-4 py-2 text-sm font-semibold rounded-full border border-neutral-800 bg-neutral-950 text-neutral-200 hover:border-[rgb(255,73,37)]/50 hover:text-[rgb(255,73,37)] transition-colors"
                        >
                            {j.label}
                        </a>
                    ))}
                </nav>
            </div>
        </section>
    );
}

/* ── Comparison table (the list comes first) ── */

export function ComparisonSection() {
    return (
        <section id="rankings" className="scroll-mt-24">
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 md:mt-4 mb-3 md:mb-4 flex items-center gap-3">
                <Award className={ICON} />
                Software Companies in Sri Lanka: All {companyCount} Compared
            </h2>
            <p className="text-neutral-400 mb-6 md:mb-8">
                Grouped by company size, not ranked: from global enterprise companies with tens of thousands of
                employees to studios of fewer than 50 engineers. Select a name to jump to its profile.
            </p>

            <div id="comparison-table" className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 md:p-6 scroll-mt-24">
                <h3 className="text-lg font-bold text-white mb-3 md:mb-1">Quick Comparison: Filter &amp; Sort</h3>
                <p className="hidden md:block text-xs text-neutral-500 mb-4">
                    Filter by size tier or company type, search by name or specialty, and sort by any column.
                </p>
                <InteractiveComparisonTable
                    companies={companiesInRenderOrder.map((c) => ({
                        slug: c.slug,
                        name: c.name,
                        founded: c.founded,
                        specialty: c.specialty,
                        size: c.slHeadcount ? `${c.slHeadcount.label} in Sri Lanka` : c.size,
                        sizeSort: sizeSortValue(c),
                        rating: c.rating?.value,
                        ratingKind: c.rating
                            ? `${c.rating.kind}${c.rating.reviews ? ` (${c.rating.reviews.toLocaleString("en-US")})` : ""}`
                            : undefined,
                        category: c.category,
                        type: c.type,
                    }))}
                />
                <p className="text-xs text-neutral-600 mt-3">
                    A score appears only when it comes from client or product reviews and rests on at least
                    five reviews; the number of reviews is shown in brackets. See{" "}
                    <a href="#methodology" className="underline hover:text-[rgb(255,73,37)]">how this list is verified</a>.
                </p>
            </div>
        </section>
    );
}

/* ── Company profiles ── */

function Sources({ company }: { company: Company }) {
    return (
        <p className={s.foot}>
            {company.careersUrl && (
                <>
                    <a href={company.careersUrl} {...EXTERNAL}>Careers at {company.name}</a>
                    {" · "}
                </>
            )}
            {company.internshipUrl && (
                <>
                    <a href={company.internshipUrl} {...EXTERNAL}>Internships</a>
                    {" · "}
                </>
            )}
            {company.sources.length > 0 && (
                <>
                    <b>Sources:</b>{" "}
                    {company.sources.map((src, i) => (
                        <span key={src.url}>
                            {i > 0 && ", "}
                            <a href={src.url} {...EXTERNAL}>{src.label}</a>
                        </span>
                    ))}
                    {company.verifiedOn && <> · Checked {formatMonthYear(company.verifiedOn)}</>}
                </>
            )}
        </p>
    );
}

export function CompanyCard({ company }: { company: Company }) {
    const compact = company.depth === "compact";
    return (
        <div id={company.slug} className={compact ? `${s.card} ${s.compact}` : s.card}>
            <div className={s.head}>
                <div>
                    <h3 className={s.name}>{company.name}</h3>
                    <p className={s.tagline}>{company.tagline}</p>
                </div>
                <div className={s.actions}>
                    {company.rating && (
                        <a
                            href={company.rating.url}
                            {...EXTERNAL}
                            className={s.rating}
                            title={`${company.rating.kind} on ${company.rating.platform}`}
                        >
                            <i aria-hidden="true">★</i>
                            {company.rating.value}
                            <span>
                                / 5 · {company.rating.platform}
                                {company.rating.reviews ? ` · ${company.rating.reviews.toLocaleString("en-US")} reviews` : ""}
                            </span>
                        </a>
                    )}
                    <a href={company.website} {...EXTERNAL} className={s.visit}>
                        Visit website ↗
                    </a>
                </div>
            </div>

            <ul className={s.meta}>
                <li>Est. {company.founded}</li>
                {company.sriLankaSince && <li>In Sri Lanka since {company.sriLankaSince}</li>}
                <li>{company.hq}</li>
                <li>{company.size} employees</li>
                {company.slHeadcount && <li>{company.slHeadcount.label} in Sri Lanka</li>}
                <li>{TYPE_LABEL[company.type]}</li>
                {company.formerNames && company.formerNames.length > 0 && (
                    <li>Formerly {company.formerNames.join(", ")}</li>
                )}
            </ul>

            <p className={s.desc}>{company.description}</p>

            {company.project && (
                <p className={s.project}>
                    <span className={s.label}>Published project</span>
                    {company.project.text}{" "}
                    <a href={company.project.sourceUrl} {...EXTERNAL}>Source</a>
                </p>
            )}

            {(company.notableClients || company.techStack) && (
                <dl className={s.facts}>
                    {company.notableClients && (
                        <div>
                            <dt>Clients: </dt>
                            <dd>{company.notableClients}</dd>
                        </div>
                    )}
                    {company.techStack && (
                        <div>
                            <dt>Tech stack: </dt>
                            <dd>{company.techStack}</dd>
                        </div>
                    )}
                </dl>
            )}

            {compact ? (
                <ul className={s.services}>
                    {company.services.map((service) => (
                        <li key={service}>{service}</li>
                    ))}
                </ul>
            ) : (
                <div className={s.cols}>
                    <div>
                        <span className={s.label}>Core services</span>
                        <ul className={s.services}>
                            {company.services.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.bestFor}>
                        <span className={s.label}>Best for</span>
                        <p>{company.bestFor}</p>
                    </div>
                </div>
            )}

            <Sources company={company} />
        </div>
    );
}

export function ProfilesSection() {
    return (
        <>
            {categoryOrder.map((category) => {
                const meta = categoryMeta[category];
                const list = companies.filter((c) => c.category === category);
                if (list.length === 0) return null;
                return (
                    <section key={category} aria-labelledby={meta.id}>
                        <div id={meta.id} className={s.tier}>
                            <h2>{meta.heading}</h2>
                            <p>
                                {meta.description} {list.length} companies, not ranked.
                            </p>
                        </div>
                        {list.map((company) => (
                            <CompanyCard key={company.slug} company={company} />
                        ))}
                    </section>
                );
            })}
        </>
    );
}

/* ── Vendor track: only firms a buyer can actually hire ── */

export function HireSection() {
    const names = (list: Company[]) =>
        list.map((c, i) => (
            <span key={c.slug}>
                {i > 0 && (i === list.length - 1 ? " and " : ", ")}
                <a href={`#${c.slug}`} className={LINK}>{c.name}</a>
            </span>
        ));
    return (
        <section id="hire" className="scroll-mt-24">
            <h2 className={H2}>
                <Handshake className={ICON} />
                Software Development Companies in Sri Lanka You Can Hire
            </h2>
            <p className="text-neutral-300 mb-4">
                Not every company on this list takes client work. {hireableCompanies.length} of the {companyCount}{" "}
                are <strong>software development companies</strong> that build software for clients, on a
                project, dedicated-team or staff-augmentation basis:
            </p>
            <ul className={s.linkList}>
                {hireableCompanies.map((c) => (
                    <li key={c.slug}>
                        <a href={`#${c.slug}`}>{c.name}</a>
                        <span>{c.bestFor}</span>
                    </li>
                ))}
            </ul>
            {productCompanies.length > 0 && (
                <p className="text-neutral-400 text-sm mb-3">
                    <strong className="text-neutral-200">Product companies</strong> sell their own software
                    rather than building yours: {names(productCompanies)}.
                </p>
            )}
            {captiveCentres.length > 0 && (
                <p className="text-neutral-400 text-sm">
                    <strong className="text-neutral-200">Captive centres</strong> build only for their parent
                    company and cannot be hired: {names(captiveCentres)}. They are listed because they employ
                    a large share of the country&apos;s engineers and show what Sri Lankan teams deliver.
                </p>
            )}
            <p className="text-neutral-400 text-sm mt-4">
                Next: <a href="#what-to-look-for" className={LINK}>what to look for in a software partner</a> and{" "}
                <a href="#pricing" className={LINK}>what software development costs in Sri Lanka</a>.
            </p>
        </section>
    );
}

/* ── Key takeaways for buyers (copy unchanged, moved below the list) ── */

export function KeyTakeaways() {
    return (
        <aside
            id="key-takeaways"
            className="mt-16 rounded-2xl border border-[rgb(255,73,37)]/20 bg-[rgb(255,73,37)]/[0.03] p-6 md:p-8 space-y-4 scroll-mt-24"
        >
            <p className="text-sm font-bold uppercase tracking-wider text-[rgb(255,73,37)]">Key Takeaways for Buyers</p>
            <ul className="space-y-3 text-neutral-300 list-none p-0 m-0">
                <li>
                    <strong className="text-white">Sri Lanka is a premier destination for software outsourcing</strong>,
                    offering high-quality, English-speaking engineering talent at competitive rates (roughly
                    $20–$60/hour by our estimate).
                </li>
                <li>
                    <strong className="text-white">The market has three distinct tiers:</strong> Enterprise firms
                    (like WSO2, Virtusa, LSEG Technology), Mid-Market specialists (Calcey, Rootcode, Surge Global),
                    and Agile boutique studios (like Fcode Labs and Loons Lab).
                </li>
                <li>
                    <strong className="text-white">Choosing the right software development company in Sri Lanka</strong>{" "}
                    depends on your project size. Startups benefit from boutique firms, while large multinationals
                    typically partner with enterprise-scale vendors.
                </li>
                <li>
                    <strong className="text-white">Compared to India</strong>, Sri Lanka focuses on quality over
                    volume, making it ideal for teams of 3–30 developers requiring senior attention and design
                    excellence.
                </li>
            </ul>
        </aside>
    );
}

/* ── Key statistics (replaces the old "Industry Voices" quotes) ──
 * Plain figures, each linked to the document it comes from. No paraphrase is
 * presented as a quotation. The id is kept so existing links still work. */

export function KeyStatistics() {
    return (
        <section id="industry-voices" className="scroll-mt-24">
            <h2 className={H2}>
                <BarChart3 className={ICON} />
                Key Statistics and Sources
            </h2>
            <p className="text-neutral-400 mb-6">
                The figures used in this guide, each linked to the document it comes from.
            </p>
            <ul className={s.linkList}>
                {keyStats.map((stat) => (
                    <li key={stat.value + stat.source}>
                        <strong className="block text-xl text-white">{stat.value}</strong>
                        <span>{stat.text}</span>
                        <span>
                            Source:{" "}
                            <a href={SOURCES[stat.source].url} target="_blank" rel="noopener noreferrer">
                                {SOURCES[stat.source].label}
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

/* ── Methodology ── */

export function Methodology() {
    const latest = CHANGELOG[0];
    return (
        <section id="methodology" className="scroll-mt-24">
            <h2 className={H2}>
                <Scale className={ICON} />
                How This List Is Compiled and Verified
            </h2>

            <p className="text-neutral-300 mb-6">
                This is an editorial list of <strong>software companies in Sri Lanka</strong>, not a paid
                directory. No company paid to be included, and none can pay to change its profile.
            </p>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8 my-8 space-y-6">
                <div>
                    <h3 className="text-lg font-bold text-white mb-3">Who is included</h3>
                    <ul className={s.services}>
                        <li>Software is the company&apos;s main business: it sells its own software or builds software for clients.</li>
                        <li>It has an engineering team working in Sri Lanka today.</li>
                        <li>It has been operating for at least three years.</li>
                        <li>Its key facts can be checked against its own website and at least one independent source.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-3">How each profile is checked</h3>
                    <p className="text-sm text-neutral-400 m-0">
                        Founding year, headquarters, team size, clients and technology come from the company&apos;s
                        own website, its LinkedIn page or reputable press. Every profile lists its sources and the
                        month it was last checked. Where we could not find a source for a claim, we left it out.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-3">How companies are grouped</h3>
                    <p className="text-sm text-neutral-400 m-0">
                        Companies are grouped by size (enterprise, mid-size, boutique) and labelled by type:
                        product company, services company or captive centre. The order within a group is not a
                        ranking.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-3">How to read the ratings</h3>
                    <p className="text-sm text-neutral-400 m-0">
                        Ratings are quoted from the named platform and link to it. We show a score only when it
                        comes from client reviews (Clutch) or product reviews (Gartner Peer Insights, G2) and
                        rests on at least five reviews, and we show the number of reviews beside it. Client and
                        product reviews measure different things, so compare a score only with others of the
                        same kind. A company with no score simply has too few public reviews to quote.
                    </p>
                </div>
            </div>

            {latest && (
                <div className="my-8">
                    <h3 className="text-lg font-bold text-white mb-3">
                        What changed in the {formatMonthYear(latest.date)} update
                    </h3>
                    <ul className={s.services}>
                        {latest.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            <p className="text-neutral-400 text-sm italic">
                <strong>Publisher note:</strong> This guide is researched and published by ARC AI. ARC AI is{" "}
                <em>not</em> included in the list. Spotted an error, or know a company that should be here?{" "}
                <Link href="/contact" className={LINK}>Tell us</Link> and we will check it against the sources.
                We also encourage readers to verify details with the companies directly and on third-party
                review platforms such as Clutch, GoodFirms and Glassdoor.
            </p>
        </section>
    );
}

/* ── FAQ ── */

export function Faq() {
    return (
        <section id="faq" className="scroll-mt-24">
            <h2 className={H2}>
                <HelpCircle className={ICON} />
                Frequently Asked Questions
            </h2>
            <div className={s.faq}>
                {faqs.map((faq) => (
                    <details key={faq.q}>
                        <summary>
                            <h3>{faq.q}</h3>
                        </summary>
                        <p>{faq.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
