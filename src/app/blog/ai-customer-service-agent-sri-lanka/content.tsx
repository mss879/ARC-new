"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, MessageSquare, Clock as ClockIcon, Users, Bot, Brain } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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

            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <Image src="/ai-agent-cs-lk.png"
                        alt="AI Customer Service Agent"
                        width={1600}
                        height={900}
                        className="w-full h-full object-cover"
                        loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/80 to-paper/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-ember/20 text-ember-deep text-sm font-semibold rounded-full border border-ember/30 mb-4">
                            AI Agents
                        </span>
                        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            The Ultimate AI Customer Service Agent for Sri Lankan Businesses
                        </h1>
                        <div className="flex items-center gap-6 text-ink-soft">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>March 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 min read</span>
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
                                Have you interacted with the AI Agent in the bottom corner of our website? It&apos;s not a standard, pre-programmed chatbot. It&apos;s a fully contextual, intelligent digital employee that understands our business perfectly. And it is exactly what Sri Lankan customer service needs right now. If you are comparing vendors to build one, start with our guide to the <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">top software companies in Sri Lanka</Link>. As one of the <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">top AI companies in Sri Lanka</Link>, we built this to demonstrate what AI can do for your business.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">The Customer Service Crisis in Sri Lanka</h2>
                            <p>
                                Every Sri Lankan business owner knows the struggle: customers expect responses within minutes, whether it&apos;s via WhatsApp, Facebook Messenger, or your website. But staffing a 24/7 customer service desk is expensive, and human error leads to lost leads.
                            </p>
                            <p>
                                How often do you lose a sale simply because a customer messaged at 9:00 PM asking for a price list, and your team only replied the next morning at 10:00 AM? In that 13-hour window, they already checked your competitor&apos;s page.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">How Our AI Agent Solves This</h2>
                            <p>
                                The AI agent you see on our website (go ahead, test it!) is built specifically to address these gaps. Here&apos;s why it&apos;s the perfect model for Sri Lankan businesses:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                    <ClockIcon className="w-8 h-8 text-ember-deep mb-4" />
                                    <h3 className="text-xl font-bold text-ink mb-2">Zero Wait Time, 24/7</h3>
                                    <p className="text-sm text-ink-soft">
                                        It replies instantly. At 2 AM on a Sunday or during a busy holiday rush, every single inquiry is acknowledged and answered perfectly in seconds.
                                    </p>
                                </div>
                                <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                    <Brain className="w-8 h-8 text-ember-deep mb-4" />
                                    <h3 className="text-xl font-bold text-ink mb-2">Deep Business Knowledge</h3>
                                    <p className="text-sm text-ink-soft">
                                        Unlike old chatbots that just say &quot;I don&apos;t understand,&quot; our agent is trained on your exact data—your prices, your return policy, your services.
                                    </p>
                                </div>
                                <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                    <MessageSquare className="w-8 h-8 text-ember-deep mb-4" />
                                    <h3 className="text-xl font-bold text-ink mb-2">Contextual Conversations</h3>
                                    <p className="text-sm text-ink-soft">
                                        It remembers context organically. If a user asks &quot;How much for a website?&quot; and then says &quot;What about a simple one?&quot;, it knows they mean a simple website.
                                    </p>
                                </div>
                                <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6">
                                    <Users className="w-8 h-8 text-ember-deep mb-4" />
                                    <h3 className="text-xl font-bold text-ink mb-2">Lead Qualification</h3>
                                    <p className="text-sm text-ink-soft">
                                        It intelligently collects user details (name, email) before passing them to your human team, ensuring you only spend time on serious leads.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Perfect for Local Contexts</h2>
                            <p>
                                Whether you run a boutique hotel down South, a retail brand in Colombo, or an export business dealing with international clients across time zones, an AI Agent acts as your frontline ambassador. It can qualify leads, escalate complex queries to human staff, and even book appointments directly into your calendar.
                            </p>

                            <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-8 mt-12">
                                <h3 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
                                    <Bot className="w-6 h-6" />
                                    Test Our Agent, Then Get Your Own
                                </h3>
                                <p className="text-ink mb-6">
                                    Experience the future of customer service by chatting with the ARC AI agent on this site. Want one trained on your business data? Contact us today.
                                </p>
                                <Link href="/contact" className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-6 py-3 bg-ember text-ink font-semibold hover:bg-[#FF5C3A] transition-colors">
                                    Build My AI Agent
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags & Nav */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10">
                        <h4 className="text-sm font-semibold text-ink-soft uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Agents", "Customer Service", "Sri Lanka Business", "Automation", "Chatbots"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/70 text-ink-soft text-sm rounded-full border border-ink/10 hover:border-ember transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
