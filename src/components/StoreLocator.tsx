"use client";

import { company, office } from "@/content/site-facts";

export default function StoreLocator() {
  return (
    <div className="w-full rounded-3xl overflow-hidden border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mt-16 mb-8 bg-white relative">
      <div className="w-full h-[600px] relative">
        <iframe
          src={office.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ARC AI Office Location"
          className="absolute inset-0"
        />
        {/* Optional Glassmorphism overlay for styling */}
        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl pointer-events-none shadow-2xl">
          <h3 className="text-white font-bold text-xl mb-1">{company.legalName}</h3>
          <p className="text-[rgb(200,200,200)] text-sm">{office.street}</p>
          <p className="text-[rgb(200,200,200)] text-sm">{office.locality} {office.postalCode}, {office.country}</p>
        </div>
      </div>
    </div>
  );
}
