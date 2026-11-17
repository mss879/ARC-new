"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    TrendingUp,
    Shield,
    Cpu,
    Zap,
    CircleDot,
    HelpCircle,
    BarChart3,
    AlertTriangle,
    Database,
    Globe,
    Layers,
    Search,
    DollarSign,
    Briefcase,
    LineChart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { AnimatedSection, HeroAnimation } from "./animations";
import { FAQItem } from "./faq-accordion";

const tocItems = [
    { id: "executive-summary", label: "Executive Summary: AI Reality vs. Hype" },
    { id: "the-auditing-framework", label: "How Real AI Consultants Approach a Business" },
    { id: "data-readiness", label: "The Data Readiness Problem in Sri Lanka" },
    { id: "industry-use-cases", label: "Industry-Specific AI Use Cases in Sri Lanka" },
    { id: "big-4-vs-agile", label: "The Big 4 vs. Agile AI Engineering Firms" },
    { id: "roi-and-pricing", label: "Pricing the Unpriceable: TCO in LKR" },
    { id: "post-audit-roadmap", label: "The Post-Audit Roadmap: From Strategy to Deployment" },
    { id: "data-privacy", label: "Data Privacy & Compliance in Sri Lanka" },
    { id: "procurement-checklist", label: "The 5-Point Procurement Checklist" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
    {
        q: "What does an AI Consultant actually do?",
        a: "A legitimate AI consultant bridges the gap between commercial strategy and deep technology. Unlike software engineers who only write code, an AI consultant audits your operational workflows, identifies bottlenecks costing you money, determines if AI can mathematically solve those bottlenecks with a positive ROI, and then architects the deployment roadmap. They tell you what NOT to build just as often as what TO build."
    },
    {
        q: "How much does AI Consulting cost in Sri Lanka (2026)?",
        a: "Initial feasibility studies and operational audits typically range from LKR 150,000 to LKR 400,000. If engaging traditional 'Big 4' management consultancies, strategy reports can exceed LKR 1.5 Million before a single line of code is written. Agile engineering consultancies typically embed the consulting cost into the final deployment pipeline, bringing the Total Cost of Ownership (TCO) down significantly."
    },
    {
        q: "Why do most AI implementation projects fail?",
        a: "Two reasons: 'Garbage In, Garbage Out' (GIGO) and 'Solutionism.' First, companies try to train AI on messy, unstructured Excel sheets, resulting in hallucinating AI models. Second, agencies sell off-the-shelf AI tools to solve problems the business doesn't actually have (Solutionism). A true consultant fixes the data infrastructure first."
    },
    {
        q: "Should we hire an in-house Data Scientist instead of a consultant?",
        a: "A senior Data Scientist or Machine Learning Engineer in Colombo commands a salary of LKR 400,000 to LKR 800,000+ per month. However, building an AI pipeline requires more than just a Data Scientist; it requires Cloud Architects, UI Developers, and Prompt Engineers. Engaging an external consultancy provides a fractional, multi-disciplinary team for a fraction of the annual payroll cost."
    },
    {
        q: "What is the difference between a traditional software agency and an AI consultancy?",
        a: "A software agency asks: 'What do you want us to build?' An AI consultancy asks: 'Why are your profit margins shrinking in Q3, and what unstructured data do we have to automate that cost center?' Software agencies execute instructions; AI consultancies dictate strategy based on algorithmic feasibility."
    },
    {
        q: "What industries in Sri Lanka benefit most from AI consulting?",
        a: "Tourism and hospitality benefit from dynamic pricing algorithms and AI concierge systems. Apparel and manufacturing gain from supply chain demand forecasting and quality control vision systems. Financial services leverage fraud detection, credit scoring models, and automated KYC compliance. Healthcare is beginning to adopt diagnostic imaging analysis and patient triage automation. The common thread is that any industry with high-volume, repetitive data processing stands to gain the most from AI automation."
    },
    {
        q: "How long does an AI consulting engagement typically last?",
        a: "A feasibility audit is typically completed in 2 to 4 weeks. A Proof of Concept (PoC) build takes 6 to 12 weeks. Full enterprise deployment—including data pipeline architecture, model training, API integration, UI development, and employee onboarding—can extend to 4 to 8 months depending on scope and data readiness."
    },
    {
        q: "Is my company data safe when using AI APIs like OpenAI or Anthropic?",
        a: "It depends entirely on which API tier the consultant uses. Consumer-grade and free-tier APIs may use your data to train future models. Enterprise-tier APIs (such as OpenAI Enterprise or Anthropic's zero-retention contracts) guarantee that your data is never stored, logged, or used for model training. A competent AI consultant will always specify the data retention policy in writing before any integration begins."
    }
];

export default function AIConsultantsContent() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink font-sans selection:bg-ember/30 selection:text-ink">
            <Navbar />

            {/* ── Hero Section ───────────────────────────── */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden px-4 md:px-8 border-b border-ink/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-paper/40 via-paper to-paper" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "AI Consultants Sri Lanka", href: "/ai-consultants-sri-lanka" },
                        ]}
                    />

                    <HeroAnimation>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-ink tracking-[-0.035em] mt-8 mb-6 leading-[1.1]">
                            The Definitive Guide to AI Consultants in <span className="text-ember-ink">Sri Lanka (2026)</span>
                        </h1>
                        <p className="text-xl text-ink-soft max-w-3xl leading-relaxed font-light mb-8">
                            An authoritative industry report for C-Suite executives and founders navigating the Sri Lankan AI landscape. We deconstruct the difference between AI hype and operational ROI, how to evaluate traditional consultancies versus agile engineering firms, and the exact frameworks required for enterprise deployment.
                        </p>
                    </HeroAnimation>
                </div>
            </section>

            {/* ── Main Content ────────────────────────────── */}
            <article className="px-4 md:px-8 pb-32 pt-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* ── Table of Contents ─────────────────── */}
                    <AnimatedSection className="bg-white/70 border border-ink/10 rounded-2xl p-6 md:p-8 mb-20">
                        <h2 className="text-sm font-medium text-ink-soft mb-6 tracking-[-0.035em] flex items-center gap-2">
                            <CircleDot className="w-4 h-4 text-ember-ink" /> Report Directory
                        </h2>
                        <nav>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 m-0 p-0 list-none">
                                {tocItems.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={`#${item.id}`}
                                            className="group flex items-center gap-3 text-ink-soft hover:text-ink transition-colors text-sm font-medium"
                                        >
                                            <span className="w-5 h-5 rounded bg-transparent border border-ink/10 flex items-center justify-center text-[10px] text-ink-mute group-hover:border-ember group-hover:text-ember-deep transition-colors shrink-0">
                                                {idx + 1}
                                            </span>
                                            <span className="leading-tight">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </AnimatedSection>

                    {/* ── Section: Executive Summary ──────── */}
                    <AnimatedSection id="executive-summary" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-6 tracking-[-0.035em]">
                            1. Executive Summary: AI Reality vs. Corporate Hype
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-ink-soft font-light leading-relaxed">
                            <p>
                                The boardroom discourse in Colombo regarding Artificial Intelligence has reached a fever pitch. Propelled by media narratives surrounding Large Language Models (LLMs) and generative automation, executives are under immense pressure to "deploy AI" to remain competitive. However, this reactionary approach has created a lucrative market for predatory consulting.
                            </p>
                            <p>
                                A concerning trend in the Sri Lankan corporate sector is the deployment of "Solutionism"—buying an off-the-shelf AI chatbot or expensive software license to solve a fundamental operational problem that does not actually exist. <strong>AI is not a product; it is a mathematical capability.</strong> Deploying it without a rigorous operational audit leads to bloated budgets, frustrated employees, and negative ROI.
                            </p>
                            <p>
                                The distinction between a genuine AI consultant and a software vendor is critical. A vendor will present a polished demo of their pre-built tool and convince you it solves your problem. A consultant will spend weeks inside your organization—interviewing department heads, auditing data pipelines, mapping customer journey friction points—before even mentioning a technology stack. The consultant's primary output is not software; it is a <strong>strategic thesis</strong> backed by operational telemetry that mathematically justifies whether AI intervention will yield a positive return within 12 to 18 months.
                            </p>
                            <p>
                                In Sri Lanka specifically, this distinction matters because the local market is flooded with <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">software agencies</Link> rebranding themselves as "AI companies" after adding a simple ChatGPT API wrapper to their existing products. True AI consulting requires deep expertise in Natural Language Processing (NLP), Machine Learning Operations (MLOps), Vector Database architecture, and—critically—an understanding of the specific regulatory and data infrastructure challenges unique to the Sri Lankan corporate environment.
                            </p>
                            
                            <div className="my-10 bg-transparent border-l-4 border-ember p-6 rounded-r-xl">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-ember-deep shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold text-ink mb-2 m-0">The Role of the Consultant</h4>
                                        <p className="text-ink-soft text-sm leading-relaxed m-0">
                                            The primary duty of a legitimate AI consultant is risk mitigation. Before a single line of code is written, the consultant must audit the company's data infrastructure, identify high-friction workflows, and prove—mathematically—that an algorithmic intervention will reduce Customer Acquisition Cost (CAC) or increase operational yield. Often, a good consultant will advise a company that they are <em>not ready</em> for AI. That honesty is the hallmark of a trustworthy engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Auditing Framework ─────── */}
                    <AnimatedSection id="the-auditing-framework" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8 flex items-center gap-3 tracking-[-0.035em]">
                            <Search className="w-8 h-8 text-ember-ink shrink-0" />
                            2. How Real AI Consultants Approach a Business
                        </h2>
                        <p className="text-ink-soft mb-8 font-light leading-relaxed text-lg">
                            If a consulting firm immediately attempts to sell you an AI software license without first understanding your P&L statement, they are software vendors, not strategists. A rigorous AI consulting engagement follows a strict, phased framework.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    phase: "Phase 1: Workflow Deconstruction",
                                    desc: "The consultant shadows key operational departments (HR, Customer Success, Finance) to identify repetitive, high-volume tasks that require human cognitive load but yield low margins. They map the exact cost of this human capital in LKR per hour."
                                },
                                {
                                    phase: "Phase 2: Algorithmic Feasibility",
                                    desc: "Not every problem can be solved by an LLM. The consultant assesses whether the identified bottleneck can be automated deterministically (via standard code) or probabilistically (via AI models). If standard code works, AI should not be forced into the equation."
                                },
                                {
                                    phase: "Phase 3: The 'Build vs. Buy' Analysis",
                                    desc: "Does the company need a custom-trained model securely hosted on their own servers to protect IP? Or can they safely leverage API calls to commercial models like OpenAI or Anthropic? The consultant dictates the security architecture."
                                },
                                {
                                    phase: "Phase 4: Pilot Deployment & Telemetry",
                                    desc: "A true consultancy deploys a hyper-focused 'Proof of Concept' (PoC) to a single department. They measure the exact time saved and error rate reduction before authorizing a company-wide rollout."
                                }
                            ].map((step, idx) => (
                                <div key={idx} className="cut-card [--cut:14px] bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-ember opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-xl font-bold text-ink mb-2 ml-4">{step.phase}</h3>
                                    <p className="text-ink-soft text-sm leading-relaxed m-0 ml-4">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Data Readiness ─────────── */}
                    <AnimatedSection id="data-readiness" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-6 flex items-center gap-3 tracking-[-0.035em]">
                            <Database className="w-8 h-8 text-ember-ink shrink-0" />
                            3. The Data Readiness Problem in Sri Lanka
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-ink-soft font-light leading-relaxed mb-8">
                            <p>
                                The single greatest barrier to AI adoption in Sri Lanka is not budget; it is data infrastructure. An AI model, regardless of its sophistication, is entirely dependent on the quality of the data it ingests. This principle is known in computer science as <em>Garbage In, Garbage Out (GIGO)</em>.
                            </p>
                            <p>
                                Many established local enterprises operate with deeply fragmented data. Customer records are trapped in legacy ERP systems, standard operating procedures exist only as unindexed PDF files, and financial forecasting is scattered across localized Excel spreadsheets. 
                            </p>
                            <p>
                                Before deploying a custom AI agent to "automate customer service" or "predict inventory," an expert consultant must first architect a <strong>Vector Database</strong> pipeline. This process involves extracting, cleaning, and structuring the company's legacy data into a format that a Large Language Model can actually comprehend and retrieve via Semantic Search (RAG architecture).
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Industry Use Cases ─────── */}
                    <AnimatedSection id="industry-use-cases" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8 flex items-center gap-3 tracking-[-0.035em]">
                            <LineChart className="w-8 h-8 text-ember-ink shrink-0" />
                            4. Industry-Specific AI Use Cases in Sri Lanka
                        </h2>
                        <p className="text-ink-soft mb-8 font-light leading-relaxed text-lg">
                            AI consulting is not a generic service. The value of a consultant is measured by their ability to identify the precise operational leverage point within a specific industry vertical. Here is how AI is being deployed across key sectors of the Sri Lankan economy in 2026.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    industry: "Tourism & Hospitality",
                                    problem: "Revenue leakage from static room pricing and slow guest response times during peak season.",
                                    solution: "Dynamic pricing algorithms that adjust rates in real-time based on demand signals, competitor pricing, and seasonal forecasting. AI concierge chatbots trained on hotel-specific knowledge bases (menus, excursion details, local transport) to handle guest queries 24/7 in multiple languages including Sinhala and Tamil.",
                                    metric: "Hotels deploying dynamic pricing typically see 12-18% RevPAR (Revenue Per Available Room) increases within the first quarter."
                                },
                                {
                                    industry: "Apparel & Manufacturing",
                                    problem: "Inaccurate demand forecasting leading to overproduction waste and missed delivery deadlines for international buyers.",
                                    solution: "Machine Learning models trained on historical order data, seasonal trends, and raw material lead times to predict demand with significantly higher accuracy than manual Excel-based forecasting. Computer Vision systems for automated quality control on production lines, flagging defects before shipment.",
                                    metric: "Manufacturers report 20-30% reduction in fabric waste and 15% improvement in on-time delivery rates."
                                },
                                {
                                    industry: "Financial Services & Banking",
                                    problem: "Manual KYC (Know Your Customer) compliance processing consuming thousands of human hours annually, plus rising fraud sophistication.",
                                    solution: "Automated document verification using OCR (Optical Character Recognition) and NLP to extract and validate customer identity documents. Real-time transaction monitoring using anomaly detection algorithms that flag suspicious patterns faster than rule-based legacy systems.",
                                    metric: "Banks implementing AI-driven KYC report 60-70% reduction in manual processing time per application."
                                },
                                {
                                    industry: "Healthcare & Pharmaceuticals",
                                    problem: "Diagnostic bottlenecks in radiology departments and inefficient patient triage in overcrowded OPDs.",
                                    solution: "AI-assisted diagnostic imaging analysis that pre-screens X-rays and CT scans, highlighting areas of concern for radiologists to review. NLP-powered patient triage systems that analyze symptoms described in natural language and route patients to the appropriate specialist, reducing wait times.",
                                    metric: "Early adopters report 40% faster radiology report turnaround and measurably improved triage accuracy."
                                }
                            ].map((useCase, idx) => (
                                <div key={idx} className="cut-card [--cut:14px] relative bg-transparent [--cut-line:rgba(27,26,23,0.1)] p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-ink">{useCase.industry}</h3>
                                    <div>
                                        <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">The Problem</div>
                                        <p className="text-sm text-ink-soft leading-relaxed m-0">{useCase.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">The AI Solution</div>
                                        <p className="text-sm text-ink-soft leading-relaxed m-0">{useCase.solution}</p>
                                    </div>
                                    <div className="bg-white/70 border border-ink/10 rounded-lg p-3">
                                        <div className="text-xs font-bold text-ember-deep uppercase tracking-wider mb-1">Measured Impact</div>
                                        <p className="text-sm text-ink-soft leading-relaxed m-0 italic">{useCase.metric}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Big 4 vs Agile ─────────── */}
                    <AnimatedSection id="big-4-vs-agile" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8 flex items-center gap-3 tracking-[-0.035em]">
                            <Briefcase className="w-8 h-8 text-ember-ink shrink-0" />
                            5. The Competitor Landscape: Big 4 vs. Agile Firms
                        </h2>
                        <p className="text-ink-soft mb-8 font-light leading-relaxed text-lg">
                            When procuring AI consulting services in Colombo, executives generally choose between two distinct archetypes. Understanding their operational differences is vital to controlling your capital expenditure.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* The Big 4 */}
                            <div className="cut-card [--cut:18px] relative [--cut-line:rgba(27,26,23,0.1)] p-8 bg-white/70">
                                <h3 className="text-2xl font-bold text-ink mb-4">The Legacy "Big 4" Consultancies</h3>
                                <p className="text-sm text-ink-soft mb-6 leading-relaxed">
                                    Traditional management consulting firms (e.g., KPMG, EY, PwC) have aggressively expanded into the "Digital Transformation" space. They are highly adept at corporate governance and board-level risk compliance.
                                </p>
                                <div className="space-y-4">
                                    <div className="cut-card [--cut:12px] relative bg-transparent p-4 [--cut-line:rgba(27,26,23,0.1)]">
                                        <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">The Drawback</div>
                                        <div className="text-sm text-ink-soft"><strong>The Output is Often Just a PDF.</strong> They excel at producing 100-page strategic roadmaps and feasibility studies. However, they rarely possess deep, in-house software engineering talent. Once the massive consulting fee is paid, they often outsource the actual coding to a third-party agency, drastically inflating the project timeline and cost.</div>
                                    </div>
                                </div>
                            </div>

                            {/* Agile Engineering */}
                            <div className="cut-card [--cut:18px] relative [--cut-line:rgba(255,73,37,0.3)] p-8 bg-gradient-to-br from-ember/5 to-transparent">
                                <h3 className="text-2xl font-bold text-ink mb-4">Agile AI Engineering Firms</h3>
                                <p className="text-sm text-ink-soft mb-6 leading-relaxed">
                                    A newer archetype of highly specialized boutiques that merge high-level C-suite strategy with rigorous, in-house software engineering. They consult on the strategy, and then immediately build the architecture.
                                </p>
                                <div className="space-y-4">
                                    <div className="cut-card [--cut:12px] relative bg-transparent p-4 [--cut-line:rgba(255,73,37,0.3)]">
                                        <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">The Advantage</div>
                                        <div className="text-sm text-ink-soft"><strong>Strategy Married to Execution.</strong> Firms fitting this archetype (such as ARC AI) do not hand off a strategy document to a separate coding team. The consultants architecting the workflow are directly managing the engineers deploying the Python and Next.js code. This eliminates the "translation gap," ensures tight security compliance, and vastly accelerates deployment.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Pricing & TCO ────────────── */}
                    <AnimatedSection id="roi-and-pricing" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8 flex items-center gap-3 tracking-[-0.035em]">
                            <DollarSign className="w-8 h-8 text-ember-ink shrink-0" />
                            5. Pricing the Unpriceable: TCO in LKR
                        </h2>
                        <p className="text-ink-soft mb-8 font-light leading-relaxed text-lg">
                            AI consulting operates differently than standard web design procurement. Because the output is intellectual property and operational efficiency rather than a static website, pricing structures vary. Here is the realistic benchmark for the Sri Lankan market.
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 rounded-xl border border-ink/10 shadow-xl mb-10">
                            <table className="w-full text-sm border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-ink/10 bg-white/70">
                                        <th className="p-5 text-left text-ink font-bold uppercase tracking-wider text-xs w-1/4">Engagement Type</th>
                                        <th className="p-5 text-left text-ink font-bold uppercase tracking-wider text-xs w-1/4">Estimated Cost (LKR)</th>
                                        <th className="p-5 text-left text-ink font-bold uppercase tracking-wider text-xs w-1/2">Deliverables & Reality</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-ink/10 bg-transparent">
                                    <tr className="hover:bg-white transition-colors">
                                        <td className="p-5 font-bold text-ink">The Feasibility Audit<br/><span className="text-xs font-normal text-ink-mute">Fixed Fee</span></td>
                                        <td className="p-5 font-mono text-green-700 font-bold">LKR 150,000 – 400,000</td>
                                        <td className="p-5 text-ink-soft text-sm leading-relaxed">
                                            A 2 to 4-week deep dive into company data infrastructure and workflows. Yields a technical roadmap detailing exactly where AI will save money and what APIs/models are required.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white transition-colors">
                                        <td className="p-5 font-bold text-ink">Proof of Concept (PoC)<br/><span className="text-xs font-normal text-ink-mute">Prototype Build</span></td>
                                        <td className="p-5 font-mono text-green-700 font-bold">LKR 350,000 – 800,000</td>
                                        <td className="p-5 text-ink-soft text-sm leading-relaxed">
                                            Building a functional, internal AI agent (e.g., an LLM trained on the company's HR handbook) to test latency, accuracy, and employee adoption before enterprise rollout.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white transition-colors bg-ember/5">
                                        <td className="p-5 font-bold text-ink border-l-2 border-ember">Full Pipeline Deployment<br/><span className="text-xs font-normal text-ember-deep">Enterprise Scale</span></td>
                                        <td className="p-5 font-mono text-ink font-bold">LKR 1.5M – 5M+</td>
                                        <td className="p-5 text-ink-soft text-sm leading-relaxed">
                                            A massive undertaking involving custom Vector Databases (RAG), secure OpenAI/Anthropic API integrations, automated trigger workflows, and comprehensive employee training.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Post-Audit Roadmap ────── */}
                    <AnimatedSection id="post-audit-roadmap" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8 flex items-center gap-3 tracking-[-0.035em]">
                            <TrendingUp className="w-8 h-8 text-ember-ink shrink-0" />
                            7. The Post-Audit Roadmap: From Strategy to Deployment
                        </h2>
                        <p className="text-ink-soft mb-8 font-light leading-relaxed text-lg">
                            After the feasibility audit is complete, the transition from strategy document to live AI system is where most consulting engagements fail. A rigorous post-audit deployment follows a strict, gated process that prevents scope creep and budget overrun.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    stage: "Gate 1: Data Pipeline Architecture",
                                    timeline: "Weeks 1-3",
                                    desc: "The engineering team builds the foundational data infrastructure. This involves connecting to existing data sources (CRMs, ERPs, internal databases), building ETL (Extract, Transform, Load) pipelines to clean and normalize the data, and deploying a Vector Database (such as Pinecone, Weaviate, or pgvector) to store embeddings for semantic retrieval. This stage is entirely invisible to end users but is the most critical technical foundation."
                                },
                                {
                                    stage: "Gate 2: Model Selection & Fine-Tuning",
                                    timeline: "Weeks 3-5",
                                    desc: "The consultant selects the appropriate AI model based on the use case. For conversational agents, this may involve GPT-4o or Claude via enterprise API. For classification tasks, a smaller, cheaper open-source model (Llama, Mistral) fine-tuned on company-specific data may be more cost-effective. The key decision is balancing accuracy, latency, and monthly token costs (OpEx)."
                                },
                                {
                                    stage: "Gate 3: Controlled Pilot (Single Department)",
                                    timeline: "Weeks 5-8",
                                    desc: "The AI system is deployed to a single department (typically Customer Support or HR) with strict guardrails. Every AI response is logged, accuracy is measured against human baselines, and employee feedback is collected systematically. The system is NOT released company-wide until pilot metrics confirm a measurable improvement."
                                },
                                {
                                    stage: "Gate 4: Enterprise Rollout & Training",
                                    timeline: "Weeks 8-12+",
                                    desc: "Once pilot data validates the system, it is scaled across the organization. This stage includes comprehensive employee onboarding workshops, integration with existing workflow tools (Slack, Teams, internal dashboards), and establishing monitoring dashboards that track AI accuracy, usage volume, and monthly API costs in real-time."
                                }
                            ].map((gate, idx) => (
                                <div key={idx} className="cut-card [--cut:14px] bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-6 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-ember opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <div className="ml-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-ink">{gate.stage}</h3>
                                            <span className="text-xs font-mono text-ember-deep bg-ember/10 px-3 py-1 rounded-full">{gate.timeline}</span>
                                        </div>
                                        <p className="text-ink-soft text-sm leading-relaxed m-0">{gate.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Data Privacy ──────────── */}
                    <AnimatedSection id="data-privacy" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-6 flex items-center gap-3 tracking-[-0.035em]">
                            <Shield className="w-8 h-8 text-ember-ink shrink-0" />
                            8. Data Privacy & Compliance in Sri Lanka
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-ink-soft font-light leading-relaxed mb-8">
                            <p>
                                One of the most overlooked aspects of AI deployment is data sovereignty and regulatory compliance. Sri Lanka enacted the <strong>Personal Data Protection Act No. 9 of 2022</strong>, which imposes strict obligations on how organisations collect, process, and store personal data. Any AI consultant operating in Sri Lanka must architect systems that comply with these regulations or expose their client to significant legal liability.
                            </p>
                            <p>
                                When an AI model processes customer data — whether it is analysing purchase history, parsing support tickets, or scoring credit applications — that data is being transmitted to external servers. If the consultant uses consumer-grade API endpoints, that data may be stored, logged, and potentially used to train future public models. This represents a catastrophic data breach from both a legal and competitive standpoint.
                            </p>
                            <p>
                                A competent AI consultant will implement a three-tier data protection architecture:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    tier: "Tier 1: Zero-Retention APIs",
                                    desc: "All API calls to external LLM providers (OpenAI, Anthropic, Google) must use enterprise-tier endpoints that contractually guarantee zero data retention. No prompts, no completions, no metadata is stored on the provider's servers."
                                },
                                {
                                    tier: "Tier 2: On-Premise Vector Storage",
                                    desc: "Sensitive corporate data (financial records, employee information, customer PII) should be embedded and stored in self-hosted Vector Databases within Sri Lankan or Singapore-based data centres, never on shared public cloud instances."
                                },
                                {
                                    tier: "Tier 3: Access Control & Audit Logging",
                                    desc: "Every AI interaction must be logged with timestamps, user IDs, and data categories accessed. Role-based access control (RBAC) ensures that only authorised personnel can query sensitive data through the AI system."
                                }
                            ].map((tier, idx) => (
                                <div key={idx} className="cut-card [--cut:14px] relative bg-transparent [--cut-line:rgba(27,26,23,0.1)] p-6">
                                    <h3 className="text-lg font-bold text-ink mb-3">{tier.tier}</h3>
                                    <p className="text-sm text-ink-soft leading-relaxed m-0">{tier.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Procurement Framework ────── */}
                    <AnimatedSection id="procurement-checklist" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8 flex items-center gap-3 tracking-[-0.035em]">
                            <Cpu className="w-8 h-8 text-ember-ink shrink-0" />
                            9. The 5-Point Procurement Checklist
                        </h2>
                        <p className="text-ink-soft mb-8 font-light leading-relaxed text-lg">
                            Protect your corporate data and capital. Do not engage an AI consultant in Sri Lanka without establishing these five critical safeguards during the RFP process.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    num: "01",
                                    title: "The Data Sovereignty Clause",
                                    desc: "Ask the consultant exactly where the proprietary data will be processed. Will it be sent to public APIs where it could be used to train future public models, or will they utilize zero-retention enterprise APIs and secure local Vector databases?"
                                },
                                {
                                    num: "02",
                                    title: "The 'Not AI' Test",
                                    desc: "A good consultant will frequently attempt to talk you out of using AI. Ask them: 'Could this problem be solved with standard deterministic code for cheaper?' If they blindly push an AI solution for a simple database query, they lack integrity."
                                },
                                {
                                    num: "03",
                                    title: "Hallucination Mitigation Strategy",
                                    desc: "LLMs invent facts (hallucinations). Demand to know the consultant's architectural strategy (such as strict RAG framing and prompt engineering bounds) to ensure the AI does not provide factually incorrect data to your clients."
                                },
                                {
                                    num: "04",
                                    title: "Execution Capability",
                                    desc: "Are they just providing a PDF report, or do they have the in-house React/Python engineers to actually build the system they are recommending? Strategy without execution creates massive friction."
                                },
                                {
                                    num: "05",
                                    title: "The Token Cost Calculation",
                                    desc: "AI relies on 'tokens' (the cost of processing words via APIs). The consultant must provide a mathematical forecast of your monthly recurring API costs (OpEx) at scale, before you commit to the build."
                                }
                            ].map((point, idx) => (
                                <div key={idx} className="cut-card [--cut:14px] relative flex gap-6 p-6 hover:bg-white transition-colors hover:[--cut-line:rgba(27,26,23,0.3)]">
                                    <div className="text-4xl font-black text-ink/20 shrink-0">{point.num}</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-ink mb-2">{point.title}</h4>
                                        <p className="text-ink-soft text-sm leading-relaxed m-0">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: FAQ ──────────────────────── */}
                    <AnimatedSection id="faq" className="scroll-mt-32 mb-20">
                        <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8 flex items-center gap-3 border-t border-ink/10 pt-16 tracking-[-0.035em]">
                            <HelpCircle className="w-8 h-8 text-ember-ink shrink-0" />
                            7. Frequently Asked Questions
                        </h2>
                        <div className="cut-card [--cut:14px] relative bg-transparent [--cut-line:rgba(27,26,23,0.1)] p-6 md:p-8">
                            {faqs.map((faq, idx) => (
                                <FAQItem key={idx} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Conclusion / CTA ──────────────────────── */}
                    <AnimatedSection className="mt-20 pt-16 pb-16 border-t border-ink/10">
                        <div className="cut-card [--cut:18px] bg-gradient-to-br from-ember/20 via-paper to-paper [--cut-line:rgba(255,73,37,0.3)] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                            <h2 className="text-3xl md:text-4xl font-medium text-ink mb-6 relative z-10 tracking-[-0.035em]">
                                Execute Strategy. <br className="hidden md:block" /> Engineer Reality.
                            </h2>
                            <p className="text-lg text-ink-soft mb-8 max-w-2xl mx-auto relative z-10 font-light">
                                If you require an agile consulting partner capable of not only auditing your data readiness but immediately deploying secure, enterprise-grade AI architecture, let's architect your digital superiority.
                            </p>
                            <Link
                                href="/contact"
                                className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-8 py-4 bg-ember text-ink font-bold hover:bg-[#FF5C3A] transition-all relative z-10 hover:-translate-y-1"
                            >
                                Schedule a Feasibility Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </AnimatedSection>

                </div>
            </article>

            <Footer />
        </div>
    );
}
