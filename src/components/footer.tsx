"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Clock, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { profileData } from "@/data/profile";
import { formatTimeInZone } from "@/lib/utils";

export function Footer() {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(formatTimeInZone(profileData.timezone));
    const timer = setInterval(() => {
      setTime(formatTimeInZone(profileData.timezone));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { num: "/01", name: "Home", href: "/" },
    { num: "/02", name: "Projects", href: "/projects" },
    { num: "/03", name: "About", href: "/about" },
    { num: "/04", name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#050609] pt-16 pb-12 overflow-hidden text-slate-300">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Info, Navigation, Timezone & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                {profileData.initials}
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              {profileData.headlineRole} based in {profileData.location}. Specializing in building scalable, production-ready web systems.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Col 2: Numbered Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Index
            </h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="text-slate-600 group-hover:text-emerald-400 transition-colors">
                      {link.num}
                    </span>
                    <span className="tracking-wide">{link.name}</span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Col 3: Live Timezone Clock & Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Location & Time
            </h4>
            <div className="p-3.5 rounded-xl bg-surface-100 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {profileData.timezoneAbbr}
                </span>
                <span className="text-emerald-400 font-bold tracking-wider">
                  {mounted ? time : "--:--:--"}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {profileData.city}, {profileData.country}
              </p>
            </div>
            <div>
              <a
                href={`mailto:${profileData.email}`}
                className="group inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                <span>{profileData.email}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Col 4: Socials & Back to Top */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Connect
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/30 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/30 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/30 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5 text-slate-400" />
                <span>X / Twitter</span>
              </a>
              <a
                href={profileData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/30 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-slate-400" />
                <span>Instagram</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-emerald-400 transition-colors focus:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/terms"
              className="hover:text-emerald-400 transition-colors focus:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

