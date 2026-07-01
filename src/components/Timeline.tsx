"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, Sparkles, CheckCircle2, Rocket } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
            <History className="w-3.5 h-3.5" /> Entrepreneurial Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {FOUNDER_CONTENT.timeline.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal">
            The progression from writing my first lines of code in school to architecting venture ecosystems for founders worldwide.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-6" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-blue-500/30 ml-4 sm:ml-32 space-y-12">
          {FOUNDER_CONTENT.timeline.items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-4 sm:-left-5 top-0 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  item.isFuture
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 border-blue-400 text-white glow-blue shadow-lg scale-110"
                    : "bg-slate-900 border-blue-500/50 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400"
                }`}
              >
                {item.isFuture ? (
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </div>

              {/* Phase / Year Tag (Desktop floating left) */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span
                  className={`text-xs font-mono font-bold tracking-wider uppercase px-2 py-1 rounded ${
                    item.isFuture
                      ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      : "text-slate-500 group-hover:text-blue-400 transition-colors"
                  }`}
                >
                  {item.year}
                </span>
              </div>

              {/* Card Box */}
              <div
                className={`rounded-2xl glass-panel p-6 sm:p-8 border transition-all duration-300 ${
                  item.isFuture
                    ? "bg-gradient-to-br from-blue-900/30 via-slate-900/80 to-indigo-950/40 border-blue-500/50 glow-blue-sm"
                    : "bg-slate-900/60 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/80"
                }`}
              >
                {/* Phase Tag for Mobile */}
                <span className="sm:hidden inline-block px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono uppercase tracking-wider mb-2">
                  {item.year}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                  <span>{item.title}</span>
                  {item.isFuture && <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
