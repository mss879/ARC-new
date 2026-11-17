"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function BlogPost() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <Navbar />
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "AI Solutions for Sri Lankan Industries" }
            ]} />

            <section className="relative flex items-end px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-ember/20 text-ember-deep text-sm font-semibold rounded-full border border-ember/30 mb-4">
                            AI Solutions · Sri Lanka
                        </span>
                        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            How AI Companies in Sri Lanka Are Transforming Key Industries
                        </h1>
                        <div className="flex items-center gap-6 text-ink-soft">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>10 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <article className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
                        <div className="space-y-6 text-ink-soft leading-relaxed">

                            <p className="text-xl text-ink">
                                Artificial intelligence is no longer a futuristic concept for Sri Lankan businesses — it&apos;s a present-day competitive advantage. Across Colombo, Kandy, Galle, and beyond, <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">AI companies in Sri Lanka</Link> are deploying intelligent solutions that automate operations, reduce costs, and drive measurable revenue growth across every major industry.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Tourism & Hospitality</h2>
                            <p>
                                Sri Lanka&apos;s tourism boom demands 24/7 multilingual service that human teams struggle to deliver. AI companies in Sri Lanka are transforming this sector with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Multilingual AI Chatbots:</strong> Handle booking enquiries in English, German, French, Mandarin, Sinhala, and Tamil around the clock. A leading Sri Lankan tourism company saw a <strong>167% increase in booking enquiries</strong> and <strong>60% reduction in customer service costs</strong> after deploying an ARC AI chatbot.</li>
                                <li><strong>Automated Itinerary Planning:</strong> AI agents that suggest personalised itineraries based on guest preferences, budget, and travel dates.</li>
                                <li><strong>Review Management:</strong> AI-powered tools that monitor, respond to, and analyse guest reviews across TripAdvisor, Google, and Booking.com in real time.</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Real Estate</h2>
                            <p>
                                Colombo&apos;s booming real estate market generates hundreds of enquiries that sales teams can&apos;t process manually. AI companies in Sri Lanka are solving this with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>AI Lead Qualification:</strong> Chatbots on WhatsApp and websites that automatically qualify buyers by budget, timeline, and requirements — then schedule viewings only for high-quality leads. One Colombo real estate agency saw a <strong>247% increase in qualified lead rate</strong>.</li>
                                <li><strong>Property Matching AI:</strong> Intelligent recommendation engines that match buyer preferences to available listings automatically.</li>
                                <li><strong>Automated Follow-ups:</strong> AI-driven email and WhatsApp sequences that re-engage cold leads with personalised property updates.</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">E-Commerce & Retail</h2>
                            <p>
                                Sri Lankan e-commerce is growing rapidly, and AI companies in Sri Lanka are helping local brands compete with international giants:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>AI Product Recommendations:</strong> Personalised product suggestions based on browsing history that increase average order value by 15-30%.</li>
                                <li><strong>Abandoned Cart Recovery:</strong> Automated WhatsApp and email campaigns triggered by cart abandonment, recovering 20-35% of lost sales.</li>
                                <li><strong>Inventory Management AI:</strong> Predictive systems that forecast demand, prevent stockouts, and optimise procurement — reducing overstock costs by up to 30%.</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Healthcare</h2>
                            <p>
                                Sri Lankan healthcare providers are adopting AI to improve patient experience and operational efficiency:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Patient Triage Chatbots:</strong> AI assistants that screen symptoms, prioritise urgency, and schedule appointments — reducing reception workload by 40%.</li>
                                <li><strong>Appointment Automation:</strong> Intelligent booking systems that handle scheduling, reminders, cancellations, and follow-ups without human intervention.</li>
                                <li><strong>Medical Data Processing:</strong> AI that extracts and structures data from patient forms, lab results, and prescriptions into clean digital records.</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Manufacturing & Logistics</h2>
                            <p>
                                Sri Lanka&apos;s manufacturing and logistics sectors are leveraging AI for operational excellence:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Quality Control AI:</strong> Computer vision systems that detect defects in real-time on production lines, reducing waste by up to 25%.</li>
                                <li><strong>Supply Chain Optimisation:</strong> AI that predicts demand, optimises routing, and reduces delivery times.</li>
                                <li><strong>Document Processing:</strong> Automated extraction of data from invoices, customs forms, and shipping documents using NLP.</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Choosing the Right AI Company in Sri Lanka for Your Industry</h2>
                            <p>
                                When selecting an AI partner, look for a company with demonstrable experience in your specific industry. <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">ARC AI</Link> is the leading AI company in Sri Lanka with proven results across all major sectors — from tourism and real estate to e-commerce and healthcare.
                            </p>
                            <p>
                                Read our comprehensive guide: <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">Top AI Companies in Sri Lanka (2026)</Link> for a detailed breakdown of what to look for, browse our ranked list of the <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">best software companies in Sri Lanka</Link>, or explore our <Link href="/case-studies" className="text-ember-deep hover:underline">case studies</Link> for full results from our Sri Lankan clients.
                            </p>

                            <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-8 mt-12">
                                <h3 className="text-2xl font-bold text-ink mb-4">
                                    Transform Your Industry with AI
                                </h3>
                                <p className="text-ink mb-6">
                                    Ready to see how AI can transform your specific business? ARC AI offers free consultations for Sri Lankan businesses across all industries.
                                </p>
                                <Link href="/contact" className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-6 py-3 bg-ember text-ink font-semibold hover:bg-ember/90 transition-colors">
                                    Get a Free Industry Assessment
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10">
                        <h4 className="text-sm font-semibold text-ink-soft uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Sri Lanka", "AI Tourism", "AI Real Estate", "AI E-Commerce", "AI Healthcare", "AI Manufacturing", "Digital Transformation"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/70 text-ink-soft text-sm rounded-full border border-ink/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10 flex items-center justify-between">
                        <Link href="/ai-companies-sri-lanka" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous Article</div>
                                <div className="font-semibold">Top AI Companies in Sri Lanka</div>
                            </div>
                        </Link>
                        <Link href="/blog/how-ai-transforms-sri-lanka-businesses-2026" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">AI Transforms Sri Lankan Business</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-ink/10">
                        <div className="flex items-center gap-4">
                            <span className="text-ink-soft text-sm font-semibold">Share this article:</span>
                            <button className="p-2 bg-white/70 rounded-lg hover:bg-[#FF5C3A] transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
