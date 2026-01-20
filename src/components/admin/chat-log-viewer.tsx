import { X, MessageSquare, Clock, Globe } from 'lucide-react';

interface ChatLogViewerProps {
    log: any; // Using any for simplicity in rapid dev, ideally typed
    onClose: () => void;
}

export function ChatLogViewer({ log, onClose }: ChatLogViewerProps) {
    if (!log) return null;

    const messages = log.messages || [];

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Slide-over Panel */}
            <div className="relative w-full max-w-2xl h-full bg-zinc-900 border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">

                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-start justify-between bg-zinc-900/50">
                    <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-[#FF4925]" />
                            Chat Session Details
                        </h2>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {new Date(log.created_at).toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                                <Globe className="w-4 h-4" />
                                {log.ip_address || 'Unknown IP'}
                            </span>
                        </div>
                        {log.metadata?.model && (
                            <span className="text-xs text-zinc-500 mt-1 block font-mono">
                                Model: {log.metadata.model}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/40">
                    {messages.length === 0 ? (
                        <div className="text-center text-gray-500 py-12">No messages recorded in this log.</div>
                    ) : (
                        messages.map((msg: any, idx: number) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user'
                                        ? 'bg-[#FF4925]/10 text-white border border-[#FF4925]/20'
                                        : 'bg-zinc-800 text-gray-200 border border-white/5'
                                    }`}>
                                    <div className="text-[10px] uppercase tracking-wider font-bold mb-1 opacity-50">
                                        {msg.role}
                                    </div>
                                    {msg.content}
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}
