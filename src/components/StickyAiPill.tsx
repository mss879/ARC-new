"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { MessageCircle, X, Send, Mic, MicOff, Square, Loader2, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

// --- Chat Formatter Helpers (Reused from ai-chat-widget.tsx) ---
const formatInline = (text: string) => {
    const boldParts = text.split(/\*\*(.*?)\*\*/g);
    return boldParts.map((part, i) => {
        if (i % 2 === 1) return <strong key={i} className="font-bold">{part}</strong>;
        const markdownRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
        const subParts = [];
        let lastIndex = 0;
        let match;
        while ((match = markdownRegex.exec(part)) !== null) {
            if (match.index > lastIndex) subParts.push(...processRawUrls(part.substring(lastIndex, match.index), `${i}-${lastIndex}`));
            subParts.push(
                <a key={`${i}-md-${match.index}`} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                    {match[1]}
                </a>
            );
            lastIndex = markdownRegex.lastIndex;
        }
        if (lastIndex < part.length) subParts.push(...processRawUrls(part.substring(lastIndex), `${i}-last`));
        return <span key={i}>{subParts}</span>;
    });
};

const processRawUrls = (text: string, keyPrefix: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const fragments = text.split(urlRegex);
    return fragments.map((fragment, j) => {
        if (urlRegex.test(fragment)) {
            return <a key={`${keyPrefix}-${j}`} href={fragment} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline break-all">{fragment}</a>;
        }
        return <span key={`${keyPrefix}-${j}`}>{fragment}</span>;
    });
};

const MessageContent = ({ content }: { content: string }) => {
    const lines = content.split('\n');
    return (
        <div className="space-y-1">
            {lines.map((line, i) => {
                const trimmed = line.trim();
                if (trimmed.startsWith('### ')) return <p key={i} className="font-bold text-sm my-1">{formatInline(trimmed.substring(4))}</p>;
                if (trimmed.startsWith('## ')) return <p key={i} className="font-bold text-base my-2">{formatInline(trimmed.substring(3))}</p>;
                if (trimmed.startsWith('# ')) return <p key={i} className="font-bold text-lg my-2">{formatInline(trimmed.substring(2))}</p>;
                if (trimmed.startsWith('- ')) {
                    return (
                        <div key={i} className="flex gap-2 ml-1">
                            <span className="text-current opacity-70 mt-1.5 inline-block w-1 h-1 rounded-full bg-current shrink-0" />
                            <div className="flex-1">{formatInline(trimmed.substring(2))}</div>
                        </div>
                    );
                }
                if (!trimmed) return <div key={i} className="h-2" />;
                return <div key={i}>{formatInline(line)}</div>;
            })}
        </div>
    );
};

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

