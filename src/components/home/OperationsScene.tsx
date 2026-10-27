"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  RefreshCw, 
  ExternalLink,
  ChevronRight,
  Wifi,
  Battery
} from "lucide-react";
import { useChaseHorseStore } from "@/lib/store";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function OperationsScene() {
  const { tasks, approveSubmission, requestRework } = useChaseHorseStore();
  const currentTask = tasks.find((t) => t.id === "CH-24817") || tasks[0];
  const [reworkModalOpen, setReworkModalOpen] = useState(false);
  const [reworkNotes, setReworkNotes] = useState("");
  const isApproved = currentTask.status === "approved";
  const isRework = currentTask.status === "rework_requested";

  const handleApprove = () => {
    approveSubmission(currentTask.id, "All 4 AI-assisted checks verified. Quality standard met.");
    toast.success("Task CH-24817 Approved", {
      description: "₹450 reward released to field worker Ravi K.",
    });
  };

  const handleReworkSubmit = () => {
    if (!reworkNotes.trim()) {
      toast.error("Please enter rework instructions for the worker");
      return;
    }
    requestRework(currentTask.id, reworkNotes);
    setReworkModalOpen(false);
    toast.info("Rework requested", {
      description: "Notification dispatched to Ravi K. with requested corrections.",
    });
  };

  return (
    <div className="relative w-full rounded-2xl bg-white border border-[#D8D4CB] shadow-sm overflow-hidden p-3 sm:p-5">
      {/* Board Top Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D8D4CB]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#F45116]" />
          <span className="text-xs sm:text-sm font-heading font-semibold text-[#111111]">
            Operations board
          </span>
          <span className="text-xs text-[#62666D] font-mono">
            Bengaluru East — Today
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono bg-[#E9E6DE] text-[#111111] px-2 py-0.5 rounded border border-[#D8D4CB]">
            All statuses
          </span>
        </div>
      </div>

      {/* Grid Canvas with Map Lines & Task Nodes */}
      <div className="relative w-full h-[460px] sm:h-[500px] bg-[#F4F2EC] rounded-xl overflow-hidden border border-[#D8D4CB]">
        {/* Subtle Map Grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        {/* Map roads/streets representation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 stroke-[#D8D4CB]">
          <line x1="20%" y1="0" x2="20%" y2="100%" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="3" />
          <line x1="80%" y1="0" x2="80%" y2="100%" strokeWidth="2" />
          <line x1="0" y1="35%" x2="100%" y2="35%" strokeWidth="3" />
          <line x1="0" y1="70%" x2="100%" y2="70%" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Background Task Markers on the grid */}
        <div className="absolute top-[22%] left-[24%] w-3 h-3 rounded-sm bg-[#0B8059] shadow-sm" title="Completed Task" />
        <div className="absolute top-[48%] left-[84%] w-3 h-3 rounded-sm bg-[#3566D6] shadow-sm" title="On-site Worker" />
        <div className="absolute top-[78%] left-[30%] w-3 h-3 rounded-sm bg-[#0B8059] shadow-sm" />
        <div className="absolute top-[65%] left-[72%] w-3 h-3 rounded-sm bg-[#0B8059] shadow-sm" />

        {/* Active Selected Task Marker with Pulsing Radius */}
        <div className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {/* Pulsing Radius Ring */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#F45116]/40 bg-[#F45116]/5 animate-pulse-ring pointer-events-none" />
          {/* Inner Geofence Ring */}
          <div className="absolute w-14 h-14 rounded-full border border-dashed border-[#F45116]/60 pointer-events-none" />
          {/* Central Pin */}
          <div className="relative z-10 w-4 h-4 rounded-sm bg-[#F45116] border-2 border-white shadow-md flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </div>
          {/* Pin Tag */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#111111] text-white text-[10px] font-mono px-2 py-0.5 rounded shadow-sm">
            CH-24817 · 18 m
          </div>
        </div>

        {/* FLOATING MOBILE PHONE MOCKUP (Left Overlay) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-2 sm:left-4 bottom-3 sm:bottom-4 w-[190px] sm:w-[220px] bg-white rounded-2xl border-2 border-[#111111] shadow-2xl overflow-hidden z-20"
        >
          {/* Phone Notch/Status */}
          <div className="bg-[#111111] text-white px-3 py-1 flex items-center justify-between text-[10px] font-mono">
            <span>13:14</span>
            <div className="w-10 h-2 bg-black rounded-full mx-auto" />
            <div className="flex items-center gap-1">
              <Wifi className="w-2.5 h-2.5" />
              <Battery className="w-2.5 h-2.5" />
            </div>
          </div>

          {/* Phone Content */}
          <div className="p-3 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-medium text-[#0B8059] bg-[#E7F6F0] px-1.5 py-0.5 rounded">
                Submitted
              </span>
              <span className="text-[10px] font-mono text-[#62666D]">
                CH-24817 · 3 photos
              </span>
            </div>

            <div className="flex items-center gap-2.5 my-3 p-2 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
              <div className="w-8 h-8 rounded-lg bg-[#FDF6E8] border border-[#E9AA36]/40 flex items-center justify-center text-[#E9AA36] shrink-0">
                <Clock className="w-4 h-4 animate-spin [animation-duration:8s]" />
              </div>
              <div>
                <div className="text-xs font-heading font-bold text-[#111111]">
                  With operations
                </div>
                <div className="text-[10px] text-[#62666D] leading-tight">
                  ₹450 is held until reviewer approves your evidence.
                </div>
              </div>
            </div>

            {/* Simulated Live Automated Checks Bar */}
            <div className="bg-[#111111] text-white p-2 rounded-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F45116] animate-ping shrink-0" />
              <span className="text-[10px] font-mono text-white/90">
                Automated checks running
              </span>
            </div>
          </div>
        </motion.div>

        {/* OPERATIONS REVIEW CARD OVERLAY (Right Overlay) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute right-2 sm:right-4 top-3 sm:top-4 w-[240px] sm:w-[280px] bg-white rounded-xl border border-[#D8D4CB] shadow-xl p-3 sm:p-4 z-20"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between text-xs pb-2 border-b border-[#D8D4CB]">
            <span className="font-mono text-[#111111] font-semibold">
              CH-24817
            </span>
            <span
              className={cn(
                "text-[10px] font-mono uppercase px-2 py-0.5 rounded font-medium",
                isApproved && "bg-[#E7F6F0] text-[#0B8059]",
                isRework && "bg-[#FAEBEA] text-[#C83B36]",
                !isApproved && !isRework && "bg-[#FDF6E8] text-[#E9AA36]"
              )}
            >
              {isApproved ? "Approved" : isRework ? "Rework" : "In review"}
            </span>
          </div>

          {/* Task Info */}
          <div className="mt-2.5">
            <h4 className="text-xs sm:text-sm font-heading font-bold text-[#111111] line-clamp-1">
              Shelf audit — beverages aisle
            </h4>
            <p className="text-[11px] text-[#62666D] font-mono mt-0.5">
              Apex Retail Brands · <span className="font-semibold text-[#111111]">₹450</span> · Ravi K.
            </p>
          </div>

          {/* Submitted Evidence Photo Preview */}
          <div className="relative mt-2.5 rounded-lg overflow-hidden border border-[#D8D4CB] aspect-[16/9] bg-[#E9E6DE]">
            <Image
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&auto=format&fit=crop&q=80"
              alt="Evidence photo beverage shelf"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
            <div className="absolute bottom-1 right-1 bg-black/75 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
              3 photos
            </div>
          </div>

          {/* AI-Assisted Checks Checklist */}
          <div className="mt-3 bg-[#F4F2EC] p-2.5 rounded-lg border border-[#D8D4CB]">
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase text-[#111111] mb-1.5">
              <Sparkles className="w-3 h-3 text-[#F45116]" />
              <span>AI-Assisted Checks</span>
            </div>

            <div className="space-y-1 text-[11px]">
              <div className="flex items-center gap-1.5 text-[#0B8059]">
                <Check className="w-3 h-3 shrink-0" />
                <span>Within 150 m radius (18 m)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#0B8059]">
                <Check className="w-3 h-3 shrink-0" />
                <span>In task window</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#0B8059]">
                <Check className="w-3 h-3 shrink-0" />
                <span>No duplicates found</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#0B8059]">
                <Check className="w-3 h-3 shrink-0" />
                <span>Subject matches checklist</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => setReworkModalOpen(true)}
              disabled={isApproved}
              className={cn(
                "py-1.5 text-xs font-medium rounded-lg border border-[#D8D4CB] transition-colors",
                isApproved
                  ? "opacity-50 cursor-not-allowed text-[#62666D]"
                  : "text-[#111111] hover:bg-[#E9E6DE] active:scale-95"
              )}
            >
              Rework
            </button>
            <button
              onClick={handleApprove}
              disabled={isApproved}
              className={cn(
                "py-1.5 text-xs font-medium rounded-lg text-white transition-all shadow-sm",
                isApproved
                  ? "bg-[#0B8059] cursor-default"
                  : "bg-[#0B8059] hover:bg-[#096B4A] active:scale-95"
              )}
            >
              {isApproved ? "Approved ✓" : "Approve"}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Rework Modal Dialog */}
      <AnimatePresence>
        {reworkModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl border border-[#D8D4CB] shadow-2xl p-6 max-w-md w-full"
            >
              <h3 className="text-base font-heading font-bold text-[#111111]">
                Request Rework on Task CH-24817
              </h3>
              <p className="mt-1 text-xs text-[#62666D]">
                Specify why this submission needs correction. The field worker will receive your notes and be prompted to resubmit within the task window.
              </p>

              <div className="mt-4">
                <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                  Rework Instructions
                </label>
                <textarea
                  value={reworkNotes}
                  onChange={(e) => setReworkNotes(e.target.value)}
                  placeholder="e.g. Please capture a clearer close-up of the promotional discount banner on the 2nd shelf."
                  rows={3}
                  className="w-full text-xs p-2.5 rounded-lg border border-[#D8D4CB] focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                />
              </div>

              <div className="mt-5 flex items-center justify-end gap-2.5">
                <button
                  onClick={() => setReworkModalOpen(false)}
                  className="px-3 py-1.5 text-xs font-medium border border-[#D8D4CB] rounded-lg text-[#62666D] hover:bg-[#E9E6DE]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReworkSubmit}
                  className="px-4 py-1.5 text-xs font-medium bg-[#F45116] hover:bg-[#D9430D] text-white rounded-lg"
                >
                  Send Rework Notice
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

