"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Sparkles, Cloud, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-emerald-400" />,
    Cloud: <Cloud className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section className="py-20 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
            03 // About
          </span>
          <span className="h-[1px] w-12 bg-emerald-500/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Bio Paragraph & Link to /about */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Engineering with precision, high performance, and relentless curiosity.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {profileData.fullBio[0]}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {profileData.fullBio[1]}
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Read detailed background</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Three Feature Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {profileData.focusAreas.map((area, idx) => (
              <div
                key={area.title}
                className="group relative p-6 rounded-2xl bg-surface-100/80 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-surface-200 border border-white/10 group-hover:border-emerald-500/30 transition-colors shrink-0">
                    {iconMap[area.iconName] || <Terminal className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-500 font-semibold">
                        // 0{idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

