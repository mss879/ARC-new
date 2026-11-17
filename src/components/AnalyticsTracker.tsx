"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { initAnalytics, trackPageView } from "@/lib/analytics/tracker";
import { CONSENT_EVENT, hasConsent } from "@/lib/consent";

/**
 * Mounts the first-party analytics engine and reports every client-side
 * route change to it — once the visitor has agreed to analytics cookies.
 * Until then nothing starts; if they agree part-way through a visit, the
 * engine starts on the page they are on (see src/lib/consent.ts).
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
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(hasConsent("analytics"));
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!allowed || !pathname || pathname.startsWith("/admin")) return;

    if (!booted.current) {
      booted.current = true;
      initAnalytics(pathname);
      return;
    }
    trackPageView(pathname);
  }, [pathname, allowed]);

  return null;
}
