import { Plus } from "lucide-react";
import { homeFaq } from "@/content/home-faq";
import { PillLink } from "./ui";

/**
 * The questions on the home page.
 *
 * A server component built on <details>, so every answer is in the HTML a
 * crawler or a screen reader receives, and it opens without any script. The
 * FAQPage structured data on this page is generated from the same list.
 *
 * Heading on the left (it stays in view on a wide screen while the list
 * scrolls), one card per question on the right.
 */
export default function HomeFaq() {
  return (
    <section className="render-when-near relative px-4 py-16 md:px-8 lg:px-20 lg:py-24" aria-labelledby="home-faq-heading">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2
            id="home-faq-heading"
            className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl"
          >
            Before <span className="text-ember-ink">you ask</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
            Not answered here? Ask us directly.
          </p>
          <PillLink href="/contact" className="mt-6">
            Ask us a question
          </PillLink>
        </div>

        <div className="space-y-3">
          {homeFaq.map((item, index) => (
            <details
              key={item.question}
              className="cream-card group !rounded-[22px] px-5 transition-colors duration-300 open:[background:#fff] md:px-7"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-[18px] py-4 text-lg font-medium leading-snug tracking-[-0.01em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember md:py-5 md:text-xl [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 bg-white/70 text-ink transition-all duration-300 group-open:rotate-45 group-open:border-ember group-open:bg-ember"
                >
                  <Plus className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </summary>
              <p className="max-w-3xl pb-6 text-base leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
