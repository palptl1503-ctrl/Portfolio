"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RotateCw, ShieldCheck, Cpu, MapPin, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

export function IdentityCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  const techChips = [
    "Next.js 15",
    "TypeScript",
    "React 19",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Tailwind CSS",
  ];

  return (
    <section className="py-20 border-t border-white/10 relative overflow-hidden bg-surface-300/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
                02 // Identification
              </span>
              <span className="h-[1px] w-12 bg-emerald-500/30" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Developer Identity Card
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-400 max-w-sm">
            Interactive dual-sided credentials. Click, tap, or press Enter on the card to flip between front credentials and system telemetry.
          </p>
        </div>

        {/* 3D Flip Card Container */}
        <div className="flex justify-center items-center">
          <div
            className="w-full max-w-md h-[540px] cursor-pointer perspective-1000 select-none group"
            onClick={handleFlip}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Developer identity card, click to flip"
          >
            <motion.div
              className="relative w-full h-full preserve-3d transition-all duration-700 rounded-3xl shadow-2xl"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* FRONT SIDE */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-b from-[#111420] via-[#0d101a] to-[#07080d] border border-white/15 p-6 sm:p-7 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Circuit background subtle lines */}
                <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
                
                {/* Top Bar: Dev Tag & Live Status Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-white tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                      DEV // {profileData.idCard.issuedYear}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {profileData.idCard.idNumber}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available for hire</span>
                  </div>
                </div>

                {/* Portrait Visual Image / Graphic */}
                <div className="relative z-10 my-4 flex-1 flex flex-col items-center justify-center">
                  <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.25)] group-hover:border-emerald-400 transition-colors bg-[#080a10]">
                    <Image
                      src="/profile-card.svg"
                      alt="Pal Patel Profile"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-semibold uppercase">
                        VERIFIED DEV
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {profileData.name}
                    </h3>
                    <p className="font-mono text-xs font-semibold text-emerald-400 tracking-wider uppercase mt-0.5">
                      {profileData.headlineRole}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs flex items-center justify-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {profileData.location}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Current Focus & Flip prompt */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase text-slate-500">
                      Current Focus
                    </span>
                    <span className="text-xs font-mono text-slate-300 font-medium">
                      Distributed Web & Next.js 15
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFlip();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white font-mono text-[11px] font-semibold transition-all group-hover:border-emerald-500/50"
                  >
                    <span>Flip for details</span>
                    <RotateCw className="w-3 h-3 text-emerald-400 transition-transform group-hover:rotate-180 duration-500" />
                  </button>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden rounded-3xl bg-gradient-to-b from-[#141824] via-[#0f131d] to-[#08090e] border border-emerald-500/30 p-6 sm:p-7 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

                {/* Back Top Header */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-white tracking-wider">
                      ID: {profileData.idCard.idNumber}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {profileData.idCard.status}
                  </span>
                </div>

                {/* Back Content */}
                <div className="relative z-10 space-y-4 my-auto">
                  {/* Bio brief */}
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      System Brief
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {profileData.bio}
                    </p>
                  </div>

                  {/* Core Technologies as chips */}
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-emerald-400" />
                      Core Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {techChips.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry info rows */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Specialization</span>
                      <span className="text-slate-300 font-medium">Full-Stack & Cloud</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Timezone</span>
                      <span className="text-slate-300 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        {profileData.timezoneAbbr}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] text-slate-500 uppercase block">Education Timeline</span>
                      <span className="text-slate-300 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-400" />
                        {profileData.education}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back Bottom Bar */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Open to Collaborations
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFlip();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-mono text-[11px] font-bold transition-all hover:bg-emerald-400"
                  >
                    <span>Back to Front</span>
                    <RotateCw className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

