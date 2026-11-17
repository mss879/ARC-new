import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { PillLink } from "../ui";
import PauseOffscreen from "../PauseOffscreen";

type ShowcaseProps = {
  /** Anchor id, so the section can be linked to. */
  id: string;
  index: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  link: { href: string; label: string };
  /** Put the demo on the left on wide screens. */
  flip?: boolean;
  children: ReactNode;
};

/**
 * One system on the home page: what it is, in words, beside a live demo.
 *
 * A server component. The words are plain HTML that needs no script; only the
 * demo passed in as children is interactive.
 *
 * Each system is one frosted card. Side by side from the `lg` breakpoint, with
 * the demo given the wider column (it is the thing to look at). Below that the
 * demo sits under the words and is capped in width so it does not balloon on
 * a tablet.
 */
export default function Showcase({
  id,
  index,
  label,
  title,
  body,
  points,
  link,
  flip = false,
  children,
}: ShowcaseProps) {
  return (
    <article
      id={id}
      className={`cream-card grid scroll-mt-28 items-center gap-8 p-4 md:p-8 lg:gap-12 lg:p-10 xl:gap-16 xl:p-12 ${
        flip ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"
      }`}
    >
      <div className={`min-w-0 px-1 pt-2 md:px-0 md:pt-0 ${flip ? "lg:order-2" : ""}`}>
        <p className="cream-pill">
          <span className="tabular-nums text-ink">{index}</span>
          {label}
        </p>
        <h3 className="mt-5 text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-ink md:text-4xl xl:text-5xl">
          {title}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft xl:text-lg">{body}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm text-ink xl:text-base">
              <span
                className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ember text-ink"
                aria-hidden="true"
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <PillLink href={link.href} className="mt-8">
          {link.label}
        </PillLink>
      </div>

      {/* The demo sits on a slightly darker stage, so the white screen lifts
          off the card. */}
      <div className={`relative min-w-0 w-full ${flip ? "lg:order-1" : ""}`}>
        <div className="cut-card [--cut:22px] relative overflow-hidden bg-paper-deep/60 p-3 md:p-6 lg:p-7">
          <PauseOffscreen className="relative mx-auto w-full max-w-[680px] lg:max-w-none">{children}</PauseOffscreen>
        </div>
      </div>
    </article>
  );
}
