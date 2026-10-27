"use client";

import React from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";
import Link from "next/link";

export function CapabilitiesSection() {
  return (
    <section className="py-20 border-t border-white/10 relative overflow-hidden bg-surface-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
                06 // Capabilities
              </span>
              <span className="h-[1px] w-12 bg-emerald-500/30" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Services & Scope
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-400 max-w-sm">
            High-leverage engineering services tailored for modern startups, enterprises, and ambitious digital products.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group p-7 rounded-3xl bg-surface-100/70 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    SERVICE // {service.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    PRODUCTION GRADE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="font-mono text-xs text-emerald-400/90 mt-1 mb-3">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block">
                    Key Deliverables
                  </span>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Action */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300"
                >
                  <span>Request Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

