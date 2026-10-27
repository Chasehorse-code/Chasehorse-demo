"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Users, 
  Sliders, 
  ClipboardCheck, 
  FileCheck2,
  DollarSign
} from "lucide-react";

export function BusinessesSection() {
  const features = [
    "Create and manage tasks",
    "Set location and radius",
    "Define evidence requirements",
    "Track real-time progress",
    "Review and approve submissions",
    "Maintain complete audit trail",
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold mb-3">
          <span className="w-2 h-2 rounded-full bg-[#F45116]" />
          For Businesses
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111] leading-tight">
          Turn field requirements into clear, trackable work.
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-[#62666D] leading-relaxed">
          Define the task, set the location and deadline, specify the evidence you need, and review submissions through one operational workflow.
        </p>

        {/* Features Checklist */}
        <div className="mt-6 space-y-2.5">
          {features.map((feat) => (
            <div key={feat} className="flex items-center gap-2.5 text-xs text-[#111111]">
              <div className="w-4 h-4 rounded-full bg-[#E7F6F0] text-[#0B8059] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span className="font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Interactive Task Setup Card */}
      <div className="my-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] p-4 relative overflow-hidden">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-[#D8D4CB] font-mono">
          <span className="font-bold text-[#111111]">New Task</span>
          <span className="text-[#0B8059] bg-[#E7F6F0] px-1.5 py-0.5 rounded text-[10px]">Drafting</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 bg-white rounded-lg border border-[#D8D4CB]">
            <div className="text-[#62666D] text-[10px]">Category</div>
            <div className="font-semibold text-[#111111]">Store audit</div>
          </div>
          <div className="p-2 bg-white rounded-lg border border-[#D8D4CB]">
            <div className="text-[#62666D] text-[10px]">Radius</div>
            <div className="font-semibold text-[#F45116]">2 km radius</div>
          </div>
        </div>

        {/* Radar Map & Worker Avatars */}
        <div className="mt-3 pt-3 border-t border-[#D8D4CB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5 overflow-hidden">
              <div className="w-6 h-6 rounded-full bg-[#3566D6] text-white text-[9px] flex items-center justify-center font-bold border border-white">RK</div>
              <div className="w-6 h-6 rounded-full bg-[#0B8059] text-white text-[9px] flex items-center justify-center font-bold border border-white">AS</div>
              <div className="w-6 h-6 rounded-full bg-[#E9AA36] text-white text-[9px] flex items-center justify-center font-bold border border-white">PM</div>
            </div>
            <span className="text-[11px] font-mono text-[#111111] font-medium">
              12 eligible workers nearby
            </span>
          </div>

          <Link href="/businesses" className="text-[11px] font-mono text-[#F45116] hover:underline">
            View workers →
          </Link>
        </div>
      </div>

      {/* Dual CTA buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href="/tasks/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-medium rounded-lg shadow-sm transition-all"
        >
          <span>Post field tasks</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center px-4 py-2.5 bg-white hover:bg-[#E9E6DE] text-[#111111] text-xs font-medium rounded-lg border border-[#D8D4CB] transition-colors"
        >
          Talk to our team
        </Link>
      </div>
    </div>
  );
}

