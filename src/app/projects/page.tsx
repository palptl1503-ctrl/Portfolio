"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, Github, ExternalLink, Filter } from "lucide-react";
import { projectsData } from "@/data/projects";

const categories = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
  "Cloud / DevOps",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
              Index // Projects
            </span>
            <span className="h-[1px] w-12 bg-emerald-500/30" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered Works & Projects
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            A comprehensive archive of production applications, distributed backend services, and open-source tooling built by Pal Patel.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    active
                      ? "bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      : "bg-surface-100 text-slate-400 hover:text-white hover:bg-surface-50 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-surface-100 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-sm font-mono text-slate-400">
              No projects found matching &quot;{searchQuery}&quot; in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 hover:bg-white/10"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const projectNum = String(project.order).padStart(2, "0");
                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="group rounded-3xl bg-surface-100/70 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:-translate-y-1"
                  >
                    <div>
                      {/* Image Preview */}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="relative block h-52 w-full overflow-hidden bg-surface-200"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />
                        
                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="font-mono text-xs font-bold text-white/80 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm">
                            /{projectNum}
                          </span>
                        </div>
                      </Link>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="text-[11px] font-mono text-slate-500 mb-1">
                          {project.year} &bull; {project.role}
                        </div>

                        <Link
                          href={`/projects/${project.slug}`}
                          className="block text-xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight"
                        >
                          {project.title}
                        </Link>

                        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                          {project.tagline}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                              +{project.techStack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider"
                      >
                        <span>Case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live site for ${project.title}`}
                            className="p-2 rounded-lg bg-surface-200 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="p-2 rounded-lg bg-surface-200 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

