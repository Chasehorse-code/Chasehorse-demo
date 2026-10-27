"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  MapPin, 
  Camera, 
  ListChecks, 
  Cpu, 
  UserCheck, 
  CheckCircle2 
} from "lucide-react";

export function VerificationSection() {
  const timelineSteps = [
    {
      label: "Check-in",
      detail: "Within 150 m radius · 10:24 AM",
      icon: MapPin,
      status: "completed",
    },
    {
      label: "Photo evidence",
      detail: "3 photos submitted with EXIF coordinates",
      icon: Camera,
      status: "completed",
    },
    {
      label: "Checklist",
      detail: "All items completed · 5/5 mandatory",
      icon: ListChecks,
      status: "completed",
    },
    {
      label: "Automated checks",
      detail: "No duplicates found · AI match 98%",
      icon: Cpu,
      status: "completed",
    },
    {
      label: "Human review",
      detail: "Operations lead sign-off in progress",
      icon: UserCheck,
      status: "active",
    },
    {
      label: "Approval",
      detail: "Reward released to verified worker wallet",
      icon: CheckCircle2,
      status: "pending",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold mb-3">
          <span className="w-2 h-2 rounded-full bg-[#F45116]" />
          Verification
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111] leading-tight">
          Multi-layer verification for trusted outcomes.
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-[#62666D] leading-relaxed">
          Location, time, photo evidence and checklist completion work together with human review to ensure task integrity.
        </p>

        {/* Vertical Verification Timeline */}
        <div className="mt-6 relative pl-6 border-l-2 border-[#D8D4CB] space-y-4">
          {timelineSteps.map((step, idx) => {
            const isCompleted = step.status === "completed";
            const isActive = step.status === "active";
            const Icon = step.icon;

            return (
              <div key={step.label} className="relative group">
                {/* Node indicator on vertical line */}
                <div
                  className={`absolute -left-[31px] top-0.5 w-5 h-5 rounded-full flex items-center justify-center border-2 bg-white transition-all ${
                    isCompleted
                      ? "border-[#0B8059] text-[#0B8059]"
                      : isActive
                      ? "border-[#E9AA36] text-[#E9AA36] animate-pulse"
                      : "border-[#D8D4CB] text-[#62666D]"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${
                    isCompleted ? "bg-[#0B8059]" : isActive ? "bg-[#E9AA36]" : "bg-[#D8D4CB]"
                  }`} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-heading font-bold text-[#111111]">
                      {step.label}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-mono bg-[#FDF6E8] text-[#E9AA36] px-1.5 py-0.2 rounded">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#62666D] font-mono mt-0.5">
                    {step.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-6 border-t border-[#D8D4CB] mt-6">
        <Link
          href="/verification"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#111111] hover:text-[#F45116] transition-colors"
        >
          <span>Learn more about verification</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

