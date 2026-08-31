"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { initAnalytics, trackPageView } from "@/lib/analytics/tracker";

/**
 * Mounts the first-party analytics engine and reports every client-side
 * route change to it.
 *
 * `usePathname` rather than `useSearchParams` on purpose: reading search
 * params in a client component opts the whole tree into dynamic rendering
 * unless it is wrapped in Suspense, and the tracker reads the query string
 * off `window.location` inside its own effect anyway — where it costs the
 * page nothing.
 *
 * Admin routes are skipped. Our own traffic through /admin is not visitor
 * behaviour, and leaving it in would quietly inflate every engagement
 * number on the dashboard.
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();
  const booted = useRef(false);

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;

    if (!booted.current) {
      booted.current = true;
      initAnalytics(pathname);
      return;
    }
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
