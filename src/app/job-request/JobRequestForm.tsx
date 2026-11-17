'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { trackFormSubmitted } from '@/lib/analytics/tracker';
import { CheckCircle, Loader2, ArrowRight, Sparkles, Globe, Palette, Bot } from 'lucide-react';
import Link from 'next/link';

const SERVICE_OPTIONS = [
    {
        key: 'service_frontend_only',
        label: 'Website — Frontend Only',
        description: 'Static or landing pages with a stunning UI',
        icon: Globe,
    },
    {
        key: 'service_frontend_backend',
        label: 'Website — Frontend + Backend',
        description: 'Full-stack web app with database & API',
        icon: Globe,
    },
    {
        key: 'service_frontend_backend_ai',
        label: 'Website — Frontend + Backend + AI Agent',
        description: 'Full-stack web app powered by AI agents',
        icon: Bot,
    },
    {
        key: 'service_branding',
        label: 'Branding',
        description: 'Logo, brand identity & visual guidelines',
        icon: Palette,
    },
    {
        key: 'service_ai_automation',
        label: 'AI Automation',
        description: 'Automate workflows with AI-powered tools',
        icon: Sparkles,
    },
];

const START_OPTIONS = [
    'ASAP',
    'Within 1 month',
    '1–3 months',
    '3–6 months',
    'Not sure yet',
];

