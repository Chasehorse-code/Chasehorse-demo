"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useChaseHorseStore } from "@/lib/store";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Camera, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  UserCheck, 
  FileText,
  ZoomIn,
  X
} from "lucide-react";
import { cn, formatDateTime } from "@/lib/utils";

function ReviewSubmissionContent() {
  const params = useParams();
  const router = useRouter();
  const taskId = (params?.id as string) || "CH-24817";
  const { tasks, approveSubmission, requestRework } = useChaseHorseStore();

  const task = tasks.find((t) => t.id === taskId) || tasks[0];
  const submission = task.latestSubmission;

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [reworkModalOpen, setReworkModalOpen] = useState(false);
  const [reworkNotes, setReworkNotes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const isApproved = task.status === "approved" || submission?.reviewStatus === "approved";
  const isRework = task.status === "rework_requested" || submission?.reviewStatus === "rework";

  const handleApprove = () => {
    setIsProcessing(true);
    setTimeout(() => {
      approveSubmission(task.id, "Operations verification complete. All AI criteria satisfied.");
      setIsProcessing(false);
      toast.success(`Task ${task.id} Approved`, {
        description: `₹${task.rewardAmount} released to field worker wallet. Audit trail recorded.`,
      });
      router.push("/operations");
    }, 700);
  };

  const handleRework = () => {
    if (!reworkNotes.trim()) {
      toast.error("Please enter specific rework instructions.");
      return;
    }
    requestRework(task.id, reworkNotes);
    setReworkModalOpen(false);
    toast.info("Rework Notice Dispatched", {
      description: "Notification sent to field agent with requested adjustments.",
    });
    router.push("/operations");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top breadcrumb & Status Bar */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href="/operations"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#62666D] hover:text-[#111111]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Review Queue</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#62666D]">
                Submission ID: <span className="font-bold text-[#111111]">{submission?.id || "sub-24817-01"}</span>
              </span>
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-mono uppercase font-bold",
                  isApproved && "bg-[#E7F6F0] text-[#0B8059]",
                  isRework && "bg-[#FAEBEA] text-[#C83B36]",
                  !isApproved && !isRework && "bg-[#FDF6E8] text-[#E9AA36]"
                )}
              >
                {isApproved ? "Approved ✓" : isRework ? "Rework Requested" : "Awaiting Ops Sign-off"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 cols: Evidence Photos & Visual Inspector */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CB]">
                  <div>
                    <h2 className="text-xl font-heading font-extrabold text-[#111111]">
                      Submitted Photo Evidence
                    </h2>
                    <p className="text-xs text-[#62666D] font-mono mt-0.5">
                      3 High-Resolution Views · Geotagged & Timestamped
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-[#E7F6F0] text-[#0B8059] px-2.5 py-1 rounded">
                    Hardware EXIF Locked
                  </span>
                </div>

                {/* Photo Gallery Grid */}
                <div className="mt-4 space-y-4">
                  {submission?.photos?.map((photo, idx) => (
                    <div
                      key={photo.id}
                      className="p-3 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]"
                    >
                      <div className="relative rounded-lg overflow-hidden border border-[#D8D4CB] aspect-[16/9] bg-[#E9E6DE] cursor-pointer group"
                        onClick={() => setSelectedPhoto(photo.url)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover transition-transform group-hover:scale-102" />
                        <div className="absolute top-2 left-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                          <span>View {idx + 1}</span>
                          <ZoomIn className="w-3 h-3 text-[#F45116]" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-[#0B8059] text-[10px] font-mono px-2 py-0.5 rounded">
                          GPS: ±{photo.accuracyMeters}m
                        </div>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-[#111111]">{photo.caption}</span>
                        <span className="font-mono text-[10px] text-[#62666D]">
                          {formatDateTime(photo.timestamp)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Automated AI Checks & Decision Bar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Decision Box */}
              <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#D8D4CB]">
                  <span className="text-xs font-mono uppercase text-[#62666D] font-bold">
                    Escrow Payout
                  </span>
                  <span className="text-xl font-heading font-extrabold text-[#0B8059]">
                    ₹{task.rewardAmount}
                  </span>
                </div>

                <div className="mt-4 text-xs space-y-1">
                  <div className="font-semibold text-[#111111]">{task.title}</div>
                  <div className="text-[#62666D] font-mono">{task.businessName} · {task.location.address}</div>
                </div>

                {/* Worker Card */}
                {task.assignedWorker && (
                  <div className="mt-4 p-3 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] flex items-center justify-between text-xs">
                    <div>
                      <div className="font-heading font-bold text-[#111111]">{task.assignedWorker.name}</div>
                      <div className="text-[10px] font-mono text-[#62666D]">Field Worker ID: {task.assignedWorker.id}</div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#0B8059] bg-[#E7F6F0] px-2 py-0.5 rounded">
                      ★ {task.assignedWorker.rating}
                    </span>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 space-y-2.5">
                  <button
                    onClick={handleApprove}
                    disabled={isApproved || isProcessing}
                    className={cn(
                      "w-full py-3 text-xs font-semibold rounded-xl text-white shadow-sm flex items-center justify-center gap-2 transition-all",
                      isApproved
                        ? "bg-[#0B8059] cursor-default opacity-80"
                        : "bg-[#0B8059] hover:bg-[#096B4A] active:scale-95"
                    )}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isApproved ? "Approved ✓ Reward Disbursed" : "Approve & Release ₹" + task.rewardAmount}</span>
                  </button>

                  <button
                    onClick={() => setReworkModalOpen(true)}
                    disabled={isApproved}
                    className={cn(
                      "w-full py-2.5 text-xs font-mono font-semibold rounded-xl border border-[#D8D4CB] transition-colors",
                      isApproved
                        ? "text-[#62666D] cursor-not-allowed opacity-50"
                        : "text-[#111111] hover:bg-[#F4F2EC]"
                    )}
                  >
                    Request Corrections / Rework
                  </button>
                </div>
              </div>

              {/* AI-Assisted Checks Panel */}
              <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#111111] pb-3 border-b border-[#D8D4CB]">
                  <Sparkles className="w-4 h-4 text-[#F45116]" />
                  <span>AI Automated Verification Results</span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div className="p-3 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 flex items-start gap-2.5 text-[#0B8059]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Within 150m Radius (18m actual)</div>
                      <div className="text-[11px] text-[#0B8059]/80 font-mono mt-0.5">
                        Distance from store entrance: 18m. Geofence criteria met.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 flex items-start gap-2.5 text-[#0B8059]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">In Task Window</div>
                      <div className="text-[11px] text-[#0B8059]/80 font-mono mt-0.5">
                        Submitted at 10:24 AM (Window open until 6:00 PM).
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 flex items-start gap-2.5 text-[#0B8059]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">No Image Duplicates (Hash Score 0.02)</div>
                      <div className="text-[11px] text-[#0B8059]/80 font-mono mt-0.5">
                        Compared against 50,000+ historical audit images across India.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 flex items-start gap-2.5 text-[#0B8059]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Subject Matches Checklist</div>
                      <div className="text-[11px] text-[#0B8059]/80 font-mono mt-0.5">
                        Computer vision confirmed beverage bottles, promotional endcap banner, and price tag barcodes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist Sign-Off */}
              <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
                <h3 className="text-xs font-mono uppercase font-bold text-[#111111] pb-3 border-b border-[#D8D4CB]">
                  Mandatory Checklist Sign-off (5/5)
                </h3>

                <div className="mt-3 space-y-2 text-xs">
                  {task.checklist.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 text-[#0B8059]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="font-medium text-[#111111]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Photo Zoom Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs cursor-zoom-out"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-10 right-0 text-white font-mono text-xs flex items-center gap-1 hover:text-[#F45116]"
            >
              <X className="w-4 h-4" /> Close [Esc]
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedPhoto} alt="Full resolution evidence" className="rounded-xl max-h-[85vh] object-contain shadow-2xl" />
          </div>
        </div>
      )}

      {/* Rework Modal Dialog */}
      {reworkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-[#D8D4CB] shadow-2xl p-6 max-w-md w-full">
            <h3 className="text-base font-heading font-bold text-[#111111]">
              Request Rework on {task.id}
            </h3>
            <p className="mt-1 text-xs text-[#62666D]">
              Provide specific instructions for field agent {task.assignedWorker?.name || "Ravi K."}. The task will reopen for evidence resubmission.
            </p>

            <div className="mt-4">
              <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                Rework Reason & Instructions
              </label>
              <textarea
                value={reworkNotes}
                onChange={(e) => setReworkNotes(e.target.value)}
                placeholder="e.g. Please capture a closer shot of the promotional discount sticker on the second tier. Barcode was slightly reflective."
                rows={3}
                className="w-full text-xs p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
              />
            </div>

            <div className="mt-5 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setReworkModalOpen(false)}
                className="px-3 py-1.5 text-xs font-mono border border-[#D8D4CB] rounded-lg text-[#62666D] hover:bg-[#F4F2EC]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleRework}
                className="px-4 py-1.5 text-xs font-semibold bg-[#F45116] hover:bg-[#D9430D] text-white rounded-lg"
              >
                Send Rework Request
              </button>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}

export default function ReviewSubmissionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F4F2EC] flex items-center justify-center font-mono text-xs text-[#62666D]">
          Loading operational review data...
        </div>
      }
    >
      <ReviewSubmissionContent />
    </Suspense>
  );
}

