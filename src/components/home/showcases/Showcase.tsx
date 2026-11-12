import type { ReactNode } from "react";
import Link from "next/link";

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
 * Side by side from the `lg` breakpoint, with the demo given the wider column
 * (it is the thing to look at). Below that the demo sits under the words and
 * is capped in width so it does not balloon on a tablet.
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
      className={`grid scroll-mt-28 items-center gap-10 border-t border-white/10 py-16 lg:gap-14 lg:py-24 xl:gap-20 ${
        flip ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"
      }`}
    >
      <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
        <p className="text-xs font-medium uppercase tracking-wider text-[rgb(119,119,119)]">
          ({index}) {label}
        </p>
        <h3 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-4xl xl:text-5xl">
          {title}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 xl:text-lg">{body}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm text-zinc-300 xl:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(255,73,37)]" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
        <Link
          href={link.href}
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[rgb(255,73,37)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[rgb(255,73,37)] transition-colors duration-300 hover:bg-[rgb(255,73,37)] hover:text-black"
        >
          {link.label}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className={`min-w-0 w-full max-w-[680px] lg:max-w-none ${flip ? "lg:order-1" : ""}`}>{children}</div>
    </article>
  );
}
