"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { 
  Building2, 
  ShoppingBag, 
  Factory, 
  Car, 
  HeartPulse, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SectorData {
  title: string;
  badge: string;
  tagline: string;
  painPoints: string[];
  chaseSolution: string;
  deploymentTime: string;
  icon: any;
}

export default function SolutionsPage() {
  const [selectedSector, setSelectedSector] = useState("Retail & E-commerce");
  const [selectedTier, setSelectedTier] = useState("Tier 1 · Core (24h)");
  const [selectedFocus, setSelectedFocus] = useState("Field CX & deployment");
  const [activeModal, setActiveModal] = useState<SectorData | null>(null);

  const sectors: Record<string, SectorData> = {
    "Retail & E-commerce": {
      title: "Retail & E-commerce Logistics",
      badge: "HIGH VELOCITY · REVERSE LOGISTICS",
      tagline: "Last-mile orchestration, returns triage and dock gate supervision.",
      painPoints: [
        "High RTO (Return to Origin) rate and damaged reverse logistics stock.",
        "Lack of real-time visibility during peak festival dispatch surges.",
        "Customer delivery dispute resolution taking over 7 days.",
      ],
      chaseSolution: "On-field CX leads deployed at sorting hubs for instant package grading, photo condition capture, and same-day reconciliation.",
      deploymentTime: "Go-live in 24 Hours",
      icon: ShoppingBag,
    },
    Manufacturing: {
      title: "Industrial & Manufacturing Supply Chain",
      badge: "JIT INBOUND · MILK-RUNS",
      tagline: "Synchronised supplier component dispatches and plant receiving gates.",
      painPoints: [
        "Component line-stoppages caused by delayed tier-2 supplier consignments.",
        "Uncalibrated gate weights causing billing disputes and GST mismatches.",
        "Paper waybill handling delays of up to 48 hours.",
      ],
      chaseSolution: "Digital waybill check-ins, barcode verification at vendor docks, and automated 8D root-cause containment.",
      deploymentTime: "Deploy in 48 Hours",
      icon: Factory,
    },
    Automotive: {
      title: "Automotive & Heavy Components",
      badge: "SEQUENCED LINE-FEED · KD LOGISTICS",
      tagline: "Damage-free chassis, engine blocks, and sequenced assembly deliveries.",
      painPoints: [
        "Transit damage to precision-machined gears and body panels.",
        "Lack of specialized multi-axle carrier availability during quarterly bursts.",
        "Zero-tolerance tolerance for delivery window mismatches (+/- 15 mins).",
      ],
      chaseSolution: "Pre-dispatch strap and cradle verification by ChaseHorse on-field leads with timestamped photo records.",
      deploymentTime: "Deploy in 24 Hours",
      icon: Car,
    },
    "FMCG & Consumer": {
      title: "FMCG & Rapid Grocery Distribution",
      badge: "PLANOGRAM AUDITS · SHELF FACING",
      tagline: "Primary distributor and retail supermarket stock verification.",
      painPoints: [
        "Stockouts of promotional SKUs while paid eye-level shelf space sits vacant.",
        "Inability to verify retail store promotional execution across 5,000+ outlets.",
        "Damaged carton claims without photo evidence.",
      ],
      chaseSolution: "Nationwide crowd of vetted field agents performing 15-minute shelf audits with tamper-proof camera enforcement.",
      deploymentTime: "Active in 12 Hours",
      icon: Building2,
    },
    "Pharma & Healthcare": {
      title: "Pharmaceuticals & Cold-Chain",
      badge: "GDP COMPLIANCE · +2°C TO +8°C",
      tagline: "Strict temperature-governed biologics, vaccines, and sterile hospital shipments.",
      painPoints: [
        "Temperature excursions in transit ruining high-value vaccine batches.",
        "Hospital receiving dock signature delays leading to refrigerated cargo dwell.",
        "Stringent CDSCO regulatory audit requirements.",
      ],
      chaseSolution: "Real-time BLE temperature loggers, refrigerated seal integrity checks, and direct hospital receiving gate verification.",
      deploymentTime: "Deploy in 24 Hours",
      icon: HeartPulse,
    },
    "Construction & Infra": {
      title: "Construction & Infrastructure Haulage",
      badge: "OVER-DIMENSIONAL CARGO · HEAVY CRANE",
      tagline: "Long-girder, steel coil, and heavy earthmoving machinery transport.",
      painPoints: [
        "En-route highway clearance delays and bridge height clearance disputes.",
        "Unmonitored heavy axle loads causing route penalties and breakdown risk.",
        "Remote project sites lacking dedicated receiving supervisors.",
      ],
      chaseSolution: "Dedicated route-survey leads, escorts, and physical project site delivery sign-offs on glass.",
      deploymentTime: "Deploy in 48 Hours",
      icon: Truck,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              Industry Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] leading-tight">
              Engineered for complex, mission-critical logistics sectors.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#62666D] leading-relaxed">
              From high-velocity retail returns to automotive line-side feeds and GDP-certified cold chain healthcare, ChaseHorse configures verified ground workflows.
            </p>
          </div>

          {/* 6 Industry Sector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(sectors).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <div
                  key={key}
                  className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] text-[#F45116] flex items-center justify-center border border-[#D8D4CB]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-[#FDF6E8] text-[#E9AA36] px-2 py-0.5 rounded font-semibold">
                        {data.badge.split(" · ")[0]}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-[#111111] group-hover:text-[#F45116] transition-colors">
                      {data.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                      {data.tagline}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#D8D4CB] space-y-2">
                      <div className="text-[11px] font-mono text-[#111111] font-semibold">
                        Key Challenge Addressed:
                      </div>
                      <div className="text-xs text-[#62666D]">
                        {data.painPoints[0]}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D8D4CB] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#0B8059] font-bold">
                      {data.deploymentTime}
                    </span>
                    <button
                      onClick={() => setActiveModal(data)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#F45116] hover:underline"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Solution Builder */}
          <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold">
                Interactive Customizer
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] mt-1">
                Configure Your Custom Operational Blueprint
              </h2>
              <p className="text-xs sm:text-sm text-[#62666D] mt-2">
                Combine your industry sector with preferred deployment speed and operational focus area to calculate SLAs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Sector selector */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#111111] mb-2 font-semibold">
                  1. Target Sector
                </label>
                <div className="space-y-1.5">
                  {Object.keys(sectors).map((sec) => (
                    <button
                      key={sec}
                      onClick={() => setSelectedSector(sec)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-xs rounded-lg transition-colors border",
                        selectedSector === sec
                          ? "bg-[#111111] text-white font-bold border-[#111111]"
                          : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB] hover:bg-[#E9E6DE]"
                      )}
                    >
                      {sec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tier selector */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#111111] mb-2 font-semibold">
                  2. Deployment Tier
                </label>
                <div className="space-y-1.5">
                  {["Tier 1 · Core (24h)", "Tier 2 · Growth (48h)", "Tier 3 · Advanced"].map((tr) => (
                    <button
                      key={tr}
                      onClick={() => setSelectedTier(tr)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-xs rounded-lg transition-colors border",
                        selectedTier === tr
                          ? "bg-[#111111] text-white font-bold border-[#111111]"
                          : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB] hover:bg-[#E9E6DE]"
                      )}
                    >
                      {tr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Area */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#111111] mb-2 font-semibold">
                  3. Operational Focus
                </label>
                <div className="space-y-1.5">
                  {[
                    "Field CX & deployment",
                    "Fleet & transport",
                    "Technology & AI",
                    "Compliance & ESG",
                  ].map((fc) => (
                    <button
                      key={fc}
                      onClick={() => setSelectedFocus(fc)}
                      className={cn(
                        "w-full text-left px-3 py-2 text-xs rounded-lg transition-colors border",
                        selectedFocus === fc
                          ? "bg-[#111111] text-white font-bold border-[#111111]"
                          : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB] hover:bg-[#E9E6DE]"
                      )}
                    >
                      {fc}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated Blueprint Result Banner */}
            <div className="p-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-[11px] font-mono text-[#F45116] font-semibold uppercase">
                  Engineered Blueprint · Ready for Dispatch
                </div>
                <h3 className="text-xl font-heading font-bold text-[#111111] mt-0.5">
                  {selectedSector} — {selectedFocus} ({selectedTier.split(" · ")[0]})
                </h3>
                <p className="text-xs text-[#62666D] mt-1 max-w-xl">
                  Guaranteed {selectedTier.includes("24h") ? "24-hour on-field gate deployment" : "48-hour multi-site scaling"} across verified partner hubs with real-time GPS telemetry.
                </p>
              </div>

              <Link
                href={`/contact?blueprint=${encodeURIComponent(`${selectedSector} - ${selectedTier}`)}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all shrink-0"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Sector Modal */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl border border-[#D8D4CB] shadow-2xl p-6 sm:p-8 max-w-lg w-full"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CB]">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#F45116] uppercase">
                  {activeModal.badge}
                </span>
                <h3 className="text-xl font-heading font-bold text-[#111111]">
                  {activeModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-[#62666D] hover:text-[#111111] hover:bg-[#F4F2EC]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs">
              <div>
                <div className="font-mono font-bold text-[#111111] uppercase text-[11px] mb-2">
                  Common Pain Points in Transit
                </div>
                <ul className="space-y-1.5 text-[#62666D]">
                  {activeModal.painPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C83B36] font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 text-[#0B8059]">
                <div className="font-mono font-bold uppercase text-[10px] mb-1">
                  ChaseHorse Operational Solution
                </div>
                <div className="text-xs">{activeModal.chaseSolution}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8D4CB] flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#111111]">
                SLA: {activeModal.deploymentTime}
              </span>
              <Link
                href="/contact"
                className="px-4 py-2 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg"
              >
                Inquire for Pilot
              </Link>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
