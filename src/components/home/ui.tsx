import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Small pieces shared by the home page sections, so every section label and
 * every button on the page is the same shape. Styles are in src/index.css
 * under "Home page: grey-cream theme".
 */

/** The pill above a section heading. */
export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`cream-pill ${dark ? "cream-pill--dark" : ""}`}>{children}</p>;
}

/** The round arrow inside a pill button. */
export function ArrowDot({ className = "" }: { className?: string }) {
  return (
    <span className={`pill-btn__dot ${className}`} aria-hidden="true">
      <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
    </span>
  );
}

type PillLinkProps = {
  href: string;
  children: ReactNode;
  /** ink: dark pill, orange arrow. ember: orange pill. ghost: light pill. */
  variant?: "ink" | "ember" | "ghost";
  className?: string;
  tabIndex?: number;
};

/** A link drawn as a pill button with its arrow. */
export function PillLink({ href, children, variant = "ink", className = "", tabIndex }: PillLinkProps) {
  return (
    <Link href={href} tabIndex={tabIndex} className={`pill-btn pill-btn--${variant} ${className}`}>
      {children}
      <ArrowDot />
    </Link>
  );
}
