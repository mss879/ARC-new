"use client";

import MockFrame from "./MockFrame";
import { countTo, useDemoTimeline } from "@/components/gsap/useDemoTimeline";

const KPIS = [
  { label: "Income this month", value: 4.82 },
  { label: "Cash at bank", value: 2.31 },
  { label: "Customers owe you", value: 1.16 },
  { label: "Stock value", value: 3.4 },
];

/** Weekly income, as a share of the tallest bar. */
const BARS = [42, 58, 51, 67, 60, 78, 71, 92];

const millions = (value: number) => `Rs. ${value.toFixed(2)}M`;

/**
 * The owner's dashboard: figures arrive, a purchase order asks for approval,
 * it is approved, and the ledger entry posts itself.
 *
 * Narrow frame: figures two by two, chart above the approval.
 * Wide frame: four figures in a row, chart beside the approval.
 */
export default function ErpMock() {
  const scope = useDemoTimeline<HTMLDivElement>((timeline, select) => {
    const figures = select("[data-s='figure']");

    timeline.from(select("[data-s='kpi']"), { autoAlpha: 0, y: 14, stagger: 0.1 });
    KPIS.forEach((kpi, index) => {
      countTo(timeline, figures[index], { from: 0, to: kpi.value, format: millions }, 0.15 + index * 0.1, 1.1);
    });

    timeline
      .from(
        select("[data-s='bar']"),
        { scaleY: 0, transformOrigin: "center bottom", stagger: 0.06, duration: 0.6, ease: "power2.out" },
        0.5,
      )
      .from(select("[data-s='request']"), { autoAlpha: 0, x: 18 }, 1.5)
      .to(select("[data-s='approve']"), { autoAlpha: 1, duration: 0.15 }, "<")
      .fromTo(
        select("[data-s='approve']"),
        { scale: 1 },
        { scale: 0.92, duration: 0.12, yoyo: true, repeat: 1 },
        "+=1.0",
      )
      .to(select("[data-s='approve']"), { autoAlpha: 0, duration: 0.2 }, "+=0.05")
      .from(select("[data-s='approved']"), { autoAlpha: 0, y: 4, duration: 0.3 }, "<")
      .from(select("[data-s='posting']"), { autoAlpha: 0, y: 8, stagger: 0.18 }, "+=0.25")
      .from(select("[data-s='assistant']"), { autoAlpha: 0, y: 10 }, "+=0.35");
  });

  return (
    <div ref={scope}>
      <MockFrame
        title="ERP · Dashboard"
        description="Illustration: an ERP dashboard showing income, cash, receivables and stock value, with a weekly income chart. A purchase order asks for approval, a manager approves it, the ledger entry is posted automatically, and an AI assistant points out overdue invoices."
      >
        {/* KPI tiles */}
        <div className="grid grid-cols-2 gap-2.5 screen-wide:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              data-s="kpi"
              className="flex min-w-0 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 screen-wide:p-2.5"
            >
              <p className="text-[10px] uppercase leading-tight tracking-wider text-zinc-500">{kpi.label}</p>
              <p
                data-s="figure"
                className="mt-2 whitespace-nowrap text-lg font-black tabular-nums text-white screen-wide:text-[length:clamp(0.8rem,2.9cqw,1.3rem)]"
              >
                {millions(kpi.value)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 screen-wide:grid-cols-[1fr_1.4fr]">
          {/* Chart */}
          <div className="flex min-w-0 flex-col rounded-xl border border-white/10 bg-black/40 p-3">
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Income, last 8 weeks</p>
            <div className="mt-3 flex h-24 flex-1 items-end gap-1.5">
              {BARS.map((height, index) => (
                <span
                  key={index}
                  data-s="bar"
                  className={`flex-1 rounded-t-sm ${
                    index === BARS.length - 1 ? "bg-[rgb(255,73,37)]" : "bg-white/15"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Approval and posting */}
          <div className="min-w-0 rounded-xl border border-white/10 bg-black/40 p-3">
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Reorder needs your approval</p>
            <div
              data-s="request"
              className="mt-2 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5"
            >
              <div className="min-w-0">
                <p className="whitespace-nowrap text-[12px] font-semibold text-white">PO-0231</p>
                <p className="whitespace-nowrap text-[11px] text-zinc-500">Rs. 184,500</p>
              </div>
              <div className="relative h-6 w-[5.75rem] shrink-0 text-[11px] font-semibold">
                <span
                  data-s="approve"
                  className="invisible absolute inset-0 flex items-center justify-center rounded-full bg-[rgb(255,73,37)] font-bold text-black opacity-0"
                >
                  Approve
                </span>
                <span
                  data-s="approved"
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap rounded-full border border-green-500/40 bg-green-500/10 text-green-400"
                >
                  ✓ Approved
                </span>
              </div>
            </div>
            <ul className="mt-2.5 space-y-1 font-mono text-[10.5px] text-zinc-400">
              <li data-s="posting" className="flex justify-between gap-2">
                <span>Dr Inventory</span>
                <span className="tabular-nums text-zinc-200">184,500</span>
              </li>
              <li data-s="posting" className="flex justify-between gap-2">
                <span>Cr Supplier payable</span>
                <span className="tabular-nums text-zinc-200">184,500</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Assistant */}
        <div
          data-s="assistant"
          className="mt-3 flex items-start gap-2.5 rounded-xl border border-[rgb(255,73,37)]/30 bg-[rgb(255,73,37)]/10 px-3 py-2.5"
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgb(255,73,37)] text-[9px] font-black text-black">
            AI
          </span>
          <p className="text-[12px] leading-snug text-zinc-200">
            Three invoices are more than 30 days overdue. Shall I draft the reminders for you to review?
          </p>
        </div>
      </MockFrame>
    </div>
  );
}
