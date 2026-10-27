"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Client-side validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setStatus("error");
      setErrorMessage("Please enter a valid name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.subject.trim() || formData.subject.length < 3) {
      setStatus("error");
      setErrorMessage("Please provide a subject line (at least 3 characters).");
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus("error");
      setErrorMessage("Please write a message with at least 10 characters.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setStatus("success");
      setSuccessMessage(
        data.message || "Thank you! Your message has been dispatched successfully."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
              Index // Contact
            </span>
            <span className="h-[1px] w-12 bg-emerald-500/30" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start a Conversation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Interested in hiring me, collaborating on a project, or discussing software architecture? Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-surface-100/80 border border-white/10 backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-6">
              Send an Encrypted Dispatch
            </h2>

            {/* Status alerts */}
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-mono">
                  {successMessage}
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-mono">
                  {errorMessage}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs text-slate-400 uppercase tracking-wider"
                  >
                    Your Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs text-slate-400 uppercase tracking-wider"
                  >
                    Email Address <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="block font-mono text-xs text-slate-400 uppercase tracking-wider"
                >
                  Subject <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Full-Stack Engineering Opportunity / Project Scope"
                  className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block font-mono text-xs text-slate-400 uppercase tracking-wider"
                >
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements, timeline, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info, Location & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-surface-100/60 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                Direct Communication
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="group flex items-center justify-between text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  {profileData.email}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>
              <p className="text-xs text-slate-400">
                Encrypted inbox. Average turnaround is under 24 business hours.
              </p>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-3xl bg-surface-100/60 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                Geographic Presence
              </span>
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Operating hours: 09:00 - 19:00 {profileData.timezoneAbbr}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-3xl bg-surface-100/60 border border-white/10 space-y-4">
              <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                Connected Networks
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-surface-200 border border-white/5 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-surface-200 border border-white/5 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-surface-200 border border-white/5 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4 text-slate-400" />
                  <span>X / Twitter</span>
                </a>
                <a
                  href={profileData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-surface-200 border border-white/5 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-slate-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

