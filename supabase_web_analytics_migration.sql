-- ============================================================
-- supabase_web_analytics_migration.sql
--
-- FIRST-PARTY WEB ANALYTICS for www.arcai.agency.
--
-- The site already writes a thin `page_visits` row per navigation
-- (visitor_id, page_path, referrer). That answers "how many hits"
-- and nothing else — no sessions, no journeys, no source, no
-- device, no engagement, no conversion. This migration adds the
-- layer that answers WHO visited, WHERE they came from, WHAT they
-- did in order, and WHETHER it turned into anything.
--
--   analytics_sessions : one row per visit. Entry page, exit page,
--                        duration, engaged time, scroll, channel,
--                        UTM/click-ids, device, geo, conversion.
--                        This is the table you join everything to.
--   analytics_events   : the ordered event stream inside a session.
--                        Page views, clicks, scroll milestones, form
--                        starts/abandons/submits, chat, rage clicks,
--                        web vitals, exit intent, conversions.
--
-- `page_visits` is deliberately left alone and still written to by
-- the collector, so the existing /admin dashboard keeps working.
--
-- PRIVACY. No raw IP is ever stored — the collector keeps a salted
-- SHA-256 hash so returning visitors can be counted without holding
-- an identifier. Geo is coarse (country/region/city) and comes from
-- the CDN edge, not from an IP lookup we perform ourselves.
-- ============================================================

