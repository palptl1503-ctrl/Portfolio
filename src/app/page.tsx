import React from "react";
import { HeroOverview } from "@/components/home/hero-overview";
import { IdentityCard } from "@/components/home/identity-card";
import { AboutSection } from "@/components/home/about-section";
import { TechStackSection } from "@/components/home/tech-stack-section";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroOverview />
      <IdentityCard />
      <AboutSection />
      <TechStackSection />
      <FeaturedWorkSection />
      <CapabilitiesSection />
      <CtaSection />
    </div>
  );
}

