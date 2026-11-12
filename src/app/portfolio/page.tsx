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
import { portfolioItems } from "@/content/portfolio";

// SEO Metadata for Portfolio Page
export const metadata: Metadata = {
  title: "Portfolio | Websites, Systems and AI Agents by ARC AI",
  description: "Websites, online stores, business systems and AI agents built by ARC AI in Colombo. Open any live project to see it for yourself.",
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
              {portfolioItems.map((item, index) => {
                const cardClassName = `group transition-all duration-700 opacity-100 translate-y-0${item.link ? " cursor-pointer" : ""}`;
                const cardStyle = { transitionDelay: `${index * 150}ms` };

                const cardContent = (
                  <>
                    {/* Image Container */}
                    <div className="relative aspect-[39/20] overflow-hidden rounded-lg mb-6 bg-zinc-950 border border-white/10 transition-colors duration-500 group-hover:border-[rgb(255,73,37)]/40">
                      <NextImage
                        src={item.image}
                        alt={`${item.title} - Custom Web Design & Software built by ARC AI`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        priority={index < 4}
                      />

                      {/* Hover Overlay - only for projects with a live link */}
                      {item.link && (
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
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3">
                      {/* Status */}
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${item.status === "live"
                          ? "bg-green-500/10 text-green-400 border-green-500/30"
                          : "bg-orange-500/10 text-orange-400 border-orange-500/30"
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${item.status === "live" ? "bg-green-400" : "bg-orange-400"}`}
                          aria-hidden="true"
                        />
                        {item.status === "live" ? "Live" : "In Development"}
                      </span>
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
                    </div>
                  </>
                );

                // Projects without a public link yet render as plain cards.
                if (!item.link) {
                  return (
                    <div key={item.id} className={cardClassName} style={cardStyle}>
                      {cardContent}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} - view project (opens in new tab)`}
                    className={cardClassName}
                    style={cardStyle}
                  >
                    {cardContent}
                  </a>
                );
              })}
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
                  <div className="relative aspect-[39/20] overflow-hidden rounded-lg mb-6 bg-zinc-950 border border-white/10 transition-colors duration-500 group-hover:border-[rgb(255,73,37)]/40">
                    <NextImage
                      src={template.image}
                      alt={`${template.title} - Premium Web Design Template by ARC AI`}
                      fill
                      className="object-contain"
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

