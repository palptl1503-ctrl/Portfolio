"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export function CtaSection() {
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden bg-gradient-to-b from-[#07080c] via-[#0b0e17] to-[#07080c]">
      {/* Decorative ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
            07 // Next Step
          </span>
          <span className="h-[1px] w-8 bg-emerald-500/30" />
          <span className="font-mono text-xs text-slate-500">
            INITIATE COLLABORATION
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Let&apos;s build something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            solid together.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Whether you need a high-scale web application, an interactive frontend, or a resilient backend service, I am available to bring your vision into production.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href={profileData.resumeUrl}
            download="Pal_Patel_Resume.pdf"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-emerald-500/40 text-white font-mono font-medium text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download resume</span>
          </a>
        </div>

        {/* Status ticker */}
        <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-200/60 border border-white/10 text-xs font-mono text-slate-400">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Fast response time &bull; Usually within 24 hours</span>
        </div>
      </div>
    </section>
  );
}

