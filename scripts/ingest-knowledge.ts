/**
 * ARC AI Knowledge Base Ingestion Script
 * 
 * This script extracts ALL website content (pricing, services, blog, company info)
 * generates embeddings via OpenAI, and upserts into Supabase knowledge_chunks.
 * 
 * Usage:
 *   npx tsx scripts/ingest-knowledge.ts
 * 
 * Requirements:
 *   - OPENAI_API_KEY env var
 *   - NEXT_PUBLIC_SUPABASE_URL env var
 *   - SUPABASE_SERVICE_ROLE_KEY env var
 */

import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Load .env.local from project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);

// ────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────
interface KnowledgeChunk {
  category: string;
  title: string;
  content: string;
  metadata: Record<string, unknown>;
}

// ────────────────────────────────────────────────────
// Embedding helper
// ────────────────────────────────────────────────────
async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
}

// ────────────────────────────────────────────────────
// Upsert helper (batch insert with conflict handling)
// ────────────────────────────────────────────────────
async function upsertChunks(chunks: KnowledgeChunk[]) {
  console.log(`\n📦 Inserting ${chunks.length} chunks...`);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    try {
      const embedding = await generateEmbedding(chunk.content);

      const { error } = await supabase.from('knowledge_chunks').insert({
        category: chunk.category,
        title: chunk.title,
        content: chunk.content,
        embedding,
        metadata: chunk.metadata,
      });

      if (error) {
        console.error(`  ❌ Error inserting "${chunk.title}":`, error.message);
      } else {
        console.log(`  ✅ [${i + 1}/${chunks.length}] ${chunk.category} → "${chunk.title}"`);
      }

      // Small delay to respect OpenAI rate limits
      if (i % 10 === 9) {
        await new Promise(r => setTimeout(r, 500));
      }
    } catch (err) {
      console.error(`  ❌ Failed embedding for "${chunk.title}":`, err);
    }
  }
}

