"use client";

import { useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";
import Menu from "./Menu";

const navbarLogoSrc = "/arc-ai-navbar-logo.webp";

function NavbarLogo({ onLight, className }: { onLight: boolean; className: string }) {
  return (
    <span className={`relative block aspect-[512/263] translate-y-[5%] transition-all duration-500 ${className}`}>
      <Image
        src={navbarLogoSrc}
        alt="ARC AI - AI Automation & Web Design Agency"
        fill
        priority
        unoptimized
        className={onLight ? "" : "[clip-path:inset(0_0_0_54%)]"}
      />
      {/* The clip boundary sits in the transparent gap between ARC and AI. */}
      {!onLight && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-white [clip-path:inset(0_46%_0_0)]"
          style={{ mask: `url(${navbarLogoSrc}) center / 100% 100% no-repeat` }}
        />
      )}
    </span>
  );
}

type NavbarProps = {
  /**
   * "cream" is for a page with a light background. The logo and the header
   * text are white, so once the header leaves the dark hero it sits on a dark
   * glass bar of its own, where on dark pages it can stay almost clear.
   */
  tone?: "dark" | "cream";
  /**
   * True (the default) on a light page with nothing dark behind the header.
   * Until the page scrolls the header sits straight on the cream, so it uses
   * dark lettering and the dark-lettered logo; once scrolled it is the dark
   * glass bar with the white logo. The home page passes false: its header
   * starts over the dark hero video.
   */
  lightTop?: boolean;
};

