"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { 
  Building2, 
  MapPin, 
  Camera, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileSpreadsheet, 
  Smartphone,
  Coins
} from "lucide-react";

export default function HowItWorksPage() {
  const stages = [
    {
      num: "01",
      role: "Businesses",
      title: "Define tasks, location, deadline and reward",
      desc: "Specify exact store or site coordinates, allowed verification radius (e.g. 150m), mandatory photo evidence, checklist criteria, and per-task compensation.",
      icon: Building2,
      points: [
        "Upload locations via spreadsheet or map pin",
        "Set task radius from 50m to 5km",
        "Build custom step-by-step checklists",
        "Escrow task rewards securely in Logiworkx escrow",
      ],
    },
    {
      num: "02",
      role: "Field Workers",
      title: "Discover, claim, visit and submit proof",
      desc: "Nearby eligible workers receive push notifications, accept assignments, travel to the verified geofence, and complete guided evidence collection.",
      icon: Smartphone,
      points: [
        "Real-time GPS proximity check-in",
        "Camera captures tamper-proof geotagged photos",
        "Mandatory checklist completion before submission",
        "Instant upload with offline fallback sync",
      ],
    },
    {
      num: "03",
      role: "Operations Teams",
      title: "Automated checks, human review and payout",
      desc: "AI-assisted checks run within seconds. Operations leads review photographic evidence, verify checklist compliance, request rework if necessary, or release instant payments.",
      icon: ShieldCheck,
      points: [
        "Automated distance, timestamp and duplicate validation",
        "Side-by-side planogram and facing comparison",
        "One-click approval or detailed rework notes",
        "Direct UPI / IMPS wallet payout release",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              Workflow Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] tracking-tight">
              From task creation to verified payout in 3 transparent steps.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#62666D]">
              ChaseHorse eliminates uncertainty in physical execution through location-aware technology and rigorous operational accountability.
            </p>
          </div>

          {/* 3 Major Stages */}
          <div className="space-y-12">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-mono font-bold text-[#F45116]">
                        {stage.num}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider bg-[#E9E6DE] text-[#111111] px-2.5 py-1 rounded font-semibold">
                        {stage.role}
                      </span>
                    </div>

                    <h2 className="text-2xl font-heading font-bold text-[#111111] leading-tight">
                      {stage.title}
                    </h2>

                    <p className="mt-3 text-sm text-[#62666D] leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-8 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] p-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#62666D] mb-4 font-semibold">
                      Operational Verification Gates
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {stage.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2.5 p-3 bg-white rounded-lg border border-[#D8D4CB]">
                          <CheckCircle2 className="w-4 h-4 text-[#0B8059] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#111111] font-medium leading-snug">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Dual Action */}
          <div className="mt-16 p-8 bg-white rounded-2xl border border-[#D8D4CB] text-center max-w-3xl mx-auto shadow-xs">
            <h3 className="text-2xl font-heading font-bold text-[#111111]">
              Ready to post your first batch of tasks?
            </h3>
            <p className="mt-2 text-sm text-[#62666D]">
              Create custom field checklists and verify execution across 500+ pin codes today.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/tasks/new"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
              >
                <span>Post field tasks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center px-6 py-3 bg-[#F4F2EC] hover:bg-[#E9E6DE] text-[#111111] text-xs font-medium rounded-xl border border-[#D8D4CB] transition-colors"
              >
                Join as a field worker
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

