"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function formatMessage(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLanguage = "";
  let listType: "ol" | "ul" | null = null;
  let listItems: React.ReactNode[] = [];

  function flushList(key: number) {
    if (listItems.length > 0) {
      const Tag = listType === "ol" ? "ol" : "ul";
      const className = listType === "ol"
        ? "list-decimal list-inside space-y-1 my-1.5 text-sm text-zinc-300 [&>li]:marker:text-zinc-500"
        : "list-disc list-inside space-y-1 my-1.5 text-sm text-zinc-300 [&>li]:marker:text-zinc-500";
      nodes.push(
        <Tag key={key} className={className}>
          {listItems}
        </Tag>
      );
      listItems = [];
      listType = null;
    }
  }

  function renderInline(line: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      const codeMatch = remaining.match(/`(.+?)`/);
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

      const boldIdx = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;
      const codeIdx = codeMatch ? remaining.indexOf(codeMatch[0]) : -1;
      const linkIdx = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;

      const filtered = [
        { idx: boldIdx >= 0 ? boldIdx : Infinity, type: "bold", match: boldMatch },
        { idx: codeIdx >= 0 ? codeIdx : Infinity, type: "code", match: codeMatch },
        { idx: linkIdx >= 0 ? linkIdx : Infinity, type: "link", match: linkMatch },
      ].filter((x) => x.idx !== Infinity);

      if (filtered.length === 0) {
        parts.push(
          <Fragment key={parts.length}>
            {remaining.replace(/^(\s*\*|-|\d+\.)\s+/, "")}
          </Fragment>
        );
        break;
      }

      const earliest = filtered.sort((a, b) => a.idx - b.idx)[0];
      const idx = earliest.idx;

      if (idx > 0) {
        parts.push(<Fragment key={parts.length}>{remaining.slice(0, idx)}</Fragment>);
      }

      if (earliest.type === "bold") {
        parts.push(
          <strong key={parts.length} className="font-semibold text-zinc-100">
            {earliest.match![1]}
          </strong>
        );
        remaining = remaining.slice(idx + earliest.match![0].length);
      } else if (earliest.type === "code") {
        parts.push(
          <code key={parts.length} className="px-1.5 py-0.5 rounded-md bg-white/5 text-accent text-xs font-mono">
            {earliest.match![1]}
          </code>
        );
        remaining = remaining.slice(idx + earliest.match![0].length);
      } else if (earliest.type === "link") {
        parts.push(
          <a key={parts.length} href={earliest.match![2]} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
            {earliest.match![1]}
          </a>
        );
        remaining = remaining.slice(idx + earliest.match![0].length);
      }
    }

    return <>{parts}</>;
  }

  let keyCounter = 0;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        flushList(keyCounter++);
        const lang = codeLanguage;
        const code = codeBuffer.join("\n");
        nodes.push(
          <div key={keyCounter++} className="my-2 rounded-lg overflow-hidden border border-white/5 text-sm">
            {lang && (
              <div className="px-3 py-1.5 bg-white/[0.03] border-b border-white/5 text-[10px] uppercase tracking-wider text-zinc-600 font-mono">
                {lang}
              </div>
            )}
            <pre className="p-3 overflow-x-auto bg-black/40 text-zinc-300 text-xs leading-relaxed font-mono">
              <code>{code}</code>
            </pre>
          </div>
        );
        codeBuffer = [];
        codeLanguage = "";
        inCodeBlock = false;
      } else {
        flushList(keyCounter++);
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (/^\s*-\s+/.test(line) || /^\s*\*\s+/.test(line)) {
      if (listType !== "ul") {
        flushList(keyCounter++);
        listType = "ul";
      }
      listItems.push(
        <li key={`li-${keyCounter++}`}>{renderInline(line)}</li>
      );
      continue;
    }

    if (/^\s*\d+[.)]\s+/.test(line)) {
      if (listType !== "ol") {
        flushList(keyCounter++);
        listType = "ol";
      }
      listItems.push(
        <li key={`li-${keyCounter++}`}>{renderInline(line)}</li>
      );
      continue;
    }

    flushList(keyCounter++);

    if (line.trim() === "") {
      nodes.push(<div key={keyCounter++} className="h-2" />);
      continue;
    }

    if (/^#{1,6}\s+/.test(line)) {
      const text = line.replace(/^#{1,6}\s+/, "");
      nodes.push(
        <p key={keyCounter++} className="text-sm font-semibold text-zinc-200 mt-3 mb-1">
          {renderInline(text)}
        </p>
      );
      continue;
    }

    nodes.push(
      <p key={keyCounter++} className="text-sm text-zinc-300 leading-relaxed">
        {renderInline(line)}
      </p>
    );
  }

  flushList(keyCounter++);

  if (inCodeBlock) {
    const code = codeBuffer.join("\n");
    nodes.push(
      <div key={keyCounter++} className="my-2 rounded-lg overflow-hidden border border-white/5 text-sm">
        <pre className="p-3 overflow-x-auto bg-black/40 text-zinc-300 text-xs leading-relaxed font-mono">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return nodes;
}

const WELCOME_MESSAGE = `Hi! I'm **Habib's AI assistant**. I can tell you all about his **skills**, **projects**, and **experience**.`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        const content = data.choices?.[0]?.message?.content || "No response";
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content },
        ]);
      } else {
        const errMsg = data.error || `Error ${res.status}`;
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: errMsg.includes("Insufficient")
              ? `I'm currently **rate-limited** in your region. Here's how to fix it:\n1. Sign up at [OpenRouter](https://openrouter.ai/keys)\n2. Add a small **$1 credit**\n3. Or configure a different model in \`.env.local\``
              : `⚠️ ${errMsg}`,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "**Connection error.** Please check your network and try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch { /* ignore */ }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] max-h-[calc(100vh-10rem)] min-h-[420px] rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/30 to-accent/5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent">
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium">AI Assistant</div>
                  <div className="text-[10px] text-zinc-600">Powered by OpenRouter</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-foreground hover:bg-white/10 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed relative group ${
                      msg.role === "user"
                        ? "bg-accent text-black rounded-br-md"
                        : "bg-white/[0.04] border border-white/[0.06] text-zinc-300 rounded-bl-md"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="space-y-0 [&_p]:my-0">
                        {formatMessage(msg.content)}
                      </div>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                    {msg.role === "assistant" && (
                      <button
                        onClick={() => copyToClipboard(msg.content, i)}
                        className="absolute -bottom-5 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] text-zinc-600 hover:text-zinc-400"
                      >
                        {copiedIndex === i ? "Copied" : "Copy"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3 text-sm">
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:0.1s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:0.2s]" />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/5 p-3 bg-white/[0.01]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my work..."
                  className="flex-1 px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:border-accent/40 focus:bg-white/[0.03] transition-all"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="px-3.5 py-2.5 bg-accent text-black rounded-xl text-sm font-medium hover:bg-accent-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2.5 2.5L14 8 2.5 13.5V9.5L10 8 2.5 6.5z" />
                  </svg>
                </button>
              </div>
              <p className="text-[10px] text-zinc-700 text-center mt-2">
                AI may produce inaccurate information
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-black shadow-lg hover:bg-accent-dark transition-all flex items-center justify-center hover:scale-105 active:scale-95"
        aria-label="Toggle AI Chat"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1C4.14 1 1 4.14 1 8c0 1.38.44 2.66 1.19 3.69L1 15l3.31-1.19A6.96 6.96 0 008 15c3.86 0 7-3.14 7-7s-3.14-7-7-7zm0 13c-1.12 0-2.18-.28-3.11-.78l-.22-.13-2.02.74.74-2.02-.13-.22A5.96 5.96 0 012 8c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6zm2-5H6V7h4v2z" />
          </svg>
        )}
      </button>
    </>
  );
}
