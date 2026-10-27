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
  MapPin, 
  Camera, 
  CheckCircle2, 
  AlertCircle, 
  UploadCloud, 
  Smartphone,
  Navigation,
  Sparkles,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

function TaskSubmissionContent() {
  const params = useParams();
  const router = useRouter();
  const taskId = (params?.id as string) || "CH-24817";
  const { tasks, submitEvidence } = useChaseHorseStore();

  const task = tasks.find((t) => t.id === taskId) || tasks[0];

  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [gpsSimulating, setGpsSimulating] = useState(false);
  const [gpsDistance, setGpsDistance] = useState(18);

  const [checklist, setChecklist] = useState(
    task.checklist.map((c) => ({ ...c, completed: true }))
  );

  const [photos, setPhotos] = useState<string[]>([
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&auto=format&fit=crop&q=80",
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSimulateCheckIn = () => {
    setGpsSimulating(true);
    setTimeout(() => {
      setGpsSimulating(false);
      setIsCheckedIn(true);
      toast.success("GPS Verified", {
        description: "Device located within 18m of target. In-app camera unlocked.",
      });
    }, 900);
  };

  const handleChecklistToggle = (id: string) => {
    setChecklist(
      checklist.map((c) => (c.id === id ? { ...c, completed: !c.completed } : c))
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCheckedIn) {
      toast.error("GPS Check-in Required", {
        description: "You must perform location check-in before submitting evidence.",
      });
      return;
    }

    const uncompleted = checklist.filter((c) => c.required && !c.completed);
    if (uncompleted.length > 0) {
      toast.error("Incomplete Checklist", {
        description: `Please complete all ${checklist.length} mandatory items.`,
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      submitEvidence(task.id, {
        photos: photos.map((url, i) => ({
          id: `p_${i + 1}`,
          url,
          caption: `Verified Evidence Photo #${i + 1}`,
          timestamp: new Date().toISOString(),
          lat: task.location.lat,
          lng: task.location.lng,
          accuracyMeters: 4.2,
        })),
        checklist,
      });

      toast.success("Evidence Submitted Successfully", {
        description: "Your submission has been queued for operations review. ₹" + task.rewardAmount + " held in escrow.",
      });

      router.push(`/tasks/${task.id}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-10 lg:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href={`/tasks/${task.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#62666D] hover:text-[#111111]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Task Details</span>
            </Link>

            <span className="text-xs font-mono bg-[#E9E6DE] text-[#111111] px-2.5 py-1 rounded">
              Task {task.id}
            </span>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Header info */}
            <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
              <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-[#111111]">
                Submit Field Evidence
              </h1>
              <p className="mt-1 text-xs text-[#62666D]">
                Task: <span className="font-semibold text-[#111111]">{task.title}</span> ({task.businessName})
              </p>
            </div>

            {/* GPS Check-in Card */}
            <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CB]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F45116]" />
                  <h3 className="text-sm font-heading font-bold text-[#111111]">
                    Step 1: On-Site GPS Check-In
                  </h3>
                </div>

                <span
                  className={cn(
                    "text-[10px] font-mono px-2 py-0.5 rounded font-semibold",
                    isCheckedIn ? "bg-[#E7F6F0] text-[#0B8059]" : "bg-[#FDF6E8] text-[#E9AA36]"
                  )}
                >
                  {isCheckedIn ? "Geofence Locked ✓" : "Pending Location"}
                </span>
              </div>

              <div className="mt-4 p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
                <div className="text-xs font-mono">
                  <span className="text-[#62666D]">Target Location:</span>{" "}
                  <span className="font-semibold text-[#111111]">{task.location.address}</span>
                </div>
                <div className="text-xs font-mono mt-1">
                  <span className="text-[#62666D]">Allowed Radius:</span>{" "}
                  <span className="font-bold text-[#F45116]">{task.allowedRadiusMeters} meters</span>
                </div>

                {isCheckedIn ? (
                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#0B8059] font-semibold bg-[#E7F6F0] p-2.5 rounded-lg border border-[#0B8059]/30">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Current position: 18m from target (GPS accuracy ±3.8m). Check-in confirmed.</span>
                  </div>
                ) : (
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleSimulateCheckIn}
                      disabled={gpsSimulating}
                      className="px-5 py-2.5 bg-[#111111] hover:bg-black text-white text-xs font-mono font-semibold rounded-lg shadow-sm flex items-center gap-2"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#F45116]" />
                      <span>{gpsSimulating ? "Locking GPS satellite fix..." : "Simulate On-Site GPS Check-In"}</span>
                    </button>
                    <span className="text-[11px] text-[#62666D] font-mono">
                      (Simulates arriving at Indiranagar 100ft Rd)
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Photo Capture & Uploads */}
            <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CB]">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#F45116]" />
                  <h3 className="text-sm font-heading font-bold text-[#111111]">
                    Step 2: Live In-App Photo Capture ({photos.length} photos)
                  </h3>
                </div>

                {!isCheckedIn && (
                  <span className="text-[10px] font-mono text-[#C83B36] flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Locked until GPS Check-in
                  </span>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {photos.map((url, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden border border-[#D8D4CB] aspect-[4/3] bg-[#E9E6DE] group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={url} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-black/75 text-white text-[9px] font-mono px-2 py-0.5 rounded">
                      Photo {i + 1} of 3
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-black/80 text-[#0B8059] text-[9px] font-mono p-1 rounded text-center truncate">
                      ✓ EXIF & GPS Tagged
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist items */}
            <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs">
              <h3 className="text-sm font-heading font-bold text-[#111111] pb-4 border-b border-[#D8D4CB]">
                Step 3: Execution Checklist
              </h3>

              <div className="mt-4 space-y-2.5">
                {checklist.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-[#F4F2EC] rounded-lg border border-[#D8D4CB] cursor-pointer hover:bg-[#E9E6DE]/60 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleChecklistToggle(item.id)}
                      className="w-4 h-4 rounded text-[#F45116] accent-[#F45116]"
                    />
                    <span className="text-xs font-medium text-[#111111]">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !isCheckedIn}
                className={cn(
                  "w-full py-3.5 text-xs font-semibold rounded-xl text-white shadow-md flex items-center justify-center gap-2 transition-all",
                  !isCheckedIn
                    ? "bg-[#62666D] cursor-not-allowed opacity-60"
                    : "bg-[#0B8059] hover:bg-[#096B4A] active:scale-95"
                )}
              >
                <span>{isSubmitting ? "Uploading evidence & generating cryptographic audit hash..." : `Submit for Review (Claim ₹${task.rewardAmount})`}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default function TaskSubmissionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F4F2EC] flex items-center justify-center font-mono text-xs text-[#62666D]">
          Loading submission interface...
        </div>
      }
    >
      <TaskSubmissionContent />
    </Suspense>
  );
}