const Navbar = memo(({ tone = "cream", lightTop = true }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // True while the header is drawn on something light: the page itself before
  // it scrolls, or the open menu, which is a cream sheet. (Only the menu button
  // stays visible over the open menu.)
  const onLight = isMenuOpen || (lightTop && !isScrolled);
  const text = onLight ? "text-ink" : "text-white";
  const textMuted = onLight ? "text-ink-mute" : "text-white/70";
  // The menu button's edge, drawn as the cut-corner ring (.cut-btn).
  const menuEdge = onLight
    ? "[--cut-line:rgba(27,26,23,0.25)] hover:bg-ink/5"
    : "[--cut-line:rgba(255,255,255,0.2)] hover:bg-white/10";
  const line = onLight ? "bg-ink" : "bg-white";
  // "Let's talk" is a cut-corner button (see .cut-btn in index.css) with an
  // orange edge. The edge is drawn in --cut-line instead of a border, so it
  // follows the cut corners.
  const cutOutline = `[--cut-line:#FF4925] ${onLight ? "hover:bg-ink/5" : "hover:bg-white/10"}`;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize and update time every minute (client-side only)
  useEffect(() => {
    // Set initial time
    setCurrentTime(new Date());

    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Memoize time formatting to avoid unnecessary recalculations
  const formatTime = useMemo(() => {
    if (!currentTime) return '--:-- --';
    return currentTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }, [currentTime]);

  // Memoize timezone
  const timezone = useMemo(() => {
    if (!currentTime) return '(GMT+0)';
    const offset = -currentTime.getTimezoneOffset() / 60;
    const sign = offset >= 0 ? '+' : '';
    return `(GMT${sign}${offset})`;
  }, [currentTime]);

  // Memoize availability date
  const availabilityDate = useMemo(() => {
    if (!currentTime) return 'LOADING...';
    const monthYear = currentTime.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    }).toUpperCase();
    return monthYear;
  }, [currentTime]);

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Mobile Status and Time - Non-sticky, positioned below navbar */}
      <div className={`md:hidden absolute top-[106px] left-6 right-6 z-30 transition-all duration-300 ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
        <div className="flex gap-6">
          {/* Status and Date */}
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="relative w-2 h-2" aria-hidden="true">
                <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
                <div className="relative w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <span className={`text-sm font-medium ${text}`}>Available for project</span>
            </div>
            <div className={`text-[10px] pl-4 ${textMuted}`}>{availabilityDate}</div>
          </div>

          {/* Time */}
          <div className="text-left space-y-1">
            <time className={`text-sm font-medium ${text}`}>{formatTime}</time>
            <div className={`text-[10px] ${textMuted}`}>{timezone}</div>
          </div>
        </div>
      </div>

      {/* Hamburger/Close Button - Always on top */}
      {/* Once the page scrolls the header becomes a slim bar, so the button
          shrinks and moves up to sit inside it, on the bar's centre line. At
          its full size it used to hang out of the bottom of the bar. Inside the
          bar it has all four corners cut, parallel to the bar's own corners. */}
      <div className={`fixed z-[60] transition-all duration-500 ${isScrolled ? "top-[11px] right-6 md:top-[20px] md:right-7 lg:right-11" : "top-6 right-6 lg:right-12"}`}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`cut-btn relative transition-all duration-500 backdrop-blur-sm ${isScrolled ? "cut-all p-2.5" : "p-2.5 md:p-3 lg:p-4"} ${menuEdge} ${onLight ? "bg-white/40" : "bg-black/20"}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          <div className={`flex items-center justify-center transition-all duration-500 ${isScrolled ? "w-4 h-4 md:w-5 md:h-5" : "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}`}>
            <div className="relative w-full h-full">
              {/* Top line */}
              <div
                className={`absolute left-0 w-full h-[2px] ${line} transition-all duration-300 ${isMenuOpen
                  ? 'top-1/2 -translate-y-1/2 rotate-45'
                  : 'top-0 rotate-0'
                  }`}
              />
              {/* Middle line */}
              <div
                className={`absolute top-1/2 left-0 w-full h-[2px] ${line} -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              {/* Bottom line */}
              <div
                className={`absolute left-0 w-full h-[2px] ${line} transition-all duration-300 ${isMenuOpen
                  ? 'top-1/2 -translate-y-1/2 -rotate-45'
                  : 'bottom-0 rotate-0'
                  }`}
              />
            </div>
          </div>
        </button>
      </div>

      <nav
        className={`fixed z-40 transition-all duration-500 ease-in-out ${isScrolled
          ? `top-0 left-0 right-0 px-6 py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 md:top-4 md:left-4 md:right-4 lg:left-8 lg:right-8 md:backdrop-blur-2xl md:border-0 cut-md [--cut:12px] [--cut-line:rgba(255,255,255,0.12)] md:px-6 md:py-2 ${tone === "cream" ? "md:bg-[rgba(27,26,23,0.82)] md:shadow-[0_18px_40px_-18px_rgba(27,26,23,0.55)]" : "md:bg-white/[0.03] md:shadow-2xl"}`
          : "top-0 left-0 right-0 px-6 lg:px-12 py-6 bg-transparent border-b border-transparent"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1800px] mx-auto">
          {/* Mobile Layout - Logo on left, CTA/Menu on right, Status under logo */}
          <div className="md:hidden">
            {/* Top Row - Logo and Buttons */}
            <div className="flex items-center justify-between pr-16">
              {/* Logo */}
              <a href="/" className={`-my-4 -ml-1 transition-all duration-500 ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <NavbarLogo onLight={onLight} className={isScrolled ? "h-[52px]" : "h-[64px]"} />
              </a>

              {/* CTA Button and Menu */}
              <div className="flex items-center gap-2">
                <a
                  href="/contact"
                  className={`cut-btn px-5 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 ${cutOutline} ${text} ${isMenuOpen ? 'opacity-0 invisible w-0 px-0' : 'opacity-100 visible'}`}
                  aria-label="Contact us"
                >
                  LET'S TALK
                </a>
              </div>
            </div>
          </div>

          {/* Medium & Desktop Layout - Original horizontal layout */}
          <div className="hidden md:flex items-center justify-between pr-20 lg:pr-24">
            {/* Logo */}
            {/* The logo image has empty space around its artwork (the artwork is
                about two fifths of the image's height and sits a little above
                its middle). The negative margin stops that empty space setting
                the row's height, so the row is as tall as the button and the
                menu button lines up with it; the small shift on the image puts
                the artwork itself on the row's centre line. */}
            <a href="/" className={`-my-6 -ml-1.5 transition-all duration-500 ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <NavbarLogo
                  onLight={onLight}
                  className={isScrolled
                    ? "h-[56px] lg:h-[62px] xl:h-[66px]"
                    : "h-[76px] lg:h-[88px] xl:h-[96px]"
                  }
                />
            </a>

            {/* Right side - Status, Time, and CTA */}
            <div className={`flex gap-6 md:gap-8 lg:gap-12 items-center transition-all duration-300 ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              {/* Status and Date */}
              <div className="text-left space-y-0.5">
                <div className="flex items-center gap-2">
                  <div className="relative w-2 h-2" aria-hidden="true">
                    <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    <div className="relative w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className={`font-medium ${text} transition-all duration-500 ${isScrolled ? "text-sm" : "text-base lg:text-lg"}`}>Available for project</span>
                </div>
                <div className={`text-xs lg:text-sm ${textMuted} pl-4 transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>{availabilityDate}</div>
              </div>

              {/* Time */}
              <div className="text-left space-y-0.5">
                <time className={`font-medium ${text} transition-all duration-500 ${isScrolled ? "text-sm" : "text-base lg:text-lg"}`}>{formatTime}</time>
                <div className={`text-xs lg:text-sm ${textMuted} transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>{timezone}</div>
              </div>

              {/* CTA Button and Menu - Close together */}
              <div className="flex items-center gap-2 md:gap-3">
                <a
                  href="/contact"
                  className={`cut-btn font-semibold tracking-wider transition-all duration-300 ${cutOutline} ${text} ${isMenuOpen ? 'opacity-0 invisible w-0 px-0' : 'opacity-100 visible'} ${isScrolled ? "px-5 py-2 text-xs" : "px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"}`}
                  aria-label="Contact us"
                >
                  LET'S TALK
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

