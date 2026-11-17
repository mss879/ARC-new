// Server Component - Optimized for SEO
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import ScrollToTop from "@/components/ScrollToTop";
import ClientsSection from "@/components/ClientsSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import AboutStatement from "@/components/about/AboutStatement";
import AboutJourney from "@/components/about/AboutJourney";
import PauseOffscreen from "@/components/home/PauseOffscreen";
import { PillLink } from "@/components/home/ui";
import { company, stats } from "@/content/site-facts";
import { aboutLead, founderNote, industries, industriesIntro, mission, techStack, vision, type IndustryIcon } from "@/content/about";
import {
  Briefcase, Building2, CalendarClock, Cpu, Eye, FolderCheck, GraduationCap, Heart, Home, Rocket, ShoppingCart,
  Star, Stethoscope, Target, type LucideIcon,
} from "lucide-react";

// SEO Metadata for About Page
export const metadata: Metadata = {
  title: "About ARC AI | AI Agents and Business Systems, Colombo",
  description: "ARC AI is a Colombo team, founded in 2022, that builds AI agents and the business systems they run inside: ERP, POS, e-commerce and web applications.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "About ARC AI - AI Digital Agency",
    description: "ARC AI is a Colombo team that builds AI agents and business systems for Sri Lankan businesses.",
    url: "https://www.arcai.agency/about",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About ARC AI - AI Digital Agency",
        type: "image/jpeg",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcaiagency",
    creator: "@arcaiagency",
    title: "About ARC AI - AI Digital Agency",
    description: "AI agents and business systems, built in Colombo",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/about"
  }
};

const INDUSTRY_ICONS: Record<IndustryIcon, LucideIcon> = {
  retail: ShoppingCart,
  health: Heart,
  property: Building2,
  education: GraduationCap,
  fitness: Stethoscope,
  tech: Cpu,
  services: Briefcase,
  hospitality: Home,
};

// The four figures under the hero. The first two and the rating are fixed
// facts; projects and years come from site-facts.ts, like everywhere else.
const FACTS: { icon: LucideIcon; label: string; value: string; suffix?: string; note?: string }[] = [
  { icon: Rocket, label: "Founded in", value: String(company.foundedYear) },
  { icon: FolderCheck, label: "Successful projects completed", value: String(stats.projectsCompleted), suffix: "+" },
  { icon: CalendarClock, label: "Years of experience", value: String(stats.yearsOfExperience), suffix: "+" },
  { icon: Star, label: "Customer rating", value: "4.9", suffix: "/5", note: "Google Reviews" },
];

