import React from "react";
import { BrandIntro } from "@/components/brand/BrandIntro";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { BusinessesSection } from "@/components/home/BusinessesSection";
import { FieldWorkersSection } from "@/components/home/FieldWorkersSection";
import { VerificationSection } from "@/components/home/VerificationSection";
import { DashboardPreviewSection } from "@/components/home/DashboardPreviewSection";
import { TrustBanner } from "@/components/home/TrustBanner";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F4F2EC]">
      {/* Signature 4-stage Brand Intro Experience */}
      <BrandIntro />

      {/* Global Navigation Header */}
      <SiteHeader />

      {/* Hero Section with Live Operational Scene */}
      <HeroSection />

      {/* How It Works - 4-Stage Transparent Process */}
      <HowItWorksSection />

      {/* 3-Column Split: Businesses, Field Workers, Verification */}
      <section className="py-16 bg-[#F4F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <BusinessesSection />
            <FieldWorkersSection />
            <VerificationSection />
          </div>
        </div>
      </section>

      {/* Operations Dashboard Live Preview */}
      <DashboardPreviewSection />

      {/* Enterprise Trust & Dark Stats Banner */}
      <TrustBanner />

      {/* Final Call to Action */}
      <FinalCtaSection />

      {/* Global Footer */}
      <SiteFooter />
    </main>
  );
}
