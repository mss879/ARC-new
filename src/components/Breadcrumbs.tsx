import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** "cream" for a page with the light grey-cream background. */
  tone?: "dark" | "cream";
}

/**
 * SEO Breadcrumbs — visible navigation trail that matches JSON-LD breadcrumb schema.
 * Improves internal linking, user navigation, and Google SERP breadcrumb display.
 */
export default function Breadcrumbs({ items, tone = "cream" }: BreadcrumbsProps) {
  const cream = tone === "cream";
  return (
    <nav
      aria-label="Breadcrumb"
      className="px-6 lg:px-12 pt-[160px] md:pt-32 lg:pt-40 pb-0"
    >
      <ol
        className={`flex items-center gap-2 text-sm max-w-[1800px] mx-auto ${cream ? "text-ink-mute" : "text-zinc-500"}`}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <span className={cream ? "text-ink/30" : "text-zinc-600"} aria-hidden="true">/</span>
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className={`transition-colors ${cream ? "text-ink-mute hover:text-ink" : "text-zinc-400 hover:text-white"}`}
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className={cream ? "text-ink" : "text-zinc-300"} itemProp="name" aria-current="page">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
