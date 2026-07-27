"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown, Layers, ChevronRight, ChevronUp, Share2, ArrowUp, Star } from "lucide-react";

/* ── FAQ Accordion Item (SSR-friendly: open by default, collapses on hydration) ── */

export function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(true); // SSR: open by default so Google indexes content
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
        setOpen(false); // Collapse on client hydration
    }, []);

    return (
        <div className="border-b border-neutral-800 last:border-b-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
            >
                <span className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-neutral-400 mt-1 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pb-6" : "max-h-0"}`}
            >
                <p className="text-neutral-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

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

/* ── Active TOC with Scroll Spy ──────────────────────────────── */

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
        <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 mt-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    In This Guide
                </div>
                <nav className="flex flex-col gap-1" aria-label="Table of contents">
                    {items.map((item, i) => {
                        const isActive = activeId === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`flex items-center gap-3 py-2 transition-colors group ${isActive ? "text-[rgb(255,73,37)]" : "text-neutral-300 hover:text-[rgb(255,73,37)]"}`}
                            >
                                <span className={`text-xs font-mono w-6 shrink-0 ${isActive ? "text-[rgb(255,73,37)]" : "text-neutral-600"}`}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <ChevronRight className={`w-3 h-3 transition-colors ${isActive ? "text-[rgb(255,73,37)]" : "text-neutral-700 group-hover:text-[rgb(255,73,37)]"}`} />
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

export function SocialShareButtons() {
    const [copied, setCopied] = useState(false);
    const url = typeof window !== "undefined" ? window.location.href : "https://www.arcai.agency/software-companies-sri-lanka";
    const title = "Software Companies in Sri Lanka: 23 Top Firms Compared (2026)";

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
        <div className="flex items-center gap-3">
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

/* ── Interactive Comparison Table ────────────────────────────── */

interface CompanyRow {
    name: string;
    founded: string;
    specialty: string;
    size: string;
    rating?: string;
    bestFor: string;
    category: string;
}

type SortField = "name" | "founded" | "rating" | "size";
type SortDir = "asc" | "desc";

function parseSizeForSort(size: string): number {
    const match = size.match(/[\d,]+/);
    if (!match) return 0;
    return parseInt(match[0].replace(/,/g, ""), 10);
}

export function InteractiveComparisonTable({ companies }: { companies: CompanyRow[] }) {
    const [filter, setFilter] = useState<string>("All");
    const [sortField, setSortField] = useState<SortField>("name");
    const [sortDir, setSortDir] = useState<SortDir>("asc");

    const categories = ["All", ...Array.from(new Set(companies.map((c) => c.category)))];

    const filtered = filter === "All" ? companies : companies.filter((c) => c.category === filter);

    const sorted = [...filtered].sort((a, b) => {
        let cmp = 0;
        switch (sortField) {
            case "name":
                cmp = a.name.localeCompare(b.name);
                break;
            case "founded":
                cmp = parseInt(a.founded) - parseInt(b.founded);
                break;
            case "rating":
                cmp = (parseFloat(a.rating || "0")) - (parseFloat(b.rating || "0"));
                break;
            case "size":
                cmp = parseSizeForSort(a.size) - parseSizeForSort(b.size);
                break;
        }
        return sortDir === "asc" ? cmp : -cmp;
    });

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDir("asc");
        }
    };

    const SortIcon = ({ field }: { field: SortField }) => (
        <span className="inline-flex flex-col ml-1 leading-none">
            <ChevronUp className={`w-3 h-3 ${sortField === field && sortDir === "asc" ? "text-[rgb(255,73,37)]" : "text-neutral-700"}`} />
            <ChevronDown className={`w-3 h-3 -mt-1 ${sortField === field && sortDir === "desc" ? "text-[rgb(255,73,37)]" : "text-neutral-700"}`} />
        </span>
    );

    return (
        <div>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 text-xs font-semibold rounded-full border transition-colors ${
                            filter === cat
                                ? "bg-[rgb(255,73,37)] text-white border-[rgb(255,73,37)]"
                                : "bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-neutral-200"
                        }`}
                    >
                        {cat} {cat !== "All" && <span className="text-neutral-500 ml-1">({companies.filter((c) => c.category === cat).length})</span>}
                    </button>
                ))}
            </div>

            {/* Sortable table */}
            <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="w-full text-sm border border-neutral-800 min-w-[800px]">
                    <thead>
                        <tr className="border-b border-neutral-800 bg-neutral-950">
                            <th className="p-3 text-left text-neutral-400 font-semibold cursor-pointer select-none hover:text-white transition-colors" onClick={() => handleSort("name")}>
                                <span className="flex items-center">Company <SortIcon field="name" /></span>
                            </th>
                            <th className="p-3 text-left text-neutral-400 font-semibold cursor-pointer select-none hover:text-white transition-colors" onClick={() => handleSort("founded")}>
                                <span className="flex items-center">Est. <SortIcon field="founded" /></span>
                            </th>
                            <th className="p-3 text-left text-neutral-400 font-semibold">Specialty</th>
                            <th className="p-3 text-left text-neutral-400 font-semibold cursor-pointer select-none hover:text-white transition-colors" onClick={() => handleSort("size")}>
                                <span className="flex items-center">Size <SortIcon field="size" /></span>
                            </th>
                            <th className="p-3 text-left text-neutral-400 font-semibold cursor-pointer select-none hover:text-white transition-colors" onClick={() => handleSort("rating")}>
                                <span className="flex items-center">Rating <SortIcon field="rating" /></span>
                            </th>
                            <th className="p-3 text-left text-neutral-400 font-semibold">Best For</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.map((c) => (
                            <tr key={c.name} className="border-b border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
                                <td className="p-3 text-white font-semibold whitespace-nowrap">{c.name}</td>
                                <td className="p-3 text-neutral-400">{c.founded}</td>
                                <td className="p-3 text-neutral-400 text-xs">{c.specialty}</td>
                                <td className="p-3 text-neutral-400 whitespace-nowrap">{c.size}</td>
                                <td className="p-3 text-neutral-400 whitespace-nowrap">
                                    {c.rating ? (
                                        <span className="flex items-center gap-1">
                                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                            {c.rating}
                                        </span>
                                    ) : (
                                        <span className="text-neutral-600">—</span>
                                    )}
                                </td>
                                <td className="p-3 text-neutral-500 text-xs max-w-[200px]">{c.bestFor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-neutral-600 mt-3">
                Showing {sorted.length} of {companies.length} companies · Click column headers to sort
            </p>
        </div>
    );
}
