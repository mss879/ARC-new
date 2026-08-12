// Server Component - Optimized for SEO
import { Metadata } from "next";
import NextImage from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SchemaOrg from "@/components/SchemaOrg";
import PortfolioHero from "@/components/PortfolioHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollToTop from "@/components/ScrollToTop";

// SEO Metadata for Portfolio Page
export const metadata: Metadata = {
  title: "Portfolio | Top AI Company Work — ARC AI",
  description: "ARC AI portfolio — web design, AI automation, branding & marketing projects with proven results. Top AI company in Sri Lanka & UK.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Portfolio - Our Best Work | ARC AI",
    description: "Explore our portfolio of successful web design, AI automation, and digital marketing projects with proven results.",
    url: "https://www.arcai.agency/portfolio",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Portfolio",
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
    title: "Portfolio - Our Best Work | ARC AI",
    description: "Explore our portfolio of successful projects",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/portfolio"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function Portfolio() {
  const portfolioItems = [
    {
      id: 48,
      title: "Tech Nurture",
      description: "Expert repair, servicing and maintenance for air conditioners, refrigerators, inline water purifiers and bottle water dispensers, keeping homes and businesses across Sri Lanka cool, fresh and running.",
      image: "/tech-nurture.png",
      link: "https://technurture.lk",
      status: "live"
    },
    {
      id: 47,
      title: "Ceylon Gem Maison",
      description: "Ceylon Gem Maison exports world-class, ethically sourced gemstones from Sri Lanka to global markets with strict certification, complete traceability, and uncompromising international quality standards.",
      image: "/ceylongem.png",
      link: "https://www.ceylongemmaison.com",
      status: "live"
    },
    {
      id: 46,
      title: "Attendly",
      description: "Host events. Sell tickets. Scan in. Attendly turns any event into a seamless experience — attendees pick numbered seats on a live map and walk in with a personal QR ticket. Organizers watch it all happen from one dashboard.",
      image: "/attendly.webp",
      link: "https://www.attendly.buzz",
      status: "live"
    },
    {
      id: 45,
      title: "Imperial Life Sciences Pvt Ltd",
      description: "The website showcases Imperial Life Sciences’ healthcare distribution, medical solutions, and supply chain services through a professional, reliable, and modern digital experience built to strengthen trust and brand presence.",
      image: "/imperial-life-sciences-pvt-ltd.webp",
      link: "https://www.imperiallifesciences.com",
      status: "live"
    },
    {
      id: 44,
      title: "Inventis Pharma",
      description: "The website presents Inventis Pharma’s smart biomedical solutions, medical devices, rehabilitative equipment, and surgical consumables through a strong, professional, and healthcare-focused digital experience.",
      image: "/inventis-pharma.webp",
      link: "https://www.inventispharma.org",
      status: "live"
    },
    {
      id: 43,
      title: "iConn Health Care",
      description: "The website presents iConn Health Care’s diagnostic and healthcare solutions through a clean, modern, and professional digital experience built to highlight quality, accuracy, and trusted medical support.",
      image: "/iconn-health-care.webp",
      link: "https://www.iconnhealthcare.org",
      status: "live"
    },
    {
      id: 42,
      title: "YARI",
      description: "The website presents YARI’s digital automation, custom storefront, web application, and logistics-focused solutions through a futuristic, premium, and high-performance digital experience.",
      image: "/yari.webp",
      link: "https://www.yariagency.com",
      status: "live"
    },
    {
      id: 41,
      title: "PluggedIn",
      description: "The website showcases PluggedIn’s tech, electronics, lifestyle, and personal gadget offerings through a modern, stylish, and e-commerce-ready digital experience built for today’s connected customers.",
      image: "/plugged-new.png",
      link: "https://www.pluggedin.lk",
      status: "live"
    },
    {
      id: 40,
      title: "TriMed Pharma",
      description: "The website presents TriMed Pharma’s healthcare and pharmaceutical solutions through a clean, professional, and trust-focused digital experience built to highlight their mission of promoting, protecting, and improving health.",
      image: "/trimed-pharma.webp",
      link: "https://www.trimedpharma.com",
      status: "live"
    },
    {
      id: 39,
      title: "Zenith Global Pvt Ltd",
      description: "The website showcases Zenith Global’s clinical engineering, healthcare technology, medical equipment, and critical care solutions through a clean, professional, and reliability-driven digital experience.",
      image: "/zenith-global.webp",
      link: "https://www.zenithglobal.biz",
      status: "live"
    },
    {
      id: 38,
      title: "Lavendra Beauty Lounge",
      description: "Dive into our world of care at our renowned beauty salon. Our expert team is dedicated to providing exceptional, personalized treatments using the latest innovations in beauty services.",
      image: "/lavender.webp",
      link: "https://www.lavendrabeauty.lk",
      status: "live"
    },
    {
      id: 37,
      title: "Advitec International",
      description: "Based in Colombo, Advitec International is a premier distributor of biomedical devices, representing top-tier manufacturers to make quality healthcare accessible across Sri Lanka.",
      image: "/advitec.webp",
      link: "https://advitecint.com",
      status: "live"
    },
    {
      id: 36,
      title: "Portland Flooring",
      description: "Portland Flooring delivers elegant, durable, and sustainable flooring solutions. We bring your vision to life with materials that stand the test of time, blending aesthetic beauty with uncompromising quality.",
      image: "/portlands.webp",
      link: "https://www.portlands.com.au/",
      status: "live"
    },
    {
      id: 35,
      title: "Ceylon Tea Land",
      description: "A premium B2B export platform for Ceylon Tea Land (Pvt) Ltd, enabling global buyers to source 100% pure, hand-picked Ceylon tea directly from Sri Lanka's finest estates with export-grade consistency.",
      image: "/ceylon-tea-land.webp",
      link: "https://www.ceylontealand.com/",
      status: "live"
    },
    {
      id: 34,
      title: "Java Global Nexus Platform",
      description: "A premier global delivery and execution hub based in Dubai, offering standardized processes, centralized governance, scalable workforce solutions, and secure digital infrastructure.",
      image: "/java global nexus platform.jpeg",
      link: "https://www.javagnp.ae",
      status: "live"
    },
    {
      id: 32,
      title: "Inspira Worldwide",
      description: "Sri Lanka's definitive pharmaceutical distribution outsourcing partner. From strategic brand building to risk-minimized logistics, Inspira connects domestic manufacturers to patients with unmatched speed, flexibility, and absolute reliability.",
      image: "/inspira-wordwide.png",
      link: "https://inspiraworldwide.com",
      status: "live"
    },
    {
      id: 31,
      title: "Agenly",
      description: "An innovative SaaS platform that empowers businesses to build, train, and deploy custom AI agents in minutes. Features seamless integration with Next.js, WordPress, and popular social channels without requiring any coding expertise.",
      image: "/agenly.online.webp",
      link: "https://www.agenly.online/",
      status: "live"
    },
    {
      id: 33,
      title: "TOS Lanka",
      description: "Sri Lanka's pioneer Electronic Manufacturing Services (EMS) provider and a BOI-approved subsidiary of Tosslec Company Limited, Japan. Delivering end-to-end high-tech assembly for global clients across automotive, biomedical, telecom and IoT.",
      image: "/tos-lanka.png",
      link: "https://www.toslanka.com",
      status: "live"
    },
    {
      id: 30,
      title: "Mulberry Living",
      description: "A premium Next.js platform and tailored booking system developed for a tranquil boutique accommodation in Negombo. Engineered for a seamless user experience to handle property reservations smoothly.",
      image: "/mulberry-living.webp",
      link: "https://www.mulberry-living.com/",
      status: "live"
    },
    {
      id: 29,
      title: "Java Global Access Platform LLC",
      description: "Global Delivery for Tech & Professional Services. Structured professional services and managed operational support for overseas clients. We built a custom website, an internal CRM system, and an AI agent for customer support.",
      results: "Operational efficiency ↑ 45%, Client management streamlined, Support response time ↓ 60%, AI-driven customer engagement",
      image: "/javagap.webp",
      link: "https://javagap.ae/",
      status: "live"
    },
    {
      id: 28,
      title: "Sponge Global (Pvt) Ltd",
      description: "We deliver innovative learning and development solutions, including customer eLearning, Immersive training, and talent development strategies.",
      results: "Training engagement ↑ 40%, Course completion rate ↑ 35%, Client inquiries ↑ 50%, Interactive learning deployment",
      image: "/sponge-portfolio.webp",
      link: "https://www.spongeglobal.com/",
      status: "live"
    },
    {
      id: 27,
      title: "Delft Tours & Travel (Pvt) Ltd",
      description: "A premier Sri Lankan travel agency offering immersive, custom-tailored tours across the island. Discover the vibrant culture, pristine beaches, and exotic wildlife with expert local guides.",
      results: "Tour bookings ↑ 55%, Custom itinerary requests ↑ 40%, Website engagement ↑ 65%, Seamless booking experience",
      image: "/delft-tours.webp",
      link: "https://www.delfttours.com/",
      status: "live"
    },
    {
      id: 26,
      title: "Secretaries Consultant Services (Pvt) Ltd",
      description: "Secretaries Consultant Services (Pvt) Ltd provides complete end-to-end support spanning the entire corporate lifecycle.",
      results: "Operational efficiency ↑ 45%, Corporate workflow speed ↑ 40%, Admin overhead ↓ 35%, End-to-end support optimization",
      image: "/secertery-services.webp",
      link: "https://consultantservices.lk/",
      status: "live"
    },
    {
      id: 24,
      title: "Halo 360",
      description: "Digital agency focused on strategic partnerships for marketing and growth.",
      results: "Custom website ↑ brand visibility 45%, SEO traffic ↑ 60%, Strategic partnership inquiries ↑ 35%, Client retention improvement",
      image: "/halo.webp",
      link: "https://halo360.online/",
      status: "live"
    },
    {
      id: 25,
      title: "EXIM Corporation",
      description: "Specializes in industrial manufacturing and partner networks in Sri Lanka.",
      results: "Global network reach ↑ 40%, Supply chain efficiency ↑ 25%, Manufacturing inquiries ↑ 30%, Digital catalog engagement",
      image: "/exim.webp",
      link: "https://eximcpl.com",
      status: "live"
    },
    {
      id: 20,
      title: "Core Craft",
      description: "Premium web design and development agency offering custom website builds, UI/UX design, and brand identity solutions.",
      results: "Custom website ↑ lead generation 45%, Integrated CRM system, Client management efficiency ↑ 60%, Modern design showcase",
      image: "/core-craft-screenshot.webp",
      link: "https://www.corecraft.agency",
      status: "live"
    },
    {
      id: 22,
      title: "Ontriq",
      description: "Sri Lanka's background verification and HR solutions provider offering 7-day turnaround for employment history, education, and criminal record checks, along with recruitment, payroll management, and business formation services.",
      results: "Custom website ↑ client inquiries 52%, CRM system streamlined case tracking, Processing time ↓ 30%, Automated client communications",
      image: "/Ontriq-screenshot.webp",
      link: "https://www.ontriq.com",
      status: "live"
    },
    {
      id: 21,
      title: "Orkestrate",
      description: "AI-powered marketing orchestration platform for DTC brands that automates customer segmentation, campaign creation, and revenue optimization by analyzing order data, browsing behavior, and campaign performance across integrated channels.",
      image: "/orkestrate-screenshot.webp",
      link: "https://www.orkestrate.com",
      status: "live"
    },
    {
      id: 23,
      title: "KeysPlease",
      description: "Real estate marketplace for residential property sales in Sri Lanka featuring premium homes and investment properties with listings and purchase facilitation services.",
      results: "Custom website ↑ property inquiries 67%, CRM system ↑ lead management efficiency 58%, Listing views ↑ 3.2×, Client follow-up rate ↑ 72%",
      image: "/KeysPlease-Screenshot.webp",
      link: "https://www.keysplease.shop",
      status: "live"
    },
    {
      id: 1,
      title: "DEK Studio",
      description: "Built a trust-forward MEP site that showcases end-to-end capability with clear project pathways.",
      results: "Leads ↑ 31%, Proposal requests ↑ 24%, Avg. time on Services/Case Studies 2:18, Core Web Vitals pass 92%",
      image: "/dek-studio-screenshot.webp",
      link: "https://www.dek-studio.com/",
      status: "live"
    },
    {
      id: 2,
      title: "Vibe Web Studio",
      description: "Sales-first agency site with crisp offers, social proof, and conversion-optimized packages.",
      results: "Qualified leads ↑ 1.9×, Form CVR ↑ +3.2pp (to 6.8%), SQLs/month 18 → 33, LCP 1.9s",
      image: "/vibewebstudio.webp",
      link: "https://vibewebstudio.com",
      status: "live"
    },
    {
      id: 3,
      title: "YBO Agency",
      description: "'Creative back office' positioning with modular service blocks and fast quote flows.",
      results: "Inbound briefs ↑ 27%, Avg. deal size ↑ 14%, Bounce ↓ 11%, Return visits ↑ 22%",
      image: "/yboagency.webp",
      link: "https://yboagency.com",
      status: "live"
    },
    {
      id: 4,
      title: "Car Rush",
      description: "Marketplace UX for verified vehicles with transparent pricing and smart filters.",
      results: "Listing views ↑ 38%, Contact-dealer CTR ↑ +2.6pp (to 9.4%), Saved searches 1.2k/mo, PDP exit ↓ 15%",
      image: "/carrush.webp",
      link: "https://www.carrush.lk/",
      status: "live"
    },
    {
      id: 5,
      title: "Car Arena Ceylon",
      description: "Dealer site emphasizing warranties, OEM upgrades, and nationwide support.",
      results: "Test-drive bookings ↑ 29%, Finance enquiries ↑ 21%, Mobile call clicks ↑ 34%, LCP 2.2s",
      image: "/cararenaceylon.webp",
      link: "https://www.cararenaceylon.com/",
      status: "live"
    },
    {
      id: 6,
      title: "Hilltop Recruitment",
      description: "Heritage-led global recruitment with outcome-driven sector pages.",
      results: "Candidate sign-ups ↑ 23%, Client enquiries ↑ 18%, Time-to-apply ↓ 17%, Organic impressions ↑ 41%",
      image: "/hiltopglobal.webp",
      link: "https://hiltopglobal.com/",
      status: "live"
    },
    {
      id: 7,
      title: "Island Jerky",
      description: "Artisan Sri Lankan jerky with flavor storytelling and fast checkout.",
      results: "Conversion rate ↑ +0.7pp (to 2.4%), AOV ↑ 12%, Add-to-cart ↑ 19%, Email capture 4.6%",
      image: "/islandjerky.webp",
      link: "https://www.islandjerky.lk/",
      status: "live"
    },
    {
      id: 8,
      title: "Digital Kade",
      description: "Scalable catalogue UX; speed, filters, and useful search.",
      results: "Search-to-purchase ↑ +2.1pp (to 6.3%), Revenue ↑ 16%, Pages/session 3.1 → 4.2, CLS ≤0.06",
      image: "/digitalkade.webp",
      link: "https://digitalkade.lk/",
      status: "live"
    },
    {
      id: 9,
      title: "Jacob Day Coaching",
      description: "High-accountability coaching with risk-reversal guarantee.",
      results: "Discovery calls ↑ 26%, Program sign-ups ↑ 19%, Refund rate 1.8%, Social-proof clicks 540/mo",
      image: "/jacobday.webp",
      link: "https://www.jacobday.co/",
      status: "live"
    },
    {
      id: 10,
      title: "Mouttaki Coaching",
      description: "8-week transformation program with friction-free onboarding.",
      results: "Lead→Client conversion ↑ +3.8pp (to 12.5%), CAC ↓ 14%, Completion rate 88%, NPS 64",
      image: "/mouttakicoaching.webp",
      link: "https://mouttakicoaching.com/",
      status: "live"
    },
    {
      id: 11,
      title: "ARC AI CRM System",
      description: "Custom-built CRM system with AI-powered features for streamlined client management and automation.",
      results: "Enhanced client tracking, Automated workflows, AI-driven insights, Improved team collaboration",
      image: "/arc crm system.webp",
      link: "#",
      status: "live"
    },
    {
      id: 12,
      title: "Fit Bite",
      description: "Handcrafted protein-cookie brand with Ceylon flavors and custom protein (10–50 g).",
      results: "Online sales ↑ 21%, AOV ↑ 11%, Subscribe-and-save uptake 7.9%, Repeat purchase 24%",
      image: "/fitbite.webp",
      link: "https://www.fitbite.shop/",
      status: "development"
    },
    {
      id: 14,
      title: "Inlaid Jewelry",
      description: "Three-generation family jeweler blending Tamil tradition with modern elegance.",
      results: "Custom consults ↑ 28%, High-ticket orders ↑ 17%, Avg. session value ↑ 13%, Organic clicks ↑ 36%",
      image: "/cosmic-dusk.webp",
      link: "https://cosmic-dusk-c32013.netlify.app/",
      status: "development"
    },
    {
      id: 15,
      title: "Hijab Boutique",
      description: "Premium hijabs & modest fashion with streamlined PDPs and 30-day free returns.",
      results: "Conversion rate ↑ +0.9pp (to 2.8%), Return rate ↓ 8%, Mobile CVR ↑ +1.1pp, Checkout abandonment ↓ 6%",
      image: "/hijabboutiquestore.webp",
      link: "https://hijabboutiquestore.netlify.app/",
      status: "development"
    },
    {
      id: 16,
      title: "Joe Fitness",
      description: "Lead-magnet microsite with a tight value ladder.",
      results: "Lead capture 38%, Cost/lead ↓ 23%, Email open rate 41%, Guide downloads 820/mo",
      image: "/mellifluous-jalebi.webp",
      link: "https://mellifluous-jalebi-dd6aef.netlify.app/",
      status: "development"
    },
    {
      id: 17,
      title: "Essential Marketing",
      description: "Studio site turning briefs into bookable packages.",
      results: "Booked projects ↑ 22%, Proposal acceptance ↑ +6.4pp (to 38%), Pipeline value LKR 14.6M, Avg. response time ↓ 19%",
      image: "/essentialmarketing.webp",
      link: "https://essentialmarketing.netlify.app",
      status: "development"
    },
    {
      id: 18,
      title: "Ceylon Motors",
      description: "Car discovery hub for buy/rent with type & price filters.",
      results: "Filtered searches ↑ 33%, Dealer contacts 210/mo, Bounce ↓ 12%, Session duration 3:04",
      image: "/ceylonmotors.webp",
      link: "https://ceylonmotors.netlify.app",
      status: "development"
    },
    {
      id: 19,
      title: "Bakery website",
      description: "Modern AI-powered portfolio showcase with advanced animations.",
      results: "Currently in development",
      image: "/prismatic-mooncake.webp",
      link: "https://prismatic-mooncake-640ca9.netlify.app",
      status: "development"
    },
  ];

  const customTemplates = [
    {
      id: 1,
      title: "Luxury Restaurant",
      description: "Elegant restaurant template with sophisticated design and seamless user experience.",
      image: "/luxary restaurent.webp",
      link: "https://luxaryrestaurant-demo.netlify.app/",
    },
    {
      id: 2,
      title: "Travel Agency",
      description: "Modern travel agency template designed to inspire wanderlust and drive bookings.",
      image: "/travelagency.webp",
      link: "https://beautiful-conkies-2df92d.netlify.app/",
    },
    {
      id: 3,
      title: "Real Estate",
      description: "Professional real estate template with property listings and advanced search features.",
      image: "/real-estate.webp",
      link: "https://silly-bombolone-0213cb.netlify.app/",
    },
    {
      id: 4,
      title: "Corporate Website",
      description: "Professional corporate website template with modern design and clean aesthetics.",
      image: "/Corporate website.webp",
      link: "https://courageous-fenglisu-1afb0d.netlify.app/",
    },
    {
      id: 5,
      title: "Music/Radio Website",
      description: "Dynamic music and radio website template with engaging multimedia features.",
      image: "/Musicradio website.webp",
      link: "https://music-demo1.netlify.app/",
    },
    {
      id: 6,
      title: "Travel/Tourism",
      description: "Stunning travel and tourism website template designed to showcase destinations.",
      image: "/traveltourism.webp",
      link: "https://delftdemo.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <SchemaOrg
        type="portfolio"
        pageTitle="Portfolio"
        pageDescription="Explore ARC AI portfolio of successful web design, AI automation, branding, and digital marketing projects."
        pageUrl="https://www.arcai.agency/portfolio"
      />
      <Navbar />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Portfolio" }
      ]} />

      <main>

        {/* Hero Section with Animation */}
        <PortfolioHero />



        {/* Portfolio Grid */}
        <section className="relative px-6 lg:px-12 pb-32" aria-label="Portfolio projects">
          <div className="max-w-[1800px] w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {portfolioItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} - view project (opens in new tab)`}
                  className="group cursor-pointer transition-all duration-700 opacity-100 translate-y-0"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6 bg-zinc-950 border border-white/10">
                    <NextImage
                      src={item.image}
                      alt={`${item.title} - Custom Web Design & Software built by ARC AI`}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      priority={index < 4}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ${item.status === "live"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                          }`}
                      >
                        {item.status === "live" ? "Live" : "In Development"}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center z-20">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
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
                    {item.results && (
                      <div className="pt-3 mt-3 border-t border-zinc-700/50">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
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
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Demos built for clients Section */}
        <section className="relative px-6 lg:px-12 pb-32" aria-label="Demo templates">
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
                  aria-label={`${template.title} demo (opens in new tab)`}
                  className="group cursor-pointer transition-all duration-700 opacity-100 translate-y-0"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6 bg-zinc-950 border border-white/10">
                    <NextImage
                      src={template.image}
                      alt={`${template.title} - Premium Web Design Template by ARC AI`}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 z-10" />
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

      </main>

      <Footer />
    </div>
  );
}

