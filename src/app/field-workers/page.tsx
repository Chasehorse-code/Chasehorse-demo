"use client";

import React from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { 
  Smartphone, 
  MapPin, 
  Camera, 
  Wallet, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  AlertCircle
} from "lucide-react";

export default function FieldWorkersPage() {
  const steps = [
    {
      num: "1",
      title: "Discover Nearby Tasks",
      desc: "Open the app to view open tasks within your preferred radius (1km to 5km). Check location, estimated time, and reward upfront.",
    },
    {
      num: "2",
      title: "Travel & GPS Check-In",
      desc: "Navigate to the designated retail store or address. Once inside the geofence perimeter, tap Check In to begin your active session.",
    },
    {
      num: "3",
      title: "Capture Live Evidence",
      desc: "Follow the itemized checklist. Take crisp in-app photos of shelves, pricing barcodes, or storefront signage as guided.",
    },
    {
      num: "4",
      title: "Review & Wallet Credit",
      desc: "Once your submission is approved by operations, earnings are credited to your ChaseHorse wallet for bank or UPI withdrawal.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              For On-Ground Partners
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] leading-tight">
              Find nearby work. Follow clear instructions. Get credit for verified completion.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#62666D] leading-relaxed">
              ChaseHorse provides flexible on-ground opportunities across Indian metros. Complete retail shelf checks, signage verifications, and inventory audits with clear step-by-step guidance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-sm font-semibold rounded-xl shadow-md transition-all"
              >
                <span>Join as a field worker</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/rewards"
                className="inline-flex items-center px-6 py-3.5 bg-white hover:bg-[#E9E6DE] text-[#111111] text-sm font-medium rounded-xl border border-[#D8D4CB] transition-colors"
              >
                Understand reward criteria
              </Link>
            </div>
          </div>

          {/* 4 Step Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-white rounded-xl border border-[#D8D4CB] p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#111111] text-white text-xs font-mono font-bold flex items-center justify-center mb-4">
                    {st.num}
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#111111]">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D8D4CB] text-[10px] font-mono text-[#62666D]">
                  Location verified
                </div>
              </div>
            ))}
          </div>

          {/* Policy & Integrity Disclosure Note */}
          <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 max-w-4xl shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#FDF6E8] text-[#E9AA36] shrink-0 border border-[#E9AA36]/30">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-heading font-bold text-[#111111]">
                  Transparent Reward & Approval Standards
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-[#62666D] leading-relaxed">
                  ChaseHorse maintains strict operational fairness. Task rewards are held in secure escrow upon assignment and released directly after review. To protect field integrity, submissions must be taken at the physical location with camera permissions enabled. Rework requests specify exact instructions to help you complete tasks successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

