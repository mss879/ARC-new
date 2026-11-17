"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutStatement } from "@/content/about";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The large statement on the About page. Its words start faint and come up to
 * full strength one after another as the paragraph scrolls through the window.
 *
 * The server sends the paragraph at full strength, so it reads normally before
 * any script runs and for anyone who has asked for reduced motion (no
 * animation is set up for them). Only opacity is animated.
 */
export default function AboutStatement() {
  const ref = useRef<HTMLParagraphElement>(null);

  // On leaving the page, forget the scroll position ScrollTrigger recorded
  // here, so a refresh on the next page cannot scroll back to it.
  useEffect(() => () => ScrollTrigger.clearScrollMemory(), []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          gsap.utils.toArray<HTMLElement>("[data-word]", ref.current),
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.06,
            scrollTrigger: { trigger: ref.current, start: "top 82%", end: "bottom 58%", scrub: 0.4 },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <section className="px-4 py-16 md:px-8 lg:px-20 lg:py-28" aria-label="Who we are">
      <p
        ref={ref}
        className="mx-auto max-w-[1180px] text-3xl font-medium leading-[1.14] tracking-[-0.035em] text-ink sm:text-4xl md:text-5xl lg:text-[3.5rem]"
      >
        {aboutStatement.map((part, partIndex) =>
          part.text.split(" ").map((word, wordIndex) => (
            <span key={`${partIndex}-${wordIndex}`}>
              <span data-word className={part.accent ? "text-ember-ink" : undefined}>
                {word}
              </span>{" "}
            </span>
          )),
        )}
      </p>
    </section>
  );
}
