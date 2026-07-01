"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Beliefs", href: "#philosophy" },
  { label: "Building", href: "#projects" },
  { label: "Clients", href: "#clients" },
  { label: "Community", href: "#community" },
  { label: "Timeline", href: "#timeline" },
  { label: "Skills", href: "#skills" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-navbar shadow-2xl shadow-black/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Founder Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-500/60 transition-all duration-300 glow-blue-sm">
            <span className="font-bold text-blue-400 text-lg tracking-tighter">
              NA
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm md:text-base text-slate-100 tracking-tight group-hover:text-blue-400 transition-colors">
              {FOUNDER_CONTENT.hero.name.split(" ")[0]}
              <span className="text-blue-500">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
              Founder & Builder
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 glow-blue-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-navbar border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-1 text-xs text-blue-400 font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Navigation
              </div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full text-center py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-all glow-blue-sm"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
