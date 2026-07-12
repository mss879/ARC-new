'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Check, X, ArrowRight, Zap, BarChart3, Bot, Shield, Clock, Globe, Mail, Phone, Lock, Target, Brain, Workflow, MessageCircle } from 'lucide-react';

const packages = [
  {
    name: 'Flow',
    tagline: 'Automate Repetitive Work',
    label: 'Save Time',
    price: '75,000',
    monthly: '10,000/month',
    color: 'rgb(71,85,105)', // Slate 600
    timeline: '1–2 weeks',
    bestFor: 'Small businesses, service providers, and teams that want to reduce admin and improve efficiency.',
    features: [
      'Automation for one key business process',
      'Data pulled from receipts, forms, or documents',
      'Automatic updates to Google Sheets or your internal system',
      'Alerts and notifications when action is needed',
      'A simple internal AI assistant to help find information quickly'
    ],
    notIncluded: [
      'Website AI Chat Assistant',
      'AI Voice Calling (Inbound/Outbound)',
      'Sales Pipeline & CRM Integrations',
      'Custom Multi-Agent Orchestration'
    ],
    popular: false,
  },
  {
    name: 'Engage',
    tagline: '24/7 AI Lead Capture',
    label: 'Capture Leads',
    price: '135,000',
    monthly: '15,000/month',
    color: 'rgb(37,99,235)', // Blue 600
    timeline: '2–3 weeks',
    bestFor: 'Businesses that get website traffic and want a better way to handle enquiries and convert more leads.',
    features: [
      'Everything in Flow, plus:',
      'AI chat assistant for your website',
      'Answers based on your services and business information',
      'Lead capture and qualification',
      'Appointment booking integration',
      'Enquiry details sent to your team or CRM',
      'Basic reporting so you can track performance'
    ],
    notIncluded: [
      'AI Voice Calling (Inbound/Outbound)',
      'Automated follow-up SMS/Email sequences',
      'Custom Multi-Agent Orchestration'
    ],
    popular: true,
  },
  {
    name: 'Qualify',
    tagline: 'AI Voice Follow-Up & Booking',
    label: 'Book Faster',
    price: '195,000',
    monthly: '24,000/month',
    color: 'rgb(147,51,234)', // Purple 600
    timeline: '3–5 weeks',
    bestFor: 'Businesses with a regular flow of leads that need quicker response times and better follow-up.',
    features: [
      'Everything in Engage, plus:',
      'AI voice assistant for inbound or outbound calls',
      'Automated lead qualification over the phone',
      'Follow-up by SMS or email',
      'Call notes and summaries after each interaction',
      'Lead details updated directly into your system'
    ],
    notIncluded: [
      'Full Revenue & Ops System Integration',
      'Lead research and pre-call prep bots'
    ],
    popular: false,
  },
  {
    name: 'Command',
    tagline: 'Full AI Revenue System',
    label: 'Scale Smarter',
    price: '310,000',
    monthly: '45,000/month',
    color: 'rgb(234,88,12)', // Orange 600
    timeline: '6–8 weeks',
    bestFor: 'Growing businesses, agencies, and high-ticket service providers that want a complete AI-powered sales and operations system.',
    features: [
      'Everything in Qualify, plus:',
      'AI chat and voice working together seamlessly',
      'Automated complex follow-up sequences',
      'Sales support tools for your team',
      'Lead research and pre-call preparation',
      'Custom integrations with your forms, CRM, calendar, and workflows',
      'Executive dashboards and reporting for better decision-making'
    ],
    notIncluded: [],
    popular: false,
  },
];

const comparisonFeatures = [
  { name: 'Internal Process Automation', flow: true, engage: true, qualify: true, command: true },
  { name: 'Document / Data Parsing', flow: true, engage: true, qualify: true, command: true },
  { name: 'Website AI Chat Assistant', flow: false, engage: true, qualify: true, command: true },
  { name: 'Text Lead Capture & Booking', flow: false, engage: true, qualify: true, command: true },
  { name: 'CRM & Calendar Integration', flow: false, engage: true, qualify: true, command: true },
  { name: 'AI Voice (Inbound & Outbound)', flow: false, engage: false, qualify: true, command: true },
  { name: 'Automated Call Notes & SMS', flow: false, engage: false, qualify: true, command: true },
  { name: 'Pre-Call Lead Research', flow: false, engage: false, qualify: false, command: true },
  { name: 'Multi-Agent Orchestration', flow: false, engage: false, qualify: false, command: true },
];

