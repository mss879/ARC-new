"use client";

import MockFrame from "./MockFrame";
import { countTo, useDemoTimeline } from "@/components/gsap/useDemoTimeline";

const PRODUCTS = [
  { name: "Samba rice 5 kg", price: 1150, sold: true },
  { name: "Milk powder 400 g", price: 880, sold: true },
  { name: "Ceylon tea 200 g", price: 450, sold: true },
  { name: "Coconut oil 1 L", price: 920, sold: false },
  { name: "Soap bar", price: 160, sold: false },
  { name: "Cream crackers", price: 240, sold: false },
];

const CART = PRODUCTS.filter((product) => product.sold);
const TOTAL = CART.reduce((sum, product) => sum + product.price, 0);

// Grouped by hand rather than with toLocaleString: the server and the browser
// must print exactly the same text, and locale data can differ between them.
const rupees = (value: number) =>
  `Rs. ${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

const connectionPill =
  "absolute inset-0 flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border";

/**
 * A sale at the till: three items scanned, the connection drops, the sale
 * still completes, and the till syncs when the connection returns.
 *
 * Narrow frame: product buttons in a row of three, the cart underneath.
 * Wide frame: product buttons on the left, the cart on the right.
 */
export default function PosMock() {
  const scope = useDemoTimeline<HTMLDivElement>((timeline, select) => {
    const taps = select("[data-s='tap']");
    const lines = select("[data-s='line']");
    const total = select("[data-s='total']")[0];

    // The connection pill: "Online" while scanning, "Offline" mid-sale, "Synced" at the end.
    timeline
      .set(select("[data-s='synced']"), { autoAlpha: 0 }, 0)
      .set(select("[data-s='online']"), { autoAlpha: 1 }, 0);

    let running = 0;
    CART.forEach((product, index) => {
      const at = 0.4 + index * 1.0;
      timeline
        .fromTo(taps[index], { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 0.18 }, at)
        .to(taps[index], { autoAlpha: 0, duration: 0.35 }, at + 0.25)
        .from(lines[index], { autoAlpha: 0, x: 16, duration: 0.35 }, at + 0.12);
      countTo(
        timeline,
        total,
        { from: running, to: running + product.price, format: rupees },
        at + 0.12,
        0.45,
      );
      running += product.price;
    });

    timeline
      .to(select("[data-s='online']"), { autoAlpha: 0, duration: 0.2 }, 1.9)
      .to(select("[data-s='offline']"), { autoAlpha: 1, duration: 0.2 }, 1.9)
      .fromTo(
        select("[data-s='pay']"),
        { scale: 1 },
        { scale: 0.94, duration: 0.12, yoyo: true, repeat: 1 },
        3.6,
      )
      .from(select("[data-s='paid']"), { autoAlpha: 0, scale: 1.8, duration: 0.35, ease: "back.out(2)" }, 3.85)
      .from(select("[data-s='receipt']"), { autoAlpha: 0, y: 8 }, 4.2)
      .to(select("[data-s='offline']"), { autoAlpha: 0, duration: 0.2 }, 5.0)
      .to(select("[data-s='synced']"), { autoAlpha: 1, duration: 0.2 }, 5.0);
  });

  return (
    <div ref={scope}>
      <MockFrame
        title="Point of sale · Till 01"
        description="Illustration: a point of sale screen. Three items are scanned into the cart, the internet connection drops, the sale is still completed and paid, and the till syncs when the connection returns."
      >
        {/* Status row */}
        <div className="flex items-center justify-between gap-3 pb-3">
          <p className="min-w-0 truncate text-[11px] uppercase tracking-wider text-zinc-500">
            Shift open
          </p>
          <div className="relative h-6 w-[9.75rem] shrink-0 text-[11px] font-semibold">
            <span
              data-s="online"
              className={`${connectionPill} invisible border-white/10 bg-white/[0.04] text-zinc-300 opacity-0`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Online
            </span>
            <span
              data-s="offline"
              className={`${connectionPill} invisible border-amber-500/40 bg-amber-500/10 text-amber-400 opacity-0`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Offline · still selling
            </span>
            <span data-s="synced" className={`${connectionPill} border-green-500/40 bg-green-500/10 text-green-400`}>
              ✓ Back online · synced
            </span>
          </div>
        </div>

        <div className="grid gap-3 screen-wide:grid-cols-[1.1fr_1fr] screen-wide:gap-4">
          {/* Product buttons */}
          <div className="grid grid-cols-3 gap-2 screen-wide:grid-cols-2">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-2.5 screen-wide:p-3"
              >
                {product.sold && (
                  <span
                    data-s="tap"
                    className="invisible absolute inset-0 rounded-xl border-2 border-[rgb(255,73,37)] bg-[rgb(255,73,37)]/15 opacity-0"
                  />
                )}
                <p className="min-h-[2.5em] text-[11px] leading-tight text-zinc-300 screen-wide:text-xs">
                  {product.name}
                </p>
                <p className="mt-1.5 whitespace-nowrap text-[11px] font-semibold text-white screen-wide:text-xs">
                  {rupees(product.price)}
                </p>
              </div>
            ))}
          </div>

          {/* Cart */}
          <div className="flex min-w-0 flex-col rounded-xl border border-white/10 bg-black/40 p-3">
            <div className="flex h-5 items-center justify-between gap-2">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Current sale</p>
              <span
                data-s="paid"
                className="inline-block -rotate-6 rounded border-2 border-green-500 px-1.5 text-[10px] font-black leading-4 tracking-widest text-green-500"
              >
                PAID
              </span>
            </div>
            <ul className="mt-2 flex-1 space-y-1.5">
              {CART.map((product) => (
                <li
                  key={product.name}
                  data-s="line"
                  className="flex items-baseline justify-between gap-2 text-[12px] text-zinc-300"
                >
                  <span className="min-w-0 truncate">{product.name}</span>
                  <span className="shrink-0 whitespace-nowrap tabular-nums text-white">{rupees(product.price)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-baseline justify-between gap-2 border-t border-white/10 pt-3">
              <span className="text-[11px] uppercase tracking-wider text-zinc-500">Total</span>
              <span
                data-s="total"
                className="whitespace-nowrap text-xl font-black tabular-nums text-white screen-wide:text-[length:clamp(1.15rem,4.2cqw,1.6rem)]"
              >
                {rupees(TOTAL)}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[11px] font-semibold">
              <span className="rounded-lg border border-white/10 py-2 text-zinc-400">Cash</span>
              <span className="rounded-lg border border-white/10 py-2 text-zinc-400">Card</span>
              <span data-s="pay" className="whitespace-nowrap rounded-lg bg-[rgb(255,73,37)] py-2 text-black">
                LankaQR
              </span>
            </div>
            <p data-s="receipt" className="mt-2.5 text-center text-[11px] text-zinc-500">
              Receipt printed · stock updated
            </p>
          </div>
        </div>
      </MockFrame>
    </div>
  );
}
