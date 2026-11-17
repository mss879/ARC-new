"use client";

import { useEffect, useRef } from "react";

/**
 * Marks an element with data-offscreen="true" whenever it is outside the
 * viewport (with a small margin, so a loop is already running as it scrolls
 * in). A rule in src/index.css pauses every CSS animation inside a marked
 * element, so marquees, spinners and the small demo loops cost nothing while
 * nobody can see them. `onChange` is for anything CSS cannot pause, such as a
 * video.
 *
 * Nothing is marked until the observer first reports, and an element that is
 * on screen is never marked, so what a visitor sees is unchanged.
 */
export function useOffscreenPause<T extends HTMLElement>(onChange?: (visible: boolean) => void) {
  const ref = useRef<T>(null);
  const callback = useRef(onChange);
  callback.current = onChange;

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.dataset.offscreen = entry.isIntersecting ? "false" : "true";
        callback.current?.(entry.isIntersecting);
      },
      { rootMargin: "160px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
