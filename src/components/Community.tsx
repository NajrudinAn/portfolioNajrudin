"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Wrench, Code, Coffee, GraduationCap, Globe, MapPin, Sparkles } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Users: Users,
  Wrench: Wrench,
  Code: Code,
  Coffee: Coffee,
  GraduationCap: GraduationCap,
  Globe: Globe,
};

export const Community = () => {
  return (
    <section id="community" className="py-24 relative bg-slate-950/60 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" /> Ecosystem Initiatives
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {FOUNDER_CONTENT.community.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4" />
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mt-4 font-normal">
              {FOUNDER_CONTENT.community.description}
            </p>
          </div>

          {/* Locations Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {FOUNDER_CONTENT.community.locations.map((loc) => (
              <div
                key={loc}
                className="px-4 py-2 rounded-xl glass-panel border border-blue-500/30 text-blue-400 text-sm font-mono font-semibold flex items-center gap-2 shadow-lg"
              >
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {FOUNDER_CONTENT.community.initiatives.map((item, idx) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl glass-panel border border-slate-800/80 hover:border-blue-500/50 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:bg-slate-900/90 glow-blue-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Community Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900/80 to-indigo-950/40 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 glow-blue-sm"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white tracking-tight">
                Connect via LinkMyDream
              </h4>
              <p className="text-slate-400 text-sm font-normal">
                Not a platform community—it is just to connect to everyone! Apply for connection to collaborate and grow together.
              </p>
            </div>
          </div>
          <a
            href="https://linkmydream.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shrink-0 glow-blue-sm"
          >
            <span>Apply for Connection</span>
            <Globe className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
