"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { ArrowDot } from "./ui";

/**
 * A button that opens the booking window (the same one as the hero's "Book a
 * call"; FloatingActions listens for the "open-calendly" event). Without
 * JavaScript it is a plain link to the contact page.
 */
export function BookCallLink({
  children = "Book a call",
  variant = "ember",
  className = "",
}: {
  children?: ReactNode;
  variant?: "ink" | "ember" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href="/contact"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event("open-calendly"));
      }}
      className={`pill-btn pill-btn--${variant} ${className}`}
    >
      {children}
      <ArrowDot />
    </Link>
  );
}
