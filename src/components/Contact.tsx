"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, Sparkles, Send, Globe } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

// Clean embedded SVGs for social brands
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Mail: Mail,
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(FOUNDER_CONTENT.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Founder Collaboration / Proposal from ${formData.name}`);
    const body = encodeURIComponent(`Hi Najrudin,\n\nMy name is ${formData.name} (${formData.email}).\n\nHere is my message / proposal:\n--------------------------------------------------\n${formData.message}\n--------------------------------------------------\n\nBest regards,\n${formData.name}`);

    // Open user's email client pre-filled
    window.location.href = `mailto:${FOUNDER_CONTENT.contact.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Connection & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Start a Conversation
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                {FOUNDER_CONTENT.contact.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-6" />
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
                {FOUNDER_CONTENT.contact.subtitle}
              </p>
            </div>

            {/* Email Quick Copy Box */}
            <div className="p-4 rounded-2xl glass-panel border border-slate-800 flex items-center justify-between gap-4 bg-slate-900/80">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Direct Email
                  </div>
                  <div className="text-sm sm:text-base font-medium text-white truncate font-mono">
                    {FOUNDER_CONTENT.contact.email}
                  </div>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 shrink-0 glow-blue-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Cards */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
                Connect Across The Web
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FOUNDER_CONTENT.contact.links.map((link) => {
                  const Icon = iconMap[link.icon] || Globe;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl glass-panel border border-slate-800/80 hover:border-blue-500/50 flex items-center justify-between text-slate-300 hover:text-white hover:bg-slate-900 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm font-medium">{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Founder Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-slate-800/80 bg-slate-900/60 shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-8 font-normal">
                Got a startup idea, looking for a founder collaboration, or want to invite me to an event? Let&apos;s talk.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-2">
                    <Send className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Opening Your Email Client...</h4>
                  <p className="text-slate-300 text-sm font-normal max-w-md mx-auto leading-relaxed">
                    Your default email app (Gmail, Apple Mail, Outlook, etc.) should now open with your proposal pre-filled to <span className="font-mono text-blue-400 font-medium">{FOUNDER_CONTENT.contact.email}</span>.
                  </p>
                  <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        const subject = encodeURIComponent(`Founder Collaboration / Proposal from ${formData.name}`);
                        const body = encodeURIComponent(`Hi Najrudin,\n\nMy name is ${formData.name} (${formData.email}).\n\nHere is my message / proposal:\n--------------------------------------------------\n${formData.message}\n--------------------------------------------------\n\nBest regards,\n${formData.name}`);
                        window.location.href = `mailto:${FOUNDER_CONTENT.contact.email}?subject=${subject}&body=${body}`;
                      }}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
                    >
                      Click Here to Re-Open Mail App
                    </button>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
                    >
                      Edit Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@startup.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Message / Proposal
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Najrudin, I'm reaching out because I'd love to collaborate on..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold text-base flex items-center justify-center gap-2 glow-blue transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
