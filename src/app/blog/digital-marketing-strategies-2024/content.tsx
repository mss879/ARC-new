"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
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

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80"
                        alt="Digital Marketing"
                        className="w-full h-full object-cover"
                        loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full border border-accent/30 mb-4">
                            Digital Marketing
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            10 Digital Marketing Strategies That Actually Work in 2024
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Oct 5, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>10 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <div className="space-y-6 text-neutral-300 leading-relaxed">
                            <p className="text-xl text-neutral-200">
                                The digital marketing landscape is evolving faster than ever. What worked last year might be obsolete today. In this comprehensive guide, we'll explore the most effective digital marketing strategies that are delivering real results in 2024.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. AI-Powered Content Marketing</h2>
                            <p>
                                Content remains king, but AI has revolutionized how we create and distribute it. Smart marketers are using AI tools to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Generate SEO-optimized content at scale while maintaining quality and authenticity</li>
                                <li>Personalize content for different audience segments automatically</li>
                                <li>Analyze content performance and optimize in real-time</li>
                                <li>Create multi-format content (blog posts, social media, email) from a single brief</li>
                            </ul>
                            <p>
                                Companies implementing AI content marketing see 50% increases in content output and 35% improvements in engagement rates. The key is using AI as a tool to enhance human creativity, not replace it.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Video Marketing Dominance</h2>
                            <p>
                                Video content now accounts for 82% of all internet traffic. Short-form videos (TikTok, Instagram Reels, YouTube Shorts) generate 2.5x more engagement than static posts.
                            </p>
                            <p>
                                <strong>Winning video marketing tactics:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Create authentic, behind-the-scenes content that humanizes your brand</li>
                                <li>Optimize videos for mobile viewing with captions and vertical formats</li>
                                <li>Use interactive videos with polls, quizzes, and clickable CTAs</li>
                                <li>Repurpose long-form content into bite-sized video snippets</li>
                                <li>Leverage live streaming for product launches and Q&A sessions</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Conversational Marketing with AI Chatbots</h2>
                            <p>
                                Modern consumers expect instant responses. AI chatbots provide 24/7 engagement, qualifying leads, answering questions, and guiding customers through the buying journey.
                            </p>
                            <p>
                                Advanced chatbots using natural language processing understand context, sentiment, and intent, delivering personalized conversations that convert. Businesses using conversational marketing see:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>45% increase in lead generation</li>
                                <li>60% reduction in response time</li>
                                <li>35% higher customer satisfaction scores</li>
                                <li>25% boost in conversion rates</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Voice Search Optimization</h2>
                            <p>
                                With over 50% of searches now conducted via voice, optimizing for voice search is no longer optional. Voice queries are longer, more conversational, and question-based.
                            </p>
                            <p>
                                <strong>Voice SEO best practices:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Target long-tail keywords and natural language phrases</li>
                                <li>Create FAQ pages that answer common voice queries</li>
                                <li>Optimize for local search ("near me" queries)</li>
                                <li>Ensure fast page load speeds (voice results prioritize speed)</li>
                                <li>Structure content for featured snippets (position zero)</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Social Commerce Integration</h2>
                            <p>
                                Social media platforms are now complete shopping ecosystems. Instagram Shopping, Facebook Marketplace, TikTok Shop, and Pinterest Shopping enable seamless in-app purchases.
                            </p>
                            <p>
                                Social commerce sales are projected to reach $2.9 trillion by 2026. Successful strategies include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Shoppable posts with product tags and direct checkout</li>
                                <li>Live shopping events with exclusive deals</li>
                                <li>User-generated content showcasing products in real-world contexts</li>
                                <li>Influencer partnerships with authentic product recommendations</li>
                                <li>AR try-on features for fashion and beauty products</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">6. Hyper-Personalization at Scale</h2>
                            <p>
                                Generic marketing messages are ignored. Today's consumers expect personalized experiences based on their behavior, preferences, and purchase history.
                            </p>
                            <p>
                                AI-powered personalization engines analyze user data to deliver:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Dynamic website content that adapts to each visitor</li>
                                <li>Personalized email campaigns with individual product recommendations</li>
                                <li>Targeted ads based on browsing behavior and intent signals</li>
                                <li>Custom landing pages for different audience segments</li>
                                <li>Predictive product suggestions before customers even search</li>
                            </ul>
                            <p>
                                Companies implementing advanced personalization see 40% increases in revenue and 50% higher customer retention rates.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">7. Influencer Marketing Evolution</h2>
                            <p>
                                Influencer marketing has matured beyond celebrity endorsements. Micro-influencers (10K-100K followers) deliver 60% higher engagement rates and 22% higher conversion rates than macro-influencers.
                            </p>
                            <p>
                                <strong>Modern influencer strategies:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Partner with niche micro-influencers who align with brand values</li>
                                <li>Focus on long-term relationships over one-off sponsored posts</li>
                                <li>Give influencers creative freedom for authentic content</li>
                                <li>Track performance with unique discount codes and affiliate links</li>
                                <li>Leverage employee advocates as brand ambassadors</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">8. Privacy-First Marketing</h2>
                            <p>
                                With the death of third-party cookies and stricter privacy regulations (GDPR, CCPA), marketers must adapt to a privacy-first world.
                            </p>
                            <p>
                                <strong>Privacy-compliant strategies:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Build first-party data through opt-in email lists and loyalty programs</li>
                                <li>Invest in contextual advertising instead of behavioral targeting</li>
                                <li>Create valuable gated content to collect data voluntarily</li>
                                <li>Use server-side tracking for accurate analytics</li>
                                <li>Implement transparent data practices that build customer trust</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">9. Interactive Content Experiences</h2>
                            <p>
                                Passive content consumption is declining. Interactive content generates 2x more conversions and 4-5x more page views than static content.
                            </p>
                            <p>
                                <strong>High-performing interactive formats:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Quizzes and assessments that provide personalized recommendations</li>
                                <li>Interactive calculators and tools (ROI calculators, configurators)</li>
                                <li>Polls and surveys that engage audiences and gather insights</li>
                                <li>Augmented reality experiences for product visualization</li>
                                <li>Gamified experiences with rewards and achievements</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">10. Marketing Automation & AI Analytics</h2>
                            <p>
                                Manual marketing processes can't scale. Automation platforms handle repetitive tasks while AI analytics provide actionable insights.
                            </p>
                            <p>
                                <strong>Essential automation capabilities:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Email nurture sequences triggered by user behavior</li>
                                <li>Automated social media scheduling and posting</li>
                                <li>Lead scoring and qualification based on engagement signals</li>
                                <li>Dynamic content personalization across channels</li>
                                <li>Predictive analytics for campaign optimization</li>
                                <li>Automated A/B testing and performance reporting</li>
                            </ul>
                            <p>
                                Marketing teams using comprehensive automation report 30% time savings and 50% improvements in campaign ROI.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Implementing Your 2024 Digital Marketing Strategy</h2>
                            <p>
                                Success in digital marketing requires a multi-channel approach combining several of these strategies. Start by:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Auditing your current marketing efforts and identifying gaps</li>
                                <li>Setting clear, measurable goals aligned with business objectives</li>
                                <li>Choosing 3-4 strategies that match your audience and resources</li>
                                <li>Implementing tracking and analytics to measure performance</li>
                                <li>Testing, iterating, and optimizing based on data</li>
                            </ol>

                            <p>
                                Remember: the best digital marketing strategy is one that's consistently executed, measured, and refined. Don't chase every trend—focus on what drives results for your specific business and audience.
                            </p>

                            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4">Need Help Building Your Digital Marketing Strategy?</h3>
                                <p className="text-neutral-300 mb-6">
                                    Our digital marketing experts specialize in creating data-driven strategies that deliver measurable results. From SEO and content marketing to social media and paid advertising, we'll help you dominate your market.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                                >
                                    Get a Free Marketing Audit
                                    <ArrowLeft className="w-4 h-4 rotate-180" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-12 pt-8 border-t border-neutral-800"
                    >
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Digital Marketing", "SEO", "Social Media Marketing", "Content Marketing", "Marketing Strategy", "AI Marketing", "Video Marketing", "Influencer Marketing"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Share */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-8 pt-8 border-t border-neutral-800"
                    >
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
