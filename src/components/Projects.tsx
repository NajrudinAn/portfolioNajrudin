"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Rocket, Layers, Tag } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

const statusColorMap: Record<string, { bg: string; text: string; dot: string }> = {
  Building: { bg: "bg-amber-500/10 border-amber-500/30", text: "text-amber-400", dot: "bg-amber-400" },
  Growing: { bg: "bg-emerald-500/10 border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400" },
  Active: { bg: "bg-blue-500/10 border-blue-500/30", text: "text-blue-400", dot: "bg-blue-400" },
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" /> Founder Ecosystem
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {FOUNDER_CONTENT.projects.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4" />
          </div>
          <p className="text-slate-400 text-base max-w-md font-normal">
            From SaaS automation tools to thriving founder communities, explore the ventures I&apos;m currently architecting and growing.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FOUNDER_CONTENT.projects.items.map((project, idx) => {
            const statusStyle = statusColorMap[project.status] || statusColorMap.Active;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col justify-between rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 bg-slate-900/60"
              >
                {/* Top Image Preview */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Status Overlay Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 border backdrop-blur-md ${statusStyle.bg} ${statusStyle.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot} animate-pulse`} />
                    {project.status}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                      </h3>
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white transition-all duration-200"
                          title={`Visit ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 text-xs font-mono flex items-center gap-1 group-hover:border-slate-700 transition-colors"
                        >
                          <Tag className="w-3 h-3 text-blue-400" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    {project.website ? (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full py-3 px-4 rounded-xl bg-blue-600/10 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:glow-blue-sm"
                      >
                        <span>Explore Platform</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="mt-6 w-full py-3 px-4 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-400 text-sm font-mono text-center flex items-center justify-center gap-2">
                        <Rocket className="w-4 h-4 text-amber-400 animate-bounce" />
                        <span>In Active Engineering</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
