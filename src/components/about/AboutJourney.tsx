"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Flag, FlaskConical, Globe, LayoutDashboard, MessagesSquare, Rocket, Trophy, type LucideIcon } from "lucide-react";
import { journey, type JourneyIcon } from "@/content/about";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ICONS: Record<JourneyIcon, LucideIcon> = {
  flag: Flag,
  rocket: Rocket,
  chat: MessagesSquare,
  globe: Globe,
  systems: LayoutDashboard,
  lab: FlaskConical,
  trophy: Trophy,
};

/* ── Geometry of the wide track (wide screens) ──────────────────────────────
   The cards sit in a row far wider than the window. A line runs above them,
   dipping to a node over each card. All of it is in pixels, so the drawing
   and the cards line up exactly; the same numbers are used by the styles in
   src/index.css ("About: our journey"). */
const PAD = 80; // space before the first card and after the last
const STEP = 460; // distance from one card to the next
const CARD = 380; // card width
const NODE_INSET = 40; // a card's node sits this far in from its left edge
const NODE_LOW = 96; // the line alternates between two heights
const NODE_HIGH = 44;
const CARDS_TOP = 170; // where the row of cards starts, below the line

const nodeX = (index: number) => PAD + NODE_INSET + index * STEP;
const nodeY = (index: number) => (index % 2 === 0 ? NODE_LOW : NODE_HIGH);
const TRACK_WIDTH = PAD * 2 + (journey.length - 1) * STEP + CARD;

// One smooth curve through every node, level where it meets each one.
const LINE = journey.reduce((path, _, index) => {
  if (index === 0) return `M0 ${nodeY(0)} L${nodeX(0)} ${nodeY(0)}`;
  const half = STEP / 2;
  return `${path} C${nodeX(index - 1) + half} ${nodeY(index - 1)}, ${nodeX(index) - half} ${nodeY(index)}, ${nodeX(index)} ${nodeY(index)}`;
}, "") + ` L${TRACK_WIDTH} ${nodeY(journey.length - 1)}`;

// Everything after the last thing that has happened is drawn dashed.
const firstAhead = journey.findIndex((item) => item.ahead);
const AHEAD_FROM = firstAhead > 0 ? nodeX(firstAhead - 1) : TRACK_WIDTH;

/**
 * "Our journey" on the About page.
 *
 * On a wide screen it is a short film you scroll through: the section holds
 * still, the row of cards slides sideways, and an orange line draws itself
 * along the track with a marker travelling from one card's node to the next.
 * The card it has reached is lit, the ones behind it are dimmed, the ones to
 * come are faint, and a large year counter turns over. Scrolling settles on
 * each card in turn.
 *
 * On a phone or tablet, without scripts, or for anyone who has asked for
 * reduced motion, it is a plain list down the page with a line that fills as
 * you read (no line animation at all for reduced motion).
 *
 * Entries marked `ahead` in the content are goals: they are labelled "Ahead"
 * and the line to them is dashed, so they cannot be read as history.
 */
