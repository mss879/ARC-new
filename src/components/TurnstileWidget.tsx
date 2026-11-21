"use client";

import { useEffect, useRef } from "react";

/**
 * Cloudflare Turnstile widget for the contact form (server side:
 * src/lib/turnstile.ts). Nothing is loaded until `load` is true, which the
 * form sets when the visitor starts filling it in, so people who only read
 * the contact page never load Cloudflare's script. The widget stays
 * invisible unless Cloudflare wants the visitor to tick a box.
 *
 * Listed on /cookie-policy as strictly necessary (security), so it does not
 * wait for cookie consent.
 */

type TurnstileApi = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id?: string) => void;
};

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** Empty when the key is not set; then no widget is shown and none is asked for. */
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

const api = () => (window as unknown as { turnstile?: TurnstileApi }).turnstile;

let scriptPromise: Promise<void> | null = null;
function loadScript(): Promise<void> {
  if (api()) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error("Turnstile script failed to load"));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

export default function TurnstileWidget({
  load,
  onToken,
  resetKey,
}: {
  /** Start loading and run the check. */
  load: boolean;
  /** A fresh token, or null when the token expired, failed or was used. */
  onToken: (token: string | null) => void;
  /** Change it after each submission: a token works for one submission only. */
  resetKey: number;
}) {
  const box = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useEffect(() => {
    if (!load || !TURNSTILE_SITE_KEY || widgetId.current) return;
    let cancelled = false;
    loadScript()
      .then(() => {
        const turnstile = api();
        if (cancelled || !box.current || !turnstile || widgetId.current) return;
        widgetId.current = turnstile.render(box.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: "contact_form",
          appearance: "interaction-only",
          theme: "light",
          "refresh-expired": "auto",
          callback: (token: string) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(null),
          "error-callback": () => {
            onTokenRef.current(null);
            return true;
          },
        });
      })
      .catch(() => onTokenRef.current(null));
    return () => {
      cancelled = true;
    };
  }, [load]);

  useEffect(() => {
    const turnstile = api();
    if (!resetKey || !widgetId.current || !turnstile) return;
    onTokenRef.current(null);
    turnstile.reset(widgetId.current);
  }, [resetKey]);

  useEffect(
    () => () => {
      const turnstile = api();
      if (widgetId.current && turnstile) turnstile.remove(widgetId.current);
      widgetId.current = null;
    },
    [],
  );

  if (!TURNSTILE_SITE_KEY) return null;
  return <div ref={box} />;
}
