"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="home-cream flex min-h-screen flex-col items-center justify-center bg-transparent text-ink px-6">
      <div className="text-center max-w-md">
        <p className="text-sm font-medium text-ember-deep uppercase tracking-wider mb-4">
          404 Error
        </p>
        <h1 className="text-6xl md:text-8xl font-medium mb-6 tracking-[-0.035em]">
          Page Not Found
        </h1>
        <p className="text-lg text-ink-soft mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="cut-btn [--cut:12px] inline-flex items-center gap-2 px-8 py-4 [--cut-w:2px] [--cut-line:rgb(255,73,37)] text-ember-deep hover:bg-[#FF5C3A] hover:text-ink transition-all duration-300 font-semibold tracking-wide"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
