"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, GitBranch, MapPin, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export function HeroOverview() {
  const marqueeItems = [
    profileData.name.toUpperCase(),
    profileData.headlineRole.toUpperCase(),
    "NEXT.JS 15",
    "TYPESCRIPT",
    "REACT 19",
    "TAILWIND CSS",
    "POSTGRESQL",
    "DISTRIBUTED SYSTEMS",
    profileData.college.toUpperCase(),
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Small mono section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
            01 // Overview
          </span>
          <span className="h-[1px] w-12 bg-emerald-500/30" />
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            2026 Portfolio
          </span>
        </motion.div>

        {/* Big Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1]"
        >
          {profileData.headlineRole} building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            modern web systems
          </span>{" "}
          from code to deployment.
        </motion.h1>

        {/* Short intro paragraph starting with "Hi, I am Pal Patel." */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
        >
          <strong className="text-white font-semibold">Hi, I am {profileData.name}.</strong>{" "}
          {profileData.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
          >
            <span>Explore projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-emerald-500/40 text-white font-mono font-medium text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Get in touch</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
          </Link>
        </motion.div>

        {/* Three info blocks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Block 1: Education & Role */}
          <div className="p-5 rounded-2xl bg-surface-100/70 border border-white/10 hover:border-emerald-500/30 transition-all backdrop-blur-sm group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                01 // Education & Role
              </span>
              <GraduationCap className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm font-semibold text-white tracking-tight">
              {profileData.education}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {profileData.college}
            </p>
          </div>

          {/* Block 2: Work & Repositories */}
          <div className="p-5 rounded-2xl bg-surface-100/70 border border-white/10 hover:border-emerald-500/30 transition-all backdrop-blur-sm group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                02 // Work & Repositories
              </span>
              <GitBranch className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-mono text-emerald-400">
                15+
              </span>
              <span className="text-sm font-semibold text-white">
                Projects Built
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              40+ Open Source PRs & production deployments
            </p>
          </div>

          {/* Block 3: Location & Timezone */}
          <div className="p-5 rounded-2xl bg-surface-100/70 border border-white/10 hover:border-emerald-500/30 transition-all backdrop-blur-sm group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                03 // Location & Timezone
              </span>
              <MapPin className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm font-semibold text-white tracking-tight">
              {profileData.location}
            </p>
            <p className="mt-1 text-xs text-slate-400 font-mono">
              Timezone: {profileData.timezoneAbbr}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="mt-16 py-3 bg-surface-100/40 border-y border-white/10 overflow-hidden relative">
        <div className="flex w-[200%] animate-marquee select-none whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center mx-4">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-slate-400 hover:text-white transition-colors">
                {item}
              </span>
              <span className="mx-4 text-emerald-500">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

