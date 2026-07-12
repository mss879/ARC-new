"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  X,
  ArrowRight,
  Shield,
  Globe,
  Lock,
  ShoppingCart,
  Code2,
  Plus,
  Zap,
  Mail,
  Phone,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const packages = [
  {
    name: "Starter",
    tagline: "Get Online Fast",
    price: "429",
    monthly: null,
    color: "rgb(251,146,60)", // Orange 400
    timeline: "2–3 days",
    bestFor: "Businesses that need a clean, professional web presence fast.",
    features: [
      "Modern responsive website (5 pages)",
      "Clean, minimal design — standard layouts",
      "WhatsApp button + contact/inquiry form",
      "Mobile-optimized & fast-loading",
      "Free hosting forever",
    ],
    notIncluded: [
      "Custom animations & parallax effects",
      "Glassmorphism & advanced UI",
      "Bespoke hero sections",
      "SEO structured data",
    ],
  },
  {
    name: "Launch",
    tagline: "Stand Out & Convert",
    price: "649",
    monthly: null,
    color: "rgb(249,115,22)", // Orange 500
    timeline: "3–5 days",
    bestFor:
      "Businesses that want a stunning, conversion-focused website that stands out.",
    features: [
      "Everything in Starter, plus:",
      "Modern responsive website (8 pages)",
      "Premium custom design with advanced animations",
      "Parallax scrolling, hover effects, micro-interactions",
      "Glassmorphism cards & bespoke hero section",
      "Video/animation support in hero",
      "Conversion-optimized layout with strategic CTAs",
      "Full SEO with structured data & meta tags",
    ],
    notIncluded: [],
  },
  {
    name: "Growth",
    tagline: "Capture & Close Leads",
    price: "999",
    monthly: null,
    color: "rgb(234,88,12)", // Orange 600
    popular: true,
    timeline: "5–7 days",
    bestFor:
      "Businesses that want a premium website plus a system to capture, track, and close more leads.",
    features: [
      "Everything in Launch, plus:",
      "Extensive responsive website (15 pages)",
      "Lead Dashboard — every inquiry in one place",
      "CRM pipeline (New → Contacted → Quoted → Won/Lost)",
      "Email capture + newsletter system",
      "Email campaigns — promos, updates, re-engagement",
    ],
    notIncluded: [],
  },
  {
    name: "Scale",
    tagline: "24/7 AI-Powered Sales",
    price: "1299",
    monthly: "£4",
    color: "rgb(194,65,12)", // Orange 700
    timeline: "5–7 days",
    bestFor:
      "Businesses that want everything in Growth plus an AI agent handling inquiries around the clock.",
    features: [
      "Everything in Growth, plus:",
      "Extensive responsive website (23 pages)",
      "AI agent integrated into your website",
      "Instant responses to visitor questions 24/7",
      "Handles common inquiries & guides users to action",
      "Improves response time and availability",
      "1 Month Free Keyword Optimization",
    ],
    notIncluded: [],
  },
];

const comparisonFeatures: Array<Record<string, any>> = [
  {
    name: "Number of Pages",
    starter: "5",
    launch: "8",
    growth: "15",
    scale: "23",
  },
  {
    name: "Additional Pages Option",
    starter: "£50/each",
    launch: "£50/each",
    growth: "£50/each",
    scale: "£50/each",
  },
  {
    name: "WhatsApp Button + Contact Form",
    starter: true,
    launch: true,
    growth: true,
    scale: true,
  },
  {
    name: "Mobile Optimized",
    starter: true,
    launch: true,
    growth: true,
    scale: true,
  },
  {
    name: "Free Hosting Forever",
    starter: true,
    launch: true,
    growth: true,
    scale: true,
  },
  {
    name: "Custom Animations & Parallax",
    starter: false,
    launch: true,
    growth: true,
    scale: true,
  },
  {
    name: "Glassmorphism & Advanced UI",
    starter: false,
    launch: true,
    growth: true,
    scale: true,
  },
  {
    name: "Bespoke Hero Section (Video/Animation)",
    starter: false,
    launch: true,
    growth: true,
    scale: true,
  },
  {
    name: "Full SEO Optimization",
    starter: false,
    launch: true,
    growth: true,
    scale: true,
  },
  {
    name: "Lead Dashboard",
    starter: false,
    launch: false,
    growth: true,
    scale: true,
  },
  {
    name: "CRM Pipeline",
    starter: false,
    launch: false,
    growth: true,
    scale: true,
  },
  {
    name: "Email Capture + Newsletter",
    starter: false,
    launch: false,
    growth: true,
    scale: true,
  },
  {
    name: "Email Marketing Campaigns",
    starter: false,
    launch: false,
    growth: true,
    scale: true,
  },
  {
    name: "AI Agent (24/7 Support)",
    starter: false,
    launch: false,
    growth: false,
    scale: true,
  },
];

