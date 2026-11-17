'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, X, ArrowRight, Shield, Globe, Lock, ShoppingCart, Code2, Plus, Zap, Mail, Phone, Sparkles, MessageCircle } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    tagline: 'Get Online Fast',
    price: '60,000',
    monthly: null,
    color: 'rgb(251,146,60)', // Orange 400
    timeline: '2–3 days',
    bestFor: 'Businesses that need a clean, professional web presence fast.',
    features: [
      'Modern responsive website (5 pages)',
      'Clean, minimal design — standard layouts',
      'WhatsApp button + contact/inquiry form',
      'Mobile-optimized & fast-loading',
      'Free hosting forever',
    ],
    notIncluded: [
      'Custom animations & parallax effects',
      'Glassmorphism & advanced UI',
      'Bespoke hero sections',
      'SEO structured data',
    ],
  },
  {
    name: 'Launch',
    tagline: 'Stand Out & Convert',
    price: '90,000',
    monthly: null,
    color: 'rgb(249,115,22)', // Orange 500
    timeline: '3–5 days',
    bestFor: 'Businesses that want a stunning, conversion-focused website that stands out.',
    features: [
      'Everything in Starter, plus:',
      'Modern responsive website (8 pages)',
      'Premium custom design with advanced animations',
      'Parallax scrolling, hover effects, micro-interactions',
      'Glassmorphism cards & bespoke hero section',
      'Video/animation support in hero',
      'Conversion-optimized layout with strategic CTAs',
      'Full SEO with structured data & meta tags',
    ],
    notIncluded: [],
  },
  {
    name: 'Growth',
    tagline: 'Capture & Close Leads',
    price: '130,000',
    monthly: null,
    color: 'rgb(234,88,12)', // Orange 600
    popular: true,
    timeline: '5–7 days',
    bestFor: 'Businesses that want a premium website plus a system to capture, track, and close more leads.',
    features: [
      'Everything in Launch, plus:',
      'Extensive responsive website (15 pages)',
      'Lead Dashboard — every inquiry in one place',
      'CRM pipeline (New → Contacted → Quoted → Won/Lost)',
      'Email capture + newsletter system',
      'Email campaigns — promos, updates, re-engagement',
    ],
    notIncluded: [],
  },
  {
    name: 'Scale',
    tagline: '24/7 AI-Powered Sales',
    price: '160,000',
    monthly: '$4',
    color: 'rgb(194,65,12)', // Orange 700
    timeline: '5–7 days',
    bestFor: 'Businesses that want everything in Growth plus an AI agent handling inquiries around the clock.',
    features: [
      'Everything in Growth, plus:',
      'Extensive responsive website (23 pages)',
      'AI agent integrated into your website',
      'Instant responses to visitor questions 24/7',
      'Handles common inquiries & guides users to action',
      'Improves response time and availability',
      '1 Month Free Keyword Optimization',
    ],
    notIncluded: [],
  },
];

const comparisonFeatures: Array<Record<string, any>> = [
  { name: 'Number of Pages', starter: '5', launch: '8', growth: '15', scale: '23' },
  { name: 'Additional Pages Option', starter: 'Rs 4,000/each', launch: 'Rs 6,000/each', growth: 'Rs 6,000/each', scale: 'Rs 6,000/each' },
  { name: 'WhatsApp Button + Contact Form', starter: true, launch: true, growth: true, scale: true },
  { name: 'Mobile Optimized', starter: true, launch: true, growth: true, scale: true },
  { name: 'Free Hosting Forever', starter: true, launch: true, growth: true, scale: true },
  { name: 'Custom Animations & Parallax', starter: false, launch: true, growth: true, scale: true },
  { name: 'Glassmorphism & Advanced UI', starter: false, launch: true, growth: true, scale: true },
  { name: 'Bespoke Hero Section (Video/Animation)', starter: false, launch: true, growth: true, scale: true },
  { name: 'Full SEO Optimization', starter: false, launch: true, growth: true, scale: true },
  { name: 'Lead Dashboard', starter: false, launch: false, growth: true, scale: true },
  { name: 'CRM Pipeline', starter: false, launch: false, growth: true, scale: true },
  { name: 'Email Capture + Newsletter', starter: false, launch: false, growth: true, scale: true },
  { name: 'Email Marketing Campaigns', starter: false, launch: false, growth: true, scale: true },
  { name: 'AI Agent (24/7 Support)', starter: false, launch: false, growth: false, scale: true },
];

