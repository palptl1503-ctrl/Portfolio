import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service and intellectual property disclosures for ${profileData.name}'s portfolio website.`,
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
            Legal // Terms
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-xs font-mono text-slate-500 mb-10">
          Last updated: October 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Scope of Use</h2>
            <p>
              This website serves as an online portfolio showcasing the engineering capabilities, software projects, and background of {profileData.name}. All visitors are granted a limited license to browse the site for recruitment, informational, and evaluation purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property</h2>
            <p>
              The design layouts, animations, branding elements, and written case studies presented on this domain are the intellectual property of {profileData.name}, unless otherwise attributed to client organizations or open-source licenses. Source code for open-source repositories linked herein remains subject to their respective MIT, Apache 2.0, or other declared open-source licenses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Accuracy of Content</h2>
            <p>
              While every effort is made to keep project metrics, tech stacks, and career milestones current and accurate, content is provided on an &ldquo;as is&rdquo; basis without warranties of any kind.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. External Hyperlinks</h2>
            <p>
              This website contains links to external platforms including GitHub, LinkedIn, X, and live project deployments. {profileData.name} assumes no responsibility for the content, privacy practices, or uptime of third-party domains.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Governing Law</h2>
            <p>
              Any disputes arising from the use of this website shall be governed by and construed in accordance with the applicable laws of India, within the jurisdiction of Ahmedabad, Gujarat.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