// A round orange icon on white, used on every card on this page.
function IconDot({ icon: Icon, dark = false }: { icon: LucideIcon; dark?: boolean }) {
  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${
        dark ? "border-white/15 text-ember" : "border-ink/10 bg-white text-ember-ink"
      }`}
      aria-hidden="true"
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
    </span>
  );
}

export default function About() {
  return (
    // .home-cream is the grey-cream theme (see src/index.css). The page is laid
    // out like the home page: large two-tone headings, frosted cards, orange
    // on icons, and one dark card per group for contrast.
    <div className="home-cream min-h-screen">
      <ScrollToTop />
      <SchemaOrg
        type="about"
        pageTitle="About Us"
        pageDescription="ARC AI is a Colombo team that builds AI agents and business systems for Sri Lankan businesses."
        pageUrl="https://www.arcai.agency/about"
      />
      <Navbar />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "About" }
      ]} />

      <main>
        {/* Hero: the heading on the left, who we are on the right */}
        <section className="px-4 pb-10 pt-8 md:px-8 md:pt-12 lg:px-20 lg:pb-14 lg:pt-14" aria-label="About ARC AI">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h1 className="text-6xl font-medium leading-[0.95] tracking-[-0.04em] text-ink sm:text-7xl lg:text-8xl xl:text-[7rem]">
              About
              <br />
              <span className="text-ember-ink">ARC AI</span>
            </h1>

            <div>
              <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:text-xl">{aboutLead}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-mute">
                Comparing providers? See our guides to{" "}
                <a href="/ai-companies-sri-lanka" className="font-medium text-ember-deep underline underline-offset-4 hover:text-ink">
                  AI companies in Sri Lanka
                </a>{" "}
                and{" "}
                <a href="/software-companies-sri-lanka" className="font-medium text-ember-deep underline underline-offset-4 hover:text-ink">
                  software companies in Sri Lanka
                </a>
                .
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillLink href="/contact">Let&apos;s talk</PillLink>
                <PillLink href="/portfolio" variant="ghost">
                  See our work
                </PillLink>
              </div>
            </div>
          </div>

          {/* Company facts */}
          <div
            className="mx-auto mt-10 grid max-w-[1400px] gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4"
            role="region"
            aria-label="Company statistics"
          >
            {FACTS.map((fact, index) => {
              const dark = index === 0;
              return (
                <div
                  key={fact.label}
                  className={`${dark ? "ink-card" : "cream-card"} flex min-h-[190px] flex-col justify-between p-6 lg:min-h-[230px] lg:p-7`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className={`max-w-[14ch] text-sm leading-snug md:text-base ${dark ? "text-paper-white/75" : "text-ink-soft"}`}>
                      {fact.label}
                    </p>
                    <IconDot icon={fact.icon} dark={dark} />
                  </div>
                  <div>
                    <p className={`text-6xl font-medium leading-none tracking-[-0.05em] lg:text-7xl ${dark ? "text-paper-white" : "text-ink"}`}>
                      {fact.value}
                      {fact.suffix && <span className={dark ? "text-ember" : "text-ember-ink"}>{fact.suffix}</span>}
                    </p>
                    {fact.note && <p className="mt-2 text-sm text-ink-mute">{fact.note}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who we are, in one statement */}
        <AboutStatement />

        {/* Mission, vision and the founder's note */}
        <section className="px-4 py-12 md:px-8 lg:px-20 lg:py-16" aria-label="Mission, vision and founder's note">
          <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2">
            <article className="cream-card flex min-h-[240px] flex-col justify-between gap-8 p-6 lg:min-h-[300px] lg:p-9">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-3xl font-medium tracking-[-0.035em] text-ink lg:text-4xl">Our mission</h2>
                <IconDot icon={Target} />
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:text-xl">{mission}</p>
            </article>

            <article className="cream-card flex min-h-[240px] flex-col justify-between gap-8 p-6 lg:min-h-[300px] lg:p-9">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-3xl font-medium tracking-[-0.035em] text-ink lg:text-4xl">Our vision</h2>
                <IconDot icon={Eye} />
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:text-xl">{vision}</p>
            </article>

            <figure className="ink-card p-6 md:col-span-2 lg:p-12">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ember">Founder&apos;s note</h2>
              <blockquote className="mt-6 max-w-5xl text-xl font-medium leading-snug tracking-[-0.02em] text-paper-white md:text-2xl lg:text-[1.75rem] lg:leading-[1.35]">
                &ldquo;{founderNote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <Image
                  src={founderNote.photo}
                  alt={`${founderNote.name}, ${founderNote.role}, ARC AI`}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <span>
                  <span className="block text-lg font-medium text-paper-white">{founderNote.name}</span>
                  <span className="block text-sm text-paper-white/70">{founderNote.role}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Technology */}
        <section className="py-12 lg:py-16" role="region" aria-label="Technology stack">
          <p className="px-4 text-center text-sm font-medium uppercase tracking-wider text-ink-mute">
            Powered By Industry-Leading Technology
          </p>
          {/* Two copies of the row make the loop seamless; the second is hidden
              from screen readers. The row stops while it is off screen. */}
          <PauseOffscreen className="mt-8 flex overflow-hidden mask-gradient">
            {[false, true].map((isCopy) => (
              <ul
                key={isCopy ? "copy" : "original"}
                className="flex min-w-full shrink-0 animate-[marquee_45s_linear_infinite] gap-3 pr-3"
                aria-hidden={isCopy ? true : undefined}
              >
                {techStack.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap rounded-full border border-white bg-white/70 px-5 py-2.5 text-base font-medium text-ink"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            ))}
          </PauseOffscreen>
        </section>

        {/* Companies We Worked With Section */}
        <ClientsSection />

        {/* Our Journey */}
        <AboutJourney />

        {/* Industries */}
        <section className="px-4 pb-20 pt-12 md:px-8 lg:px-20 lg:pb-28 lg:pt-16" aria-labelledby="industries-heading">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
              <h2
                id="industries-heading"
                className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl"
              >
                Industries <span className="text-ember-ink">we serve</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:pb-2 lg:text-xl">{industriesIntro}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
              {industries.map((industry) => (
                <article key={industry.name} className="cream-card flex min-h-[220px] flex-col justify-between gap-8 p-6 lg:p-7">
                  <IconDot icon={INDUSTRY_ICONS[industry.icon]} />
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em] text-ink lg:text-2xl">{industry.name}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-soft">{industry.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-base font-medium text-ink-mute">And Many More Industries</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
