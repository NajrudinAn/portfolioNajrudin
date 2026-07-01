"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Users, Zap, BookOpen, Lightbulb } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Hammer: Hammer,
  Users: Users,
  Zap: Zap,
  BookOpen: BookOpen,
};

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 relative bg-slate-950/50 border-y border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Lightbulb className="w-3.5 h-3.5" /> Founder Principles
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {FOUNDER_CONTENT.philosophy.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal">
            The fundamental beliefs that guide my entrepreneurial journey, technical decisions, and community initiatives.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-6" />
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDER_CONTENT.philosophy.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Lightbulb;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl glass-panel p-8 flex flex-col justify-between border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-900/80 glow-blue-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Principle 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
