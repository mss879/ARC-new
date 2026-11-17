/* Server-rendered inline SVG charts — no client JS, crawlable, zero bundle cost. */

const ACCENT = "rgb(255,73,37)";
const GRID = "rgba(27, 26, 23, 0.1)";
const LABEL = "#3F3D38";
const MUTED = "#6B675F";

/* EDB estimated monthly ICT/BPM export earnings, 2026 (US$ millions), as first published each month.
 * EDB revises earlier months, so these do not add up to its cumulative total. */
const EXPORT_MONTHS = [
    { month: "Jan", value: 177.83 },
    { month: "Feb", value: 153.62 },
    { month: "Mar", value: 169.46 },
    { month: "Apr", value: 146.09 },
    { month: "May", value: 158.21 },
    { month: "Jun", value: 150.49 },
    { month: "Jul", value: 143.24 },
    { month: "Aug", value: 135.1 },
    { month: "Sep", value: 123.81 },
];

export function ExportEarningsChart() {
    const width = 640;
    const height = 300;
    const margin = { top: 28, right: 16, bottom: 36, left: 48 };
    const plotW = width - margin.left - margin.right;
    const plotH = height - margin.top - margin.bottom;
    const yMax = 200;
    const slot = plotW / EXPORT_MONTHS.length;
    const barW = Math.min(56, slot * 0.6);
    const gridValues = [0, 50, 100, 150, 200];

    return (
        <figure className="my-8 mx-0">
            <div className="cut-card [--cut:14px] relative bg-transparent [--cut-line:rgba(27,26,23,0.1)] p-4 md:p-6">
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    className="w-full h-auto"
                    role="img"
                    aria-label="Bar chart of Sri Lanka's monthly ICT and BPM export earnings from January to September 2026, falling from 178 million US dollars in January to 124 million in September"
                >
                    <title>Sri Lanka ICT/BPM Export Earnings, January–September 2026 (US$ millions)</title>
                    {gridValues.map((v) => {
                        const y = margin.top + plotH - (v / yMax) * plotH;
                        return (
                            <g key={v}>
                                <line x1={margin.left} y1={y} x2={width - margin.right} y2={y} stroke={GRID} strokeWidth="1" />
                                <text x={margin.left - 8} y={y + 4} textAnchor="end" fontSize="11" fill={MUTED}>
                                    ${v}M
                                </text>
                            </g>
                        );
                    })}
                    {EXPORT_MONTHS.map((d, i) => {
                        const barH = (d.value / yMax) * plotH;
                        const x = margin.left + i * slot + (slot - barW) / 2;
                        const y = margin.top + plotH - barH;
                        return (
                            <g key={d.month}>
                                <rect x={x} y={y} width={barW} height={barH} rx="4" fill={ACCENT} opacity={0.85} />
                                <text x={x + barW / 2} y={y - 8} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1B1A17">
                                    {d.value.toFixed(0)}
                                </text>
                                <text x={x + barW / 2} y={margin.top + plotH + 20} textAnchor="middle" fontSize="12" fill={LABEL}>
                                    {d.month}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
            <figcaption className="text-xs text-ink-mute mt-3 italic">
                Sri Lanka ICT/BPM export earnings by month, 2026 (US$ millions), as first published by the EDB each month. The EDB later revises monthly estimates, so the bars do not add up to its cumulative figure of US$1,240.67M for January–September, up 3.69% year-on-year. Source:{" "}
                <a href="https://www.srilankabusiness.com/news/sri-lankas-exports-surpass-usd-13-6-bn-in-the-first-nine-months-of-2026-recording-5-percent-growth.html" target="_blank" rel="noopener noreferrer" className="text-ember-deep hover:underline">
                    Export Development Board of Sri Lanka
                </a>
                .
            </figcaption>
        </figure>
    );
}

/* Horizontal bars: people employed in Sri Lanka by the biggest software employers.
 * Rows arrive sorted from page-data.ts; every value has a source linked in the list. */
export function HeadcountChart({ rows }: { rows: { name: string; value: number; label: string }[] }) {
    if (rows.length === 0) return null;
    const width = 640;
    const rowH = 34;
    const margin = { top: 12, right: 96, bottom: 12, left: 190 };
    const height = margin.top + rows.length * rowH + margin.bottom;
    const plotW = width - margin.left - margin.right;
    const max = Math.max(...rows.map((r) => r.value));

    return (
        <figure className="my-8 mx-0">
            <div className="cut-card [--cut:14px] relative bg-transparent [--cut-line:rgba(27,26,23,0.1)] p-4 md:p-6 overflow-x-auto">
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    role="img"
                    aria-label={`Bar chart of the ${rows.length} largest software employers in Sri Lanka by local headcount, led by ${rows[0].name} with ${rows[0].label} people`}
                    className="w-full h-auto min-w-[480px]"
                >
                    <title>Largest software employers in Sri Lanka by local headcount</title>
                    {rows.map((r, i) => {
                        const y = margin.top + i * rowH;
                        const w = Math.max(4, (r.value / max) * plotW);
                        return (
                            <g key={r.name}>
                                <text x={margin.left - 10} y={y + rowH / 2 + 4} textAnchor="end" fontSize="12" fill={LABEL}>
                                    {r.name.length > 27 ? `${r.name.slice(0, 26)}…` : r.name}
                                </text>
                                <rect x={margin.left} y={y + 7} width={w} height={rowH - 14} rx="4" fill={ACCENT} opacity={i === 0 ? 0.95 : 0.75} />
                                <text x={margin.left + w + 8} y={y + rowH / 2 + 4} fontSize="12" fontWeight="700" fill="#1B1A17">
                                    {r.label}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
            <figcaption className="text-xs text-ink-mute mt-3 italic">
                People employed in Sri Lanka, as published by each company or reported in the press. Sources are linked in the list above.
            </figcaption>
        </figure>
    );
}
