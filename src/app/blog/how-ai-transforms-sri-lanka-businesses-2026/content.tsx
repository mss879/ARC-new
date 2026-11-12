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
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "How AI Transforms Sri Lankan Businesses" }
            ]} />

            <section className="relative flex items-end px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-[rgb(255,73,37)] transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 backdrop-blur-sm text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                            AI Results · Sri Lanka
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            How AI Is Transforming Sri Lankan Businesses in 2026 — Real Results
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <article className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
                        <div className="space-y-6 text-neutral-300 leading-relaxed">

                            <p className="text-xl text-neutral-200">
                                The question is no longer &quot;should my business use AI?&quot; but &quot;how quickly can I deploy AI before my competitors do?&quot; In 2026, <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI companies in Sri Lanka</Link> are delivering measurable, business-transforming results — not theoretical possibilities. This article presents real case study data showing exactly how AI is transforming Sri Lankan businesses right now.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The State of AI in Sri Lanka (2026)</h2>
                            <p>
                                Sri Lanka&apos;s AI adoption has accelerated dramatically. What was once the domain of international corporations is now accessible to local SMEs, startups, and mid-market companies. Key factors driving this transformation:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Cost accessibility:</strong> AI solutions that once cost $50,000+ are now available from top AI companies in Sri Lanka starting from competitive Sri Lankan rates.</li>
                                <li><strong>Proven ROI:</strong> Early adopters in tourism, real estate, and e-commerce have demonstrated 100-300% returns on their AI investments within 6 months.</li>
                                <li><strong>Talent pool:</strong> Sri Lanka&apos;s strong <Link href="/software-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">software engineering talent</Link> combined with international AI expertise creates a unique advantage.</li>
                                <li><strong>Multilingual capability:</strong> AI solutions that work in Sinhala, Tamil, and English meet a critical market requirement that global AI platforms cannot.</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Case Study #1: Tourism Company — 167% Booking Increase</h2>

                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 my-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">+167%</p>
                                        <p className="text-xs text-zinc-400">Booking Enquiries</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">-60%</p>
                                        <p className="text-xs text-zinc-400">Service Cost</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">&lt;10s</p>
                                        <p className="text-xs text-zinc-400">Response Time</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">+35%</p>
                                        <p className="text-xs text-zinc-400">Off-hours Conversions</p>
                                    </div>
                                </div>
                            </div>

                            <p><strong>Challenge:</strong> A leading Sri Lankan tourism company was losing potential bookings because their website couldn&apos;t handle multilingual enquiries. Customer response times averaged 6-12 hours, and 40% of enquiries went unanswered during off-hours.</p>
                            <p><strong>Solution:</strong> ARC AI built a Smart Website with an AI chatbot operating 24/7 in Sinhala, Tamil, and English. The chatbot handles booking enquiries, provides tour information, processes reservations, and integrates with their existing booking system. An automated email follow-up workflow recovers abandoned enquiries.</p>
                            <p><strong>Impact:</strong> Booking enquiries increased 167%, customer service costs dropped 60%, and the company now converts 35% of off-hours enquiries — previously a complete dead zone.</p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Case Study #2: Real Estate Agency — 247% More Qualified Leads</h2>

                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 my-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">+247%</p>
                                        <p className="text-xs text-zinc-400">Qualified Lead Rate</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">+160%</p>
                                        <p className="text-xs text-zinc-400">Viewings Booked</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">-75%</p>
                                        <p className="text-xs text-zinc-400">Agent Call Time</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">100%</p>
                                        <p className="text-xs text-zinc-400">Lead Qual. Automated</p>
                                    </div>
                                </div>
                            </div>

                            <p><strong>Challenge:</strong> A Colombo real estate agency spent significant time on unqualified leads. Their sales team manually handled 200+ enquiries per month, with only 15% converting to property viewings.</p>
                            <p><strong>Solution:</strong> ARC AI deployed an AI Sales SDR that automatically qualifies property leads via WhatsApp and the website, collects buyer preferences, matches them to available listings, and schedules viewings directly into agents&apos; calendars.</p>
                            <p><strong>Impact:</strong> Qualified lead rate jumped from 15% to 52%, viewings booked increased 160%, and agents now spend 1 hour per day on calls instead of 4. Lead qualification is 100% automated.</p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Case Study #3: E-Commerce — 237% Organic Traffic Growth</h2>

                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 my-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">+237%</p>
                                        <p className="text-xs text-zinc-400">Organic Traffic</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">-46%</p>
                                        <p className="text-xs text-zinc-400">Cart Abandonment</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">+183%</p>
                                        <p className="text-xs text-zinc-400">Monthly Revenue</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[rgb(255,73,37)]">94/100</p>
                                        <p className="text-xs text-zinc-400">PageSpeed Score</p>
                                    </div>
                                </div>
                            </div>

                            <p><strong>Challenge:</strong> An e-commerce retailer struggled with poor website performance (PageSpeed score of 32), low organic traffic, and 78% cart abandonment.</p>
                            <p><strong>Solution:</strong> ARC AI rebuilt their platform on Next.js with server-side rendering, deployed AI-powered product recommendations, automated abandoned cart recovery via WhatsApp, and executed a complete technical SEO overhaul.</p>
                            <p><strong>Impact:</strong> Monthly revenue increased 183% (from £12,000 to £34,000), organic traffic grew 237%, cart abandonment dropped to 42%, and PageSpeed score jumped from 32 to 94.</p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Cost Comparison: Staff vs AI Automation in Sri Lanka</h2>
                            <p>
                                One of the strongest arguments for AI adoption is the cost comparison. Here&apos;s a realistic breakdown for a mid-size Sri Lankan business:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border border-zinc-800">
                                    <thead>
                                        <tr className="border-b border-zinc-800 text-white">
                                            <th className="p-4 text-left">Function</th>
                                            <th className="p-4 text-left">Human Cost (Monthly)</th>
                                            <th className="p-4 text-left">AI Cost (Monthly)</th>
                                            <th className="p-4 text-left">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-zinc-400">
                                        <tr className="border-b border-zinc-800/50">
                                            <td className="p-4">Customer Service (24/7)</td>
                                            <td className="p-4">Rs. 180,000</td>
                                            <td className="p-4">Rs. 35,000</td>
                                            <td className="p-4 text-[rgb(255,73,37)] font-semibold">-80%</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800/50">
                                            <td className="p-4">Lead Qualification</td>
                                            <td className="p-4">Rs. 120,000</td>
                                            <td className="p-4">Rs. 25,000</td>
                                            <td className="p-4 text-[rgb(255,73,37)] font-semibold">-79%</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800/50">
                                            <td className="p-4">Content Creation</td>
                                            <td className="p-4">Rs. 150,000</td>
                                            <td className="p-4">Rs. 30,000</td>
                                            <td className="p-4 text-[rgb(255,73,37)] font-semibold">-80%</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800/50">
                                            <td className="p-4">Data Entry & Processing</td>
                                            <td className="p-4">Rs. 80,000</td>
                                            <td className="p-4">Rs. 15,000</td>
                                            <td className="p-4 text-[rgb(255,73,37)] font-semibold">-81%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-sm text-zinc-500 italic">
                                Costs are estimates based on average Sri Lankan market rates for mid-size businesses. Actual costs vary by complexity and scale.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why ARC AI Is the #1 AI Company in Sri Lanka</h2>
                            <p>
                                <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">ARC AI</Link> has delivered these results consistently across 100+ projects because of three fundamental advantages:
                            </p>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Local knowledge:</strong> ARC AI works from Colombo, so it knows the Sri Lankan market first-hand.</li>
                                <li><strong>Full-Stack AI:</strong> Unlike narrow AI vendors, ARC AI delivers end-to-end solutions — chatbots, automation, web design, digital marketing, content generation, and voice assistants — all integrated and optimised together.</li>
                                <li><strong>Measurable Results:</strong> Every ARC AI project is tracked with quantifiable KPIs. The results in this article are real, verified outcomes from actual Sri Lankan client deployments.</li>
                            </ol>

                            <div className="bg-gradient-to-r from-[rgb(255,73,37)]/20 to-orange-600/20 border border-[rgb(255,73,37)]/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    See What AI Can Do for Your Business
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Every business is different. Get a free, personalised AI assessment from Sri Lanka&apos;s #1 AI company. We&apos;ll show you exactly where AI can save you money, increase revenue, and outperform your competition.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors">
                                    Get Your Free AI Assessment
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Companies Sri Lanka", "AI ROI", "AI Case Studies", "Business Automation", "AI Colombo", "Digital Transformation", "Cost Savings"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/ai-solutions-sri-lankan-industries" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">AI Solutions for Sri Lankan Industries</div>
                            </div>
                        </Link>
                        <Link href="/blog" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">Blog Home</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 text-sm font-semibold">Share this article:</span>
                            <button className="p-2 bg-neutral-900 rounded-lg hover:bg-[rgb(255,73,37)] transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
