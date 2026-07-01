"use client";

import React from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

export const Footer = () => {
  return (
    <footer className="py-16 bg-slate-950 border-t border-slate-900 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Quote */}
        <div className="mb-12">
          <blockquote className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 font-serif italic">
            &ldquo;{FOUNDER_CONTENT.footer.quote}&rdquo;
          </blockquote>
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            — Najrudin Ansari
          </div>
        </div>

        {/* Quick Bottom Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium mb-12">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#philosophy" className="hover:text-white transition-colors">Beliefs</a>
          <a href="#projects" className="hover:text-white transition-colors">Building</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
          <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Copyright & Credits */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>{FOUNDER_CONTENT.footer.copyright}</div>
          <div className="flex items-center gap-1">
            <span>Designed for Founder Impact</span>
            <span className="text-blue-500">·</span>
            <span>Pune, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
