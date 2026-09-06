"use client";

/**
 * First-party analytics engine for www.arcai.agency.
 *
 * Google Analytics answers "how many". This answers "who, from
 * where, in what order, and did it turn into anything" — the
 * questions you can only answer with the raw event stream, which
 * GA4 will not hand back.
 *
 * Design rules it holds to:
 *
 *   • It never throws into the page. Every entry point is wrapped;
 *     a browser that blocks storage, a beacon that fails, a bad
 *     selector — all degrade to doing nothing rather than to a
 *     console full of red on a marketing site.
 *
 *   • It batches. Events queue and flush every 10 seconds, at 20
 *     events, or on page hide via sendBeacon, so a visitor reading
 *     six pages costs a handful of requests rather than sixty.
 *
 *   • Counters live in localStorage, not in memory. A hard
 *     navigation (the blog, an external link back) must not reset
 *     the session's page count to one, or every visit looks like
 *     a bounce.
 *
 *   • Engaged time is not wall-clock time. A tab left open for an
 *     hour behind another window is not an hour of attention, so
 *     the clock only runs while the page is visible AND the
 *     visitor has done something in the last 30 seconds.
 *
 *   • A conversion is a confirmed outcome, never an inference. The
 *     tracker's own listeners record form starts and submit ATTEMPTS;
 *     form_submit and the conversion are reported by the form that
 *     saw the server accept the send, carrying one lead id that the
 *     CRM was handed too. See `trackFormSubmitted`.
 */

import type {
  AnalyticsChannel,
  AnalyticsEventKind,
  CollectPayload,
  DeviceType,
  SessionContext,
  SessionProgress,
  TrackedEvent,
} from "./types";

/** The label stored on every row. Must match WEBSITE_ANALYTICS_SITE in the CRM. */
const SITE = "arcai.agency";
/**
 * The registrable domain the site is served from.
 *
 * The canonical host is www.arcai.agency and Netlify 301s the apex to it, but
 * a hardcoded `https://arcai.agency/...` link, a stale bookmark or a referrer
 * captured before the redirect can all still carry the bare domain. Matching
 * on the registrable domain rather than on `location.hostname` means those
 * count as internal, which is what they are.
 */
const PRIMARY_DOMAIN = "arcai.agency";
const ENDPOINT = "/api/analytics/collect";

const FLUSH_INTERVAL_MS = 10_000;
const FLUSH_AT_QUEUE = 20;
/** A gap this long ends the session; the next event starts a new one. */
const SESSION_IDLE_MS = 30 * 60 * 1000;
/** No interaction for this long and the engagement clock pauses. */
const ENGAGEMENT_IDLE_MS = 30 * 1000;
const RAGE_CLICK_COUNT = 3;
const RAGE_CLICK_WINDOW_MS = 1000;

const K = {
  visitor: "arc_an_vid",
  session: "arc_an_sid",
  /** Last activity — what the 30-minute idle timeout is measured against. */
  seenAt: "arc_an_seen",
  /** When the session began. Distinct from seenAt: duration is measured
   *  from here, and confusing the two makes every visit that survives a
   *  hard navigation report a near-zero length. */
  startedAt: "arc_an_start",
  firstTouch: "arc_an_ft",
  context: "arc_an_ctx",
  progress: "arc_an_prog",
  seq: "arc_an_seq",
} as const;

// ── storage that cannot throw ───────────────────────────────────────────────
// Safari in private mode and a hard cookie block both throw on write. An
// analytics script is never the right thing to break a page over.

function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — the session degrades to in-memory only */
  }
}

