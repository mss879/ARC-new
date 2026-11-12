"use client";

import MockFrame from "./MockFrame";
import { useDemoTimeline } from "@/components/gsap/useDemoTimeline";

const STEPS = [
  { label: "Order #2087 placed", detail: "Cash on delivery · Galle" },
  { label: "Stock reserved", detail: "14 left, was 15" },
  { label: "Packed", detail: "Label printed" },
  { label: "Out for delivery", detail: "Arrives today" },
];

/**
 * An order from click to doorstep: added to the cart, placed, and followed
 * through stock, packing and delivery, with the customer kept informed.
 *
 * Narrow frame: the product as a compact row, the order steps underneath.
 * Wide frame: the product card on the left, the order steps on the right.
 */
export default function EcommerceMock() {
  const scope = useDemoTimeline<HTMLDivElement>((timeline, select) => {
    timeline
      .set(select("[data-s='add-label']"), { autoAlpha: 1 }, 0)
      .from(select("[data-s='product']"), { autoAlpha: 0, y: 16 })
      .fromTo(
        select("[data-s='add']"),
        { scale: 1 },
        { scale: 0.93, duration: 0.12, yoyo: true, repeat: 1 },
        "+=0.6",
      )
      .to(select("[data-s='add-label']"), { autoAlpha: 0, duration: 0.15 }, "+=0.05")
      .from(select("[data-s='added-label']"), { autoAlpha: 0, duration: 0.2 }, "<")
      .from(select("[data-s='badge']"), { autoAlpha: 0, scale: 0, duration: 0.35, ease: "back.out(3)" }, "<")
      .from(select("[data-s='step']"), { autoAlpha: 0, x: 14, stagger: 0.55 }, "+=0.4")
      .from(
        select("[data-s='track']"),
        { scaleY: 0, transformOrigin: "center top", duration: 1.9, ease: "none" },
        "<",
      )
      .from(select("[data-s='notice']"), { autoAlpha: 0, y: 12 }, "-=0.2");
  });

  return (
    <div ref={scope}>
      <MockFrame
        title="Online store · Orders"
        description="Illustration: an online store. A shopper adds a product to the cart and places the order, then the order moves through stock reservation, packing and delivery, and the customer receives a delivery update."
      >
        <div className="grid gap-3 screen-wide:grid-cols-[1fr_1.15fr] screen-wide:gap-4">
          {/* Storefront */}
          <div
            data-s="product"
            className="flex min-w-0 gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 screen-wide:block"
          >
            <div className="relative flex aspect-square w-[6.5rem] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-700/70 to-zinc-900 screen-wide:aspect-[4/3] screen-wide:w-full">
              <svg
                viewBox="0 0 64 64"
                className="h-10 w-10 text-zinc-400 screen-wide:h-14 screen-wide:w-14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 22h36l-3 30H17l-3-30Z" strokeLinejoin="round" />
                <path d="M24 22v-4a8 8 0 0 1 16 0v4" strokeLinecap="round" />
              </svg>
              <span className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-300">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 8H6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  data-s="badge"
                  className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[rgb(255,73,37)] text-[9px] font-black text-black"
                >
                  1
                </span>
              </span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-between screen-wide:mt-3">
              <div>
                <p className="truncate text-[13px] font-semibold text-white">Handloom tote bag</p>
                <p className="whitespace-nowrap text-[12px] text-zinc-400">Rs. 4,900 · In stock</p>
              </div>
              <div
                data-s="add"
                className="relative mt-3 h-9 rounded-lg bg-[rgb(255,73,37)] text-[12px] font-bold text-black"
              >
                <span
                  data-s="add-label"
                  className="invisible absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0"
                >
                  Add to cart
                </span>
                <span
                  data-s="added-label"
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                >
                  ✓ Order placed
                </span>
              </div>
            </div>
          </div>

          {/* Order timeline */}
          <div className="min-w-0 rounded-xl border border-white/10 bg-black/40 p-3">
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">What happens next</p>
            <div className="relative mt-3">
              <span className="absolute bottom-3 left-[5px] top-2 w-px bg-white/10" />
              <span data-s="track" className="absolute bottom-3 left-[5px] top-2 w-px bg-[rgb(255,73,37)]" />
              <ul className="space-y-3">
                {STEPS.map((step) => (
                  <li key={step.label} data-s="step" className="relative flex gap-3">
                    <span className="relative z-10 mt-1 h-[11px] w-[11px] shrink-0 rounded-full border-2 border-[rgb(255,73,37)] bg-black" />
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-semibold leading-tight text-white">{step.label}</p>
                      <p className="truncate text-[11px] text-zinc-500">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              data-s="notice"
              className="mt-3.5 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-2.5 py-2 text-[11.5px] leading-tight text-green-300"
            >
              <span>✓</span>
              Delivery update sent to the customer
            </div>
          </div>
        </div>
      </MockFrame>
    </div>
  );
}
