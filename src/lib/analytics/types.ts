/**
 * Shared shapes for the first-party analytics pipeline.
 *
 * The same file is read by the browser tracker and by the collector
 * route, so a field renamed here fails to compile on both sides
 * rather than silently dropping a column.
 */

/** Every event the tracker can emit. */
export type AnalyticsEventKind =
  | "session_start"
  | "page_view"
  | "page_exit"
  | "scroll_depth"
  | "click"
  | "cta_click"
  | "outbound_click"
  | "download"
  | "tel_click"
  | "mailto_click"
  | "whatsapp_click"
  | "form_start"
  | "form_field"
  /** A press of the submit button, whether or not it went anywhere. */
  | "form_attempt"
  | "form_abandon"
  /** A send the server accepted — only ever reported by the form itself. */
  | "form_submit"
  | "chat_open"
  | "chat_message"
  | "video_play"
  | "video_complete"
  | "search"
  | "copy"
  | "rage_click"
  | "dead_click"
  | "exit_intent"
  | "error"
  | "web_vital"
  | "conversion"
  | "session_end";

/** How a visitor arrived. Last-touch on the session, first-touch on the visitor. */
export type AnalyticsChannel =
  | "direct"
  | "organic"
  | "paid_search"
  | "paid_social"
  | "social"
  | "email"
  | "referral"
  | "affiliate"
  | "ai_assistant"
  | "internal"
  | "unknown";

export type DeviceType = "desktop" | "mobile" | "tablet" | "bot" | "unknown";

/** One event as it leaves the browser. */
export type TrackedEvent = {
  kind: AnalyticsEventKind;
  seq: number;
  occurred_at: string;
  path: string;
  page_title?: string | null;
  referrer?: string | null;
  element?: string | null;
  element_text?: string | null;
  href?: string | null;
  value?: number | null;
  meta?: Record<string, unknown>;
};

/**
 * The session envelope. Sent with every batch so the collector can
 * upsert the session row without keeping any server-side state —
 * which matters on serverless, where there is no state to keep.
 */
export type SessionContext = {
  session_id: string;
  visitor_id: string;
  site: string;

  entry_path: string;
  landing_page_title?: string | null;
  landing_referrer?: string | null;
  referrer_domain?: string | null;
  channel: AnalyticsChannel;

  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  gclid?: string | null;
  fbclid?: string | null;
  msclkid?: string | null;
  first_touch_channel?: string | null;
  first_touch_campaign?: string | null;

  device_type: DeviceType;
  browser?: string | null;
  browser_version?: string | null;
  os?: string | null;
  os_version?: string | null;
  screen_w?: number | null;
  screen_h?: number | null;
  viewport_w?: number | null;
  viewport_h?: number | null;
  device_pixel_ratio?: number | null;
  language?: string | null;
  timezone?: string | null;
  connection_type?: string | null;
};

/** Rolling per-session counters, recomputed in the browser and sent each flush. */
export type SessionProgress = {
  exit_path: string;
  page_count: number;
  duration_seconds: number;
  engaged_seconds: number;
  max_scroll_pct: number;
  forms_started: number;
  forms_abandoned: number;
  outbound_clicks: number;
  rage_clicks: number;
  chat_engaged: boolean;
  chat_message_count: number;
  converted: boolean;
  conversion_kind?: string | null;
  identified_email?: string | null;
  /**
   * Client-side only. Every conversion this session has recorded, by lead
   * id, so a second click on the same WhatsApp link or a re-report of the
   * same success is not a second conversion. The collector ignores it.
   */
  lead_ids?: string[];
};

/** The POST body of /api/analytics/collect. */
export type CollectPayload = {
  session: SessionContext;
  progress: SessionProgress;
  events: TrackedEvent[];
};