export default function UKPricingClient() {
  const [hoveredPkg, setHoveredPkg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-500/20">
      {/* ═══════════════════════════════════════════════ */}
      {/* HEADER / DOCUMENT INTRO                        */}
      {/* ═══════════════════════════════════════════════ */}
      <header className="relative border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-[1280px] mx-auto px-6 py-12 sm:py-16">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/favicon.png"
                  alt="ARC AI Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-black tracking-widest text-black uppercase">
                  ARC AI AGENCY
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100/80 px-2 py-0.5 rounded-md inline-flex">
                  <Lock className="w-3 h-3" />
                  Confidential Pricing Proposal (UK)
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tight">
              Transparent Pricing.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Uncompromising Quality.
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
              We build high-performance custom websites and e-commerce platforms
              designed to elevate your brand and drive revenue.
            </p>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════ */}
      {/* WEB PACKAGES                                   */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white" id="packages">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Corporate &
              Service Businesses
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              Website Pricing
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                onMouseEnter={() => setHoveredPkg(pkg.name)}
                onMouseLeave={() => setHoveredPkg(null)}
                className={`relative flex flex-col rounded-3xl border transition-all duration-500 overflow-hidden bg-white ${
                  hoveredPkg === pkg.name
                    ? "border-orange-200 shadow-[0_20px_60px_-15px_rgba(234,88,12,0.1)] scale-[1.02] z-10"
                    : "border-gray-100 shadow-sm"
                } ${pkg.popular ? "ring-2 ring-orange-500 shadow-lg" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest py-1.5 text-center">
                    Most Popular Choice
                  </div>
                )}

                <div
                  className={`p-8 space-y-6 flex-1 flex flex-col ${pkg.popular ? "pt-10" : ""}`}
                >
                  <div className="space-y-2">
                    <p
                      className="text-sm font-black uppercase tracking-widest"
                      style={{ color: pkg.color }}
                    >
                      {pkg.name}
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="space-y-2 pb-6 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-gray-400">£</span>
                      <span className="text-4xl font-black text-black tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">
                        {pkg.monthly
                          ? `One-time + ${pkg.monthly}/month AI fee`
                          : "One-time payment. No monthly fees."}
                      </p>
                      <p className="text-xs font-medium text-gray-400 mt-1 flex items-center gap-1.5">
                        <Plus className="w-3 h-3" /> Additional pages: £50 /
                        each
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1 pb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 rounded-full p-0.5"
                          style={{ backgroundColor: `${pkg.color}15` }}
                        >
                          <Check
                            className="w-3 h-3 shrink-0"
                            style={{ color: pkg.color }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {pkg.notIncluded.map((feature, i) => (
                      <div
                        key={`no-${i}`}
                        className="flex items-start gap-3 opacity-40"
                      >
                        <div className="mt-0.5 rounded-full p-0.5 bg-gray-100">
                          <X className="w-3 h-3 shrink-0 text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-500 leading-snug line-through">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/447466368427"
                    target="_blank"
                    rel="noopener"
                    className="mt-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-sm"
                    style={{
                      backgroundColor: pkg.color,
                      color: "white",
                    }}
                  >
                    Select {pkg.name}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* FULL COMPARISON TABLE                          */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-gray-50/30 hidden md:block">
        <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest">
              Detailed Breakdown
            </p>
            <h2 className="text-3xl font-black text-black tracking-tight">
              Compare Features
            </h2>
          </div>

          <div className="relative -mx-6 px-6 pb-4">
            <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-gray-100">
                    <th className="py-5 px-6 text-xs font-black text-gray-400 uppercase tracking-widest w-[35%] bg-white sticky left-0 z-20 shadow-[4px_0_12px_rgba(0,0,0,0.02)]">
                      Feature
                    </th>
                    {packages.map((pkg) => (
                      <th
                        key={pkg.name}
                        className="py-5 px-4 text-center border-l border-gray-50"
                      >
                        <p
                          className="text-sm font-black uppercase tracking-widest"
                          style={{ color: pkg.color }}
                        >
                          {pkg.name}
                        </p>
                        <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">
                          £{pkg.price}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {comparisonFeatures.map((feature, i) => (
                    <tr
                      key={feature.name}
                      className="group transition-colors bg-white hover:bg-gray-50/50"
                    >
                      <td className="py-4 px-6 text-sm font-bold text-gray-600 sticky left-0 z-10 bg-white group-hover:bg-gray-50/50 border-r border-gray-50 shadow-[2px_0_12px_rgba(0,0,0,0.01)] transition-colors">
                        {feature.name}
                      </td>
                      {(["starter", "launch", "growth", "scale"] as const).map(
                        (tier) => (
                          <td
                            key={tier}
                            className="py-4 px-4 text-center border-l border-gray-50"
                          >
                            {typeof feature[tier] === "boolean" ? (
                              feature[tier] ? (
                                <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center mx-auto">
                                  {(() => {
                                    const color =
                                      packages.find(
                                        (p) => p.name.toLowerCase() === tier,
                                      )?.color || "#f97316";
                                    return (
                                      <Check
                                        className="w-3 h-3"
                                        style={{ color }}
                                      />
                                    );
                                  })()}
                                </div>
                              ) : (
                                <X className="w-4 h-4 mx-auto text-gray-200" />
                              )
                            ) : (
                              <span className="text-sm font-bold text-gray-700">
                                {feature[tier]}
                              </span>
                            )}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* E-COMMERCE PRICING                             */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-20 sm:py-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Digital
              Storefronts <span className="w-8 h-px bg-orange-500"></span>
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight tracking-tight">
              E-Commerce Stores
            </h2>
            <p className="text-lg text-gray-500 font-medium">
              Sell products online with a store designed for maximum conversion.
              Choose a streamlined Shopify setup, or a breathtaking custom-coded
              Next.js experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Shopify Build */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col">
              <div className="absolute top-0 inset-x-0 h-1 bg-gray-100 group-hover:bg-orange-400 transition-colors"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black">
                    Shopify Theme Build
                  </h3>
                  <p className="text-sm font-bold text-gray-500">
                    Fast Setup & Reliable Themes
                  </p>
                </div>
              </div>

              <div className="space-y-1 pb-8 border-b border-gray-100 mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-gray-400">£</span>
                  <span className="text-5xl font-black text-black tracking-tight">
                    500
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-500 pt-2 flex items-center gap-2">
                  + £25/month{" "}
                  <span className="text-[11px] bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                    Paid directly to Shopify
                  </span>
                </p>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  "Built using the official Shopify store builder",
                  "High-quality, reliable theme-based design",
                  "Standard e-commerce layout & user flows",
                  "Easy-to-use product management dashboard",
                  "Built-in secure checkout process",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 text-orange-400" />
                    <span className="text-sm font-medium text-gray-600 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}

                <div className="flex items-start gap-3 opacity-40 pt-4">
                  <X className="w-5 h-5 shrink-0 text-gray-400" />
                  <span className="text-sm font-medium text-gray-500 leading-relaxed">
                    No bespoke animations or highly custom coded layouts.
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/447466368427"
                target="_blank"
                rel="noopener"
                className="mt-10 w-full flex items-center justify-center gap-2 px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 bg-gray-50 text-gray-900 hover:bg-gray-100 hover:text-black border border-gray-200"
              >
                Choose Shopify
              </a>
            </div>

            {/* Custom Next.js Build */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-orange-500 shadow-xl relative flex flex-col">
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Premium Choice
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black">
                    Custom Next.js Store
                  </h3>
                  <p className="text-sm font-bold text-orange-600">
                    Bespoke, Fast, & Unlimited Potential
                  </p>
                </div>
              </div>

              <div className="space-y-1 pb-8 border-b border-gray-100 mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-gray-400">
                    Starts at £
                  </span>
                  <span className="text-5xl font-black text-black tracking-tight">
                    800
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-500 pt-2 flex items-center gap-2">
                  Includes 500MB Free Backend Space
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Then just £25/month if storage exceeds 500MB
                </p>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  "100% custom-coded storefront using Next.js & React",
                  "Amazing, premium design with bespoke animations",
                  "Advanced UI features like glassmorphism & parallax",
                  "Unmatched loading speed & performance",
                  "Deeper, unrestricted Technical SEO capabilities compared to Shopify",
                  "Ultimate flexibility: Add ANY custom feature you want",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 text-orange-500" />
                    <span className="text-sm font-medium text-gray-600 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}

                {/* Add-ons */}
                <div className="mt-6 p-4 rounded-2xl bg-orange-50 border border-orange-100/50 space-y-3">
                  <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">
                    Optional Custom Integrations:
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Plus className="w-3 h-3 text-orange-500" /> Payment
                      Gateway
                    </span>
                    <span className="text-sm font-black text-black">+ £250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Plus className="w-3 h-3 text-orange-500" /> Delivery
                      Integration
                    </span>
                    <span className="text-sm font-black text-black">+ £150</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/447466368427"
                target="_blank"
                rel="noopener"
                className="mt-10 w-full flex items-center justify-center gap-2 px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 bg-orange-600 text-white hover:bg-orange-500 shadow-[0_10px_40px_-10px_rgba(234,88,12,0.5)]"
              >
                Choose Custom Next.js
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* HOSTING & MAINTENANCE                          */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 py-20 sm:py-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Post-Launch
              Support
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight tracking-tight">
              Hosting & Maintenance
            </h2>
            <p className="text-lg text-gray-500 font-medium">
              Protect your investment with reliable maintenance layers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[1150px] mx-auto">
            {/* Hosting */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-2">
                <Globe className="w-6 h-6 text-gray-600" />
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-black text-gray-900">
                  Standard Hosting
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-black">Free</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    forever
                  </span>
                </div>
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">
                    Hosting is completely free forever for standard websites as
                    long as total uploaded media stays within 1GB limit.
                  </p>
                </div>
              </div>
            </div>

            {/* Annual Maintenance */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-orange-500 space-y-6 shadow-[0_8px_40px_rgba(234,88,12,0.1)] relative">
              <div className="absolute -top-3 inset-x-0 flex justify-center">
                <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Recommended
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-black text-gray-900">
                  Website Protection
                </p>
                <div className="space-y-3 pb-2 pt-2">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm font-bold text-gray-500">
                      3 Months
                    </span>
                    <span className="text-lg font-bold text-gray-800">
                      £140
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm font-bold text-gray-500">
                      6 Months
                    </span>
                    <span className="text-lg font-bold text-gray-800">
                      £210
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-between mt-4">
                    <div className="flex flex-col">
                      <span className="text-base font-black text-orange-600 whitespace-nowrap">
                        12 Months
                      </span>
                      <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest mt-0.5 whitespace-nowrap">
                        Best Value
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-black whitespace-nowrap">
                      £320
                    </span>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  {[
                    "Security & dependency updates",
                    "Uptime monitoring & backups",
                    "Minor text/image updates",
                    "Priority bug fixes for features",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 shrink-0 text-orange-500 mt-0.5" />
                      <span className="text-sm font-medium text-gray-600 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* SEO Add-on */}
                <div className="mt-6 p-4 rounded-2xl bg-orange-50 border border-orange-100/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Plus className="w-3 h-3 text-orange-500" /> Monthly SEO
                    </span>
                    <span className="text-sm font-black text-black">
                      + £70
                      <span className="text-[10px] text-gray-500 font-bold ml-1">
                        /mo
                      </span>
                    </span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-500 leading-relaxed pl-5">
                    Continuous search engine optimization and keyword scaling.
                    Can be added to any plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Pay Per Fix */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-gray-600" />
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-black text-gray-900">Pay-Per-Fix</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-gray-400">£</span>
                  <span className="text-4xl font-black text-black">20</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    /fix
                  </span>
                </div>
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  {[
                    "Fixing errors & small bugs",
                    "Small UI or layout tweaks",
                    "Updating text or new images",
                    "Fixing broken links/buttons",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Plus className="w-4 h-4 shrink-0 text-gray-400 mt-0.5" />
                      <span className="text-sm font-medium text-gray-600 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <X className="w-3 h-3 text-gray-400" />
                    <span className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">
                      Not Included
                    </span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-500 leading-relaxed pl-5">
                    New pages and custom feature development are not covered by
                    this tier and will be quoted separately based on project
                    scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CTA SECTION                                    */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-black text-white selection:bg-orange-500/30">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center space-y-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Ready to start?
            </h2>
            <p className="text-lg font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Reach out via WhatsApp or book a call. We will discuss your exact
              needs and set up the perfect package to elevate your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/447466368427"
                target="_blank"
                rel="noopener"
                className="group flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-3 px-10 py-5 bg-orange-600 hover:bg-orange-500 rounded-2xl text-sm font-black tracking-widest text-white uppercase transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_rgba(234,88,12,0.4)]"
              >
                Message Us on WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://calendly.com/arcai-support/30min"
                target="_blank"
                rel="noopener"
                className="flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 rounded-2xl text-sm font-black tracking-widest text-white uppercase transition-all duration-300 border border-white/10"
              >
                Book a Direct Call
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-white/10">
              <a
                href="mailto:support@arcai.agency"
                className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@arcai.agency
              </a>
              <a
                href="tel:+447466368427"
                className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +44 7466 368427 (UK)
              </a>
              <a
                href="tel:+94771852522"
                className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +94 771852522 (LK)
              </a>
              <a
                href="https://wa.me/94764662384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-green-500 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp AI Agent
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} ARC AI Agency (Pvt) Ltd. All rights
            reserved.
          </p>
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-center">
            Strictly Confidential — Authorized Personnel Only
          </p>
        </div>
      </footer>
    </div>
  );
}
