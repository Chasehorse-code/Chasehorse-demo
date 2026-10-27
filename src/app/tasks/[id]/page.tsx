"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useChaseHorseStore } from "@/lib/store";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Calendar, 
  Camera, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight,
  ExternalLink,
  UserCheck
} from "lucide-react";
import { cn, formatDateTime, formatCurrency } from "@/lib/utils";

function TaskDetailsContent() {
  const params = useParams();
  const taskId = (params?.id as string) || "CH-24817";
  const { tasks } = useChaseHorseStore();

  const task = tasks.find((t) => t.id === taskId) || tasks[0];

  const isApproved = task.status === "approved";
  const isInReview = task.status === "in_review";
  const isRework = task.status === "rework_requested";
  const isOpen = task.status === "open";

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Back breadcrumb */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/operations"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#62666D] hover:text-[#111111]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Operations Board</span>
            </Link>

            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-mono uppercase font-semibold",
                  isApproved && "bg-[#E7F6F0] text-[#0B8059]",
                  isInReview && "bg-[#FDF6E8] text-[#E9AA36]",
                  isRework && "bg-[#FAEBEA] text-[#C83B36]",
                  isOpen && "bg-[#EBF1FD] text-[#3566D6]"
                )}
              >
                {task.status.replace("_", " ")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 cols: Main Task Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs">
                <div className="text-xs font-mono text-[#F45116] font-semibold mb-1">
                  {task.id} · {task.category}
                </div>
                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111]">
                  {task.title}
                </h1>
                <p className="mt-1 text-xs text-[#62666D] font-mono">
                  Client: <span className="font-semibold text-[#111111]">{task.businessName}</span>
                </p>

                <div className="mt-5 pt-5 border-t border-[#D8D4CB] text-xs text-[#62666D] leading-relaxed">
                  <h3 className="text-xs font-mono uppercase text-[#111111] font-semibold mb-2">
                    Scope of Work
                  </h3>
                  <p>{task.description}</p>
                </div>

                {/* Instructions */}
                <div className="mt-6 pt-5 border-t border-[#D8D4CB]">
                  <h3 className="text-xs font-mono uppercase text-[#111111] font-semibold mb-3">
                    Field Instructions
                  </h3>
                  <div className="space-y-2">
                    {task.instructions.map((inst, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#111111]">
                        <span className="w-4 h-4 rounded-full bg-[#F4F2EC] text-[#62666D] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{inst}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checklist Requirements */}
                <div className="mt-6 pt-5 border-t border-[#D8D4CB]">
                  <h3 className="text-xs font-mono uppercase text-[#111111] font-semibold mb-3">
                    Verification Checklist ({task.checklist.length} items)
                  </h3>
                  <div className="space-y-2">
                    {task.checklist.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between p-3 bg-[#F4F2EC] rounded-lg border border-[#D8D4CB] text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            className={cn(
                              "w-4 h-4 shrink-0",
                              c.completed ? "text-[#0B8059]" : "text-[#D8D4CB]"
                            )}
                          />
                          <span className="font-medium text-[#111111]">{c.label}</span>
                        </div>
                        {c.photoRequired && (
                          <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#D8D4CB] text-[#62666D]">
                            Photo Required
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Latest Submission Card if exists */}
              {task.latestSubmission && (
                <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CB]">
                    <div>
                      <h3 className="text-base font-heading font-bold text-[#111111]">
                        Evidence Submission History
                      </h3>
                      <p className="text-xs text-[#62666D] font-mono mt-0.5">
                        Submitted at {formatDateTime(task.latestSubmission.submittedAt)}
                      </p>
                    </div>

                    <Link
                      href={`/operations/review/${task.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-white text-xs font-mono rounded-lg hover:bg-black"
                    >
                      <span>Review Screen</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {task.latestSubmission.photos.map((p) => (
                      <div key={p.id} className="relative rounded-lg overflow-hidden border border-[#D8D4CB] aspect-[4/3] bg-[#E9E6DE]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.url} alt={p.caption} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 inset-x-0 bg-black/70 text-white p-1 text-[9px] font-mono truncate">
                          {p.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 cols: Location, Worker, & Action Box */}
            <div className="lg:col-span-4 space-y-6">
              {/* Action Box */}
              <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
                <div className="text-xs font-mono text-[#62666D]">Reward Escrow</div>
                <div className="text-3xl font-heading font-extrabold text-[#0B8059] mt-1">
                  ₹{task.rewardAmount}
                </div>
                <p className="text-[11px] text-[#62666D] font-mono mt-0.5">
                  Held in secure escrow · Direct UPI release
                </p>

                <div className="mt-6 space-y-2.5">
                  <Link
                    href={`/tasks/${task.id}/submit`}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Submit Field Evidence</span>
                  </Link>

                  <Link
                    href={`/operations/review/${task.id}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#F4F2EC] hover:bg-[#E9E6DE] text-[#111111] text-xs font-mono font-medium rounded-lg border border-[#D8D4CB] transition-colors"
                  >
                    <span>Operations Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Location Geofence Box */}
              <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#111111] uppercase pb-3 border-b border-[#D8D4CB]">
                  <MapPin className="w-4 h-4 text-[#F45116]" />
                  <span>Physical Geofence</span>
                </div>

                <div className="mt-3 text-xs">
                  <div className="font-semibold text-[#111111]">{task.location.address}</div>
                  <div className="text-[#62666D] font-mono mt-1">
                    {task.location.lat.toFixed(4)}° N, {task.location.lng.toFixed(4)}° E
                  </div>
                  <div className="mt-3 p-2 bg-[#F4F2EC] rounded-lg border border-[#D8D4CB] text-[11px] font-mono">
                    <span className="text-[#62666D]">Allowed Radius:</span>{" "}
                    <span className="font-bold text-[#F45116]">{task.allowedRadiusMeters} meters</span>
                  </div>
                </div>
              </div>

              {/* Assigned Worker Box */}
              {task.assignedWorker && (
                <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#111111] uppercase pb-3 border-b border-[#D8D4CB]">
                    <UserCheck className="w-4 h-4 text-[#0B8059]" />
                    <span>Assigned Field Agent</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-heading font-bold text-sm text-[#111111]">
                        {task.assignedWorker.name}
                      </div>
                      <div className="text-[#62666D] font-mono text-[11px]">
                        ID: {task.assignedWorker.id}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-[#0B8059] bg-[#E7F6F0] px-2 py-0.5 rounded text-[11px]">
                        ★ {task.assignedWorker.rating}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default function TaskDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F4F2EC] flex items-center justify-center font-mono text-xs text-[#62666D]">
          Loading task details...
        </div>
      }
    >
      <TaskDetailsContent />
    </Suspense>
  );
}

