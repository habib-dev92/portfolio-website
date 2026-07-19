"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

function LoginForm({ onLogin, error, clearError }: { onLogin: (password: string) => void; error: string; clearError: () => void }) {
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#0B1121] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm relative"
      >
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/5 blur-[60px]" />

          <div className="text-center mb-8 relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted mt-1">Enter your password to continue</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(password); }} className="space-y-4 relative">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-red-500/5 border border-red-500/15"
              >
                <svg className="w-3.5 h-3.5 text-red-400/70 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span className="text-xs text-red-400/80">{error}</span>
              </motion.div>
            )}
            <div className="relative group">
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); clearError(); }}
                placeholder="Password"
                className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:bg-white/[0.05] transition-all duration-300 peer ${error ? "border-red-500/25 focus:border-red-500/40" : "border-white/10 focus:border-accent/40"}`}
                autoFocus
              />
              <div className={`absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-accent/40 via-accent/20 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left ${error ? "scale-x-100 from-red-500/40 via-red-500/20" : ""}`} />
            </div>
            <button
              type="submit"
              disabled={!password}
              className="group relative w-full py-3 rounded-xl overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-accent" />
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-black font-medium text-sm flex items-center justify-center gap-2">
                Sign In
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function MessageCard({ msg, index }: { msg: Message; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(msg.createdAt);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const timeAgo = diffMins < 1 ? "Just now"
    : diffMins < 60 ? `${diffMins}m ago`
    : diffMins < 1440 ? `${Math.floor(diffMins / 60)}h ago`
    : date.toLocaleDateString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:border-accent/10 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-accent">
              {msg.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-foreground truncate">{msg.name}</h3>
              {diffMins < 60 && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0">
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
                </span>
              )}
            </div>
            <p className="text-xs text-muted/60 mt-0.5 truncate">{msg.email}</p>
          </div>
        </div>
        <span className="text-[10px] text-muted/40 whitespace-nowrap shrink-0 mt-1">{timeAgo}</span>
      </div>
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : "3rem" }}
          className="overflow-hidden mt-3"
        >
          <p className={`text-sm text-muted/80 leading-relaxed ${expanded ? "" : "line-clamp-2"}`}>
            {msg.message}
          </p>
        </motion.div>
      </AnimatePresence>
      {!expanded && msg.message.length > 120 && (
        <span className="text-[11px] text-accent/60 hover:text-accent mt-2 inline-block transition-colors">
          Click to read more
        </span>
      )}
    </motion.div>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [visitCount, setVisitCount] = useState<number | null>(null);

  const fetchMessages = useCallback(async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const [msgRes, visitRes] = await Promise.all([
        fetch("/api/contact", { headers: { Authorization: `Bearer ${pw}` } }),
        fetch("/api/visits", { headers: { Authorization: `Bearer ${pw}` } }),
      ]);
      if (!msgRes.ok) {
        if (msgRes.status === 401) {
          setError("Wrong password");
          setAuthenticated(false);
        } else {
          setError("Failed to load data");
        }
        return;
      }
      const msgData = await msgRes.json();
      setMessages(msgData.messages);
      if (visitRes.ok) {
        const visitData = await visitRes.json();
        setVisitCount(visitData.count);
      }
      setAuthenticated(true);
      setPassword(pw);
    } catch {
      setError("Connection error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_pw");
    if (stored) fetchMessages(stored);
  }, [fetchMessages]);

  useEffect(() => {
    if (!authenticated || !password) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/visits", {
          headers: { Authorization: `Bearer ${password}` },
        });
        if (res.ok) {
          const data = await res.json();
          setVisitCount(data.count);
        }
      } catch {
        /* ignore */
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [authenticated, password]);

  const handleLogin = (pw: string) => {
    sessionStorage.setItem("admin_pw", pw);
    fetchMessages(pw);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_pw");
    setAuthenticated(false);
    setPassword("");
    setMessages([]);
  };

  if (!authenticated) {
    return <LoginForm onLogin={handleLogin} error={error} clearError={() => setError("")} />;
  }

  return (
    <div className="min-h-screen bg-[#0B1121] relative pt-24">
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-accent/[0.01] to-transparent pointer-events-none" />
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent pointer-events-none" />

      <div className="relative px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3.5">
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full">
                    <span className="absolute inset-0 bg-accent rounded-full animate-ping opacity-40" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground tracking-tight">Dashboard</h1>
                  <p className="text-xs text-muted/50 mt-0.5">Monitor your portfolio activity</p>
                </div>
              </div>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleLogout}
              className="self-start sm:self-auto group px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-muted/60 hover:text-foreground hover:border-white/20 hover:bg-white/[0.04] transition-all flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
              Sign Out
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 mb-10"
          >
            <div className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-accent/[0.015] to-transparent p-6 overflow-hidden hover:border-accent/15 transition-all duration-500">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/5 blur-[60px] group-hover:bg-accent/10 transition-all duration-700" />
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
              <div className="relative flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-500">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <span className="text-[10px] text-muted/40 uppercase tracking-widest font-medium">Total</span>
              </div>
              <div className="relative">
                <div className="text-3xl font-bold text-foreground tabular-nums tracking-tight">
                  {messages.length}
                </div>
                <p className="text-xs text-muted/50 mt-1">Messages received</p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/40 via-accent/20 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <div className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-primary/[0.015] to-transparent p-6 overflow-hidden hover:border-primary/15 transition-all duration-500">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-[60px] group-hover:bg-primary/10 transition-all duration-700" />
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
              <div className="relative flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-500">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[10px] text-muted/40 uppercase tracking-widest font-medium">Lifetime</span>
              </div>
              <div className="relative">
                <div className="text-3xl font-bold text-foreground tabular-nums tracking-tight">
                  {visitCount !== null ? (
                    <span>{visitCount.toLocaleString()}</span>
                  ) : (
                    <span className="text-muted/40">—</span>
                  )}
                </div>
                <p className="text-xs text-muted/50 mt-1">Website visits</p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-glow-pulse" />
                <span className="text-xs text-muted/70 uppercase tracking-wider font-medium">Messages</span>
                {messages.length > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/80 font-medium tabular-nums">{messages.length}</span>
                )}
              </div>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-7 h-7 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                <p className="text-sm text-muted/60 mt-4">Loading messages...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-20">
                <div className="w-14 h-14 rounded-full bg-red-500/5 border border-red-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-sm text-red-400/80">{error}</p>
              </div>
            )}

            {!loading && !error && messages.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-muted/30" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <p className="text-sm text-muted/60">No messages yet</p>
                <p className="text-xs text-muted/30 mt-1">When someone submits the contact form, messages will appear here.</p>
              </div>
            )}

            {!loading && !error && messages.length > 0 && (
              <div className="space-y-2">
                {messages.map((msg, i) => (
                  <MessageCard key={msg._id} msg={msg} index={i} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
