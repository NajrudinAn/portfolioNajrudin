"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Database, Cloud, Zap, CheckCircle2 } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Terminal,
  Backend: Cpu,
  Database: Database,
  "Cloud & DevOps": Cloud,
  "Founder & Other": Zap,
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" /> Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {FOUNDER_CONTENT.skills.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4" />
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-normal">
            A fusion of modern software engineering architecture, product design sensibilities, and hands-on startup execution skills.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOUNDER_CONTENT.skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.name] || Zap;
            const isFounderCat = cat.name.includes("Founder");

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl glass-panel p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isFounderCat
                    ? "bg-gradient-to-br from-blue-900/20 via-slate-900/80 to-indigo-950/40 border-blue-500/50 glow-blue-sm md:col-span-2 lg:col-span-1"
                    : "bg-slate-900/60 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/80"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isFounderCat
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Skills Tags (No progress bars) */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2.5 rounded-xl font-mono text-sm font-semibold flex items-center gap-2 transition-all duration-200 transform hover:-translate-y-0.5 ${
                          isFounderCat
                            ? "bg-blue-600/20 border border-blue-500/40 text-blue-200 hover:bg-blue-600 hover:text-white glow-blue-sm"
                            : "bg-slate-950 border border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-blue-400"
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isFounderCat ? "text-blue-400" : "text-blue-500"}`} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Category 0{idx + 1}</span>
                  <span>{cat.skills.length} Capabilities</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
