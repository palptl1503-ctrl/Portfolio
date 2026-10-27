import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Shield } from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and data usage disclosures for ${profileData.name}'s portfolio website.`,
};

export default function PrivacyPage() {
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
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase">
            Legal // Privacy
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-slate-500 mb-10">
          Last updated: October 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Information Collection</h2>
            <p>
              This portfolio website values your digital privacy. When you interact with this site, we only collect information that you deliberately provide—specifically when submitting the contact form (your name, email address, message subject, and content).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Use of Information</h2>
            <p>
              Information sent via the contact form is used strictly to respond to your inquiries regarding engineering roles, contract work, or technical discussions. We never sell, rent, or distribute your personal details to third-party data brokers or marketing lists.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Telemetry and Analytics</h2>
            <p>
              This website is deployed on Vercel and may utilize privacy-friendly, anonymized traffic analytics (such as Vercel Web Analytics) to observe Core Web Vitals, page load speeds, and geographic distribution without setting intrusive tracking cookies or fingerprinting individual users.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Local Storage</h2>
            <p>
              We utilize your browser&apos;s localStorage solely to persist your visual theme preference (dark mode or light mode). No personal data or identification markers are stored within localStorage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact</h2>
            <p>
              If you have any questions or data removal requests regarding this policy, please reach out directly via email to{" "}
              <a
                href={`mailto:${profileData.email}`}
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                {profileData.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

