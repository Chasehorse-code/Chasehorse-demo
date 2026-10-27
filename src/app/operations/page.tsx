"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useChaseHorseStore } from "@/lib/store";
import { 
  Layers, 
  MapPin, 
  Search, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  ExternalLink,
  ArrowRight,
  Sparkles,
  Users,
  Building,
  RotateCcw
} from "lucide-react";
import { cn, formatDateTime } from "@/lib/utils";

export default function OperationsPage() {
  const { tasks, metrics, isDemoMode, toggleDemoMode } = useChaseHorseStore();
  const [activeTab, setActiveTab] = useState<"all" | "in_review" | "approved" | "rework_requested" | "open">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTask, setSelectedTask] = useState(tasks[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filteredTasks = tasks.filter((t) => {
    const matchesTab = activeTab === "all" || t.status === activeTab;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.businessName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#D8D4CB] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#F45116]" />
                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111]">
                  Operations Command Center
                </h1>
                <span className="text-xs font-mono bg-[#E9E6DE] text-[#111111] px-2 py-0.5 rounded border border-[#D8D4CB]">
                  Bengaluru East Hub
                </span>
              </div>
              <p className="mt-1 text-xs text-[#62666D]">
                Real-time oversight of task dispatch, geofence check-ins, automated AI checks, and evidence sign-offs.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/tasks/new"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Post New Task</span>
              </Link>
            </div>
          </div>

          {/* 4 Operations KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-5 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#62666D]">
                <span>Total Tasks Today</span>
                <span className="text-[#0B8059] font-bold">+12%</span>
              </div>
              <div className="text-3xl font-heading font-extrabold text-[#111111] mt-2">
                {metrics.totalTasks}
              </div>
              <div className="text-[11px] font-mono text-[#62666D] mt-1">
                Across 14 retail partner brands
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#62666D]">
                <span>Completed & Approved</span>
                <span className="text-[#0B8059] font-bold">+18%</span>
              </div>
              <div className="text-3xl font-heading font-extrabold text-[#0B8059] mt-2">
                {metrics.completedTasks}
              </div>
              <div className="text-[11px] font-mono text-[#62666D] mt-1">
                Payouts cleared: ₹{metrics.totalPayouts.toLocaleString()}
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#62666D]">
                <span>Review Queue</span>
                <span className="text-[#E9AA36] font-bold animate-pulse">Needs Ops</span>
              </div>
              <div className="text-3xl font-heading font-extrabold text-[#E9AA36] mt-2">
                {metrics.inReviewTasks}
              </div>
              <div className="text-[11px] font-mono text-[#62666D] mt-1">
                Avg review time: 3.2 mins
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#62666D]">
                <span>Active Field Agents</span>
                <span className="text-[#3566D6] font-bold">Online</span>
              </div>
              <div className="text-3xl font-heading font-extrabold text-[#3566D6] mt-2">
                {metrics.activeWorkers}
              </div>
              <div className="text-[11px] font-mono text-[#62666D] mt-1">
                99.4% Geofence accuracy
              </div>
            </div>
          </div>

          {/* Main Dashboard Workspace (Split: Task List + Map / Quick Inspector) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Task Table (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs flex flex-col justify-between">
              <div>
                {/* Search & Status Tabs */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D8D4CB]">
                  {/* Status tabs */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    {[
                      { key: "all", label: "All Tasks" },
                      { key: "in_review", label: "In Review (18)" },
                      { key: "approved", label: "Approved" },
                      { key: "rework_requested", label: "Rework" },
                      { key: "open", label: "Open" },
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as any)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg transition-colors font-medium",
                          activeTab === tab.key
                            ? "bg-[#111111] text-white font-bold"
                            : "bg-[#F4F2EC] text-[#62666D] hover:text-[#111111]"
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Search box */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-[#62666D] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search task, brand, ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-xs pl-8 pr-3 py-1.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116] w-full sm:w-48"
                    />
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#D8D4CB] text-[#62666D] font-mono">
                        <th className="py-2.5 px-3">Task ID</th>
                        <th className="py-2.5 px-3">Title & Category</th>
                        <th className="py-2.5 px-3">Client</th>
                        <th className="py-2.5 px-3">Reward</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D8D4CB]/60">
                      {filteredTasks.map((t) => {
                        const isApp = t.status === "approved";
                        const isRew = t.status === "rework_requested";
                        const isInRev = t.status === "in_review";
                        return (
                          <tr
                            key={t.id}
                            onClick={() => {
                              setSelectedTask(t);
                              setDrawerOpen(true);
                            }}
                            className={cn(
                              "hover:bg-[#F4F2EC]/60 transition-colors cursor-pointer",
                              selectedTask.id === t.id && "bg-[#F4F2EC]"
                            )}
                          >
                            <td className="py-3 px-3 font-mono font-bold text-[#111111]">
                              {t.id}
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-semibold text-[#111111] line-clamp-1">
                                {t.title}
                              </div>
                              <div className="text-[10px] text-[#62666D] font-mono">
                                {t.category}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-[#62666D] font-medium">
                              {t.businessName}
                            </td>
                            <td className="py-3 px-3 font-mono font-bold text-[#111111]">
                              ₹{t.rewardAmount}
                            </td>
                            <td className="py-3 px-3">
                              <span
                                className={cn(
                                  "inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold",
                                  isApp && "bg-[#E7F6F0] text-[#0B8059]",
                                  isRew && "bg-[#FAEBEA] text-[#C83B36]",
                                  isInRev && "bg-[#FDF6E8] text-[#E9AA36]",
                                  !isApp && !isRew && !isInRev && "bg-[#EBF1FD] text-[#3566D6]"
                                )}
                              >
                                {t.status.replace("_", " ")}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right">
                              <Link
                                href={isInRev ? `/operations/review/${t.id}` : `/tasks/${t.id}`}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#F45116] hover:underline"
                              >
                                <span>{isInRev ? "Review" : "Inspect"}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D4CB] flex items-center justify-between text-xs text-[#62666D] font-mono mt-4">
                <span>Showing {filteredTasks.length} tasks in current view</span>
                <span>Bengaluru East Geo-partition</span>
              </div>
            </div>

            {/* Quick Task Inspection Panel (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D8D4CB]">
                  <span className="text-xs font-mono font-bold text-[#111111] uppercase">
                    Task Inspection Panel
                  </span>
                  <span className="text-xs font-mono text-[#F45116] font-bold">
                    {selectedTask.id}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-base font-heading font-bold text-[#111111]">
                    {selectedTask.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#62666D]">
                    {selectedTask.description}
                  </p>
                </div>

                {/* Location and Geofence */}
                <div className="mt-4 p-3 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] text-xs space-y-1.5 font-mono">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#F45116] shrink-0 mt-0.5" />
                    <span className="text-[#111111] font-semibold">{selectedTask.location.address}</span>
                  </div>
                  <div className="text-[11px] text-[#62666D] pl-5.5">
                    Radius: {selectedTask.allowedRadiusMeters}m geofence
                  </div>
                </div>

                {/* Assigned Worker */}
                {selectedTask.assignedWorker && (
                  <div className="mt-4 p-3 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-[#111111]">{selectedTask.assignedWorker.name}</div>
                      <div className="text-[10px] font-mono text-[#62666D]">ID: {selectedTask.assignedWorker.id}</div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#0B8059] bg-[#E7F6F0] px-2 py-0.5 rounded">
                      ★ {selectedTask.assignedWorker.rating}
                    </span>
                  </div>
                )}

                {/* AI Checks overview if submitted */}
                {selectedTask.latestSubmission && (
                  <div className="mt-4 p-3 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 text-xs text-[#0B8059]">
                    <div className="flex items-center gap-1.5 font-mono font-bold text-[10px] uppercase mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Verification Passed</span>
                    </div>
                    <div>Distance: 18m (Within 150m) · EXIF Timestamp Verified</div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#D8D4CB] space-y-2">
                {selectedTask.status === "in_review" ? (
                  <Link
                    href={`/operations/review/${selectedTask.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                  >
                    <span>Launch Formal Review Screen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href={`/tasks/${selectedTask.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#111111] hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                  >
                    <span>Inspect Full Task & Photos</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

