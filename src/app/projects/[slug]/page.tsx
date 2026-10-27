import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
} from "lucide-react";
import { projectsData } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - Pal Patel Portfolio`,
      description: project.tagline,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {project.year} &bull; {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
              >
                <span>Live Demonstration</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-emerald-500/40 text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Source</span>
            </a>
          </div>
        </div>

        {/* Main Banner Image */}
        <div className="relative h-[320px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent opacity-60" />
        </div>

        {/* Metrics Grid (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-surface-100/80 border border-white/10 text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Sections */}
        <div className="space-y-16">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 font-normal">
                01 //
              </span>
              Executive Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-3xl bg-surface-100/60 border border-red-500/20 space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <h3 className="text-lg font-bold text-white">The Architectural Bottleneck</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-surface-100/60 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <h3 className="text-lg font-bold text-white">Engineered Resolution</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 font-normal">
                02 //
              </span>
              Key Architectural Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="p-4 rounded-xl bg-surface-100/60 border border-white/10 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 font-normal">
                03 //
              </span>
              Complex Engineering Challenges
            </h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={challenge.title}
                  className="p-6 rounded-2xl bg-surface-100/70 border border-white/10 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-emerald-400">
                      CHALLENGE #{idx + 1}:
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-400 font-normal">
                04 //
              </span>
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-surface-100 border border-white/10 text-xs font-mono text-emerald-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Previous and Next Navigation */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-6 rounded-2xl bg-surface-100/50 border border-white/10 hover:border-emerald-500/40 transition-colors text-left group"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
              &larr; Previous Case Study
            </span>
            <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-6 rounded-2xl bg-surface-100/50 border border-white/10 hover:border-emerald-500/40 transition-colors text-right group"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
              Next Case Study &rarr;
            </span>
            <span className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