function readJson<T>(key: string, fallback: T): T {
  const raw = read(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function uid(prefix: string): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return `${prefix}_${crypto.randomUUID()}`;
    }
  } catch {
    /* fall through to the math version */
  }
  return `${prefix}_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

// ── attribution ─────────────────────────────────────────────────────────────

const SEARCH_ENGINES =
  /(google|bing|yahoo|duckduckgo|yandex|baidu|ecosia|brave|qwant|startpage|naver|seznam)\./i;
const SOCIAL =
  /(facebook|instagram|linkedin|twitter|x\.com|t\.co|tiktok|pinterest|reddit|youtube|threads|snapchat|whatsapp|telegram|quora|medium)\./i;
const AI_ASSISTANTS =
  /(chatgpt|chat\.openai|perplexity|claude\.ai|gemini\.google|copilot\.microsoft|bard\.google|you\.com|phind)\./i;
const EMAIL_CLIENTS = /(mail\.google|outlook|mail\.yahoo|superhuman|hey\.com)\./i;

/**
 * Which bucket this arrival belongs in.
 *
 * Explicit tagging wins over inference — a `utm_medium=cpc` link is
 * paid even if it happens to carry a Google referrer, because the
 * marketer said so and the referrer is only a guess.
 */
function classifyChannel(
  referrer: string | null,
  params: URLSearchParams,
): AnalyticsChannel {
  const medium = (params.get("utm_medium") || "").toLowerCase();
  const source = (params.get("utm_source") || "").toLowerCase();

  if (params.get("gclid") || params.get("msclkid")) return "paid_search";
  if (params.get("fbclid")) return "paid_social";

  if (medium) {
    if (/cpc|ppc|paid|sem|adwords/.test(medium)) {
      return SOCIAL.test(`${source}.`) || /social|facebook|instagram|meta|tiktok/.test(source)
        ? "paid_social"
        : "paid_search";
    }
    if (/email|newsletter|mail/.test(medium)) return "email";
    if (/social/.test(medium)) return "social";
    if (/affiliate|partner/.test(medium)) return "affiliate";
    if (/organic/.test(medium)) return "organic";
    if (/referral/.test(medium)) return "referral";
  }
  if (source && !medium) {
    if (SOCIAL.test(`${source}.`)) return "social";
    if (SEARCH_ENGINES.test(`${source}.`)) return "organic";
  }

  if (!referrer) return "direct";

  let host = "";
  try {
    host = new URL(referrer).hostname;
  } catch {
    return "unknown";
  }
  if (!host) return "direct";
  if (isInternalHost(host)) return "internal";
  if (AI_ASSISTANTS.test(`${host}.`)) return "ai_assistant";
  if (SEARCH_ENGINES.test(`${host}.`)) return "organic";
  if (SOCIAL.test(`${host}.`)) return "social";
  if (EMAIL_CLIENTS.test(`${host}.`)) return "email";
  return "referral";
}

function hostOf(url: string | null): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname || null;
  } catch {
    return null;
  }
}

/**
 * Is this host our own site?
 *
 * Covers the apex, every subdomain, and whatever host the page is actually
 * being served from. Getting this wrong is quietly expensive in both
 * directions: an internal link filed as an outbound click inflates the
 * "people leaving the site" number, and an internal referral filed as a
 * third-party referrer invents traffic from a source that does not exist.
 */
function isInternalHost(host: string | null): boolean {
  if (!host) return false;
  const h = host.toLowerCase();
  if (h === window.location.hostname.toLowerCase()) return true;
  return h === PRIMARY_DOMAIN || h.endsWith(`.${PRIMARY_DOMAIN}`);
}

// ── environment ─────────────────────────────────────────────────────────────

/**
 * Browser, OS and form factor from the UA string.
 *
 * Order matters throughout: Edge's UA contains "Chrome", Chrome's
 * contains "Safari", and iPadOS claims to be a Mac. Each test below
 * therefore runs before the one it would otherwise be swallowed by.
 */
function detectEnvironment(): Pick<
  SessionContext,
  | "device_type"
  | "browser"
  | "browser_version"
  | "os"
  | "os_version"
  | "screen_w"
  | "screen_h"
  | "viewport_w"
  | "viewport_h"
  | "device_pixel_ratio"
  | "language"
  | "timezone"
  | "connection_type"
> {
  const ua = navigator.userAgent || "";

  let browser: string | null = null;
  let browserVersion: string | null = null;
  const browserTests: [string, RegExp][] = [
    ["Edge", /Edg(?:e|A|iOS)?\/([\d.]+)/],
    ["Opera", /OPR\/([\d.]+)/],
    ["Samsung Internet", /SamsungBrowser\/([\d.]+)/],
    ["Firefox", /(?:Firefox|FxiOS)\/([\d.]+)/],
    // In-app WebViews, before the engine tests below would swallow them.
    // Social traffic largely arrives inside one of these, and on iOS they
    // match none of the ordinary patterns — so a real visitor from an
    // Instagram link used to be filed as browser=(none), which then reads
    // as broken tracking rather than as the segment it is.
    ["Instagram", /Instagram\s([\d.]+)/],
    ["Facebook", /FBAV\/([\d.]+)/],
    ["LinkedIn", /LinkedInApp\/?([\d.]*)/],
    ["TikTok", /(?:BytedanceWebview|musical_ly|Trill)\/?([\d.]*)/],
    ["Chrome", /(?:Chrome|CriOS)\/([\d.]+)/],
    ["Safari", /Version\/([\d.]+).*Safari/],
  ];
  for (const [name, re] of browserTests) {
    const m = ua.match(re);
    if (m) {
      browser = name;
      browserVersion = m[1] ?? null;
      break;
    }
  }

  let os: string | null = null;
  let osVersion: string | null = null;
  const osTests: [string, RegExp][] = [
    ["Windows", /Windows NT ([\d.]+)/],
    ["Android", /Android ([\d.]+)/],
    ["iOS", /OS (\d+[._]\d+)/],
    ["macOS", /Mac OS X (\d+[._]\d+)/],
    ["Linux", /(Linux)/],
  ];
  for (const [name, re] of osTests) {
    const m = ua.match(re);
    if (m) {
      os = name;
      osVersion = (m[1] ?? "").replace(/_/g, ".") || null;
      break;
    }
  }

  // An iPad on iPadOS 13+ sends a desktop Mac UA, so the only reliable
  // tell is a touch-capable "Mac".
  const isTabletUA = /iPad|Tablet|PlayBook|Silk/i.test(ua);
  const isMacWithTouch = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  const isMobileUA = /Mobi|Android|iPhone|iPod|Windows Phone/i.test(ua);
  let device_type: DeviceType = "desktop";
  if (isTabletUA || isMacWithTouch) device_type = "tablet";
  else if (isMobileUA) device_type = "mobile";
  if (/bot|crawl|spider|slurp|headless|lighthouse|preview|scrape/i.test(ua)) {
    device_type = "bot";
  }

  const connection = (
    navigator as Navigator & { connection?: { effectiveType?: string } }
  ).connection;

  let timezone: string | null = null;
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null;
  } catch {
    timezone = null;
  }

  return {
    device_type,
    browser,
    browser_version: browserVersion,
    os,
    os_version: osVersion,
    screen_w: window.screen?.width ?? null,
    screen_h: window.screen?.height ?? null,
    viewport_w: window.innerWidth ?? null,
    viewport_h: window.innerHeight ?? null,
    device_pixel_ratio: window.devicePixelRatio ?? null,
    language: navigator.language || null,
    timezone,
    connection_type: connection?.effectiveType ?? null,
  };
}

// ── session identity ────────────────────────────────────────────────────────

function ensureVisitorId(): string {
  let id = read(K.visitor);
  if (!id) {
    id = uid("v");
    write(K.visitor, id);
  }
  return id;
}

/** True when the previous session has gone stale and a new one must start. */
function sessionExpired(): boolean {
  const seen = Number(read(K.seenAt) || 0);
  if (!seen) return true;
  return Date.now() - seen > SESSION_IDLE_MS;
}

// ── module state ────────────────────────────────────────────────────────────

let context: SessionContext | null = null;
let queue: TrackedEvent[] = [];
let flushTimer: ReturnType<typeof setInterval> | null = null;
let started = false;

/** Wall-clock and engaged-time bookkeeping for the current page. */
let sessionStartedAt = Date.now();
let pageEnteredAt = Date.now();
let engagedMs = 0;
let lastActivityAt = Date.now();
let engagementTicker: ReturnType<typeof setInterval> | null = null;
let currentPath = "/";
let pageMaxScroll = 0;

// ── preview and test traffic ────────────────────────────────────────────────

/** Hosts the production site answers on. Anything else is a preview or a dev box. */
const PRODUCTION_HOSTS = new Set(["www.arcai.agency", "arcai.agency"]);

/**
 * The label stored on every row.
 *
 * A Netlify deploy preview, a branch deploy and `next dev` all run this
 * exact code against the same collector, and used to file their rows under
 * the production label — a developer clicking through the contact form on
 * localhost was a conversion in the CRM. Anything not served from the
 * production host is labelled `arcai.agency:preview`; the CRM filters on
 * the bare label and never sees it.
 */
function siteLabel(): string {
  try {
    if (PRODUCTION_HOSTS.has(window.location.hostname.toLowerCase())) return SITE;
  } catch {
    /* no window — fall through */
  }
  return `${SITE}:preview`;
}

/**
 * Test mode: `?arc_test=1` on any page marks every event this visit sends
 * with `test: true` — the CRM's lead ledger files those as tests, not
 * leads — and mirrors the event stream to `window.__arcAnalyticsLog`, so a
 * form or a WhatsApp route can be checked end to end on the live site
 * without moving a single number. `?arc_test=0` turns it off again.
 */
const TEST_PARAM = "arc_test";
const TEST_KEY = "arc_an_test";
let testMode = false;

function detectTestMode(params: URLSearchParams): boolean {
  try {
    const flag = params.get(TEST_PARAM);
    if (flag === "1") window.sessionStorage.setItem(TEST_KEY, "1");
    else if (flag === "0") window.sessionStorage.removeItem(TEST_KEY);
    return window.sessionStorage.getItem(TEST_KEY) === "1";
  } catch {
    return false;
  }
}

declare global {
  interface Window {
    __arcAnalyticsLog?: TrackedEvent[];
  }
}

function debugLog(event: TrackedEvent): void {
  if (!testMode) return;
  try {
    const log = (window.__arcAnalyticsLog ??= []);
    log.push(event);
    if (log.length > 500) log.shift();
  } catch {
    /* nothing to log to */
  }
}

function nextSeq(): number {
  const n = Number(read(K.seq) || 0) + 1;
  write(K.seq, String(n));
  return n;
}

function emptyProgress(path: string): SessionProgress {
  return {
    exit_path: path,
    page_count: 0,
    duration_seconds: 0,
    engaged_seconds: 0,
    max_scroll_pct: 0,
    forms_started: 0,
    forms_abandoned: 0,
    outbound_clicks: 0,
    rage_clicks: 0,
    chat_engaged: false,
    chat_message_count: 0,
    converted: false,
    conversion_kind: null,
    identified_email: null,
  };
}

function progress(): SessionProgress {
  return readJson<SessionProgress>(K.progress, emptyProgress(currentPath));
}

function saveProgress(patch: Partial<SessionProgress>): SessionProgress {
  const next = { ...progress(), ...patch };
  write(K.progress, JSON.stringify(next));
  return next;
}

function bump(key: keyof SessionProgress, by = 1): void {
  const current = progress();
  const value = typeof current[key] === "number" ? (current[key] as number) : 0;
  saveProgress({ [key]: value + by } as Partial<SessionProgress>);
}

// ── the queue ───────────────────────────────────────────────────────────────

/**
 * Ship whatever is queued.
 *
 * `useBeacon` is the unload path: fetch is cancelled when the document
 * goes away, sendBeacon is not, and losing the session_end event would
 * mean losing the exit page and the real duration on every visit.
 */
function flush(useBeacon = false): void {
  if (!context) return;
  if (!queue.length && !useBeacon) return;

  const events = queue;
  queue = [];

  const payload: CollectPayload = {
    session: context,
    progress: {
      ...progress(),
      duration_seconds: Math.round((Date.now() - sessionStartedAt) / 1000),
      engaged_seconds: Math.round(engagedMs / 1000),
    },
    events,
  };
  const body = JSON.stringify(payload);

  try {
    if (useBeacon && navigator.sendBeacon) {
      const ok = navigator.sendBeacon(
        ENDPOINT,
        new Blob([body], { type: "application/json" }),
      );
      if (ok) return;
      // Beacon refused (payload over the ~64KB cap) — fall through to
      // keepalive fetch, which at least has a chance of landing.
    }
    void fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      /* fire and forget */
    });
  } catch {
    /* never surface a transport failure to the page */
  }
}

/**
 * Events fired before the tracker finished booting.
 *
 * `PerformanceMonitor` and `AnalyticsTracker` are separate components, and
 * TTFB and FCP resolve within milliseconds of the document being ready —
 * routinely before `initAnalytics` has run. `enqueue` used to return early
 * with no context and the measurement was gone, which is why the dashboard
 * showed four LCP samples against a thousand page views and the whole
 * performance section looked broken. They are held here instead and
 * replayed once the session exists. Capped, because an unbooted tracker
 * must not grow a list forever.
 */
const preInit: { kind: AnalyticsEventKind; fields: Partial<TrackedEvent> }[] = [];
const MAX_PREINIT = 30;

function enqueue(
  kind: AnalyticsEventKind,
  fields: Partial<TrackedEvent> = {},
): void {
  if (!context) {
    if (preInit.length < MAX_PREINIT) preInit.push({ kind, fields });
    return;
  }
  try {
    const event: TrackedEvent = {
      kind,
      seq: nextSeq(),
      occurred_at: new Date().toISOString(),
      path: fields.path ?? currentPath,
      page_title: fields.page_title ?? document.title ?? null,
      referrer: fields.referrer ?? null,
      element: fields.element ?? null,
      element_text: fields.element_text ?? null,
      href: fields.href ?? null,
      value: fields.value ?? null,
      meta: testMode ? { ...(fields.meta ?? {}), test: true } : (fields.meta ?? {}),
    };
    queue.push(event);
    debugLog(event);
    write(K.seenAt, String(Date.now()));
    mirrorToGa4(kind, fields);
    if (queue.length >= FLUSH_AT_QUEUE) flush();
  } catch {
    /* an event that cannot be recorded is not worth an exception */
  }
}

/**
 * Mirror the interesting events into GA4.
 *
 * The site already loads gtag, and GA is where the ads platforms read
 * conversions from — so the events that matter commercially need to
 * exist in both places, not just in our own warehouse.
 */
function mirrorToGa4(kind: AnalyticsEventKind, fields: Partial<TrackedEvent>): void {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  const mirrored: AnalyticsEventKind[] = [
    "conversion",
    "form_submit",
    "form_abandon",
    "outbound_click",
    "cta_click",
    "tel_click",
    "mailto_click",
    "whatsapp_click",
    "download",
    "chat_message",
    "scroll_depth",
  ];
  if (!mirrored.includes(kind)) return;
  try {
    gtag("event", kind, {
      event_category: "arc_analytics",
      event_label: fields.element_text ?? fields.href ?? currentPath,
      value: fields.value ?? undefined,
      page_path: currentPath,
    });
  } catch {
    /* GA blocked — our own pipeline is unaffected */
  }
}

// ── engagement clock ────────────────────────────────────────────────────────

function markActivity(): void {
  lastActivityAt = Date.now();
}

function startEngagementClock(): void {
  if (engagementTicker) return;
  engagementTicker = setInterval(() => {
    const visible = document.visibilityState === "visible";
    const active = Date.now() - lastActivityAt < ENGAGEMENT_IDLE_MS;
    if (visible && active) engagedMs += 1000;
  }, 1000);
}

// ── element description ─────────────────────────────────────────────────────

/** A short, stable-ish description of what was clicked. */
function describe(el: Element | null): string {
  if (!el) return "";
  const tag = el.tagName.toLowerCase();
  const id = el.id ? `#${el.id}` : "";
  const cls =
    typeof el.className === "string" && el.className
      ? `.${el.className.trim().split(/\s+/).slice(0, 2).join(".")}`
      : "";
  return `${tag}${id}${cls}`.slice(0, 200);
}

