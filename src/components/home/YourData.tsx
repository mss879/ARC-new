import PauseOffscreen from "./PauseOffscreen";

/**
 * "Your accounts, your data": how ARC sets up what it builds, placed near the
 * end of the page, where a visitor weighing a commitment starts asking about
 * lock-in, ownership and their customers' data.
 *
 * Every line matches ARC's proposal terms and the legal research behind
 * them (memory: source-code-handover-law, qj-quartz-proposal): accounts in
 * the client's name; work made only for the client assigned with its source
 * on final payment (IP Act No. 36 of 2003, s.14(4)); the shared platform
 * licensed permanently and kept upgraded; data handled as a processor under
 * the PDPA. Change these words only if those terms change.
 *
 * A server component; the icons are CSS loops under "Your data" in
 * src/index.css (still for reduced motion, paused off screen).
 */

type Point = { icon: "key" | "code" | "refresh" | "shield"; title: string; text: string; dark?: boolean };

const POINTS: Point[] = [
  {
    icon: "key",
    title: "Accounts in your name",
    text: "WhatsApp Business, AI usage, hosting and the database run on accounts in your business's name. You see and pay every bill directly.",
    dark: true,
  },
  {
    icon: "code",
    title: "Built for you, yours to keep",
    text: "Work made only for you is assigned to you on final payment, with its source code, as Sri Lankan copyright law intends.",
  },
  {
    icon: "refresh",
    title: "Our platform, licensed for good",
    text: "The shared engine behind our agents and back office is licensed to you permanently, and it keeps getting upgrades.",
  },
  {
    icon: "shield",
    title: "Your customers' data, protected",
    text: "We use your customer data only on your instructions, keep it confidential, and return or delete it when you ask.",
  },
];

export default function YourData() {
  return (
    <section
      id="your-data"
      className="render-when-near relative px-4 py-16 md:px-8 lg:px-20 lg:py-24"
      aria-labelledby="your-data-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* At most two rows, each line on one row. The heading sits beside the
            paragraph only from 1280px (below that it has the full width), and
            its size is capped at 1/6.6 of its box (cqw): the longest line of
            the four headings laid out like this, "Your accounts,", is 6.3
            times the font size. So it shrinks only where the box is too
            narrow, and the four stay the same size. */}
        <div className="grid gap-8 xl:grid-cols-2 xl:items-end xl:gap-16">
          <div className="[container-type:inline-size]">
            <h2
              id="your-data-heading"
              className="text-[length:min(3rem,100cqw/6.6)] font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-[length:min(3.75rem,100cqw/6.6)] md:text-[length:min(4.5rem,100cqw/6.6)] lg:text-[length:min(5.5rem,100cqw/6.6)]"
            >
              <span className="block whitespace-nowrap">Your accounts,</span>
              <span className="block whitespace-nowrap text-ember-ink">your data</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl xl:pb-3">
            How we set up what we build, so it stays in your hands from the first day.
          </p>
        </div>

        <PauseOffscreen className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {POINTS.map((point, index) => (
            <article
              key={point.icon}
              className={`${point.dark ? "ink-card" : "cream-card"} [--cut:22px] flex flex-col p-6 lg:p-7`}
            >
              <DataIcon kind={point.icon} index={index} dark={point.dark} />
              <h3
                className={`mt-8 text-2xl font-medium leading-tight tracking-[-0.03em] ${
                  point.dark ? "text-paper-white" : "text-ink"
                }`}
              >
                {point.title}
              </h3>
              <p className={`mt-3 text-base leading-relaxed ${point.dark ? "text-paper-white/70" : "text-ink-soft"}`}>
                {point.text}
              </p>
            </article>
          ))}
        </PauseOffscreen>
      </div>
    </section>
  );
}

/** A line icon with one small looping movement. Decoration only. */
function DataIcon({ kind, index, dark }: { kind: Point["icon"]; index: number; dark?: boolean }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: `yd h-12 w-12 ${dark ? "text-ember" : "text-ember-ink"}`,
    style: { "--i": index } as React.CSSProperties,
  };
  if (kind === "key") {
    return (
      <svg {...common}>
        <g className="yd-key">
          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
          <circle cx="16.5" cy="7.5" r=".6" fill="currentColor" />
        </g>
      </svg>
    );
  }
  if (kind === "code") {
    return (
      <svg {...common}>
        <path className="yd-code-l" d="m6 8-4 4 4 4" />
        <path className="yd-code-r" d="m18 16 4-4-4-4" />
        <path className="yd-code-s" d="m14.5 4-5 16" />
      </svg>
    );
  }
  if (kind === "refresh") {
    return (
      <svg {...common}>
        <g className="yd-refresh">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
          <path d="M8 16H3v5" />
        </g>
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path className="yd-check" d="m9 12 2 2 4-4" pathLength={1} />
    </svg>
  );
}
