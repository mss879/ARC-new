"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

import { company, office } from "@/content/site-facts";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.oneLine)}`;

/**
 * The office map on the contact page, with the address on a card over it.
 *
 * The map is Google's, and Google sets its own cookies when it loads, so it
 * loads only when the visitor asks for it (cookie consent: nothing from a
 * third party runs before the visitor agrees). Until then a plain panel
 * stands in, with a link to open the address in Google Maps instead.
 */
export default function StoreLocator() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="cut-card [--cut:22px] relative w-full overflow-hidden bg-white">
      <div className="relative h-[420px] w-full md:h-[520px]">
        {showMap ? (
          <iframe
            src={office.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ARC AI Office Location"
            className="absolute inset-0"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-end justify-center bg-paper-soft p-6 pb-10 md:items-center md:pb-6"
            style={{
              backgroundImage:
                "linear-gradient(rgba(27,26,23,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(27,26,23,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          >
            <div className="flex max-w-sm flex-col items-center text-center">
              <span className="grid h-12 w-12 place-items-center text-ember" aria-hidden="true">
                <MapPin className="h-8 w-8" strokeWidth={1.75} />
              </span>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The map is provided by Google, which sets its own cookies when it loads.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowMap(true)}
                  className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] bg-ember px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#FF5C3A]"
                >
                  Show map
                </button>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cut-btn [--cut:10px] [--cut-line:#1B1A17] px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="cut-card [--cut:18px] pointer-events-none absolute left-4 top-4 max-w-[calc(100%-2rem)] [--cut-line:rgb(255,255,255)] bg-paper-white/95 p-4 shadow-[0_18px_36px_-22px_rgba(27,26,23,0.5)] md:left-6 md:top-6 md:p-5">
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink md:text-xl">{company.legalName}</h3>
          <p className="mt-1 text-sm text-ink-soft">{office.street}</p>
          <p className="text-sm text-ink-soft">{office.locality} {office.postalCode}, {office.country}</p>
        </div>
      </div>
    </div>
  );
}
