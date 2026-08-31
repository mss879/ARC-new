import { createHash } from "crypto";

import { createClient } from "@supabase/supabase-js";

import type { CollectPayload, TrackedEvent } from "@/lib/analytics/types";

/**
 * The analytics collector.
 *
 * One endpoint, batched: the browser posts a session envelope plus the
 * events that happened since the last flush. Everything the browser
 * cannot know about itself — the visitor's country, whether the request
 * looks automated, a stable-but-anonymous IP identity — is added here,
 * at the edge, where the real request headers live.
 *
 * Writes go through the service-role key because `analytics_sessions`
 * and `analytics_events` deny the anon key entirely; a public site must
 * not be able to read back its own visitor log.
 *
 * `page_visits` is still written for every page view so the existing
 * /admin dashboard keeps working exactly as it did.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ── limits ──────────────────────────────────────────────────────────────────
// Generous enough for a real reading session (a long article fires scroll,
// engagement and click events steadily), tight enough that a script cannot
// use the endpoint as free storage.
const MAX_EVENTS_PER_BATCH = 120;
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_BATCHES_PER_WINDOW = 60;

const rateLimit = new Map<string, { count: number; firstRequest: number }>();

setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimit.entries()) {
    if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) rateLimit.delete(ip);
  }
}, 5 * 60 * 1000);

const EVENT_KINDS = new Set([
  "session_start", "page_view", "page_exit", "scroll_depth", "click",
  "cta_click", "outbound_click", "download", "tel_click", "mailto_click",
  "whatsapp_click", "form_start", "form_field", "form_abandon", "form_submit",
  "chat_open", "chat_message", "video_play", "video_complete", "search",
  "copy", "rage_click", "dead_click", "exit_intent", "error", "web_vital",
  "conversion", "session_end",
]);

const BOT_UA =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|scrape|curl|wget|python-requests|axios|postman|facebookexternalhit|whatsapp|telegrambot|semrush|ahrefs|mj12|dotbot|petalbot|bytespider/i;

function clientIp(req: Request): string {
  return (
    req.headers.get("x-nf-client-connection-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

/**
 * A salted, truncated hash — enough to tell two visitors apart within a
 * day, useless as an identifier outside this table. The salt falls back
 * to the service key so a missing env var cannot silently produce
 * unsalted (and therefore reversible) hashes of every visitor's IP.
 */
