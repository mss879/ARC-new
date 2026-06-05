'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, X, ArrowRight, Lock, Plus, Zap, Mail, Phone, Sparkles, Video, Camera, FileText, Award, BarChart3, HelpCircle } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    tagline: 'Establish Your Presence',
    price: '50,000',
    color: 'rgb(251,146,60)', // Orange 400
    bestFor: 'Small businesses starting their social media presence and needing consistent posting.',
    features: [
      '10 Creative Social Media Posts',
      'Content Planning & Scheduling',
      'Basic Caption Writing',
      'Monthly Performance Overview',
      'Basic Graphic Design Support',
    ],
    notIncluded: [
      'Mobile Reels/Short-form Video',
      'Advanced Content Strategy',
      'Professional Copywriting',
      'Detailed Analytics & Strategy Review',
      'Priority Design Support',
      'Brand Consultation & Campaign Planning',
    ],
  },
  {
    name: 'Intermediate',
    tagline: 'Accelerate Your Engagement',
    price: '80,000',
    color: 'rgb(249,115,22)', // Orange 500
    popular: true,
    bestFor: 'Growing businesses looking for professional consistency and video engagement.',
    features: [
      '18 Creative Social Media Posts',
      'Content Planning & Scheduling',
      'Professional Caption Writing',
      'Monthly Performance Report',
      'Priority Design Support',
      '1 Mobile Reel Included',
    ],
    notIncluded: [
      'Advanced Content Strategy',
      'Professional Copywriting (Bespoke Campaign Ads)',
      'Detailed Analytics Report',
      'Priority Creative Support (Photography/Consultation)',
      '2 Mobile Reels (Only 1 included)',
      'Brand Consultation & Campaign Planning',
    ],
  },
  {
    name: 'Premium',
    tagline: 'Dominate the Digital Space',
    price: '120,000',
    color: 'rgb(234,88,12)', // Orange 600
    bestFor: 'Established brands looking for a comprehensive digital campaign strategy and premium content.',
    features: [
      '20 Creative Social Media Posts',
      'Advanced Content Strategy',
      'Professional Copywriting',
      'Detailed Analytics Report',
      'Priority Creative Support',
      '2 Mobile Reels Included',
      'Brand Consultation & Campaign Planning',
    ],
    notIncluded: [],
  },
];

const comparisonFeatures = [
  { name: 'Creative Social Media Posts', starter: '10 Posts', intermediate: '18 Posts', premium: '20 Posts' },
  { name: 'Content Planning & Scheduling', starter: true, intermediate: true, premium: true },
  { name: 'Caption Writing', starter: 'Basic Captioning', intermediate: 'Professional Captioning', premium: 'Professional Copywriting' },
  { name: 'Performance Reports', starter: 'Basic Overview', intermediate: 'Monthly Report', premium: 'Detailed Analytics Report' },
  { name: 'Graphic Design Support', starter: 'Basic Support', intermediate: 'Priority Support', premium: 'Priority Creative Support' },
  { name: 'Mobile Reels / Short Video', starter: false, intermediate: '1 Reel Included', premium: '2 Reels Included' },
  { name: 'Brand Consultation', starter: false, intermediate: false, premium: true },
  { name: 'Campaign Planning', starter: false, intermediate: false, premium: true },
];

const addOns = [
  {
    icon: FileText,
    title: 'Additional Creative Post',
    desc: 'Custom-designed static or carousel post featuring original copy and brand-aligned graphics.',
    price: '15,000',
    period: '/post',
  },
  {
    icon: Video,
    title: 'Additional Mobile Reel',
    desc: 'Bespoke short-form video (up to 60s) complete with trending audio selection, subtitles, and color grading.',
    price: '25,000',
    period: '/reel',
  },
  {
    icon: BarChart3,
    title: 'Ads Setup & Management',
    desc: 'End-to-end setup and weekly optimization of Meta (FB/IG) or Google ad campaigns for conversions and leads.',
    price: '35,000',
    period: '/month',
  },
  {
    icon: Camera,
    title: 'Professional Photography',
    desc: 'Half-day photo shoot at your location to produce authentic product, lifestyle, or team content assets.',
    price: '35,000',
    period: '/shoot',
  },
  {
    icon: Award,
    title: 'Brand Strategy Workshop',
    desc: 'Deep-dive session to establish brand voice, target buyer personas, and custom campaign visual guidelines.',
    price: '40,000',
    period: '/session',
  },
];

