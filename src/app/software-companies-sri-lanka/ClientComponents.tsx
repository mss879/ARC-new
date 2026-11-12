"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Layers, ChevronRight, Share2, ArrowUp } from "lucide-react";
import s from "./pillar.module.css";

/* ── Scroll Progress Bar (Pure CSS — zero JS, no Framer Motion) ── */

export function ScrollProgressBar() {
    return (
        <div
            className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none"
            style={{
                background: "linear-gradient(to right, rgb(255,73,37) var(--scroll-pct, 0%), transparent 0)",
                animation: "scroll-progress linear",
                animationTimeline: "scroll()",
            } as React.CSSProperties}
        >
            <style>{`
                @keyframes scroll-progress {
                    from { --scroll-pct: 0%; }
                    to { --scroll-pct: 100%; }
                }
                @property --scroll-pct {
                    syntax: "<percentage>";
                    inherits: false;
                    initial-value: 0%;
                }
            `}</style>
        </div>
    );
}

/* ── Back to Top Button ──────────────────────────────────────── */

export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 800);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-40 w-11 h-11 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center text-neutral-400 hover:text-[rgb(255,73,37)] hover:border-[rgb(255,73,37)]/40 transition-all shadow-xl"
            aria-label="Back to top"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}

/* ── Active TOC with Scroll Spy (desktop sidebar only) ───────────
 * Hidden below `lg`: on a phone it used to sit above the article and push the
 * company list several screens down. The hero's jump links do that job on mobile. */

interface TOCItem {
    id: string;
    label: string;
}