export default function JobRequestForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_frontend_only: false,
        service_frontend_backend: false,
        service_frontend_backend_ai: false,
        service_branding: false,
        service_ai_automation: false,
        requirements: '',
        planned_start: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.name.trim() || !formData.email.trim()) {
            setError('Name and email are required.');
            return;
        }

        const hasService = SERVICE_OPTIONS.some(
            (s) => formData[s.key as keyof typeof formData]
        );
        if (!hasService) {
            setError('Please select at least one service.');
            return;
        }

        setSubmitting(true);
        try {
            const { error: supaError } = await supabase
                .from('job_requests')
                .insert([formData]);

            if (supaError) {
                console.error(supaError);
                setError('Something went wrong. Please try again.');
            } else {
                // Stored — a project request is an enquiry, so this is a
                // conversion, recorded only now that the write succeeded.
                trackFormSubmitted('job_request', 'job_request');
                setSubmitted(true);
            }
        } catch {
            setError('Something went wrong. Please try again.');
        }
        setSubmitting(false);
    };

    const toggleService = (key: string) => {
        setFormData((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
    };

    // ── Success State ──────────────────────────────────────────────
    if (submitted) {
        return (
            <div className="home-cream min-h-screen bg-transparent flex items-center justify-center px-4">
                <div className="max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-ember/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <CheckCircle className="w-10 h-10 text-ember-deep" />
                    </div>
                    <h1 className="text-3xl font-medium text-ink mb-3 tracking-[-0.035em]">
                        Request Submitted!
                    </h1>
                    <p className="text-ink-mute mb-8 leading-relaxed">
                        Thank you for your interest. Our team will review your requirements and get back to you shortly.
                    </p>
                    <Link
                        href="/"
                        className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-6 py-3 bg-ember hover:bg-[#FF5C3A] text-ink font-semibold transition-all duration-200 shadow-lg"
                    >
                        Back to Homepage
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    // ── Form ───────────────────────────────────────────────────────
    return (
        <div className="home-cream min-h-screen bg-transparent relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ember/5 rounded-full blur-[120px] pointer-events-none hidden" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ember/3 rounded-full blur-[100px] pointer-events-none hidden" />

            <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 sm:py-20">
                {/* Header */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-block mb-8">
                        <div className="w-12 h-12 bg-ember/20 rounded-xl flex items-center justify-center mx-auto border border-ember/20">
                            <Sparkles className="w-6 h-6 text-ember-deep" />
                        </div>
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-medium text-ink mb-3 tracking-[-0.035em]">
                        Start Your Project
                    </h1>
                    <p className="text-ink-mute text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                        Tell us what you need and we&apos;ll take care of the rest. No commitment required.
                    </p>
                </div>

                {/* Form Card */}
                <form
                    onSubmit={handleSubmit}
                    data-form="job_request"
                    className="bg-white/70 border border-ink/10 rounded-2xl p-6 sm:p-8 space-y-8"
                >
                    {/* Contact Details */}
                    <div>
                        <h2 className="text-lg font-medium text-ink mb-4 flex items-center gap-2 tracking-[-0.035em]">
                            <div className="w-6 h-6 bg-ember/20 rounded-md flex items-center justify-center text-xs font-bold text-ember-deep">1</div>
                            Contact Details
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-ink-mute mb-1.5">
                                    Full Name <span className="text-ember-deep">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/20 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-ink-mute mb-1.5">
                                    Email <span className="text-ember-deep">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/20 transition-all"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-ink-mute mb-1.5">
                                    Phone <span className="text-ink-soft">(optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/20 transition-all"
                                    placeholder="+44 7XXX XXXXXX"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-ink-mute mb-1.5">
                                    Company <span className="text-ink-soft">(optional)</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/20 transition-all"
                                    placeholder="Company Ltd."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="text-lg font-medium text-ink mb-4 flex items-center gap-2 tracking-[-0.035em]">
                            <div className="w-6 h-6 bg-ember/20 rounded-md flex items-center justify-center text-xs font-bold text-ember-deep">2</div>
                            What are you looking for? <span className="text-ember-ink">*</span>
                        </h2>
                        <div className="space-y-3">
                            {SERVICE_OPTIONS.map((service) => {
                                const isChecked = !!formData[service.key as keyof typeof formData];
                                const Icon = service.icon;
                                return (
                                    <button
                                        type="button"
                                        key={service.key}
                                        onClick={() => toggleService(service.key)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                                            isChecked
                                                ? 'bg-ember/10 border-ember/30 shadow-lg '
                                                : 'bg-paper/30 border-ink/10 hover:border-ink/30 hover:bg-white'
                                        }`}
                                    >
                                        <div
                                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                                                isChecked
                                                    ? 'bg-ember border-ember'
                                                    : 'border-ink/20'
                                            }`}
                                        >
                                            {isChecked && (
                                                <svg className="w-3 h-3 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                                            isChecked ? 'bg-ember/20' : 'bg-white/70'
                                        }`}>
                                            <Icon className={`w-5 h-5 ${isChecked ? 'text-ember-deep' : 'text-ink-mute'}`} />
                                        </div>
                                        <div>
                                            <div className={`text-sm font-semibold ${isChecked ? 'text-ink' : 'text-ink-soft'}`}>
                                                {service.label}
                                            </div>
                                            <div className="text-xs text-ink-mute">{service.description}</div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Requirements */}
                    <div>
                        <h2 className="text-lg font-medium text-ink mb-4 flex items-center gap-2 tracking-[-0.035em]">
                            <div className="w-6 h-6 bg-ember/20 rounded-md flex items-center justify-center text-xs font-bold text-ember-deep">3</div>
                            Project Requirements
                        </h2>
                        <textarea
                            rows={5}
                            value={formData.requirements}
                            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                            className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/20 transition-all resize-none"
                            placeholder="Describe your project, goals, features, any references you have in mind..."
                        />
                    </div>

                    {/* Timeline */}
                    <div>
                        <h2 className="text-lg font-medium text-ink mb-4 flex items-center gap-2 tracking-[-0.035em]">
                            <div className="w-6 h-6 bg-ember/20 rounded-md flex items-center justify-center text-xs font-bold text-ember-deep">4</div>
                            When do you plan to start?
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {START_OPTIONS.map((opt) => (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, planned_start: opt })}
                                    className={`cut-btn [--cut:10px] px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                        formData.planned_start === opt
                                            ? 'bg-ember/10 [--cut-line:rgba(255,73,37,0.3)] text-ember-deep'
                                            : 'bg-paper/30 [--cut-line:rgba(27,26,23,0.1)] text-ink-mute hover:[--cut-line:rgba(27,26,23,0.3)] hover:text-ink'
                                    }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="cut-card [--cut:14px] relative text-red-700 text-sm bg-red-500/10 [--cut-line:rgba(239,68,68,0.2)] px-4 py-3">
                            {error}
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] w-full flex items-center justify-center gap-2 px-6 py-4 bg-ember hover:bg-[#FF5C3A] disabled:opacity-50 disabled:cursor-not-allowed text-ink font-bold text-base transition-all duration-200 shadow-lg"
                    >
                        {submitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                Submit Request
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    <p className="text-center text-xs text-ink-soft">
                        By submitting, you agree to be contacted about your project request.
                    </p>
                </form>
            </div>
        </div>
    );
}
