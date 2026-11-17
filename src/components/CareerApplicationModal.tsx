'use client';

import { useState, useRef } from 'react';
import { X, Upload, Loader2, CheckCircle, Calendar, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackFormSubmitted } from '@/lib/analytics/tracker';

interface Vacancy {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
}

interface CareerApplicationModalProps {
    vacancy: Vacancy;
    isOpen: boolean;
    onClose: () => void;
}

export default function CareerApplicationModal({ vacancy, isOpen, onClose }: CareerApplicationModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        personal_statement: '',
        earliest_start_date: '',
        currently_employed: false,
    });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);

        try {
            const data = new FormData();
            data.append('vacancy_id', vacancy.id);
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('personal_statement', formData.personal_statement);
            data.append('earliest_start_date', formData.earliest_start_date);
            data.append('currently_employed', String(formData.currently_employed));
            if (cvFile) {
                data.append('cv', cvFile);
            }

            const res = await fetch('/api/careers/apply', {
                method: 'POST',
                body: data,
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || 'Failed to submit application');
            }

            // Accepted by the server — a submit, filed as "other": a job
            // application is not a sales lead and never converts the session.
            trackFormSubmitted('career_application', 'career_application', {
                meta: { vacancy_id: vacancy.id },
            });
            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleClose = () => {
        if (!submitting) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                personal_statement: '',
                earliest_start_date: '',
                currently_employed: false,
            });
            setCvFile(null);
            setSubmitted(false);
            setError('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-paper/80"
                    onClick={handleClose}
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="cut-card [--cut:18px] relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-transparent [--cut-line:rgba(27,26,23,0.1)] shadow-2xl"
                >
                    {/* Header */}
                    <div className="sticky top-0 z-10 bg-transparent border-b border-ink/10 px-6 py-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-medium text-ink tracking-[-0.035em]">Apply for Position</h2>
                            <p className="text-sm text-ink-mute mt-0.5">{vacancy.title} — {vacancy.department}</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-white rounded-lg transition-colors text-ink-mute hover:text-ink"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {submitted ? (
                        /* Success State */
                        <div className="p-8 flex flex-col items-center justify-center gap-4 py-16">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-8 h-8 text-green-700" />
                            </div>
                            <h3 className="text-xl font-bold text-ink">Application Submitted!</h3>
                            <p className="text-ink-mute text-center max-w-md">
                                Thank you for applying for the <span className="text-ink font-medium">{vacancy.title}</span> position. We&apos;ll review your application and get back to you soon.
                            </p>
                            <button
                                onClick={handleClose}
                                className="cut-btn [--cut-focus:#1B1A17] mt-4 px-6 py-2.5 bg-ember hover:bg-[#FF5C3A] font-medium text-ink transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        /* Form */
                        <form onSubmit={handleSubmit} className="p-6 space-y-5" data-form="career_application">
                            {error && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-700 text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-ink-mute mb-1.5">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-ink-mute mb-1.5">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-ink-mute mb-1.5">Phone Number *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-all"
                                        placeholder="+44 7XXX XXXXXX"
                                    />
                                </div>
                            </div>

                            {/* Personal Statement */}
                            <div>
                                <label className="block text-sm font-medium text-ink-mute mb-1.5">Personal Statement</label>
                                <textarea
                                    rows={4}
                                    value={formData.personal_statement}
                                    onChange={(e) => setFormData({ ...formData, personal_statement: e.target.value })}
                                    className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink-mute focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-all resize-none"
                                    placeholder="Tell us about yourself and why you're a great fit for this role..."
                                />
                            </div>

                            {/* Start Date & Currently Employed — side by side */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-ink-mute mb-1.5">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            How quick can you start?
                                        </span>
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.earliest_start_date}
                                        onChange={(e) => setFormData({ ...formData, earliest_start_date: e.target.value })}
                                        className="w-full bg-paper/50 border border-ink/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-all [color-scheme:dark]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-ink-mute mb-1.5">
                                        <span className="flex items-center gap-1.5">
                                            <Briefcase className="w-3.5 h-3.5" />
                                            Currently employed elsewhere?
                                        </span>
                                    </label>
                                    <div className="flex items-center gap-4 h-[48px]">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="currently_employed"
                                                checked={formData.currently_employed === true}
                                                onChange={() => setFormData({ ...formData, currently_employed: true })}
                                                className="w-4 h-4 accent-[#FF4925]"
                                            />
                                            <span className="text-ink text-sm">Yes</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="currently_employed"
                                                checked={formData.currently_employed === false}
                                                onChange={() => setFormData({ ...formData, currently_employed: false })}
                                                className="w-4 h-4 accent-[#FF4925]"
                                            />
                                            <span className="text-ink text-sm">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* CV Upload */}
                            <div>
                                <label className="block text-sm font-medium text-ink-mute mb-1.5">Upload CV</label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed rounded-xl px-4 py-6 flex flex-col items-center justify-center cursor-pointer transition-all ${
                                        cvFile
                                            ? 'border-ember/40 bg-ember/5'
                                            : 'border-ink/10 hover:border-ember/30 hover:bg-white'
                                    }`}
                                >
                                    {cvFile ? (
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-ember/20 rounded-lg flex items-center justify-center">
                                                <CheckCircle className="w-5 h-5 text-ember-deep" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-ink font-medium">{cvFile.name}</p>
                                                <p className="text-xs text-ink-mute">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCvFile(null);
                                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                                }}
                                                className="ml-auto p-1 hover:bg-white rounded-lg text-ink-mute hover:text-ink transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <Upload className="w-6 h-6 text-ink-mute mb-2" />
                                            <p className="text-sm text-ink-mute">Click to upload your CV</p>
                                            <p className="text-xs text-ink-mute mt-1">PDF, DOC, DOCX — Max 10MB</p>
                                        </>
                                    )}
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setCvFile(e.target.files[0]);
                                            }
                                        }}
                                        className="hidden"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-ember hover:bg-[#FF5C3A] disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-ink transition-all duration-200"
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Application'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
