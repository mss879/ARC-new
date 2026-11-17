import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

import { guides } from "@/components/GuidesStrip";

/**
 * "Read before you buy": the Sri Lanka guides, for the visitor who is still
 * comparing options. It sits before the FAQ, so the page gives that visitor
 * a useful next step while the last two sections (questions, then "Let's
 * work together") stay about acting. Same guides and descriptions as the
 * blog's GuidesStrip.
 */
export default function GuidesSection() {
  return (
    <section
      id="guides"
      className="render-when-near relative px-4 py-16 md:px-8 lg:px-20 lg:py-24"
      aria-labelledby="guides-heading"
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
              id="guides-heading"
              className="text-[length:min(3rem,100cqw/6.6)] font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-[length:min(3.75rem,100cqw/6.6)] md:text-[length:min(4.5rem,100cqw/6.6)] lg:text-[length:min(5.5rem,100cqw/6.6)]"
            >
              <span className="block whitespace-nowrap">Read before</span>
              <span className="block whitespace-nowrap text-ember-ink">you buy</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl xl:pb-3">
            Comparing options? These guides lay out who does what in Sri Lanka, so you can choose with confidence,
            whoever you choose.
          </p>
        </div>

        <ul className="mt-10 grid list-none gap-4 p-0 md:grid-cols-3 lg:mt-14">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="cream-card [--cut:22px] group flex h-full flex-col p-6 transition-transform duration-300 motion-safe:hover:-translate-y-1 lg:p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ember-ink" aria-hidden="true">
                  <BookOpen className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="mt-8 block text-2xl font-medium leading-tight tracking-[-0.03em] text-ink transition-colors group-hover:text-ember-ink">
                  {guide.label}
                </span>
                <span className="mt-3 block text-base leading-relaxed text-ink-soft">{guide.note}</span>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ember-deep">
                  Read the guide
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
