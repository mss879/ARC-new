import type { CSSProperties } from "react";
import { ArrowUpRight, Check } from "lucide-react";

/**
 * The small looping picture inside each "How we work" card, one per stage:
 *
 *   discovery  the four things we learn about a client, ticked off in turn
 *   kickoff    a plan taking shape: three bars filling in along a timeline
 *   refine     a design, two pieces of feedback arriving, then both resolved
 *   grow       a bar chart climbing after launch
 *
 * Decoration only (hidden from screen readers; the card's own words say what
 * the stage is). Everything is plain HTML moved with transform and opacity,
 * so the browser's compositor runs it; the styles are under "Process
 * visuals" in src/index.css. Each picture's resting state is its finished
 * state, which is what reduced-motion visitors see.
 */
export type ProcessVisualKind = "discovery" | "kickoff" | "refine" | "grow";

/** `--i` is the element's place in the sequence; the CSS turns it into a delay. */
const order = (index: number, extra: Record<string, string> = {}) => ({ "--i": index, ...extra }) as CSSProperties;

const TOPICS = ["Goals", "Pain points", "Audience", "What sets you apart"];

const PLAN = [
  { start: "0%", width: "62%", tone: "" },
  { start: "22%", width: "50%", tone: "pv-bar--mid" },
  { start: "52%", width: "44%", tone: "pv-bar--accent" },
];

const GROWTH = ["26%", "38%", "33%", "50%", "60%", "74%"];

export default function ProcessVisual({ kind }: { kind: ProcessVisualKind }) {
  if (kind === "discovery") {
    return (
      <div className="pv pv-discovery" aria-hidden="true">
        {TOPICS.map((topic, index) => (
          <span key={topic} className="pv-chip">
            <span className="pv-chip__mark">
              <span className="pv-chip__tick" style={order(index)}>
                <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
              </span>
            </span>
            {topic}
          </span>
        ))}
      </div>
    );
  }

  if (kind === "kickoff") {
    return (
      <div className="pv pv-kickoff" aria-hidden="true">
        <div className="pv-ticks">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        {PLAN.map((bar, index) => (
          <div key={bar.start} className="pv-track">
            <span className={`pv-bar ${bar.tone}`} style={order(index, { "--x": bar.start, "--w": bar.width })} />
          </div>
        ))}
        <span className="pv-marker" />
      </div>
    );
  }

  if (kind === "refine") {
    return (
      <div className="pv pv-refine" aria-hidden="true">
        {/* The design being shared */}
        <div className="pv-frame">
          <span className="pv-shot" />
          <span className="pv-copy">
            <span />
            <span />
            <span className="pv-cta" />
          </span>
        </div>
        {/* Feedback arriving, then being resolved */}
        <div className="pv-notes">
          {[0, 1].map((index) => (
            <span key={index} className="pv-note" style={order(index)}>
              <span className="pv-note__dot">
                <span className="pv-note__done" style={order(index)}>
                  <Check className="h-2 w-2" strokeWidth={4} />
                </span>
              </span>
              <span className="pv-note__lines">
                <span />
                <span />
              </span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pv pv-grow" aria-hidden="true">
      {GROWTH.map((height, index) => {
        const last = index === GROWTH.length - 1;
        return (
          <span key={index} className="pv-col" style={{ "--h": height } as CSSProperties}>
            {last && (
              <span className="pv-rise">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.6} />
              </span>
            )}
            <span className={`pv-col__bar ${last ? "pv-col__bar--top" : ""}`} style={order(index)} />
          </span>
        );
      })}
    </div>
  );
}
