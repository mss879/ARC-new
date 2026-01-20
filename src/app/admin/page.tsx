'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { LogOut, RefreshCw, MessageSquare, Calendar, User, AlignLeft } from 'lucide-react';

interface ChatLog {
    id: string;
    created_at: string;
    ip_address: string;
    user_location: string | null;
    messages: any[];
    metadata: any;
}

export default function AdminDashboard() {
    const [logs, setLogs] = useState<ChatLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLog, setSelectedLog] = useState<ChatLog | null>(null);
    const router = useRouter();

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            router.push('/admin/login');
        } else {
            fetchLogs();
        }
    };

    const fetchLogs = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('chat_logs')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching logs:', error);
        } else {
            setLogs(data || []);
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="border-b border-white/10 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#FF4925]/20 rounded-full flex items-center justify-center">
                                <MessageSquare className="w-4 h-4 text-[#FF4925]" />
                            </div>
                            <span className="font-bold text-lg">ARC Admin</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={fetchLogs}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                title="Refresh Logs"
                            >
                                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors text-red-400 hover:text-red-300"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6 flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-bold mb-1">Chat Logs</h1>
                        <p className="text-gray-400 text-sm">View and analyze AI conversations</p>
                    </div>
                    <div className="text-gray-400 text-sm">
                        Total Logs: <span className="text-white font-mono">{logs.length}</span>
                    </div>
                </div>

                {loading && logs.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">Loading logs...</div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* List View */}
                        <div className="lg:col-span-1 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden flex flex-col max-h-[calc(100vh-12rem)]">
                            <div className="overflow-y-auto custom-scrollbar">
                                {logs.map((log) => (
                                    <button
                                        key={log.id}
                                        onClick={() => setSelectedLog(log)}
                                        className={`w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors ${selectedLog?.id === log.id ? 'bg-[#FF4925]/10 border-l-2 border-l-[#FF4925]' : 'border-l-2 border-l-transparent'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-mono text-gray-500 truncate" title={log.id}>
                                                {log.id.slice(0, 8)}...
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {new Date(log.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-300 font-medium mb-1 truncate">
                                            {/* Try to find user name explicitly if captured, else IP */}
                                            User ({log.ip_address})
                                        </div>
                                        <div className="text-xs text-gray-500 line-clamp-2">
                                            {log.messages && log.messages.length > 0
                                                ? log.messages[log.messages.length - 1].content
                                                : 'No messages'}
                                        </div>
                                    </button>
                                ))}
                                {logs.length === 0 && (
                                    <div className="p-8 text-center text-gray-500 text-sm">No logs found</div>
                                )}
                            </div>
                        </div>

                        {/* Detail View */}
                        <div className="lg:col-span-2 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden flex flex-col h-[calc(100vh-12rem)]">
                            {selectedLog ? (
                                <>
                                    <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm font-medium">{formatDate(selectedLog.created_at)}</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <User className="w-3 h-3" />
                                                    <span>IP: {selectedLog.ip_address}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <AlignLeft className="w-3 h-3" />
                                                    <span>{selectedLog.messages?.length || 0} messages</span>
                                                </div>
                                            </div>
                                        </div>
                                        {selectedLog.metadata && (
                                            <div className="text-xs text-gray-500 font-mono text-right">
                                                <div>Model: {selectedLog.metadata.model}</div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                                        {Array.isArray(selectedLog.messages) ? (
                                            selectedLog.messages.map((msg, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                                                >
                                                    <div
                                                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.role === 'assistant'
                                                            ? 'bg-zinc-800 text-gray-200 rounded-tl-none'
                                                            : 'bg-[#FF4925] text-white rounded-tr-none'
                                                            }`}
                                                    >
                                                        <div className="mb-1 text-[10px] opacity-50 uppercase tracking-wider font-bold">
                                                            {msg.role}
                                                        </div>
                                                        <div className="whitespace-pre-wrap">{msg.content}</div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-red-400">Invalid message format</div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                    <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                                    <p>Select a conversation to view details</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
