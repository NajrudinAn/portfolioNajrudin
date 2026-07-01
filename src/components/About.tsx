"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Target, Compass, Heart, CheckCircle2 } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" /> Founder Story
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {FOUNDER_CONTENT.about.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder Photo in Setup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-700/60 p-2 shadow-2xl glow-blue-sm">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src={FOUNDER_CONTENT.hero.photoSetup}
                  alt="Najrudin Ansari Building"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Aspiring Entrepreneur
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Pune, India & Global Ecosystem
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative back blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl -z-10 rounded-3xl" />
          </motion.div>

          {/* Right Column: Founder Narrative & Passions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p className="text-xl sm:text-2xl font-medium text-white leading-snug border-l-2 border-blue-500 pl-4">
              {FOUNDER_CONTENT.about.intro}
            </p>

            <p className="text-slate-300">
              {FOUNDER_CONTENT.about.mission}
            </p>

            {/* Passions Grid */}
            <div className="pt-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-blue-400" /> Core Passions & Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {FOUNDER_CONTENT.about.passions.map((passion) => (
                  <span
                    key={passion}
                    className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    {passion}
                  </span>
                ))}
              </div>
            </div>

            {/* Long-term Vision Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 via-slate-900/60 to-slate-900/40 border border-blue-500/30 glow-blue-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 shrink-0 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-1 font-semibold">
                    Long-Term Vision
                  </h4>
                  <p className="text-white font-medium text-base sm:text-lg leading-relaxed">
                    &ldquo;{FOUNDER_CONTENT.about.vision}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
