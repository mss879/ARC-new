import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Case Studies | AI Automation & Web Design Results — ARC AI",
  description: "See how ARC AI delivers real results with AI automation, web design & digital marketing. Client success stories from UK and Sri Lanka.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Case Studies — AI Automation & Web Design Results | ARC AI",
    description: "Real results from real clients. See how ARC AI delivers measurable growth through AI chatbots, workflow automation, and smart web design.",
    url: "https://www.arcai.agency/case-studies",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Case Studies",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — ARC AI",
    description: "Real results from real clients. AI automation and web design success stories.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/case-studies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const caseStudies = [
  {
    client: "Tourism & Hospitality Company",
    location: "Sri Lanka",
    services: ["AI Chatbot", "Smart Website", "Digital Marketing"],
    challenge:
      "A leading Sri Lankan tourism company was losing potential bookings because their website couldn't handle multilingual inquiries. Customer response times averaged 6-12 hours, and 40% of enquiries went unanswered during off-hours.",
    solution:
      "ARC AI built a Smart Website with an AI chatbot that operates 24/7 in Sinhala, Tamil, and English. The chatbot handles booking inquiries, provides tour information, processes reservations, and integrates with their existing booking system. We also implemented an automated email follow-up workflow for abandoned inquiries.",
    results: [
      { metric: "Response Time", before: "6-12 hrs", after: "< 10 seconds", change: "99% faster" },
      { metric: "Booking Enquiries", before: "45/month", after: "120/month", change: "+167%" },
      { metric: "Customer Service Cost", before: "Rs. 180,000/mo", after: "Rs. 72,000/mo", change: "-60%" },
      { metric: "Off-hours Conversions", before: "0%", after: "35%", change: "+35%" },
    ],
  },
  {
    client: "E-Commerce Retailer",
    location: "Birmingham, UK",
    services: ["Web Design", "AI Automation", "SEO"],
    challenge:
      "A Birmingham-based e-commerce retailer was struggling with poor website performance, low organic traffic, and high cart abandonment rates. Their existing website scored 32 on Google PageSpeed and loaded in 8+ seconds on mobile.",
    solution:
      "ARC AI rebuilt their entire e-commerce platform on Next.js with server-side rendering, automated product recommendation AI, and a complete technical SEO overhaul. We implemented abandoned cart recovery automation, AI-powered product descriptions, and a conversion-optimised checkout flow.",
    results: [
      { metric: "Page Speed Score", before: "32/100", after: "94/100", change: "+194%" },
      { metric: "Organic Traffic", before: "2,400/mo", after: "8,100/mo", change: "+237%" },
      { metric: "Cart Abandonment", before: "78%", after: "42%", change: "-46%" },
      { metric: "Monthly Revenue", before: "£12,000", after: "£34,000", change: "+183%" },
    ],
  },
  {
    client: "Real Estate Agency",
    location: "Colombo, Sri Lanka",
    services: ["AI Sales SDR", "Smart Website", "Social Media"],
    challenge:
      "A Colombo real estate agency was spending significant time on unqualified leads. Their sales team manually handled 200+ inquiries per month, with only 15% converting to property viewings. They needed a way to automatically qualify leads and schedule viewings.",
    solution:
      "ARC AI deployed an AI Sales SDR that automatically qualifies property leads via WhatsApp and the website, collects buyer preferences, matches them to available listings, and schedules viewings directly into the agents' calendars. We also built a smart property listing website with advanced search and AI-powered recommendations.",
    results: [
      { metric: "Lead Qualification", before: "Manual (4hrs/day)", after: "Automated", change: "100% automated" },
      { metric: "Qualified Lead Rate", before: "15%", after: "52%", change: "+247%" },
      { metric: "Viewings Booked", before: "30/month", after: "78/month", change: "+160%" },
      { metric: "Agent Productivity", before: "4 hrs/day on calls", after: "1 hr/day", change: "-75%" },
    ],
  },
  {
    client: "Professional Services Firm",
    location: "West Midlands, UK",
    services: ["Branding", "Web Design", "AI Content Generation"],
    challenge:
      "A West Midlands professional services firm needed a complete rebrand and digital presence overhaul. Their outdated website generated zero inbound leads and their brand identity didn't reflect their premium positioning. They also lacked consistent content marketing.",
    solution:
      "ARC AI delivered a complete rebrand — including logo, colour system, typography, and brand guidelines — alongside a premium Next.js website with AI-powered content generation. The AI content system produces weekly blog posts, social media content, and client newsletters, all aligned with their brand voice and SEO strategy.",
    results: [
      { metric: "Inbound Leads", before: "0/month", after: "22/month", change: "From zero" },
      { metric: "Website Sessions", before: "150/month", after: "3,200/month", change: "+2,033%" },
      { metric: "Content Output", before: "0 posts/month", after: "12 posts/month", change: "From zero" },
      { metric: "Brand Perception", before: "Outdated", after: "Premium", change: "Transformed" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="home-cream min-h-screen bg-transparent text-ink">
      <SchemaOrg
        type="services"
        pageTitle="Case Studies"
        pageDescription="See how ARC AI has helped businesses achieve real results."
        pageUrl="https://www.arcai.agency/case-studies"
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-deep">
            Client Success Stories
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.035em] leading-[1.05]">
            Real Results from{" "}
            <span className="text-ember-ink">
              Real Clients
            </span>
          </h1>
          <p className="text-xl text-ink-soft max-w-3xl leading-relaxed">
            See how ARC AI, one of the <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">top AI companies in Sri Lanka</Link> and the UK, has helped businesses
            achieve measurable growth through AI automation, smart web design,
            and data-driven digital marketing. For a comprehensive look at the <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">leading software development companies in Sri Lanka</Link>, see our industry guide. These case studies demonstrate
            real results — not hypothetical projections.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          {caseStudies.map((cs, index) => (
            <article
              key={index}
              className="cut-card [--cut:18px] relative [--cut-line:rgba(27,26,23,0.1)] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-white/70 p-8 md:p-10 border-b border-ink/10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {cs.services.map((svc) => (
                    <span
                      key={svc}
                      className="text-xs px-3 py-1 rounded-full bg-ember/10 text-ember-deep border border-ember/20"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-medium mb-2 tracking-[-0.035em]">
                  {cs.client}
                </h2>
                <p className="text-ink-soft">{cs.location}</p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-ember-deep">
                      The Challenge
                    </h3>
                    <p className="text-ink-soft leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-ember-deep">
                      Our Solution
                    </h3>
                    <p className="text-ink-soft leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Measurable Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.results.map((r) => (
                      <div
                        key={r.metric}
                        className="cut-card [--cut:14px] relative p-4 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] text-center space-y-2"
                      >
                        <p className="text-xs text-ink-mute uppercase tracking-wider">
                          {r.metric}
                        </p>
                        <p className="text-2xl font-bold text-ember-deep">
                          {r.change}
                        </p>
                        <p className="text-xs text-ink-mute">
                          {r.before} → {r.after}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 lg:px-12 border-t border-ink/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.035em] text-center">
            Trusted by 100+ Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-black text-ember-ink">4.9/5</p>
              <p className="text-ink-soft">Google Reviews Rating</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-ember-ink">100+</p>
              <p className="text-ink-soft">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-black text-ember-ink">67%</p>
              <p className="text-ink-soft">Average Lead Increase</p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link
              href="/contact"
              className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-8 py-4 bg-ember text-ink font-semibold hover:scale-105 transition-transform"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>
      </section>

      <CTA tone="cream" />
      <Footer tone="dark" />
    </div>
  );
}
