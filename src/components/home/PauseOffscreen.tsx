"use client";

import type { ReactNode } from "react";
import { useOffscreenPause } from "./useOffscreenPause";

/**
 * A plain wrapper that pauses the CSS animations inside it while it is off
 * screen. For server components, which cannot use the hook themselves.
 */
export default function PauseOffscreen({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useOffscreenPause<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
