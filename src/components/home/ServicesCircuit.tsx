"use client";

import { Cpu, LayoutDashboard, MessagesSquare, Mic, ScanBarcode, ShoppingBag, Workflow } from "lucide-react";
import { useOffscreenPause } from "./useOffscreenPause";

/**
 * The small animation under the services heading: one core, with the ARC AI logo under it,
 * wired to six kinds of work, with a signal travelling out along each wire in turn.
 *
 * It is decoration (hidden from screen readers) and is built to cost almost
 * nothing: the wires are a static drawing, and the only things that move are
 * six dots and the nodes they reach, animated with transform and opacity
 * alone so the browser's compositor runs them. The loop stops while the
 * widget is off screen and does not run at all for reduced motion.
 *
 * Positions are percentages of the widget and distances are in cqw (hundredths
 * of the widget's width), so it scales with the column it sits in.
 */
const NODES = [
  { icon: MessagesSquare, side: "left", row: "top" },
  { icon: Mic, side: "left", row: "mid" },
  { icon: Workflow, side: "left", row: "bottom" },
  { icon: LayoutDashboard, side: "right", row: "top" },
  { icon: ScanBarcode, side: "right", row: "mid" },
  { icon: ShoppingBag, side: "right", row: "bottom" },
] as const;

export default function ServicesCircuit() {
  const ref = useOffscreenPause<HTMLDivElement>();

  return (
    <div ref={ref} className="svc-circuit" aria-hidden="true">
      {/* Wires */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 68" preserveAspectRatio="none" fill="none">
        <path
          d="M40 34H15.5M26 9V59M26 9H15.5M26 59H15.5M60 34H84.5M74 9V59M74 9H84.5M74 59H84.5"
          stroke="rgba(27,26,23,0.18)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Signals */}
      {NODES.map((node, index) => (
        <span
          key={`pulse-${index}`}
          className={`svc-pulse svc-pulse--${node.side} svc-pulse--${node.row}`}
          style={{ animationDelay: `${index * -0.55}s` }}
        />
      ))}

      {/* Core */}
      <span className="svc-core">
        <Cpu className="h-[46%] w-[46%]" strokeWidth={1.8} />
      </span>
      {/* The ARC AI logo under the chip: the black-"ARC" version for this light
          panel, trimmed to its artwork (public/arc-ai-logo-trim.webp). */}
      <img className="svc-core-label" src="/arc-ai-logo-trim.webp" alt="" width={320} height={80} decoding="async" />

      {/* Nodes */}
      {NODES.map((node, index) => {
        const Icon = node.icon;
        return (
          <span key={`node-${index}`} className={`svc-node svc-node--${node.side} svc-node--${node.row}`}>
            <span className="svc-node__dot" style={{ animationDelay: `${index * -0.55}s` }}>
              <Icon className="h-[44%] w-[44%]" strokeWidth={2} />
            </span>
          </span>
        );
      })}
    </div>
  );
}