// ────────────────────────────────────────────────────
// WEBSITE PACKAGE DATA — WEB PRICING
// Every single detail from WebPricingClient.tsx
// ────────────────────────────────────────────────────
function getWebPricingChunks(): KnowledgeChunk[] {
  return [
    {
      category: 'pricing_web',
      title: 'Web Pricing — Starter Package',
      content: `WEBSITE PACKAGE: STARTER — Get Online Fast
Price: Rs 60,000 (one-time payment, no monthly fees)
Timeline: 2–3 days
Best for: Businesses that need a clean, professional web presence fast.

What's included:
- Modern responsive website (5 pages)
- Clean, minimal design — standard layouts
- WhatsApp button + contact/inquiry form
- Mobile-optimized & fast-loading
- Free hosting forever

What's NOT included in Starter:
- Custom animations & parallax effects
- Glassmorphism & advanced UI
- Bespoke hero sections
- SEO structured data

Positioning: A fast, professional starter website for businesses that want to get online quickly without paying for premium visual extras. No CRM features, no AI agent.`,
      metadata: { package: 'Starter', type: 'web', price: 60000, currency: 'LKR' },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — Launch Package',
      content: `WEBSITE PACKAGE: LAUNCH — Stand Out & Convert
Price: Rs 90,000 (one-time payment, no monthly fees)
Timeline: 3–5 days
Best for: Businesses that want a stunning, conversion-focused website that stands out.

What's included (everything in Starter, PLUS):
- Premium custom design with advanced animations
- Parallax scrolling, hover effects, micro-interactions
- Glassmorphism cards & bespoke hero section
- Video/animation support in hero
- Conversion-optimized layout with strategic CTAs
- Full SEO with structured data & meta tags

Positioning: A premium website for businesses that want a stronger first impression and better conversion performance. No CRM features, no AI agent.

Upgrade path: Starter → Launch is the Rs 30,000 difference.`,
      metadata: { package: 'Launch', type: 'web', price: 90000, currency: 'LKR' },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — Growth Package (Most Popular)',
      content: `WEBSITE PACKAGE: GROWTH — Capture & Close Leads (MOST POPULAR)
Price: Rs 130,000 (one-time payment, no monthly fees)
Timeline: 5–7 days
Best for: Businesses that want a premium website plus a system to capture, track, and close more leads.

What's included (everything in Launch, PLUS):
- Lead Dashboard — every inquiry stored in one place
- CRM pipeline (New → Contacted → Quoted → Won/Lost)
- Email capture + newsletter system
- Email campaigns — promos, updates, re-engagement

Positioning: A sales-ready website for businesses that want better follow-up, cleaner lead management, and more repeat opportunities. Does NOT include AI agent.

Upgrade path: Launch → Growth is the Rs 40,000 difference.`,
      metadata: { package: 'Growth', type: 'web', price: 130000, currency: 'LKR', popular: true },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — Scale Package',
      content: `WEBSITE PACKAGE: SCALE — 24/7 AI-Powered Sales
Price: Rs 160,000 (one-time) + $4/month AI fee
Timeline: 5–7 days
Best for: Businesses that want everything in Growth plus an AI agent handling inquiries around the clock.

What's included (everything in Growth, PLUS):
- AI agent integrated into your website
- Instant responses to visitor questions 24/7
- Handles common inquiries & guides users to action
- Improves response time and availability

Positioning: A premium website plus an always-on AI front desk that helps capture and guide leads even when the team is offline.

Upgrade path: Growth → Scale is the Rs 30,000 difference + $4/month AI fee.`,
      metadata: { package: 'Scale', type: 'web', price: 160000, currency: 'LKR', monthlyAI: 4 },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — Feature Comparison Table',
      content: `WEBSITE PACKAGES — FULL FEATURE COMPARISON:

Features available in ALL packages (Starter, Launch, Growth, Scale):
- Responsive 5-Page Website
- WhatsApp Button + Contact Form
- Mobile Optimized
- Free Hosting Forever

Features available in Launch, Growth, and Scale (NOT in Starter):
- Custom Animations & Parallax
- Glassmorphism & Advanced UI
- Bespoke Hero Section (Video/Animation)
- Full SEO Optimization

Features available in Growth and Scale only (NOT in Starter or Launch):
- Lead Dashboard
- CRM Pipeline
- Email Capture + Newsletter
- Email Marketing Campaigns

Features available in Scale only:
- AI Agent (24/7 Support)

You can always upgrade your package later. We credit what you've already paid toward the new tier. For example, Starter → Launch is just the Rs 30,000 difference.`,
      metadata: { type: 'web_comparison' },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — Recommendation Guide',
      content: `WEBSITE PACKAGE RECOMMENDATION GUIDE:
- If they just need a professional online presence fast → recommend Starter (Rs 60,000)
- If they want a premium, high-impact website with custom design and animations → recommend Launch (Rs 90,000)
- If they want a website plus lead tracking, CRM, and email follow-up systems → recommend Growth (Rs 130,000)
- If they want the full website system plus an AI lead handling agent → recommend Scale (Rs 160,000 + $4/mo)

Upgrade pricing summary:
- Starter to Launch: Rs 30,000 difference
- Launch to Growth: Rs 40,000 difference
- Growth to Scale: Rs 30,000 difference + $4/month AI fee`,
      metadata: { type: 'web_recommendation' },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — Why This Matters (Problem Stats)',
      content: `WHY A GREAT WEBSITE MATTERS — PROBLEM STATISTICS:

75% of users judge credibility based on website design.
First impressions are formed in 0.05 seconds. A dated website costs you trust before visitors even read a word.

53% of mobile users leave if a page takes over 3 seconds.
Speed isn't optional. Every second of load time costs you potential customers who will never come back.

88% of users won't return after a bad experience.
Your competitors are one click away. A poor website doesn't just lose one sale — it loses a lifetime customer.`,
      metadata: { type: 'web_problem_stats' },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — What We Deliver',
      content: `WHAT ARC AI DELIVERS (WEBSITE SERVICES):

Core message: Not just a website. A revenue-generating machine.
Every ARC AI project is built with one goal: to turn visitors into paying customers. We combine premium design, conversion psychology, and modern technology to deliver results — not just pixels.

1. Premium Design — Hand-crafted interfaces that build instant trust and credibility.
2. Lightning Fast — Next.js & React — sub-second load times, no page refreshes.
3. Conversion Focused — Strategic CTAs and layouts designed to maximize inquiries.
4. AI-Powered — Optional AI agent that handles customer inquiries 24/7.`,
      metadata: { type: 'web_solution' },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — ROI Calculation',
      content: `WEBSITE ROI — RETURN ON INVESTMENT:

If your average deal is worth Rs 50,000
And your website brings in 3 extra leads per month
Your website pays for itself in under 1 month.

Most of our clients see a measurable increase in inquiries within the first 2 weeks of launch. With a conversion-optimized website, you're not spending money — you're investing in a sophisticated tool that generates ROI every single day.`,
      metadata: { type: 'web_roi' },
    },
    {
      category: 'pricing_web',
      title: 'Web Pricing — Process (How We Work)',
      content: `WEBSITE DELIVERY PROCESS:

Step 01 — Discovery: We understand your goals, audience, and what makes your business unique.
Step 02 — Build: We design and develop your website with precision — no templates, no shortcuts.
Step 03 — Refine: You review, give feedback, and we iterate until it's exactly right.
Step 04 — Launch: We deploy your website and ensure everything runs perfectly from day one.

Timeline: From idea to launch in days, not months.`,
      metadata: { type: 'web_process' },
    },
  ];
}

