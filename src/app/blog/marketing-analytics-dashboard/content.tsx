"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, BarChart3, TrendingUp, Target } from "lucide-react";
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
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80"
                        alt="Marketing Analytics Dashboard"
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
                            Analytics
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Building the Ultimate Marketing Analytics Dashboard
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Aug 12, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
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
                                Data-driven marketing requires comprehensive dashboards that surface actionable insights at a glance. Learn how to build analytics dashboards that track the metrics that matter, enable faster decision-making, and drive measurable business growth.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Marketing Dashboards Matter</h2>
                            <p>
                                Marketing teams drowning in data from Google Analytics, social platforms, email tools, CRM, and advertising platforms need centralized dashboards that consolidate metrics, identify trends, and enable rapid optimization. The right dashboard transforms raw data into strategic insights.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-6 my-8">
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Marketing Dashboard Benefits
                                </h4>
                                <ul className="space-y-2 text-neutral-200">
                                    <li>• 5-10 hours saved weekly on manual reporting</li>
                                    <li>• 32% faster decision-making with real-time data</li>
                                    <li>• 24% increase in campaign ROI from data-driven optimization</li>
                                    <li>• Improved team alignment around key metrics</li>
                                    <li>• Early identification of underperforming campaigns</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Essential Metrics by Dashboard Type</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Executive Marketing Dashboard</h3>
                            <p><strong>Audience:</strong> C-suite, leadership team</p>
                            <p><strong>Focus:</strong> High-level business impact, ROI, strategic KPIs</p>
                            <p><strong>Key metrics:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Marketing ROI:</strong> Revenue generated / Marketing spend</li>
                                <li><strong>Customer Acquisition Cost (CAC):</strong> Total marketing spend / New customers</li>
                                <li><strong>Customer Lifetime Value (CLV):</strong> Average revenue per customer over lifetime</li>
                                <li><strong>CLV:CAC Ratio:</strong> Should be 3:1 or higher</li>
                                <li><strong>Marketing Qualified Leads (MQLs):</strong> Leads ready for sales</li>
                                <li><strong>Conversion Rate:</strong> % of visitors who convert</li>
                                <li><strong>Revenue by Channel:</strong> Attribution across channels</li>
                                <li><strong>Pipeline Value:</strong> Total value of opportunities in sales pipeline</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Website Performance Dashboard</h3>
                            <p><strong>Audience:</strong> Marketing managers, content teams</p>
                            <p><strong>Focus:</strong> Traffic, engagement, conversion optimization</p>
                            <p><strong>Key metrics:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Sessions:</strong> Total website visits</li>
                                <li><strong>Users:</strong> Unique visitors</li>
                                <li><strong>Pageviews:</strong> Total pages viewed</li>
                                <li><strong>Bounce Rate:</strong> % of single-page sessions</li>
                                <li><strong>Average Session Duration:</strong> Time on site</li>
                                <li><strong>Pages per Session:</strong> Engagement depth</li>
                                <li><strong>Traffic Sources:</strong> Organic, direct, social, referral, paid</li>
                                <li><strong>Top Pages:</strong> Most visited content</li>
                                <li><strong>Conversion Rate by Page:</strong> Goal completion rates</li>
                                <li><strong>Page Load Speed:</strong> Core Web Vitals</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Paid Advertising Dashboard</h3>
                            <p><strong>Audience:</strong> PPC managers, performance marketers</p>
                            <p><strong>Focus:</strong> Ad performance, budget efficiency, ROI</p>
                            <p><strong>Key metrics:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Ad Spend:</strong> Total budget across channels</li>
                                <li><strong>Impressions:</strong> Total ad views</li>
                                <li><strong>Clicks:</strong> Total ad clicks</li>
                                <li><strong>Click-Through Rate (CTR):</strong> Clicks / Impressions</li>
                                <li><strong>Cost Per Click (CPC):</strong> Spend / Clicks</li>
                                <li><strong>Conversions:</strong> Goal completions</li>
                                <li><strong>Cost Per Acquisition (CPA):</strong> Spend / Conversions</li>
                                <li><strong>Return on Ad Spend (ROAS):</strong> Revenue / Ad Spend</li>
                                <li><strong>Quality Score:</strong> Google Ads relevance metric</li>
                                <li><strong>Budget Pacing:</strong> Spend rate vs. budget</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Social Media Dashboard</h3>
                            <p><strong>Audience:</strong> Social media managers, content creators</p>
                            <p><strong>Focus:</strong> Engagement, growth, content performance</p>
                            <p><strong>Key metrics:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Followers:</strong> Total audience size per platform</li>
                                <li><strong>Follower Growth Rate:</strong> % increase over time</li>
                                <li><strong>Reach:</strong> Unique users who saw content</li>
                                <li><strong>Impressions:</strong> Total content views</li>
                                <li><strong>Engagement Rate:</strong> (Likes + Comments + Shares) / Reach</li>
                                <li><strong>Top Posts:</strong> Best performing content</li>
                                <li><strong>Click-Through Rate:</strong> Link clicks / Impressions</li>
                                <li><strong>Share of Voice:</strong> Brand mentions vs. competitors</li>
                                <li><strong>Sentiment Analysis:</strong> Positive/negative mentions</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Email Marketing Dashboard</h3>
                            <p><strong>Audience:</strong> Email marketers, automation specialists</p>
                            <p><strong>Focus:</strong> Deliverability, engagement, conversion</p>
                            <p><strong>Key metrics:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>List Size:</strong> Total subscribers</li>
                                <li><strong>List Growth Rate:</strong> New subscribers - unsubscribes</li>
                                <li><strong>Deliverability Rate:</strong> % emails reaching inbox</li>
                                <li><strong>Open Rate:</strong> % recipients who opened</li>
                                <li><strong>Click-Through Rate:</strong> % who clicked links</li>
                                <li><strong>Click-to-Open Rate:</strong> Clicks / Opens (content relevance)</li>
                                <li><strong>Conversion Rate:</strong> % who completed goal</li>
                                <li><strong>Unsubscribe Rate:</strong> % who opted out</li>
                                <li><strong>Revenue Per Email:</strong> Total revenue / Emails sent</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">SEO Performance Dashboard</h3>
                            <p><strong>Audience:</strong> SEO managers, content strategists</p>
                            <p><strong>Focus:</strong> Rankings, organic traffic, technical health</p>
                            <p><strong>Key metrics:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Organic Traffic:</strong> Visitors from search engines</li>
                                <li><strong>Keyword Rankings:</strong> Position for target keywords</li>
                                <li><strong>Click-Through Rate:</strong> Clicks / Impressions in SERPs</li>
                                <li><strong>Domain Authority:</strong> SEO strength score</li>
                                <li><strong>Backlinks:</strong> Total and quality of referring domains</li>
                                <li><strong>Pages Indexed:</strong> Pages in search engine index</li>
                                <li><strong>Core Web Vitals:</strong> Page experience metrics</li>
                                <li><strong>Crawl Errors:</strong> Technical issues blocking indexing</li>
                                <li><strong>Organic Conversion Rate:</strong> Goals from organic traffic</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Dashboard Design Best Practices</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Visual Hierarchy</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Top section:</strong> Most important KPIs (hero metrics)</li>
                                <li><strong>Middle section:</strong> Supporting metrics and trends</li>
                                <li><strong>Bottom section:</strong> Detailed breakdowns and tables</li>
                                <li><strong>Size = Importance:</strong> Larger visualizations for critical metrics</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Data Visualization Guidelines</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Line charts:</strong> Trends over time (traffic, revenue)</li>
                                <li><strong>Bar charts:</strong> Comparisons (channel performance, top pages)</li>
                                <li><strong>Pie charts:</strong> Composition (traffic sources, device types)</li>
                                <li><strong>Gauges/scorecards:</strong> Single KPIs vs. goals</li>
                                <li><strong>Heatmaps:</strong> Engagement patterns (clicks, scroll depth)</li>
                                <li><strong>Tables:</strong> Detailed data, rankings, lists</li>
                            </ul>

                            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-400/30 rounded-xl p-6 my-8">
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    Dashboard Design Principles
                                </h4>
                                <ul className="space-y-2 text-neutral-200">
                                    <li>• <strong>Simplicity:</strong> Focus on actionable metrics only</li>
                                    <li>• <strong>Context:</strong> Include comparisons (vs. last month, vs. goal)</li>
                                    <li>• <strong>Color coding:</strong> Red = bad, Green = good, Yellow = caution</li>
                                    <li>• <strong>Real-time updates:</strong> Automate data refreshes</li>
                                    <li>• <strong>Mobile-responsive:</strong> Accessible on any device</li>
                                    <li>• <strong>Drill-down capability:</strong> Click metrics for details</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Top Dashboard Tools</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Google Data Studio (Looker Studio)</h3>
                            <p><strong>Best for:</strong> Google ecosystem integration, beginners</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pros:</strong> Free, easy to use, native Google integrations</li>
                                <li><strong>Cons:</strong> Limited customization, slower with large datasets</li>
                                <li><strong>Pricing:</strong> Free</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Tableau</h3>
                            <p><strong>Best for:</strong> Enterprise, advanced visualizations</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pros:</strong> Powerful, beautiful visualizations, handles big data</li>
                                <li><strong>Cons:</strong> Expensive, steep learning curve</li>
                                <li><strong>Pricing:</strong> From $70/user/month</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Power BI (Microsoft)</h3>
                            <p><strong>Best for:</strong> Microsoft ecosystem, mid-market companies</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pros:</strong> Affordable, integrates with Microsoft tools, AI insights</li>
                                <li><strong>Cons:</strong> Windows-focused, less intuitive than competitors</li>
                                <li><strong>Pricing:</strong> From $10/user/month</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Klipfolio</h3>
                            <p><strong>Best for:</strong> Marketing-specific dashboards, real-time data</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pros:</strong> Marketing-focused, 500+ pre-built integrations</li>
                                <li><strong>Cons:</strong> Can be complex for beginners</li>
                                <li><strong>Pricing:</strong> From $49/month</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Databox</h3>
                            <p><strong>Best for:</strong> Small-to-mid businesses, quick setup</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pros:</strong> Easy setup, mobile app, goal tracking</li>
                                <li><strong>Cons:</strong> Limited customization options</li>
                                <li><strong>Pricing:</strong> Free tier; Pro from $72/month</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Domo</h3>
                            <p><strong>Best for:</strong> Enterprise, all-in-one business intelligence</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pros:</strong> Comprehensive, AI-powered insights, collaboration</li>
                                <li><strong>Cons:</strong> Expensive, complex implementation</li>
                                <li><strong>Pricing:</strong> Custom enterprise pricing</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Building Your First Dashboard</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Step 1: Define Objectives</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Who will use this dashboard? (Role, seniority)</li>
                                <li>What decisions need to be made from this data?</li>
                                <li>What are the 3-5 most critical metrics?</li>
                                <li>How frequently should data update? (Real-time, daily, weekly)</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Step 2: Connect Data Sources</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Google Analytics (website traffic)</li>
                                <li>Google Ads, Facebook Ads (paid advertising)</li>
                                <li>HubSpot, Salesforce (CRM data)</li>
                                <li>Mailchimp, ActiveCampaign (email marketing)</li>
                                <li>Social media platforms (engagement)</li>
                                <li>Google Search Console (SEO data)</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Step 3: Select Key Metrics</h3>
                            <p>Follow the 5-3-1 rule:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>1 North Star Metric:</strong> Primary business goal (revenue, MQLs)</li>
                                <li><strong>3 Supporting Metrics:</strong> Drivers of north star (traffic, conversion rate, AOV)</li>
                                <li><strong>5 Operational Metrics:</strong> Day-to-day indicators (CTR, bounce rate, email open rate)</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Step 4: Design Layout</h3>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Place north star metric prominently at top</li>
                                <li>Add supporting metrics in second row</li>
                                <li>Include trend charts showing progress over time</li>
                                <li>Add comparison context (vs. last period, vs. goal)</li>
                                <li>Include detailed tables/breakdowns at bottom</li>
                            </ol>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Step 5: Set Up Automation</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Automate data refreshes (hourly, daily, weekly)</li>
                                <li>Schedule email reports to stakeholders</li>
                                <li>Set up alerts for significant changes (traffic drops, conversions spike)</li>
                                <li>Enable mobile access for on-the-go monitoring</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Dashboard Mistakes to Avoid</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Vanity metrics:</strong> Tracking likes/followers without business impact</li>
                                <li><strong>Information overload:</strong> Too many metrics causing analysis paralysis</li>
                                <li><strong>No context:</strong> Metrics without comparisons or benchmarks</li>
                                <li><strong>Outdated data:</strong> Manual updates instead of automation</li>
                                <li><strong>Poor visualization:</strong> Wrong chart types, confusing layouts</li>
                                <li><strong>No actionability:</strong> Data without clear next steps</li>
                                <li><strong>One-size-fits-all:</strong> Same dashboard for all stakeholders</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
                            <p>
                                Effective marketing dashboards transform scattered data into strategic insights, enabling faster decision-making and better campaign performance. Start with a simple executive dashboard tracking your north star metrics, then expand to specialized dashboards for channels and tactics. Remember: the best dashboard is the one that gets used daily to drive action and results.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <BarChart3 className="w-6 h-6" />
                                    Build Your Custom Marketing Dashboard
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Our analytics experts will design and implement custom marketing dashboards tailored to your business, connecting all data sources, tracking the metrics that matter, and enabling data-driven growth.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Get Dashboard Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Marketing Analytics", "Data Visualization", "KPIs", "Business Intelligence", "Marketing Dashboard", "Google Analytics", "Data-Driven Marketing", "Reporting"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/video-marketing-2025" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">Video Marketing 2025</div>
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
