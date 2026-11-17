import { Metadata } from "next";
import Link from "next/link";
import { companyCount as softwareCompanyCount } from "@/app/software-companies-sri-lanka/page-data";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { hours } from "@/content/site-facts";

export const metadata: Metadata = {
  title: "Best AI Companies in Sri Lanka: 2026 Guide",
  description:
    "Top 10 AI companies in Sri Lanka for 2026. Compare ARC AI, 99x, Virtusa, WSO2 & more — services, pricing, and expert rankings.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Best AI Companies in Sri Lanka: 2026 Guide",
    description:
      "Compare the best AI companies in Sri Lanka. In-depth guide covering 10+ companies, services, specializations, and how to choose the right AI partner for your business.",
    url: "https://www.arcai.agency/ai-companies-sri-lanka",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top AI Companies in Sri Lanka 2026 — Complete Guide",
      },
    ],
    locale: "en_LK",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Companies in Sri Lanka: 2026 Guide",
    description:
      "Compare 10+ AI companies in Sri Lanka. Services, specializations, pricing & expert recommendations.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/ai-companies-sri-lanka",
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

// ── Structured Data ─────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top AI Companies in Sri Lanka (2026) — Complete Guide & Rankings",
  description:
    "Comprehensive guide to the top AI companies in Sri Lanka for 2026. Compare 10+ leading AI companies, their services, specializations, and how to choose the right AI partner.",
  author: {
    "@type": "Organization",
    name: "ARC AI",
    url: "https://www.arcai.agency",
  },
  publisher: {
    "@type": "Organization",
    name: "ARC AI",
    logo: {
      "@type": "ImageObject",
      url: "https://www.arcai.agency/logo.png",
      width: 512,
      height: 512,
    },
  },
  datePublished: "2026-01-15",
  dateModified: "2026-04-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.arcai.agency/ai-companies-sri-lanka",
  },
  image: "https://www.arcai.agency/og-image.jpg",
  wordCount: 4500,
  inLanguage: "en",
  about: {
    "@type": "Thing",
    name: "Artificial Intelligence Companies in Sri Lanka",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the top AI companies in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The top AI companies in Sri Lanka in 2026 include ARC AI (leading AI chatbot and automation agency in Colombo), 99x Technology (AI-driven software engineering), Virtusa (enterprise AI solutions), WSO2 AI Labs (enterprise integration AI), hSenid Mobile (HR and telecom AI), VeracityAI (data science and ML), Zone24x7 (IoT and robotics), Blott (AI development), ConscientAI (computer vision), and Digiratina (NLP solutions). ARC AI leads with 100+ delivered projects and a 4.9/5 Google rating.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI company in Sri Lanka is best for chatbots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ARC AI is the leading AI chatbot development company in Sri Lanka. Their chatbots operate 24/7 in Sinhala, Tamil, and English, handle customer inquiries, qualify leads, book appointments, and integrate with WhatsApp, Facebook Messenger, and websites. Businesses using ARC AI chatbots have seen customer service costs reduce by up to 60%.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI automation cost in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI automation costs in Sri Lanka vary by complexity. Basic chatbots start from LKR 50,000-150,000, intelligent lead qualification bots range from LKR 150,000-500,000, and enterprise multi-channel systems start from LKR 500,000+. ARC AI offers competitive pricing with their dual-market model (UK + Sri Lanka), delivering international-quality AI at local rates.",
      },
    },
    {
      "@type": "Question",
      name: "Does ARC AI have an office in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ARC AI has its Sri Lankan headquarters in Colombo, with a dedicated team of AI engineers, web developers, and digital marketers. They serve businesses across Colombo, Kandy, Galle, Negombo, and all other cities in Sri Lanka.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do AI companies in Sri Lanka serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companies in Sri Lanka serve tourism and hospitality, real estate, e-commerce, healthcare, education, manufacturing, fintech, food and beverage, logistics, automotive, retail, legal services, and construction. Tourism and real estate are the fastest-growing sectors for AI adoption in Sri Lanka.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI companies in Sri Lanka build multilingual chatbots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Companies like ARC AI build chatbots that operate fluently in Sinhala, Tamil, and English. These chatbots understand cultural context and local communication preferences, and deploy across WhatsApp, Facebook Messenger, websites, and other channels used by Sri Lankan consumers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a software company and an AI company in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A software company builds custom applications, websites, and IT infrastructure. An AI company specifically builds solutions powered by artificial intelligence — including machine learning models, natural language processing, computer vision, and generative AI. Many Sri Lankan software companies are adding AI capabilities, but dedicated AI companies like ARC AI focus exclusively on AI-powered solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right AI company in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evaluate AI companies in Sri Lanka on: (1) Proven portfolio with measurable results, (2) Industry-specific experience, (3) Full-stack AI capabilities, (4) Local language support (Sinhala/Tamil), (5) Transparent pricing and ongoing support, (6) Client reviews and Google ratings, (7) Technology stack and integration capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI adoption growing in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sri Lanka's AI market is growing rapidly, driven by government digital transformation initiatives, a strong software engineering talent pipeline from Moratuwa and Colombo universities, and increasing demand from tourism, fintech, and e-commerce sectors. Colombo is the primary AI hub, with emerging activity in Kandy and Jaffna.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI companies in Sri Lanka serve international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many AI companies in Sri Lanka serve international markets. ARC AI, for example, is based in Colombo and works remotely with clients overseas. Sri Lanka's time zone advantage (GMT+5:30) and English proficiency make it an ideal nearshore AI development destination.",
      },
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.arcai.agency/ai-companies-sri-lanka#localbusiness",
  name: "ARC AI — Top AI Company in Sri Lanka",
  alternateName: "ARC AI Agency Sri Lanka",
  url: "https://www.arcai.agency/ai-companies-sri-lanka",
  logo: {
    "@type": "ImageObject",
    url: "https://www.arcai.agency/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "ARC AI is one of the top AI companies in Sri Lanka, offering AI chatbot development, workflow automation, web design, and digital marketing services from Colombo.",
  email: "support@arcai.agency",
  telephone: "+94771852522",
  priceRange: "LKR",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressRegion: "Western Province",
    addressLocality: "Colombo",
    streetAddress: "Colombo 4",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.8935,
    longitude: 79.8558,
  },
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka",
  },
  openingHoursSpecification: hours.periods.map((period) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: period.days,
    opens: period.opens,
    closes: period.closes,
  })),
  sameAs: [
    "https://x.com/arc_ai_agency",
    "https://www.instagram.com/arcai_agency/",
    "https://www.linkedin.com/company/105845719",
    "https://www.facebook.com/ARCAI.lk",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.arcai.agency",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Companies in Sri Lanka",
      item: "https://www.arcai.agency/ai-companies-sri-lanka",
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.arcai.agency/#organization",
  name: "ARC AI",
  alternateName: "ARC AI Agency",
  url: "https://www.arcai.agency",
  logo: {
    "@type": "ImageObject",
    url: "https://www.arcai.agency/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "ARC AI is one of the top AI companies in Sri Lanka, specialising in AI automation, chatbot development, web design, and digital marketing.",
  email: "support@arcai.agency",
  telephone: "+94771852522",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
  },
  sameAs: [
    "https://x.com/arc_ai_agency",
    "https://www.instagram.com/arcai_agency/",
    "https://www.linkedin.com/company/105845719",
    "https://www.facebook.com/ARCAI.lk",
  ],
  foundingDate: "2022",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Chatbots",
    "Workflow Automation",
    "Web Design",
    "Digital Marketing",
    "Machine Learning",
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top 10 AI Companies in Sri Lanka (2026)",
  description: "A ranked list of the top AI companies in Sri Lanka for 2026, based on delivered projects, client reviews, technology capabilities, and market reputation.",
  numberOfItems: 10,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ARC AI", url: "https://www.arcai.agency" },
    { "@type": "ListItem", position: 2, name: "99x Technology" },
    { "@type": "ListItem", position: 3, name: "Virtusa" },
    { "@type": "ListItem", position: 4, name: "WSO2 AI Labs" },
    { "@type": "ListItem", position: 5, name: "hSenid Mobile Solutions" },
    { "@type": "ListItem", position: 6, name: "VeracityAI" },
    { "@type": "ListItem", position: 7, name: "Zone24x7" },
    { "@type": "ListItem", position: 8, name: "Blott" },
    { "@type": "ListItem", position: 9, name: "ConscientAI" },
    { "@type": "ListItem", position: 10, name: "Digiratina" },
  ],
};

