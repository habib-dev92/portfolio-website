"use client";

import { useState, useEffect, useCallback } from "react";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

function LoginForm({ onLogin }: { onLogin: (password: string) => void }) {
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-foreground mb-2">Admin</h1>
          <p className="text-sm text-zinc-500">Enter password to view messages</p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); onLogin(password); }}
          className="space-y-4"
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-foreground placeholder-zinc-700 focus:outline-none focus:border-accent/40 transition-all duration-300"
            autoFocus
          />
          <button
            type="submit"
            disabled={!password}
            className="w-full py-3 rounded-xl bg-accent text-black text-sm font-medium hover:bg-accent/90 transition-all disabled:opacity-40"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

function MessageCard({ msg }: { msg: Message }) {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(msg.createdAt).toLocaleString();

  return (
    <div
      className="rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-accent/10 transition-all cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground truncate">{msg.name}</h3>
          <p className="text-xs text-zinc-600 mt-0.5">{msg.email}</p>
        </div>
        <span className="text-[10px] text-zinc-700 whitespace-nowrap mt-0.5">{date}</span>
      </div>
      <p className={`text-sm text-zinc-400 mt-3 leading-relaxed ${expanded ? "" : "line-clamp-2"}`}>
        {msg.message}
      </p>
      {!expanded && msg.message.length > 120 && (
        <span className="text-xs text-accent/70 mt-1 inline-block">Click to read more</span>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const fetchMessages = useCallback(async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        headers: { Authorization: `Bearer ${pw}` },
      });
      if (!res.ok) {
        if (res.status === 401) {
          setError("Wrong password");
          setAuthenticated(false);
        } else {
          setError("Failed to load messages");
        }
        return;
      }
      const data = await res.json();
      setMessages(data.messages);
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
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Messages</h1>
            <p className="text-sm text-zinc-500 mt-1">
              {messages.length} message{messages.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-white/10 text-xs text-zinc-500 hover:text-foreground hover:border-white/20 transition-all"
          >
            Sign Out
          </button>
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-zinc-600 mt-4">Loading messages...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && messages.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className="text-sm text-zinc-500">No messages yet</p>
            <p className="text-xs text-zinc-700 mt-1">When someone submits the contact form, messages will appear here.</p>
          </div>
        )}

        {!loading && !error && messages.length > 0 && (
          <div className="space-y-3">
            {messages.map((msg) => (
              <MessageCard key={msg._id} msg={msg} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
