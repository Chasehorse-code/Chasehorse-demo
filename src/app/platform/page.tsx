"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ChaseHorseLogo } from "@/components/brand/ChaseHorseLogo";
import { 
  Cpu, 
  Wallet, 
  Users, 
  TrendingUp, 
  Route, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Flame,
  Layers,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PlatformPage() {
  const [selectedTier, setSelectedTier] = useState<1 | 2 | 3>(1);
  const [activeGrowthStep, setActiveGrowthStep] = useState<number>(2);

  const tierDetails = {
    1: {
      badge: "TIER 1 · 24H RAPID DEPLOYMENT",
      title: "Core Business Services & On-Field CX Lead",
      sla: "Go-Live within 24 Hours",
      focus: "Critical Handover & Defect Containment",
      color: "border-[#F45116] text-[#F45116]",
      bgAccent: "bg-[#FDF6E8]",
      items: [
        {
          title: "CH Deploy On-Field CX Leads",
          desc: "Direct boots-on-the-ground support at transit terminals, warehouses, and customer delivery gates.",
        },
        {
          title: "8D Root-Cause Complaint Resolution",
          desc: "Structured containment, correction, and permanent prevention with SLA closure.",
        },
        {
          title: "Returns Triage & Reverse Logistics",
          desc: "Inspection, grading, and rapid inventory reconciliation for e-commerce and retail.",
        },
        {
          title: "Digital Transformation Connectors",
          desc: "Instant API connections linking ERP dispatch waybills to field mobile devices.",
        },
      ],
    },
    2: {
      badge: "TIER 2 · 48H SCALING",
      title: "Strategic & Growth Operating Layer",
      sla: "Network Expansion within 48 Hours",
      focus: "Multi-Site Capacity & Fleet Economics",
      color: "border-[#E9AA36] text-[#E9AA36]",
      bgAccent: "bg-[#FDF6E8]",
      items: [
        {
          title: "DEPLOY – CDX Pro Platform",
          desc: "Comprehensive field telemetry, multi-warehouse quality audits, and automated vendor evaluations.",
        },
        {
          title: "Fleet & Driver Management",
          desc: "Driver safety scoring, fuel compliance, schedule tracking, and vehicle maintenance logs.",
        },
        {
          title: "Customer Xperience (CX) Management",
          desc: "Unified customer-facing tracking portals, real-time proactive delay alerts, and CSAT loops.",
        },
        {
          title: "Trip Finance Working Capital",
          desc: "Dynamic trip financing for fleet operators and drivers to keep freight rolling without cashflow delays.",
        },
      ],
    },
    3: {
      badge: "TIER 3 · ENTERPRISE ADVANCED",
      title: "Technology, IoT & Regulatory Governance",
      sla: "Continuous Enterprise Optimization",
      focus: "Full Supply Chain Visibility & ESG Compliance",
      color: "border-[#0B8059] text-[#0B8059]",
      bgAccent: "bg-[#E7F6F0]",
      items: [
        {
          title: "Advanced Logistics IT & IoT Telematics",
          desc: "Refrigerated cold chain temperature loggers (+4°C sensors) and anti-tamper electronic seals.",
        },
        {
          title: "SCM Process Re-Engineering",
          desc: "Control tower architecture, Sales & Operations Planning (S&OP), and distribution network redesign.",
        },
        {
          title: "ESG Carbon Monitoring & Sustainability",
          desc: "Emissions tracking per lane, green vehicle allocation, and verified sustainability audits.",
        },
        {
          title: "Statutory Compliance & Regulatory Audits",
          desc: "E-way bill governance, GST reconciliation, hazardous cargo safety compliance, and ISO alignment.",
        },
      ],
    },
  };

  const growthSteps = [
    { num: 1, name: "Connect", desc: "Onboard your data, ERP waybills, and transit lanes to the G.E.L.P. secure cloud layer." },
    { num: 2, name: "Deploy", desc: "Tier 1 on-field CX leads and critical gate checks go live across facilities in 24 hours." },
    { num: 3, name: "Scale", desc: "Tier 2 fleet capacity, trip finance, and multi-hub operations scale within 48 hours." },
    { num: 4, name: "Optimise", desc: "Tier 3 IoT cold chain tracking, automated 8D analytics, and verified ESG compliance." },
  ];

  const currentTierData = tierDetails[selectedTier];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#F45116]" />
                Platform · G.E.L.P. Framework
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] leading-tight">
                The <span className="text-[#F45116]">Growth Enabler</span> Logiworkx Platform
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#62666D] leading-relaxed max-w-xl">
                A paradigm shift in rapid business scalability — plug &amp; play field resources, live market freight intelligence, flexible trip finance options, and secure enterprise verification layers.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-xl shadow-md transition-all"
                >
                  <span>Schedule an Enterprise Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3.5 bg-white hover:bg-[#E9E6DE] text-[#111111] text-xs font-medium rounded-xl border border-[#D8D4CB] transition-colors"
                >
                  Explore All Capabilities
                </Link>
              </div>

              {/* Quick Navigation Chips */}
              <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono">
                <a href="#gelp-pillars" className="px-3 py-1.5 bg-white border border-[#D8D4CB] rounded-full hover:border-[#111111] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#F45116]" /> Technology
                </a>
                <a href="#gelp-pillars" className="px-3 py-1.5 bg-white border border-[#D8D4CB] rounded-full hover:border-[#111111] flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-[#E9AA36]" /> Finance
                </a>
                <a href="#gelp-pillars" className="px-3 py-1.5 bg-white border border-[#D8D4CB] rounded-full hover:border-[#111111] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#3566D6]" /> Resources
                </a>
                <a href="#tier-explorer" className="px-3 py-1.5 bg-white border border-[#D8D4CB] rounded-full hover:border-[#111111] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#0B8059]" /> Tiers
                </a>
                <a href="#growth-roadmap" className="px-3 py-1.5 bg-white border border-[#D8D4CB] rounded-full hover:border-[#111111] flex items-center gap-1.5">
                  <Route className="w-3.5 h-3.5 text-[#111111]" /> Roadmap
                </a>
              </div>
            </div>

            {/* Visual G.E.L.P. Orbit Graphic */}
            <div className="lg:col-span-5 bg-[#111111] rounded-2xl p-8 border border-white/10 text-white flex flex-col items-center justify-center relative overflow-hidden shadow-xl min-h-[360px]">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              
              {/* Spinning Orbital Rings */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#F45116]/40 animate-spin [animation-duration:25s]" />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#E9AA36]/40 animate-spin [animation-duration:15s] [animation-direction:reverse]" />
                
                {/* Center Core */}
                <div className="relative w-24 h-24 rounded-full bg-[#1c1a17] border-2 border-[#F45116] flex items-center justify-center shadow-[0_0_30px_rgba(244,81,22,0.5)]">
                  <ChaseHorseLogo variant="light" size="xs" showTagline={false} />
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm font-heading font-bold text-white">G.E.L.P. Core Engine</div>
                <div className="text-[11px] font-mono text-[#F45116] mt-0.5">
                  Growth Enabling Logiworkx Partner
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tier Explorer */}
          <section id="tier-explorer" className="mb-16 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold">
                Deployment Tiers
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] mt-1">
                Structured SLAs & Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-[#62666D] mt-2">
                Select an operational tier to explore service levels, deployment speed, and core deliverables.
              </p>
            </div>

            {/* Tier Switcher Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { id: 1 as const, label: "Tier 1 · Core (24h)", sub: "Boots-on-ground & CX Leads" },
                { id: 2 as const, label: "Tier 2 · Growth (48h)", sub: "Scaling Fleet & Trip Finance" },
                { id: 3 as const, label: "Tier 3 · Enterprise", sub: "Cold Chain IoT & ESG Audits" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTier(tab.id)}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all",
                    selectedTier === tab.id
                      ? "bg-[#111111] text-white border-[#111111] shadow-md"
                      : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB] hover:border-[#111111]"
                  )}
                >
                  <div className="text-xs font-mono font-bold mb-1 opacity-80">{tab.label}</div>
                  <div className="text-sm font-heading font-bold">{tab.sub}</div>
                </button>
              ))}
            </div>

            {/* Active Tier Content Panel */}
            <div className="p-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D8D4CB] gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-[#F45116] uppercase tracking-wider">
                    {currentTierData.badge}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-[#111111] mt-0.5">
                    {currentTierData.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono bg-white text-[#0B8059] px-3 py-1.5 rounded-lg border border-[#D8D4CB] font-bold">
                    ✓ {currentTierData.sla}
                  </span>
                </div>
              </div>

              {/* 4 Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {currentTierData.items.map((it) => (
                  <div key={it.title} className="p-4 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-[#E7F6F0] text-[#0B8059] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-heading font-bold text-[#111111]">{it.title}</h4>
                        <p className="mt-1 text-xs text-[#62666D] leading-relaxed">{it.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4-Stage Growth Roadmap */}
          <section id="growth-roadmap" className="mb-16 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold">
                Strategic Scaling Path
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] mt-1">
                4-Stage Implementation Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {growthSteps.map((step) => (
                <div
                  key={step.num}
                  onClick={() => setActiveGrowthStep(step.num)}
                  className={cn(
                    "p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between",
                    activeGrowthStep === step.num
                      ? "bg-[#111111] text-white border-[#111111] shadow-md"
                      : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB] hover:border-[#111111]"
                  )}
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-[#F45116] mb-2">
                      Stage 0{step.num}
                    </div>
                    <div className="text-base font-heading font-bold mb-2">
                      {step.name}
                    </div>
                    <p className={cn("text-xs leading-relaxed", activeGrowthStep === step.num ? "text-white/80" : "text-[#62666D]")}>
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono opacity-60">
                    Step {step.num} of 4
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core G.E.L.P. Pillars */}
          <section id="gelp-pillars" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#FDF6E8] text-[#F45116] flex items-center justify-center mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-heading font-bold text-[#111111]">Technology Integration</h3>
              <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                Connect enterprise SAP/Oracle dispatch orders straight to on-field mobile devices with real-time GPS telemetry and tamper verification.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#EBF1FD] text-[#3566D6] flex items-center justify-center mb-3">
                <Wallet className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-heading font-bold text-[#111111]">Flexible Finance Models</h3>
              <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                Instant trip advances for fuel and tolls, automated escrow lockups, and 2-hour verified worker payouts via UPI.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#E7F6F0] text-[#0B8059] flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-heading font-bold text-[#111111]">Skilled Ready Resources</h3>
              <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                Network of 5,000+ vetted field agents across India trained in retail shelf audits, seal inspections, and 8D discrepancy documentation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] text-[#111111] flex items-center justify-center mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-heading font-bold text-[#111111]">Business Scalability</h3>
              <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                Deploy across 500+ pin-codes without heavy fixed overheads. Scale up for festival surges and down during lean cycles.
              </p>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