// ── Company Data ────────────────────────────────────────────────────────

const companies = [
  {
    rank: 1,
    name: "ARC AI",
    tagline: "Sri Lanka's Leading AI Automation Agency",
    founded: "2022",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "AI Chatbots & Virtual Assistants",
      "Workflow Automation (n8n, Make.com, Zapier)",
      "Smart Website Development (Next.js/React)",
      "AI Content Generation",
      "Digital Marketing & SEO",
      "AI Voice Assistants",
    ],
    industries: "Tourism, Real Estate, E-Commerce, Healthcare, Fintech, Manufacturing",
    highlights: [
      "100+ projects delivered with a 4.9/5 Google rating",
      "Dual-market presence (UK + Sri Lanka) — international quality, local pricing",
      "Trilingual AI chatbots (Sinhala, Tamil, English) with WhatsApp integration",
      "67% average lead increase, 60% average cost reduction across clients",
      "Full-stack: from AI strategy to deployment and ongoing optimisation",
    ],
    website: "https://www.arcai.agency",
    isArcAI: true,
  },
  {
    rank: 2,
    name: "99x Technology",
    tagline: "AI-Driven Software Product Engineering",
    founded: "2004",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "AI-powered software development",
      "Data analytics & machine learning",
      "Cloud-native AI solutions",
      "Digital transformation consulting",
    ],
    industries: "Fintech, Insurance, Logistics, Travel",
    highlights: [
      "One of Sri Lanka's largest software product engineering companies",
      "Great Place to Work certified",
      "Strong partnerships with Nordic and European clients",
    ],
    website: "https://99x.io",
    isArcAI: false,
  },
  {
    rank: 3,
    name: "Virtusa",
    tagline: "Enterprise AI & Digital Strategy",
    founded: "1996",
    hq: "Colombo (major delivery centre)",
    specializations: [
      "Enterprise AI strategy",
      "AI agents & process automation",
      "Data & business intelligence",
      "Cloud migration with AI integration",
    ],
    industries: "Banking, Insurance, Telecommunications, Healthcare",
    highlights: [
      "Global technology services company with 30,000+ employees",
      "Major Colombo delivery centre serving Fortune 500 clients",
      "Deep enterprise AI and digital transformation expertise",
    ],
    website: "https://www.virtusa.com",
    isArcAI: false,
  },
  {
    rank: 4,
    name: "WSO2 AI Labs",
    tagline: "Enterprise Integration & AI Research",
    founded: "2005",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "AI-powered enterprise integration",
      "API management with ML capabilities",
      "Identity and access management AI",
      "AI research & open-source contributions",
    ],
    industries: "Enterprise Software, Financial Services, Government",
    highlights: [
      "Globally recognised open-source middleware company",
      "Strong research-oriented AI labs in Colombo",
      "Products used by hundreds of enterprises worldwide",
    ],
    website: "https://wso2.com",
    isArcAI: false,
  },
  {
    rank: 5,
    name: "hSenid Mobile Solutions",
    tagline: "Enterprise AI for HR & Telecom",
    founded: "2007",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "HR technology with AI-driven analytics",
      "Workforce analytics & predictive modelling",
      "Telecom automation",
      "Enterprise SaaS platforms",
    ],
    industries: "Human Resources, Telecommunications, Enterprise",
    highlights: [
      "Leading HR tech company in South Asia",
      "AI-powered people analytics platform",
      "Serving telecom operators across Asia and Africa",
    ],
    website: "https://hsenidmobile.com",
    isArcAI: false,
  },
  {
    rank: 6,
    name: "VeracityAI",
    tagline: "Data Science & Machine Learning Specialists",
    founded: "2016",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "Data science consulting",
      "Machine learning model development",
      "Predictive analytics",
      "AI strategy & implementation",
    ],
    industries: "Finance, Retail, Manufacturing, Agriculture",
    highlights: [
      "Specialised pure-play AI/ML company",
      "Focus on commercial applications of data science",
      "Experienced team of data scientists and ML engineers",
    ],
    website: "https://www.veracityai.com",
    isArcAI: false,
  },
  {
    rank: 7,
    name: "Zone24x7",
    tagline: "AI, IoT & Advanced Robotics",
    founded: "2004",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "AI and machine learning",
      "IoT platform development",
      "Robotics & automation",
      "Computer vision systems",
    ],
    industries: "Retail, Manufacturing, Logistics",
    highlights: [
      "Technology innovation partner for global retailers",
      "Deep expertise in AI + hardware integration (robotics, IoT)",
      "Experience with large-scale AI deployments",
    ],
    website: "https://zone24x7.com",
    isArcAI: false,
  },
  {
    rank: 8,
    name: "Blott",
    tagline: "AI Development & UX Agency",
    founded: "2020",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "AI integration & chatbot development",
      "UX/UI design",
      "Web & mobile app development",
      "AI-powered product design",
    ],
    industries: "Startups, SaaS, E-Commerce",
    highlights: [
      "Focus on AI-first product development",
      "Strong UX/UI design capabilities alongside AI",
      "Active presence on Clutch and tech directories",
    ],
    website: "https://blott.studio",
    isArcAI: false,
  },
  {
    rank: 9,
    name: "ConscientAI",
    tagline: "Computer Vision & Deep Learning",
    founded: "2018",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "Computer vision",
      "Deep learning model development",
      "Image & video analysis",
      "Custom AI model training",
    ],
    industries: "Security, Agriculture, Healthcare, Manufacturing",
    highlights: [
      "Specialised in visual AI and computer vision applications",
      "Custom deep learning models for industrial use cases",
      "Research-driven approach to AI development",
    ],
    website: "https://conscient.ai",
    isArcAI: false,
  },
  {
    rank: 10,
    name: "Digiratina",
    tagline: "NLP & Generative AI Solutions",
    founded: "2019",
    hq: "Colombo, Sri Lanka",
    specializations: [
      "Natural language processing",
      "GPT & Gemini-based AI systems",
      "Data integration & ETL pipelines",
      "Business process automation",
    ],
    industries: "Finance, Consulting, Professional Services",
    highlights: [
      "Focus on generative AI and NLP applications",
      "Experience building GPT-powered business tools",
      "Data integration and AI pipeline expertise",
    ],
    website: "https://digiratina.com",
    isArcAI: false,
  },
];

