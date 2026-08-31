'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * SUPERSEDED — not mounted anywhere, and must not be mounted again.
 *
 * `AnalyticsTracker` replaced this. Both write `page_visits` (the collector
 * still does, so /admin keeps working), so running the two together records
 * every page view twice and produces a second, deviceless "session" beside
 * every real one. Kept only as a reference for the old payload shape.
 *
 * Invisible component that tracks page visits.
 * Generates a persistent visitorId via localStorage.
 * Sends POST /api/track on every route change.
 * Skips /admin routes.
 */
export default function PageTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Skip admin routes
        if (pathname?.startsWith('/admin')) return;

        const track = async () => {
            try {
                // Get or create persistent visitor ID
                let visitorId = localStorage.getItem('arc_visitor_id');
                if (!visitorId) {
                    visitorId = `v_${crypto.randomUUID()}`;
                    localStorage.setItem('arc_visitor_id', visitorId);
                }

                await fetch('/api/track', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        visitorId,
                        pagePath: pathname,
                        referrer: document.referrer || null,
                    }),
                });
            } catch {
                // Fire-and-forget — silently ignore errors
            }
        };

        track();
    }, [pathname]);

    return null;
}
