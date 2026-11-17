"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Zap, MonitorSmartphone, Brain, Rocket, CheckCircle2, TrendingUp, Globe, Shield, MessageCircle, BarChart3, Search, Users, DollarSign, Lightbulb, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const tableOfContents = [
    { id: "what-is-smart-website", label: "What Is a Smart Website?" },
    { id: "traditional-vs-smart", label: "Traditional vs Smart Websites" },
    { id: "why-sri-lanka-needs-smart-websites", label: "Why Sri Lanka Needs This Now" },
    { id: "key-features", label: "7 Key Features of a Smart Website" },
    { id: "industry-use-cases", label: "Industry Use Cases in Sri Lanka" },
    { id: "seo-benefits", label: "SEO & Performance Benefits" },
    { id: "cost-analysis", label: "Cost Analysis: Smart vs Traditional" },
    { id: "how-to-build", label: "How to Build a Smart Website" },
    { id: "choosing-company", label: "Choosing the Right Company" },
    { id: "future-trends", label: "Future Trends (2026–2030)" },
    { id: "faq", label: "Frequently Asked Questions" },
];

function TableOfContents() {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -80% 0px" }
        );

        tableOfContents.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="hidden lg:block sticky top-32 self-start w-64 shrink-0">
            <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-5">
                <h4 className="text-sm font-bold text-ink uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-ember-ink" />
                    Table of Contents
                </h4>
                <ul className="space-y-1">
                    {tableOfContents.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className={`block text-sm py-1.5 px-3 rounded-lg transition-all duration-200 ${activeId === id
                                        ? "text-ember-deep bg-ember/10 font-medium"
                                        : "text-ink-soft hover:text-ink hover:bg-ink/10"
                                    }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default function BlogPost() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <Image src="/smart-website-sri-lanka.png"
                        alt="Smart Website Companies in Sri Lanka — AI-Powered Web Solutions for 2026"
                        width={1600}
                        height={900}
                        className="w-full h-full object-cover"
                        priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/80 to-paper/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-ember/20 text-ember-deep text-sm font-semibold rounded-full border border-ember/30 mb-4">
                            Smart Websites
                        </span>
                        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Smart Websites in Sri Lanka: The Complete Guide for Businesses in 2026
                        </h1>
                        <p className="text-lg text-ink-soft max-w-2xl mb-6">
                            Everything you need to know about smart websites — what they are, why they matter, how much they cost, and how to choose the right smart website company in Sri Lanka.
                        </p>
                        <div className="flex items-center gap-6 text-ink-soft">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated April 19, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mobile Table of Contents */}
            <div className="lg:hidden px-4 md:px-8 py-6">
                <div className="cut-card [--cut:14px] relative max-w-4xl mx-auto bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-5">
                    <h4 className="text-sm font-bold text-ink uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-ember-ink" />
                        In This Article
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {tableOfContents.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="flex items-center gap-2 text-sm py-1.5 text-ink-soft hover:text-ember-deep transition-colors"
                                >
                                    <ChevronRight className="w-3 h-3 shrink-0" />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Article Body with Sidebar TOC */}
            <article className="py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto flex gap-12">
                    <TableOfContents />

                    <div className="max-w-4xl flex-1 min-w-0">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
                            <div className="space-y-6 text-ink-soft leading-relaxed">

                                {/* Introduction */}
                                <p className="text-xl text-ink">
                                    If you run a business in Sri Lanka, your website is probably a digital brochure — static pages with some images, a contact form, and a phone number. In 2026, that approach is quietly costing you customers, leads, and revenue every single day. The businesses that are growing fastest right now have replaced their old-fashioned websites with something fundamentally different: <strong>smart websites</strong>.
                                </p>
                                <p>
                                    This guide covers everything Sri Lankan business owners need to know about smart websites — from the technology behind them to real-world costs, industry-specific use cases, and how to choose the right smart website company to build yours. Whether you are running a hotel in Galle, a real estate agency in Colombo, or an export business in Kandy, this article will help you make an informed decision.
                                </p>

                                {/* Section 1: What Is a Smart Website? */}
                                <h2 id="what-is-smart-website" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">What Is a Smart Website?</h2>
                                <p>
                                    A smart website is not just an upgraded version of a regular website. It is a fundamentally different approach to your online presence. While a traditional website passively displays information and waits for visitors to fill out a contact form, a smart website actively engages visitors, answers their questions in real time, captures leads automatically, and integrates with your business tools.
                                </p>
                                <p>
                                    The core difference lies in three technologies that power smart websites:
                                </p>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li><strong>Artificial Intelligence (AI):</strong> Smart websites use AI-powered chat agents that understand natural language. Instead of offering a generic FAQ page, the AI can answer specific questions about your products, services, pricing, and availability — in multiple languages including English, Sinhala, and Tamil.</li>
                                    <li><strong>Automation:</strong> When a visitor takes an action (fills a form, asks a question, views a product), the website automatically triggers follow-up actions. This could be sending a WhatsApp message, scheduling a call, updating your CRM, or notifying your sales team.</li>
                                    <li><strong>Dynamic Personalization:</strong> Smart websites adapt their content based on who is visiting. A returning customer sees different messaging than a first-time visitor. A visitor from Australia sees pricing in AUD. A mobile user gets a streamlined interface optimized for their device.</li>
                                </ul>
                                <p>
                                    Think of it this way: a traditional website is a digital business card. A smart website is a <strong>digital employee</strong> that works 24 hours a day, 7 days a week, 365 days a year — including Poya days, public holidays, and weekends.
                                </p>

                                {/* Section 2: Traditional vs Smart Comparison */}
                                <h2 id="traditional-vs-smart" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">Traditional Websites vs Smart Websites: A Detailed Comparison</h2>
                                <p>
                                    To truly understand the value of upgrading to a smart website, it helps to compare them side by side across the metrics that matter most to Sri Lankan businesses.
                                </p>

                                <div className="overflow-x-auto my-8">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-ink/10">
                                                <th className="text-left py-3 px-4 text-ink font-semibold">Feature</th>
                                                <th className="text-left py-3 px-4 text-red-700 font-semibold">Traditional Website</th>
                                                <th className="text-left py-3 px-4 text-ember-deep font-semibold">Smart Website</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-ink-soft">
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Visitor Engagement</td><td className="py-3 px-4">Static text, images, and forms</td><td className="py-3 px-4">AI chat, dynamic content, real-time interaction</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Lead Capture</td><td className="py-3 px-4">&quot;Fill this form and we&#39;ll reply in 24 hours&quot;</td><td className="py-3 px-4">Instant qualification, auto-booking, WhatsApp follow-up</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Response Time</td><td className="py-3 px-4">Hours to days (depends on staff)</td><td className="py-3 px-4">Under 2 seconds, 24/7</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Personalization</td><td className="py-3 px-4">Same experience for everyone</td><td className="py-3 px-4">Adapts to visitor location, behaviour, device</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Post-Visit Follow-up</td><td className="py-3 px-4">None (visitor leaves, data is lost)</td><td className="py-3 px-4">Automated email/WhatsApp sequences</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Analytics</td><td className="py-3 px-4">Basic page views and bounce rate</td><td className="py-3 px-4">Conversation analytics, intent tracking, conversion funnels</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">SEO Performance</td><td className="py-3 px-4">Standard on-page SEO</td><td className="py-3 px-4">Higher dwell time, lower bounce rate, richer content signals</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Multilingual Support</td><td className="py-3 px-4">Separate language pages (if any)</td><td className="py-3 px-4">Real-time AI translation in 50+ languages</td></tr>
                                            <tr><td className="py-3 px-4 text-ink">Average Conversion Rate</td><td className="py-3 px-4">1–2%</td><td className="py-3 px-4">4–8% (industry reports, 2025)</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    The data is clear: smart websites convert visitors at 3–4x the rate of traditional websites. For a Sri Lankan business getting 1,000 website visitors per month, that is the difference between 15 leads and 60 leads — from the exact same traffic.
                                </p>

                                {/* Section 3: Why Sri Lanka Needs This */}
                                <h2 id="why-sri-lanka-needs-smart-websites" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">Why Sri Lankan Businesses Need Smart Websites Now</h2>
                                <p>
                                    The Sri Lankan digital landscape has undergone a dramatic transformation since the economic crisis of 2022. According to the Sri Lanka Telecommunications Regulatory Commission, internet penetration reached 57% by mid-2025, with over 12 million active internet users in the country. Mobile internet usage accounts for over 80% of all web traffic in Sri Lanka. These numbers mean your customers are online, and they expect fast, intelligent, and responsive experiences.
                                </p>
                                <p>
                                    Here is why the timing is particularly critical for Sri Lankan businesses:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Globe className="w-6 h-6 text-ember-deep" />
                                            <h3 className="text-lg font-bold text-ink">Tourism Recovery</h3>
                                        </div>
                                        <p className="text-sm text-ink-soft">
                                            Sri Lanka welcomed over 1.9 million tourists in 2025, many of whom research and book online. An Australian tourist looking for a boutique hotel in Ella at 2 AM Sri Lankan time expects an instant response — not a &quot;we will get back to you&quot; message. Smart websites handle these queries around the clock, in the visitor&apos;s own language.
                                        </p>
                                    </div>
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <TrendingUp className="w-6 h-6 text-green-700" />
                                            <h3 className="text-lg font-bold text-ink">E-commerce Growth</h3>
                                        </div>
                                        <p className="text-sm text-ink-soft">
                                            Sri Lanka&apos;s e-commerce market is projected to reach $1.2 billion by 2027. With more consumers buying online, businesses that offer intelligent navigation, product recommendations, and instant support will capture a disproportionate share of this market. Static product catalogues simply cannot compete.
                                        </p>
                                    </div>
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <MessageCircle className="w-6 h-6 text-ember-deep" />
                                            <h3 className="text-lg font-bold text-ink">WhatsApp-First Culture</h3>
                                        </div>
                                        <p className="text-sm text-ink-soft">
                                            Sri Lanka has one of the highest WhatsApp adoption rates in South Asia. Smart websites integrate directly with WhatsApp Business API, automatically sending follow-ups, booking confirmations, and promotional messages to leads who engage through the website — meeting customers where they already spend their time.
                                        </p>
                                    </div>
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <DollarSign className="w-6 h-6 text-ember-deep" />
                                            <h3 className="text-lg font-bold text-ink">Cost of Hiring</h3>
                                        </div>
                                        <p className="text-sm text-ink-soft">
                                            Hiring a full-time customer service representative in Colombo costs LKR 60,000–90,000 per month. A smart website with an AI agent handles the same volume of inquiries for a fraction of the cost — and it never calls in sick, never needs training on product updates, and processes inquiries at 10x the speed.
                                        </p>
                                    </div>
                                </div>

                                {/* Section 4: Key Features */}
                                <h2 id="key-features" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">7 Key Features Every Smart Website Should Have</h2>
                                <p>
                                    Not all smart websites are created equal. When evaluating smart website companies in Sri Lanka, make sure the solution includes these essential features:
                                </p>

                                <div className="space-y-6 my-8">
                                    {[
                                        {
                                            num: "01",
                                            title: "AI-Powered Conversational Agent",
                                            desc: "The cornerstone of any smart website. This is not a basic chatbot with pre-programmed answers. It is a conversational AI trained on your specific business data — your products, services, pricing, policies, and FAQs. It can handle complex multi-turn conversations, understand context, and escalate to a human agent when needed. The best implementations use large language models (LLMs) fine-tuned for your business."
                                        },
                                        {
                                            num: "02",
                                            title: "Automated Lead Qualification & Routing",
                                            desc: "When a visitor shows buying intent, the smart website automatically qualifies them by asking relevant questions (budget, timeline, requirements). High-quality leads are routed instantly to your sales team via WhatsApp, email, or CRM notification. This eliminates the delay between enquiry and response — the number one reason businesses lose leads."
                                        },
                                        {
                                            num: "03",
                                            title: "Lightning-Fast Performance (Under 3 Seconds)",
                                            desc: "Page speed directly impacts both conversions and Google rankings. Smart websites built with modern frameworks like Next.js achieve sub-second load times through server-side rendering, image optimization, and intelligent caching. This is especially important in Sri Lanka, where many users still access the internet through 3G or 4G connections."
                                        },
                                        {
                                            num: "04",
                                            title: "Mobile-First Responsive Design",
                                            desc: "With over 80% of Sri Lankan internet traffic coming from mobile devices, your website must be designed mobile-first. This means the mobile experience is the primary design, not an afterthought. Buttons should be thumb-friendly, text should be readable without zooming, and forms should be minimal and easy to complete on a phone."
                                        },
                                        {
                                            num: "05",
                                            title: "WhatsApp & Social Media Integration",
                                            desc: "Direct integration with WhatsApp Business API allows your website to automatically send follow-up messages, booking confirmations, receipts, and promotional content. Smart websites also connect with Facebook Messenger, Instagram DMs, and other platforms your customers use."
                                        },
                                        {
                                            num: "06",
                                            title: "Advanced Analytics & Conversion Tracking",
                                            desc: "Beyond basic page views, smart websites track conversation analytics (what questions are visitors asking?), user intent patterns, conversion funnels, and revenue attribution. These insights help you continuously improve your website and marketing strategy."
                                        },
                                        {
                                            num: "07",
                                            title: "SEO-Optimized Architecture",
                                            desc: "Smart websites are built with search engine optimization baked into their architecture. This includes server-side rendering for faster indexing, structured data (Schema markup) for rich snippets, proper heading hierarchy, optimized meta tags, and fast Core Web Vitals scores. A well-built smart website does not just convert visitors — it attracts them organically."
                                        }
                                    ].map((feature) => (
                                        <div key={feature.num} className="cut-card [--cut:14px] relative flex gap-5 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                            <span className="text-3xl font-black text-ember-ink shrink-0">{feature.num}</span>
                                            <div>
                                                <h3 className="text-lg font-bold text-ink mb-2">{feature.title}</h3>
                                                <p className="text-sm text-ink-soft">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Section 5: Industry Use Cases */}
                                <h2 id="industry-use-cases" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">Smart Website Use Cases by Industry in Sri Lanka</h2>
                                <p>
                                    Smart websites are not a one-size-fits-all solution. The best implementations are tailored to specific industries. Here is how different sectors in Sri Lanka benefit from smart websites:
                                </p>

                                <h3 className="text-2xl font-bold text-ink mt-10 mb-4">Tourism & Hospitality</h3>
                                <p>
                                    Sri Lanka&apos;s tourism industry is highly competitive, with thousands of hotels, villas, and tour operators fighting for the same international travellers. A smart website for a hotel can answer booking enquiries in real time (&quot;Is there a room available on March 15th for two adults?&quot;), suggest packages based on the traveller&apos;s interests, handle multi-language communication for European and Asian markets, and automatically send booking confirmations via WhatsApp. Some hotels in Sri Lanka using smart websites have reported a 35% increase in direct bookings, reducing their dependence on OTA platforms like Booking.com that charge 15–20% commission.
                                </p>

                                <h3 className="text-2xl font-bold text-ink mt-10 mb-4">Real Estate & Property</h3>
                                <p>
                                    Property buyers — especially overseas Sri Lankans and expats — do extensive research online before contacting an agent. A smart website qualifies these leads automatically by asking about budget, preferred location, property type, and timeline. It can showcase property listings with virtual tours, answer questions about legal requirements for foreign buyers, and schedule viewings directly into the agent&apos;s calendar. This saves real estate agents hours of back-and-forth with uncommitted leads and ensures they only spend time on serious buyers.
                                </p>

                                <h3 className="text-2xl font-bold text-ink mt-10 mb-4">Healthcare & Medical</h3>
                                <p>
                                    Private hospitals and clinics in Colombo, Kandy, and other major cities can use smart websites to manage appointment bookings, provide preliminary health information, answer insurance-related questions, and send appointment reminders. The AI agent can triage incoming inquiries, directing emergency cases to the right department while handling routine scheduling autonomously. This reduces the load on reception staff and provides patients with a faster, more professional experience.
                                </p>

                                <h3 className="text-2xl font-bold text-ink mt-10 mb-4">Education & Training</h3>
                                <p>
                                    Universities, tuition centres, and professional training institutes can use smart websites to handle course enquiries, guide prospective students through admission requirements, collect application forms, and provide information about fees, schedules, and course content. An AI agent trained on your course catalogue can answer detailed questions that would normally require a phone call to the admissions office.
                                </p>

                                <h3 className="text-2xl font-bold text-ink mt-10 mb-4">E-commerce & Retail</h3>
                                <p>
                                    For Sri Lankan brands selling locally or internationally, smart websites provide AI-powered product recommendations, automated order tracking via WhatsApp, intelligent search functionality, and proactive customer service. When a customer abandons their cart, the smart website can automatically trigger a follow-up message with a personalised offer. Businesses using these features typically see a 20–40% increase in average order value and a significant reduction in cart abandonment rates.
                                </p>

                                {/* Section 6: SEO Benefits */}
                                <h2 id="seo-benefits" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">How Smart Websites Improve Your Google Rankings</h2>
                                <p>
                                    One of the most overlooked benefits of smart websites is their impact on search engine optimisation (SEO). Google&apos;s ranking algorithm in 2026 heavily favours websites that provide excellent user experiences, and smart websites naturally excel in the metrics Google cares about most:
                                </p>

                                <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 my-8 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-ember-deep mt-1 shrink-0" />
                                        <div>
                                            <h4 className="text-ink font-semibold mb-1">Lower Bounce Rate</h4>
                                            <p className="text-sm text-ink-soft">When visitors interact with an AI agent, they stay on your site longer. Average session duration on smart websites is 3–5 minutes, compared to 40–90 seconds on traditional sites. Google interprets this as a strong quality signal.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-ember-deep mt-1 shrink-0" />
                                        <div>
                                            <h4 className="text-ink font-semibold mb-1">Higher Engagement Metrics</h4>
                                            <p className="text-sm text-ink-soft">Smart websites generate more page views per session, more interactions, and more return visits. These behavioural signals tell Google that your content is valuable and relevant.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-ember-deep mt-1 shrink-0" />
                                        <div>
                                            <h4 className="text-ink font-semibold mb-1">Core Web Vitals Performance</h4>
                                            <p className="text-sm text-ink-soft">Smart websites built with Next.js or similar modern frameworks consistently score above 90 on Google&apos;s PageSpeed Insights for Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-ember-deep mt-1 shrink-0" />
                                        <div>
                                            <h4 className="text-ink font-semibold mb-1">Structured Data & Rich Snippets</h4>
                                            <p className="text-sm text-ink-soft">Smart websites include proper Schema.org markup, enabling Google to display rich snippets (star ratings, FAQ accordions, breadcrumbs) in search results. These rich results have significantly higher click-through rates than standard text listings.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-ember-deep mt-1 shrink-0" />
                                        <div>
                                            <h4 className="text-ink font-semibold mb-1">Mobile Usability</h4>
                                            <p className="text-sm text-ink-soft">Google uses mobile-first indexing, meaning it primarily evaluates the mobile version of your website. Smart websites are designed mobile-first from the ground up, ensuring they pass all of Google&apos;s mobile usability requirements.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 7: Cost Analysis */}
                                <h2 id="cost-analysis" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">Cost Analysis: Smart Website vs Traditional Website in Sri Lanka</h2>
                                <p>
                                    One of the most common questions business owners ask is: &quot;How much does a smart website cost in Sri Lanka?&quot; Here is a transparent breakdown:
                                </p>

                                <div className="overflow-x-auto my-8">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-ink/10">
                                                <th className="text-left py-3 px-4 text-ink font-semibold">Component</th>
                                                <th className="text-left py-3 px-4 text-red-700 font-semibold">Traditional Website</th>
                                                <th className="text-left py-3 px-4 text-ember-deep font-semibold">Smart Website</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-ink-soft">
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Design & Development</td><td className="py-3 px-4">LKR 50,000 – 200,000</td><td className="py-3 px-4">LKR 150,000 – 500,000</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">AI Agent Integration</td><td className="py-3 px-4">Not included</td><td className="py-3 px-4">LKR 50,000 – 150,000</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Monthly Hosting</td><td className="py-3 px-4">LKR 2,000 – 5,000/mo</td><td className="py-3 px-4">LKR 5,000 – 15,000/mo</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">AI Agent Monthly Cost</td><td className="py-3 px-4">N/A</td><td className="py-3 px-4">LKR 8,000 – 25,000/mo</td></tr>
                                            <tr className="border-b border-ink/10"><td className="py-3 px-4 text-ink">Annual Total (Year 1)</td><td className="py-3 px-4">LKR 100,000 – 260,000</td><td className="py-3 px-4">LKR 350,000 – 850,000</td></tr>
                                            <tr><td className="py-3 px-4 text-ink">Revenue Impact</td><td className="py-3 px-4">1–2% conversion rate</td><td className="py-3 px-4">4–8% conversion rate (3–4x more leads)</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    The upfront investment is higher, but the return on investment is dramatically better. A hotel generating even 5 additional direct bookings per month (at an average value of $80 per night for a 3-night stay) would generate an extra $1,200/month — paying for the entire smart website in the first quarter. The same logic applies across industries: the cost pays for itself through increased leads and conversions.
                                </p>

                                {/* Section 8: How to Build */}
                                <h2 id="how-to-build" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">How to Build a Smart Website: Step-by-Step Process</h2>
                                <p>
                                    Building a smart website is more involved than creating a traditional website, but the process is straightforward when you work with an experienced company. Here is the typical workflow:
                                </p>

                                <div className="space-y-4 my-8">
                                    {[
                                        { step: "Step 1", title: "Discovery & Strategy", desc: "Define your business goals, target audience, key pages, and conversion objectives. Identify the questions your customers most frequently ask and the actions you want the website to drive (bookings, enquiries, purchases)." },
                                        { step: "Step 2", title: "Design & Prototyping", desc: "Create wireframes and visual designs that prioritize mobile-first usability. This phase includes designing the AI chat interface, defining the conversation flows, and mapping out the user journey from landing to conversion." },
                                        { step: "Step 3", title: "Development", desc: "Build the website using a modern framework (Next.js is the gold standard in 2026) with server-side rendering for SEO and performance. Integrate the AI agent, connect it to your business data, and set up the automation workflows." },
                                        { step: "Step 4", title: "AI Agent Training", desc: "Train the AI agent on your specific business data — products, services, pricing, policies, FAQs, and brand voice. Test it extensively with real-world scenarios to ensure accurate and helpful responses." },
                                        { step: "Step 5", title: "Integration & Automation", desc: "Connect the website to your existing tools: WhatsApp Business API, Google Calendar, CRM system, email marketing platform, and payment gateway. Set up automated workflows for lead follow-up and notification." },
                                        { step: "Step 6", title: "Launch, Monitor & Optimize", desc: "Deploy the website, monitor performance metrics (traffic, conversations, conversions), and continuously optimize based on data. A smart website is never 'done' — it improves over time as it learns from visitor interactions." },
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-4 items-start">
                                            <span className="bg-ember/20 text-ember-deep text-xs font-bold px-3 py-1.5 rounded-full shrink-0 mt-0.5">{item.step}</span>
                                            <div>
                                                <h4 className="text-ink font-semibold mb-1">{item.title}</h4>
                                                <p className="text-sm text-ink-soft">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Section 9: Choosing the Right Company */}
                                <h2 id="choosing-company" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">How to Choose the Right Smart Website Company in Sri Lanka</h2>
                                <p>
                                    The Sri Lankan web development market has hundreds of agencies, but very few genuinely understand smart website technology. Here are the criteria you should use when evaluating potential partners:
                                </p>

                                <div className="space-y-4 my-8">
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <h4 className="text-ink font-bold mb-2 flex items-center gap-2"><Brain className="w-5 h-5 text-ember-ink" /> AI Expertise</h4>
                                        <p className="text-sm text-ink-soft">Ask the company to demonstrate their AI capabilities. Can they build a custom AI agent trained on your data? Or are they simply embedding a generic third-party chatbot widget? The difference is significant — generic chatbots frustrate users, while custom AI agents genuinely help them.</p>
                                    </div>
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <h4 className="text-ink font-bold mb-2 flex items-center gap-2"><Rocket className="w-5 h-5 text-ember-ink" /> Modern Technology Stack</h4>
                                        <p className="text-sm text-ink-soft">Ask what technology they use to build websites. In 2026, the industry standard for high-performance websites is Next.js with React. If a company is still building with WordPress, Wix, or basic HTML/CSS, they are unlikely to deliver the performance and SEO advantages that smart websites provide. Look for companies that use server-side rendering (SSR) and can demonstrate sub-2-second page load times.</p>
                                    </div>
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <h4 className="text-ink font-bold mb-2 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-ember-ink" /> Proven Results</h4>
                                        <p className="text-sm text-ink-soft">Ask for case studies with measurable outcomes — not just &quot;we built a pretty website,&quot; but &quot;we increased this client&apos;s enquiries by 300%&quot; or &quot;we reduced their response time from 4 hours to 2 seconds.&quot; Companies that track business impact are the ones worth hiring.</p>
                                    </div>
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <h4 className="text-ink font-bold mb-2 flex items-center gap-2"><Shield className="w-5 h-5 text-ember-ink" /> Post-Launch Support</h4>
                                        <p className="text-sm text-ink-soft">A smart website requires ongoing maintenance — AI model updates, security patches, performance monitoring, and content updates. Make sure the company offers a clear monthly or annual support plan, not just a one-time handoff.</p>
                                    </div>
                                    <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                        <h4 className="text-ink font-bold mb-2 flex items-center gap-2"><Search className="w-5 h-5 text-ember-ink" /> SEO Knowledge</h4>
                                        <p className="text-sm text-ink-soft">The best smart website company should also understand SEO deeply. Your website is useless if nobody can find it. Ask about their approach to technical SEO, content strategy, keyword optimization, and Core Web Vitals performance.</p>
                                    </div>
                                </div>

                                <p>
                                    At ARC AI, we check every one of these boxes. As a specialised <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">AI company in Sri Lanka</Link>, we build smart websites using Next.js, integrate custom AI agents trained on your business data, and provide measurable results. Our websites load in under 2 seconds, rank on Google, and convert visitors into customers — whether it is 2 PM or 2 AM. For a full breakdown of the island&apos;s development ecosystem, see our guide to the <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">top software companies in Sri Lanka</Link>.
                                </p>

                                {/* Section 10: Future Trends */}
                                <h2 id="future-trends" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">Future of Smart Websites in Sri Lanka (2026–2030)</h2>
                                <p>
                                    Smart website technology is evolving rapidly. Here are the trends that will shape the next five years:
                                </p>
                                <ul className="list-disc pl-6 space-y-3 my-6">
                                    <li><strong>Voice-First Interfaces:</strong> As voice search grows (Google reports that 30% of all searches will be voice-based by 2027), smart websites will integrate voice agents that visitors can speak to naturally, creating a phone-call-like experience directly on the website.</li>
                                    <li><strong>Predictive AI:</strong> Future smart websites will not just respond to visitor actions — they will predict them. Using behavioural analysis, the AI will proactively offer help, suggest products, or trigger offers before the visitor even asks.</li>
                                    <li><strong>Hyper-Personalization:</strong> Every visitor will see a fully customized version of the website based on their location, past behaviour, preferences, and even the device they are using. This goes beyond simple A/B testing to true one-to-one personalization.</li>
                                    <li><strong>Augmented Reality (AR) Integration:</strong> For industries like real estate, interior design, and retail, smart websites will offer AR experiences — letting visitors visualize a product in their space or take a virtual tour of a property, directly from the website.</li>
                                    <li><strong>Agentic Workflows:</strong> AI agents on smart websites will become capable of completing multi-step transactions autonomously — booking appointments, processing payments, generating quotes, and coordinating logistics — with minimal human intervention.</li>
                                </ul>

                                {/* Section 11: FAQ */}
                                <h2 id="faq" className="text-3xl font-medium text-ink mt-16 mb-6 scroll-mt-24 tracking-[-0.035em]">Frequently Asked Questions About Smart Websites in Sri Lanka</h2>

                                <div className="space-y-6 my-8">
                                    {[
                                        {
                                            q: "What is the difference between a smart website and a regular website?",
                                            a: "A regular website displays static information and relies on contact forms for lead capture. A smart website uses AI, automation, and dynamic personalization to actively engage visitors, answer questions in real time, capture and qualify leads automatically, and integrate with your business tools like WhatsApp and CRM systems."
                                        },
                                        {
                                            q: "How much does a smart website cost in Sri Lanka?",
                                            a: "A smart website in Sri Lanka typically costs between LKR 200,000 and LKR 650,000 for design and development, with monthly running costs of LKR 13,000 to LKR 40,000 for hosting and AI services. The exact cost depends on the complexity of your requirements, the number of AI integrations, and the scale of automation needed."
                                        },
                                        {
                                            q: "Can a smart website work in Sinhala and Tamil?",
                                            a: "Yes. Modern AI agents can communicate in over 50 languages, including Sinhala, Tamil, English, and other languages relevant to Sri Lanka's tourist markets (German, French, Mandarin, Japanese). The AI handles translation in real time, so you do not need separate language versions of your website."
                                        },
                                        {
                                            q: "How long does it take to build a smart website?",
                                            a: "A typical smart website project takes 4 to 8 weeks from discovery to launch, depending on complexity. Simple smart websites with a single AI agent can be completed in 3–4 weeks, while complex implementations with multiple integrations and custom AI training may take 8–12 weeks."
                                        },
                                        {
                                            q: "Will a smart website help my Google rankings?",
                                            a: "Yes. Smart websites built with modern technology (like Next.js with server-side rendering) naturally score higher on Google's Core Web Vitals. The AI engagement features also increase dwell time and reduce bounce rate — two key signals Google uses to determine search rankings. Many businesses see measurable ranking improvements within 3–6 months of launching a smart website."
                                        },
                                        {
                                            q: "Do I need technical knowledge to manage a smart website?",
                                            a: "No. A good smart website company will provide an intuitive admin dashboard where you can update content, review AI conversations, manage leads, and monitor performance — all without writing any code. Ongoing technical maintenance should be handled by your development partner as part of a support plan."
                                        },
                                        {
                                            q: "Which industries benefit most from smart websites in Sri Lanka?",
                                            a: "Tourism and hospitality, real estate, healthcare, education, e-commerce, and professional services see the highest ROI from smart websites. However, any business that receives customer enquiries online — whether it is a law firm, a restaurant, or a logistics company — can benefit from the automation and AI capabilities that smart websites provide."
                                        }
                                    ].map((faq, i) => (
                                        <div key={i} className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                            <h3 className="text-lg font-bold text-ink mb-3">{faq.q}</h3>
                                            <p className="text-sm text-ink-soft">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Conclusion */}
                                <h2 className="text-3xl font-medium text-ink mt-16 mb-6 tracking-[-0.035em]">Final Thoughts: The Smart Website Advantage</h2>
                                <p>
                                    The gap between businesses with smart websites and those with traditional websites is widening every month. In 2026, your website is not just a marketing channel — it is your most important employee. It is the first thing potential customers see, the first interaction they have with your brand, and often the deciding factor in whether they choose you or your competitor.
                                </p>
                                <p>
                                    Sri Lankan businesses that invest in smart websites today will dominate their markets tomorrow. The technology is mature, the costs are accessible, and the results are proven. The only question is: will you lead, or will you follow?
                                </p>

                                {/* CTA */}
                                <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-8 mt-12">
                                    <h3 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
                                        <MonitorSmartphone className="w-6 h-6" />
                                        Ready to Build Your Smart Website?
                                    </h3>
                                    <p className="text-ink mb-6">
                                        ARC AI builds high-performance smart websites for Sri Lankan businesses. Custom AI agents, lightning-fast performance, and measurable results. Let&apos;s discuss your project.
                                    </p>
                                    <Link href="/contact" className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-6 py-3 bg-ember text-ink font-semibold hover:bg-[#FF5C3A] transition-colors">
                                        Get Your Free Smart Website Consultation
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Tags & Nav */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10">
                            <h4 className="text-sm font-semibold text-ink-soft uppercase tracking-wider mb-4">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Smart Websites", "Smart Website Companies", "Sri Lanka", "AI Websites", "Web Development", "SEO", "AI Integration", "Digital Marketing", "Business Growth", "Web Design Sri Lanka"].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-white/70 text-ink-soft text-sm rounded-full border border-ink/10 hover:border-ember transition-colors cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Related Articles */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10">
                            <h4 className="text-sm font-semibold text-ink-soft uppercase tracking-wider mb-6">Related Articles</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link href="/blog/ai-agents-sri-lanka" className="cut-card [--cut:14px] relative group bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-5 hover:[--cut-line:rgba(255,73,37,0.5)] transition-colors">
                                    <span className="text-xs text-ember-deep font-semibold">AI Agents</span>
                                    <h5 className="text-ink font-semibold mt-1 group-hover:text-ember-deep transition-colors">The Rise of AI Agents: Transforming Business in Sri Lanka</h5>
                                </Link>
                                <Link href="/ai-companies-sri-lanka" className="cut-card [--cut:14px] relative group bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-5 hover:[--cut-line:rgba(255,73,37,0.5)] transition-colors">
                                    <span className="text-xs text-ember-deep font-semibold">Industry Guide</span>
                                    <h5 className="text-ink font-semibold mt-1 group-hover:text-ember-deep transition-colors">Top AI Companies in Sri Lanka: Complete Guide</h5>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </article>
        </div>
    );
}