export default function WebPricingClient() {
  const [hoveredPkg, setHoveredPkg] = useState<string | null>(null);

  return (
    <div className="home-cream min-h-screen bg-white text-ink selection:bg-ember/20">
      {/* ═══════════════════════════════════════════════ */}
      {/* HEADER / DOCUMENT INTRO                        */}
      {/* ═══════════════════════════════════════════════ */}
      <header className="relative border-b border-ink/10 bg-paper-soft">
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
                <p className="text-sm font-black tracking-widest text-ink uppercase">ARC AI AGENCY</p>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] font-bold text-ink-mute uppercase tracking-widest bg-paper-soft px-2 py-0.5 rounded-md inline-flex">
                  <Lock className="w-3 h-3" />
                  Confidential Pricing Proposal
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-ink leading-[1.1] tracking-[-0.035em]">
              Transparent Pricing.<br />
              <span className="text-ember-ink">
                Uncompromising Quality.
              </span>
            </h1>
            <p className="text-lg text-ink-mute max-w-2xl leading-relaxed font-medium">
              We build high-performance custom websites and e-commerce platforms designed to elevate your brand and drive revenue.
            </p>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════ */}
      {/* WEB PACKAGES                                   */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-ink/10 bg-white" id="packages">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-ember-deep uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-ember"></span> Corporate & Service Businesses
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-ink leading-tight tracking-[-0.035em]">
              Website Pricing
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                onMouseEnter={() => setHoveredPkg(pkg.name)}
                onMouseLeave={() => setHoveredPkg(null)}
                className={`cut-card [--cut:22px] relative flex flex-col transition-all duration-500 overflow-hidden bg-white ${
                  hoveredPkg === pkg.name
                    ? '[--cut-line:rgba(255,73,37,0.3)] shadow-[0_20px_60px_-15px_rgba(234,88,12,0.1)] scale-[1.02] z-10'
                    : '[--cut-line:rgba(27,26,23,0.1)] shadow-sm'
                } ${pkg.popular ? 'ring-2 ring-ember shadow-lg' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-ember text-ink text-[10px] font-black uppercase tracking-widest py-1.5 text-center">
                    Most Popular Choice
                  </div>
                )}

                <div className={`p-8 space-y-6 flex-1 flex flex-col ${pkg.popular ? 'pt-10' : ''}`}>
                  <div className="space-y-2">
                    <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>
                      {pkg.name}
                    </p>
                    <p className="text-sm font-bold text-ink">{pkg.tagline}</p>
                  </div>

                  <div className="space-y-2 pb-6 border-b border-ink/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-ink-mute">Rs</span>
                      <span className="text-4xl font-black text-ink tracking-tight">{pkg.price}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink-mute">
                        {pkg.monthly ? `One-time + ${pkg.monthly}/month AI fee` : 'One-time payment. No monthly fees.'}
                      </p>
                      <p className="text-xs font-medium text-ink-mute mt-1 flex items-center gap-1.5">
                        <Plus className="w-3 h-3" /> Additional pages: {pkg.name === 'Starter' ? 'Rs 4,000' : 'Rs 6,000'} / each
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1 pb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full p-0.5" style={{ backgroundColor: `${pkg.color}15` }}>
                          <Check className="w-3 h-3 shrink-0" style={{ color: pkg.color }} />
                        </div>
                        <span className="text-sm font-medium text-ink-soft leading-snug">{feature}</span>
                      </div>
                    ))}
                    {pkg.notIncluded.map((feature, i) => (
                      <div key={`no-${i}`} className="flex items-start gap-3 opacity-40">
                        <div className="mt-0.5 rounded-full p-0.5 bg-paper-soft">
                          <X className="w-3 h-3 shrink-0 text-ink-mute" />
                        </div>
                        <span className="text-sm font-medium text-ink-mute leading-snug line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/447466368427"
                    target="_blank"
                    rel="noopener"
                    className="cut-btn [--cut:12px] mt-auto flex items-center justify-center gap-2 px-6 py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-sm"
                    style={{
                      backgroundColor: pkg.color,
                      color: 'white',
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
      <section className="border-b border-ink/10 bg-paper-soft hidden md:block">
        <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-ember-deep uppercase tracking-widest">Detailed Breakdown</p>
            <h2 className="text-3xl font-medium text-ink tracking-[-0.035em]">Compare Features</h2>
          </div>

          <div className="relative -mx-6 px-6 pb-4">
            <div className="cut-card [--cut:22px] relative overflow-x-auto [--cut-line:rgba(27,26,23,0.1)] bg-white shadow-sm">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-ink/10">
                    <th className="py-5 px-6 text-xs font-black text-ink-mute uppercase tracking-widest w-[35%] bg-white sticky left-0 z-20 shadow-[0_24px_48px_-32px_rgba(58,48,26,0.4)]">Feature</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="py-5 px-4 text-center border-l border-ink/10">
                        <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>{pkg.name}</p>
                        <p className="text-[11px] font-bold text-ink-mute mt-1 uppercase tracking-wider">Rs {pkg.price}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={feature.name} className="group transition-colors bg-white hover:bg-paper-soft">
                      <td className="py-4 px-6 text-sm font-bold text-ink-soft sticky left-0 z-10 bg-white group-hover:bg-paper-soft border-r border-ink/10 shadow-[0_24px_48px_-32px_rgba(58,48,26,0.4)] transition-colors">{feature.name}</td>
                      {(['starter', 'launch', 'growth', 'scale'] as const).map((tier) => (
                        <td key={tier} className="py-4 px-4 text-center border-l border-ink/10">
                          {typeof feature[tier] === 'boolean' ? (
                            feature[tier] ? (
                              <div className="w-5 h-5 rounded-full bg-ember/10 flex items-center justify-center mx-auto">
                                 {(() => {
                                   const color = packages.find(p => p.name.toLowerCase() === tier)?.color || '#f97316';
                                   return <Check className="w-3 h-3" style={{ color }} />;
                                 })()}
                              </div>
                            ) : (
                              <X className="w-4 h-4 mx-auto text-ink-soft" />
                            )
                          ) : (
                            <span className="text-sm font-bold text-ink-soft">{feature[tier]}</span>
                          )}
                        </td>
                      ))}
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
      <section className="border-b border-ink/10 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-20 sm:py-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-black text-ember-deep uppercase tracking-widest justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-ember"></span> Digital Storefronts <span className="w-8 h-px bg-ember"></span>
            </p>
            <h2 className="text-4xl sm:text-5xl font-medium text-ink leading-tight tracking-[-0.035em]">
              E-Commerce Stores
            </h2>
            <p className="text-lg text-ink-mute font-medium">
              Sell products online with a store designed for maximum conversion. Choose a streamlined Shopify setup, or a breathtaking custom-coded Next.js experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Shopify Build */}
            <div className="cut-card [--cut:22px] bg-white p-8 sm:p-12 [--cut-line:rgba(27,26,23,0.1)] shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col">
              <div className="absolute top-0 inset-x-0 h-1 bg-paper-soft group-hover:bg-[#FF5C3A] transition-colors"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-paper-soft flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-ink" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-ink">Shopify Theme Build</h3>
                  <p className="text-sm font-bold text-ink-mute">Fast Setup & Reliable Themes</p>
                </div>
              </div>

              <div className="space-y-1 pb-8 border-b border-ink/10 mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-ink-mute">Rs</span>
                  <span className="text-5xl font-black text-ink tracking-tight">75,000</span>
                </div>
                <p className="text-sm font-semibold text-ink-mute pt-2 flex items-center gap-2">
                   + $25/month <span className="text-[11px] bg-paper-soft px-2 py-0.5 rounded text-ink-soft">Paid directly to Shopify</span>
                </p>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  'Built using the official Shopify store builder',
                  'High-quality, reliable theme-based design',
                  'Standard e-commerce layout & user flows',
                  'Easy-to-use product management dashboard',
                  'Built-in secure checkout process',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 text-ember-deep" />
                    <span className="text-sm font-medium text-ink-soft leading-relaxed">{feature}</span>
                  </div>
                ))}
                
                <div className="flex items-start gap-3 opacity-40 pt-4">
                  <X className="w-5 h-5 shrink-0 text-ink-mute" />
                  <span className="text-sm font-medium text-ink-mute leading-relaxed">No bespoke animations or highly custom coded layouts.</span>
                </div>
              </div>

              <a
                href="https://wa.me/447466368427"
                target="_blank"
                rel="noopener"
                className="cut-btn [--cut:12px] mt-10 w-full flex items-center justify-center gap-2 px-6 py-5 text-xs font-black uppercase tracking-widest transition-all duration-300 bg-paper-soft text-ink hover:bg-paper-soft hover:text-ink [--cut-line:rgba(27,26,23,0.1)]"
              >
                Choose Shopify
              </a>
            </div>

            {/* Custom Next.js Build */}
            <div className="cut-card [--cut:22px] bg-white p-8 sm:p-12 [--cut-w:2px] [--cut-line:rgb(255,73,37)] shadow-xl relative flex flex-col">
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-ember text-ink text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Premium Choice
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-ember/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-ember-deep" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-ink">Custom Next.js Store</h3>
                  <p className="text-sm font-bold text-ember-deep">Bespoke, Fast, & Unlimited Potential</p>
                </div>
              </div>

              <div className="space-y-1 pb-8 border-b border-ink/10 mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-ink-mute">Starts at Rs</span>
                  <span className="text-5xl font-black text-ink tracking-tight">120,000</span>
                </div>
                <p className="text-sm font-semibold text-ink-mute pt-2 flex items-center gap-2">
                   Includes 500MB Free Backend Space
                </p>
                <p className="text-xs text-ink-mute mt-1">Then just $25/month if storage exceeds 500MB</p>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  '100% custom-coded storefront using Next.js & React',
                  'Amazing, premium design with bespoke animations',
                  'Advanced UI features like glassmorphism & parallax',
                  'Unmatched loading speed & performance',
                  'Deeper, unrestricted Technical SEO capabilities compared to Shopify',
                  'Ultimate flexibility: Add ANY custom feature you want',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 text-ember-deep" />
                    <span className="text-sm font-medium text-ink-soft leading-relaxed">{feature}</span>
                  </div>
                ))}

                {/* Add-ons */}
                <div className="cut-card [--cut:18px] relative mt-6 p-4 bg-ember/10 [--cut-line:rgba(255,73,37,0.3)] space-y-3">
                  <p className="text-[10px] font-black text-ember-deep uppercase tracking-widest">Optional Custom Integrations:</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-ink-soft flex items-center gap-2"><Plus className="w-3 h-3 text-ember-deep" /> Payment Gateway</span>
                    <span className="text-sm font-black text-ink">+ Rs 25,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-ink-soft flex items-center gap-2"><Plus className="w-3 h-3 text-ember-deep" /> Delivery Integration</span>
                    <span className="text-sm font-black text-ink">+ Rs 25,000</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/447466368427"
                target="_blank"
                rel="noopener"
                className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] mt-10 w-full flex items-center justify-center gap-2 px-6 py-5 text-xs font-black uppercase tracking-widest transition-all duration-300 bg-ember text-ink hover:bg-[#FF5C3A] shadow-[0_10px_40px_-10px_rgba(234,88,12,0.5)]"
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
      <section className="bg-paper-soft border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto px-6 py-20 sm:py-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-black text-ember-deep uppercase tracking-widest justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-ember"></span> Post-Launch Support
            </p>
            <h2 className="text-4xl sm:text-5xl font-medium text-ink leading-tight tracking-[-0.035em]">
              Hosting & Maintenance
            </h2>
            <p className="text-lg text-ink-mute font-medium">Protect your investment with reliable maintenance layers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[1150px] mx-auto">
            {/* Hosting */}
            <div className="cut-card [--cut:22px] relative p-8 sm:p-10 bg-white [--cut-line:rgba(27,26,23,0.1)] space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-12 h-12 rounded-xl bg-paper-soft flex items-center justify-center mb-2">
                <Globe className="w-6 h-6 text-ink-soft" />
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-black text-ink">Standard Hosting</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-ink">Free</span>
                  <span className="text-sm font-bold text-ink-mute uppercase tracking-widest">forever</span>
                </div>
                <div className="space-y-3 pt-6 border-t border-ink/10">
                  <p className="text-sm font-medium text-ink-mute leading-relaxed">
                    Hosting is completely free forever for standard websites as long as total uploaded media stays within 1GB limit.
                  </p>
                </div>
              </div>
            </div>

            {/* Annual Maintenance */}
            <div className="cut-card [--cut:22px] p-8 sm:p-10 bg-white [--cut-w:2px] [--cut-line:rgb(255,73,37)] space-y-6 shadow-[0_8px_40px_rgba(234,88,12,0.1)] relative">
              <div className="absolute -top-3 inset-x-0 flex justify-center">
                <span className="bg-ember text-ink text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Recommended
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-ember/10 flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-ember-deep" />
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-black text-ink">Website Protection</p>
                <div className="space-y-3 pb-2 pt-2">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                    <span className="text-sm font-bold text-ink-mute">3 Months</span>
                    <span className="text-lg font-bold text-ink">Rs 40,000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                    <span className="text-sm font-bold text-ink-mute">6 Months</span>
                    <span className="text-lg font-bold text-ink">Rs 60,000</span>
                  </div>
                  <div className="p-3 sm:p-4 bg-ember/10 border border-ember/30 rounded-xl flex items-center justify-between mt-4">
                    <div className="flex flex-col">
                      <span className="text-base font-black text-ember-deep whitespace-nowrap">12 Months</span>
                      <span className="text-[10px] text-ember-deep font-black uppercase tracking-widest mt-0.5 whitespace-nowrap">Best Value</span>
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-ink whitespace-nowrap">Rs 90,000</span>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-ink/10">
                  {[
                    'Security & dependency updates',
                    'Uptime monitoring & backups',
                    'Minor text/image updates',
                    'Priority bug fixes for features',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 shrink-0 text-ember-deep mt-0.5" />
                      <span className="text-sm font-medium text-ink-soft leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* SEO Add-on */}
                <div className="cut-card [--cut:18px] relative mt-6 p-4 bg-ember/10 [--cut-line:rgba(255,73,37,0.3)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-ink-soft flex items-center gap-2">
                      <Plus className="w-3 h-3 text-ember-deep" /> Monthly SEO
                    </span>
                    <span className="text-sm font-black text-ink">+ Rs 20,000<span className="text-[10px] text-ink-mute font-bold ml-1">/mo</span></span>
                  </div>
                  <p className="text-[10px] font-medium text-ink-mute leading-relaxed pl-5">
                    Continuous search engine optimization and keyword scaling. Can be added to any plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Pay Per Fix */}
            <div className="cut-card [--cut:22px] relative p-8 sm:p-10 bg-white [--cut-line:rgba(27,26,23,0.1)] space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="w-12 h-12 rounded-xl bg-paper-soft flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-ink-soft" />
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-black text-ink">Pay-Per-Fix</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-ink-mute">Rs</span>
                  <span className="text-4xl font-black text-ink">5,000</span>
                  <span className="text-sm font-bold text-ink-mute uppercase tracking-widest">/fix</span>
                </div>
                <div className="space-y-4 pt-6 border-t border-ink/10">
                   {[
                    'Fixing errors & small bugs',
                    'Small UI or layout tweaks',
                    'Updating text or new images',
                    'Fixing broken links/buttons',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Plus className="w-4 h-4 shrink-0 text-ink-mute mt-0.5" />
                      <span className="text-sm font-medium text-ink-soft leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Disclaimer */}
                <div className="cut-card [--cut:18px] relative mt-6 p-4 bg-paper-soft [--cut-line:rgba(27,26,23,0.1)] space-y-2">
                  <div className="flex items-center gap-2">
                    <X className="w-3 h-3 text-ink-mute" />
                    <span className="text-[11px] font-bold text-ink-soft uppercase tracking-widest">Not Included</span>
                  </div>
                  <p className="text-[10px] font-medium text-ink-mute leading-relaxed pl-5">
                    New pages and custom feature development are not covered by this tier and will be quoted separately based on project scope.
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
      <section className="bg-transparent text-ink selection:bg-ember/30">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center space-y-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-ink leading-tight tracking-[-0.035em]">
              Ready to start?
            </h2>
            <p className="text-lg font-medium text-ink-mute max-w-2xl mx-auto leading-relaxed">
              Reach out via WhatsApp or book a call. We will discuss your exact needs and set up the perfect package to elevate your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
               <a
                href="https://wa.me/447466368427"
                target="_blank"
                rel="noopener"
                className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] group flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-3 px-10 py-5 bg-ember hover:bg-[#FF5C3A] text-sm font-black tracking-widest text-ink uppercase transition-all duration-300"
              >
                Message Us on WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://calendly.com/arcai-support/30min"
                target="_blank"
                rel="noopener"
                className="cut-btn [--cut:12px] flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-3 px-10 py-5 bg-white/70 hover:bg-white text-sm font-black tracking-widest text-ink uppercase transition-all duration-300 [--cut-line:rgba(27,26,23,0.1)]"
              >
                Book a Direct Call
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-ink/10">
              <a href="mailto:support@arcai.agency" className="flex items-center gap-2 text-sm font-bold text-ink-mute hover:text-ink transition-colors">
                <Mail className="w-4 h-4" />
                support@arcai.agency
              </a>
              <a href="tel:+447466368427" className="flex items-center gap-2 text-sm font-bold text-ink-mute hover:text-ink transition-colors">
                <Phone className="w-4 h-4" />
                +44 7466 368427 (UK)
              </a>
              <a href="tel:+94771852522" className="flex items-center gap-2 text-sm font-bold text-ink-mute hover:text-ink transition-colors">
                <Phone className="w-4 h-4" />
                +94 771852522 (LK)
              </a>
              <a href="https://wa.me/94764662384" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp AI Agent
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-transparent py-8 border-t border-ink/10">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-ink-soft uppercase tracking-widest">
            © {new Date().getFullYear()} ARC AI Agency (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-[10px] font-bold text-ink-soft uppercase tracking-widest text-center">
            Strictly Confidential — Authorized Personnel Only
          </p>
        </div>
      </footer>
    </div>
  );
}
