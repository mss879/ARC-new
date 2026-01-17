// Server Component - Optimized for SEO
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CTA from "@/components/CTA";
import SchemaOrg from "@/components/SchemaOrg";
import PortfolioHero from "@/components/PortfolioHero";
import ScrollToTop from "@/components/ScrollToTop";

// SEO Metadata for Portfolio Page
export const metadata: Metadata = {
  title: "Portfolio - Our Best Work | ARC Digital Canvas",
  description: "Explore ARC Digital Canvas portfolio of successful web design, AI automation, branding, and digital marketing projects for clients in UK and Sri Lanka. See our proven results.",
  keywords: [
    "portfolio", "web design portfolio", "AI automation case studies",
    "digital marketing projects", "branding work", "client success stories",
    "web development examples", "AI chatbot projects", "design showcase",
    "UK web design portfolio", "Sri Lanka digital agency work"
  ],
  openGraph: {
    title: "Portfolio - Our Best Work | ARC Digital Canvas",
    description: "Explore our portfolio of successful web design, AI automation, and digital marketing projects with proven results.",
    url: "https://arcai.agency/portfolio",
    type: "website",
    images: [{
      url: "https://arcai.agency/-shareable-img.png",
      width: 1200,
      height: 630,
      alt: "ARC Digital Canvas Portfolio"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Our Best Work | ARC Digital Canvas",
    description: "Explore our portfolio of successful projects",
    images: ["https://arcai.agency/-shareable-img.png"]
  },
  alternates: {
    canonical: "https://arcai.agency/portfolio"
  }
};

export default function Portfolio() {

  const portfolioItems = [
    {
      id: 20,
      title: "Core Craft",
      description: "Premium web design and development agency offering custom website builds, UI/UX design, and brand identity solutions.",
      results: "Custom website ↑ lead generation 45%, Integrated CRM system, Client management efficiency ↑ 60%, Modern design showcase",
      image: "/core-craft-screenshot.png",
      link: "https://www.corecraft.agency",
      status: "live"
    },
    {
      id: 22,
      title: "Ontriq",
      description: "Sri Lanka's background verification and HR solutions provider offering 7-day turnaround for employment history, education, and criminal record checks, along with recruitment, payroll management, and business formation services.",
      results: "Custom website ↑ client inquiries 52%, CRM system streamlined case tracking, Processing time ↓ 30%, Automated client communications",
      image: "/Ontriq-screenshot.png",
      link: "https://www.ontriq.com",
      status: "live"
    },
    {
      id: 21,
      title: "Orkestrate",
      description: "AI-powered marketing orchestration platform for DTC brands that automates customer segmentation, campaign creation, and revenue optimization by analyzing order data, browsing behavior, and campaign performance across integrated channels.",
      results: "Professional website ↑ platform signups 38%, CRM integration ↑ customer retention 41%, Demo requests ↑ 2.4×, User onboarding efficiency ↑ 55%",
      image: "/orkestrate-screenshot.png",
      link: "https://www.orkestrate.com",
      status: "live"
    },
    {
      id: 23,
      title: "KeysPlease",
      description: "Real estate marketplace for residential property sales in Sri Lanka featuring premium homes and investment properties with listings and purchase facilitation services.",
      results: "Custom website ↑ property inquiries 67%, CRM system ↑ lead management efficiency 58%, Listing views ↑ 3.2×, Client follow-up rate ↑ 72%",
      image: "/KeysPlease-Screenshot.png",
      link: "https://www.keysplease.shop",
      status: "live"
    },
    {
      id: 1,
      title: "DEK Studio",
      description: "Built a trust-forward MEP site that showcases end-to-end capability with clear project pathways.",
      results: "Leads ↑ 31%, Proposal requests ↑ 24%, Avg. time on Services/Case Studies 2:18, Core Web Vitals pass 92%",
      image: "/dek-studio-screenshot.png",
      link: "https://www.dek-studio.com/",
      status: "live"
    },
    {
      id: 2,
      title: "Vibe Web Studio",
      description: "Sales-first agency site with crisp offers, social proof, and conversion-optimized packages.",
      results: "Qualified leads ↑ 1.9×, Form CVR ↑ +3.2pp (to 6.8%), SQLs/month 18 → 33, LCP 1.9s",
      image: "/vibewebstudio.png",
      link: "https://vibewebstudio.com",
      status: "live"
    },
    {
      id: 3,
      title: "YBO Agency",
      description: "'Creative back office' positioning with modular service blocks and fast quote flows.",
      results: "Inbound briefs ↑ 27%, Avg. deal size ↑ 14%, Bounce ↓ 11%, Return visits ↑ 22%",
      image: "/yboagency.png",
      link: "https://yboagency.com",
      status: "live"
    },
    {
      id: 4,
      title: "Car Rush",
      description: "Marketplace UX for verified vehicles with transparent pricing and smart filters.",
      results: "Listing views ↑ 38%, Contact-dealer CTR ↑ +2.6pp (to 9.4%), Saved searches 1.2k/mo, PDP exit ↓ 15%",
      image: "/carrush.png",
      link: "https://www.carrush.lk/",
      status: "live"
    },
    {
      id: 5,
      title: "Car Arena Ceylon",
      description: "Dealer site emphasizing warranties, OEM upgrades, and nationwide support.",
      results: "Test-drive bookings ↑ 29%, Finance enquiries ↑ 21%, Mobile call clicks ↑ 34%, LCP 2.2s",
      image: "/cararenaceylon.png",
      link: "https://www.cararenaceylon.com/",
      status: "live"
    },
    {
      id: 6,
      title: "Hilltop Recruitment",
      description: "Heritage-led global recruitment with outcome-driven sector pages.",
      results: "Candidate sign-ups ↑ 23%, Client enquiries ↑ 18%, Time-to-apply ↓ 17%, Organic impressions ↑ 41%",
      image: "/hiltopglobal.png",
      link: "https://hiltopglobal.com/",
      status: "live"
    },
    {
      id: 7,
      title: "Island Jerky",
      description: "Artisan Sri Lankan jerky with flavor storytelling and fast checkout.",
      results: "Conversion rate ↑ +0.7pp (to 2.4%), AOV ↑ 12%, Add-to-cart ↑ 19%, Email capture 4.6%",
      image: "/islandjerky.png",
      link: "https://www.islandjerky.lk/",
      status: "live"
    },
    {
      id: 8,
      title: "Digital Kade",
      description: "Scalable catalogue UX; speed, filters, and useful search.",
      results: "Search-to-purchase ↑ +2.1pp (to 6.3%), Revenue ↑ 16%, Pages/session 3.1 → 4.2, CLS ≤0.06",
      image: "/digitalkade.png",
      link: "https://digitalkade.lk/",
      status: "live"
    },
    {
      id: 9,
      title: "Jacob Day Coaching",
      description: "High-accountability coaching with risk-reversal guarantee.",
      results: "Discovery calls ↑ 26%, Program sign-ups ↑ 19%, Refund rate 1.8%, Social-proof clicks 540/mo",
      image: "/jacobday.png",
      link: "https://www.jacobday.co/",
      status: "live"
    },
    {
      id: 10,
      title: "Mouttaki Coaching",
      description: "8-week transformation program with friction-free onboarding.",
      results: "Lead→Client conversion ↑ +3.8pp (to 12.5%), CAC ↓ 14%, Completion rate 88%, NPS 64",
      image: "/mouttakicoaching.png",
      link: "https://mouttakicoaching.com/",
      status: "live"
    },
    {
      id: 11,
      title: "ARC AI CRM System",
      description: "Custom-built CRM system with AI-powered features for streamlined client management and automation.",
      results: "Enhanced client tracking, Automated workflows, AI-driven insights, Improved team collaboration",
      image: "/arc crm system.png",
      link: "#",
      status: "live"
    },
    {
      id: 12,
      title: "Fit Bite",
      description: "Handcrafted protein-cookie brand with Ceylon flavors and custom protein (10–50 g).",
      results: "Online sales ↑ 21%, AOV ↑ 11%, Subscribe-and-save uptake 7.9%, Repeat purchase 24%",
      image: "/fitbite.png",
      link: "https://www.fitbite.shop/",
      status: "development"
    },
    {
      id: 13,
      title: "Ceylon Tea Land",
      description: "Exporter presence highlighting authentic highland teas and sustainability.",
      results: "Export enquiries ↑ 32%, Sample requests 58/mo, Top-10 keyword count 4 → 11, Intl. sessions ↑ 37%",
      image: "/ceylontealandwebsite.png",
      link: "https://ceylontealandwebsite.netlify.app/",
      status: "development"
    },
    {
      id: 14,
      title: "Inlaid Jewelry",
      description: "Three-generation family jeweler blending Tamil tradition with modern elegance.",
      results: "Custom consults ↑ 28%, High-ticket orders ↑ 17%, Avg. session value ↑ 13%, Organic clicks ↑ 36%",
      image: "/cosmic-dusk.png",
      link: "https://cosmic-dusk-c32013.netlify.app/",
      status: "development"
    },
    {
      id: 15,
      title: "Hijab Boutique",
      description: "Premium hijabs & modest fashion with streamlined PDPs and 30-day free returns.",
      results: "Conversion rate ↑ +0.9pp (to 2.8%), Return rate ↓ 8%, Mobile CVR ↑ +1.1pp, Checkout abandonment ↓ 6%",
      image: "/hijabboutiquestore.png",
      link: "https://hijabboutiquestore.netlify.app/",
      status: "development"
    },
    {
      id: 16,
      title: "Joe Fitness",
      description: "Lead-magnet microsite with a tight value ladder.",
      results: "Lead capture 38%, Cost/lead ↓ 23%, Email open rate 41%, Guide downloads 820/mo",
      image: "/mellifluous-jalebi.png",
      link: "https://mellifluous-jalebi-dd6aef.netlify.app/",
      status: "development"
    },
    {
      id: 17,
      title: "Essential Marketing",
      description: "Studio site turning briefs into bookable packages.",
      results: "Booked projects ↑ 22%, Proposal acceptance ↑ +6.4pp (to 38%), Pipeline value LKR 14.6M, Avg. response time ↓ 19%",
      image: "/essentialmarketing.png",
      link: "https://essentialmarketing.netlify.app",
      status: "development"
    },
    {
      id: 18,
      title: "Ceylon Motors",
      description: "Car discovery hub for buy/rent with type & price filters.",
      results: "Filtered searches ↑ 33%, Dealer contacts 210/mo, Bounce ↓ 12%, Session duration 3:04",
      image: "/ceylonmotors.png",
      link: "https://ceylonmotors.netlify.app",
      status: "development"
    },
    {
      id: 19,
      title: "Bakery website",
      description: "Modern AI-powered portfolio showcase with advanced animations.",
      results: "Currently in development",
      image: "/prismatic-mooncake.png",
      link: "https://prismatic-mooncake-640ca9.netlify.app",
      status: "development"
    },
  ];

  const customTemplates = [
    {
      id: 1,
      title: "Luxury Restaurant",
      description: "Elegant restaurant template with sophisticated design and seamless user experience.",
      image: "/luxary restaurent.png",
      link: "https://luxaryrestaurant-demo.netlify.app/",
    },
    {
      id: 2,
      title: "Travel Agency",
      description: "Modern travel agency template designed to inspire wanderlust and drive bookings.",
      image: "/travelagency.png",
      link: "https://beautiful-conkies-2df92d.netlify.app/",
    },
    {
      id: 3,
      title: "Real Estate",
      description: "Professional real estate template with property listings and advanced search features.",
      image: "/real-estate.png",
      link: "https://silly-bombolone-0213cb.netlify.app/",
    },
    {
      id: 4,
      title: "Corporate Website",
      description: "Professional corporate website template with modern design and clean aesthetics.",
      image: "/Corporate website.png",
      link: "https://courageous-fenglisu-1afb0d.netlify.app/",
    },
    {
      id: 5,
      title: "Music/Radio Website",
      description: "Dynamic music and radio website template with engaging multimedia features.",
      image: "/Musicradio website.png",
      link: "https://music-demo1.netlify.app/",
    },
    {
      id: 6,
      title: "Travel/Tourism",
      description: "Stunning travel and tourism website template designed to showcase destinations.",
      image: "/traveltourism.png",
      link: "https://delftdemo.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <SchemaOrg
        type="portfolio"
        pageTitle="Portfolio"
        pageDescription="Explore ARC Digital Canvas portfolio of successful web design, AI automation, branding, and digital marketing projects."
        pageUrl="https://arcai.agency/portfolio"
      />
      <Navbar />
      <FloatingActions />

      {/* Hero Section with Animation */}
      <PortfolioHero />

      {/* Portfolio Grid */}
      <section className="relative px-6 lg:px-12 pb-32">
        <div className="max-w-[1800px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {portfolioItems.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer transition-all duration-700 opacity-100 translate-y-0"
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6 bg-zinc-900">
                  <img src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" decoding="async" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${item.status === "live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                        }`}
                    >
                      {item.status === "live" ? "Live" : "In Development"}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3
                    className="text-3xl md:text-4xl font-bold text-white group-hover:text-[rgb(255,73,37)] transition-colors duration-300 uppercase"
                    style={{
                      fontFamily:
                        "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Results */}
                  <div className="pt-3 mt-3 border-t border-zinc-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      <p className="text-xs text-green-500 uppercase tracking-wider font-bold">
                        Results
                      </p>
                    </div>
                    <p className="text-sm md:text-base text-zinc-200 leading-relaxed font-medium">
                      {item.results}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Demos built for clients Section */}
      <section className="relative px-6 lg:px-12 pb-32">
        <div className="max-w-[1800px] w-full mx-auto">
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Demos built for clients
            </h2>
            <div className="w-24 h-1 bg-[rgb(255,73,37)] mx-auto mt-6"></div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {customTemplates.map((template, index) => (
              <a
                key={template.id}
                href={template.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer transition-all duration-700 opacity-100 translate-y-0"
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6 bg-zinc-900">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                </div>

                {/* Template Info */}
                <div className="space-y-3">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white group-hover:text-[rgb(255,73,37)] transition-colors duration-300 uppercase"
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {template.title}
                  </h3>
                  <p className="text-base text-zinc-300 leading-relaxed">
                    {template.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}

