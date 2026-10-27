import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Download,
  GraduationCap,
  Briefcase,
  Laptop,
  Terminal,
  Heart,
  ArrowUpRight,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${profileData.name}, his journey in computer engineering, and his engineering philosophy.`,
};

export default function AboutPage() {
  const timeline = [
    {
      period: "2024 — Present",
      title: "Senior Full-Stack Developer & Freelance Consultant",
      organization: "Independent & Open Source",
      description:
        "Building production-grade Next.js, Node.js, and cloud systems for high-growth tech startups. Contributing to open-source developer tooling and mentoring peers in web performance.",
    },
    {
      period: "2023 — 2024",
      title: "Full-Stack Software Engineering Intern",
      organization: "Cloud Innovators Lab",
      description:
        "Architected RESTful microservices and real-time dashboard components using TypeScript, PostgreSQL, and Docker. Optimized database query performance by 40%.",
    },
    {
      period: "2022 — 2026",
      title: "B.Tech in Computer Engineering",
      organization: "Gujarat Technological University (GTU)",
      description:
        "Focusing on Distributed Operating Systems, Database Management Systems, Data Structures & Algorithms, and Cloud Infrastructure.",
    },
  ];

  const setupGear = [
    { label: "Machine", value: 'ASUS ROG Zephyrus / Apple Silicon M-Series' },
    { label: "Editor", value: "VS Code + Antigravity IDE (Tokyo Night / Nord theme)" },
    { label: "Terminal", value: "PowerShell & Windows Terminal with Oh-My-Posh" },
    { label: "Browser", value: "Google Chrome Canary + DevTools / Brave" },
    { label: "Keyboard", value: "Custom Mechanical 75% with Gateron Oil Kings" },
  ];

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
              Index // About
            </span>
            <span className="h-[1px] w-12 bg-emerald-500/30" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Background, Philosophy & Engineering Craft
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am Pal Patel, a full-stack engineer and computer engineering scholar based in Ahmedabad, India.
          </p>
        </div>

        {/* Profile Card & Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-20">
          <div className="md:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-surface-100 p-6 shadow-2xl space-y-5">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/profile-card.svg"
                  alt="Pal Patel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{profileData.name}</h3>
                  <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {profileData.yearsOfExperience}
                  </span>
                </div>
                <p className="font-mono text-xs text-slate-400">
                  {profileData.headlineRole} &bull; {profileData.subRole}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{profileData.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <a
                  href={profileData.resumeUrl}
                  download="Pal_Patel_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full Resume</span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            {profileData.fullBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 space-y-3">
              <h4 className="font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Core Philosophy
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                &ldquo;Fast software is respectful software. I believe in writing code that honors user attention, handles network failures gracefully, and maintains architectural clarity as requirements scale.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Experience & Education
            </h2>
          </div>

          <div className="space-y-6 border-l-2 border-emerald-500/30 pl-6 ml-2 sm:ml-4">
            {timeline.map((item) => (
              <div key={item.title} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#07080c] border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors" />
                <span className="font-mono text-xs text-emerald-400 font-semibold uppercase">
                  {item.period}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-2">
                  {item.organization}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Environment / Gear */}
        <div className="p-8 rounded-3xl bg-surface-100/60 border border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Development Setup & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {setupGear.map((gear) => (
              <div
                key={gear.label}
                className="p-4 rounded-xl bg-surface-200/60 border border-white/5 space-y-1"
              >
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                  {gear.label}
                </span>
                <p className="text-xs sm:text-sm font-mono text-slate-200">
                  {gear.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

