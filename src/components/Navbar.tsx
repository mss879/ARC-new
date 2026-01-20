"use client";

import { useState, useEffect, useMemo, memo } from "react";
import Menu from "./Menu";

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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
              <span className="text-sm font-medium text-white">Available for project</span>
            </div>
            <div className="text-[10px] text-white/60 pl-4">{availabilityDate}</div>
          </div>

          {/* Time */}
          <div className="text-left space-y-1">
            <time className="text-sm font-medium text-white">{formatTime}</time>
            <div className="text-[10px] text-white/60">{timezone}</div>
          </div>
        </div>
      </div>

      {/* Hamburger/Close Button - Always on top */}
      <div className={`fixed z-[60] transition-all duration-500 ${isScrolled ? "top-6 right-8 lg:right-12" : "top-6 right-6 lg:right-12"}`}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative p-2.5 md:p-3 lg:p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors bg-black/20 backdrop-blur-sm"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
        >
          <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Top line */}
              <div
                className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen
                  ? 'top-1/2 -translate-y-1/2 rotate-45'
                  : 'top-0 rotate-0'
                  }`}
              />
              {/* Middle line */}
              <div
                className={`absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              {/* Bottom line */}
              <div
                className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen
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
            ? "top-0 left-0 right-0 px-6 py-6 md:top-4 md:left-4 md:right-4 lg:left-8 lg:right-8 md:bg-white/[0.03] md:backdrop-blur-2xl md:rounded-full md:border md:border-white/10 md:px-6 md:py-2 md:shadow-2xl"
            : "top-0 left-0 right-0 px-6 lg:px-12 py-6 bg-transparent border-b border-transparent"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1800px] mx-auto">
          {/* Mobile Layout - Logo on left, CTA/Menu on right, Status under logo */}
          <div className="md:hidden">
            {/* Top Row - Logo and Buttons */}
            <div className="flex items-start justify-between pr-16">
              {/* Logo */}
              <a href="/" className={`transition-all duration-500 -mt-3 ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <img
                  src="/logo.png"
                  alt="ARC AI - Beyond Visuals. Built with Vision"
                  className="w-auto h-[70px] sm:h-[80px] cursor-pointer"
                  width="80"
                  height="80"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </a>

              {/* CTA Button and Menu */}
              <div className="flex items-center gap-2">
                <a
                  href="/contact"
                  className={`px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold tracking-wider text-white hover:bg-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-0 invisible w-0 px-0' : 'opacity-100 visible'}`}
                  aria-label="Contact us"
                >
                  LET'S TALK
                </a>
              </div>
            </div>
          </div>

          {/* Medium & Desktop Layout - Original horizontal layout */}
          <div className={`hidden md:flex justify-between pr-20 lg:pr-24 transition-all duration-500 ${isScrolled ? "items-center" : "items-start"}`}>
            {/* Logo */}
            <a href="/" className={`transition-all duration-500 ${isScrolled ? "" : "-mt-4"} ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              <img
                src="/logo.png"
                alt="ARC AI - Beyond Visuals. Built with Vision"
                className={`w-auto transition-all duration-500 cursor-pointer ${isScrolled
                  ? "h-[40px] lg:h-[50px] xl:h-[60px]"
                  : "h-[80px] lg:h-[120px] xl:h-[160px]"
                  }`}
                width="160"
                height="160"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
            </a>

            {/* Right side - Status, Time, and CTA */}
            <div className={`flex gap-6 md:gap-8 lg:gap-12 transition-all duration-300 ${isScrolled ? "items-center" : "items-start"} ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              {/* Status and Date */}
              <div className="text-left space-y-0.5">
                <div className="flex items-center gap-2">
                  <div className="relative w-2 h-2" aria-hidden="true">
                    <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    <div className="relative w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className={`font-medium text-white transition-all duration-500 ${isScrolled ? "text-sm" : "text-base lg:text-lg"}`}>Available for project</span>
                </div>
                <div className={`text-xs lg:text-sm text-white/60 pl-4 transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>{availabilityDate}</div>
              </div>

              {/* Time */}
              <div className="text-left space-y-0.5">
                <time className={`font-medium text-white transition-all duration-500 ${isScrolled ? "text-sm" : "text-base lg:text-lg"}`}>{formatTime}</time>
                <div className={`text-xs lg:text-sm text-white/60 transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>{timezone}</div>
              </div>

              {/* CTA Button and Menu - Close together */}
              <div className="flex items-center gap-2 md:gap-3">
                <a
                  href="/contact"
                  className={`rounded-full border border-white/20 font-semibold tracking-wider text-white hover:bg-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-0 invisible w-0 px-0' : 'opacity-100 visible'} ${isScrolled ? "px-5 py-2 text-xs" : "px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"}`}
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

