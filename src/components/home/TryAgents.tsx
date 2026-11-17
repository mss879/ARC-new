"use client";

import { MessageCircle, Mic } from "lucide-react";

import { whatsapp } from "@/content/site-facts";
import PauseOffscreen from "./PauseOffscreen";

/**
 * "Don't read about it. Talk to it.": the site's own working agents, put
 * where a visitor has just watched the five previews. The chat and voice
 * buttons open the floating agent capsule (StickyAiPill listens for the
 * "arc:open-agent" event); WhatsApp opens the agent's own number.
 *
 * The small pictures are CSS loops under "Try the agents" in src/index.css
 * (transform and opacity only, paused off screen, still for reduced motion).
 */

const openAgent = (mode: "chat" | "voice", prompt?: string) =>
  window.dispatchEvent(new CustomEvent("arc:open-agent", { detail: { mode, prompt } }));

/** Questions a visitor can send with one tap; the chat opens with it typed in. */
const TRY_ASKING = [
  "What could an AI agent do for a restaurant?",
  "Can your systems work in Sinhala and Tamil?",
  "How does a project with you start?",
];

export default function TryAgents() {
  return (
    <section
      id="try-agents"
      className="render-when-near relative px-4 py-16 md:px-8 lg:px-20 lg:py-24"
      aria-labelledby="try-agents-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Two lines, each kept on one row. "Don't read about it." is about
            8 times as wide as the font size, too long for half the width, so
            the heading takes the full width (like "The system, and the AI
            inside it") and its size is capped at 1/8.2 of that width (cqw),
            shrinking only on screens too narrow for the usual size. */}
        <div className="[container-type:inline-size]">
          <h2
            id="try-agents-heading"
            className="text-[length:min(3rem,100cqw/8.2)] font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-[length:min(3.75rem,100cqw/8.2)] md:text-[length:min(4.5rem,100cqw/8.2)] lg:text-[length:min(5.5rem,100cqw/8.2)]"
          >
            <span className="block whitespace-nowrap">Don&apos;t read about it.</span>
            <span className="block whitespace-nowrap text-ember-ink">Talk to it.</span>
          </h2>
        </div>
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-16">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl lg:col-start-2">
            The chat and voice agents on this site are working agents, not recordings. Ask them what you&apos;d
            ask us, or message the one on WhatsApp.
          </p>
        </div>

        <PauseOffscreen className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3">
          {/* Chat */}
          <article className="cream-card [--cut:22px] flex flex-col p-6 lg:p-7">
            <div className="flex h-40 items-center" aria-hidden="true">
              <div className="ta ta-chat">
                <p className="ta-msg ta-msg--you">What could an AI agent do for my shop?</p>
                <div className="ta-msg ta-msg--agent">
                  <span className="ta-line" style={{ "--w": "92%" } as React.CSSProperties} />
                  <span className="ta-line" style={{ "--w": "78%", "--i": 1 } as React.CSSProperties} />
                  <span className="ta-line" style={{ "--w": "54%", "--i": 2 } as React.CSSProperties} />
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">Chat with it</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Type a question and get a straight answer, at any hour.
            </p>
            <div className="mt-auto pt-6">
              <button type="button" onClick={() => openAgent("chat")} className="pill-btn pill-btn--ink">
                Start a chat
                <span className="pill-btn__dot" aria-hidden="true">
                  <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </span>
              </button>
            </div>
          </article>

          {/* Voice: the one dark card */}
          <article className="ink-card [--cut:22px] flex flex-col p-6 lg:p-7">
            <div className="flex h-40 items-center" aria-hidden="true">
              <div className="ta ta-voice">
                <div className="ta-wave">
                  {[0.45, 0.8, 0.6, 1, 0.7, 0.9, 0.5, 0.75, 0.4].map((height, i) => (
                    <span key={i} style={{ "--h": height, "--i": i } as React.CSSProperties} />
                  ))}
                </div>
                <p className="ta-voice__state ta-stack">
                  <span>Listening…</span>
                  <span>Answering…</span>
                </p>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.03em] text-paper-white">Talk to it</h3>
            <p className="mt-3 text-base leading-relaxed text-paper-white/70">
              Speak from your browser and it answers out loud. Your browser will ask to use the microphone; calls
              here are kept short.
            </p>
            <div className="mt-auto pt-6">
              <button type="button" onClick={() => openAgent("voice")} className="pill-btn pill-btn--ember">
                Start a voice call
                <span className="pill-btn__dot" aria-hidden="true">
                  <Mic className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </span>
              </button>
            </div>
          </article>

          {/* WhatsApp */}
          <article className="cream-card [--cut:22px] flex flex-col p-6 lg:p-7">
            <div className="flex h-40 items-center" aria-hidden="true">
              <div className="ta ta-wa">
                <p className="ta-wa__msg ta-wa__msg--in">
                  Hi, can I book a call this week?<small>10:02</small>
                </p>
                <p className="ta-wa__msg ta-wa__msg--out">
                  Of course. Which day suits you best?
                  <small>
                    10:02
                    <span className="ta-ticks">
                      <span>✓✓</span>
                      <span>✓✓</span>
                    </span>
                  </small>
                </p>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">Message it on WhatsApp</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Our WhatsApp agent answers on {whatsapp.agent.display}, the way it would for your customers.
            </p>
            <div className="mt-auto pt-6">
              <a
                href={whatsapp.agent.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2.5 bg-[#25D366] px-5 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-[#3BE07E]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.204.001 6.212 1.247 8.473 3.509 2.26 2.262 3.505 5.27 3.504 8.469-.003 6.6-5.34 11.937-11.949 11.937-2.006-.001-3.98-.505-5.729-1.462L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Message {whatsapp.agent.display}
              </a>
            </div>
          </article>
        </PauseOffscreen>

        {/* One-tap questions: the chat opens with the question typed in. */}
        <div className="mt-8 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:items-center lg:gap-4">
          <p className="shrink-0 text-sm font-medium text-ink-mute">Not sure what to ask? Try:</p>
          <div className="flex flex-wrap gap-2">
            {TRY_ASKING.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => openAgent("chat", question)}
                className="cut-btn [--cut:8px] [--cut-line:rgba(27,26,23,0.2)] hover:[--cut-line:rgba(255,73,37,0.6)] bg-white/60 px-4 py-2.5 text-left text-sm text-ink transition-colors hover:bg-white"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
