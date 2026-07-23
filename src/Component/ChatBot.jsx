import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! I'm Ozair's AI assistant. Ask me about skills, projects, or contact details. I can also share his website links like Glimpse, Starbucks Clone, and Prime Inspire.",
        },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const bottomRef = useRef(null);
    const quickPrompts = [
        'Show me his game links',
        'Show me his website links',
        'What are his top skills?',
        'How can I contact him?',
    ];

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        const updateViewport = () => setIsMobile(window.innerWidth <= 576);
        updateViewport();
        window.addEventListener('resize', updateViewport);
        return () => window.removeEventListener('resize', updateViewport);
    }, []);

    const sendMessage = async (forcedText) => {
        if (loading) return;

        const cleanInput = (forcedText ?? input).trim();
        if (!cleanInput) return;

        const newMessages = [...messages, { role: 'user', content: cleanInput }];
        setMessages(newMessages);
        if (!forcedText) {
            setInput('');
        }
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || 'Chat request failed');
            }

            setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
        } catch {
            setMessages([...newMessages, { role: 'assistant', content: "Sorry, something went wrong." }]);
        } finally {
            setLoading(false);
        }
    };

    const renderMessageContent = (text) => {
        const input = String(text || '');
        const pattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|<?(https?:\/\/[^\s<>"']+|www\.[^\s<>"']+)>?/gi;

        const nodes = [];
        let lastIndex = 0;
        let match;
        let key = 0;

        while ((match = pattern.exec(input)) !== null) {
            if (match.index > lastIndex) {
                nodes.push(<span key={`t-${key++}`}>{input.slice(lastIndex, match.index)}</span>);
            }

            const markdownLabel = match[1];
            const markdownUrl = match[2];
            const rawUrl = markdownUrl || match[3] || '';

            const cleanUrl = rawUrl.replace(/^<+/, '').replace(/>+$/, '').replace(/[.,;:!?]+$/, '');
            const href = cleanUrl.startsWith('http') ? cleanUrl : `https://${cleanUrl}`;
            const linkText = markdownLabel || cleanUrl;

            nodes.push(
                <a
                    key={`l-${key++}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#7ab6ff', textDecoration: 'underline', wordBreak: 'break-all' }}
                >
                    {linkText}
                </a>
            );

            lastIndex = pattern.lastIndex;
        }

        if (lastIndex < input.length) {
            nodes.push(<span key={`t-${key++}`}>{input.slice(lastIndex)}</span>);
        }

        return nodes;
    };

    return (
        <div style={{ position: 'fixed', bottom: isMobile ? 12 : 18, right: isMobile ? 12 : 18, zIndex: 1000, fontFamily: 'inherit' }}>
            <AnimatePresence mode="wait">
                {open ? (
                    <motion.div
                        key="chat-window"
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 18, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        style={{
                            width: isMobile ? 'calc(100vw - 24px)' : 'min(380px, 92vw)',
                            height: isMobile ? 'calc(100vh - 24px)' : 'min(560px, 78vh)',
                            background: 'linear-gradient(180deg, #121622 0%, #0f111a 100%)',
                            border: '1px solid rgba(148,163,184,0.2)',
                            borderRadius: 18,
                            boxShadow: '0 18px 44px rgba(0,0,0,0.55)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                padding: '14px 14px',
                                borderBottom: '1px solid rgba(148,163,184,0.16)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'rgba(22,25,36,0.88)',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 8,
                                        background: 'linear-gradient(135deg,#3b82f6,#2563eb)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: '#fff',
                                    }}
                                >
                                    O.K
                                </div>
                                <div>
                                    <strong style={{ color: '#fff', fontSize: 14, lineHeight: 1 }}>Ask about Ozair</strong>
                                    <div style={{ color: '#94a3b8', fontSize: 11, marginTop: 2 }}>
                                        <span style={{ color: '#22c55e' }}>●</span> Online assistant
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                style={{ border: 'none', background: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 10, background: 'rgba(9,11,18,0.42)' }}>
                            {messages.length === 1 && !loading && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {quickPrompts.map((prompt) => (
                                        <button
                                            key={prompt}
                                            onClick={() => sendMessage(prompt)}
                                            style={{
                                                border: '1px solid rgba(59,130,246,0.35)',
                                                background: 'rgba(59,130,246,0.14)',
                                                color: '#bfdbfe',
                                                borderRadius: 999,
                                                padding: '6px 10px',
                                                fontSize: 12,
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.16, delay: Math.min(i * 0.02, 0.15) }}
                                    style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}
                                >
                                    <div style={{ maxWidth: '84%', width: m.role === 'assistant' ? 'min(280px, 84%)' : 'auto' }}>
                                        <div
                                            style={{
                                                display: 'inline-block',
                                                padding: '9px 12px',
                                                borderRadius: 12,
                                                fontSize: 13.5,
                                                lineHeight: 1.5,
                                                background: m.role === 'user' ? 'linear-gradient(135deg,#3b82f6,#2563eb)' : 'rgba(30,36,54,0.95)',
                                                color: '#fff',
                                                border: m.role === 'user' ? 'none' : '1px solid rgba(148,163,184,0.2)',
                                                boxShadow: m.role === 'user' ? '0 8px 16px rgba(37,99,235,0.24)' : 'none',
                                            }}
                                        >
                                            {renderMessageContent(m.content)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {loading && (
                                <div style={{ color: '#94a3b8', fontSize: 12.5, paddingLeft: 4 }}>
                                    Thinking<span style={{ letterSpacing: 2 }}>...</span>
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <div style={{ padding: 10, borderTop: '1px solid rgba(148,163,184,0.16)', display: 'flex', gap: 8, background: 'rgba(22,25,36,0.92)' }}>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        sendMessage();
                                    }
                                }}
                                placeholder="Ask about my work..."
                                style={{
                                    flex: 1,
                                    padding: '10px 12px',
                                    background: '#1b2133',
                                    border: '1px solid rgba(148,163,184,0.22)',
                                    borderRadius: 10,
                                    color: '#fff',
                                    fontSize: 13.5,
                                    outline: 'none',
                                }}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={loading || !input.trim()}
                                style={{
                                    minWidth: 74,
                                    padding: '9px 12px',
                                    background: 'linear-gradient(135deg,#3b82f6,#2563eb)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 10,
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    fontSize: 13.5,
                                    fontWeight: 600,
                                    opacity: loading || !input.trim() ? 0.6 : 1,
                                }}
                            >
                                {loading ? '...' : 'Send'}
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        key="chat-fab"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        whileHover={{ y: -2, boxShadow: '0 12px 28px rgba(37,99,235,0.5)' }}
                        whileTap={{ scale: 0.96 }}
                        transition={{
                            opacity: { duration: 0.18 },
                            scale: { duration: 0.18 },
                            y: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        onClick={() => setOpen(true)}
                        style={{
                            width: isMobile ? 56 : 60,
                            height: isMobile ? 56 : 60,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg,#3b82f6,#2563eb)',
                            color: '#fff',
                            border: 'none',
                            fontSize: isMobile ? 22 : 24,
                            cursor: 'pointer',
                            boxShadow: '0 8px 24px rgba(37,99,235,0.45)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-message-circle-more-icon lucide-message-circle-more"
                        >
                            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                            <path d="M8 12h.01" />
                            <path d="M12 12h.01" />
                            <path d="M16 12h.01" />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
