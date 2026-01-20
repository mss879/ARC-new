"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

// Helper to format inline text (bold, links)
const formatInline = (text: string) => {
    // 1. Split by Bold
    const boldParts = text.split(/\*\*(.*?)\*\*/g);

    return boldParts.map((part, i) => {
        // If odd index, it's the bold content (captured group)
        if (i % 2 === 1) {
            return <strong key={i} className="font-bold">{part}</strong>;
        }

        // 2. Process Links in the non-bold parts
        // Regex for Markdown links: [text](url)
        const markdownRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
        // Regex for raw URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        const subParts = [];
        let lastIndex = 0;
        let match;

        // Find Markdown links
        while ((match = markdownRegex.exec(part)) !== null) {
            if (match.index > lastIndex) {
                const plainText = part.substring(lastIndex, match.index);
                // Process raw URLs in plain text
                subParts.push(...processRawUrls(plainText, `${i}-${lastIndex}`));
            }

            subParts.push(
                <a
                    key={`${i}-md-${match.index}`}
                    href={match[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                    onClick={(e) => {
                        if (!match![2].startsWith('http')) e.preventDefault();
                    }}
                >
                    {match[1]}
                </a>
            );
            lastIndex = markdownRegex.lastIndex;
        }

        if (lastIndex < part.length) {
            const plainText = part.substring(lastIndex);
            subParts.push(...processRawUrls(plainText, `${i}-last`));
        }

        return <span key={i}>{subParts}</span>;
    });
};

const processRawUrls = (text: string, keyPrefix: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const fragments = text.split(urlRegex);
    const nodes: React.ReactNode[] = [];

    fragments.forEach((fragment, j) => {
        if (urlRegex.test(fragment)) {
            nodes.push(
                <a
                    key={`${keyPrefix}-${j}`}
                    href={fragment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline break-all"
                    onClick={(e) => {
                        if (!fragment.startsWith('http')) e.preventDefault();
                    }}
                >
                    {fragment}
                </a>
            );
        } else {
            nodes.push(<span key={`${keyPrefix}-${j}`}>{fragment}</span>);
        }
    });
    return nodes;
};

const MessageContent = ({ content }: { content: string }) => {
    const lines = content.split('\n');
    return (
        <div className="space-y-1">
            {lines.map((line, i) => {
                const trimmed = line.trim();

                // Headers
                if (trimmed.startsWith('### ')) {
                    return <h3 key={i} className="font-bold text-sm my-1">{formatInline(trimmed.substring(4))}</h3>;
                }
                if (trimmed.startsWith('## ')) {
                    return <h2 key={i} className="font-bold text-base my-2">{formatInline(trimmed.substring(3))}</h2>;
                }
                if (trimmed.startsWith('# ')) {
                    return <h1 key={i} className="font-bold text-lg my-2">{formatInline(trimmed.substring(2))}</h1>;
                }

                // List items
                if (trimmed.startsWith('- ')) {
                    return (
                        <div key={i} className="flex gap-2 ml-1">
                            <span className="text-current opacity-70 mt-1.5 inline-block w-1 h-1 rounded-full bg-current shrink-0" />
                            <div className="flex-1">{formatInline(trimmed.substring(2))}</div>
                        </div>
                    );
                }

                // Empty lines (paragraph breaks)
                if (!trimmed) {
                    return <div key={i} className="h-2" />;
                }

                return <div key={i}>{formatInline(line)}</div>;
            })}
        </div>
    );
};

export function AiChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isWelcomeOpen, setIsWelcomeOpen] = useState(true); // New state for welcome bubble
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            role: "assistant",
            content: "Hello! I'm your ARC AI Concierge. How can I help you automate and grow your business today?"
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic
    useEffect(() => {
        if (!scrollRef.current || messages.length === 0) return;

        const lastMessage = messages[messages.length - 1];
        const isLastMessageUser = lastMessage.role === 'user';

        if (isLastMessageUser) {
            // Always scroll to bottom for user messages
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        } else {
            // For assistant messages, scroll to the top of the message
            // This ensures users start reading from the beginning of long responses
            const lastMessageElement = document.getElementById(lastMessage.id);
            if (lastMessageElement) {
                lastMessageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [messages, isOpen]);

    // Close welcome bubble when chat opens
    useEffect(() => {
        if (isOpen) {
            setIsWelcomeOpen(false);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = inputValue.trim();
        if (!trimmedInput || isLoading) return;

        // Client-side length validation
        if (trimmedInput.length > 1000) {
            setError("Message is too long (max 1000 characters).");
            return;
        }

        setError(null);

        // Add user message
        const userMessage: Message = {
            id: `user-${Date.now()}`,
            role: "user",
            content: trimmedInput,
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            // Prepare API payload
            const apiMessages = [...messages, userMessage].map(msg => ({
                role: msg.role,
                content: msg.content,
            }));

            // Call API
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || `HTTP ${response.status}`);
            }

            // Add assistant message
            setMessages(prev => [...prev, {
                id: `assistant-${Date.now()}`,
                role: "assistant",
                content: data.content,
            }]);

        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to send");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed z-[60] flex flex-col border border-white/10 bg-black shadow-2xl overflow-hidden pointer-events-auto bottom-0 left-0 w-full h-[85vh] rounded-t-2xl rounded-b-none md:bottom-8 md:right-28 md:left-auto md:w-[450px] md:h-[650px] md:max-h-[85vh] md:rounded-2xl"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden shadow-lg">
                                    <Image
                                        src="/favicon.png"
                                        alt="ARC AI"
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">ARC AI Concierge</h3>
                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Online & Ready to Help
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent bg-black"
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    id={msg.id}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`
                                max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                                ${msg.role === 'user'
                                                ? 'bg-orange-600 text-white rounded-br-none shadow-lg'
                                                : 'bg-zinc-900 text-gray-100 rounded-bl-none border border-white/10 shadow-lg'}
                            `}
                                    >
                                        <MessageContent content={msg.content} />
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-zinc-900 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center h-10 border border-white/10">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="text-xs text-red-400 text-center p-2 bg-red-500/10 rounded border border-red-500/20">
                                    {error}
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-zinc-900">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-black border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all shadow-inner"
                                    style={{ fontSize: '16px' }} // Prevent iOS zoom
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !inputValue.trim()}
                                    className="absolute right-1.5 p-1.5 bg-orange-600 hover:bg-orange-500 rounded-full text-white disabled:opacity-50 transition-all shadow-md"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            <div className="mt-2 text-[10px] text-center text-gray-600">
                                Powered by ARC AI
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Button & Welcome Bubble Wrapper */}
            <div className="relative">
                {/* Welcome Bubble */}
                <AnimatePresence>
                    {!isOpen && isWelcomeOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.9 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="hidden md:block absolute right-full mr-4 bottom-0 w-64 bg-white text-black text-sm p-4 rounded-2xl shadow-xl border border-gray-200 z-50 origin-bottom-right"
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsWelcomeOpen(false);
                                }}
                                className="absolute -top-2 -left-2 bg-orange-600 text-white rounded-full p-1 shadow-md hover:bg-orange-500 transition-colors"
                            >
                                <X className="w-3 h-3" />
                            </button>

                            <div className="pr-1">
                                <p className="font-medium">👋 Hi! I'm your ARC AI Concierge.</p>
                                <p className="text-xs text-gray-500 mt-1">How can I help you grow today?</p>
                            </div>

                            {/* Triangle Pointer */}
                            <div className="absolute bottom-6 right-0 translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-t border-r border-gray-200 shadow-sm z-10"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative w-14 h-14">
                    <span className="absolute inset-0 rounded-full bg-[#F75834] opacity-75 animate-heartbeat"></span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`
                            relative w-14 h-14 bg-[#0A1A2F] border border-[#F75834]/40 rounded-full shadow-2xl 
                            flex items-center justify-center overflow-hidden hover:border-[#F75834]/60 
                            transition-all z-50 group
                        `}
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 20px, rgba(255, 215, 0, 0.15) 0px 0px 20px',
                            transform: 'scale(1.05) translateZ(0px)'
                        }}
                    >
                        {/* Tooltip */}
                        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            AI Concierge
                        </div>

                        <div className="relative z-10">
                            {isOpen ? <X className="w-6 h-6 text-[#F75834]" /> : <MessageCircle className="w-6 h-6 text-[#F75834]" />}
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
