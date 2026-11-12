import { homeFaq } from "@/content/home-faq";

/**
 * The questions on the home page.
 *
 * A server component built on <details>, so every answer is in the HTML a
 * crawler or a screen reader receives, and it opens without any script. The
 * FAQPage structured data on this page is generated from the same list.
 */
export default function HomeFaq() {
  return (
    <section
      className="relative bg-black py-24 px-6 lg:px-12"
      aria-labelledby="home-faq-heading"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
          (QUESTIONS)
        </p>
        <h2
          id="home-faq-heading"
          className="mt-4 text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95]"
        >
          Before you ask
        </h2>

        <div className="mt-12 divide-y divide-zinc-800 border-y border-zinc-800">
          {homeFaq.map((item, index) => (
            <details key={item.question} className="group py-6" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg md:text-xl font-semibold text-white [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgb(255,73,37)] rounded-sm">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-2xl leading-none text-[rgb(255,73,37)] transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
