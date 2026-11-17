/* Sections added with the expansion of the list: the biggest employers, jobs and
 * internships, companies by city, and published rates. All Server Components, all
 * generated from company-list.ts, so nothing here can drift from the profiles and
 * nothing is shown without a source. */
import Link from "next/link";
import { Briefcase, DollarSign, MapPin, Trophy } from "lucide-react";
import { HeadcountChart } from "../Charts";
import {
    CLUTCH_SNAPSHOT,
    PAY_SNAPSHOT,
    captiveCentres,
    companiesByDistrict,
    companiesInRenderOrder,
    companyCount,
    employeeRated,
    formatMonthYear,
    hireableCompanies,
    largeWithoutLocalFigure,
    productCompanies,
    publishedRates,
    topBySriLankaHeadcount,
    withInternships,
} from "../page-data";
import type { Company } from "../types";
import s from "../pillar.module.css";

const H2 = "text-2xl md:text-4xl font-bold text-ink mt-16 mb-6 flex items-center gap-3";
const H3 = "text-xl font-bold text-ink mt-10 mb-4";
const ICON = "hidden md:block w-8 h-8 shrink-0 text-ember-deep";
const LINK = "text-ember-deep hover:underline";
const EXTERNAL = { target: "_blank", rel: "nofollow noopener noreferrer" } as const;

const TYPE_SHORT: Record<Company["type"], string> = {
    Product: "Product company",
    Services: "Services company",
    "Captive centre": "Captive centre",
};

function Names({ list }: { list: Company[] }) {
    return (
        <>
            {list.map((c, i) => (
                <span key={c.slug}>
                    {i > 0 && (i === list.length - 1 ? " and " : ", ")}
                    <a href={`#${c.slug}`} className={LINK}>{c.name}</a>
                </span>
            ))}
        </>
    );
}

/* ── Top 10 by Sri Lanka headcount ──
 * The only numbered list on the page. It is ordered by a published number, not by
 * opinion, and a company appears only if a source states its Sri Lanka headcount. */

export function TopTen() {
    const top = topBySriLankaHeadcount;
    if (top.length < 5) return null;
    return (
        <section id="biggest" className="scroll-mt-24">
            <h2 className="text-2xl md:text-4xl font-medium text-ink mt-2 md:mt-4 mb-3 md:mb-4 flex items-center gap-3 tracking-[-0.035em]">
                <Trophy className={ICON} />
                Biggest Software Companies in Sri Lanka: Top {top.length} by Local Headcount
            </h2>
            <p className="text-ink-soft mb-6">
                The biggest software and IT employers in Sri Lanka, ranked by the number of people each one
                employs in the country. Every figure is one the company or reputable press has published,
                and each links to its source. Size is not a measure of quality.
            </p>
            <ol className={s.topList}>
                {top.map((c) => (
                    <li key={c.slug}>
                        <a href={`#${c.slug}`}>{c.name}</a>
                        <span>
                            <strong>{c.slHeadcount!.label}</strong> people in Sri Lanka · {TYPE_SHORT[c.type]} ·{" "}
                            {c.specialty}
                        </span>
                        <span className={s.small}>
                            <a href={c.slHeadcount!.sourceUrl} {...EXTERNAL}>Source</a>, {c.slHeadcount!.asOf}
                        </span>
                    </li>
                ))}
            </ol>
            <HeadcountChart rows={top.map((c) => ({ name: c.name, value: c.slHeadcount!.approx, label: c.slHeadcount!.label }))} />
            <p className="text-xs text-ink-mute">
                The ranking stops at 300 people: below that, too many larger companies publish no local figure for
                the order to mean anything. Companies that do not publish a Sri Lanka headcount are not ranked here,
                however large they are.
                {largeWithoutLocalFigure.length > 0 && (
                    <>
                        {" "}Other large employers that publish only a company-wide figure:{" "}
                        {largeWithoutLocalFigure.map((c) => `${c.name} (${c.size})`).join(", ")}.
                    </>
                )}{" "}
                They are all in the <a href="#comparison-table" className="underline hover:text-ember-deep">full comparison of {companyCount} companies</a> below.
            </p>
        </section>
    );
}

/* ── Jobs and internships ── */