// ────────────────────────────────────────────────────
// AI PRICING DATA — ALL PACKAGES
// Every single detail from AIPricingClient.tsx
// ────────────────────────────────────────────────────
function getAIPricingChunks(): KnowledgeChunk[] {
  return [
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Flow Package',
      content: `AI PACKAGE: FLOW — Automate Repetitive Work
Label: Save Time
Setup fee: Rs 75,000
Monthly retainer: from Rs 10,000/month
Deployment timeline: 1–2 weeks
Best for: Small businesses, service providers, and teams that want to reduce admin and improve efficiency.

What's included:
- Automation for one key business process
- Data pulled from receipts, forms, or documents
- Automatic updates to Google Sheets or your internal system
- Alerts and notifications when action is needed
- A simple internal AI assistant to help find information quickly

What's NOT included in Flow:
- Website AI Chat Assistant
- AI Voice Calling (Inbound/Outbound)
- Sales Pipeline & CRM Integrations
- Custom Multi-Agent Orchestration

Positioning: A practical first AI system for businesses that want to cut repetitive admin and save time without jumping into advanced automation.`,
      metadata: { package: 'Flow', type: 'ai', setupFee: 75000, monthlyFrom: 10000, currency: 'LKR' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Engage Package (Most Popular)',
      content: `AI PACKAGE: ENGAGE — 24/7 AI Lead Capture (MOST POPULAR)
Label: Capture Leads
Setup fee: Rs 135,000
Monthly retainer: from Rs 15,000/month
Deployment timeline: 2–3 weeks
Best for: Businesses that get website traffic and want a better way to handle enquiries and convert more leads.

What's included (everything in Flow, PLUS):
- AI chat assistant for your website
- Answers based on your services and business information
- Lead capture and qualification
- Appointment booking integration
- Enquiry details sent to your team or CRM
- Basic reporting so you can track performance

What's NOT included in Engage:
- AI Voice Calling (Inbound/Outbound)
- Automated follow-up SMS/Email sequences
- Custom Multi-Agent Orchestration

Positioning: A 24/7 AI lead capture system for businesses that want quicker responses and fewer missed enquiries.`,
      metadata: { package: 'Engage', type: 'ai', setupFee: 135000, monthlyFrom: 15000, currency: 'LKR', popular: true },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Qualify Package',
      content: `AI PACKAGE: QUALIFY — AI Voice Follow-Up & Booking
Label: Book Faster
Setup fee: Rs 195,000
Monthly retainer: from Rs 24,000/month
Deployment timeline: 3–5 weeks
Best for: Businesses with a regular flow of leads that need quicker response times and better follow-up.

What's included (everything in Engage, PLUS):
- AI voice assistant for inbound or outbound calls
- Automated lead qualification over the phone
- Follow-up by SMS or email
- Call notes and summaries after each interaction
- Lead details updated directly into your system

What's NOT included in Qualify:
- Full Revenue & Ops System Integration
- Lead research and pre-call prep bots

Positioning: A stronger AI sales layer for businesses that want leads contacted, qualified, and moved toward booking faster.`,
      metadata: { package: 'Qualify', type: 'ai', setupFee: 195000, monthlyFrom: 24000, currency: 'LKR' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Command Package',
      content: `AI PACKAGE: COMMAND — Full AI Revenue System
Label: Scale Smarter
Setup fee: Rs 310,000
Monthly retainer: from Rs 45,000/month
Deployment timeline: 6–8 weeks
Best for: Growing businesses, agencies, and high-ticket service providers that want a complete AI-powered sales and operations system.

What's included (everything in Qualify, PLUS):
- AI chat and voice working together seamlessly
- Automated complex follow-up sequences
- Sales support tools for your team
- Lead research and pre-call preparation
- Custom integrations with your forms, CRM, calendar, and workflows
- Executive dashboards and reporting for better decision-making

Positioning: A complete AI growth system for businesses that want automation across lead capture, follow-up, internal operations, and revenue workflows.`,
      metadata: { package: 'Command', type: 'ai', setupFee: 310000, monthlyFrom: 45000, currency: 'LKR' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Feature Comparison Table',
      content: `AI PACKAGES — FULL FEATURE COMPARISON:

Features available in ALL AI packages (Flow, Engage, Qualify, Command):
- Internal Process Automation
- Document / Data Parsing

Features available in Engage, Qualify, and Command (NOT in Flow):
- Website AI Chat Assistant
- Text Lead Capture & Booking
- CRM & Calendar Integration

Features available in Qualify and Command only (NOT in Flow or Engage):
- AI Voice (Inbound & Outbound)
- Automated Call Notes & SMS

Features available in Command only:
- Pre-Call Lead Research
- Multi-Agent Orchestration

Every package is modular and built to scale. Start with one solution based on your biggest challenge today, then expand as your business grows.`,
      metadata: { type: 'ai_comparison' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Recommendation Guide',
      content: `AI PACKAGE RECOMMENDATION GUIDE:
- If they want to automate repetitive internal work → recommend Flow (Rs 75,000 setup + from Rs 10,000/mo)
- If they want 24/7 website chat and lead capture → recommend Engage (Rs 135,000 setup + from Rs 15,000/mo)
- If they want AI voice follow-up and booking → recommend Qualify (Rs 195,000 setup + from Rs 24,000/mo)
- If they want an end-to-end AI sales and operations system → recommend Command (Rs 310,000 setup + from Rs 45,000/mo)`,
      metadata: { type: 'ai_recommendation' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Why AI Matters (Problem Stats)',
      content: `WHY AI MATTERS — PROBLEM STATISTICS:

78% of customers buy from the first responder.
If you aren't answering inquiries within 5 minutes, your competitor is securing the sale.

40% of an employee's day is spent on repetitive tasks.
Data entry, checking forms, and syncing spreadsheets burns thousands of hours per year.

3x higher conversion rates with instant follow-up.
Bots don't sleep or take breaks. They capture, qualify, and book leads effortlessly 24/7.`,
      metadata: { type: 'ai_problem_stats' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — What We Deliver',
      content: `WHAT ARC AI DELIVERS (AI SERVICES):

Core message: Not just software. Digital employees that scale.
Every ARC AI system is built with a singular focus: freeing up your human capital to focus on high-value strategy, while AI securely handles the volume, speed, and precision.

1. Workflow Automation — We connect your disjointed apps so data flows effortlessly without manual entry.
2. Intelligent Chatbots — Agents loaded with your company knowledge base interacting seamlessly on your site.
3. Cognitive Voice AI — Human-sounding voice bots that can call leads within seconds of a form submission.
4. Predictive Analytics — Executive dashboards showing where leads come from and how bots are closing them.`,
      metadata: { type: 'ai_solution' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Maintenance & API Retainer',
      content: `AI ONGOING COSTS — MAINTENANCE & API RETAINER:

Monthly System Retainer (from Rs 10,000/month):
What the retainer covers:
- Server hosting and continuous uptime monitoring
- Regular prompt tuning and AI logic updates
- Knowledge base syncing (monthly updates)
- Dashboard maintenance and API connections updates

Variable AI Usage (API) — Billed at Cost:
AI models (OpenAI, Anthropic, ElevenLabs voice) charge micro-cents per interaction. You can link your own credit card securely, or ARC AI passes the exact cost through transparently at the end of the month without markups.
Most SMBs spend between Rs 2,000 to Rs 8,000 monthly on pure token usage depending on volume.`,
      metadata: { type: 'ai_maintenance' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — ROI Calculation',
      content: `AI ROI — RETURN ON INVESTMENT:

If an admin employee costs Rs 60,000/month
And AI automates 50% of their work for Rs 15,000/month
Your AI system pays for itself instantly.

And that's just the cost saving. By instantly responding to leads and booking appointments 24/7, our AI agents typically generate enough pipeline revenue in their first month to cover their entire annual build and maintenance cost.`,
      metadata: { type: 'ai_roi' },
    },
    {
      category: 'pricing_ai',
      title: 'AI Pricing — Implementation Process',
      content: `AI IMPLEMENTATION PROCESS:

Step 01 — Audit & Map: We shadow your current workflows to identify exactly where AI can replace manual friction.
Step 02 — Architect: We build the agent workflows, write the prompt logic, and safely structure the system.
Step 03 — Train & Test: We feed the AI your historical data and test it against hundreds of scenarios until perfect.
Step 04 — Deploy: The system goes live, and we actively monitor its responses, refining it over the first 30 days.

Headline: We build inside your business.`,
      metadata: { type: 'ai_process' },
    },
  ];
}

// ────────────────────────────────────────────────────
// HOSTING & MAINTENANCE (SHARED)
// ────────────────────────────────────────────────────
function getMaintenanceChunks(): KnowledgeChunk[] {
  return [
    {
      category: 'maintenance',
      title: 'Hosting — Free Forever',
      content: `WEBSITE HOSTING:

Hosting is FREE FOREVER as long as total uploaded media stays within 1GB. A monthly storage fee applies only if storage exceeds 1GB (quoted based on the required upgrade).

Domain: Domain purchase and renewal is handled directly by the client. Domain is NOT included in any package.`,
      metadata: { type: 'hosting' },
    },
    {
      category: 'maintenance',
      title: 'Maintenance — Annual Peace of Mind',
      content: `WEBSITE MAINTENANCE — ANNUAL PEACE OF MIND:

Price: Rs 60,000 per year.

What's included:
- Security & dependency updates
- Uptime monitoring & backups
- Minor text/image updates (reasonable monthly limit)
- Bug fixes for existing features

What's NOT included:
- New pages
- Major new functionality
- Redesigns
- Feature expansions (these are quoted separately)`,
      metadata: { type: 'annual_maintenance', price: 60000, currency: 'LKR' },
    },
    {
      category: 'maintenance',
      title: 'Maintenance — Pay-Per-Fix',
      content: `WEBSITE MAINTENANCE — PAY-PER-FIX:

Price: Rs 4,000 per request.

What's covered:
- Fixing errors & bugs
- Small UI tweaks
- Updating text or images
- Broken links/buttons/forms

What's NOT covered:
- New features or modules
- Major redesigns
- New page builds (these are quoted separately)`,
      metadata: { type: 'pay_per_fix', price: 4000, currency: 'LKR' },
    },
  ];
}

// ────────────────────────────────────────────────────
// COMPANY INFO
// ────────────────────────────────────────────────────
function getCompanyChunks(): KnowledgeChunk[] {
  return [
    {
      category: 'company',
      title: 'ARC AI — About & Trust Facts',
      content: `ARC AI AGENCY (PVT) LTD

Brand positioning: ARC AI helps businesses grow through premium websites, AI systems, workflow automation, and digital sales infrastructure.
Core messages:
- Websites that convert
- AI systems that save time
- Automation that helps businesses scale

Trust facts:
- Trusted by 100+ clients
- Delivery available in the UK and Sri Lanka
- Support email: support@arcai.agency
- UK phone: +44 7466 368427
- Sri Lanka phone: +94 771852522`,
      metadata: { type: 'about' },
    },
    {
      category: 'company',
      title: 'ARC AI — Contact Details',
      content: `ARC AI OFFICIAL CONTACT DETAILS:

Website: https://www.arcai.agency
Contact page: https://www.arcai.agency/contact
Support email: support@arcai.agency (responds within 24 hours)

Phone:
UK: +44 7466 368427
Sri Lanka: +94 771852522

Office locations:
Colombo 4, Sri Lanka
Birmingham, UK

Business hours:
Monday to Friday: 9 AM to 6 PM
Weekend: By appointment

Social media:
X/Twitter: https://x.com/arc_ai_agency
Instagram: https://www.instagram.com/arcai_agency/
LinkedIn: https://www.linkedin.com/company/105845719
Facebook: https://www.facebook.com/ARCAI.lk

Legal pages:
Privacy Policy: https://www.arcai.agency/privacy-policy
Terms of Service: https://www.arcai.agency/terms-of-service`,
      metadata: { type: 'contact' },
    },
    {
      category: 'company',
      title: 'ARC AI — Booking & Meeting Link',
      content: `BOOKING A MEETING WITH ARC AI:

Book a 30 minute meeting: https://calendly.com/arcai-support/30min

Prepare before the call:
- Your main goal for the next 30 to 90 days
- Current website or product link (if you have one)
- Examples of websites or systems you like
- Must-have features
- Target launch window

WhatsApp direct: https://wa.me/447466368427`,
      metadata: { type: 'booking' },
    },
  ];
}

// ────────────────────────────────────────────────────
// PORTFOLIO
// ────────────────────────────────────────────────────
function getPortfolioChunks(): KnowledgeChunk[] {
  return [
    {
      category: 'portfolio',
      title: 'Portfolio — Core Craft',
      content: `Core Craft — https://www.corecraft.agency/
Premium agency website with a high-end look and strong service positioning. Custom website builds, UI/UX design, and brand identity solutions.`,
      metadata: { url: 'https://www.corecraft.agency/', name: 'Core Craft' },
    },
    {
      category: 'portfolio',
      title: 'Portfolio — Ontriq',
      content: `Ontriq — https://www.ontriq.com/
Professional business site with a strong service and trust-led structure. Background verification and HR solutions provider. Custom website and CRM approach for case tracking.`,
      metadata: { url: 'https://www.ontriq.com/', name: 'Ontriq' },
    },
    {
      category: 'portfolio',
      title: 'Portfolio — Orkestrate',
      content: `Orkestrate — https://www.orkestrate.com/
AI-focused platform site with a modern SaaS feel. AI-powered marketing orchestration platform for DTC brands.`,
      metadata: { url: 'https://www.orkestrate.com/', name: 'Orkestrate' },
    },
    {
      category: 'portfolio',
      title: 'Portfolio — KeysPlease',
      content: `KeysPlease — https://www.keysplease.shop/
Marketplace-style site with lead generation intent. Real estate marketplace with premium listings and purchase facilitation.`,
      metadata: { url: 'https://www.keysplease.shop/', name: 'KeysPlease' },
    },
    {
      category: 'portfolio',
      title: 'Portfolio — DEK Studio',
      content: `DEK Studio — https://www.dek-studio.com/
Trust-focused MEP services site with clear service pathways. Premium layout with strong performance metrics.`,
      metadata: { url: 'https://www.dek-studio.com/', name: 'DEK Studio' },
    },
    {
      category: 'portfolio',
      title: 'Portfolio — Vibe Web Studio',
      content: `Vibe Web Studio — https://vibewebstudio.com/
Sales-first agency site with crisp offers, social proof, and conversion-optimized packages.`,
      metadata: { url: 'https://vibewebstudio.com/', name: 'Vibe Web Studio' },
    },
    {
      category: 'portfolio',
      title: 'Portfolio — Additional Examples',
      content: `Additional portfolio examples:
- Hilltop Recruitment — https://hiltopglobal.com/
- Island Jerky — https://www.islandjerky.lk/
- Digital Kade — https://digitalkade.lk/
- Jacob Day Coaching — https://www.jacobday.co/
- Mouttaki Coaching — https://mouttakicoaching.com/
- Fit Bite — https://www.fitbite.shop/`,
      metadata: { type: 'additional_portfolio' },
    },
  ];
}

// ────────────────────────────────────────────────────
// SERVICES (from the services pages)
// ────────────────────────────────────────────────────
function getServiceChunks(): KnowledgeChunk[] {
  return [
    {
      category: 'service',
      title: 'Service — Smart Websites (Web Design & Development)',
      content: `SMART WEBSITES — Web Design & Development
High-converting websites designed to capture attention and drive action. Focus areas: conversion optimization, A/B testing, lead generation, mobile-first design.
Service page: https://www.arcai.agency/services/web-design-development

ARC AI builds premium business websites using modern technology. Every website is custom-designed (no templates), built with Next.js and React for blazing speed, and optimized for conversions.`,
      metadata: { service: 'web-design', url: 'https://www.arcai.agency/services/web-design-development' },
    },
    {
      category: 'service',
      title: 'Service — Smart Ad Campaigns (Social Media Marketing)',
      content: `SMART AD CAMPAIGNS — Targeted Digital Advertising
Targeted advertising powered by data and AI to reach the ideal audience and maximize ROI. Channels: Facebook Ads, Instagram Ads, Google Ads, analytics tracking.
Service page: https://www.arcai.agency/services/social-media`,
      metadata: { service: 'social-media', url: 'https://www.arcai.agency/services/social-media' },
    },
    {
      category: 'service',
      title: 'Service — Web Apps',
      content: `WEB APPS — Custom Web Applications
Custom web applications built with modern tech to solve complex business problems. Focus areas: React and Next.js, real-time features, scalable architecture, API integration.
Service page: https://www.arcai.agency/services/web-apps`,
      metadata: { service: 'web-apps', url: 'https://www.arcai.agency/services/web-apps' },
    },
    {
      category: 'service',
      title: 'Service — Smart Funnels',
      content: `SMART FUNNELS — Intelligent Sales Funnels
Intelligent funnels that guide prospects through the buyer journey with personalization and automated follow-ups. Focus areas: marketing automation, lead nurturing, conversion tracking, email sequences.
Service page: https://www.arcai.agency/services/smart-funnels`,
      metadata: { service: 'smart-funnels', url: 'https://www.arcai.agency/services/smart-funnels' },
    },
    {
      category: 'service',
      title: 'Service — Custom Backend Systems',
      content: `CUSTOM BACKEND SYSTEMS — APIs & Infrastructure
Robust backend systems and APIs tailored to business needs with security, scalability, and performance. Focus areas: RESTful APIs, database design, cloud infrastructure, security.
Service page: https://www.arcai.agency/services/custom-backend`,
      metadata: { service: 'custom-backend', url: 'https://www.arcai.agency/services/custom-backend' },
    },
    {
      category: 'service',
      title: 'Service — Brand Kits',
      content: `BRAND KITS — Brand Identity Packages
Brand identity packages to ensure consistent visuals and messaging. Includes: logo design, brand strategy, visual identity, brand guidelines.
Service page: https://www.arcai.agency/services/branding`,
      metadata: { service: 'branding', url: 'https://www.arcai.agency/services/branding' },
    },
    {
      category: 'service',
      title: 'Service — AI Content Generation',
      content: `AI CONTENT GENERATION — Automated Content Creation
High-quality content aligned with brand voice and strategy. Includes: blog posts, social media content, SEO content, multi-language capability.
Service page: https://www.arcai.agency/services/ai-content-generation`,
      metadata: { service: 'ai-content', url: 'https://www.arcai.agency/services/ai-content-generation' },
    },
    {
      category: 'service',
      title: 'Service — Automated Workflows',
      content: `AUTOMATED WORKFLOWS — Process Automation
Automations that streamline repetitive tasks, improve efficiency, and enable always-on operations. Includes: app integrations, process automation, task management.
Service page: https://www.arcai.agency/services/ai-automated-workflows`,
      metadata: { service: 'workflows', url: 'https://www.arcai.agency/services/ai-automated-workflows' },
    },
    {
      category: 'service',
      title: 'Service — AI Powered Chatbots',
      content: `AI POWERED CHATBOTS — Intelligent Customer Support
AI chatbots providing instant support and engagement around the clock. Includes: natural language processing, 24/7 support, multi-platform deployment, analytics dashboards.
Service page: https://www.arcai.agency/services/ai-chatbots`,
      metadata: { service: 'chatbots', url: 'https://www.arcai.agency/services/ai-chatbots' },
    },
    {
      category: 'service',
      title: 'Service — Motion Design',
      content: `MOTION DESIGN — Visual & Animation Design
Creative motion design services for branding, marketing, and digital experiences. Service page: https://www.arcai.agency/services/motion-design`,
      metadata: { service: 'motion-design', url: 'https://www.arcai.agency/services/motion-design' },
    },
  ];
}

// ────────────────────────────────────────────────────
// FAQ / MISC KNOWLEDGE
// ────────────────────────────────────────────────────
function getFAQChunks(): KnowledgeChunk[] {
  return [
    {
      category: 'faq',
      title: 'FAQ — Package Differences (Web)',
      content: `WEBSITE PACKAGE DIFFERENCES (SIMPLE EXPLANATIONS):

Starter vs Launch:
Starter gets you online professionally. Launch adds the custom design, premium animations, and SEO optimization.

Launch vs Growth:
Launch gives you the premium site. Growth adds the lead dashboard, CRM pipeline, and email marketing tools.

Growth vs Scale:
Growth helps you capture and manage leads. Scale adds the AI agent that responds instantly 24/7.`,
      metadata: { type: 'faq_web_diff' },
    },
    {
      category: 'faq',
      title: 'FAQ — Package Differences (AI)',
      content: `AI PACKAGE DIFFERENCES (SIMPLE EXPLANATIONS):

Flow vs Engage:
Flow focuses on internal automation (cutting admin work). Engage adds customer-facing AI chat and lead capture on your website.

Engage vs Qualify:
Engage handles chat-based enquiries. Qualify adds AI voice follow-up, phone qualification, and SMS/email sequences.

Qualify vs Command:
Qualify adds AI calling and follow-up. Command becomes the full AI revenue and operations system with multi-agent orchestration, executive dashboards, and complete CRM integration.`,
      metadata: { type: 'faq_ai_diff' },
    },
    {
      category: 'faq',
      title: 'FAQ — Sales Bundles',
      content: `RECOMMENDED SERVICE BUNDLES:

If they want more leads: Smart Website + Smart Funnel + Smart Ad Campaigns
If they want less manual work: Automated Workflows + Integrations + Custom Backend System
If they want better customer support: AI Chatbot + Knowledge capture + Analytics
If they want a platform: Web App + Custom Backend System + Analytics`,
      metadata: { type: 'bundles' },
    },
    {
      category: 'faq',
      title: 'FAQ — Industries We Serve',
      content: `INDUSTRIES ARC AI SERVES:

- E-Commerce and Retail
- Healthcare
- Real Estate
- Education
- Fitness and Wellness
- Technology and SaaS
- Professional Services
- Hospitality
- And many more

ARC AI serves businesses across all industries. Our solutions are customized to fit each industry's unique needs.`,
      metadata: { type: 'industries' },
    },
    {
      category: 'faq',
      title: 'FAQ — Tech Stack',
      content: `ARC AI TECH STACK:

AI and automation: OpenAI, TensorFlow, Anthropic, ElevenLabs
Web and product: Next.js, TypeScript, Tailwind CSS, Node.js, React
Data and infrastructure: MongoDB, AWS, Google Cloud, Docker
Integrations and workflow: Zapier, Make.com, n8n`,
      metadata: { type: 'tech_stack' },
    },
  ];
}

// ────────────────────────────────────────────────────
// MAIN
// ────────────────────────────────────────────────────
async function main() {
  console.log('🚀 ARC AI Knowledge Base Ingestion');
  console.log('===================================\n');

  // Validate environment
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY is not set. Add it to .env.local');
    process.exit(1);
  }
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('❌ Supabase credentials missing. Check .env.local');
    process.exit(1);
  }

  // Delete existing chunks (clean slate)
  console.log('🗑️  Clearing existing knowledge chunks...');
  const { error: deleteError } = await supabase.from('knowledge_chunks').delete().gte('id', 0);
  if (deleteError) {
    console.error('❌ Error clearing existing chunks:', deleteError.message);
    console.log('   (This is OK if the table is empty or doesn\'t exist yet)');
  } else {
    console.log('   ✅ Cleared existing chunks');
  }

  // Collect all chunks
  const allChunks: KnowledgeChunk[] = [
    ...getWebPricingChunks(),
    ...getAIPricingChunks(),
    ...getMaintenanceChunks(),
    ...getCompanyChunks(),
    ...getPortfolioChunks(),
    ...getServiceChunks(),
    ...getFAQChunks(),
  ];

  console.log(`\n📊 Total chunks to embed: ${allChunks.length}`);
  console.log('   Categories:');
  const categories = new Map<string, number>();
  allChunks.forEach(c => categories.set(c.category, (categories.get(c.category) || 0) + 1));
  categories.forEach((count, cat) => console.log(`     ${cat}: ${count} chunks`));

  // Upsert all
  await upsertChunks(allChunks);

  console.log('\n✅ Ingestion complete!');
  console.log(`   Total chunks inserted: ${allChunks.length}`);
}

main().catch(console.error);
