"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Mail, TrendingUp } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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

            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&auto=format&fit=crop&q=80"
                        alt="Email Marketing Automation"
                        className="w-full h-full object-cover"
                        loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full border border-accent/30 mb-4">
                            Marketing Automation
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Email Marketing Automation: Complete 2024 Playbook
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Aug 30, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>15 min read</span>
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
                                Email marketing automation delivers the highest ROI of any marketing channel—$42 for every $1 spent. Master the strategies, workflows, and best practices that transform email from manual broadcasts into sophisticated, revenue-generating machines.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Email Automation Matters</h2>
                            <p>
                                Manual email marketing doesn't scale. Automation enables personalized communication with thousands or millions of contacts based on behavior, preferences, and lifecycle stage—all while your team focuses on strategy and creative.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-6 my-8">
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Email Automation Impact
                                </h4>
                                <ul className="space-y-2 text-neutral-200">
                                    <li>• 320% more revenue than non-automated emails</li>
                                    <li>• 70.5% higher open rates</li>
                                    <li>• 152% higher click-through rates</li>
                                    <li>• 90% time savings on email execution</li>
                                    <li>• $42 ROI for every $1 invested</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Essential Email Automation Workflows</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Welcome Series (First Impression)</h3>
                            <p><strong>Trigger:</strong> New subscriber joins list</p>
                            <p><strong>Goal:</strong> Build relationship, set expectations, deliver value</p>
                            <p><strong>Workflow structure:</strong></p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Email 1 (Immediate):</strong> Welcome, deliver lead magnet, set expectations</li>
                                <li><strong>Email 2 (Day 2):</strong> Share brand story, social proof</li>
                                <li><strong>Email 3 (Day 4):</strong> Provide valuable content, educate</li>
                                <li><strong>Email 4 (Day 7):</strong> Introduce products/services with soft CTA</li>
                                <li><strong>Email 5 (Day 10):</strong> Special offer for new subscribers</li>
                            </ol>
                            <p><strong>Performance benchmarks:</strong> 50-60% open rate, 15-20% click rate</p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Abandoned Cart Recovery</h3>
                            <p><strong>Trigger:</strong> User adds items to cart but doesn't purchase</p>
                            <p><strong>Goal:</strong> Recover lost revenue (average recovery rate: 8-15%)</p>
                            <p><strong>Workflow structure:</strong></p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Email 1 (1 hour later):</strong> Gentle reminder, product images, urgency</li>
                                <li><strong>Email 2 (24 hours):</strong> Social proof, reviews, benefits</li>
                                <li><strong>Email 3 (48-72 hours):</strong> Discount offer (10-15%), final urgency</li>
                            </ol>
                            <p><strong>Pro tip:</strong> Recover 10-30% of abandoned carts with this sequence</p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Post-Purchase Follow-Up</h3>
                            <p><strong>Trigger:</strong> Customer completes purchase</p>
                            <p><strong>Goal:</strong> Increase satisfaction, generate reviews, drive repeat purchases</p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Email 1 (Immediate):</strong> Order confirmation, shipping details</li>
                                <li><strong>Email 2 (Delivery):</strong> Product arrived, setup tips, support</li>
                                <li><strong>Email 3 (7-14 days):</strong> Request review, share content</li>
                                <li><strong>Email 4 (30 days):</strong> Cross-sell/upsell recommendations</li>
                            </ol>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Re-engagement / Win-Back</h3>
                            <p><strong>Trigger:</strong> Subscriber inactive for 60-90 days</p>
                            <p><strong>Goal:</strong> Reactivate dormant subscribers or clean list</p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Email 1:</strong> "We miss you" with value proposition reminder</li>
                                <li><strong>Email 2 (7 days):</strong> Exclusive offer or new content</li>
                                <li><strong>Email 3 (14 days):</strong> Last chance - preference center or unsubscribe</li>
                            </ol>
                            <p><strong>Result:</strong> Re-engage 5-15% or clean list for better deliverability</p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">5. Lead Nurturing Drip Campaign</h3>
                            <p><strong>Trigger:</strong> Lead enters sales funnel</p>
                            <p><strong>Goal:</strong> Educate, build trust, move toward purchase decision</p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Awareness stage:</strong> Educational content, industry insights</li>
                                <li><strong>Consideration stage:</strong> Product benefits, comparisons, case studies</li>
                                <li><strong>Decision stage:</strong> Product demos, testimonials, special offers</li>
                            </ol>
                            <p><strong>Duration:</strong> 4-12 weeks depending on sales cycle</p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">6. Birthday/Anniversary Campaigns</h3>
                            <p><strong>Trigger:</strong> Customer birthday or purchase anniversary</p>
                            <p><strong>Goal:</strong> Build loyalty, drive purchases during peak engagement</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Send 1-3 days before date</li>
                                <li>Include special offer or gift</li>
                                <li>Personalize with name and purchase history</li>
                            </ul>
                            <p><strong>Performance:</strong> 2-5x higher conversion than regular emails</p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Segmentation Strategies</h2>

                            <p>Generic emails generate generic results. Segmentation enables relevant, personalized messaging.</p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Segmentation Criteria</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Demographics:</strong> Age, location, gender, income</li>
                                <li><strong>Behavior:</strong> Purchase history, browsing activity, engagement level</li>
                                <li><strong>Lifecycle stage:</strong> New subscriber, active customer, at-risk, churned</li>
                                <li><strong>Preferences:</strong> Product interests, content topics, communication frequency</li>
                                <li><strong>Purchase value:</strong> VIPs, mid-tier, bargain shoppers</li>
                                <li><strong>Engagement:</strong> Highly engaged, moderately engaged, inactive</li>
                            </ul>

                            <p><strong>Impact of segmentation:</strong> 760% increase in revenue compared to non-segmented campaigns</p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Personalization Tactics</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Basic Personalization</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>First name in subject line and body</li>
                                <li>Location-based content</li>
                                <li>Birthday/anniversary messages</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Advanced Personalization</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Dynamic content blocks:</strong> Show different content to different segments in same email</li>
                                <li><strong>Product recommendations:</strong> Based on browse and purchase history</li>
                                <li><strong>Predictive send time:</strong> Send when each subscriber most likely to engage</li>
                                <li><strong>Behavior-triggered content:</strong> Recent page views, cart contents, search queries</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Top Email Automation Platforms</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. HubSpot</h3>
                            <p><strong>Best for:</strong> All-in-one marketing automation</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Visual workflow builder</li>
                                <li>Advanced segmentation and personalization</li>
                                <li>CRM integration</li>
                                <li><strong>Pricing:</strong> Free tier; Professional from $800/month</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. ActiveCampaign</h3>
                            <p><strong>Best for:</strong> SMBs needing powerful automation</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Sophisticated automation workflows</li>
                                <li>Predictive sending</li>
                                <li>Lead scoring</li>
                                <li><strong>Pricing:</strong> From $29/month</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Klaviyo</h3>
                            <p><strong>Best for:</strong> E-commerce email automation</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>E-commerce platform integrations</li>
                                <li>Advanced segmentation</li>
                                <li>Predictive analytics</li>
                                <li><strong>Pricing:</strong> Free to 250 contacts; scales with list</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Mailchimp</h3>
                            <p><strong>Best for:</strong> Beginners and small businesses</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>User-friendly interface</li>
                                <li>Pre-built automation templates</li>
                                <li>Basic segmentation</li>
                                <li><strong>Pricing:</strong> Free to 500 contacts; from $13/month</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Deliverability Best Practices</h2>
                            <p>The best email is worthless if it doesn't reach the inbox.</p>

                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Authentication:</strong> Set up SPF, DKIM, and DMARC records</li>
                                <li><strong>Warm-up new domains:</strong> Gradually increase sending volume</li>
                                <li><strong>Clean list regularly:</strong> Remove hard bounces immediately, inactive subscribers quarterly</li>
                                <li><strong>Avoid spam triggers:</strong> "Free," excessive punctuation!!!, ALL CAPS</li>
                                <li><strong>Monitor sender reputation:</strong> Use tools like SenderScore</li>
                                <li><strong>Make unsubscribe easy:</strong> Reduces spam complaints</li>
                                <li><strong>Engagement matters:</strong> ISPs prioritize emails recipients engage with</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">A/B Testing for Optimization</h2>

                            <p><strong>Elements to test:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Subject lines:</strong> Length, emoji, personalization, urgency</li>
                                <li><strong>Send times:</strong> Day of week, time of day</li>
                                <li><strong>Email content:</strong> Long vs. short, images vs. text</li>
                                <li><strong>CTAs:</strong> Button color, copy, placement, number</li>
                                <li><strong>From name:</strong> Company vs. person, CEO vs. support</li>
                            </ul>

                            <p><strong>Testing best practices:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Test one variable at a time</li>
                                <li>Ensure statistical significance (minimum 1,000 recipients per variation)</li>
                                <li>Run tests for full business cycle</li>
                                <li>Implement winners, then test next variable</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Metrics to Track</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Deliverability rate:</strong> % of emails that reached inbox (aim for 95%+)</li>
                                <li><strong>Open rate:</strong> % of recipients who opened (benchmark: 15-25%)</li>
                                <li><strong>Click-through rate:</strong> % who clicked (benchmark: 2-5%)</li>
                                <li><strong>Conversion rate:</strong> % who completed desired action</li>
                                <li><strong>Unsubscribe rate:</strong> % who opted out (keep below 0.5%)</li>
                                <li><strong>Revenue per email:</strong> Total revenue / emails sent</li>
                                <li><strong>List growth rate:</strong> (New subscribers - unsubscribes) / total subscribers</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
                            <p>
                                Email automation transforms email marketing from time-consuming manual work into scalable, personalized communication that drives consistent revenue. Start with essential workflows (welcome, abandoned cart, post-purchase), implement robust segmentation, continuously test and optimize, and watch email become your highest-ROI marketing channel.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Mail className="w-6 h-6" />
                                    Build Your Email Automation Engine
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Our email marketing specialists will audit your current strategy, design custom automation workflows, implement advanced segmentation, and optimize for maximum ROI.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Get Email Automation Audit
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Email Marketing", "Marketing Automation", "Email Automation", "Lead Nurturing", "Cart Abandonment", "Email Strategy", "Conversion Optimization", "Digital Marketing"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/ai-content-generation-marketing" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">AI Content Generation</div>
                            </div>
                        </Link>
                        <Link href="/blog/ai-analytics-business-intelligence" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">AI Analytics & BI</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 text-sm font-semibold">Share this article:</span>
                            <button className="p-2 bg-neutral-900 rounded-lg hover:bg-accent transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
