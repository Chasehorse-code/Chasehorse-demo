"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  ShieldCheck, 
  Coins, 
  FileSpreadsheet, 
  Sparkles,
  Users
} from "lucide-react";

export default function BusinessesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("shelf-audit");

  const templates = [
    {
      id: "shelf-audit",
      name: "Shelf & Endcap Audit",
      payout: "₹450 / store",
      avgTime: "20 mins",
      deliverables: "3 photos (Facing, Price tag, Expiry) + stock count",
      description: "Ensure promotional planogram compliance and verify that your FMCG SKUs occupy paid eye-level retail shelf facings.",
    },
    {
      id: "signage-check",
      name: "Storefront Signage Verification",
      payout: "₹300 / location",
      avgTime: "15 mins",
      deliverables: "2 photos (Street view 15m, Close-up) + Decal inspection",
      description: "Verify physical branding visibility, illuminated hoardings, and promotional vinyl banners across retailer partner networks.",
    },
    {
      id: "inventory-count",
      name: "Spot Inventory & Batch Count",
      payout: "₹500 / audit",
      avgTime: "30 mins",
      deliverables: "4 photos (Pallet, Batch code, Expiry) + Box count",
      description: "Count on-hand cartons in distributor warehouses or supermarket backrooms with recorded batch serial numbers.",
    },
    {
      id: "mystery-shopper",
      name: "Mystery Shopping & Staff Greeting",
      payout: "₹650 / visit",
      avgTime: "35 mins",
      deliverables: "2 discreet photos + Receipt + Staff interaction score",
      description: "Evaluate real in-store customer experience, greeting speed, checkout queue time, and promotional upselling pitches.",
    },
  ];

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
                For Enterprise & Retail Brands
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] leading-tight">
                Turn field requirements into clear, trackable work.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#62666D] leading-relaxed max-w-xl">
                Define the task, set the location and deadline, specify the evidence you need, and review submissions through one operational workflow.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/tasks/new"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-sm font-semibold rounded-xl shadow-md transition-all"
                >
                  <span>Post field tasks</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-white hover:bg-[#E9E6DE] text-[#111111] text-sm font-medium rounded-xl border border-[#D8D4CB] transition-colors"
                >
                  Schedule an operations demo
                </Link>
              </div>
            </div>

            {/* Quick Metrics & Highlights */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
              <h3 className="text-base font-heading font-bold text-[#111111] pb-3 border-b border-[#D8D4CB]">
                Enterprise Field Capabilities
              </h3>

              <div className="mt-4 space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#E7F6F0] text-[#0B8059] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">Precision Geofencing:</span>
                    <span className="text-[#62666D] ml-1">Configure verification radius between 50m to 5km with GPS telemetry logging.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#FDF6E8] text-[#E9AA36] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">Automated Tamper Checks:</span>
                    <span className="text-[#62666D] ml-1">Image EXIF timestamps, duplicate hash analysis, and live camera enforcement.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#EBF1FD] text-[#3566D6] flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">On-Demand Field Network:</span>
                    <span className="text-[#62666D] ml-1">Instant task dispatch to 5,000+ vetted field agents across India.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Task Templates Section */}
          <div className="mt-16 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold">
                Pre-configured Workflows
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] mt-1">
                Standardized Task Templates
              </h2>
              <p className="text-xs sm:text-sm text-[#62666D] mt-2">
                Deploy tested operational blueprints or create custom task templates tailored to your retail and logistics footprint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => setSelectedTemplate(tpl.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedTemplate === tpl.id
                      ? "bg-[#111111] text-white border-[#111111] shadow-md"
                      : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB] hover:border-[#111111]"
                  }`}
                >
                  <div className="text-xs font-mono font-bold mb-1 opacity-80">{tpl.payout}</div>
                  <div className="text-sm font-heading font-bold">{tpl.name}</div>
                  <div className="text-[11px] font-mono mt-1 opacity-70">{tpl.avgTime}</div>
                </button>
              ))}
            </div>

            {/* Template Detail Card */}
            {(() => {
              const active = templates.find((t) => t.id === selectedTemplate) || templates[0];
              return (
                <div className="p-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8">
                    <h3 className="text-xl font-heading font-bold text-[#111111]">{active.name}</h3>
                    <p className="mt-2 text-sm text-[#62666D] leading-relaxed">{active.description}</p>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono">
                      <span className="bg-white px-3 py-1 rounded-md border border-[#D8D4CB] font-semibold text-[#111111]">
                        Deliverables: {active.deliverables}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex justify-end">
                    <Link
                      href={`/tasks/new?template=${active.id}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                    >
                      <span>Deploy This Template</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