export function ActiveTOC({ items }: { items: TOCItem[] }) {
    const [activeId, setActiveId] = useState<string>("");

    const handleScroll = useCallback(() => {
        const offsets = items
            .map((item) => {
                const el = document.getElementById(item.id);
                if (!el) return null;
                return { id: item.id, top: el.getBoundingClientRect().top };
            })
            .filter(Boolean) as { id: string; top: number }[];

        const current = offsets.reduce<{ id: string; top: number } | null>(
            (best, o) => {
                if (o.top <= 150 && (!best || o.top > best.top)) return o;
                return best;
            },
            null
        );

        if (current) setActiveId(current.id);
    }, [items]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <aside className="hidden lg:block w-80 shrink-0 sticky top-24 mt-4">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    In This Guide
                </div>
                <nav className="flex flex-col gap-0.5" aria-label="Table of contents">
                    {items.map((item, i) => {
                        const isActive = activeId === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`flex items-center gap-3 py-1.5 transition-colors group ${isActive ? "text-[rgb(255,73,37)]" : "text-neutral-300 hover:text-[rgb(255,73,37)]"}`}
                            >
                                <span className={`text-xs font-mono w-6 shrink-0 ${isActive ? "text-[rgb(255,73,37)]" : "text-neutral-600"}`}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <ChevronRight className={`w-3 h-3 shrink-0 transition-colors ${isActive ? "text-[rgb(255,73,37)]" : "text-neutral-700 group-hover:text-[rgb(255,73,37)]"}`} />
                                <span className={`font-medium text-sm ${isActive ? "text-[rgb(255,73,37)]" : ""}`}>{item.label}</span>
                            </a>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}

/* ── Social Share Buttons ────────────────────────────────────── */

export function SocialShareButtons({ url, title }: { url: string; title: string }) {
    const [copied, setCopied] = useState(false);

    const shareLinks = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch { /* fallback silently */ }
    };

    return (
        <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" /> Share
            </span>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-[rgb(255,73,37)] hover:border-[rgb(255,73,37)]/30 transition-colors no-underline">
                LinkedIn
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-[rgb(255,73,37)] hover:border-[rgb(255,73,37)]/30 transition-colors no-underline">
                X / Twitter
            </a>
            <button onClick={copyLink} className="px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-[rgb(255,73,37)] hover:border-[rgb(255,73,37)]/30 transition-colors">
                {copied ? "Copied!" : "Copy Link"}
            </button>
        </div>
    );
}

/* ── Interactive Comparison Table ──────────────────────────────
 * Rows arrive already ordered from the server, and every sort uses a numeric key
 * or an explicit locale, so the server HTML and the hydrated table always match. */

export interface CompanyRow {
    slug: string;
    name: string;
    founded: string;
    specialty: string;
    size: string;
    /** Numeric size for sorting, computed on the server. */
    sizeSort: number;
    rating?: string;
    ratingKind?: string;
    category: string;
    type: string;
    city: string;
}

type SortField = "name" | "founded" | "rating" | "size";
type SortDir = "asc" | "desc";

const PILL = "px-4 py-2 text-xs font-semibold rounded-full border transition-colors";
const PILL_ON = "bg-[rgb(255,73,37)] text-white border-[rgb(255,73,37)]";
const PILL_OFF = "bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-neutral-200";

function unique(values: string[]): string[] {
    return values.filter((v, i) => values.indexOf(v) === i);
}

export function InteractiveComparisonTable({ companies }: { companies: CompanyRow[] }) {
    const [tier, setTier] = useState("All");
    const [type, setType] = useState("All");
    const [query, setQuery] = useState("");
    const [sortField, setSortField] = useState<SortField>("size");
    const [sortDir, setSortDir] = useState<SortDir>("desc");

    const tiers = useMemo(() => ["All", ...unique(companies.map((c) => c.category))], [companies]);
    const types = useMemo(() => ["All", ...unique(companies.map((c) => c.type))], [companies]);

    const rows = useMemo(() => {
        const q = query.trim().toLowerCase();
        const dir = sortDir === "asc" ? 1 : -1;
        return companies
            .filter(
                (c) =>
                    (tier === "All" || c.category === tier) &&
                    (type === "All" || c.type === type) &&
                    (!q || `${c.name} ${c.specialty} ${c.type} ${c.city}`.toLowerCase().includes(q))
            )
            .sort((a, b) => {
                let cmp = 0;
                if (sortField === "name") cmp = a.name.localeCompare(b.name, "en");
                else if (sortField === "founded") cmp = parseInt(a.founded, 10) - parseInt(b.founded, 10);
                else if (sortField === "rating") cmp = parseFloat(a.rating || "0") - parseFloat(b.rating || "0");
                else cmp = a.sizeSort - b.sizeSort;
                return cmp * dir || a.name.localeCompare(b.name, "en");
            });
    }, [companies, tier, type, query, sortField, sortDir]);

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDir(field === "name" || field === "founded" ? "asc" : "desc");
        }
    };

    const sortHeader = (field: SortField, label: string, className?: string) => {
        const active = sortField === field;
        return (
            <th className={className} aria-sort={active ? (sortDir === "asc" ? "ascending" : "descending") : "none"}>
                <button type="button" onClick={() => handleSort(field)}>
                    {label}
                    <span aria-hidden="true" className={active ? s.accent : undefined}>
                        {active ? (sortDir === "asc" ? "▲" : "▼") : "↕"}
                    </span>
                </button>
            </th>
        );
    };

    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-3">
                {tiers.map((t) => (
                    <button key={t} type="button" onClick={() => setTier(t)} aria-pressed={tier === t} className={`${PILL} ${tier === t ? PILL_ON : PILL_OFF}`}>
                        {t === "All" ? "All sizes" : t}
                        {t !== "All" && <span className="opacity-60 ml-1">({companies.filter((c) => c.category === t).length})</span>}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-5">
                {types.map((t) => (
                    <button key={t} type="button" onClick={() => setType(t)} aria-pressed={type === t} className={`${PILL} ${type === t ? PILL_ON : PILL_OFF}`}>
                        {t === "All" ? "All types" : t}
                        {t !== "All" && <span className="opacity-60 ml-1">({companies.filter((c) => c.type === t).length})</span>}
                    </button>
                ))}
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search name, specialty or city"
                    aria-label="Search companies"
                    className="flex-1 min-w-[180px] px-4 py-2 text-sm rounded-full bg-neutral-950 border border-neutral-800 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-[rgb(255,73,37)]/60"
                />
            </div>

            <div className={s.tableWrap}>
                <table className={s.table}>
                    <thead>
                        <tr>
                            {sortHeader("name", "Company")}
                            <th className={s.wide}>Type</th>
                            {sortHeader("size", "Employees")}
                            {sortHeader("founded", "Est.", s.wide)}
                            <th className={s.wide}>Specialty</th>
                            {sortHeader("rating", "Rating", s.wide)}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((c) => (
                            <tr key={c.slug}>
                                <td>
                                    <a href={`#${c.slug}`}>{c.name}</a>
                                    <span className={`${s.sub} ${s.narrowOnly}`}>{c.specialty}</span>
                                </td>
                                <td className={`${s.wide} ${s.small}`}>{c.type}</td>
                                <td className={s.nowrap}>{c.size}</td>
                                <td className={s.wide}>{c.founded}</td>
                                <td className={`${s.wide} ${s.small}`}>{c.specialty}</td>
                                <td className={`${s.wide} ${s.nowrap}`}>
                                    {c.rating ? (
                                        <>
                                            <span className={s.star} aria-hidden="true">★</span> {c.rating}
                                            <span className={s.sub}>{c.ratingKind}</span>
                                        </>
                                    ) : (
                                        "—"
                                    )}
                                </td>
                            </tr>
                        ))}
                        {rows.length === 0 && (
                            <tr>
                                <td colSpan={6}>No companies match those filters.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-neutral-600 mt-3" aria-live="polite">
                Showing {rows.length} of {companies.length} companies · Select a column heading to sort
            </p>
        </div>
    );
}