export default function AboutJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGGElement>(null);

  // On leaving the page, forget the scroll position ScrollTrigger recorded
  // here, so a refresh on the next page cannot scroll back to it.
  useEffect(() => () => ScrollTrigger.clearScrollMemory(), []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const fill = fillRef.current;
      const marker = markerRef.current;
      if (!section || !track || !fill || !marker) return;

      const media = gsap.matchMedia();

      // ── Wide screens: the scroll-through film ─────────────────────────────
      media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        section.dataset.cinematic = "true";

        // The browser's own smooth scrolling fights the settling on each card.
        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";

        const items = gsap.utils.toArray<HTMLElement>(".journey__item", section);
        const reel = section.querySelector<HTMLElement>(".journey__reel");
        const length = fill.getTotalLength();

        // How far along the line each node is. The line only ever moves right,
        // so the spot above a given x can be found by halving.
        const fractionAt = (x: number) => {
          let low = 0;
          let high = length;
          for (let step = 0; step < 24; step++) {
            const middle = (low + high) / 2;
            if (fill.getPointAtLength(middle).x < x) low = middle;
            else high = middle;
          }
          return low / length;
        };
        const fractions = journey.map((_, index) => fractionAt(nodeX(index)));
        const first = fractions[0];
        const span = fractions[fractions.length - 1] - first;
        // Scroll progress (0 to 1) at which the marker is on each node.
        const stops = fractions.map((value) => (value - first) / span);

        let active = -1;
        const render = (progress: number) => {
          const along = first + progress * span;
          fill.style.strokeDashoffset = String(1 - along);
          const point = fill.getPointAtLength(along * length);
          marker.setAttribute("transform", `translate(${point.x} ${point.y})`);

          let reached = 0;
          for (let index = 0; index < stops.length; index++) {
            if (progress >= stops[index] - 0.035) reached = index;
          }
          if (reached === active) return;
          active = reached;
          items.forEach((item, index) => {
            item.dataset.state = index < reached ? "past" : index === reached ? "active" : "next";
          });
          if (reel) reel.style.transform = `translateY(${-reached}em)`;
        };

        const distance = () => Math.max(0, TRACK_WIDTH - window.innerWidth);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // A little more scrolling than sideways travel, so it does not rush.
            end: () => `+=${distance() * 1.5}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap: { snapTo: stops, duration: { min: 0.25, max: 0.6 }, delay: 0.06, ease: "power2.inOut" },
            onUpdate: (self) => render(self.progress),
            onRefresh: (self) => render(self.progress),
          },
        });
        render(0);

        return () => {
          delete section.dataset.cinematic;
          root.style.scrollBehavior = previousScrollBehavior;
          items.forEach((item) => delete item.dataset.state);
          if (reel) reel.style.transform = "";
        };
      });

      // ── Phones and tablets: a line that fills as the list scrolls ─────────
      media.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".journey__rail--fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".journey__list", start: "top 70%", end: "bottom 60%", scrub: 0.4 },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="journey px-4 py-16 md:px-8 lg:px-20 lg:py-24" aria-labelledby="journey-heading">
      <div className="journey__stage mx-auto max-w-[1400px]">
        <div className="journey__head">
          <h2
            id="journey-heading"
            className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl"
          >
            Our <span className="text-ember-ink">journey</span>
          </h2>
          {/* The large year counter (wide screens only). Decoration: each card
              carries its own year. */}
          <div className="journey__year" aria-hidden="true">
            <div className="journey__reel">
              {journey.map((item) => (
                <span key={item.year}>{item.year}</span>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="journey__track"
          style={{ "--track-w": `${TRACK_WIDTH}px`, "--cards-top": `${CARDS_TOP}px`, "--card-w": `${CARD}px` } as CSSProperties}
        >
          {/* The line, its orange fill and the travelling marker (wide screens) */}
          <svg
            className="journey__line"
            width={TRACK_WIDTH}
            height={CARDS_TOP}
            viewBox={`0 0 ${TRACK_WIDTH} ${CARDS_TOP}`}
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="journey-so-far">
                <rect x="0" y="0" width={AHEAD_FROM} height={CARDS_TOP} />
              </clipPath>
              <clipPath id="journey-ahead">
                <rect x={AHEAD_FROM} y="0" width={TRACK_WIDTH - AHEAD_FROM} height={CARDS_TOP} />
              </clipPath>
            </defs>
            <path d={LINE} stroke="rgba(27,26,23,0.16)" strokeWidth="1.5" clipPath="url(#journey-so-far)" />
            <path d={LINE} stroke="rgba(27,26,23,0.3)" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" clipPath="url(#journey-ahead)" />
            <path ref={fillRef} d={LINE} stroke="#FF4925" strokeWidth="2.5" strokeLinecap="round" pathLength={1} strokeDasharray="1" strokeDashoffset="1" />
            <g ref={markerRef} transform={`translate(${nodeX(0)} ${nodeY(0)})`}>
              <circle r="11" fill="#E8E6E0" />
              <circle r="6.5" fill="#FF4925" />
            </g>
          </svg>

          {/* The upright line beside the list (phones and tablets) */}
          <span className="journey__rail" aria-hidden="true" />
          <span className="journey__rail journey__rail--fill" aria-hidden="true" />

          <ol className="journey__list">
            {journey.map((item, index) => {
              const Icon = ICONS[item.icon];
              return (
                <li
                  key={item.year}
                  className={`journey__item ${item.ahead ? "journey__item--ahead" : ""}`}
                  style={{ "--x": `${PAD + index * STEP}px`, "--node-y": `${nodeY(index)}px` } as CSSProperties}
                >
                  <span className="journey__node" aria-hidden="true">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>

                  <div className="journey__card cut-card [--cut:20px] relative">
                    <p className="flex items-center gap-3 text-sm font-semibold text-ember-deep">
                      {item.year}
                      {item.ahead && (
                        <span className="rounded-full border border-ink/15 px-2.5 py-0.5 text-xs font-medium text-ink-mute">
                          Ahead
                        </span>
                      )}
                    </p>
                    <h3 className="mt-2 text-2xl font-medium leading-tight tracking-[-0.03em] text-ink lg:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
