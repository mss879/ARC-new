"use client";

import { openConsentSettings } from "@/lib/consent";

/** Opens the cookie banner's settings, for pages that are server components. */
export default function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Change cookie settings
    </button>
  );
}
