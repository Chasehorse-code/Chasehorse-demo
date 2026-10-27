"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Eye, CheckCircle2, Clock, AlertTriangle, ExternalLink } from "lucide-react";
import { useChaseHorseStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function DashboardPreviewSection() {
  const { tasks, metrics } = useChaseHorseStore();
  const [activePin, setActivePin] = useState("CH-24817");

  return (
    <section className="py-16 bg-[#F4F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#D8D4CB] gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F45116]" />
                Operations Dashboard
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#111111]">
                Bengaluru East — Today
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#62666D] bg-[#F4F2EC] px-3 py-1 rounded-lg border border-[#D8D4CB]">
                Live Field Feed
              </span>
              <Link
                href="/operations"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-medium rounded-lg transition-colors"
              >
                <span>Launch Full Ops Center</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4 KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
              <div className="text-xs font-mono text-[#62666D]">Total tasks</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111]">
                  {metrics.totalTasks}
                </span>
                <span className="text-xs font-mono text-[#0B8059] font-medium">+12%</span>
              </div>
            </div>

            <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
              <div className="text-xs font-mono text-[#62666D]">Completed</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B8059]">
                  {metrics.completedTasks}
                </span>
                <span className="text-xs font-mono text-[#0B8059] font-medium">+18%</span>
              </div>
            </div>

            <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
              <div className="text-xs font-mono text-[#62666D]">In review</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#E9AA36]">
                  {metrics.inReviewTasks}
                </span>
                <span className="text-xs font-mono text-[#E9AA36] font-medium">+5%</span>
              </div>
            </div>

            <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
              <div className="text-xs font-mono text-[#62666D]">Pending</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#62666D]">
                  {metrics.pendingTasks}
                </span>
                <span className="text-xs font-mono text-[#C83B36] font-medium">-8%</span>
              </div>
            </div>
          </div>

          {/* Interactive Map & Submissions Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Interactive Map Canvas (7 cols) */}
            <div className="lg:col-span-7 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] p-4 relative min-h-[360px] overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

              {/* Map Road Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 stroke-[#111111]">
                <line x1="15%" y1="0" x2="15%" y2="100%" strokeWidth="2" />
                <line x1="45%" y1="0" x2="45%" y2="100%" strokeWidth="3" />
                <line x1="85%" y1="0" x2="85%" y2="100%" strokeWidth="2" strokeDasharray="6 6" />
                <line x1="0" y1="40%" x2="100%" y2="40%" strokeWidth="3" />
                <line x1="0" y1="75%" x2="100%" y2="75%" strokeWidth="2" />
              </svg>

              {/* Pins Legend */}
              <div className="relative z-10 flex flex-wrap items-center gap-3 text-[11px] font-mono bg-white/90 backdrop-blur-xs p-2 rounded-lg border border-[#D8D4CB] w-fit">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#0B8059]" /> Approved
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#E9AA36]" /> In review
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#3566D6]" /> On site
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#62666D]" /> Open
                </span>
              </div>

              {/* Live Interactive Pins */}
              {/* Pin 1: CH-24817 (Active in review) */}
              <div
                onClick={() => setActivePin("CH-24817")}
                className="absolute top-[42%] left-[46%] cursor-pointer group z-20"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-[#E9AA36]/60 bg-[#E9AA36]/15 animate-ping pointer-events-none" />
                  <div className="absolute w-4 h-4 rounded-xs bg-[#E9AA36] border-2 border-white shadow-md flex items-center justify-center text-white text-[9px] font-bold" />
                </div>
              </div>

              {/* Pin 2: CH-24816 (Approved) */}
              <div
                onClick={() => setActivePin("CH-24816")}
                className="absolute top-[28%] left-[25%] cursor-pointer group z-10"
              >
                <div className="w-3.5 h-3.5 rounded-xs bg-[#0B8059] border-2 border-white shadow-sm hover:scale-125 transition-transform" />
              </div>

              {/* Pin 3: CH-24815 (Rework) */}
              <div
                onClick={() => setActivePin("CH-24815")}
                className="absolute top-[65%] left-[78%] cursor-pointer group z-10"
              >
                <div className="w-3.5 h-3.5 rounded-xs bg-[#C83B36] border-2 border-white shadow-sm hover:scale-125 transition-transform" />
              </div>

              {/* Pin 4: CH-24814 (Approved) */}
              <div
                onClick={() => setActivePin("CH-24814")}
                className="absolute top-[75%] left-[32%] cursor-pointer group z-10"
              >
                <div className="w-3.5 h-3.5 rounded-xs bg-[#0B8059] border-2 border-white shadow-sm hover:scale-125 transition-transform" />
              </div>

              {/* Active Pin Detail Card Tooltip */}
              <div className="relative z-10 bg-[#111111] text-white p-3 rounded-lg shadow-lg border border-white/20 max-w-sm mt-auto">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span>{activePin} · 18 m actual</span>
                  <span className="text-[#E9AA36] font-semibold">In review</span>
                </div>
                <div className="text-xs font-heading font-bold text-white mt-0.5">
                  Shelf audit — beverages aisle
                </div>
                <div className="text-[11px] text-white/60 font-mono mt-0.5">
                  Apex Retail Brands · <span className="text-white font-semibold">₹450</span> · Ravi K.
                </div>
              </div>
            </div>

            {/* Recent Submissions Table (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="text-xs font-mono font-semibold uppercase text-[#111111] pb-2 border-b border-[#D8D4CB]">
                Recent Submissions
              </div>

              <div className="divide-y divide-[#D8D4CB] text-xs">
                {tasks.slice(0, 4).map((t) => {
                  const isApp = t.status === "approved";
                  const isRew = t.status === "rework_requested";
                  return (
                    <div
                      key={t.id}
                      onClick={() => setActivePin(t.id)}
                      className={cn(
                        "py-3 px-2 flex items-center justify-between rounded-lg cursor-pointer transition-colors",
                        activePin === t.id ? "bg-[#F4F2EC]" : "hover:bg-[#F4F2EC]/60"
                      )}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#111111]">
                            {t.id}
                          </span>
                          <span className="font-medium text-[#111111] line-clamp-1">
                            {t.category}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#62666D] font-mono mt-0.5">
                          {t.businessName}
                        </div>
                      </div>

                      <div className="text-right">
                        <span
                          className={cn(
                            "inline-block text-[10px] font-mono px-2 py-0.5 rounded font-medium",
                            isApp && "bg-[#E7F6F0] text-[#0B8059]",
                            isRew && "bg-[#FAEBEA] text-[#C83B36]",
                            !isApp && !isRew && "bg-[#FDF6E8] text-[#E9AA36]"
                          )}
                        >
                          {isApp ? "Approved" : isRew ? "Rework" : "In review"}
                        </span>
                        <div className="text-[10px] text-[#62666D] font-mono mt-0.5">
                          ₹{t.rewardAmount}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#D8D4CB]">
                <Link
                  href="/operations"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium border border-[#D8D4CB] rounded-lg text-[#111111] hover:bg-[#F4F2EC] transition-colors"
                >
                  <span>View All 124 Operations Records</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

