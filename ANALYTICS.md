# First-party analytics

This site records its own visitor analytics into its own Supabase project. The
ARC AI CRM then mirrors that data into its **Web Analytics** page, where it is
analysed alongside leads, clients and revenue.

Google Analytics (`G-0447V2XK5V`) and the Meta Pixel are still installed and
still work. This exists alongside them, because GA4 answers "how many" and will
not hand back the raw event stream needed to answer "who, from where, in what
order, and did it turn into anything".

---

## Setup

### 1. Create the tables

Run `supabase_web_analytics_migration.sql` in this project's Supabase SQL
editor. It creates `analytics_sessions` and `analytics_events`.

The existing `page_visits` table is **not** changed and is still written to on
every page view, so the `/admin` dashboard keeps working exactly as before.

### 2. Environment

```
ANALYTICS_IP_SALT=<a long random string>
```

Salts the SHA-256 of the visitor's IP so returning visitors can be counted
without ever storing an identifier. Set it once and leave it — changing it
resets returning-visitor detection.

`NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are already set and
are what the collector writes with.

---

## The pieces

| File | What it does |
| --- | --- |
| `src/lib/analytics/types.ts` | Shared shapes — read by both the browser and the collector, so a renamed field fails to compile on both sides |
| `src/lib/analytics/tracker.ts` | The browser engine: sessionisation, attribution, instrumentation, batching |
| `src/components/AnalyticsTracker.tsx` | Mounts the engine and reports client-side route changes |
| `src/app/api/analytics/collect/route.ts` | Batched ingest with edge geo, bot filtering and IP hashing |

`PageTracker` has been replaced by `AnalyticsTracker` in `src/app/layout.tsx`.
Running both would double every hit, and the collector writes the legacy
`page_visits` row itself.

---

## What is recorded

Sessions carry: entry and exit page, page count, wall-clock duration, **engaged
time** (only counted while the tab is visible and the visitor has interacted in
the last 30 seconds), max scroll, referrer and channel, the full UTM set,
`gclid`/`fbclid`/`msclkid`, first-touch attribution, device / browser / OS /
screen / viewport / language / timezone, country / region / city, conversion
state, chat engagement, and any email the visitor typed.

Events cover: `page_view`, `page_exit`, `scroll_depth`, `click`, `cta_click`,
`outbound_click`, `download`, `tel_click`, `mailto_click`, `whatsapp_click`,
`form_start`, `form_field`, `form_attempt`, `form_abandon`, `form_submit`,
`chat_open`, `chat_message`, `video_play`, `copy`, `rage_click`, `dead_click`,
`exit_intent`, `error`, `web_vital`, `conversion`, `session_start`,
`session_end`.

---

## Conversions — what counts, and why the numbers reconcile

A conversion is a **confirmed outcome**, never an inference from a DOM event.
The tracker's own listeners only ever record `form_start` (first focus),
`form_field`, `form_attempt` (every press of the submit button) and
`form_abandon`. `form_submit` and `conversion` are recorded by the form
component itself, after the server accepted the send, through
`trackFormSubmitted`. That is what makes `form_start ≥ form_submit` an
invariant: a success reported for a form nobody focused gets an implicit
start first and is flagged `untouched`.

Every conversion kind has a category:

| Category | Kinds | Effect |
| --- | --- | --- |
| `enquiry` | `contact_form`, `chat_lead`, `job_request`, `proposal_request` | Marks the session `converted`; counted as a conversion by the CRM unless a person marks it spam or test |
| `contact_click` | `whatsapp_click`, `call_click`, `email_click` | Intent, not a conversion. Listed in the CRM's lead ledger to confirm or dismiss; once per session per kind |
| `other` | `newsletter`, `career_application`, `review` | A `form_submit`, never a conversion |

Every `conversion` event carries a `lead_id` in its `meta`. An enquiry form
mints it **before** the request (`newLeadId()`) and sends it to the CRM with
the enquiry, so the analytics row and the CRM lead share one key. A contact
click derives it from the session (`whatsapp_click:<session_id>`), so ten
clicks on the same button are one conversion.

Forms opt in by naming themselves: `<form data-form="contact_form">`. A form
that is not a form in the visitor's sense — the chat box's message input —
carries `data-analytics-ignore` and is left alone entirely, as is any control
that reports itself (the floating WhatsApp button).

The three footer / contact / project forms, the careers modal and the review
page all follow this contract; see `src/components/ContactForm.tsx` for the
enquiry shape (lead id + analytics ids sent to the CRM webhook).

---

## Testing a form or a WhatsApp route

Add `?arc_test=1` to any page on the live site. For the rest of that visit:

- every event carries `meta.test = true`, and the CRM's lead ledger files the
  resulting conversions as **tests**, not leads;
- the event stream is mirrored to `window.__arcAnalyticsLog` in the console,
  so you can watch `form_start → form_attempt → form_submit → conversion`
  arrive with the same `lead_id` on the last two.

`?arc_test=0` turns it off. Deploy previews, branch deploys and `next dev`
never reach the CRM at all: anything not served from `www.arcai.agency` is
labelled `arcai.agency:preview`, and the CRM filters on the bare label.

---

## Recording something custom

```ts
import {
  trackEvent,
  trackFormSubmitted,
  trackContactClick,
  newLeadId,
  getAnalyticsIdentity,
  identifyVisitor,
} from "@/lib/analytics/tracker";

trackEvent("cta_click", { element_text: "Book a call", meta: { placement: "hero" } });

// An enquiry form: mint the id, send it with the request, report success only.
const leadId = newLeadId();
await fetch("/api/contact", {
  method: "POST",
  body: JSON.stringify({ ...fields, lead_id: leadId, ...getAnalyticsIdentity() }),
});
trackFormSubmitted("proposal_form", "proposal_request", { lead_id: leadId });

// A button that opens WhatsApp itself (an <a href="https://wa.me/…"> needs nothing).
trackContactClick("whatsapp_click", href, { surface: "pricing_table" });

identifyVisitor("someone@example.com");
```

Conversions are also mirrored into GA4 automatically, so the ad platforms that
read from GA still see them.

---

## Behaviour under failure

The tracker never throws into the page. Blocked storage, a refused beacon, a
CSP that stops a request — all degrade to recording nothing rather than to an
error on a marketing site. The collector returns `200` even when its write
fails, because a broken telemetry write must not look like a broken site.

---

## Privacy

No raw IP is stored. Geography is coarse and comes from the CDN edge headers,
not from a lookup we perform. `/admin` is not tracked. Bots are flagged on the
way in and excluded from every rolled-up figure downstream.

To trim the raw tables once the CRM holds the history:

```sql
select public.prune_analytics(180);
```
