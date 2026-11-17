/**
 * Cookie consent: what the visitor has agreed to, and the one place every
 * tracker asks before it runs.
 *
 * The rule (GDPR / UK GDPR / ePrivacy, and Sri Lanka's PDPA): nothing that
 * is not needed for the site to work may run, or store anything on the
 * device, until the visitor has said yes. So:
 *
 *   analytics  Google Analytics and the site's own visitor statistics
 *              (src/lib/analytics/tracker.ts, the enquiry attribution in
 *              ContactForm).
 *   marketing  the Meta pixel.
 *
 * Nothing is granted by default. A choice is kept for CONSENT_MAX_AGE_DAYS
 * and then asked again; changing CONSENT_VERSION asks everyone again (do
 * that when a new tracker is added). The cookie policy page lists every
 * item here; keep the two in step.
 */

export type ConsentCategory = "analytics" | "marketing";

export type ConsentChoice = Record<ConsentCategory, boolean>;

type StoredConsent = ConsentChoice & { v: number; at: string };

const STORAGE_KEY = "arc_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_DAYS = 365;

/** Fired on window whenever the choice changes. */
export const CONSENT_EVENT = "arc:consent";
/** Fired on window to reopen the settings (the footer's "Cookie settings"). */
export const CONSENT_OPEN_EVENT = "arc:consent-open";

export const GA_MEASUREMENT_ID = "G-0447V2XK5V";
export const META_PIXEL_ID = "1489884839479188";

// Trackers ask on every storage read and write, so the parsed choice is
// cached; it is refreshed when this tab saves a choice and when another
// tab does (the storage event).
let cache: StoredConsent | null | undefined;

function load(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (parsed.v !== CONSENT_VERSION || typeof parsed.at !== "string") return null;
    const ageDays = (Date.now() - Date.parse(parsed.at)) / 86_400_000;
    if (!(ageDays >= 0 && ageDays <= CONSENT_MAX_AGE_DAYS)) return null;
    return {
      v: parsed.v,
      at: parsed.at,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
    };
  } catch {
    return null;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      cache = undefined;
      window.dispatchEvent(new Event(CONSENT_EVENT));
    }
  });
}

/** The visitor's current choice, or null when they have not chosen yet. */
export function readConsent(): ConsentChoice | null {
  if (cache === undefined) cache = load();
  return cache ? { analytics: cache.analytics, marketing: cache.marketing } : null;
}

export function hasConsent(category: ConsentCategory): boolean {
  return readConsent()?.[category] === true;
}

export function saveConsent(choice: ConsentChoice): void {
  const stored: StoredConsent = {
    v: CONSENT_VERSION,
    at: new Date().toISOString(),
    analytics: choice.analytics,
    marketing: choice.marketing,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    /* storage blocked: the choice holds for this page only */
  }
  cache = stored;
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

/**
 * Remove what the trackers stored, for a visitor who has withdrawn consent.
 * Google's and Meta's cookies are set on the registrable domain, so each is
 * cleared there and on the exact host.
 */
export function clearTrackingData(categories: ConsentCategory[]): void {
  if (typeof window === "undefined") return;
  const host = window.location.hostname;
  const domains = ["", host, "." + host.replace(/^www\./, "")];
  const expire = (name: string) => {
    for (const domain of domains) {
      document.cookie =
        `${name}=; Max-Age=0; path=/` + (domain ? `; domain=${domain}` : "");
    }
  };
  const cookieNames = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter(Boolean);

  if (categories.includes("analytics")) {
    cookieNames.filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid").forEach(expire);
    try {
      for (const key of Object.keys(window.localStorage)) {
        if (key.startsWith("arc_an_")) window.localStorage.removeItem(key);
      }
      window.sessionStorage.removeItem("arc_attribution");
    } catch {
      /* storage blocked: nothing was stored */
    }
  }
  if (categories.includes("marketing")) {
    cookieNames.filter((n) => n === "_fbp" || n === "_fbc").forEach(expire);
  }
}
