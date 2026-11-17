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
      imageSize: { width: 1600, height: 799 },
      link: "https://luxaryrestaurant-demo.netlify.app/",
    },
    {
      id: 2,
      title: "Travel Agency",
      description: "Modern travel agency template designed to inspire wanderlust and drive bookings.",
      image: "/travelagency.webp",
      imageSize: { width: 1600, height: 766 },
      link: "https://beautiful-conkies-2df92d.netlify.app/",
    },
    {
      id: 3,
      title: "Real Estate",
      description: "Professional real estate template with property listings and advanced search features.",
      image: "/real-estate.webp",
      imageSize: { width: 1600, height: 800 },
      link: "https://silly-bombolone-0213cb.netlify.app/",
    },
    {
      id: 4,
      title: "Corporate Website",
      description: "Professional corporate website template with modern design and clean aesthetics.",
      image: "/Corporate website.webp",
      imageSize: { width: 3660, height: 1825 },
      link: "https://courageous-fenglisu-1afb0d.netlify.app/",
    },
    {
      id: 5,
      title: "Music/Radio Website",
      description: "Dynamic music and radio website template with engaging multimedia features.",
      image: "/Musicradio website.webp",
      imageSize: { width: 1600, height: 762 },
      link: "https://music-demo1.netlify.app/",
    },
    {
      id: 6,
      title: "Travel/Tourism",
      description: "Stunning travel and tourism website template designed to showcase destinations.",
      image: "/traveltourism.webp",
      imageSize: { width: 1600, height: 805 },
      link: "https://delftdemo.netlify.app/",
    },
  ];

  return (
    <div className="home-cream min-h-screen bg-transparent text-ink">
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
            {/* Each card spans two rows (picture, then text) shared with the
                card beside it, so the texts in a row line up even when the
                two screenshots are different shapes: a shorter one keeps its
                shape with a little space under it. */}
            <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2 lg:gap-x-12">
              {portfolioItems.map((item, index) => {
                const cardClassName = `group grid grid-rows-subgrid row-span-2 transition-all duration-700 opacity-100 translate-y-0${item.link ? " cursor-pointer" : ""}`;
                const cardStyle = { transitionDelay: `${index * 150}ms` };
                // With its pixel size known, the tile takes the screenshot's own
                // shape and the image fills it, cut corners included, with
                // nothing cropped. Otherwise the image is shown whole in a
                // 39:20 tile.
                const imageSize = "imageSize" in item ? item.imageSize : undefined;

                const cardContent = (
                  <>
                    {/* Image Container */}
                    <div
                      className={`cut-card [--cut:12px] relative self-start overflow-hidden mb-6 bg-transparent [--cut-line:rgba(27,26,23,0.1)] transition-colors duration-500 group-hover:[--cut-line:rgba(255,73,37,0.4)]${imageSize ? "" : " aspect-[39/20]"}`}
                      style={imageSize ? { aspectRatio: `${imageSize.width} / ${imageSize.height}` } : undefined}
                    >
                      <NextImage
                        src={item.image}
                        alt={`${item.title} - Custom Web Design & Software built by ARC AI`}
                        fill
                        className={imageSize ? "object-cover" : "object-contain"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        priority={index < 4}
                      />

                      {/* Hover Overlay - only for projects with a live link */}
                      {item.link && (
                        <div className="absolute inset-0 bg-paper/0 group-hover:bg-paper/40 transition-all duration-500 flex items-center justify-center z-20">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-white">
                              <svg
                                className="w-6 h-6 text-ink"
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
                    <div className="space-y-3 self-start pb-8 lg:pb-12">
                      {/* Status */}
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${item.status === "live"
                          ? "bg-green-500/10 text-green-700 border-green-500/30"
                          : "bg-ember/10 text-ember-deep border-ember/30"
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${item.status === "live" ? "bg-green-400" : "bg-ember"}`}
                          aria-hidden="true"
                        />
                        {item.status === "live" ? "Live" : "In Development"}
                      </span>
                      <h3
                        className="text-3xl md:text-4xl font-bold text-ink group-hover:text-ember-ink transition-colors duration-300 uppercase"
                        style={{
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-ink-soft leading-relaxed">
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
                className="text-5xl md:text-6xl lg:text-7xl font-medium text-ink tracking-[-0.035em]"
                style={{
                }}
              >
                Demos built for clients
              </h2>
              <div className="w-24 h-1 bg-ember mx-auto mt-6"></div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-3 lg:gap-x-12">
              {customTemplates.map((template, index) => (
                <a
                  key={template.id}
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${template.title} demo (opens in new tab)`}
                  className="group grid grid-rows-subgrid row-span-2 cursor-pointer transition-all duration-700 opacity-100 translate-y-0"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Image Container */}
                  <div
                    className="cut-card [--cut:12px] relative self-start overflow-hidden mb-6 bg-transparent [--cut-line:rgba(27,26,23,0.1)] transition-colors duration-500 group-hover:[--cut-line:rgba(255,73,37,0.4)]"
                    style={{ aspectRatio: `${template.imageSize.width} / ${template.imageSize.height}` }}
                  >
                    <NextImage
                      src={template.image}
                      alt={`${template.title} - Premium Web Design Template by ARC AI`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-paper/0 group-hover:bg-paper/20 transition-all duration-700 z-10" />
                  </div>

                  {/* Template Info */}
                  <div className="space-y-3 self-start pb-8 lg:pb-12">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-ink group-hover:text-ember-ink transition-colors duration-300 uppercase"
                      style={{
                      }}
                    >
                      {template.title}
                    </h3>
                    <p className="text-base text-ink-soft leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA tone="cream" />

      </main>

      <Footer tone="dark" />
    </div>
  );
}