export function CareersSection() {
    const careers = companiesInRenderOrder.filter((c) => c.careersUrl);
    return (
        <section id="careers" className="scroll-mt-24">
            <h2 className={H2}>
                <Briefcase className={ICON} />
                Software Company Jobs and Internships in Sri Lanka
            </h2>
            <p className="text-ink-soft mb-4">
                If you are a student or an engineer looking for work rather than a vendor, this is the part of
                the guide for you. It lists which <strong>software companies in Sri Lanka</strong> run internship
                programmes, what employees say about them, and where each company posts its vacancies.
            </p>

            {withInternships.length > 0 && (
                <>
                    <h3 className={H3}>Software companies in Sri Lanka with internship programmes</h3>
                    <p className="text-ink-soft text-sm mb-2">
                        {withInternships.length} companies in this guide publish a page for internships,
                        graduate or trainee programmes:
                    </p>
                    <ul className={s.linkList}>
                        {withInternships.map((c) => (
                            <li key={c.slug}>
                                <a href={`#${c.slug}`}>{c.name}</a>
                                <span>
                                    {c.specialty} · {c.city}
                                </span>
                                <span>
                                    <a href={c.internshipUrl} {...EXTERNAL}>Internship or graduate programme page</a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {employeeRated.length > 0 && (
                <>
                    <h3 className={H3}>What employees say</h3>
                    <p className="text-ink-soft text-sm mb-4">
                        Glassdoor scores for companies in this guide with at least 20 employee reviews, highest
                        first. A score reflects the reviews posted on Glassdoor, which for global companies cover
                        every country, not only Sri Lanka.
                    </p>
                    <div className={s.tableWrap}>
                        <table className={s.table}>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Glassdoor score</th>
                                    <th>Employee reviews</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeeRated.map((c) => (
                                    <tr key={c.slug}>
                                        <td>
                                            <a href={`#${c.slug}`}>{c.name}</a>
                                        </td>
                                        <td>
                                            <span className={s.star} aria-hidden="true">★</span> {c.employeeRating!.value} / 5
                                        </td>
                                        <td>
                                            <a href={c.employeeRating!.url} {...EXTERNAL} className={s.plainLink}>
                                                {c.employeeRating!.reviews!.toLocaleString("en-US")} on Glassdoor
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-ink-mute mt-3">
                        Scores checked in {formatMonthYear(employeeRated[0].verifiedOn)}.
                    </p>
                </>
            )}

            <h3 className={H3}>Highest-paying software companies in Sri Lanka</h3>
            <p className="text-ink-soft text-sm mb-3">
                There is no official pay ranking. The best public indicator is{" "}
                <a href={PAY_SNAPSHOT.url} {...EXTERNAL} className={s.plainLink}>Levels.fyi</a>, which collects
                self-reported pay. In {formatMonthYear(PAY_SNAPSHOT.checkedOn)} it showed a median total
                compensation of LKR {PAY_SNAPSHOT.medianMonthlyLkr} a month for software engineers in Sri Lanka and
                listed {PAY_SNAPSHOT.topPaying.slice(0, -1).join(", ")} and {PAY_SNAPSHOT.topPaying.slice(-1)} as
                its top-paying companies. That figure rests on only{" "}
                {PAY_SNAPSHOT.submissions} submissions, so treat it as a rough guide rather than a survey.
            </p>

            <h3 className={H3}>Product company, services company or captive centre?</h3>
            <p className="text-ink-soft text-sm mb-3">
                The kind of company shapes the work. <strong className="text-ink">Product companies</strong>{" "}
                ({productCompanies.length} in this guide, including <Names list={productCompanies.slice(0, 4)} />)
                build and sell their own software, so engineers stay with one product for years.{" "}
                <strong className="text-ink">Services companies</strong> ({hireableCompanies.length},
                including <Names list={hireableCompanies.slice(0, 4)} />) build software for clients, which
                means more variety across projects and industries.{" "}
                <strong className="text-ink">Captive centres</strong> ({captiveCentres.length}:{" "}
                <Names list={captiveCentres} />) are the in-house engineering arms of large overseas groups.
            </p>

            {careers.length > 0 && (
                <>
                    <h3 className={H3}>Careers pages</h3>
                    <p className="text-ink-soft text-sm leading-7">
                        {careers.map((c, i) => (
                            <span key={c.slug}>
                                {i > 0 && " · "}
                                <a href={c.careersUrl} {...EXTERNAL} className={s.plainLink}>{c.name}</a>
                            </span>
                        ))}
                    </p>
                </>
            )}
        </section>
    );
}

/* ── By city ── */

export function CitySection() {
    const colombo = companiesByDistrict.find((d) => d.district === "Colombo");
    const others = companiesByDistrict.filter((d) => d.district !== "Colombo");
    return (
        <section id="by-city" className="scroll-mt-24">
            <h2 className={H2}>
                <MapPin className={ICON} />
                Software Companies in Colombo and Other Cities
            </h2>
            {colombo && (
                <p className="text-ink-soft mb-4">
                    Sri Lanka&apos;s software industry is concentrated in and around the capital:{" "}
                    {colombo.companies.length} of the {companyCount} companies in this guide have their main Sri
                    Lankan office in the Colombo district, which includes Colombo itself and nearby towns such as
                    Nugegoda, Nawala, Malabe and Moratuwa.
                </p>
            )}
            {others.length > 0 && (
                <>
                    <h3 className={H3}>Software companies outside Colombo</h3>
                    <ul className={s.linkList}>
                        {others.flatMap((d) =>
                            d.companies.map((c) => (
                                <li key={c.slug}>
                                    <a href={`#${c.slug}`}>{c.name}</a>
                                    <span>
                                        {c.city}
                                        {c.city !== d.district ? `, ${d.district} district` : ""} · {c.specialty}
                                    </span>
                                </li>
                            ))
                        )}
                    </ul>
                </>
            )}
            {colombo && (
                <>
                    <h3 className={H3}>Software companies in Colombo</h3>
                    <p className="text-ink-soft text-sm leading-7">
                        <Names list={colombo.companies} />.
                    </p>
                </>
            )}
        </section>
    );
}

/* ── Rates: only what companies publish ── */

export function Pricing() {
    const snap = CLUTCH_SNAPSHOT;
    const under50 = snap.under25 + snap.from25to49;
    return (
        <section id="pricing" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-medium text-ink mt-16 mb-8 flex items-center gap-3 tracking-[-0.035em]">
                <DollarSign className="w-8 h-8 text-ember-ink" />
                How Much Does Software Development Cost in Sri Lanka?
            </h2>

            <p className="text-ink-soft mb-6">
                <strong className="text-ink">In short:</strong> most Sri Lankan software firms that publish a
                rate list it at under $50 an hour. Of the {snap.counted} firms on the first page of{" "}
                <a href={snap.url} target="_blank" rel="noopener noreferrer" className={LINK}>
                    Clutch&apos;s Sri Lanka developer directory
                </a>{" "}
                in {formatMonthYear(snap.checkedOn)} (sponsored listings excluded), {under50} listed rates below
                $50 an hour ({snap.under25} under $25 and {snap.from25to49} at $25–$49), {snap.from50up} listed
                $50 or more and {snap.notListed} listed no rate.
            </p>

            <p className="text-ink-soft text-sm mb-6">
                Every figure in this section is a rate a company has published itself. Earlier editions of this
                guide carried estimated rate tables; we removed them because we could not trace them to a source.
                For web-specific pricing, see our{" "}
                <Link href="/web-design-sri-lanka" className={LINK}>web design Sri Lanka pricing guide</Link>, and
                for AI-specific services, visit our{" "}
                <Link href="/ai-companies-sri-lanka" className={LINK}>AI companies guide</Link>.
            </p>

            {publishedRates.length > 0 && (
                <>
                    <h3 className="text-xl font-bold text-ink mb-4">Published rates of companies in this guide</h3>
                    <div className={s.tableWrap}>
                        <table className={s.table}>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Hourly rate</th>
                                    <th>Minimum project</th>
                                </tr>
                            </thead>
                            <tbody>
                                {publishedRates.map((c) => (
                                    <tr key={c.slug}>
                                        <td>
                                            <a href={`#${c.slug}`}>{c.name}</a>
                                            <span className={s.sub}>{c.specialty}</span>
                                        </td>
                                        <td>
                                            <a href={c.clutch!.url} {...EXTERNAL} className={s.plainLink}>
                                                {c.clutch!.hourlyRate ?? "Not listed"}
                                            </a>
                                        </td>
                                        <td>{c.clutch!.minProject ?? "Not listed"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-ink-mute mt-3">
                        Rate bands and minimum project sizes as each company lists them on its Clutch profile,
                        checked in {formatMonthYear(snap.checkedOn)}. Companies that do not publish a rate are not
                        shown.
                    </p>
                </>
            )}

            <h3 className="text-xl font-bold text-ink mt-10 mb-4">What moves the price</h3>
            <ul className={s.services}>
                <li>Seniority: a team of senior engineers costs more per hour and usually needs fewer hours.</li>
                <li>Engagement model: a fixed-price project, a dedicated team and staff augmentation are quoted differently.</li>
                <li>Domain: regulated or specialist work such as banking, healthcare or ERP is priced above general web and mobile development.</li>
                <li>Scope certainty: a clear specification gets a firmer quote than an open-ended brief.</li>
            </ul>
            <p className="text-ink-soft text-sm mt-6">
                Rates change, and a directory band is not a quote. Ask at least three companies for a written
                quote against the same brief.
            </p>
        </section>
    );
}
