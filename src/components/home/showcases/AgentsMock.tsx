"use client";

import MockFrame from "./MockFrame";
import { useDemoTimeline } from "@/components/gsap/useDemoTimeline";

const customerBubble =
  "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-ink px-3.5 py-2.5 text-[13px] leading-snug text-paper-white";
const agentBubble =
  "max-w-[88%] rounded-2xl rounded-bl-md border border-[rgb(255,73,37)]/30 bg-[rgb(255,73,37)]/10 px-3.5 py-2.5 text-[13px] leading-snug text-ink";

const VOICE_BARS = [0.35, 0.7, 1, 0.55, 0.85, 0.4, 0.95, 0.6, 0.3, 0.8, 0.5, 0.9, 0.45, 0.65];

/**
 * An AI agent taking an order on WhatsApp, then a voice call in progress.
 *
 * The sequence is the point of the demo: the agent looks things up before it
 * answers, drafts the order, and a person approves it.
 */
export default function AgentsMock() {
  const scope = useDemoTimeline<HTMLDivElement>((timeline, select) => {
    timeline
      .from(select("[data-s='q1']"), { autoAlpha: 0, y: 14 })
      .to(select("[data-s='typing']"), { autoAlpha: 1, duration: 0.2 }, "+=0.35")
      .from(select("[data-s='lookup']"), { autoAlpha: 0, x: -10, stagger: 0.35 }, "+=0.15")
      .to(select("[data-s='typing']"), { autoAlpha: 0, duration: 0.15 }, "+=0.45")
      .from(select("[data-s='a1']"), { autoAlpha: 0, y: 10 }, "<")
      .from(select("[data-s='q2']"), { autoAlpha: 0, y: 14 }, "+=0.9")
      .from(select("[data-s='order']"), { autoAlpha: 0, scale: 0.96, transformOrigin: "left top" }, "+=0.45")
      .to(select("[data-s='pending']"), { autoAlpha: 1, duration: 0.15 }, "<")
      .to(select("[data-s='pending']"), { autoAlpha: 0, duration: 0.2 }, "+=1.1")
      .from(select("[data-s='approved']"), { autoAlpha: 0, y: 4, duration: 0.3 }, "<")
      .from(select("[data-s='voice']"), { autoAlpha: 0, y: 12 }, "+=0.3");
  });

  return (
    <div ref={scope}>
      <MockFrame
        title="WhatsApp · AI agent"
        description="Illustration: an AI agent on WhatsApp checks stock and delivery before answering a customer, drafts the order, and a staff member approves it. Below, a voice agent confirms a service booking on a phone call."
      >
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-ink/10 pb-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(255,73,37)] text-xs font-black text-black">
            AI
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">Your shop&apos;s agent</p>
            <p className="flex items-center gap-1.5 text-[11px] text-ink-mute">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Online, day and night
            </p>
          </div>
          <div className="ml-auto hidden shrink-0 gap-1.5 screen-wide:flex">
            {["English", "සිංහල", "தமிழ்"].map((language) => (
              <span
                key={language}
                className="rounded-full border border-ink/10 px-2 py-0.5 text-[10px] text-ink-mute"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Conversation */}
        <div className="space-y-2.5 py-4">
          <p data-s="q1" className={customerBubble}>
            Is the 2-door fridge in stock? Can you deliver to Kandy tomorrow?
          </p>

          <div className="flex flex-wrap gap-1.5">
            {["Checked stock: 4 available", "Checked delivery: Kandy, tomorrow"].map((lookup) => (
              <span
                key={lookup}
                data-s="lookup"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-ink/10 bg-white px-2.5 py-1 text-[11px] text-ink-mute"
              >
                <span className="text-green-600">✓</span>
                {lookup}
              </span>
            ))}
          </div>

          <div className="relative">
            <span
              data-s="typing"
              className="invisible absolute left-0 top-0 inline-flex gap-1 rounded-2xl rounded-bl-md border border-ink/10 bg-white px-3.5 py-3 opacity-0"
            >
              <span className="demo-dot h-1.5 w-1.5 rounded-full bg-ink-mute" />
              <span className="demo-dot h-1.5 w-1.5 rounded-full bg-ink-mute [animation-delay:150ms]" />
              <span className="demo-dot h-1.5 w-1.5 rounded-full bg-ink-mute [animation-delay:300ms]" />
            </span>
            <p data-s="a1" className={agentBubble}>
              Yes, 4 in stock. We can deliver to Kandy tomorrow before 5 PM. Shall I book it for you?
            </p>
          </div>

          <p data-s="q2" className={customerBubble}>
            Yes please.
          </p>

          <div
            data-s="order"
            className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-3.5 py-3"
          >
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-ink">Order #1042 drafted</p>
              <p className="truncate text-[11px] text-ink-mute">Fridge × 1 · Kandy</p>
            </div>
            <div className="relative ml-auto h-6 w-[7.5rem] shrink-0 whitespace-nowrap text-[11px] font-semibold">
              <span
                data-s="pending"
                className="invisible absolute inset-0 flex items-center justify-center rounded-full border border-amber-600/40 bg-amber-500/10 text-amber-700 opacity-0"
              >
                Waiting for staff
              </span>
              <span
                data-s="approved"
                className="absolute inset-0 flex items-center justify-center rounded-full border border-green-600/30 bg-green-500/10 text-green-700"
              >
                ✓ Approved
              </span>
            </div>
          </div>
        </div>

        {/* Voice call */}
        <div
          data-s="voice"
          className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-3.5 py-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ember/15 text-ember-deep">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-wider text-ink-mute">Voice call · 00:42</p>
            <p className="text-[13px] leading-snug text-ink">
              &ldquo;Your service visit is booked for Friday at 10.&rdquo;
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center gap-[3px]">
            {VOICE_BARS.map((height, index) => (
              <span
                key={index}
                className="demo-voice-bar w-[3px] rounded-full bg-[rgb(255,73,37)]"
                style={{ height: `${height * 100}%`, animationDelay: `${index * 90}ms` }}
              />
            ))}
          </div>
        </div>
      </MockFrame>
    </div>
  );
}
