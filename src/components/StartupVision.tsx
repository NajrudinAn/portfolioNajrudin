"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Globe2 } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

export const StartupVision = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)] -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-10 sm:p-16 rounded-3xl border border-blue-500/30 glow-blue shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-8">
            <Globe2 className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '15s' }} /> Founder Manifesto
          </div>

          <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6">
            {FOUNDER_CONTENT.vision.title}
          </h2>

          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.3] mb-8 font-sans">
            &ldquo;I don&apos;t want to build products only for myself.{" "}
            <span className="text-gradient-blue">
              I want to create communities, ecosystems, and opportunities
            </span>{" "}
            that help others build meaningful things.&rdquo;
          </blockquote>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            I believe the future belongs to <span className="text-white underline decoration-blue-500 underline-offset-4">builders, creators, founders, and communities</span> working together.
          </p>

          <div className="mt-10 pt-8 border-t border-slate-800/80 flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-xs font-bold font-mono">
              NA
            </div>
            <span className="text-sm font-mono text-slate-400">
              Najrudin Ansari · Pune, India & Global
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
