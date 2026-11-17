import type { CSSProperties } from "react";
import { Check } from "lucide-react";

import PauseOffscreen from "./PauseOffscreen";

/**
 * "AI that asks before it acts": the approval-first way ARC builds agents,
 * placed straight after the visitor has tried one, which is when "what if it
 * gets it wrong?" comes to mind. Three cards: how much an agent may do on
 * its own, an approval waiting for a tap, and the log of who did what.
 *
 * A server component; the pictures are CSS loops under "In control" in
 * src/index.css (transform and opacity only, paused off screen, still for
 * reduced motion). The screens are illustrative.
 */

const LEVELS = [
  { name: "Off", says: "The agent stays quiet." },
  { name: "Suggest", says: "It drafts. You send." },
  { name: "Ask first", says: "It acts once you approve." },
  { name: "Auto", says: "It handles routine jobs alone." },
];

// Short lines, so each stays on one row in the narrowest card.
const LOG = [
  ["9:14", "Agent drafted a reply"],
  ["9:15", "You approved it"],
  ["9:15", "Sent on WhatsApp"],
  ["11:02", "Refund held for you"],
];

const order = (index: number) => ({ "--i": index }) as CSSProperties;

export default function InControl() {
  return (
    <section
      id="in-control"
      className="render-when-near relative px-4 py-16 md:px-8 lg:px-20 lg:py-24"
      aria-labelledby="in-control-heading"
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
              id="in-control-heading"
              className="text-[length:min(3rem,100cqw/6.6)] font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-[length:min(3.75rem,100cqw/6.6)] md:text-[length:min(4.5rem,100cqw/6.6)] lg:text-[length:min(5.5rem,100cqw/6.6)]"
            >
              <span className="block whitespace-nowrap">AI that asks</span>
              <span className="block whitespace-nowrap text-ember-ink">before it acts</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl xl:pb-3">
            You decide how much each agent may do on its own, job by job. Everything it does is logged, so you
            always know who approved what.
          </p>
        </div>

        <PauseOffscreen className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3">
          {/* How much it may do */}
          <article className="cream-card [--cut:22px] flex flex-col p-6 lg:p-7">
            <div className="flex h-40 items-center" aria-hidden="true">
              <div className="ic ic-dial">
                <div className="ic-track">
                  <span className="ic-thumb" />
                  {LEVELS.map((level) => (
                    <span key={level.name} className="ic-level">
                      {level.name}
                    </span>
                  ))}
                </div>
                <p className="ic-says ic-stack">
                  {LEVELS.map((level, i) => (
                    <span key={level.name} style={order(i)}>
                      <strong>{level.name}:</strong> {level.says}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">
              You set how much it does
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              From only suggesting replies to handling routine jobs alone. Each agent can sit at its own level.
            </p>
          </article>

          {/* An approval waiting: the one dark card */}
          <article className="ink-card [--cut:22px] flex flex-col p-6 lg:p-7">
            <div className="flex h-40 items-center" aria-hidden="true">
              <div className="ic ic-approve">
                <p className="ic-approve__label">Waiting for you</p>
                <div className="ic-approve__card">
                  <p className="ic-approve__title">Reorder 40 boxes of tiles</p>
                  <p className="ic-approve__meta">Supplier draft · Rs 86,000</p>
                  <div className="ic-approve__actions">
                    <span className="ic-btn ic-btn--ghost">Edit</span>
                    <span className="ic-btn ic-btn--go">
                      Approve
                      <span className="ic-tap" />
                    </span>
                  </div>
                  <p className="ic-approve__done">
                    <Check className="h-3 w-3" strokeWidth={3} /> Approved by you · 9:15 AM
                  </p>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.03em] text-paper-white">
              Nothing big without your OK
            </h3>
            <p className="mt-3 text-base leading-relaxed text-paper-white/70">
              Orders, refunds and anything above a limit you set wait for a tap from you or your manager.
            </p>
          </article>

          {/* The record */}
          <article className="cream-card [--cut:22px] flex flex-col p-6 lg:p-7">
            <div className="flex h-40 items-center" aria-hidden="true">
              <ol className="ic ic-log">
                {LOG.map(([time, what], i) => (
                  <li key={`${time}-${what}`} className="ic-log__row" style={order(i)}>
                    <span className="ic-log__time">{time}</span>
                    <span className="ic-log__what">{what}</span>
                  </li>
                ))}
              </ol>
            </div>
            <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">
              Every step on record
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              A plain log of what each agent did, what it asked, and who said yes.
            </p>
          </article>
        </PauseOffscreen>
      </div>
    </section>
  );
}
