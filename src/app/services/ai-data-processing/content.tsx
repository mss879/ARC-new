"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, FileText, ScanLine, Database, Zap, Lock, Eye } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const letterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.15 },
    },
};

const letterVariant: Variants = {
    hidden: { y: "0.55em", opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function AIDataProcessingContent() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink selection:bg-ember/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="AI Data Processing overview">
                <div className="absolute inset-0 bg-gradient-to-b from-paper via-ember/10 to-paper z-0" aria-hidden="true" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none hidden" />
                
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.035em]">
                            {["INTELLIGENT", "DATA PARSING"].map((word, i) => (
                                <span key={i} className="block mb-2">
                                    {word.split("").map((char, j) => (
                                        <motion.span
                                            key={j}
                                            className="inline-block"
                                            variants={letterVariant}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-xl md:text-2xl text-ink-soft max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
                    >
                        Stop typing data into spreadsheets. Let Vision AI read your PDFs, receipts, and emails, and extract perfect structured data instantly.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] w-full sm:w-auto px-8 py-4 bg-ember hover:bg-ember text-ink font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <ScanLine className="w-5 h-5" />
                            Automate My Data Entry
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-24 px-4 md:px-8 bg-transparent relative border-t border-ink/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-ember-deep font-bold tracking-widest text-sm uppercase mb-4 block">The "Flow" Tier Data Engine</span>
                        <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-[-0.035em]">
                            Turn messy documents into clean JSON.
                        </h2>
                        <p className="text-ink-soft text-lg leading-relaxed">
                            Traditional OCR is rigid—if an invoice format changes slightly, the system breaks. Our AI reads documents like a human, understanding context, so it perfectly extracts the Subtotal even if the vendor moved it to the top of the page.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Eye className="w-8 h-8" />,
                                title: "Vision AI Analysis",
                                desc: "Understands unstructured formats: handwritten notes, skewed photographs of receipts, and complex multi-page PDF tables."
                            },
                            {
                                icon: <Database className="w-8 h-8" />,
                                title: "Structured Extraction",
                                desc: "Pulls exactly the fields you need (Name, Date, Amount, Address) and formats them perfectly for your CRM or SQL database."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Instant Processing",
                                desc: "What takes a human 5 minutes of squinting and typing takes our AI pipeline exactly 1.4 seconds."
                            },
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: "Email Parsing",
                                desc: "Automatically reads inbound emails, identifies attachments, reads the attachments, and updates your systems without you opening your inbox."
                            },
                            {
                                icon: <Lock className="w-8 h-8" />,
                                title: "Enterprise Security",
                                desc: "Deployed securely. Data is extracted and immediately wiped from memory. Perfect for Legal and Financial sensitive documents."
                            },
                            {
                                icon: <ScanLine className="w-8 h-8" />,
                                title: "Zero Error Rate",
                                desc: "Eliminates the 'fat-finger' typos associated with manual data entry, ensuring your financial reporting is flawless."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "100px" }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="cut-card [--cut:22px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 hover:bg-ember/[0.06] hover:[--cut-line:rgba(255,73,37,0.2)] transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-ember/20 to-ember/5 border border-ember/20 rounded-xl flex items-center justify-center text-ember-deep mb-6 group-hover:scale-110 group-hover:bg-ember/20 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-ink-soft leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Example */}
            <section className="py-24 px-4 md:px-8 bg-transparent border-t border-ink/10">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-medium mb-6 tracking-[-0.035em]">From Chaos to Clarity</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="cut-card [--cut:22px] p-8 [--cut-line:rgba(27,26,23,0.1)] bg-white/70 shadow-2xl relative overflow-hidden"
                        >
                            <span className="text-ink-mute text-xs font-bold uppercase tracking-widest mb-4 block">Input: Messy Vendor Invoice</span>
                            <div className="opacity-50 text-ink-soft font-mono text-sm leading-relaxed p-4 bg-transparent rounded-xl">
                                INVOiCE #4002<br/><br/>
                                To: Acme Corp<br/>
                                123 Main St, London, UK<br/><br/>
                                <span className="line-through">Services Rendered:</span> Web Design - £4000<br/>
                                Hosting - £500<br/><br/>
                                Pls pay by: 30/11/2026<br/>
                                Totally: GBP 4,500.00
                            </div>
                        </motion.div>

                        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-20">
                            <div className="w-16 h-16 rounded-full bg-ember/20 border border-ember flex items-center justify-center">
                                <ScanLine className="text-ember-deep w-8 h-8" />
                            </div>
                        </div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="cut-card [--cut:22px] p-8 [--cut-line:rgba(255,73,37,0.3)] bg-white/70 relative"
                        >
                            <span className="text-ember-deep text-xs font-bold uppercase tracking-widest mb-4 block">Output: Clean JSON Payload</span>
                            <pre className="text-ember-deep font-mono text-sm leading-relaxed p-4 bg-ember/[0.06] rounded-xl overflow-x-auto">
{`{
  "invoice_id": "4002",
  "client_name": "Acme Corp",
  "client_address": "123 Main St, London, UK",
  "line_items": [
    { "desc": "Web Design", "amount": 4000 },
    { "desc": "Hosting", "amount": 500 }
  ],
  "total_gbp": 4500.00,
  "due_date": "2026-11-30"
}`}
                            </pre>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8 bg-transparent relative border-t border-ink/10 text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-ember/10 to-transparent pointer-events-none hidden" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Ready to banish data entry?
                        </h2>
                        <p className="text-xl text-ink-soft mb-10">
                            Free your staff to actually use their brains instead of their keyboards. Let the AI do the reading.
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-10 py-5 bg-ember text-ink font-bold hover:bg-ember transition-all hover:scale-105 uppercase tracking-wide text-sm"
                        >
                            BUILD MY DATA PIPELINE
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}