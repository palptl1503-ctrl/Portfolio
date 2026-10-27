"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export function FeaturedWorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const toggleMobileExpand = (idx: number) => {
    setExpandedMobile(expandedMobile === idx ? null : idx);
  };

  return (
    <section className="py-20 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
                05 // Featured Work
              </span>
              <span className="h-[1px] w-12 bg-emerald-500/30" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Case Studies
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>View all projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Project Case-Study Rows */}
        <div className="relative divide-y divide-white/10 border-y border-white/10">
          {projectsData.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            const isExpanded = expandedMobile === idx;
            const rowNumber = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={project.slug}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative transition-all duration-300"
              >
                {/* Desktop and Mobile Container */}
                <div className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Number, Tag, Title */}
                  <div className="flex items-start md:items-center gap-4 sm:gap-6 flex-1">
                    <span className="font-mono text-sm sm:text-base font-bold text-slate-500 group-hover:text-emerald-400 transition-colors pt-0.5 md:pt-0">
                      /{rowNumber}
                    </span>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-slate-300">
                          {project.category}
                        </span>
                        <span className="hidden sm:inline font-mono text-xs text-slate-500">
                          {project.year} : {project.role}
                        </span>
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="block text-lg sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight focus:outline-none"
                      >
                        {project.title}
                      </Link>

                      <p className="text-xs sm:text-sm text-slate-400 line-clamp-1 max-w-xl">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Year:Role (mobile), Tech stack, Detail Link */}
                  <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0">
                    <div className="hidden lg:flex items-center gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-surface-200 text-[11px] font-mono text-slate-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Expand Toggle / Desktop Link */}
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-slate-300 group-hover:text-white group-hover:border-emerald-500/50 transition-colors"
                      >
                        <span>Case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <button
                        onClick={() => toggleMobileExpand(idx)}
                        className="md:hidden flex items-center gap-1 text-xs font-mono text-emerald-400 py-1"
                      >
                        <span>{isExpanded ? "Hide" : "Details"}</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Expanded Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:hidden pb-6 pt-2 space-y-4"
                    >
                      <div className="relative h-44 w-full rounded-xl overflow-hidden border border-white/10">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {project.overview}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-emerald-300 border border-emerald-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex-1 text-center py-2 rounded-lg bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider"
                        >
                          Read Case Study
                        </Link>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-surface-100 border border-white/10 text-white"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-surface-100 border border-white/10 text-white"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Hover Floating Preview Card */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed pointer-events-none z-40 right-16 top-1/2 -translate-y-1/2 w-80 rounded-2xl overflow-hidden border border-emerald-500/40 bg-surface-100 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={projectsData[hoveredIndex].image}
                  alt={projectsData[hoveredIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent" />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                    {projectsData[hoveredIndex].category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {projectsData[hoveredIndex].year}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {projectsData[hoveredIndex].title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {projectsData[hoveredIndex].tagline}
                </p>
                <div className="pt-1 flex flex-wrap gap-1">
                  {projectsData[hoveredIndex].techStack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

