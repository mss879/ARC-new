/* Server-rendered inline SVG charts — no client JS, crawlable, zero bundle cost. */

const ACCENT = "rgb(255,73,37)";
const GRID = "#262626";
const LABEL = "#a3a3a3";
const MUTED = "#525252";

/* EDB estimated monthly ICT/BPM export earnings, 2026 (US$ millions) */
const EXPORT_MONTHS = [
    { month: "Jan", value: 177.83 },
    { month: "Feb", value: 153.62 },
    { month: "Mar", value: 169.46 },
    { month: "Apr", value: 146.09 },
    { month: "May", value: 158.21 },
    { month: "Jun", value: 150.49 },
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
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 md:p-6">
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    className="w-full h-auto"
                    role="img"
                    aria-label="Bar chart of Sri Lanka's monthly ICT and BPM export earnings from January to June 2026, ranging between 146 and 178 million US dollars per month"
                >
                    <title>Sri Lanka ICT/BPM Export Earnings, January–June 2026 (US$ millions)</title>
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
                                <text x={x + barW / 2} y={y - 8} textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">
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
            <figcaption className="text-xs text-neutral-500 mt-3 italic">
                Sri Lanka ICT/BPM export earnings by month, 2026 (US$ millions, EDB estimates). H1 2026 total: US$885.4M, up 17.6% year-on-year; full-year 2025: US$1,644.8M. Source:{" "}
                <a href="https://www.srilankabusiness.com/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">
                    Export Development Board of Sri Lanka
                </a>
                .
            </figcaption>
        </figure>
    );
}

/* Typical agency hourly-rate bands (USD), mid-2026 — same figures as the comparison tables */
const RATE_BANDS = [
    { region: "United States", min: 100, max: 200, highlight: false },
    { region: "United Kingdom", min: 80, max: 150, highlight: false },
    { region: "Eastern Europe", min: 40, max: 80, highlight: false },
    { region: "Sri Lanka", min: 20, max: 60, highlight: true },
    { region: "Philippines", min: 20, max: 50, highlight: false },
    { region: "India", min: 18, max: 50, highlight: false },
    { region: "Vietnam", min: 18, max: 45, highlight: false },
];

export function RateComparisonChart() {
    const width = 640;
    const rowH = 40;
    const margin = { top: 16, right: 16, bottom: 32, left: 130 };
    const height = margin.top + RATE_BANDS.length * rowH + margin.bottom;
    const plotW = width - margin.left - margin.right;
    const xMax = 200;
    const x = (v: number) => margin.left + (v / xMax) * plotW;
    const gridValues = [0, 50, 100, 150, 200];

    return (
        <figure className="my-8 mx-0">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 md:p-6">
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    className="w-full h-auto"
                    role="img"
                    aria-label="Range chart comparing typical software development hourly rates by country: Sri Lanka 20 to 60 US dollars, India 18 to 50, Philippines 20 to 50, Vietnam 18 to 45, Eastern Europe 40 to 80, United Kingdom 80 to 150, United States 100 to 200"
                >
                    <title>Software Development Hourly Rates by Country, 2026 (USD)</title>
                    {gridValues.map((v) => (
                        <g key={v}>
                            <line x1={x(v)} y1={margin.top} x2={x(v)} y2={height - margin.bottom} stroke={GRID} strokeWidth="1" />
                            <text x={x(v)} y={height - margin.bottom + 18} textAnchor="middle" fontSize="11" fill={MUTED}>
                                ${v}
                            </text>
                        </g>
                    ))}
                    {RATE_BANDS.map((d, i) => {
                        const cy = margin.top + i * rowH + rowH / 2;
                        const fill = d.highlight ? ACCENT : "#404040";
                        return (
                            <g key={d.region}>
                                <text
                                    x={margin.left - 10}
                                    y={cy + 4}
                                    textAnchor="end"
                                    fontSize="12"
                                    fontWeight={d.highlight ? 700 : 400}
                                    fill={d.highlight ? "#ffffff" : LABEL}
                                >
                                    {d.region}
                                </text>
                                <rect x={x(d.min)} y={cy - 7} width={x(d.max) - x(d.min)} height={14} rx="7" fill={fill} opacity={d.highlight ? 0.95 : 0.8} />
                                <text x={x(d.max) + 8} y={cy + 4} fontSize="11" fontWeight={d.highlight ? 700 : 400} fill={d.highlight ? "#ffffff" : MUTED}>
                                    ${d.min}–${d.max}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
            <figcaption className="text-xs text-neutral-500 mt-3 italic">
                Typical agency hourly-rate bands for custom software development, mid-2026 (USD). Based on Clutch country listings, GoodFirms profiles, and published 2026 rate guides.
            </figcaption>
        </figure>
    );
}
