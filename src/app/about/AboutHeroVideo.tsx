"use client";

import { useRef, useEffect } from "react";
import { useOffscreenPause } from "@/components/home/useOffscreenPause";

/**
 * Client-side video component for the About hero section.
 * Extracted from the Server Component to prevent hydration mismatch —
 * browsers (and extensions) modify <video> attributes (autoplay state,
 * custom data attributes) after the initial server render.
 */
export default function AboutHeroVideo() {
  // The video stops decoding once the hero has scrolled out of view and picks
  // up again when it comes back.
  const pausedOffscreen = useRef(false);
  const videoRef = useOffscreenPause<HTMLVideoElement>((visible) => {
    const video = videoRef.current;
    if (!video) return;
    if (!visible && !video.paused) {
      pausedOffscreen.current = true;
      video.pause();
    } else if (visible && pausedOffscreen.current) {
      pausedOffscreen.current = false;
      video.play().catch(() => { });
    }
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set attributes programmatically to avoid SSR/client mismatch
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play().catch(() => {
      // Autoplay blocked — silent fallback, video stays paused
    });
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 1 }}
      suppressHydrationWarning
    >
      <source src="/about-hero.mp4" type="video/mp4" />
    </video>
  );
}