export default function DigitalMarketingPricingClient() {
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
              <Image
                src="/logos/halo.webp"
                alt="Halo Media Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback image if webp fails
                  const target = e.target as HTMLImageElement;
                  target.src = "/halo.png";
                }}
              />
              <div>
                <p className="text-sm font-black tracking-widest text-black">
                  HALO MEDIA <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider ml-1.5 bg-gray-100 px-2 py-0.5 rounded-md">powered by ARC AI</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100/80 px-2 py-0.5 rounded-md inline-flex">
                  <Lock className="w-3 h-3" />
                  Confidential Pricing Proposal
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tight">
              Grow Your Brand.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Dominate Social Media.
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
              We specialize in creating engaging social media content, branding strategies, and digital campaigns that help businesses build strong online visibility and customer engagement.
            </p>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════ */}
      {/* SOCIAL MEDIA PACKAGES                           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white" id="packages">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Social Media Management
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              Monthly Packages
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                onMouseEnter={() => setHoveredPkg(pkg.name)}
                onMouseLeave={() => setHoveredPkg(null)}
                className={`relative flex flex-col rounded-3xl border transition-all duration-500 overflow-hidden bg-white ${
                  hoveredPkg === pkg.name
                    ? 'border-orange-200 shadow-[0_20px_60px_-15px_rgba(234,88,12,0.1)] scale-[1.02] z-10'
                    : 'border-gray-100 shadow-sm'
                } ${pkg.popular ? 'ring-2 ring-orange-500 shadow-lg' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest py-1.5 text-center">
                    Most Popular Choice
                  </div>
                )}

                <div className={`p-8 space-y-6 flex-1 flex flex-col ${pkg.popular ? 'pt-10' : ''}`}>
                  <div className="space-y-2">
                    <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>
                      {pkg.name}
                    </p>
                    <p className="text-sm font-bold text-gray-900">{pkg.tagline}</p>
                  </div>

                  <div className="space-y-2 pb-6 border-b border-gray-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-bold text-gray-400">LKR</span>
                      <span className="text-4xl font-black text-black tracking-tight">{pkg.price}</span>
                      <span className="text-xs font-semibold text-gray-500">/ Month</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">
                        Monthly retainer plan. Flexible terms.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1 pb-6">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Included Services</p>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full p-0.5" style={{ backgroundColor: `${pkg.color}15` }}>
                          <Check className="w-3 h-3 shrink-0" style={{ color: pkg.color }} />
                        </div>
                        <span className="text-sm font-medium text-gray-600 leading-snug">{feature}</span>
                      </div>
                    ))}
                    {pkg.notIncluded.map((feature, i) => (
                      <div key={`no-${i}`} className="flex items-start gap-3 opacity-40">
                        <div className="mt-0.5 rounded-full p-0.5 bg-gray-100">
                          <X className="w-3 h-3 shrink-0 text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-500 leading-snug line-through">{feature}</span>
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
      {/* OPTIONAL ADD-ON SERVICES                        */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-[1280px] mx-auto px-6 py-20 sm:py-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Customize Your Scope <span className="w-8 h-px bg-orange-500"></span>
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight tracking-tight">
              Optional Add-On Services
            </h2>
            <p className="text-lg text-gray-500 font-medium">
              Scale up your package coverage on demand with specialized creative and promotional add-ons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, i) => {
              const IconComp = addon.icon;
              return (
                <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative group flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black mb-2">{addon.title}</h3>
                      <p className="text-sm font-medium text-gray-500 leading-relaxed">{addon.desc}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-50 flex items-baseline justify-between">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Rate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-gray-400">+ LKR</span>
                      <span className="text-2xl font-black text-black tracking-tight">{addon.price}</span>
                      <span className="text-xs font-semibold text-gray-500">{addon.period}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* COMPARISON TABLE                                */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white hidden md:block">
        <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest">Detailed Breakdown</p>
            <h2 className="text-3xl font-black text-black tracking-tight">Compare Packages</h2>
          </div>

          <div className="relative -mx-6 px-6 pb-4">
            <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-sm">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-gray-100">
                    <th className="py-5 px-6 text-xs font-black text-gray-400 uppercase tracking-widest w-[35%] bg-white sticky left-0 z-20 shadow-[4px_0_12px_rgba(0,0,0,0.02)]">Deliverable</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="py-5 px-4 text-center border-l border-gray-50">
                        <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>{pkg.name}</p>
                        <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">LKR {pkg.price}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={feature.name} className="group transition-colors bg-white hover:bg-gray-50/50">
                      <td className="py-4 px-6 text-sm font-bold text-gray-600 sticky left-0 z-10 bg-white group-hover:bg-gray-50/50 border-r border-gray-50 shadow-[2px_0_12px_rgba(0,0,0,0.01)] transition-colors">{feature.name}</td>
                      {(['starter', 'intermediate', 'premium'] as const).map((tier) => (
                        <td key={tier} className="py-4 px-4 text-center border-l border-gray-50">
                          {typeof feature[tier] === 'boolean' ? (
                            feature[tier] ? (
                              <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center mx-auto">
                                 {(() => {
                                   const color = packages.find(p => p.name.toLowerCase() === tier)?.color || '#f97316';
                                   return <Check className="w-3 h-3" style={{ color }} />;
                                 })()}
                              </div>
                            ) : (
                              <X className="w-4 h-4 mx-auto text-gray-200" />
                            )
                          ) : (
                            <span className="text-sm font-bold text-gray-700">{feature[tier]}</span>
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
      {/* WHY HALO MEDIA                                  */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 py-20 sm:py-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-black text-orange-500 uppercase tracking-widest justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Partnership Value
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight tracking-tight">
              Why Choose Halo Media?
            </h2>
            <p className="text-lg text-gray-500 font-medium">We build scroll-worthy presence that drives measurable connection.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: 'Trend-Driven Content',
                desc: 'Creative, trend-focused layouts and formats that capture attention and increase scroll-stopping engagement.',
              },
              {
                title: 'Dedicated Team Support',
                desc: 'Responsive, professional designers and content creators working directly with you to support brand goals.',
              },
              {
                title: 'Bespoke Brand Strategy',
                desc: 'Every piece of design and text is customized to tell your unique brand story rather than using generic templates.',
              },
              {
                title: 'Growth & Visibility Focus',
                desc: 'Our workflow aligns closely with actual engagement, building long-term authority and conversion for your services.',
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-gray-100 space-y-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              Ready to elevate your presence?
            </h2>
            <p className="text-lg font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We look forward to collaborating with your brand. Let&apos;s discuss your visual roadmap, customize campaign scopes, and start posting content that converts.
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
              <a href="mailto:support@arcai.agency" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                support@arcai.agency
              </a>
              <a href="tel:+447466368427" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +44 7466 368427 (UK)
              </a>
              <a href="tel:+94771852522" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +94 771852522 (LK)
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} ARC AI Agency (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-center">
            Strictly Confidential — Authorized Personnel Only
          </p>
        </div>
      </footer>
    </div>
  );
}
