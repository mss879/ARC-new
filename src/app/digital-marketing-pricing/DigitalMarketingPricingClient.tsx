'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, X, ArrowRight, Lock, Plus, Zap, Mail, Phone, Sparkles, Video, Camera, FileText, Award, BarChart3, HelpCircle, MessageCircle } from 'lucide-react';

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
      'Ad Campaigns',
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
      '1 Ad Campaign Included',
    ],
    notIncluded: [
      'Advanced Content Strategy',
      'Professional Copywriting (Bespoke Campaign Ads)',
      'Detailed Analytics Report',
      'Priority Creative Support (Photography/Consultation)',
      '2 Mobile Reels (Only 1 included)',
      '2 Ad Campaigns (Only 1 included)',
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
      '2 Ad Campaigns Included',
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
  { name: 'Ad Campaigns', starter: false, intermediate: '1 Campaign Included', premium: '2 Campaigns Included' },
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
    price: '30,000',
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
    price: '45,000',
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
    <div className="home-cream min-h-screen bg-white text-ink selection:bg-ember/20">
      {/* ═══════════════════════════════════════════════ */}
      {/* HEADER / DOCUMENT INTRO                        */}
      {/* ═══════════════════════════════════════════════ */}
      <header className="relative border-b border-ink/10 bg-paper-soft">
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
                <p className="text-sm font-black tracking-widest text-ink">
                  HALO MEDIA <span className="text-ink-mute text-[10px] font-bold uppercase tracking-wider ml-1.5 bg-paper-soft px-2 py-0.5 rounded-md">powered by ARC AI</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 text-[10px] font-bold text-ink-mute uppercase tracking-widest bg-paper-soft px-2 py-0.5 rounded-md inline-flex">
                  <Lock className="w-3 h-3" />
                  Confidential Pricing Proposal
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-ink leading-[1.1] tracking-[-0.035em]">
              Grow Your Brand.<br />
              <span className="text-ember-ink">
                Dominate Social Media.
              </span>
            </h1>
            <p className="text-lg text-ink-mute max-w-2xl leading-relaxed font-medium">
              We specialize in creating engaging social media content, branding strategies, and digital campaigns that help businesses build strong online visibility and customer engagement.
            </p>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════ */}
      {/* SOCIAL MEDIA PACKAGES                           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-ink/10 bg-white" id="packages">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <p className="text-xs font-black text-ember-deep uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-px bg-ember"></span> Social Media Management
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-ink leading-tight tracking-[-0.035em]">
                Monthly Packages
              </h2>
            </div>
            <div className="cut-card [--cut:18px] relative bg-ember/10 [--cut-line:rgba(255,73,37,0.3)] p-4 max-w-md shadow-sm">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-ember-deep shrink-0 mt-0.5" />
                <p className="text-xs text-orange-950 leading-relaxed font-medium">
                  <strong className="font-black text-orange-900 block mb-0.5">Ad Account Setup Notice</strong>
                  If your Meta (FB/IG) or Google ad accounts are not already set up, a <strong className="font-black text-orange-950 bg-ember/10 px-1.5 py-0.5 rounded">LKR 10,000</strong> one-time setup fee applies.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-bold text-ink-mute">LKR</span>
                      <span className="text-4xl font-black text-ink tracking-tight">{pkg.price}</span>
                      <span className="text-xs font-semibold text-ink-mute">/ Month</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink-mute">
                        Monthly retainer plan. Flexible terms.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1 pb-6">
                    <p className="text-[10px] font-bold text-ink-mute uppercase tracking-widest mb-3">Included Services</p>
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

          <div className="cut-card [--cut:18px] relative p-4 bg-paper-soft [--cut-line:rgba(27,26,23,0.1)] flex items-center justify-between text-xs text-ink-mute">
            <span className="flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4 text-ember-deep shrink-0" />
              <span>Note: A one-time setup fee of <strong>LKR 10,000</strong> applies only if ad accounts (Meta / Google) are not previously created and configured.</span>
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* OPTIONAL ADD-ON SERVICES                        */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-ink/10 bg-paper-soft">
        <div className="max-w-[1280px] mx-auto px-6 py-20 sm:py-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-black text-ember-deep uppercase tracking-widest justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-ember"></span> Customize Your Scope <span className="w-8 h-px bg-ember"></span>
            </p>
            <h2 className="text-4xl sm:text-5xl font-medium text-ink leading-tight tracking-[-0.035em]">
              Optional Add-On Services
            </h2>
            <p className="text-lg text-ink-mute font-medium">
              Scale up your package coverage on demand with specialized creative and promotional add-ons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, i) => {
              const IconComp = addon.icon;
              return (
                <div key={i} className="cut-card [--cut:22px] bg-white p-8 [--cut-line:rgba(27,26,23,0.1)] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-ember/10 flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-ember-deep" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-ink mb-2">{addon.title}</h3>
                      <p className="text-sm font-medium text-ink-mute leading-relaxed">{addon.desc}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-ink/10 flex items-baseline justify-between">
                    <span className="text-[10px] font-black text-ink-mute uppercase tracking-widest">Rate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-ink-mute">+ LKR</span>
                      <span className="text-2xl font-black text-ink tracking-tight">{addon.price}</span>
                      <span className="text-xs font-semibold text-ink-mute">{addon.period}</span>
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
      <section className="border-b border-ink/10 bg-white hidden md:block">
        <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-black text-ember-deep uppercase tracking-widest">Detailed Breakdown</p>
            <h2 className="text-3xl font-medium text-ink tracking-[-0.035em]">Compare Packages</h2>
          </div>

          <div className="relative -mx-6 px-6 pb-4">
            <div className="cut-card [--cut:22px] relative overflow-x-auto [--cut-line:rgba(27,26,23,0.1)] bg-white shadow-sm">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-ink/10">
                    <th className="py-5 px-6 text-xs font-black text-ink-mute uppercase tracking-widest w-[35%] bg-white sticky left-0 z-20 shadow-[0_24px_48px_-32px_rgba(58,48,26,0.4)]">Deliverable</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="py-5 px-4 text-center border-l border-ink/10">
                        <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>{pkg.name}</p>
                        <p className="text-[11px] font-bold text-ink-mute mt-1 uppercase tracking-wider">LKR {pkg.price}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={feature.name} className="group transition-colors bg-white hover:bg-paper-soft">
                      <td className="py-4 px-6 text-sm font-bold text-ink-soft sticky left-0 z-10 bg-white group-hover:bg-paper-soft border-r border-ink/10 shadow-[0_24px_48px_-32px_rgba(58,48,26,0.4)] transition-colors">{feature.name}</td>
                      {(['starter', 'intermediate', 'premium'] as const).map((tier) => (
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
      {/* WHY HALO MEDIA                                  */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-paper-soft border-b border-ink/10">
        <div className="max-w-[1280px] mx-auto px-6 py-20 sm:py-32 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-black text-ember-deep uppercase tracking-widest justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-ember"></span> Partnership Value
            </p>
            <h2 className="text-4xl sm:text-5xl font-medium text-ink leading-tight tracking-[-0.035em]">
              Why Choose Halo Media?
            </h2>
            <p className="text-lg text-ink-mute font-medium">We build scroll-worthy presence that drives measurable connection.</p>
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
              <div key={i} className="cut-card [--cut:22px] relative p-8 bg-white [--cut-line:rgba(27,26,23,0.1)] space-y-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-ember/10 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5 text-ember-deep" />
                </div>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-sm font-medium text-ink-mute leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              Ready to elevate your presence?
            </h2>
            <p className="text-lg font-medium text-ink-mute max-w-2xl mx-auto leading-relaxed">
              We look forward to collaborating with your brand. Let&apos;s discuss your visual roadmap, customize campaign scopes, and start posting content that converts.
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
