/* Industry background for /software-companies-sri-lanka.
 * Every figure here links to the document it came from (see SOURCES in page-data.ts).
 * When you update a number, update its source link and bump PAGE_DATES.modified. */
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, BarChart3, Users, Building2, Landmark, GraduationCap, CircleDot, Globe } from "lucide-react";
import { ExportEarningsChart } from "../Charts";
import { GUIDE_YEAR, SOURCES } from "../page-data";

const LINK = "text-[rgb(255,73,37)] hover:underline";
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

function Src({ to, children }: { to: keyof typeof SOURCES; children: React.ReactNode }) {
    return (
        <a href={SOURCES[to].url} {...EXT} className={LINK}>
            {children}
        </a>
    );
}

export function IndustryOverview() {
    return (
        <section id="industry-overview" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[rgb(255,73,37)]" />
                Sri Lanka&apos;s Software Industry in {GUIDE_YEAR}
            </h2>

            <p className="text-xl text-neutral-200 mb-6">
                What was historically viewed as a lower-cost alternative to India has matured into a
                high-quality, specialist-driven ecosystem — home to some of the top IT outsourcing companies,
                tech companies, and software firms in Sri Lanka and South Asia — that global enterprises
                actively seek out for complex engineering work. {GUIDE_YEAR} has been a year of two halves:
                a record start, then a slowdown from July.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                {[
                    { value: "$1,240.7M", label: "ICT/BPM exports, Jan–Sep 2026", icon: TrendingUp },
                    { value: "+3.7%", label: "Year-on-year (Jan–Sep)", icon: BarChart3 },
                    { value: "175K", label: "Professionals (SLASSCOM)", icon: Users },
                    { value: "680+", label: "IT & BPM companies (SLASSCOM)", icon: Building2 },
                ].map((stat) => (
                    <div key={stat.label} className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center">
                        <stat.icon className="w-5 h-5 text-[rgb(255,73,37)] mx-auto mb-2" />
                        <div className="text-2xl font-black text-white">{stat.value}</div>
                        <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>

            <p className="text-neutral-300">
                According to the <Src to="edbNineMonths">Export Development Board (EDB)</Src>, the country&apos;s
                ICT/BPM sector earned US$1,240.67 million from exports in January–September 2026, up 3.69% on
                the same period of 2025. The year began with a record: January alone brought in US$177.83
                million, 60.2% more than a year earlier, and{" "}
                <Src to="edbFirstHalf">first-half earnings</Src> reached US$885.42 million, up 17.7%. Growth
                then stalled. August fell 10.5% to US$135.10 million and September fell 19.2% to US$123.81
                million. Full-year 2025 exports were <Src to="edbFullYear2025">US$1,644.83 million</Src>, up
                8.8%, and the sector&apos;s <Src to="edbIctServices">target is US$5 billion by 2030</Src>.
            </p>

            <ExportEarningsChart />

            <p className="text-neutral-300 mt-4">
                The industry employs about 175,000 professionals across more than 680 IT and BPM companies,
                according to <Src to="slasscomReview">SLASSCOM&apos;s 2025/26 review</Src> (the EDB&apos;s own
                page cites 146,000 employed and 500+ companies). On the government side, the{" "}
                <Src to="budgetSpeech2026">2026 Budget Speech</Src> sets out investment of over Rs. 25.5
                billion in digitalisation during 2026, including the Sri Lanka Unique Digital Identity
                project. Internet penetration stands at 59.7% of the population (13.9 million users), per{" "}
                <Src to="dataReportal2026">DataReportal&apos;s Digital 2026 report</Src>.
            </p>

            <p className="text-neutral-300 mt-4">
                Structurally, the industry is shifting from basic digitisation (cloud migration, simple
                CRM/ERP implementation) toward AI-led work: <Link href="/ai-automation-sri-lanka" className={LINK}>AI automation</Link>,
                multi-agent systems, and domain-specific AI models. This is creating a two-tier market:
                established firms integrating AI into existing enterprise offerings, and newer{" "}
                <Link href="/ai-companies-sri-lanka" className={LINK}>AI-native studios</Link> building
                entirely on modern architectures from day one. For a broader look at web-specific
                capabilities, see our guide on{" "}
                <Link href="/web-design-sri-lanka" className={LINK}>web design companies in Sri Lanka</Link>.
            </p>

            <p className="text-neutral-300 mt-4 text-sm italic">
                Sources: <Src to="edbNineMonths">EDB, January–September 2026 export release</Src>,{" "}
                <Src to="edbFullYear2025">EDB, full-year 2025 release</Src>,{" "}
                <Src to="slasscomReview">SLASSCOM 2025/26 review (Daily FT)</Src>,{" "}
                <Src to="budgetSpeech2026">Budget Speech 2026</Src>,{" "}
                <Src to="dataReportal2026">DataReportal Digital 2026: Sri Lanka</Src>.
            </p>
        </section>
    );
}

export function TechEcosystem() {
    const hubs: { icon: typeof Building2; name: string; body: React.ReactNode }[] = [
        {
            icon: Building2,
            name: "TRACE Expert City, Maradana",
            body: (
                <>
                    Sri Lanka&apos;s best-known technology park and the heart of software companies in Colombo,
                    purpose-built for IT companies. <Src to="trace">TRACE</Src> was established in 2013 by a group
                    of Sri Lankan tech pioneers in partnership with the Government and runs as a nonprofit. Its
                    tenants include Calcey Technologies, CodeGen&apos;s engineering hub and one of London Stock
                    Exchange Group&apos;s two Sri Lanka hubs.
                </>
            ),
        },
        {
            icon: Building2,
            name: "Orion City, Colombo 09",
            body: (
                <>
                    A 16-acre integrated IT and business park with more than 10,000 professionals on site.
                    Tenants include IFS, WNS and Virtusa, according to a{" "}
                    <Src to="orionCity">January 2026 Daily FT profile</Src>.
                </>
            ),
        },
        {
            icon: GraduationCap,
            name: "University Pipeline",
            body: (
                <>
                    State and private universities, among them the University of Moratuwa, the University of
                    Colombo School of Computing (UCSC) and the Informatics Institute of Technology (IIT), now
                    produce about 17,000 IT graduates a year, according to{" "}
                    <Src to="slasscomGraduates">SLASSCOM</Src>.
                </>
            ),
        },
        {
            icon: CircleDot,
            name: "SLASSCOM",
            body: (
                <>
                    The Sri Lanka Association for Software and Services Companies (slasscom.lk) is the national
                    industry body, with more than 300 member companies. SLASSCOM publishes industry reviews, runs
                    talent development initiatives, and advocates for policy reform. Its stated goals for 2030 are
                    US$5 billion in revenue, a workforce of 200,000 and 1,000 start-ups. Membership is a positive
                    indicator of company standing.
                </>
            ),
        },
        {
            icon: Globe,
            name: "Startup Ecosystem",
            body: (
                <>
                    Colombo&apos;s startup scene is supported by <Src to="hatch">Hatch</Src>, a private
                    co-working space and incubator that opened in Colombo Fort in 2018;{" "}
                    <Src to="spiralation">Spiralation</Src>, the state ICT agency&apos;s startup programme, which
                    has supported more than 130 startups since 2010; and venture firm BOV Capital. Budget 2026
                    allocated Rs. 1.5 billion to the Ministry of Digital Economy for a startup fund that, as of
                    mid-2026, had not yet launched.
                </>
            ),
        },
    ];

    return (
        <section id="tech-ecosystem" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                <Landmark className="w-8 h-8 text-[rgb(255,73,37)]" />
                Sri Lanka&apos;s Tech Hubs &amp; Ecosystem
            </h2>

            <p className="text-neutral-300 mb-6">
                Understanding where these firms operate and the supporting ecosystem provides valuable context
                for evaluating potential partners:
            </p>

            {/* Moved here from the top of the page so the company list comes first. Lazy-loaded. */}
            <figure className="my-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800">
                    <Image
                        src="/software-companies-sri-lanka-guide-2026.webp"
                        alt="Illustration of a software developer working at night in an office overlooking Colombo's Lotus Tower"
                        fill
                        sizes="(max-width: 1024px) 100vw, 850px"
                        className="object-cover"
                    />
                </div>
                <figcaption className="text-xs text-neutral-600 mt-2">
                    Illustration: Colombo, the centre of Sri Lanka&apos;s software industry.
                </figcaption>
            </figure>

            <div className="space-y-6 my-8">
                {hubs.map((hub) => (
                    <div key={hub.name} className="flex gap-4">
                        <div className="w-10 h-10 bg-[rgb(255,73,37)]/10 rounded-lg flex items-center justify-center shrink-0">
                            <hub.icon className="w-5 h-5 text-[rgb(255,73,37)]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">{hub.name}</h3>
                            <p className="text-neutral-400 m-0 text-sm">{hub.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
