"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Trigger positions are measured when a timeline is created. The home page
 * keeps changing height after that (the preloader releases the scroll lock,
 * images and lazy sections arrive), so the measurements are refreshed whenever
 * the document's height settles on a new value. Set up once per page load.
 */
let refreshWatcherStarted = false;

function startRefreshWatcher() {
  if (refreshWatcherStarted || typeof window === "undefined") return;
  refreshWatcherStarted = true;

  let timer: number | undefined;
  const refresh = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => ScrollTrigger.refresh(), 200);
  };

  window.addEventListener("load", refresh, { once: true });
  if ("ResizeObserver" in window) {
    new ResizeObserver(refresh).observe(document.body);
  }
}

export type DemoSelector = (selector: string) => Element[];

/**
 * A product demo that plays from the start each time it scrolls into view,
 * then repeats after a pause for as long as it stays on screen.
 *
 * The component renders its finished state in the HTML, so the screen reads
 * correctly before any script runs and for anyone who has asked for reduced
 * motion (no timeline is built for them at all). When motion is allowed, the
 * build callback describes the demo as a sequence: `from()` tweens hide each
 * element until its moment, the timeline repeats, and ScrollTrigger pauses it
 * whenever the container leaves the viewport.
 *
 * Returns the ref to put on the demo's root element.
 */
export function useDemoTimeline<T extends HTMLElement>(
  build: (timeline: gsap.core.Timeline, select: DemoSelector) => void,
  options: { repeatDelay?: number } = {},
) {
  const scope = useRef<T>(null);

  useGSAP(
    () => {
      startRefreshWatcher();

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          repeat: -1,
          // The finished screen is held for a while before the demo plays
          // again, so most of the time a visitor sees a complete screen.
          repeatDelay: options.repeatDelay ?? 4.5,
          defaults: { ease: "power3.out", duration: 0.5 },
          scrollTrigger: {
            trigger: scope.current,
            start: "top 78%",
            end: "bottom 12%",
            // Always from the beginning when the demo scrolls into view (from
            // above or below), never resumed halfway through its story.
            toggleActions: "restart pause restart pause",
          },
        });
        build(timeline, gsap.utils.selector(scope));
      });
    },
    { scope },
  );

  return scope;
}

/**
 * Count a number up inside an element as part of a demo timeline.
 *
 * The element's own text is the finished value (what the server rendered).
 * The call at the start of the timeline resets it to `from` on every loop,
 * which a tween alone does not do when a timeline rewinds to repeat.
 */
export function countTo(
  timeline: gsap.core.Timeline,
  element: Element | undefined,
  { from, to, format }: { from: number; to: number; format: (value: number) => string },
  position: gsap.Position,
  duration = 0.9,
) {
  if (!element) return;
  const state = { value: from };
  const write = () => {
    element.textContent = format(state.value);
  };
  timeline.call(
    () => {
      state.value = from;
      write();
    },
    undefined,
    0,
  );
  timeline.fromTo(
    state,
    { value: from },
    { value: to, duration, ease: "power1.out", onUpdate: write },
    position,
  );
}

/** Type a line of text into an element, one character at a time. */
export function typeText(
  timeline: gsap.core.Timeline,
  element: Element | undefined,
  text: string,
  position: gsap.Position,
  secondsPerCharacter = 0.035,
) {
  if (!element) return;
  const state = { length: 0 };
  const write = () => {
    element.textContent = text.slice(0, Math.round(state.length));
  };
  timeline.call(
    () => {
      state.length = 0;
      write();
    },
    undefined,
    0,
  );
  timeline.fromTo(
    state,
    { length: 0 },
    { length: text.length, duration: text.length * secondsPerCharacter, ease: "none", onUpdate: write },
    position,
  );
}
