"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const allServices = [
  { slug: "ai-chatbots", name: "AI Chatbots", category: "ai" },
  { slug: "ai-automated-workflows", name: "AI Automated Workflows", category: "ai" },
  { slug: "ai-content-generation", name: "AI Content Generation", category: "ai" },
  { slug: "ai-data-processing", name: "AI Data Processing", category: "ai" },
  { slug: "ai-multi-agent-systems", name: "AI Multi-Agent Systems", category: "ai" },
  { slug: "ai-sales-sdrs", name: "AI Sales SDRs", category: "ai" },
  { slug: "ai-voice-assistants", name: "AI Voice Assistants", category: "ai" },
  { slug: "web-design-development", name: "Web Design & Development", category: "web" },
  { slug: "web-apps", name: "Web Applications", category: "web" },
  { slug: "custom-backend", name: "Custom Backend Development", category: "web" },
  { slug: "branding", name: "Branding & Identity", category: "marketing" },
  { slug: "social-media", name: "Social Media Marketing", category: "marketing" },
  { slug: "smart-funnels", name: "Smart Funnels", category: "marketing" },
  { slug: "smart-ad-campaigns", name: "Smart Ad Campaigns", category: "marketing" },
  { slug: "motion-design", name: "Motion Design", category: "marketing" },
  { slug: "consulting-audits", name: "Consulting & Audits", category: "consulting" },
];

/**
 * RelatedServices — internal linking section at the end of every service page.
 *
 * The services layout renders this without knowing which page it is on, so the
 * current page is read from the URL. Before this, every service page listed
 * itself among its "other" services.
 */
export default function RelatedServices() {
  const pathname = usePathname();
  const currentSlug = pathname?.match(/^\/services\/([^/]+)/)?.[1];
  const otherServices = allServices.filter(s => s.slug !== currentSlug);

  return (
    <section className="bg-black py-20 px-6 lg:px-12 border-t border-zinc-800/50" aria-label="Related services">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
          Explore Our Other Services
        </h2>
        <p className="text-zinc-400 mb-10 max-w-3xl">
          ARC AI builds AI agents, automation and the business systems they run inside. Comparing providers? See our guides to <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI companies in Sri Lanka</Link> and <Link href="/software-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">software companies in Sri Lanka</Link>.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {otherServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center gap-3 p-4 rounded-lg border border-zinc-800/50 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-300"
            >
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                {service.name}
              </span>
              <svg
                className="w-3 h-3 text-zinc-600 group-hover:text-[rgb(255,73,37)] transition-colors ml-auto flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Cross-link to main services hub and other key pages */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-wrap gap-6 text-sm">
          <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
            ← All Services
          </Link>
          <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:text-white transition-colors font-medium">
            AI Companies in Sri Lanka →
          </Link>
          <Link href="/software-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:text-white transition-colors font-medium">
            Software Companies in Sri Lanka →
          </Link>
          <Link href="/portfolio" className="text-zinc-400 hover:text-white transition-colors">
            View Our Portfolio →
          </Link>
          <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
            Get a Free Quote →
          </Link>
          <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
            About ARC AI →
          </Link>
        </div>
      </div>
    </section>
  );
}
