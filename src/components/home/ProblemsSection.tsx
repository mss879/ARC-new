import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";

import PauseOffscreen from "./PauseOffscreen";

/**
 * "Where the day goes missing": the everyday problems ARC fixes, just before
 * the five system previews. Six cards, each with a small looping picture of
 * the problem and a link down to the preview of the system that fixes it.
 *
 * The problems are plain statements, not statistics: the site has no source
 * for figures, and the owner's rule is that unsourced numbers stay out.
 *
 * A server component. The pictures are plain HTML moved by CSS (under
 * "Problem visuals" in src/index.css: transform and opacity only, paused
 * while off screen by PauseOffscreen, still for reduced motion).
 */

type ProblemKind = "messages" | "retyping" | "stock" | "month-end" | "posts" | "language";

type Problem = {
  kind: ProblemKind;
  title: string;
  description: string;
  /** The preview further down the page (its id in SystemsShowcase.tsx). */
  fix: { id: string; label: string };
  /** One dark card per group, as elsewhere on the page. */
  dark?: boolean;
};

const PROBLEMS: Problem[] = [
  {
    kind: "messages",
    title: "Messages answered late, or never",
    description: "Customers ask on WhatsApp after hours, wait, and buy from someone who replied.",
    fix: { id: "ai-agents", label: "AI agents" },
    dark: true,
  },
  {
    kind: "retyping",
    title: "The same sale typed in three places",
    description: "Into the receipt book, then Excel, then the accounts. Every copy is another chance for a mistake.",
    fix: { id: "point-of-sale", label: "Point of sale" },
  },
  {
    kind: "stock",
    title: "Stock that doesn't match the shelf",
    description: "The website sells what the shop sold this morning, and someone has to call the customer to say sorry.",
    fix: { id: "online-stores", label: "Online stores" },
  },
  {
    kind: "month-end",
    title: "Numbers only at month end",
    description: "Nobody knows what today made until someone adds it all up, weeks later.",
    fix: { id: "erp", label: "ERP" },
  },
  {
    kind: "posts",
    title: "Posts that never go out",
    description: "When the shop gets busy, social media goes quiet for weeks.",
    fix: { id: "content-office", label: "Content Office" },
  },
  {
    kind: "language",
    title: "Customers who write in Sinhala or Tamil",
    description: "They wait for the one person on the team who can reply in their language.",
    fix: { id: "ai-agents", label: "AI agents" },
  },
];

/** `--i` is an element's place in its sequence; the CSS turns it into a delay. */
const order = (index: number) => ({ "--i": index }) as CSSProperties;

export default function ProblemsSection() {
  return (
    <section
      id="problems"
      className="render-when-near relative px-4 py-16 md:px-8 lg:px-20 lg:py-24"
      aria-labelledby="problems-heading"
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
              id="problems-heading"
              className="text-[length:min(3rem,100cqw/6.6)] font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-[length:min(3.75rem,100cqw/6.6)] md:text-[length:min(4.5rem,100cqw/6.6)] lg:text-[length:min(5.5rem,100cqw/6.6)]"
            >
              <span className="block whitespace-nowrap">Where the day</span>
              <span className="block whitespace-nowrap text-ember-ink">goes missing</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl xl:pb-3">
            Six jobs that quietly eat a working week. Each one has a fix further down this page.
          </p>
        </div>

        <PauseOffscreen className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <article
              key={problem.kind}
              className={`${problem.dark ? "ink-card" : "cream-card"} [--cut:22px] flex flex-col p-6 lg:p-7`}
            >
              <div className="flex h-40 items-center" aria-hidden="true">
                <ProblemVisual kind={problem.kind} />
              </div>
              <h3
                className={`mt-6 text-2xl font-medium leading-tight tracking-[-0.03em] ${
                  problem.dark ? "text-paper-white" : "text-ink"
                }`}
              >
                {problem.title}
              </h3>
              <p className={`mt-3 text-base leading-relaxed ${problem.dark ? "text-paper-white/70" : "text-ink-soft"}`}>
                {problem.description}
              </p>
              <a
                href={`#${problem.fix.id}`}
                className={`mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-semibold underline-offset-4 hover:underline ${
                  problem.dark ? "text-ember" : "text-ember-deep"
                }`}
              >
                The fix: {problem.fix.label}
                <ArrowDown className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
              </a>
            </article>
          ))}
        </PauseOffscreen>
      </div>
    </section>
  );
}

