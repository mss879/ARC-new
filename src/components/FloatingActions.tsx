"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { StickyAiPill } from "@/components/StickyAiPill";
import { trackContactClick, trackEvent } from "@/lib/analytics/tracker";

const FloatingActions = () => {
  const pathname = usePathname();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check if on admin pages
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling past hero section (typically around 100vh)
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Assuming hero is full viewport height

      if (scrollPosition > heroHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // These two are the site's highest-intent actions that are not the contact
  // form. The tracker reads click intent off anchors — tel:, wa.me, mailto: —
  // and both of these are <button onClick> that call window.open, so they
  // report themselves; the buttons carry data-analytics-ignore so the
  // tracker's own click listener does not record them a second time.
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "447466368427"; // UK number without + or spaces
    const message = encodeURIComponent("Hi! I'd like to discuss my project with Arc AI.");
    const href = `https://wa.me/${phoneNumber}?text=${message}`;
    trackContactClick("whatsapp_click", href, {
      element: "button.floating-whatsapp",
      element_text: "Chat on WhatsApp",
      surface: "floating_actions",
    });
    window.open(href, "_blank");
  };

  const openCalendly = () => {
    trackEvent("cta_click", {
      element: "button.floating-calendly",
      element_text: "Book a meeting",
      meta: { cta: "book_meeting", surface: "floating_actions" },
    });
    // Opening the booking widget is intent, not a booking — Calendly owns
    // the confirmation and we never see it, so claiming a conversion here
    // would overstate the one number that must not be overstated.
    setIsCalendlyOpen(true);
    // Load Calendly widget
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    const handleOpenCalendly = () => openCalendly();
    window.addEventListener("open-calendly", handleOpenCalendly);
    return () => window.removeEventListener("open-calendly", handleOpenCalendly);
  }, []);

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  // Hide on admin pages
  if (isAdmin) return null;

  return (
    <>
      {/* Floating Action Buttons - Only visible after scrolling past hero */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            {/* Calendar/Meeting Button */}
            <motion.button
              onClick={openCalendly}
              aria-label="Book a meeting"
              data-analytics-ignore
              className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 73, 37, 0.8), rgba(255, 73, 37, 0.4))',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px 0 rgba(255, 73, 37, 0.3), inset 0 2px 4px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none rounded-full" aria-hidden="true" />

              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900/90 backdrop-blur-md border border-white/10 text-white text-sm rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl transform group-hover:-translate-x-1 duration-300" aria-hidden="true">
                Book a Meeting
              </div>

              {/* Calendar Icon */}
              <svg
                className="w-6 h-6 text-white drop-shadow-md z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </motion.button>

            {/* WhatsApp Button */}
            <motion.button
              onClick={openWhatsApp}
              aria-label="Chat on WhatsApp"
              data-analytics-ignore
              className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.8), rgba(37, 211, 102, 0.4))',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px 0 rgba(37, 211, 102, 0.3), inset 0 2px 4px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none rounded-full" aria-hidden="true" />

              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900/90 backdrop-blur-md border border-white/10 text-white text-sm rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl transform group-hover:-translate-x-1 duration-300" aria-hidden="true">
                Chat on WhatsApp
              </div>

              {/* WhatsApp Icon */}
              <svg
                className="w-6 h-6 text-white drop-shadow-md z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky AI Pill (hidden on mobile until scroll past hero) */}
      <StickyAiPill />

      {/* Calendly Modal */}
      <AnimatePresence>
        {isCalendlyOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCalendly}
            role="dialog"
            aria-modal="true"
            aria-label="Book a meeting with ARC AI"
          >
            <motion.div
              className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeCalendly}
                aria-label="Close booking dialog"
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Calendly Embed */}
              <div className="w-full h-full">
                <div
                  className="calendly-inline-widget w-full h-full"
                  data-url="https://calendly.com/shahid-arcai-_xeu/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: '320px', height: '100%' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActions;