export function StickyAiPill() {
    // Shared State
    const [activeMode, setActiveMode] = useState<"chat" | "voice" | null>(null);
    const [pillVisible, setPillVisible] = useState(true);
    const [showOnMobile, setShowOnMobile] = useState(false);
    const router = useRouter();

    // Hide pill on mobile until user scrolls past hero section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const heroHeight = window.innerHeight;
            setShowOnMobile(scrollPosition > heroHeight * 0.8);
        };

        // Run once on mount to set initial state
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Chat State
    const sessionId = useMemo(() => crypto.randomUUID(), []);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { id: "welcome", role: "assistant", content: "Hello! I'm your ARC AI Concierge. How can I help you today?" }
    ]);
    const [isChatLoading, setIsChatLoading] = useState(false);
    const [chatError, setChatError] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Voice State
    const [isVoiceActive, setIsVoiceActive] = useState(false);
    const [isVoiceConnecting, setIsVoiceConnecting] = useState(false);
    const [voiceStatus, setVoiceStatus] = useState<string>("Ready to talk");
    const [volumeLevel, setVolumeLevel] = useState(0); // For visualizing mic
    const [frequencyData, setFrequencyData] = useState<number[]>(new Array(16).fill(0));
    const [isMuted, setIsMuted] = useState(false);

    // Cryptographic session credentials for authorizing tool execution
    const [voiceToken, setVoiceToken] = useState<string | null>(null);
    const [voiceSessionId, setVoiceSessionId] = useState<string | null>(null);
    const [voiceSessionExpiresAt, setVoiceSessionExpiresAt] = useState<number | null>(null);

    // WebRTC References
    const pcRef = useRef<RTCPeerConnection | null>(null);
    const dcRef = useRef<RTCDataChannel | null>(null);
    const audioElRef = useRef<HTMLAudioElement | null>(null);
    const micStreamRef = useRef<MediaStream | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const micAnalyserRef = useRef<AnalyserNode | null>(null);
    const aiAnalyserRef = useRef<AnalyserNode | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const maxDurationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const maxDurationWarnTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const INACTIVITY_TIMEOUT_MS = 3 * 60 * 1000; // 3 minutes
    const MAX_CALL_DURATION_MS = 90 * 1000; // 1.5 minutes — Beta limit
    const MAX_CALL_WARN_MS = 80 * 1000; // Warn at 1:20

    // Friendly tool status messages (hide internal tool names from users)
    const toolStatusMap: Record<string, string> = {
        searchCompanyKnowledge: "Looking that up...",
        sendProposal: "Sending your proposal...",
        saveLead: "Saving your details...",
        subscribeNewsletter: "Subscribing you...",
        navigateClientScreen: "Opening that page...",
    };

    useEffect(() => {
        if (activeMode !== "chat") return;
        if (!scrollRef.current || messages.length === 0) return;
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.role === 'user') {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        } else {
            const el = document.getElementById(lastMessage.id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [messages, activeMode]);

    // Cleanup resources on unmount
    useEffect(() => {
        return () => {
            stopVoiceSession();
        };
    }, []);

    // Mute toggle effect
    useEffect(() => {
        if (micStreamRef.current) {
            micStreamRef.current.getAudioTracks().forEach(track => {
                track.enabled = !isMuted;
            });
            if (isMuted) {
                setVoiceStatus("Muted");
            } else if (isVoiceActive) {
                setVoiceStatus("Listening...");
            }
        }
    }, [isMuted, isVoiceActive]);

    const handleChatSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = inputValue.trim();
        if (!trimmedInput || isChatLoading) return;
        setChatError(null);

        const userMessage: Message = { id: `user-${Date.now()}`, role: "user", content: trimmedInput };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsChatLoading(true);

        try {
            const apiMessages = [...messages, userMessage].map(msg => ({ role: msg.role, content: msg.content }));
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: apiMessages, sessionId }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
            setMessages(prev => [...prev, { id: `assistant-${Date.now()}`, role: "assistant", content: data.content }]);
        } catch (err) {
            setChatError(err instanceof Error ? err.message : "Failed to send");
        } finally {
            setIsChatLoading(false);
        }
    };

    const startVoiceSession = async () => {
        if (isVoiceConnecting || isVoiceActive) return;
        setIsVoiceConnecting(true);
        setVoiceStatus("Connecting...");

        try {
            // 1. Get Ephemeral Token and secure session headers
            const tokenResponse = await fetch("/api/realtime/session", { method: "POST" });
            if (!tokenResponse.ok) throw new Error("Failed to get session token");
            const data = await tokenResponse.json();
            
            console.log("Realtime session response:", data);

            const token = data.value ?? data.client_secret?.value;

            if (!token) {
                throw new Error("No Realtime client secret returned from /api/realtime/session");
            }

            // Capture session authorization credentials locally to prevent React async state closure issues in dc.onmessage
            const currentVoiceToken = data.voiceToken || "";
            const currentSessionId = data.sessionId || "";
            const currentExpiresAt = String(data.expiresAt || 0);

            setVoiceToken(currentVoiceToken);
            setVoiceSessionId(currentSessionId);
            setVoiceSessionExpiresAt(data.expiresAt || null);

            // 2. Setup WebRTC PeerConnection
            const pc = new RTCPeerConnection();
            pcRef.current = pc;

            // 3. Setup incoming audio track (iOS Safari compatible)
            // Creating Audio inside startVoiceSession ensures user-gesture context
            // which bypasses iOS Safari's autoplay restriction.
            const audioEl = new Audio();
            audioElRef.current = audioEl;
            pc.ontrack = e => {
                audioEl.srcObject = e.streams[0];
                // Explicit .play() call within user-gesture chain for iOS Safari
                audioEl.play().catch(err => console.warn('[Audio] Autoplay blocked:', err));
                // Connect AI audio to analyser for visualizer
                setupAIAudioAnalyser(e.streams[0]);
            };

            // 4. Setup outgoing local audio track (Microphone) with explicit noise suppression
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                }
            });
            micStreamRef.current = stream;
            pc.addTrack(stream.getTracks()[0]);

            // Setup volume metering for UI (mic input)
            setupVolumeMeter(stream);

            // 5. Setup Data Channel for events / function calls
            const dc = pc.createDataChannel("oai-events", { ordered: true });
            dcRef.current = dc;

            // ── Inactivity auto-disconnect (3 minutes) ──────────────────
            const resetInactivityTimer = () => {
                if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
                inactivityTimerRef.current = setTimeout(() => {
                    console.warn('[Voice] Inactivity timeout — disconnecting after 3 minutes of silence');
                    setVoiceStatus("Disconnected — inactive");
                    setTimeout(() => stopVoiceSession(), 1500);
                    setActiveMode(null);
                }, INACTIVITY_TIMEOUT_MS);
            };

            dc.onopen = () => {
                setVoiceStatus("Listening...");
                setIsVoiceConnecting(false);
                setIsVoiceActive(true);
                resetInactivityTimer(); // Start the inactivity timer

                // ── Beta: Hard max call duration (1.5 minutes) ──────────────
                // At 1:20, instruct the AI to wrap up and inform the user
                maxDurationWarnTimerRef.current = setTimeout(() => {
                    if (dcRef.current && dcRef.current.readyState === 'open') {
                        dcRef.current.send(JSON.stringify({
                            type: "response.create",
                            response: {
                                instructions: "IMPORTANT: The beta call time limit of 1 minute 30 seconds is almost up. Politely inform the user that the call is ending soon due to the beta time limit. Thank them for trying the voice feature and suggest they continue via the chat or book a call through our website. Keep it brief and friendly."
                            }
                        }));
                    }
                }, MAX_CALL_WARN_MS);

                // At 1:30, force disconnect
                maxDurationTimerRef.current = setTimeout(() => {
                    console.warn('[Voice] Beta max call duration reached — disconnecting after 1.5 minutes');
                    setVoiceStatus("Beta time limit reached");
                    stopVoiceSession();
                    setTimeout(() => setActiveMode(null), 1500);
                }, MAX_CALL_DURATION_MS);
            };

            let hasGreeted = false;

            dc.onmessage = async (e) => {
                try {
                    const event = JSON.parse(e.data);

                    if (event.type === 'session.created' && !hasGreeted) {
                        hasGreeted = true;
                        // Trigger the agent to greet the user with a constrained greeting.
                        // We pass explicit instructions so the model does NOT hallucinate
                        // a user question from ambient mic audio before the user actually speaks.
                        dc.send(JSON.stringify({
                            type: "response.create",
                            response: {
                                instructions: "Deliver ONLY your short greeting (e.g. 'Hey there! I'm the ARC AI assistant. How can I help you today?'). Say nothing else after the greeting. Do NOT assume the user has said anything yet. Do NOT ask follow-up questions beyond 'How can I help you today?'. After greeting, STOP speaking and wait silently for the user to talk first."
                            }
                        }));
                    }

                    if (event.type === 'error') {
                        console.error("OpenAI WebRTC Error:", event.error);
                        setVoiceStatus(`Error: ${event.error.message}`);
                    }

                    if (event.type === 'input_audio_buffer.speech_started') {
                        setVoiceStatus("User Speaking...");
                        resetInactivityTimer();
                    }
                    if (event.type === 'input_audio_buffer.speech_stopped') {
                        setVoiceStatus("Thinking...");
                        resetInactivityTimer();
                    }
                    if (event.type === 'response.audio.delta') {
                        setVoiceStatus(prev => prev !== "Agent Speaking..." ? "Agent Speaking..." : prev);
                    }
                    if (event.type === 'response.output_item.added') {
                        resetInactivityTimer();
                    }
                    if (event.type === 'response.done') {
                        // Check if the response was a function call. If so, we are executing it
                        // and should not immediately reset the UI to 'Listening...'
                        const hasFunctionCall = event.response?.output?.some((o: any) => o.type === 'function_call');
                        if (!hasFunctionCall) {
                            setVoiceStatus("Listening...");
                        }
                        resetInactivityTimer();
                    }

                    if (event.type === "response.function_call_arguments.done") {
                        const call_id = event.call_id;
                        const name = event.name;
                        const argsStr = event.arguments;

                        setVoiceStatus(toolStatusMap[name] || "Working on it...");

                        if (name === "navigateClientScreen") {
                            try {
                                const { target_path } = JSON.parse(argsStr);
                                
                                // Fallback redirects for generic pricing path requests
                                let path = target_path;
                                if (path === "/pricing" || path === "pricing") {
                                    path = "/ai-pricing";
                                }

                                if (path === "#calendly" || path === "/#calendly") {
                                    window.dispatchEvent(new CustomEvent("open-calendly"));
                                } else {
                                    router.push(path);
                                }
                                dc.send(JSON.stringify({
                                    type: "conversation.item.create",
                                    item: { type: "function_call_output", call_id, output: JSON.stringify({ success: true, navigated_to: target_path }) }
                                }));
                                dc.send(JSON.stringify({ type: "response.create" }));
                                setVoiceStatus("Thinking...");
                            } catch (e) {
                                console.error("Navigation failed", e);
                            }
                            return;
                        }

                        try {
                            const result = await fetch("/api/realtime/execute-tool", {
                                method: "POST",
                                headers: { 
                                    "Content-Type": "application/json",
                                    "X-Voice-Token": currentVoiceToken,
                                    "X-Voice-Session-Id": currentSessionId,
                                    "X-Voice-Expires-At": currentExpiresAt,
                                },
                                body: JSON.stringify({ toolName: name, args: JSON.parse(argsStr) })
                            }).then(res => res.json());

                            // Send outcome back to OpenAI Realtime
                            dc.send(JSON.stringify({
                                type: "conversation.item.create",
                                item: { type: "function_call_output", call_id, output: JSON.stringify(result) }
                            }));
                            dc.send(JSON.stringify({ type: "response.create" }));
                            setVoiceStatus("Thinking...");

                        } catch (err) {
                            dc.send(JSON.stringify({
                                type: "conversation.item.create",
                                item: { type: "function_call_output", call_id, output: JSON.stringify({ error: String(err) }) }
                            }));
                            dc.send(JSON.stringify({ type: "response.create" }));
                            setVoiceStatus("Thinking...");
                        }
                    }
                } catch (err) {
                    console.error("Error handling data channel message:", err);
                }
            };

            // 6. Connect using SDP Offer/Answer
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);

            const baseUrl = "https://api.openai.com/v1/realtime/calls";
            const model = "gpt-realtime-mini";
            const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
                method: "POST",
                body: offer.sdp,
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/sdp"
                }
            });

            if (!sdpResponse.ok) {
                const sdpErrBody = await sdpResponse.text();
                console.error("SDP Exchange Failed:", sdpResponse.status, sdpErrBody);
                throw new Error(`Failed to set SDP: ${sdpResponse.status} - ${sdpErrBody}`);
            }
            const answerSdp = await sdpResponse.text();

            await pc.setRemoteDescription({
                type: "answer",
                sdp: answerSdp
            });

        } catch (err) {
            console.error("Voice setup failed", err);
            const errMsg = err instanceof Error ? err.message : String(err);
            setVoiceStatus(`Failed to connect: ${errMsg}`);
            setIsVoiceConnecting(false);
            stopVoiceSession(true);
        }
    };

    const stopVoiceSession = (keepErrorStatus = false) => {
        if (pcRef.current) { pcRef.current.close(); pcRef.current = null; }
        if (dcRef.current) { dcRef.current.close(); dcRef.current = null; }
        if (micStreamRef.current) {
            micStreamRef.current.getTracks().forEach(t => t.stop());
            micStreamRef.current = null;
        }
        if (audioElRef.current) { audioElRef.current.srcObject = null; audioElRef.current = null; }
 
        if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
        if (inactivityTimerRef.current) {
            clearTimeout(inactivityTimerRef.current);
            inactivityTimerRef.current = null;
        }
        if (maxDurationTimerRef.current) {
            clearTimeout(maxDurationTimerRef.current);
            maxDurationTimerRef.current = null;
        }
        if (maxDurationWarnTimerRef.current) {
            clearTimeout(maxDurationWarnTimerRef.current);
            maxDurationWarnTimerRef.current = null;
        }
 
        setIsVoiceActive(false);
        setIsVoiceConnecting(false);
        if (!keepErrorStatus) {
            setVoiceStatus("Ready to talk");
        }
        setVolumeLevel(0);
        setFrequencyData(new Array(16).fill(0));
        setIsMuted(false);

        // Reset voice credentials
        setVoiceToken(null);
        setVoiceSessionId(null);
        setVoiceSessionExpiresAt(null);
    };

    /** Connect the user's microphone stream to an analyser for the visualizer */
    const setupVolumeMeter = (stream: MediaStream) => {
        const audioCtx = new window.AudioContext();
        const analyser = audioCtx.createAnalyser();
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);
        analyser.fftSize = 256;

        audioContextRef.current = audioCtx;
        micAnalyserRef.current = analyser;

        startVisualizerLoop();
    };

    /** Connect the AI's incoming audio stream to a second analyser */
    const setupAIAudioAnalyser = (stream: MediaStream) => {
        if (!audioContextRef.current) return;
        try {
            const analyser = audioContextRef.current.createAnalyser();
            const source = audioContextRef.current.createMediaStreamSource(stream);
            source.connect(analyser);
            analyser.fftSize = 256;
            aiAnalyserRef.current = analyser;
        } catch (err) {
            console.warn('[Audio] Could not connect AI audio analyser:', err);
        }
    };

    /** Visualizer loop — strictly maps to AI audio output (Jarvis face reacts to AI speaking only, symmetrically) */
    const startVisualizerLoop = () => {
        const updateVolume = () => {
            const aiAnalyser = aiAnalyserRef.current;

            if (!aiAnalyser) {
                animationFrameRef.current = requestAnimationFrame(updateVolume);
                return;
            }

            // Get AI audio frequency data
            const aiData = new Uint8Array(aiAnalyser.frequencyBinCount);
            aiAnalyser.getByteFrequencyData(aiData);

            const freqs = new Array(16).fill(0);
            let sum = 0;

            // Human voice primarily occupies the lower/mid bins (roughly 2 to 25 out of 128).
            // We extract 8 bands (3 bins each) and mirror them to create perfect visual symmetry
            for (let i = 0; i < 8; i++) {
                let binSum = 0;
                for (let j = 0; j < 3; j++) {
                    const idx = 2 + (i * 3) + j; // start at bin 2 to bypass DC offset
                    binSum += aiData[idx] ?? 0;
                }
                const rawFreq = binSum / 3;
                const value = Math.min(255, rawFreq * 1.5); // Boost visibility

                // Mirror the value across both sides of the circle
                freqs[i] = value;        // Right side (0 to 7)
                freqs[15 - i] = value;   // Left side (15 to 8)

                sum += (binSum * 2);
            }

            setFrequencyData(freqs);
            // Volume level controls the central core's overall pulsing
            setVolumeLevel(sum / 48); // 8 bands * 3 bins * 2 sides = 48 values
            animationFrameRef.current = requestAnimationFrame(updateVolume);
        };
        updateVolume();
    };

    if (!pillVisible) return null;

    return (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center transition-all duration-500 ${showOnMobile || activeMode ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'} md:opacity-100 md:translate-y-0 md:pointer-events-auto`}>

            {/* Expanded UI (Chat or Voice Window) */}
            <AnimatePresence>
                {activeMode && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        className="mb-4 flex flex-col bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden w-[90vw] max-w-[400px] h-[550px] max-h-[70vh]"
                    >
                        {/* Content Area */}
                        <div className="flex-1 relative overflow-hidden flex flex-col">
                            {activeMode === "chat" ? (
                                <>
                                    <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden shadow-lg relative">
                                                <Image src="/favicon.png" alt="ARC AI" width={32} height={32} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-white">ARC AI Agent</h3>
                                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
                                        {messages.map((msg) => (
                                            <div key={msg.id} id={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'bg-orange-600 text-white rounded-br-none shadow-lg' : 'bg-zinc-800 text-gray-100 rounded-bl-none border border-white/10 shadow-lg'}`}>
                                                    <MessageContent content={msg.content} />
                                                </div>
                                            </div>
                                        ))}
                                        {isChatLoading && (
                                            <div className="flex justify-start">
                                                <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-white/10 h-10 flex gap-1 items-center">
                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                                </div>
                                            </div>
                                        )}
                                        {chatError && <div className="text-xs text-red-400 text-center p-2 bg-red-500/10 rounded">{chatError}</div>}
                                    </div>
                                    <form onSubmit={handleChatSubmit} className="p-3 border-t border-white/10 bg-zinc-900/50" data-analytics-ignore>
                                        <div className="relative flex items-center">
                                            <input
                                                type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                                                placeholder="Type your message..."
                                                className="w-full bg-black/50 border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                                            />
                                            <button type="submit" disabled={isChatLoading || !inputValue.trim()} className="absolute right-1.5 p-1.5 rounded-full bg-orange-600 disabled:opacity-50 text-white hover:bg-orange-500">
                                                <Send className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="flex-1 flex flex-col items-center p-6 bg-gradient-to-b from-transparent to-orange-900/10">
                                    <div className="flex-1 flex flex-col items-center justify-center w-full">
                                        <div className="relative h-32 flex items-center justify-center w-full">
                                            {!isVoiceConnecting && !isVoiceActive ? (
                                                <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center border border-white/20 shadow-2xl">
                                                    <Mic className="w-10 h-10 text-white" />
                                                </div>
                                            ) : isVoiceConnecting ? (
                                                <div className="w-24 h-24 rounded-full bg-orange-400 flex items-center justify-center border border-white/20 shadow-2xl">
                                                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                                                </div>
                                            ) : (
                                                <div className="relative w-32 h-32 flex items-center justify-center">
                                                    {/* Inner Core */}
                                                    <motion.div
                                                        animate={{ scale: 1 + (volumeLevel / 255) * 0.5, rotate: 360 }}
                                                        transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
                                                        className={`absolute w-8 h-8 rounded-full border ${isMuted ? 'border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.5)]' : 'border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.5)]'} flex items-center justify-center`}
                                                    >
                                                        <motion.div
                                                            animate={{ scale: 1 + (volumeLevel / 255) * 0.8 }}
                                                            className={`w-3 h-3 ${isMuted ? 'bg-red-500 shadow-[0_0_10px_#ef4444]' : 'bg-orange-400 shadow-[0_0_10px_#f97316]'} rounded-full`}
                                                        />
                                                    </motion.div>

                                                    {/* Outer rotating ring of dots */}
                                                    <motion.div
                                                        animate={{ rotate: -360 }}
                                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 flex items-center justify-center"
                                                    >
                                                        {frequencyData.map((val, idx) => {
                                                            const angle = (idx / 16) * Math.PI * 2;
                                                            const radius = 35 + (val / 255) * 20; // 35px base radius, pushes out with sound
                                                            const x = Math.cos(angle) * radius;
                                                            const y = Math.sin(angle) * radius;
                                                            const scale = 0.5 + (val / 255) * 1.5;

                                                            return (
                                                                <motion.div
                                                                    key={`outer-${idx}`}
                                                                    className={`absolute w-1.5 h-1.5 rounded-full ${isMuted ? 'bg-red-500/50 shadow-[0_0_8px_#ef4444]' : 'bg-orange-500 shadow-[0_0_8px_#f97316]'}`}
                                                                    animate={{ x, y, scale, opacity: isMuted ? 0.3 : 0.5 + (val / 255) * 0.5 }}
                                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                                />
                                                            )
                                                        })}
                                                    </motion.div>

                                                    {/* Middle rotating ring just for aesthetics */}
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-0 flex items-center justify-center"
                                                    >
                                                        {[...Array(8)].map((_, idx) => {
                                                            const angle = (idx / 8) * Math.PI * 2;
                                                            const radius = 22; // fixed inner ring
                                                            const val = frequencyData[idx * 2] || 0;
                                                            const x = Math.cos(angle) * radius;
                                                            const y = Math.sin(angle) * radius;
                                                            const scale = 0.5 + (val / 255) * 1;

                                                            return (
                                                                <motion.div
                                                                    key={`inner-${idx}`}
                                                                    className={`absolute w-1 h-1 rounded-full ${isMuted ? 'bg-red-400/40 shadow-[0_0_5px_#f87171]' : 'bg-orange-300 shadow-[0_0_5px_#fdba74]'}`}
                                                                    animate={{ x, y, scale, opacity: isMuted ? 0.2 : 0.4 + (val / 255) * 0.4 }}
                                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                                />
                                                            )
                                                        })}
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>
                                        <p className={`mt-8 text-center font-semibold transition-colors ${isVoiceActive ? (isMuted ? 'text-red-400' : 'text-orange-400') : 'text-gray-400'}`}>
                                            {voiceStatus}
                                        </p>
                                        {isVoiceActive && !isMuted && (
                                            <p className="mt-2 text-xs text-gray-400 text-center px-4 font-medium">
                                                Speak freely! The AI will respond automatically.
                                            </p>
                                        )}
                                    </div>

                                    {/* Bottom Anchored Action Area */}
                                    {isVoiceActive && (
                                        <div className="mt-auto pt-4 w-full flex justify-center">
                                            <button
                                                onClick={() => window.dispatchEvent(new CustomEvent("open-calendly"))}
                                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] hover:scale-[1.03] active:scale-[0.97]"
                                            >
                                                <Calendar className="w-4 h-4" />
                                                Book a Call
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sticky Pill Container */}
            <div
                className="relative flex items-center rounded-full p-1.5 transition-all duration-500 shadow-2xl overflow-hidden"
                style={{
                    background: 'rgba(20, 20, 20, 0.85)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.4)',
                }}
            >
                {activeMode === null ? (
                    // Default State: Show both Chat and Voice buttons
                    <>
                        <button
                            onClick={() => setActiveMode("chat")}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all hover:bg-white/10 group"
                        >
                            <MessageCircle className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                            Chat
                        </button>
                        <div className="w-[1px] h-6 bg-white/20 mx-1"></div>
                        <button
                            onClick={() => {
                                setActiveMode("voice");
                                startVoiceSession();
                            }}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all hover:bg-white/10 group"
                        >
                            <Mic className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                            <div className="flex items-center gap-1.5">
                                Voice
                                <span className="text-[9px] font-bold tracking-wider uppercase bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded border border-orange-500/30">Beta</span>
                            </div>
                        </button>
                    </>
                ) : (
                    // Active State: Show Close/End functionality
                    <div className="flex items-center">
                        {activeMode === "chat" ? (
                            <button
                                onClick={() => setActiveMode(null)}
                                className="flex items-center gap-2 px-8 py-2.5 rounded-full text-white font-medium text-sm transition-all hover:bg-white/10 group"
                            >
                                <X className="w-4 h-4 text-red-400" />
                                Close Chat
                            </button>
                        ) : (
                            <div className="flex items-center px-2">
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all hover:bg-white/10 ${isMuted ? 'text-red-400' : 'text-white'}`}
                                >
                                    {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                                    {isMuted ? "Unmute" : "Mute"}
                                </button>
                                <div className="w-[1px] h-6 bg-white/20 mx-1"></div>
                                <button
                                    onClick={() => {
                                        setActiveMode(null);
                                        stopVoiceSession();
                                    }}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-white font-medium text-sm transition-all hover:bg-white/10"
                                >
                                    <Square className="w-4 h-4 text-red-500 fill-current" />
                                    End
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