/** The small looping picture at the top of each card. Decoration only. */
function ProblemVisual({ kind }: { kind: ProblemKind }) {
  if (kind === "messages") {
    // Messages arrive late at night while the unread count climbs.
    return (
      <div className="iv iv-chat">
        <div className="iv-chat__head">
          <span>WhatsApp</span>
          <span className="iv-badge iv-stack">
            {["3", "12", "27", "99+"].map((n, i) => (
              <span key={n} style={order(i)}>
                {n}
              </span>
            ))}
          </span>
        </div>
        {[
          ["Hi, is this still available?", "9:42 PM"],
          ["What's the price?", "10:15 PM"],
          ["Hello??", "11:03 PM"],
        ].map(([text, time], i) => (
          <p key={time} className="iv-bubble iv-in" style={order(i)}>
            {text}
            <small>{time}</small>
          </p>
        ))}
      </div>
    );
  }

  if (kind === "retyping") {
    // One sale typed into three places; the third copy has a typo.
    return (
      <div className="iv iv-retype">
        <p className="iv-panel iv-sale">
          Sale <strong>Rs 12,500</strong>
        </p>
        {[
          ["Receipt book", "Rs 12,500", false],
          ["Excel", "Rs 12,500", false],
          ["Accounts", "Rs 12,050", true],
        ].map(([label, value, typo], i) => (
          <p key={label as string} className="iv-panel iv-row">
            <span className="iv-row__label">{label}</span>
            <span className={`iv-row__value${typo ? " iv-row__value--typo" : ""}`} style={order(i)}>
              {value}
            </span>
          </p>
        ))}
        <p className="iv-stamp iv-late">Typed 3 times</p>
      </div>
    );
  }

  if (kind === "stock") {
    // The shelf runs down while the website still shows the old count.
    return (
      <div className="iv iv-stock">
        <div className="iv-stock__grid">
          <p className="iv-panel iv-tile">
            <span className="iv-tile__label">On the shelf</span>
            <span className="iv-num iv-stack">
              {["5", "4", "3", "2"].map((n, i) => (
                <span key={n} style={order(i)}>
                  {n}
                </span>
              ))}
            </span>
          </p>
          <span className="iv-neq">≠</span>
          <p className="iv-panel iv-tile">
            <span className="iv-tile__label">On the website</span>
            <span className="iv-num">8</span>
          </p>
        </div>
        <p className="iv-panel iv-alert iv-late">New online order: 3 pieces</p>
      </div>
    );
  }

  if (kind === "month-end") {
    // The days go by with an empty chart; the numbers only arrive on the 30th.
    return (
      <div className="iv iv-month">
        <div className="iv-panel iv-cal">
          <span className="iv-cal__month">NOV</span>
          <span className="iv-cal__day iv-stack">
            {["1", "8", "15", "30"].map((n, i) => (
              <span key={n} style={order(i)}>
                {n}
              </span>
            ))}
          </span>
        </div>
        <div className="iv-panel iv-chart">
          {["46%", "70%", "54%", "82%", "64%"].map((height, i) => (
            <span key={i} className="iv-bar" style={{ ...order(i), "--h": height } as CSSProperties}>
              <span className="iv-bar__fill" />
            </span>
          ))}
          <span className="iv-q">?</span>
        </div>
      </div>
    );
  }

  if (kind === "posts") {
    // A content calendar: four posts go out, then the busy week starts.
    const days = Array.from({ length: 14 }, (_, i) => i);
    return (
      <div className="iv iv-posts">
        <div className="iv-panel iv-cal-grid">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="iv-dow">
              {d}
            </span>
          ))}
          {days.map((day) => (
            <span key={day} className="iv-day">
              {day < 4 && <span className="iv-post iv-in" style={order(day)} />}
              {day === 5 && <span className="iv-draft">DRAFT</span>}
            </span>
          ))}
        </div>
        <p className="iv-note iv-late">Busy week: nothing posted</p>
      </div>
    );
  }

  // language: questions in Sinhala and Tamil, and a reply that never comes.
  return (
    <div className="iv iv-lang">
      <p className="iv-bubble iv-bubble--light iv-in" lang="si" style={order(0)}>
        මිල කීයද?
        <small>10:20 AM</small>
      </p>
      <p className="iv-bubble iv-bubble--light iv-in" lang="ta" style={order(1)}>
        விலை என்ன?
        <small>10:26 AM</small>
      </p>
      <span className="iv-typing">
        {[0, 1, 2].map((i) => (
          <span key={i} style={order(i)} />
        ))}
      </span>
      <p className="iv-wait iv-late">Waiting for someone who can reply</p>
    </div>
  );
}
