import Link from "next/link";

/* Plain, server-rendered links to the Sri Lanka guides.
 * The animated site footer is not rendered on blog pages and its links start at
 * opacity 0, so these guides had almost no crawlable links from the blog. This strip
 * is visible without JavaScript. Keep the notes free of counts so they never go stale. */
/** Also used by the home page's "Read before you buy" section (home/GuidesSection). */
export const guides = [
    {
        href: "/software-companies-sri-lanka",
        label: "Software Companies in Sri Lanka",
        note: "Every major firm compared by size, specialty and type, with sources.",
    },
    {
        href: "/ai-companies-sri-lanka",
        label: "AI Companies in Sri Lanka",
        note: "Who builds AI products and automation in Sri Lanka, and how to choose.",
    },
    {
        href: "/web-design-sri-lanka",
        label: "Web Design Companies in Sri Lanka",
        note: "Agencies, pricing benchmarks and what to ask before you hire.",
    },
];

export default function GuidesStrip() {
    return (
        <nav aria-label="Sri Lanka industry guides" className="bg-transparent border-t border-ink/10 px-6 lg:px-12 py-12">
            <div className="max-w-[1800px] mx-auto">
                <p className="text-sm font-semibold uppercase tracking-wider text-ink-mute mb-4">
                    Sri Lanka industry guides
                </p>
                <ul className="grid gap-3 md:grid-cols-3 list-none p-0 m-0">
                    {guides.map((guide) => (
                        <li key={guide.href}>
                            <Link
                                href={guide.href}
                                className="cut-card [--cut:12px] relative group block h-full p-4 [--cut-line:rgba(27,26,23,0.1)] hover:[--cut-line:rgba(27,26,23,0.3)] hover:bg-white transition-colors"
                            >
                                <span className="block font-medium text-ink group-hover:text-ember-deep transition-colors">
                                    {guide.label}
                                </span>
                                <span className="block text-sm text-ink-soft mt-1">{guide.note}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
