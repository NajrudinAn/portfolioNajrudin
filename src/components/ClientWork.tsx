"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Code2, CheckCircle } from "lucide-react";
import { FOUNDER_CONTENT } from "@/data/content";

export const ClientWork = () => {
  return (
    <section id="clients" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" /> Client Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {FOUNDER_CONTENT.clientWork.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4" />
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-normal">
            Alongside building proprietary founder ecosystems, I architect and deliver high-impact digital platforms and business solutions for real-world clients.
          </p>
        </div>

        {/* Client Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {FOUNDER_CONTENT.clientWork.items.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden bg-slate-900/60 flex flex-col justify-between"
            >
              {/* Image Screenshot Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 border border-slate-700 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-slate-200 flex items-center gap-1.5 shadow-lg">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Client Delivery</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {client.name}
                    </h3>
                    <a
                      href={client.link || "#"}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600 border border-blue-500/20 px-3 py-1.5 rounded-lg transition-all"
                    >
                      <span>Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                    {client.description}
                  </p>
                </div>

                {/* Technologies Stack */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" /> Technical Architecture
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {client.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