-- ---- Sessions ----------------------------------------------
create table if not exists public.analytics_sessions (
  id                 uuid primary key default gen_random_uuid(),

  -- Client-generated ids. session_id rotates after 30 minutes of
  -- inactivity or at UTC midnight; visitor_id persists in
  -- localStorage across sessions, so returning visitors are
  -- countable without a login.
  session_id         text not null unique,
  visitor_id         text not null,
  site               text not null default 'arcai.agency',

  first_seen_at      timestamptz not null default now(),
  last_seen_at       timestamptz not null default now(),

  -- Journey endpoints. entry_path is the landing page (usually '/'),
  -- exit_path the last page seen before the session went quiet.
  entry_path         text not null default '/',
  exit_path          text,
  page_count         integer not null default 0,
  event_count        integer not null default 0,

  -- Wall-clock length vs time the tab was actually visible and
  -- being interacted with. The second number is the honest one.
  duration_seconds   integer not null default 0,
  engaged_seconds    integer not null default 0,
  -- A single-page visit with no meaningful engagement.
  is_bounce          boolean not null default true,
  max_scroll_pct     integer not null default 0,

  -- ---- Acquisition ----
  landing_referrer   text,
  referrer_domain    text,
  -- direct | organic | paid_search | paid_social | social | email |
  -- referral | affiliate | ai_assistant | internal | unknown
  channel            text not null default 'direct',
  utm_source         text,
  utm_medium         text,
  utm_campaign       text,
  utm_term           text,
  utm_content        text,
  gclid              text,
  fbclid             text,
  msclkid            text,
  -- The very first channel this VISITOR ever arrived on, carried
  -- forward on every later session. Last-touch is `channel`;
  -- keeping both is what makes attribution arguable either way.
  first_touch_channel  text,
  first_touch_campaign text,
  landing_page_title   text,

  -- ---- Device / environment ----
  device_type        text not null default 'unknown',   -- desktop|mobile|tablet|bot
  browser            text,
  browser_version    text,
  os                 text,
  os_version         text,
  screen_w           integer,
  screen_h           integer,
  viewport_w         integer,
  viewport_h         integer,
  device_pixel_ratio numeric(4,2),
  language           text,
  timezone           text,
  connection_type    text,
  user_agent         text,

  -- ---- Geography (CDN edge headers, coarse by design) ----
  country            text,
  country_code       text,
  region             text,
  city               text,
  ip_hash            text,

  -- ---- Outcome ----
  converted          boolean not null default false,
  -- contact_form | newsletter | job_request | review | chat_lead |
  -- proposal_request | call_click | whatsapp_click
  conversion_kind    text,
  conversion_at      timestamptz,
  chat_engaged       boolean not null default false,
  chat_message_count integer not null default 0,
  identified_email   text,
  forms_started      integer not null default 0,
  forms_abandoned    integer not null default 0,
  outbound_clicks    integer not null default 0,
  rage_clicks        integer not null default 0,
  is_bot             boolean not null default false,

  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

create index if not exists analytics_sessions_seen_idx
  on public.analytics_sessions (first_seen_at desc);
create index if not exists analytics_sessions_visitor_idx
  on public.analytics_sessions (visitor_id, first_seen_at desc);
create index if not exists analytics_sessions_updated_idx
  on public.analytics_sessions (updated_at desc);
create index if not exists analytics_sessions_channel_idx
  on public.analytics_sessions (channel, first_seen_at desc);
create index if not exists analytics_sessions_converted_idx
  on public.analytics_sessions (converted, first_seen_at desc);

-- ---- Events -------------------------------------------------
create table if not exists public.analytics_events (
  id              bigserial primary key,
  session_id      text not null,
  visitor_id      text not null,
  site            text not null default 'arcai.agency',

  -- Monotonic per session. Two events in the same millisecond still
  -- have a defined order, which is what makes path analysis exact.
  seq             integer not null default 0,
  occurred_at     timestamptz not null default now(),

  kind            text not null,
  path            text not null default '/',
  page_title      text,
  referrer        text,

  -- What was interacted with: a CSS-ish selector, the visible label,
  -- and the destination for links.
  element         text,
  element_text    text,
  href            text,

  -- Scroll percentage, seconds on page, web-vital value, message
  -- length — whatever the event's one number is.
  value           numeric,
  -- Everything else, unflattened: form_id, field, vital rating,
  -- error message, video position, search term.
  meta            jsonb not null default '{}',

  created_at      timestamptz not null default now()
);

create index if not exists analytics_events_session_idx
  on public.analytics_events (session_id, seq);
create index if not exists analytics_events_time_idx
  on public.analytics_events (occurred_at desc);
create index if not exists analytics_events_kind_idx
  on public.analytics_events (kind, occurred_at desc);
create index if not exists analytics_events_path_idx
  on public.analytics_events (path, occurred_at desc);
create index if not exists analytics_events_id_idx
  on public.analytics_events (id);

-- ---- Row Level Security -------------------------------------
-- Writes only ever happen through /api/analytics/collect with the
-- service-role key, which bypasses RLS. Nothing is readable by the
-- anon key, so the public site cannot read back its own analytics.
alter table public.analytics_sessions enable row level security;
alter table public.analytics_events   enable row level security;

do $$
begin
  begin
    create policy "analytics_sessions: authenticated read"
      on public.analytics_sessions for select to authenticated using (true);
  exception when duplicate_object then null; end;
  begin
    create policy "analytics_events: authenticated read"
      on public.analytics_events for select to authenticated using (true);
  exception when duplicate_object then null; end;
end $$;

-- ---- updated_at ---------------------------------------------
create or replace function public.touch_analytics_session()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists analytics_sessions_touch on public.analytics_sessions;
create trigger analytics_sessions_touch
  before update on public.analytics_sessions
  for each row execute function public.touch_analytics_session();

-- ---- Retention ----------------------------------------------
-- The CRM mirrors everything within minutes, so the site only needs
-- a rolling window. Call from a Supabase cron if the tables grow:
--   select public.prune_analytics(180);
create or replace function public.prune_analytics(keep_days integer default 180)
returns void language sql security definer as $$
  delete from public.analytics_events
    where occurred_at < now() - (keep_days || ' days')::interval;
  delete from public.analytics_sessions
    where first_seen_at < now() - (keep_days || ' days')::interval;
$$;