// ── Page Component ──────────────────────────────────────────────────────

export default function AICompaniesSriLankaPage() {
  return (
    <div className="home-cream min-h-screen bg-transparent text-ink">
      <ScrollToTop />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Companies in Sri Lanka" },
        ]}
      />

      {/* ─── Hero Section ───────────────────────────────────────────── */}
      <section className="relative pt-8 md:pt-16 pb-20 px-6 lg:px-12">
        <div
          className="absolute inset-0 bg-gradient-to-b from-ember/[0.03] via-transparent to-transparent pointer-events-none hidden"
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-deep">
            Updated April 2026 &bull; Comprehensive Guide
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.035em] leading-[1.05]">
            Top AI Companies in{" "}
            <span className="text-ember-ink">
              Sri Lanka
            </span>{" "}
            (2026)
          </h1>
          <p className="text-xl text-ink-soft max-w-3xl leading-relaxed">
            A comprehensive guide to the best AI companies in Sri Lanka. We
            researched and compared 10+ leading AI companies across Colombo,
            Kandy, and beyond &mdash; evaluating their services,
            specializations, proven track records, and pricing to help you find
            the right AI partner for your business.
          </p>
          <p className="text-sm text-ink-mute">
            Last updated: <time dateTime="2026-04-05">5 April 2026</time> &bull;
            15 min read &bull; By ARC AI Research Team
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#company-rankings"
              className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] px-8 py-4 bg-ember text-ink font-semibold hover:scale-105 transition-transform"
            >
              Jump to Rankings ↓
            </a>
            <a
              href="#how-to-choose"
              className="cut-btn [--cut:12px] px-8 py-4 [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold hover:[--cut-line:rgba(27,26,23,0.3)] transition-colors"
            >
              How to Choose an AI Company
            </a>
          </div>
        </div>
      </section>

      {/* ─── Key Takeaways (Featured Snippet Target) ──────────────── */}
      <section className="px-6 lg:px-12 -mt-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="cut-card [--cut:18px] relative [--cut-line:rgba(255,73,37,0.2)] bg-ember/[0.03] p-8 space-y-4">
            <p className="text-sm font-bold uppercase tracking-wider text-ember-deep">
              Key Takeaways
            </p>
            <ul className="space-y-3 text-ink-soft">
              <li className="flex items-start gap-3">
                <span className="text-ember-deep mt-1 font-bold">→</span>
                <span><strong className="text-ink">Sri Lanka has 10+ established AI companies</strong> serving industries from tourism and real estate to fintech and healthcare.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ember-deep mt-1 font-bold">→</span>
                <span><strong className="text-ink">ARC AI is ranked #1</strong> with 100+ delivered projects, a 4.9/5 Google rating, and trilingual chatbot capabilities (Sinhala, Tamil, English).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ember-deep mt-1 font-bold">→</span>
                <span><strong className="text-ink">AI automation costs in Sri Lanka</strong> range from LKR 50,000 for basic chatbots to LKR 500,000+ for enterprise multi-channel systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ember-deep mt-1 font-bold">→</span>
                <span><strong className="text-ink">Key evaluation criteria:</strong> portfolio depth, multilingual support, full-stack AI capabilities, client reviews, and transparent pricing.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Table of Contents ──────────────────────────────────────── */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-5xl mx-auto">
          <nav className="cut-card [--cut:14px] relative p-6 [--cut-line:rgba(27,26,23,0.1)] bg-transparent">
            <h2 className="text-lg font-medium mb-4 tracking-[-0.035em]">In This Guide</h2>
            <ol className="space-y-2 text-sm text-ink-soft list-decimal list-inside">
              <li>
                <a href="#ai-landscape" className="hover:text-ink transition-colors">
                  AI Industry Landscape in Sri Lanka
                </a>
              </li>
              <li>
                <a href="#how-to-choose" className="hover:text-ink transition-colors">
                  How to Choose the Right AI Company
                </a>
              </li>
              <li>
                <a href="#company-rankings" className="hover:text-ink transition-colors">
                  Top 10 AI Companies in Sri Lanka (2026 Rankings)
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-ink transition-colors">
                  Quick Comparison Table
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-ink transition-colors">
                  Industries Served by AI Companies in Sri Lanka
                </a>
              </li>
              <li>
                <a href="#related-reading" className="hover:text-ink transition-colors">
                  Related Reading: AI in Sri Lanka
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ink transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ─── AI Industry Landscape ──────────────────────────────────── */}
      <section id="ai-landscape" className="py-20 px-6 lg:px-12 border-t border-ink/10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.035em]">
            AI Industry Landscape in Sri Lanka (2026)
          </h2>
          <div className="space-y-6 text-lg text-ink-soft leading-relaxed">
            <p>
              Sri Lanka&apos;s artificial intelligence industry has transformed
              dramatically over the past five years. What was once a small
              ecosystem dominated by outsourced software development has evolved
              into a vibrant hub of specialised AI companies delivering
              cutting-edge solutions across multiple sectors. For a broader view of the overall tech sector, see our comprehensive guide to{" "}
              <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">
                software companies in Sri Lanka
              </Link>.
            </p>
            <p>
              <strong className="text-ink">Colombo</strong> serves as the
              primary AI hub, with the majority of AI companies headquartered in
              the Greater Colombo area. The city benefits from a strong pipeline
              of software engineering talent from the University of Moratuwa,
              University of Colombo, and SLIIT, combined with a growing
              ecosystem of tech incubators and government-backed digital
              transformation initiatives.
            </p>
            <p>
              <strong className="text-ink">Kandy</strong> is emerging as a
              secondary hub, particularly for AI applications in agriculture and
              environmental sustainability. <strong className="text-ink">Jaffna</strong>{" "}
              is also gaining recognition for AI research and educational
              initiatives.
            </p>
            <p>
              The Sri Lankan government has been actively promoting digital
              transformation through initiatives like the National AI Strategy
              and the Digital Economy strategy, creating a favourable
              environment for AI companies to grow and serve both local and
              international markets.
            </p>
            <p>
              Key sectors driving AI adoption in Sri Lanka include{" "}
              <Link href="/blog/ai-for-tourism-sri-lanka" className="text-ember-deep hover:underline">
                tourism and hospitality
              </Link>
              , fintech and banking, real estate, e-commerce, and healthcare.
              The tourism sector alone has seen significant AI adoption, with{" "}
              <Link href="/blog/ai-chatbots-sri-lankan-businesses" className="text-ember-deep hover:underline">
                AI chatbots
              </Link>{" "}
              and{" "}
              <Link href="/blog/ai-agents-sri-lanka" className="text-ember-deep hover:underline">
                AI agents
              </Link>{" "}
              handling booking inquiries, multilingual guest communication, and
              personalised travel recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* ─── How to Choose ──────────────────────────────────────────── */}
      <section id="how-to-choose" className="py-20 px-6 lg:px-12 bg-transparent">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.035em]">
              How to Choose the Right AI Company in Sri Lanka
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              Not all AI companies in Sri Lanka are equal. Before selecting a
              partner, evaluate them against these critical criteria. This is
              the framework we recommend based on the outcomes we&apos;ve seen
              across 100+ AI projects in the Sri Lankan market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">1. Proven Track Record</h3>
              <p className="text-ink-soft leading-relaxed">
                Look for companies with a verifiable portfolio of successful AI
                deployments &mdash; not just demo projects or proof-of-concepts.
                Companies with 50+ delivered projects, client testimonials, and
                quantifiable results (lead increases, cost reductions, revenue
                growth) demonstrate real-world capability.
              </p>
            </div>
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">
                2. Industry-Specific Experience
              </h3>
              <p className="text-ink-soft leading-relaxed">
                AI solutions for tourism are fundamentally different from AI for
                fintech. The best AI companies in Sri Lanka have deep experience
                in your specific industry, understanding sector-specific
                challenges, compliance requirements, and customer expectations.
                Ask for case studies from your exact industry.
              </p>
            </div>
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">
                3. Full-Stack AI Capabilities
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Leading AI companies offer end-to-end solutions &mdash; from AI
                strategy consulting and data preparation to model development,
                deployment, and ongoing optimisation. Avoid companies that only
                offer one narrow AI service. Your needs will evolve, and you want
                a partner who can grow with you.
              </p>
            </div>
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">
                4. Local Language Support
              </h3>
              <p className="text-ink-soft leading-relaxed">
                For customer-facing AI (chatbots, voice assistants), Sinhala and
                Tamil support is critical. The best AI companies in Sri Lanka
                build culturally aware AI that understands local slang,
                communication preferences, and the way real Sri Lankans interact
                &mdash; not just machine-translated responses.
              </p>
            </div>
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">
                5. Transparent Pricing & Support
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Trustworthy AI companies provide clear pricing, detailed
                proposals, and dedicated project managers. They offer ongoing
                support and maintenance after deployment &mdash; not just a
                one-time handoff. Ask about{" "}
                <Link href="/blog/ai-automation-cost-cutting-sri-lanka" className="text-ember-deep hover:underline">
                  AI costs in Sri Lanka
                </Link>{" "}
                and SLA guarantees.
              </p>
            </div>
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">
                6. Technology Stack & Integrations
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Evaluate the technology platforms and tools the company uses.
                Companies using modern frameworks (Next.js, React, Python) and
                established AI platforms (OpenAI, Google AI, n8n, Make.com) are
                more likely to deliver robust, scalable solutions that integrate
                with your existing tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Company Rankings ───────────────────────────────────────── */}
      <section id="company-rankings" className="py-20 px-6 lg:px-12 border-t border-ink/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.035em]">
              Top 10 AI Companies in Sri Lanka (2026)
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed max-w-3xl">
              Based on our research across delivered projects, client reviews,
              technology capabilities, industry experience, and market
              reputation, here are the top AI companies in Sri Lanka for 2026.
            </p>
          </div>

          <div className="space-y-12">
            {companies.map((company) => (
              <div
                key={company.name}
                id={`company-${company.rank}`}
                className={`cut-card [--cut:18px] relative p-8 space-y-6 ${
                  company.isArcAI
                    ? "[--cut-line:rgba(255,73,37,0.4)] bg-gradient-to-br from-ember/[0.06] to-transparent"
                    : "[--cut-line:rgba(27,26,23,0.1)]"
                }`}
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full ${
                          company.isArcAI
                            ? "bg-ember text-ink"
                            : "bg-ink/[0.05] text-ink-soft"
                        }`}
                      >
                        #{company.rank}
                      </span>
                      {company.isArcAI && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/20 text-green-700 border border-green-500/30">
                          ★ Editor&apos;s Choice
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {company.name}
                    </h3>
                    <p className="text-ember-deep text-sm mt-1">
                      {company.tagline}
                    </p>
                  </div>
                  <div className="text-sm text-ink-soft space-y-1 text-right">
                    <p>Founded: {company.founded}</p>
                    <p>{company.hq}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-mute mb-3">
                      Specializations
                    </h4>
                    <ul className="space-y-1.5">
                      {company.specializations.map((spec) => (
                        <li
                          key={spec}
                          className="text-ink-soft text-sm flex items-start gap-2"
                        >
                          <span className="text-ember-deep mt-1">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-mute mb-3">
                      Key Industries
                    </h4>
                    <p className="text-ink-soft text-sm">{company.industries}</p>

                    <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-mute mb-3 mt-6">
                      Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {company.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-ink-soft text-sm flex items-start gap-2"
                        >
                          <span className="text-green-700 mt-1">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {company.isArcAI && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-ink/10">
                    <Link
                      href="/contact"
                      className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] px-6 py-3 bg-ember text-ink font-semibold hover:scale-105 transition-transform text-sm"
                    >
                      Get a Free AI Consultation
                    </Link>
                    <Link
                      href="/portfolio"
                      className="cut-btn [--cut:10px] px-6 py-3 [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold hover:[--cut-line:rgba(27,26,23,0.3)] transition-colors text-sm"
                    >
                      View ARC AI Portfolio
                    </Link>
                    <Link
                      href="/case-studies"
                      className="cut-btn [--cut:10px] px-6 py-3 [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold hover:[--cut-line:rgba(27,26,23,0.3)] transition-colors text-sm"
                    >
                      Read Case Studies
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ───────────────────────────────────────── */}
      <section id="comparison" className="py-20 px-6 lg:px-12 bg-transparent">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.035em]">
            Quick Comparison: AI Companies in Sri Lanka
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="text-left py-4 px-3 font-semibold text-ink-soft">
                    Company
                  </th>
                  <th className="text-left py-4 px-3 font-semibold text-ink-soft">
                    Best For
                  </th>
                  <th className="text-left py-4 px-3 font-semibold text-ink-soft">
                    Company Size
                  </th>
                  <th className="text-left py-4 px-3 font-semibold text-ink-soft">
                    Chatbots
                  </th>
                  <th className="text-left py-4 px-3 font-semibold text-ink-soft">
                    Sinhala/Tamil
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-ink/10 bg-ember/[0.04]">
                  <td className="py-3 px-3 font-semibold text-ink">ARC AI</td>
                  <td className="py-3 px-3 text-ink-soft">SMEs, Chatbots, Automation</td>
                  <td className="py-3 px-3 text-ink-soft">10-50</td>
                  <td className="py-3 px-3 text-green-700">✓</td>
                  <td className="py-3 px-3 text-green-700">✓</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">99x</td>
                  <td className="py-3 px-3 text-ink-soft">Software Product Engineering</td>
                  <td className="py-3 px-3 text-ink-soft">500+</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">Virtusa</td>
                  <td className="py-3 px-3 text-ink-soft">Enterprise AI</td>
                  <td className="py-3 px-3 text-ink-soft">30,000+</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">WSO2</td>
                  <td className="py-3 px-3 text-ink-soft">Enterprise Integration</td>
                  <td className="py-3 px-3 text-ink-soft">800+</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">hSenid</td>
                  <td className="py-3 px-3 text-ink-soft">HR Tech & Telecom</td>
                  <td className="py-3 px-3 text-ink-soft">200+</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">VeracityAI</td>
                  <td className="py-3 px-3 text-ink-soft">Data Science & ML</td>
                  <td className="py-3 px-3 text-ink-soft">10-50</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">Zone24x7</td>
                  <td className="py-3 px-3 text-ink-soft">IoT & Robotics AI</td>
                  <td className="py-3 px-3 text-ink-soft">200+</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">Blott</td>
                  <td className="py-3 px-3 text-ink-soft">AI + UX Design</td>
                  <td className="py-3 px-3 text-ink-soft">10-50</td>
                  <td className="py-3 px-3 text-green-700">✓</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">ConscientAI</td>
                  <td className="py-3 px-3 text-ink-soft">Computer Vision</td>
                  <td className="py-3 px-3 text-ink-soft">10-50</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-3 px-3 font-semibold text-ink">Digiratina</td>
                  <td className="py-3 px-3 text-ink-soft">NLP & Generative AI</td>
                  <td className="py-3 px-3 text-ink-soft">10-50</td>
                  <td className="py-3 px-3 text-green-700">✓</td>
                  <td className="py-3 px-3 text-ink-mute">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Why ARC AI Leads Section ───────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 border-t border-ink/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-deep">
              Our Recommendation
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.035em]">
              Why ARC AI Is Our #1 Pick for Most Sri Lankan Businesses
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed max-w-3xl">
              While Sri Lanka has many strong AI companies, ARC AI consistently
              delivers the best combination of practical AI solutions,
              measurable results, and competitive pricing &mdash; particularly
              for small-to-medium businesses looking for immediate ROI from AI
              adoption.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "100+", label: "Projects Delivered" },
              { stat: "4.9/5", label: "Google Reviews" },
              { stat: "67%", label: "Avg. Lead Increase" },
              { stat: "60%", label: "Cost Reduction" },
            ].map((item) => (
              <div
                key={item.label}
                className="cut-card [--cut:14px] relative text-center p-6 [--cut-line:rgba(27,26,23,0.1)]"
              >
                <p className="text-3xl md:text-4xl font-black text-ember-ink">
                  {item.stat}
                </p>
                <p className="text-sm text-ink-soft mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">Based in Colombo</h3>
              <p className="text-ink-soft leading-relaxed">
                ARC AI works from Colombo, so it knows the Sri Lankan market
                first-hand. Clients overseas are served remotely by the same team.
              </p>
            </div>
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">
                Trilingual AI Solutions
              </h3>
              <p className="text-ink-soft leading-relaxed">
                ARC AI&apos;s chatbots and voice assistants work in Sinhala,
                Tamil, and English &mdash; ensuring your{" "}
                <Link href="/blog/ai-chatbots-sri-lankan-businesses" className="text-ember-deep hover:underline">
                  AI chatbot
                </Link>{" "}
                reaches all Sri Lankan audiences with culturally aware
                communication.
              </p>
            </div>
            <div className="cut-card [--cut:14px] relative space-y-3 p-6 [--cut-line:rgba(27,26,23,0.1)]">
              <h3 className="text-lg font-semibold">Full-Stack AI Agency</h3>
              <p className="text-ink-soft leading-relaxed">
                Unlike competitors who specialise in one area, ARC AI covers{" "}
                <Link href="/services" className="text-ember-deep hover:underline">
                  the full spectrum
                </Link>{" "}
                &mdash; from AI chatbots and{" "}
                <Link href="/blog/ai-automation-cost-cutting-sri-lanka" className="text-ember-deep hover:underline">
                  workflow automation
                </Link>{" "}
                to web design and digital marketing.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] px-8 py-4 bg-ember text-ink font-semibold hover:scale-105 transition-transform"
            >
              Get a Free AI Consultation from ARC AI
            </Link>
            <Link
              href="/portfolio"
              className="cut-btn [--cut:12px] px-8 py-4 [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold hover:[--cut-line:rgba(27,26,23,0.3)] transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Industries Served ──────────────────────────────────────── */}
      <section id="industries" className="py-20 px-6 lg:px-12 bg-transparent">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.035em]">
            Industries Served by AI Companies in Sri Lanka
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            AI companies in Sri Lanka serve a diverse range of industries. Here
            are the key sectors where AI is making the biggest impact, with
            links to our in-depth guides on each:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Tourism & Hospitality", link: "/blog/ai-for-tourism-sri-lanka" },
              { name: "Real Estate", link: "/case-studies" },
              { name: "E-Commerce", link: "/blog/ai-solutions-sri-lankan-industries" },
              { name: "Healthcare", link: "/blog/ai-solutions-sri-lankan-industries" },
              { name: "Education", link: null },
              { name: "Manufacturing", link: null },
              { name: "Fintech", link: null },
              { name: "Food & Beverage", link: null },
              { name: "Logistics", link: null },
              { name: "Retail", link: null },
              { name: "Legal Services", link: null },
              { name: "Construction", link: null },
            ].map((industry) =>
              industry.link ? (
                <Link
                  key={industry.name}
                  href={industry.link}
                  className="cut-card [--cut:12px] relative p-4 [--cut-line:rgba(27,26,23,0.1)] text-center hover:[--cut-line:rgba(255,73,37,0.3)] transition-colors"
                >
                  <span className="text-sm text-ink-soft">{industry.name}</span>
                  <span className="block text-xs text-ember-deep mt-1">
                    Read guide →
                  </span>
                </Link>
              ) : (
                <div
                  key={industry.name}
                  className="cut-card [--cut:12px] relative p-4 [--cut-line:rgba(27,26,23,0.1)] text-center"
                >
                  <span className="text-sm text-ink-soft">{industry.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── Related Reading ────────────────────────────────────────── */}
      <section id="related-reading" className="py-20 px-6 lg:px-12 border-t border-ink/10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.035em]">
            Related Reading: AI in Sri Lanka
          </h2>
          <p className="text-ink-soft">
            Explore our comprehensive library of guides on AI adoption for Sri
            Lankan businesses:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/blog/automation-companies-sri-lanka",
                label: "Blog",
                title: "Top Automation Companies in Sri Lanka",
                desc: "AI agents vs legacy RPA — why the best automation firms are upgrading to semantic AI.",
              },
              {
                href: "/blog/ai-chatbots-sri-lankan-businesses",
                label: "Blog",
                title: "Best AI Chatbots for Sri Lankan Businesses",
                desc: "How trilingual AI chatbots are transforming customer service across Sri Lanka.",
              },
              {
                href: "/blog/ai-for-tourism-sri-lanka",
                label: "Blog",
                title: "AI for Tourism in Sri Lanka",
                desc: "How AI is revolutionising bookings, guest communication, and tourism marketing.",
              },
              {
                href: "/blog/ai-agents-sri-lanka",
                label: "Blog",
                title: "The Rise of AI Agents in Sri Lanka",
                desc: "From chatbots to autonomous AI agents — the next evolution for Sri Lankan businesses.",
              },
              {
                href: "/blog/ai-automation-cost-cutting-sri-lanka",
                label: "Blog",
                title: "AI Automation for Cost Cutting in Sri Lanka",
                desc: "How AI automation is saving Sri Lankan businesses 20+ hours per week.",
              },
              {
                href: "/blog/ai-vs-manual-operations-sri-lanka",
                label: "Blog",
                title: "AI vs Manual Operations — Cost Comparison",
                desc: "A rupee-by-rupee breakdown of AI automation vs. manual staff costs.",
              },
              {
                href: "/blog/ai-solutions-sri-lankan-industries",
                label: "Blog",
                title: "AI Solutions for Sri Lankan Industries",
                desc: "Industry-by-industry breakdown of AI applications across Sri Lanka.",
              },
              {
                href: "/blog/how-ai-transforms-sri-lanka-businesses-2026",
                label: "Blog",
                title: "How AI Is Transforming Sri Lankan Businesses",
                desc: "Real case study data showing AI impact on Sri Lankan businesses in 2026.",
              },
              {
                href: "/blog/ai-customer-service-agent-sri-lanka",
                label: "Blog",
                title: "AI Customer Service Agents for Sri Lanka",
                desc: "Why AI customer service agents outperform traditional support teams.",
              },
              {
                href: "/software-companies-sri-lanka",
                label: "Industry Guide",
                title: "Software Companies in Sri Lanka (2026)",
                desc: `The definitive guide to ${softwareCompanyCount} leading software firms — with pricing, comparisons, and selection criteria.`,
              },
              {
                href: "/blog/smart-websites-sri-lanka-2026",
                label: "Blog",
                title: "Smart Websites in Sri Lanka (2026)",
                desc: "AI-powered websites that actively engage visitors and generate leads.",
              },
              {
                href: "/blog/smart-websites-sri-lanka-2026",
                label: "Blog",
                title: "Traditional vs Smart Websites in Sri Lanka",
                desc: "Why smart websites outperform traditional websites for Sri Lankan businesses.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cut-card [--cut:14px] relative group p-6 [--cut-line:rgba(27,26,23,0.1)] hover:[--cut-line:rgba(255,73,37,0.3)] transition-colors"
              >
                <p className="text-xs text-ember-deep uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <h3 className="text-base font-semibold group-hover:text-ember-ink transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-soft mt-2">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ────────────────────────────────────────────── */}
      <section id="faq" className="py-20 px-6 lg:px-12 bg-transparent">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.035em]">
            Frequently Asked Questions — AI Companies in Sri Lanka
          </h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="cut-card [--cut:12px] relative group [--cut-line:rgba(27,26,23,0.1)] p-6"
                open={i === 0}
              >
                <summary className="text-ink font-medium cursor-pointer list-none flex items-center justify-between">
                  {faq.name}
                  <span className="text-ink-mute group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-ink-soft mt-4 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA tone="cream" />
      <Footer tone="dark" />
    </div>
  );
}
