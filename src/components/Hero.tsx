"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Users, Code, Globe, ShieldCheck } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

const FLOATING_BADGES = [
  { icon: Rocket, label: "Startup Founder", top: "15%", left: "5%", delay: 0 },
  { icon: Users, label: "Community Builder", top: "25%", right: "8%", delay: 1.2 },
  { icon: Code, label: "Product Builder", bottom: "25%", left: "8%", delay: 2.4 },
  { icon: Globe, label: "Ecosystem Creator", bottom: "18%", right: "6%", delay: 0.8 },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-blue-500/10 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-2/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Floating Animated Badges (Hidden on very small screens) */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden md:block">
        {FLOATING_BADGES.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: badge.delay },
                y: {
                  repeat: Infinity,
                  duration: 5 + idx,
                  ease: "easeInOut",
                  delay: badge.delay,
                },
              }}
              style={{
                top: badge.top,
                bottom: badge.bottom,
                left: badge.left,
                right: badge.right,
              }}
              className="absolute glass-panel px-3.5 py-2 rounded-full flex items-center gap-2 border border-slate-700/50 shadow-xl bg-slate-900/60 backdrop-blur-md"
            >
              <div className="p-1 rounded-full bg-blue-500/20 text-blue-400">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-medium text-slate-300 tracking-tight">
                {badge.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        {/* Founder Photo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-block mb-8"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-600 via-blue-400 to-slate-800 glow-blue">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
              <Image
                src={FOUNDER_CONTENT.hero.photoPortrait}
                alt={FOUNDER_CONTENT.hero.name}
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* Status Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/90 border border-blue-500/40 text-slate-200 px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 absolute" />
            <span className="font-semibold text-emerald-400">Active</span> · Building Ecosystems
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Aspiring Entrepreneur & Founder
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            <span className="block text-slate-300 font-medium text-2xl sm:text-3xl mb-2 font-mono">
              Hi, I&apos;m {FOUNDER_CONTENT.hero.name}.
            </span>
            Building Products, Communities, and{" "}
            <span className="text-gradient-blue">Opportunities.</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {FOUNDER_CONTENT.hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={FOUNDER_CONTENT.hero.ctaPrimary.href}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-base flex items-center justify-center gap-2 glow-blue hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{FOUNDER_CONTENT.hero.ctaPrimary.label}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={FOUNDER_CONTENT.hero.ctaSecondary.href}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-200 hover:text-white font-semibold text-base flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{FOUNDER_CONTENT.hero.ctaSecondary.label}</span>
          </a>
        </motion.div>

        {/* Trust / Positioning Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-500 text-xs sm:text-sm font-mono"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>Not a Developer Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>B.Tech Computer Science</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Founder of Printizo & LinkMyDream</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