function labelOf(el: Element | null): string {
  if (!el) return "";
  const text =
    el.getAttribute("aria-label") ||
    (el as HTMLElement).innerText ||
    el.getAttribute("title") ||
    "";
  return text.replace(/\s+/g, " ").trim().slice(0, 160);
}

// ── instrumentation ─────────────────────────────────────────────────────────

function instrumentScroll(): void {
  let ticking = false;
  const milestones = [25, 50, 75, 90, 100];
  let reached = new Set<number>();

  const onScroll = () => {
    markActivity();
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      // A page shorter than the viewport is fully seen the moment it renders;
      // reporting 0% for it would understate every short landing page.
      const pct =
        scrollable <= 0
          ? 100
          : Math.min(100, Math.round(((window.scrollY || doc.scrollTop) / scrollable) * 100));
      if (pct > pageMaxScroll) pageMaxScroll = pct;
      if (pct > progress().max_scroll_pct) saveProgress({ max_scroll_pct: pct });
      for (const m of milestones) {
        if (pct >= m && !reached.has(m)) {
          reached.add(m);
          enqueue("scroll_depth", { value: m });
        }
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  // Each page in the SPA gets its own set of milestones.
  window.addEventListener("arc:page-change", () => {
    reached = new Set<number>();
    pageMaxScroll = 0;
  });
}

function instrumentClicks(): void {
  const recent: number[] = [];

  document.addEventListener(
    "click",
    (e) => {
      markActivity();
      const target = e.target as Element | null;
      if (!target) return;

      // Rage clicks: three hits inside a second means something the
      // visitor believes is a button is not behaving like one.
      const now = Date.now();
      recent.push(now);
      while (recent.length && now - recent[0] > RAGE_CLICK_WINDOW_MS) recent.shift();
      if (recent.length >= RAGE_CLICK_COUNT) {
        recent.length = 0;
        bump("rage_clicks");
        enqueue("rage_click", {
          element: describe(target),
          element_text: labelOf(target),
        });
      }

      // A control that reports itself (the floating WhatsApp button, the chat
      // box) opts out here, or every one of its clicks is recorded twice.
      if (target.closest("[data-analytics-ignore]")) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      const button = target.closest("button,[role='button'],[data-cta]") as HTMLElement | null;

      if (anchor?.href) {
        const href = anchor.href;
        const label = labelOf(anchor);
        const element = describe(anchor);

        // A hand raised, not yet a message: recorded as the click it is and
        // as a contact_click conversion once per session — never as an
        // enquiry. See the conversions section below.
        if (href.startsWith("tel:")) {
          trackContactClick("call_click", href, { element, element_text: label });
          return;
        }
        if (href.startsWith("mailto:")) {
          trackContactClick("email_click", href, { element, element_text: label });
          return;
        }
        if (/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href)) {
          trackContactClick("whatsapp_click", href, { element, element_text: label });
          return;
        }
        if (/\.(pdf|docx?|xlsx?|pptx?|zip|csv|txt|mp4|mp3)(\?|$)/i.test(href)) {
          enqueue("download", { href, element, element_text: label });
          return;
        }

        const host = hostOf(href);
        if (host && !isInternalHost(host)) {
          bump("outbound_clicks");
          enqueue("outbound_click", { href, element, element_text: label });
          return;
        }
        enqueue("click", { href, element, element_text: label });
        return;
      }

      // A submit button inside a form is that form's attempt — recorded by the
      // submit listener — not a call-to-action click on top of it.
      if (
        button &&
        (button as HTMLButtonElement).type === "submit" &&
        button.closest("form")
      ) {
        return;
      }

      if (button) {
        enqueue("cta_click", {
          element: describe(button),
          element_text: labelOf(button),
          meta: { cta: button.getAttribute("data-cta") ?? null },
        });
        return;
      }

      // A click on nothing interactive, on a page with no scroll change,
      // is the classic "this looks clickable but isn't" signal.
      const interactive = target.closest("a,button,input,select,textarea,[role='button'],[onclick]");
      if (!interactive) {
        enqueue("dead_click", {
          element: describe(target),
          element_text: labelOf(target),
        });
      }
    },
    { capture: true, passive: true },
  );
}

// ── forms ───────────────────────────────────────────────────────────────────
//
// What the tracker can see for itself: the first time somebody focuses a
// field (form_start), which fields they touch (form_field), every press of
// the submit button (form_attempt) and a form left unfinished (form_abandon).
// What it CANNOT see is whether a submission WORKED — the native submit event
// fires before the component has validated anything and long before the
// server has answered. The version that inferred form_submit and a conversion
// from that event recorded a conversion for every rejected send, for every
// spam script that dispatched a submit without ever focusing a field, and —
// because the footer newsletter box is on every page — for mailing-list
// signups made on the contact page, under the name "contact_form". Over one
// month that produced 15 "conversions" from a single script and 0 from
// enquiries, with 3 form starts against 15 submits.
//
// So form_submit is only ever recorded by the component that made the request
// and saw it accepted, through `trackFormSubmitted`. A form names itself with
// `data-form="…"` (falling back to id, then name); a form that is not a form
// in the visitor's sense — the chat box's message input — carries
// `data-analytics-ignore` and is left alone entirely.

type FormRecord = {
  id: string;
  started: number;
  /** Presses of the submit button, successful or not. */
  attempts: number;
  /** Set only by trackFormSubmitted — a confirmed, server-accepted send. */
  submitted: boolean;
  fields: Set<string>;
};

/** Forms touched on this page, by their analytics id. */
const forms = new Map<string, FormRecord>();

function formIdOf(form: HTMLFormElement | null): string {
  return (
    (form && (form.getAttribute("data-form") || form.id || form.getAttribute("name"))) ||
    "form"
  );
}

/** Anything inside a `data-analytics-ignore` boundary is not a form worth a row. */
function isIgnored(el: Element | null): boolean {
  return Boolean(el?.closest("[data-analytics-ignore]"));
}

const secondsSince = (t: number): number => Math.round((Date.now() - t) / 1000);

/**
 * The first interaction with a form. Idempotent per form per page, so
 * form_start is at most one per form — which is what lets "starts ≥ submits"
 * hold as an invariant rather than a hope.
 */
function noteFormStart(id: string, implicit = false): FormRecord {
  let record = forms.get(id);
  if (!record) {
    record = { id, started: Date.now(), attempts: 0, submitted: false, fields: new Set() };
    forms.set(id, record);
    bump("forms_started");
    enqueue("form_start", {
      element: id,
      // `implicit` marks a start the tracker never saw happen: a success was
      // reported for a form nobody focused. A person cannot do that; a
      // script can. The CRM's ledger reads it.
      meta: implicit ? { form_id: id, implicit: true } : { form_id: id },
    });
  }
  return record;
}

function instrumentForms(): void {
  // The first focus on a field starts the form, and so does the first
  // character typed into one: a browser autofill, and some mobile keyboards,
  // change a value without ever focusing it, and a person who did that has
  // still started the form.
  const touchField = (e: Event) => {
    markActivity();
    const el = e.target as HTMLInputElement | null;
    const form = el?.form ?? null;
    if (!form || isIgnored(form)) return;
    const record = noteFormStart(formIdOf(form));
    const name = el?.name || el?.id || el?.type || "field";
    if (!record.fields.has(name)) {
      record.fields.add(name);
      enqueue("form_field", { element: record.id, meta: { form_id: record.id, field: name } });
    }
  };
  document.addEventListener("focusin", touchField, { capture: true });
  document.addEventListener("input", touchField, { capture: true });

  // An email typed into any form identifies the session, which is what
  // links anonymous browsing to the lead that shows up in the CRM.
  document.addEventListener(
    "change",
    (e) => {
      const el = e.target as HTMLInputElement | null;
      if (!el || el.type !== "email" || isIgnored(el)) return;
      const value = (el.value || "").trim();
      if (value && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
        saveProgress({ identified_email: value.slice(0, 200) });
      }
    },
    { capture: true },
  );

  // Capture phase: this runs before the component's own onSubmit, so it sees
  // every press of the button — including the ones validation then refuses.
  // That is exactly why it records an ATTEMPT and nothing more.
  document.addEventListener(
    "submit",
    (e) => {
      const form = e.target as HTMLFormElement | null;
      if (!form || isIgnored(form)) return;
      const id = formIdOf(form);
      const record = forms.get(id);
      if (record) record.attempts += 1;
      enqueue("form_attempt", {
        element: id,
        value: record ? secondsSince(record.started) : null,
        meta: {
          form_id: id,
          attempt: record?.attempts ?? 1,
          fields: record ? [...record.fields] : [],
          // A submit on a form nobody ever focused is not a person.
          touched: Boolean(record),
        },
      });
    },
    { capture: true },
  );

  window.addEventListener("pagehide", () => {
    for (const [id, record] of forms) {
      if (record.submitted) continue;
      bump("forms_abandoned");
      enqueue("form_abandon", {
        element: id,
        value: secondsSince(record.started),
        meta: { form_id: id, fields: [...record.fields], attempts: record.attempts },
      });
    }
  });
}

function instrumentMisc(): void {
  for (const evt of ["mousemove", "keydown", "touchstart", "pointerdown"]) {
    window.addEventListener(evt, markActivity, { passive: true });
  }

  // Exit intent: the cursor leaving through the top of the window is the
  // classic "about to close the tab" tell on desktop.
  document.addEventListener("mouseout", (e) => {
    const ev = e as MouseEvent;
    if (ev.clientY <= 0 && !ev.relatedTarget) {
      enqueue("exit_intent", { value: Math.round(engagedMs / 1000) });
    }
  });

  document.addEventListener("copy", () => {
    const text = String(window.getSelection() ?? "").slice(0, 200);
    if (text) enqueue("copy", { element_text: text, value: text.length });
  });

  document.addEventListener(
    "play",
    (e) => {
      const el = e.target as HTMLMediaElement | null;
      if (!el || !(el instanceof HTMLVideoElement)) return;
      enqueue("video_play", {
        element: describe(el),
        href: el.currentSrc || null,
        value: Math.round(el.duration || 0),
      });
    },
    { capture: true },
  );

  window.addEventListener("error", (e) => {
    enqueue("error", {
      element_text: String(e.message ?? "").slice(0, 300),
      meta: {
        source: String(e.filename ?? "").slice(0, 300),
        line: e.lineno ?? null,
      },
    });
  });

  window.addEventListener("unhandledrejection", (e) => {
    enqueue("error", {
      element_text: String((e as PromiseRejectionEvent).reason ?? "").slice(0, 300),
      meta: { kind: "unhandled_rejection" },
    });
  });
}

// ── page lifecycle ──────────────────────────────────────────────────────────

/** Close the books on the page being left: time spent and how far down. */
function endPage(): void {
  if (!context) return;
  const seconds = Math.round((Date.now() - pageEnteredAt) / 1000);
  enqueue("page_exit", {
    value: seconds,
    meta: { scroll_pct: pageMaxScroll, engaged_seconds: Math.round(engagedMs / 1000) },
  });
  saveProgress({ exit_path: currentPath });
}

function endSession(): void {
  if (!context) return;
  endPage();
  const p = progress();
  enqueue("session_end", {
    value: Math.round((Date.now() - sessionStartedAt) / 1000),
    meta: {
      pages: p.page_count,
      engaged_seconds: Math.round(engagedMs / 1000),
      max_scroll_pct: p.max_scroll_pct,
    },
  });
  flush(true);
}

// ── public API ──────────────────────────────────────────────────────────────

/**
 * Record a page view. Called once on mount and again on every client-side
 * route change, which is the only way to see navigation in an app-router
 * site — there is no document load between pages.
 */
export function trackPageView(path: string, title?: string): void {
  if (!context) return;
  try {
    if (currentPath !== path) {
      endPage();
      window.dispatchEvent(new Event("arc:page-change"));
    }
    currentPath = path;
    pageEnteredAt = Date.now();
    pageMaxScroll = 0;
    bump("page_count");
    const p = saveProgress({ exit_path: path });
    // Two pages, or one page with real attention, is not a bounce.
    if (p.page_count > 1) {
      // recorded on the session row by the collector
    }
    enqueue("page_view", {
      path,
      page_title: title ?? document.title,
      referrer: document.referrer || null,
      meta: { page_number: p.page_count },
    });
  } catch {
    /* a page view that cannot be recorded must not break navigation */
  }
}

/** Record any custom event from application code. */
export function trackEvent(
  kind: AnalyticsEventKind,
  fields: Partial<TrackedEvent> = {},
): void {
  enqueue(kind, fields);
}

// ── conversions ─────────────────────────────────────────────────────────────
//
// A conversion is a confirmed outcome with a category, recorded once:
//
//   enquiry        somebody asked us to get in touch and the server accepted
//                  it — the contact form, a project request, an email or a
//                  phone number given to the chat agent. The ONLY category
//                  that marks the session converted, and the only one the
//                  CRM counts as a conversion unless a person says otherwise.
//   contact_click  a hand raised but not yet a message: WhatsApp, tel: and
//                  mailto: clicks. Recorded in the CRM's lead ledger for
//                  someone to confirm or dismiss; never a conversion on its
//                  own, so the "Converted" stage can never exceed "Showed
//                  intent".
//   other          a form that is not a lead at all — newsletter, a job
//                  application, a client review. A submit, never a
//                  conversion.
//
// Every conversion carries a lead id. For an enquiry the form mints it BEFORE
// the request and sends it to the CRM with the enquiry, so the analytics row
// and the CRM lead share one key and reconcile exactly. For a contact click it
// is derived from the session and the kind, so ten clicks on the same
// WhatsApp button in one visit are one conversion, not ten.

export type ConversionCategory = "enquiry" | "contact_click" | "other";

const CONVERSION_CATEGORY: Record<string, ConversionCategory> = {
  contact_form: "enquiry",
  chat_lead: "enquiry",
  job_request: "enquiry",
  proposal_request: "enquiry",
  whatsapp_click: "contact_click",
  call_click: "contact_click",
  email_click: "contact_click",
  newsletter: "other",
  career_application: "other",
  review: "other",
};

/** What a conversion kind is. Unknown kinds are "other" — the safe direction. */
export function conversionCategory(kind: string): ConversionCategory {
  return CONVERSION_CATEGORY[kind] ?? "other";
}

/** A fresh lead id, minted by a form before it sends so the CRM gets the same one. */
export function newLeadId(): string {
  return uid("lead");
}

/** The ids a form sends with an enquiry so the CRM can put the lead next to the visit. */
export function getAnalyticsIdentity(): {
  session_id: string | null;
  visitor_id: string | null;
  test: boolean;
} {
  return {
    session_id: context?.session_id ?? read(K.session),
    visitor_id: context?.visitor_id ?? read(K.visitor),
    test: testMode,
  };
}

/** Lead ids recorded on this page — the dedupe that survives a storage-less browser. */
const recordedLeadIds = new Set<string>();

/**
 * Record a conversion. Returns its lead id, or null when the kind is not a
 * conversion at all. Idempotent per lead id.
 *
 * The session is flagged `converted` for enquiries only, and the first
 * enquiry names `conversion_kind`. The conversion EVENT is what the CRM's
 * ledger is built from; the flag is a summary of it.
 */
export function markConversion(
  kind: string,
  meta: Record<string, unknown> = {},
): string | null {
  try {
    const category = conversionCategory(kind);
    if (category === "other") return null;

    const sessionId = context?.session_id ?? read(K.session) ?? "nosession";
    const given = typeof meta.lead_id === "string" && meta.lead_id ? meta.lead_id : null;
    const leadId =
      given ?? (category === "contact_click" ? `${kind}:${sessionId}` : newLeadId());

    const p = progress();
    const seen = Array.isArray(p.lead_ids) ? p.lead_ids : [];
    if (recordedLeadIds.has(leadId) || seen.includes(leadId)) return leadId;
    recordedLeadIds.add(leadId);

    const patch: Partial<SessionProgress> = { lead_ids: [...seen, leadId].slice(-50) };
    if (category === "enquiry" && !p.converted) {
      patch.converted = true;
      patch.conversion_kind = kind;
    }
    saveProgress(patch);

    enqueue("conversion", {
      element_text: kind,
      meta: { ...meta, kind, category, lead_id: leadId },
    });
    flush();
    return leadId;
  } catch {
    return null;
  }
}

type ContactClickKind = "whatsapp_click" | "call_click" | "email_click";

const CONTACT_EVENT: Record<ContactClickKind, AnalyticsEventKind> = {
  whatsapp_click: "whatsapp_click",
  call_click: "tel_click",
  email_click: "mailto_click",
};

/** The most recent contact click, so a double-click is one click. */
let lastContactClick: { key: string; at: number } | null = null;
const CONTACT_CLICK_DEBOUNCE_MS = 1500;

/**
 * A click on a WhatsApp, tel: or mailto: link — the click event itself every
 * time, and a contact_click conversion the first time per session.
 */
export function trackContactClick(
  kind: ContactClickKind,
  href: string,
  fields: { element?: string | null; element_text?: string | null; surface?: string | null } = {},
): void {
  try {
    const key = `${kind}|${href}`;
    const now = Date.now();
    if (
      lastContactClick &&
      lastContactClick.key === key &&
      now - lastContactClick.at < CONTACT_CLICK_DEBOUNCE_MS
    ) {
      return;
    }
    lastContactClick = { key, at: now };
    const surface = fields.surface ? { surface: fields.surface } : {};
    enqueue(CONTACT_EVENT[kind], {
      href,
      element: fields.element ?? null,
      element_text: fields.element_text ?? null,
      meta: surface,
    });
    markConversion(kind, { href, ...surface });
  } catch {
    /* a click that cannot be recorded is still a click */
  }
}

/**
 * The one way a form_submit is recorded: by the component that made the
 * request, after the server accepted it.
 *
 * Emits the form_submit and, for an enquiry, the conversion — both carrying
 * the lead id, the same one the form already sent to the CRM when it has
 * one. A success for a form the tracker never saw anybody touch gets an
 * implicit form_start first, so starts ≥ submits always holds, and is marked
 * `untouched` so the ledger can treat it with suspicion.
 */
export function trackFormSubmitted(
  formId: string,
  kind: string,
  opts: { lead_id?: string | null; meta?: Record<string, unknown>; value?: number | null } = {},
): string | null {
  try {
    const existing = forms.get(formId);
    const record = existing ?? noteFormStart(formId, true);
    record.submitted = true;

    const category = conversionCategory(kind);
    const leadId = category === "enquiry" ? opts.lead_id || newLeadId() : null;

    enqueue("form_submit", {
      element: formId,
      value: opts.value ?? secondsSince(record.started),
      meta: {
        ...(opts.meta ?? {}),
        form_id: formId,
        intent: kind,
        category,
        fields: [...record.fields],
        attempts: record.attempts,
        ...(leadId ? { lead_id: leadId } : {}),
        ...(existing ? {} : { untouched: true }),
      },
    });
    if (leadId) {
      markConversion(kind, { ...(opts.meta ?? {}), form_id: formId, lead_id: leadId });
    } else {
      flush();
    }
    // A second send is a second form fill, not a continuation of the first.
    forms.delete(formId);
    return leadId;
  } catch {
    return null;
  }
}

/** Attach a known email to the session once the visitor identifies themselves. */
export function identifyVisitor(email: string): void {
  if (!email) return;
  saveProgress({ identified_email: email.slice(0, 200) });
  flush();
}

/** Record website-AI-agent activity so chat and browsing sit on one timeline. */
export function trackChatMessage(role: "user" | "assistant", length: number): void {
  const p = progress();
  saveProgress({
    chat_engaged: true,
    chat_message_count: p.chat_message_count + 1,
  });
  enqueue("chat_message", { value: length, meta: { role } });
}

/** Forward a Core Web Vital so field performance sits beside behaviour. */
export function trackWebVital(name: string, value: number, rating: string): void {
  enqueue("web_vital", {
    element_text: name,
    // CLS is a small unitless number, so it is shipped as milli-CLS to
    // survive an integer column. The CRM divides it back out; if that ever
    // changes, both sides have to change together.
    value: Math.round(name === "CLS" ? value * 1000 : value),
    meta: { rating, metric: name },
  });
  // LCP, CLS and INP are finalised when the page is hidden — the same moment
  // the queue is being flushed for the last time. Without this the metric is
  // enqueued just after its own flush and dies with the document.
  if (document.visibilityState === "hidden") flush(true);
}

/**
 * Boot the tracker. Safe to call more than once — React Strict Mode
 * mounts effects twice in development, and a second set of listeners
 * would double every event.
 */
export function initAnalytics(path: string): void {
  if (started || typeof window === "undefined") return;
  started = true;

  try {
    const params = new URLSearchParams(window.location.search);
    testMode = detectTestMode(params);
    const referrer = document.referrer || null;
    const isNewSession = sessionExpired();

    // Read before the first-touch write below, which would otherwise make
    // every session look like a returning visitor's.
    const isNewVisitor = !read(K.firstTouch);

    const visitorId = ensureVisitorId();
    let sessionId = read(K.session);
    if (isNewSession || !sessionId) {
      sessionId = uid("s");
      write(K.session, sessionId);
      write(K.seq, "0");
      write(K.startedAt, String(Date.now()));
      write(K.progress, JSON.stringify(emptyProgress(path)));
    }

    const channel = classifyChannel(referrer, params);

    // First touch is written once per visitor and then never again, so a
    // campaign that introduced someone still gets credit months later.
    let firstTouch = readJson<{ channel: string; campaign: string | null } | null>(
      K.firstTouch,
      null,
    );
    if (!firstTouch) {
      firstTouch = { channel, campaign: params.get("utm_campaign") };
      write(K.firstTouch, JSON.stringify(firstTouch));
    }

    // The landing page belongs to the session, so a hard navigation
    // mid-session must not overwrite it with page three.
    const cached = readJson<SessionContext | null>(K.context, null);
    const reuse = !isNewSession && cached?.session_id === sessionId;

    context = reuse
      ? { ...cached, ...detectEnvironment() }
      : {
          session_id: sessionId,
          visitor_id: visitorId,
          site: siteLabel(),
          entry_path: path,
          landing_page_title: document.title || null,
          landing_referrer: referrer,
          referrer_domain: hostOf(referrer),
          channel,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_term: params.get("utm_term"),
          utm_content: params.get("utm_content"),
          gclid: params.get("gclid"),
          fbclid: params.get("fbclid"),
          msclkid: params.get("msclkid"),
          first_touch_channel: firstTouch.channel,
          first_touch_campaign: firstTouch.campaign,
          ...detectEnvironment(),
        };

    write(K.context, JSON.stringify(context));

    currentPath = path;
    sessionStartedAt = Number(read(K.startedAt)) || Date.now();
    pageEnteredAt = Date.now();
    lastActivityAt = Date.now();

    if (isNewSession) {
      enqueue("session_start", {
        path,
        referrer,
        meta: { channel, new_visitor: isNewVisitor },
      });
    }

    // Anything that fired while the tracker was still booting — early web
    // vitals, above all — now has a session to belong to.
    if (preInit.length) {
      const held = preInit.splice(0, preInit.length);
      for (const item of held) enqueue(item.kind, item.fields);
    }

    startEngagementClock();
    instrumentScroll();
    instrumentClicks();
    instrumentForms();
    instrumentMisc();

    flushTimer = setInterval(() => flush(), FLUSH_INTERVAL_MS);

    // pagehide is the only unload event Safari fires reliably, and the
    // hidden transition covers a tab switch that never comes back.
    window.addEventListener("pagehide", endSession);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") flush(true);
    });
    // Restored from the back/forward cache: the session is alive again.
    window.addEventListener("pageshow", (e) => {
      if ((e as PageTransitionEvent).persisted) {
        pageEnteredAt = Date.now();
        markActivity();
      }
    });

    trackPageView(path);
  } catch {
    // A tracker that fails to start leaves the site working perfectly.
    started = false;
  }
}

/** Tear down — used only by tests and hot reload. */
export function stopAnalytics(): void {
  if (flushTimer) clearInterval(flushTimer);
  if (engagementTicker) clearInterval(engagementTicker);
  flushTimer = null;
  engagementTicker = null;
  started = false;
}
