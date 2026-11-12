import type { ReactNode } from "react";

/**
 * The window the product demos sit in.
 *
 * Every demo on the home page is drawn in code, not a screenshot, and shows
 * invented data. The "Illustrative screen" label says so on the frame itself,
 * so nobody mistakes a demo figure for a client's real one. To a screen reader
 * the whole frame is one image with a description; the fake interface text
 * inside is not read out.
 *
 * The frame is a CSS container named "screen". The demos inside lay themselves
 * out by the frame's width (the `screen-wide:` variant and `cqw` units), so a
 * demo looks right whether its column is narrow or wide, whatever the window.
 */
export default function MockFrame({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={description}
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[rgb(12,12,12)] shadow-[0_30px_90px_-30px_rgba(255,73,37,0.35)] [container-name:screen] [container-type:inline-size]"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-4 py-3" aria-hidden="true">
        {/* The window dots are dropped on a narrow frame to leave the title room. */}
        <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-white/15 screen-wide:block" />
        <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-white/15 screen-wide:block" />
        <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-white/15 screen-wide:block" />
        <span className="min-w-0 truncate text-[11px] font-medium uppercase tracking-wider text-zinc-400 screen-wide:ml-3">
          {title}
        </span>
        <span className="ml-auto shrink-0 whitespace-nowrap pl-3 text-[10px] uppercase tracking-wider text-zinc-600">
          Illustrative screen
        </span>
      </div>
      <div className="p-4 screen-wide:p-5" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
