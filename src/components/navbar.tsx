"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { profileData } from "@/data/profile";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080c]/85 dark:bg-[#07080c]/85 light:bg-white/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: PP Badge + Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-surface-100 border border-white/10 group-hover:border-emerald-500/50 transition-colors duration-300 shadow-inner">
              <span className="font-mono text-sm font-bold tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors">
                {profileData.initials}
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
                {profileData.name}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-slate-400">
                {profileData.headlineRole}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-100/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Status Indicator, Theme Toggle & Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Status Indicator */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono"
              title="Available for freelance, internships and full-time roles"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide text-[11px] font-medium">Available</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Let's Talk Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-black text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger Menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg bg-surface-100 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/10 bg-[#07080c]/95 backdrop-blur-xl px-4 pt-3 pb-6"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for new projects</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">2026 // EDITION</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-mono tracking-wider transition-colors ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-slate-600">/0{idx + 1}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 mt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-500 text-black text-xs font-mono font-bold tracking-wider uppercase"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

