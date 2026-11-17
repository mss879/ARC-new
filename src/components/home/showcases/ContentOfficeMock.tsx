"use client";

import MockFrame from "./MockFrame";
import { typeText, useDemoTimeline } from "@/components/gsap/useDemoTimeline";

const BRIEF = "12 posts for our Avurudu offers";

const DESKS = [
  { role: "Director", status: "Plan agreed" },
  { role: "Researcher", status: "Trends found" },
  { role: "Writer", status: "Captions drafted" },
  { role: "Designer", status: "Designs ready" },
  { role: "Checker", status: "Facts checked" },
  { role: "Publisher", status: "Scheduled" },
];

/** A four-week calendar; these days have a post planned. */
const DAYS = 28;
const PLANNED = new Set([0, 2, 5, 8, 10, 13, 15, 16, 19, 22, 24, 26]);

/**
 * A one-line brief turning into a month of posts: each desk in the office
 * takes its turn, the calendar fills, and nothing is published until the
 * owner approves.
 *
 * Narrow frame: desks two across, calendar above the approval.
 * Wide frame: desks three across, calendar beside the approval.
 */
export default function ContentOfficeMock() {
  const scope = useDemoTimeline<HTMLDivElement>((timeline, select) => {
    const desks = select("[data-s='desk']");
    const statuses = select("[data-s='status']");

    typeText(timeline, select("[data-s='brief']")[0], BRIEF, 0.2);

    const start = 0.2 + BRIEF.length * 0.035 + 0.3;
    desks.forEach((desk, index) => {
      const at = start + index * 0.5;
      timeline
        .fromTo(
          desk,
          { borderColor: "rgba(27,26,23,0.1)", backgroundColor: "rgba(255,255,255,1)" },
          { borderColor: "rgba(255,73,37,0.7)", backgroundColor: "rgba(255,73,37,0.12)", duration: 0.25 },
          at,
        )
        .from(statuses[index], { autoAlpha: 0, y: 4, duration: 0.25 }, at + 0.15)
        .to(
          desk,
          { borderColor: "rgba(27,26,23,0.1)", backgroundColor: "rgba(255,255,255,1)", duration: 0.4 },
          at + 0.5,
        );
    });

    timeline
      .from(
        select("[data-s='post']"),
        { autoAlpha: 0, scale: 0, stagger: 0.07, duration: 0.3, ease: "back.out(2.5)" },
        start + 1.2,
      )
      .from(select("[data-s='approval']"), { autoAlpha: 0, y: 10 }, "+=0.2")
      .to(select("[data-s='approve']"), { autoAlpha: 1, duration: 0.15 }, "<")
      .fromTo(
        select("[data-s='approve']"),
        { scale: 1 },
        { scale: 0.94, duration: 0.12, yoyo: true, repeat: 1 },
        "+=0.9",
      )
      .to(select("[data-s='approve']"), { autoAlpha: 0, duration: 0.2 }, "+=0.05")
      .from(select("[data-s='published']"), { autoAlpha: 0, y: 4, duration: 0.3 }, "<")
      .from(select("[data-s='channel']"), { autoAlpha: 0, y: 4, stagger: 0.12, duration: 0.25 }, "+=0.1");
  });

  return (
    <div ref={scope}>
      <MockFrame
        title="Content Office"
        description="Illustration: the Content Office. The owner types a one-line brief, six AI agents (director, researcher, writer, designer, checker and publisher) each do their part, a month's calendar fills with twelve planned posts, the owner approves them, and they are scheduled to Instagram and Facebook."
      >
        {/* Brief */}
        <div className="flex items-center gap-2.5 rounded-xl border border-ink/10 bg-paper-soft px-3 py-2.5">
          <span className="shrink-0 whitespace-nowrap text-[10px] uppercase tracking-wider text-ink-mute">
            Your brief
          </span>
          <p className="min-h-[1.25rem] min-w-0 flex-1 truncate text-[13px] text-ink">
            <span data-s="brief">{BRIEF}</span>
            <span className="demo-caret ml-0.5 inline-block h-3.5 w-px translate-y-0.5 bg-[rgb(255,73,37)]" />
          </p>
        </div>

        {/* The office floor */}
        <div className="mt-3 grid grid-cols-2 gap-2 screen-wide:grid-cols-3">
          {DESKS.map((desk) => (
            <div
              key={desk.role}
              data-s="desk"
              className="min-w-0 rounded-xl border border-ink/10 bg-white px-3 py-2.5"
            >
              <p className="flex items-center gap-1.5 text-[12px] font-semibold text-ink">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(255,73,37)]" />
                <span className="truncate">{desk.role}</span>
              </p>
              <p data-s="status" className="mt-1 truncate text-[11px] text-ink-mute">
                ✓ {desk.status}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 screen-wide:grid-cols-[1.2fr_1fr]">
          {/* Calendar */}
          <div className="min-w-0 rounded-xl border border-ink/10 bg-paper-soft p-3">
            <p className="text-[10px] uppercase tracking-wider text-ink-mute">April plan</p>
            <div className="mt-2.5 grid grid-cols-7 gap-1">
              {Array.from({ length: DAYS }, (_, day) => (
                <span key={day} className="relative aspect-[3/2] rounded-[3px] bg-ink/[0.06]">
                  {PLANNED.has(day) && (
                    <span data-s="post" className="absolute inset-0 rounded-[3px] bg-[rgb(255,73,37)]" />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Approval */}
          <div
            data-s="approval"
            className="flex min-w-0 flex-col justify-between rounded-xl border border-ink/10 bg-paper-soft p-3"
          >
            <div>
              <p className="text-[12.5px] font-semibold text-ink">12 posts ready</p>
              <p className="text-[11px] leading-snug text-ink-mute">Nothing goes out until you approve.</p>
            </div>
            <div>
              <div className="relative mt-3 h-8 text-[11.5px] font-bold">
                <span
                  data-s="approve"
                  className="invisible absolute inset-0 flex items-center justify-center whitespace-nowrap rounded-lg bg-[rgb(255,73,37)] text-black opacity-0"
                >
                  Approve all
                </span>
                <span
                  data-s="published"
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap rounded-lg border border-green-600/30 bg-green-500/10 text-green-700"
                >
                  ✓ Approved and scheduled
                </span>
              </div>
              <div className="mt-2 flex gap-1.5">
                {["Instagram", "Facebook"].map((channel) => (
                  <span
                    key={channel}
                    data-s="channel"
                    className="rounded-full border border-ink/10 px-2 py-0.5 text-[10px] text-ink-mute"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MockFrame>
    </div>
  );
}
