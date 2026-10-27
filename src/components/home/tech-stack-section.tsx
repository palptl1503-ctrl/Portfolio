"use client";

import React from "react";
import { Layers, Terminal, Sparkles } from "lucide-react";
import { skillCategories } from "@/data/skills";

export function TechStackSection() {
  return (
    <section className="py-20 border-t border-white/10 relative overflow-hidden bg-surface-400/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
                04 // Technical Stack
              </span>
              <span className="h-[1px] w-12 bg-emerald-500/30" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools & Architecture Layers
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-400 max-w-sm">
            Curated 5-layer engineering stack focused on developer velocity, type-safety, and rock-solid production reliability.
          </p>
        </div>

        {/* 5 Numbered Layers */}
        <div className="space-y-4">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="group p-5 sm:p-6 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                {/* Layer Number & Name */}
                <div className="lg:col-span-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-surface-200 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 shrink-0">
                    {category.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400 hidden sm:block">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Pill Chips */}
                <div className="lg:col-span-8 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                        skill.highlight
                          ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/50"
                          : "bg-surface-200/80 text-slate-300 border border-white/10 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

