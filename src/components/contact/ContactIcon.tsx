/**
 * The animated icons on the contact page's information cards. Each is a
 * line icon in the site's style (24px grid, 2px rounded strokes, drawn in
 * the current text colour) with one small looping movement:
 *
 *   mail   the envelope's flap opens and closes
 *   phone  the handset gives a short ring, with two sound waves
 *   pin    the pin hops and a ripple spreads where it lands
 *   clock  the hands turn
 *
 * The movements take turns (each loop is 4.8s, started 1.2s apart) so the
 * four cards never move at once. Styles are under "Contact icons" in
 * src/index.css: transform and opacity only, paused while off screen (the
 * cards sit in a PauseOffscreen) and switched off for reduced motion.
 * A server component: no script.
 */

export type ContactIconKind = "mail" | "phone" | "pin" | "clock";

const SVG_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function ContactIcon({ kind, className = "" }: { kind: ContactIconKind; className?: string }) {
  if (kind === "mail") {
    return (
      <svg {...SVG_PROPS} className={`ci ${className}`}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path className="ci-mail-flap" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }
  if (kind === "phone") {
    return (
      <svg {...SVG_PROPS} className={`ci ${className}`}>
        <path
          className="ci-phone-handset"
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        />
        <path className="ci-phone-wave ci-phone-wave--near" d="M14.05 6A5 5 0 0 1 18 10" />
        <path className="ci-phone-wave ci-phone-wave--far" d="M14.05 2a9 9 0 0 1 8 7.94" />
      </svg>
    );
  }
  if (kind === "pin") {
    return (
      <svg {...SVG_PROPS} className={`ci ${className}`}>
        <ellipse className="ci-pin-ripple" cx="12" cy="22" rx="5" ry="1.4" strokeWidth={1.5} />
        <g className="ci-pin">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </g>
      </svg>
    );
  }
  return (
    <svg {...SVG_PROPS} className={`ci ${className}`}>
      <circle cx="12" cy="12" r="10" />
      <line className="ci-clock-hour" x1="12" y1="12" x2="15.5" y2="14" />
      <line className="ci-clock-minute" x1="12" y1="12" x2="12" y2="6.5" />
    </svg>
  );
}
