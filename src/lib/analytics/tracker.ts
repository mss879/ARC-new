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
    queue.push({
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
      meta: fields.meta ?? {},
    });
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

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      const button = target.closest("button,[role='button'],[data-cta]") as HTMLElement | null;

      if (anchor?.href) {
        const href = anchor.href;
        const label = labelOf(anchor);
        const element = describe(anchor);

        if (href.startsWith("tel:")) {
          enqueue("tel_click", { href, element, element_text: label });
          markConversion("call_click");
          return;
        }
        if (href.startsWith("mailto:")) {
          enqueue("mailto_click", { href, element, element_text: label });
          // Emailing us is a lead. tel: and WhatsApp were already credited
          // and this was not, so every visitor who read the contact page and
          // chose email over the form was recorded as a bounce with a click.
          markConversion("email_click");
          return;
        }
        if (/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href)) {
          enqueue("whatsapp_click", { href, element, element_text: label });
          markConversion("whatsapp_click");
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

function instrumentForms(): void {
  const touched = new Map<string, { started: number; submitted: boolean; fields: Set<string> }>();

  const formId = (form: HTMLFormElement | null): string =>
    (form && (form.id || form.getAttribute("name") || form.getAttribute("data-form"))) || "form";

  document.addEventListener(
    "focusin",
    (e) => {
      markActivity();
      const el = e.target as HTMLInputElement | null;
      const form = el?.form ?? null;
      if (!form) return;
      const id = formId(form);
      if (!touched.has(id)) {
        touched.set(id, { started: Date.now(), submitted: false, fields: new Set() });
        bump("forms_started");
        enqueue("form_start", { element: id, meta: { form_id: id } });
      }
      const name = el?.name || el?.id || el?.type || "field";
      const record = touched.get(id);
      if (record && !record.fields.has(name)) {
        record.fields.add(name);
        enqueue("form_field", { element: id, meta: { form_id: id, field: name } });
      }
    },
    { capture: true },
  );

  // An email typed into any form identifies the session, which is what
  // links anonymous browsing to the lead that shows up in the CRM.
  document.addEventListener(
    "change",
    (e) => {
      const el = e.target as HTMLInputElement | null;
      if (!el || el.type !== "email") return;
      const value = (el.value || "").trim();
      if (value && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
        saveProgress({ identified_email: value.slice(0, 200) });
      }
    },
    { capture: true },
  );

  document.addEventListener(
    "submit",
    (e) => {
      const form = e.target as HTMLFormElement | null;
      // A form that reports its own outcome opts out here.
      //
      // This listener is capture-phase, so it runs BEFORE the component's
      // onSubmit — before validation has been checked and long before the
      // request has succeeded. It was therefore recording a submit and an
      // irreversible conversion every time someone pressed the button on a
      // form that then refused to send, which is the most expensive kind of
      // wrong number: it inflates exactly the metric decisions are made on.
      if (form?.hasAttribute("data-analytics-manual")) return;
      const id = formId(form);
      const record = touched.get(id);
      if (record) record.submitted = true;
      const kind = conversionKind(form);
      enqueue("form_submit", {
        element: id,
        value: record ? Math.round((Date.now() - record.started) / 1000) : null,
        meta: {
          form_id: id,
          fields: record ? [...record.fields] : [],
          // What this submit was taken to be, so a "conversion" can always be
          // traced back to the form that claimed it.
          intent: kind ?? "none",
        },
      });
      if (kind) markConversion(kind);
    },
    { capture: true },
  );

  window.addEventListener("pagehide", () => {
    for (const [id, record] of touched) {
      if (record.submitted) continue;
      bump("forms_abandoned");
      enqueue("form_abandon", {
        element: id,
        value: Math.round((Date.now() - record.started) / 1000),
        meta: { form_id: id, fields: [...record.fields] },
      });
    }
  });
}

/**
 * What a form submit was, or null when it is not a conversion at all.
 *
 * A conversion has to mean "somebody asked us to get in touch". It used to
 * mean "a form was submitted anywhere", which quietly made the newsletter
 * box in the FOOTER — present on every page — the single biggest source of
 * conversions on the site: over thirty days the dashboard reported 17
 * conversions, of which 15 were footer signups by one spam script and 0
 * were enquiries. A metric that counts a mailing-list signup and an £8k
 * enquiry as the same event cannot be used to decide anything, and every
 * scan of the data said so.
 *
 * So: a form declares what it is with `data-analytics-intent`, or it is
 * identified by the page it lives on. Anything unrecognised is recorded as
 * a submit and is NOT a conversion — the safe direction, because an
 * uncounted conversion is a number that is too low, while a counted
 * non-conversion is a number that is wrong in a way nobody can see.
 */
function conversionKind(form: HTMLFormElement | null): string | null {
  const declared = form?.getAttribute("data-analytics-intent")?.trim();
  if (declared) return declared === "none" ? null : declared;

  const p = currentPath;
  if (p.startsWith("/contact")) return "contact_form";
  if (p.startsWith("/careers")) return "career_application";
  if (p.startsWith("/job-request")) return "job_request";
  if (p.startsWith("/review")) return "review";
  return null;
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

/** Flag the session as converted. Idempotent — the first conversion wins. */
export function markConversion(kind: string, meta: Record<string, unknown> = {}): void {
  const p = progress();
  if (!p.converted) {
    saveProgress({ converted: true, conversion_kind: kind });
  }
  enqueue("conversion", { element_text: kind, meta: { ...meta, kind } });
  flush();
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
          site: SITE,
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
