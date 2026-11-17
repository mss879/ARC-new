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
                { label: "Best AI Chatbots for Sri Lankan Businesses" }
            ]} />

            <section className="relative flex items-end px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-ember/20 text-ember-deep text-sm font-semibold rounded-full border border-ember/30 mb-4">
                            AI Chatbots &middot; Sri Lanka
                        </span>
                        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Best AI Chatbots for Sri Lankan Businesses (2026)
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
                                AI chatbots have become the single most impactful technology for Sri Lankan businesses in 2026. From tourism companies in Galle to real estate agencies in Colombo, <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">AI companies in Sri Lanka</Link> are deploying intelligent chatbots that handle customer inquiries 24/7, qualify leads automatically, and speak Sinhala, Tamil, and English fluently.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Why Sri Lankan Businesses Need AI Chatbots in 2026</h2>
                            <p>
                                The Sri Lankan consumer market has changed fundamentally. Customers expect instant responses at any hour. They browse products at 11 PM, send WhatsApp messages at 6 AM, and expect answers before their morning tea. Businesses still relying on human-only customer service are haemorrhaging leads to competitors who respond instantly with AI.
                            </p>
                            <p>
                                Consider this: the average Sri Lankan business takes 4-8 hours to respond to a customer inquiry. An AI chatbot responds in under 3 seconds. That difference alone is responsible for the 167% increase in booking enquiries that our tourism client experienced after deploying an ARC AI chatbot.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">What Makes a Great AI Chatbot for Sri Lanka?</h2>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">1. Trilingual Capability: Sinhala, Tamil, and English</h3>
                            <p>
                                This is non-negotiable for Sri Lankan businesses. The best AI chatbots built by <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">top AI companies in Sri Lanka</Link> operate fluently in all three national languages. They do not just translate &mdash; they understand cultural context, local slang, and the way real Sri Lankans communicate. A chatbot that responds in formal English when a customer writes in casual Sinhala is worse than having no chatbot at all.
                            </p>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">2. WhatsApp and Facebook Messenger Integration</h3>
                            <p>
                                Sri Lanka has over 12 million WhatsApp users. If your chatbot only works on your website, you are missing the platform where most of your customers actually communicate. The best AI chatbots deploy across WhatsApp, Facebook Messenger, Instagram DM, and your website simultaneously &mdash; maintaining the same conversation context across all channels.
                            </p>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">3. Contextual Intelligence</h3>
                            <p>
                                Basic chatbots follow scripted decision trees. AI chatbots built by leading AI companies in Sri Lanka use LLMs (Large Language Models) like GPT-4 and Claude to understand context, remember previous conversations, and provide genuinely helpful responses. They know your product catalogue, pricing, policies, and can have natural conversations that feel human.
                            </p>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">4. Lead Qualification and CRM Integration</h3>
                            <p>
                                A great AI chatbot does not just answer questions &mdash; it qualifies leads. It asks the right questions, scores prospects based on buying intent, and pushes qualified leads directly into your CRM. Your sales team wakes up to a list of hot leads instead of spending hours sifting through unqualified inquiries.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Real Results: AI Chatbot Case Studies from Sri Lanka</h2>

                            <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 my-8">
                                <h4 className="text-xl font-bold text-ink mb-4">Tourism Company &mdash; Colombo</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Response time: from <strong>6-12 hours</strong> to <strong>under 10 seconds</strong></li>
                                    <li>Booking enquiries: <strong>+167% increase</strong></li>
                                    <li>Customer service cost: <strong>-60% reduction</strong></li>
                                    <li>Off-hours conversions: <strong>from 0% to 35%</strong></li>
                                    <li>Languages: Sinhala, Tamil, English</li>
                                </ul>
                            </div>

                            <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 my-8">
                                <h4 className="text-xl font-bold text-ink mb-4">Real Estate Agency &mdash; Colombo</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Qualified lead rate: <strong>+247% increase</strong></li>
                                    <li>Property viewings booked: <strong>+160% increase</strong></li>
                                    <li>Agent phone time: <strong>-75% reduction</strong></li>
                                    <li>AI handled: WhatsApp inquiries, lead qualification, viewing scheduling</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">How Much Does an AI Chatbot Cost in Sri Lanka?</h2>
                            <p>
                                AI chatbot pricing from top AI companies in Sri Lanka typically ranges based on complexity (for wider build costs, see our list of <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">software development companies in Sri Lanka</Link> and their rates):
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Basic FAQ Chatbot:</strong> Simple question-answer bot for a website. Suitable for small businesses.</li>
                                <li><strong>Intelligent Lead Qualification Bot:</strong> Contextual AI with CRM integration, multilingual support, and lead scoring. Most popular for mid-size businesses.</li>
                                <li><strong>Enterprise Multi-Channel Bot:</strong> Full deployment across WhatsApp, Messenger, website, voice. Custom integrations with booking systems, ERP, inventory. For large businesses and hotel chains.</li>
                            </ul>
                            <p>
                                ARC AI offers competitive pricing tailored to the Sri Lankan market. Our dual-market model (UK + Sri Lanka) means you get international-quality AI at local rates. <Link href="/contact" className="text-ember-deep hover:underline">Contact us for a free quote</Link>.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Choosing the Right AI Chatbot Provider in Sri Lanka</h2>
                            <p>
                                When evaluating AI chatbot providers among <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">AI companies in Sri Lanka</Link>, ask these questions:
                            </p>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li>Can the chatbot operate in Sinhala, Tamil, and English?</li>
                                <li>Does it integrate with WhatsApp and Facebook Messenger?</li>
                                <li>Can it qualify leads and push to my CRM?</li>
                                <li>What are the response times under load?</li>
                                <li>Do you offer ongoing support and optimisation after launch?</li>
                                <li>Can you show case studies with quantifiable results?</li>
                            </ol>

                            <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-8 mt-12">
                                <h3 className="text-2xl font-bold text-ink mb-4">
                                    Ready to Deploy an AI Chatbot for Your Business?
                                </h3>
                                <p className="text-ink mb-6">
                                    ARC AI builds custom AI chatbots for Sri Lankan businesses across every industry. Trilingual. WhatsApp-ready. CRM-integrated. Get a free consultation today.
                                </p>
                                <Link href="/contact" className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-6 py-3 bg-ember text-ink font-semibold hover:bg-ember/90 transition-colors">
                                    Get a Free AI Chatbot Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10">
                        <h4 className="text-sm font-semibold text-ink-soft uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Chatbots Sri Lanka", "Best AI Chatbots", "AI Companies Sri Lanka", "WhatsApp Chatbot", "Sinhala AI", "Customer Service AI", "Colombo AI"].map((tag) => (
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
                        <Link href="/blog/ai-for-tourism-sri-lanka" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">AI for Tourism in Sri Lanka</div>
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