function hashIp(ip: string): string | null {
  if (!ip || ip === "unknown") return null;
  const salt =
    process.env.ANALYTICS_IP_SALT ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "arc-analytics";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

/**
 * Netlify's geo blob, whichever way it arrives.
 *
 * This is the bug that made every session in the dashboard show
 * country="(none)". Netlify hands `x-nf-geo` to a serverless function
 * BASE64-encoded, and base64 of a JSON object always starts `eyJ` — so
 * `JSON.parse` threw on the first character every single time, the catch
 * fell through to the flat headers, and those are Vercel/Cloudflare names
 * that Netlify does not send. Every field came back null, on every request,
 * for months, without ever logging an error.
 *
 * So: try the raw string and try the decoded string, and accept whichever
 * parses. `netlify dev` and some proxies do pass it raw, so both paths are
 * live rather than one being a defensive nicety.
 */
function parseNetlifyGeo(raw: string): {
  country?: { code?: string; name?: string };
  subdivision?: { code?: string; name?: string };
  city?: string;
} | null {
  const candidates = [raw];
  try {
    candidates.push(Buffer.from(raw, "base64").toString("utf8"));
  } catch {
    /* not base64 — the raw attempt is all there is */
  }
  for (const candidate of candidates) {
    const text = candidate.trim();
    if (!text.startsWith("{")) continue;
    try {
      return JSON.parse(text);
    } catch {
      /* try the other encoding */
    }
  }
  return null;
}

/**
 * A country NAME from an ISO alpha-2 code.
 *
 * The dashboard groups by country name, so a row holding only a code still
 * reads as "(none)" there. `Intl.DisplayNames` is part of the Node runtime
 * this route runs on and knows every code without shipping a lookup table;
 * it is wrapped because an unsupported locale build throws rather than
 * degrading, and a missing country name must never cost us the whole batch.
 */
function countryName(code: string | null): string | null {
  if (!code || code.length !== 2) return null;
  try {
    return (
      new Intl.DisplayNames(["en"], { type: "region" }).of(code.toUpperCase()) ?? null
    );
  } catch {
    return null;
  }
}

/**
 * Geography from the CDN edge.
 *
 * Netlify puts a JSON blob in `x-nf-geo`; Vercel and Cloudflare use flat
 * headers. Reading whichever is present means the same code works if the
 * site ever moves hosts.
 */
function edgeGeo(req: Request): {
  country: string | null;
  country_code: string | null;
  region: string | null;
  city: string | null;
} {
  const nf = req.headers.get("x-nf-geo");
  if (nf) {
    const geo = parseNetlifyGeo(nf);
    if (geo) {
      const code = geo.country?.code ?? null;
      return {
        country: geo.country?.name ?? countryName(code),
        country_code: code,
        region: geo.subdivision?.name ?? null,
        city: geo.city ?? null,
      };
    }
  }
  const code =
    req.headers.get("x-nf-country") ||
    req.headers.get("x-country") ||
    req.headers.get("x-vercel-ip-country") ||
    req.headers.get("cf-ipcountry") ||
    null;
  return {
    // Derived, not left null. The dashboard groups by name, so a row with a
    // code and no name is indistinguishable from a row with no geography at
    // all — which is how a working fallback still reported "(none)".
    country: countryName(code),
    country_code: code,
    region:
      req.headers.get("x-nf-subdivision") ||
      req.headers.get("x-vercel-ip-country-region") ||
      req.headers.get("cf-region") ||
      null,
    city:
      decodeURIComponent(
        req.headers.get("x-nf-city") || req.headers.get("x-vercel-ip-city") || "",
      ) ||
      req.headers.get("cf-ipcity") ||
      null,
  };
}

/**
 * Device, browser and OS from the user-agent header.
 *
 * The browser already reports all three, and this is the fallback for when
 * it does not: a payload from a stale cached bundle, a hardened browser that
 * blocks the APIs the client detection uses, a replayed beacon. The server
 * holds the real UA on every request, so filing the row as device="unknown"
 * while a perfectly good user-agent sat unread in the headers was throwing
 * away information we already had — and "unknown" is not a neutral default,
 * it is the value that dominated the device breakdown.
 */
function agentEnvironment(ua: string): {
  device_type: string;
  browser: string | null;
  os: string | null;
} {
  // Order matters throughout: Edge's UA contains "Chrome", Chrome's contains
  // "Safari", and iPadOS claims to be a Mac.
  const browserTests: [string, RegExp][] = [
    ["Edge", /Edg(?:e|A|iOS)?\//],
    ["Opera", /OPR\//],
    ["Samsung Internet", /SamsungBrowser\//],
    ["Firefox", /(?:Firefox|FxiOS)\//],
    ["Instagram", /Instagram/],
    ["Facebook", /FBAN|FBAV/],
    ["Chrome", /(?:Chrome|CriOS)\//],
    ["Safari", /Version\/[\d.]+.*Safari/],
  ];
  let browser: string | null = null;
  for (const [name, re] of browserTests) {
    if (re.test(ua)) {
      browser = name;
      break;
    }
  }

  const osTests: [string, RegExp][] = [
    ["Windows", /Windows NT/],
    ["Android", /Android/],
    ["iOS", /iPhone|iPad|iPod/],
    ["macOS", /Mac OS X|Macintosh/],
    ["Linux", /Linux/],
  ];
  let os: string | null = null;
  for (const [name, re] of osTests) {
    if (re.test(ua)) {
      os = name;
      break;
    }
  }

  let device_type = "desktop";
  if (/iPad|Tablet|PlayBook|Silk/i.test(ua)) device_type = "tablet";
  else if (/Mobi|Android|iPhone|iPod|Windows Phone/i.test(ua)) device_type = "mobile";
  if (!ua) device_type = "unknown";

  return { device_type, browser, os };
}

const str = (v: unknown, max: number): string | null => {
  if (typeof v !== "string") return null;
  const s = v.trim();
  return s ? s.slice(0, max) : null;
};

const num = (v: unknown): number | null => {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : null;
};

const int = (v: unknown, min = 0, max = 2_147_483_647): number => {
  const n = Math.round(num(v) ?? 0);
  return Math.min(max, Math.max(min, Number.isFinite(n) ? n : 0));
};

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    const now = Date.now();
    const record = rateLimit.get(ip);
    if (record) {
      if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
        rateLimit.set(ip, { count: 1, firstRequest: now });
      } else if (record.count >= MAX_BATCHES_PER_WINDOW) {
        // 200, not 429: a tracker that sees an error may retry in a loop,
        // and this is telemetry, not something worth defending loudly.
        return Response.json({ ok: true, throttled: true });
      } else {
        record.count++;
      }
    } else {
      rateLimit.set(ip, { count: 1, firstRequest: now });
    }

    const body = (await req.json().catch(() => null)) as CollectPayload | null;
    if (!body?.session?.session_id || !body.session.visitor_id) {
      return Response.json({ error: "Missing session" }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      console.error("[analytics] Supabase env missing — event batch dropped.");
      return Response.json({ ok: false }, { status: 200 });
    }
    const supabase = createClient(url, key, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const s = body.session;
    const p = body.progress ?? ({} as CollectPayload["progress"]);
    const userAgent = req.headers.get("user-agent") || "";
    const isBot = BOT_UA.test(userAgent) || s.device_type === "bot";
    const geo = edgeGeo(req);
    const agent = agentEnvironment(userAgent);

    const sessionId = String(s.session_id).slice(0, 120);
    const visitorId = String(s.visitor_id).slice(0, 120);

    const events: TrackedEvent[] = Array.isArray(body.events)
      ? body.events.filter((e) => e && EVENT_KINDS.has(e.kind)).slice(0, MAX_EVENTS_PER_BATCH)
      : [];

    const claimedDevice = str(s.device_type, 20);
    const deviceType = isBot
      ? "bot"
      : !claimedDevice || claimedDevice === "unknown"
        ? agent.device_type
        : claimedDevice;

    const pageCount = int(p.page_count);
    const engaged = int(p.engaged_seconds);

    // A visit is only a bounce if it stayed on one page AND never really
    // engaged. Ten seconds of attention on a single service page is a
    // read, not a bounce, and counting it as one flatters nothing.
    const isBounce = pageCount <= 1 && engaged < 10 && int(p.max_scroll_pct) < 50;

    const sessionRow = {
      session_id: sessionId,
      visitor_id: visitorId,
      site: str(s.site, 100) ?? "arcai.agency",
      last_seen_at: new Date().toISOString(),
      entry_path: str(s.entry_path, 500) ?? "/",
      exit_path: str(p.exit_path, 500),
      page_count: pageCount,
      event_count: events.length,
      duration_seconds: int(p.duration_seconds),
      engaged_seconds: engaged,
      is_bounce: isBounce,
      max_scroll_pct: int(p.max_scroll_pct, 0, 100),
      landing_referrer: str(s.landing_referrer, 2000),
      referrer_domain: str(s.referrer_domain, 255),
      channel: str(s.channel, 40) ?? "direct",
      utm_source: str(s.utm_source, 255),
      utm_medium: str(s.utm_medium, 255),
      utm_campaign: str(s.utm_campaign, 255),
      utm_term: str(s.utm_term, 255),
      utm_content: str(s.utm_content, 255),
      gclid: str(s.gclid, 255),
      fbclid: str(s.fbclid, 255),
      msclkid: str(s.msclkid, 255),
      first_touch_channel: str(s.first_touch_channel, 40),
      first_touch_campaign: str(s.first_touch_campaign, 255),
      landing_page_title: str(s.landing_page_title, 300),
      // The client's own detection wins — it can see touch points, screen
      // size and the UA-CH hints the header does not carry. The header is
      // the floor beneath it, so a payload that arrives without them is
      // still filed against a real device instead of against "unknown".
      device_type: deviceType,
      browser: str(s.browser, 60) ?? agent.browser,
      browser_version: str(s.browser_version, 40),
      os: str(s.os, 60) ?? agent.os,
      os_version: str(s.os_version, 40),
      screen_w: num(s.screen_w),
      screen_h: num(s.screen_h),
      viewport_w: num(s.viewport_w),
      viewport_h: num(s.viewport_h),
      device_pixel_ratio: num(s.device_pixel_ratio),
      language: str(s.language, 20),
      timezone: str(s.timezone, 80),
      connection_type: str(s.connection_type, 20),
      user_agent: userAgent.slice(0, 500),
      country: geo.country,
      country_code: geo.country_code,
      region: geo.region,
      city: geo.city,
      ip_hash: hashIp(ip),
      converted: Boolean(p.converted),
      conversion_kind: str(p.conversion_kind, 60),
      conversion_at: p.converted ? new Date().toISOString() : null,
      chat_engaged: Boolean(p.chat_engaged),
      chat_message_count: int(p.chat_message_count),
      identified_email: str(p.identified_email, 200),
      forms_started: int(p.forms_started),
      forms_abandoned: int(p.forms_abandoned),
      outbound_clicks: int(p.outbound_clicks),
      rage_clicks: int(p.rage_clicks),
      is_bot: isBot,
    };

    // The session row is rewritten on every flush, so the counters always
    // reflect the visit so far. `event_count` is the exception — it must
    // accumulate, so it is added on top of whatever is already stored.
    const { data: existing } = await supabase
      .from("analytics_sessions")
      .select("event_count, converted, conversion_kind, conversion_at, first_seen_at")
      .eq("session_id", sessionId)
      .maybeSingle();

    if (existing) {
      sessionRow.event_count = (existing.event_count ?? 0) + events.length;
      // A conversion already recorded is never un-recorded by a later flush.
      if (existing.converted) {
        sessionRow.converted = true;
        sessionRow.conversion_kind = existing.conversion_kind ?? sessionRow.conversion_kind;
        sessionRow.conversion_at = existing.conversion_at ?? sessionRow.conversion_at;
      }
    }

    await supabase
      .from("analytics_sessions")
      .upsert(sessionRow, { onConflict: "session_id" });

    if (events.length) {
      await supabase.from("analytics_events").insert(
        events.map((e) => ({
          session_id: sessionId,
          visitor_id: visitorId,
          site: sessionRow.site,
          seq: int(e.seq),
          occurred_at: str(e.occurred_at, 40) ?? new Date().toISOString(),
          kind: e.kind,
          path: str(e.path, 500) ?? "/",
          page_title: str(e.page_title, 300),
          referrer: str(e.referrer, 2000),
          element: str(e.element, 200),
          element_text: str(e.element_text, 300),
          href: str(e.href, 2000),
          value: num(e.value),
          meta: e.meta && typeof e.meta === "object" ? e.meta : {},
        })),
      );
    }

    // Keep the legacy thin log alive so /admin keeps working unchanged.
    if (!isBot) {
      const pageViews = events.filter((e) => e.kind === "page_view");
      for (const view of pageViews) {
        await supabase
          .rpc("log_page_visit", {
            p_visitor_id: visitorId,
            p_page_path: str(view.path, 500) ?? "/",
            p_referrer: str(s.landing_referrer, 2000),
          })
          .then(
            () => undefined,
            () => undefined,
          );
      }
    }

    return Response.json({ ok: true, events: events.length });
  } catch (error) {
    console.error("[analytics] collect failed:", error);
    // Still a 200 — a failed telemetry write must never look like a broken
    // site to the browser, and the tracker has no useful retry to make.
    return Response.json({ ok: false }, { status: 200 });
  }
}