export default function AIPricingClient() {
  const [hoveredPkg, setHoveredPkg] = useState<string | null>(null);

  // Subtle fade up animation
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-500/20">
      {/* ═══════════════════════════════════════════════ */}
      {/* HEADER / DOCUMENT INTRO                        */}
      {/* ═══════════════════════════════════════════════ */}
      <header className="relative border-b border-gray-100 bg-gray-50/50 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 py-12 sm:py-20 relative z-10">
          {/* Brand */}
          <div className="flex items-center justify-between mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                <Image src="/favicon.png" alt="ARC AI Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-black tracking-widest text-black uppercase">ARC AI AGENCY</p>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100/80 px-2 py-0.5 rounded-md inline-flex">
                  <Lock className="w-3 h-3" />
                  Confidential System Proposal
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="hidden sm:block text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Document ID: ARC-{new Date().getFullYear()}-AI-PRC</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Prepared for Intended Recipient</p>
            </motion.div>
          </div>

          {/* Document Title */}
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tight">
              AI Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Save Time,</span>
              <br />
              Capture Leads & Grow Revenue.
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
              Whether you want to automate admin work, respond to customers faster, or turn more enquiries into paying clients, our AI solutions are built to make your business run smarter. Choose the package that matches your current stage, then scale when you&apos;re ready.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap gap-6 mt-12 bg-white inline-flex p-3 rounded-2xl border border-gray-100 shadow-sm">
            {[
              { icon: Shield, label: 'Enterprise Security' },
              { icon: Clock, label: '24/7 Automation' },
              { icon: Globe, label: 'Deploy Anywhere' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-semibold text-gray-600 px-3">
                <badge.icon className="w-4 h-4 text-blue-500" />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════ */}
      {/* WHY AI MATTERS — PROBLEM STATEMENT             */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-3 gap-12">
            {[
              { stat: '78%', label: 'of customers buy from the first responder', desc: 'If you aren\'t answering inquiries within 5 minutes, your competitor is securing the sale.' },
              { stat: '40%', label: 'of an employee\'s day is spent on repetitive tasks', desc: 'Data entry, checking forms, and syncing spreadsheets burns thousands of hours per year.' },
              { stat: '3x', label: 'higher conversion rates with instant follow-up', desc: 'Bots don\'t sleep or take breaks. They capture, qualify, and book leads effortlessly 24/7.' },
            ].map((item) => (
              <motion.div variants={fadeUpVariant} key={item.stat} className="space-y-4">
                <p className="text-6xl font-black text-black tracking-tighter">{item.stat}</p>
                <p className="text-sm font-bold text-gray-900 leading-snug uppercase tracking-wide">{item.label}</p>
                <div className="w-10 h-1 bg-gradient-to-r from-gray-200 to-transparent rounded-full" />
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* THE SOLUTION — WHAT WE BUILD                   */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">What We Deliver</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              Not just software.<br />
              Digital employees that scale.
            </h2>
            <p className="text-base text-gray-500 max-w-2xl leading-relaxed font-medium">
              Every ARC AI system is built with a singular focus: freeing up your human capital to focus on high-value strategy, while AI securely handles the volume, speed, and precision.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Workflow, title: 'Workflow Automation', desc: 'We connect your disjointed apps so data flows effortlessly without manual entry.' },
              { icon: Bot, title: 'Intelligent Chatbots', desc: 'Agents loaded with your company knowledge base interacting seamlessly on your site.' },
              { icon: Phone, title: 'Cognitive Voice AI', desc: 'Human-sounding voice bots that can call leads within seconds of an form submission.' },
              { icon: Brain, title: 'Predictive Analytics', desc: 'Executive dashboards showing where leads come from and how bots are closing them.' },
            ].map((item) => (
              <motion.div variants={fadeUpVariant} key={item.title} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* PACKAGES                                       */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white" id="packages">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 text-center">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Choose Your AI Architecture</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              Start where you need help.<br />
              <span className="text-gray-400">Scale as you grow.</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <motion.div
                variants={fadeUpVariant}
                key={pkg.name}
                onMouseEnter={() => setHoveredPkg(pkg.name)}
                onMouseLeave={() => setHoveredPkg(null)}
                className={`relative flex flex-col rounded-3xl border transition-all duration-500 overflow-hidden bg-white ${
                  hoveredPkg === pkg.name
                    ? 'border-gray-200 shadow-2xl scale-[1.02] z-10'
                    : 'border-gray-100 shadow-sm'
                } ${pkg.popular ? 'ring-2 ring-blue-600 shadow-lg' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest py-1.5 text-center z-10">
                    Most Popular Choice
                  </div>
                )}

                <div className={`p-8 space-y-6 flex-1 flex flex-col ${pkg.popular ? 'pt-10' : ''}`}>
                  {/* Name & Tagline */}
                  <div className="space-y-2">
                    <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>
                      {pkg.name}
                    </p>
                    <p className="text-sm font-bold text-gray-900">{pkg.tagline}</p>
                    <div className="inline-flex px-2 py-0.5 mt-2 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest inline-flex">{pkg.label}</div>
                  </div>

                  {/* Price */}
                  <div className="space-y-2 pb-6 border-b border-gray-100">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Setup / Build Fee</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-gray-400">Rs</span>
                        <span className="text-4xl font-black text-black tracking-tight">{pkg.price}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Monthly System Retainer</p>
                      <p className="text-sm font-semibold text-gray-700">from Rs {pkg.monthly}</p>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100/50">
                    <p className="text-xs font-medium text-gray-600 leading-relaxed">
                      <span className="font-bold text-gray-900">Best for: </span>
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    <Clock className="w-4 h-4" />
                    <span>Deployed in <span className="text-gray-900">{pkg.timeline}</span></span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 flex-1 pb-6 py-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">What&apos;s Included</p>
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

                  {/* CTA */}
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
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center space-y-2 pt-6">
            <p className="text-sm font-bold text-gray-900 flex items-center justify-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center"><Zap className="w-2.5 h-2.5 text-blue-600"/></span>
              Not sure which package is right for you?
            </p>
            <p className="text-xs font-medium text-gray-500 max-w-2xl mx-auto">
              Start with one solution based on your biggest challenge today, then expand as your business grows. Every package is modular and built to scale with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* FULL COMPARISON TABLE                          */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Detailed Breakdown</p>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight">
              Compare Features.
            </h2>
          </motion.div>

          {/* Mobile View - Stacked Cards */}
          <div className="md:hidden space-y-4">
            {comparisonFeatures.map((feature) => (
              <div key={feature.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-4">
                <p className="text-sm font-bold text-gray-900">{feature.name}</p>
                <div className="flex flex-wrap gap-2">
                  {(['flow', 'engage', 'qualify', 'command'] as const).map((tier) => {
                    if (!feature[tier]) return null;
                    const pkg = packages.find(p => p.name.toLowerCase() === tier);
                    if (!pkg) return null;
                    return (
                      <div 
                        key={tier} 
                        className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-md"
                        style={{ backgroundColor: `${pkg.color}15`, color: pkg.color }}
                      >
                        {pkg.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Traditional Table */}
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hidden md:block relative -mx-6 px-6 pb-4">
            <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-5 px-6 text-xs font-black text-gray-500 uppercase tracking-widest w-[35%] sticky left-0 z-20 bg-gray-50 border-r border-gray-200 shadow-[4px_0_12px_rgba(0,0,0,0.03)]">Feature</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="py-5 px-4 text-center border-l border-gray-100">
                        <p className="text-sm font-black uppercase tracking-widest" style={{ color: pkg.color }}>{pkg.name}</p>
                        <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Rs {pkg.price}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={feature.name} className={`group transition-colors ${i % 2 === 0 ? 'bg-white hover:bg-gray-50/80' : 'bg-gray-50/70 hover:bg-gray-100/60'}`}>
                      <td className={`py-4 px-6 text-sm font-bold text-gray-700 sticky left-0 z-10 border-r border-gray-100 shadow-[2px_0_12px_rgba(0,0,0,0.02)] transition-colors ${i % 2 === 0 ? 'bg-white group-hover:bg-[#f8fafc]' : 'bg-[#f8fafc] group-hover:bg-[#f1f5f9]'}`}>{feature.name}</td>
                      {(['flow', 'engage', 'qualify', 'command'] as const).map((tier) => (
                        <td key={tier} className="py-4 px-4 text-center border-l border-gray-100">
                          {feature[tier] ? (
                            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mx-auto">
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                          ) : (
                            <X className="w-4 h-4 mx-auto text-gray-300" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* MAINTENANCE & API COSTS                        */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Ongoing Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight">
              Maintenance & API Retainer
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {/* System Retainer */}
            <motion.div variants={fadeUpVariant} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-black text-gray-900">Monthly System Retainer</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-gray-400">from Rs</span>
                  <span className="text-3xl font-black text-black">10,000</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">/mo</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Includes:</p>
                  {[
                    'Server hosting and continuous uptime monitoring',
                    'Regular prompt tuning and AI logic updates',
                    'Knowledge base syncing (monthly updates)',
                    'Dashboard maintenance and API connections updates'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 shrink-0 text-blue-600" />
                      <span className="text-sm font-medium text-gray-600 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Variable Usage Costs */}
            <motion.div variants={fadeUpVariant} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-black text-gray-900">Variable AI Usage (API)</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-orange-600">Billed at Cost</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">How it works:</p>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">
                    AI models (OpenAI, Anthropic, ElevenLabs voice) charge micro-cents per interaction. You link your own credit card securely, or we pass the exact cost through transparently at the end of the month without markups. Most SMBs spend between Rs 2,000 to Rs 8,000 monthly on pure token usage depending on volume.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* ROI / WHY THIS INVESTMENT PAYS OFF             */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Return On Investment</p>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight">
              The math is simple.
            </h2>
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8 sm:p-12 space-y-10">
            <div className="grid md:grid-cols-3 gap-10 md:divide-x md:divide-gray-100">
              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">If an admin employee costs</p>
                <p className="text-4xl font-black text-black tracking-tight">Rs 60,000<span className="text-xl">/mo</span></p>
              </div>
              <div className="space-y-3 md:pl-10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">And AI automates 50% of work for</p>
                <p className="text-4xl font-black text-blue-600 tracking-tight">Rs 15,000<span className="text-xl">/mo</span></p>
              </div>
              <div className="space-y-3 md:pl-10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your AI system pays for itself</p>
                <p className="text-4xl font-black text-emerald-500 tracking-tight">Instantly</p>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-100">
              <p className="text-base font-medium text-gray-600 leading-relaxed max-w-4xl">
                And that&apos;s just the cost saving. By instantly responding to leads and booking appointments 24/7, our AI agents typically generate enough pipeline revenue in their first month to cover their entire annual build and maintenance cost.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* PROCESS — HOW IT WORKS                         */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24 space-y-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">The Implementation Process</p>
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tight">
              We build inside your business.
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Audit & Map', desc: 'We shadow your current workflows to identify exactly where AI can replace manual friction.' },
              { step: '02', title: 'Architect', desc: 'We build the agent workflows, write the prompt logic, and safely structure the system.' },
              { step: '03', title: 'Train & Test', desc: 'We feed the AI your historical data and test it against hundreds of scenarios until perfect.' },
              { step: '04', title: 'Deploy', desc: 'The system goes live, and we actively monitor its responses, refining it over the first 30 days.' },
            ].map((item) => (
              <motion.div variants={fadeUpVariant} key={item.step} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-6 relative overflow-hidden group hover:bg-white hover:shadow-md transition-all">
                <span className="absolute top-6 right-8 text-6xl font-black text-gray-100 group-hover:text-gray-50 transition-colors select-none z-0">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <p className="text-lg font-black text-gray-900 mb-3">{item.title}</p>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* CTA / NEXT STEPS                               */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-black text-white selection:bg-blue-500/30">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center space-y-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Ready to automate?
            </h2>
            <p className="text-lg font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s map out exactly how AI can fit into your current operations. Book a free discovery call to see a live demo of what&apos;s possible. No hard sells.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/447466368427"
                target="_blank"
                rel="noopener"
                className="group flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-black tracking-widest text-white uppercase transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)]"
              >
                Discuss on WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://calendly.com/arcai-support/30min"
                target="_blank"
                rel="noopener"
                className="flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 rounded-2xl text-sm font-black tracking-widest text-white uppercase transition-all duration-300 border border-white/10"
              >
                Book a Live Demo
              </a>
            </div>

            {/* Contact Details */}
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
              <a href="https://wa.me/94764662384" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-green-500 hover:text-green-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp AI Agent
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Stamp */}
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
