"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Wallet, 
  Smartphone,
  Navigation,
  Clock
} from "lucide-react";

export function FieldWorkersSection() {
  const workerFeatures = [
    "Find nearby tasks",
    "Check task details and location",
    "Complete tasks with clear instructions",
    "Submit photo evidence",
    "Track your task history",
    "Get rewarded after approval",
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold mb-3">
          <span className="w-2 h-2 rounded-full bg-[#F45116]" />
          For Field Workers
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111] leading-tight">
          Find nearby work. Follow clear instructions. Get credit for verified completion.
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-[#62666D] leading-relaxed">
          Discover tasks near you, follow step-by-step instructions, submit photo evidence and earn rewards for completed work.
        </p>

        {/* Features Checklist */}
        <div className="mt-6 space-y-2.5">
          {workerFeatures.map((feat) => (
            <div key={feat} className="flex items-center gap-2.5 text-xs text-[#111111]">
              <div className="w-4 h-4 rounded-full bg-[#E7F6F0] text-[#0B8059] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span className="font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Mockup Card for Nearby Tasks */}
      <div className="my-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] p-3.5">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D8D4CB] text-[11px] font-mono">
          <span className="font-bold text-[#111111]">New tasks near you</span>
          <span className="bg-[#111111] text-white px-2 py-0.5 rounded-full text-[10px]">
            2 km radius
          </span>
        </div>

        {/* Task Mini Cards */}
        <div className="space-y-2">
          <div className="p-2 bg-white rounded-lg border border-[#D8D4CB] flex items-center justify-between hover:border-[#F45116] transition-colors">
            <div>
              <div className="text-xs font-heading font-bold text-[#111111]">Store audit</div>
              <div className="text-[10px] text-[#62666D] font-mono">Apex Mart · 1.2 km · Today</div>
            </div>
            <div className="text-xs font-mono font-bold text-[#0B8059] bg-[#E7F6F0] px-2 py-0.5 rounded">
              ₹450
            </div>
          </div>

          <div className="p-2 bg-white rounded-lg border border-[#D8D4CB] flex items-center justify-between hover:border-[#F45116] transition-colors">
            <div>
              <div className="text-xs font-heading font-bold text-[#111111]">Signage check</div>
              <div className="text-[10px] text-[#62666D] font-mono">Metro Mart · 2.1 km · Today</div>
            </div>
            <div className="text-xs font-mono font-bold text-[#0B8059] bg-[#E7F6F0] px-2 py-0.5 rounded">
              ₹300
            </div>
          </div>

          <div className="p-2 bg-white rounded-lg border border-[#D8D4CB] flex items-center justify-between hover:border-[#F45116] transition-colors">
            <div>
              <div className="text-xs font-heading font-bold text-[#111111]">Inventory count</div>
              <div className="text-[10px] text-[#62666D] font-mono">Fresh Foods · 3.4 km · Tomorrow</div>
            </div>
            <div className="text-xs font-mono font-bold text-[#0B8059] bg-[#E7F6F0] px-2 py-0.5 rounded">
              ₹500
            </div>
          </div>
        </div>
      </div>

      {/* Dual CTA buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href="/join"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-medium rounded-lg shadow-sm transition-all"
        >
          <span>Join as a field worker</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/field-workers"
          className="inline-flex items-center px-4 py-2.5 bg-white hover:bg-[#E9E6DE] text-[#111111] text-xs font-medium rounded-lg border border-[#D8D4CB] transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

