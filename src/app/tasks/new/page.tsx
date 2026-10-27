"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useChaseHorseStore } from "@/lib/store";
import { TaskCategory, ChecklistItem } from "@/lib/types";
import { toast } from "sonner";
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Plus, 
  Trash2, 
  MapPin, 
  Calendar, 
  Camera, 
  Coins, 
  FileCheck2,
  Sliders
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES: TaskCategory[] = [
  "Store audit",
  "Signage check",
  "Inventory count",
  "Shelf audit",
  "Price verification",
  "Asset inspection",
  "Mystery shopper",
];

export default function PostTaskPage() {
  const router = useRouter();
  const { createTask } = useChaseHorseStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "Endcap Planogram Audit — Festive Beverages",
    category: "Shelf audit" as TaskCategory,
    description: "Verify that festive beverage packs are correctly displayed on primary endcaps facing aisle 3 and 4 with promotional price tags.",
    businessName: "Apex Retail Brands",
    businessId: "biz-apex-01",
    address: "HyperCity, 100ft Rd, Indiranagar",
    city: "Bengaluru",
    lat: 12.9716,
    lng: 77.6412,
    allowedRadiusMeters: 150,
    startDate: "2026-10-28T09:00",
    deadline: "2026-10-28T18:00",
    expectedDurationMinutes: 25,
    rewardAmount: 450,
    currency: "INR",
    workerCount: 1,
    requiredPhotosCount: 3,
  });

  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: "c1", label: "Check stock availability on top two tiers", completed: false, required: true },
    { id: "c2", label: "Verify promotional tag visibility and barcode scan", completed: false, required: true, photoRequired: true },
    { id: "c3", label: "Take wide-angle frontal shot of display", completed: false, required: true, photoRequired: true },
  ]);

  const [newChecklistText, setNewChecklistText] = useState("");

  const addChecklistItem = () => {
    if (!newChecklistText.trim()) return;
    setChecklist([
      ...checklist,
      {
        id: `c_${Date.now()}`,
        label: newChecklistText.trim(),
        completed: false,
        required: true,
      },
    ]);
    setNewChecklistText("");
  };

  const removeChecklistItem = (id: string) => {
    setChecklist(checklist.filter((item) => item.id !== id));
  };

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handlePublish = () => {
    const newTaskId = createTask({
      title: formData.title,
      category: formData.category,
      description: formData.description,
      businessName: formData.businessName,
      businessId: formData.businessId,
      rewardAmount: formData.rewardAmount,
      currency: formData.currency,
      location: {
        lat: formData.lat,
        lng: formData.lng,
        address: formData.address,
        city: formData.city,
      },
      allowedRadiusMeters: formData.allowedRadiusMeters,
      startDate: new Date(formData.startDate).toISOString(),
      deadline: new Date(formData.deadline).toISOString(),
      expectedDurationMinutes: formData.expectedDurationMinutes,
      status: "open",
      workerCount: formData.workerCount,
      requiredPhotosCount: formData.requiredPhotosCount,
      checklist,
      instructions: [
        "Check in strictly within the configured geofenced radius.",
        "Take photos only through the in-app camera viewfinder.",
        "Ensure clear lighting with legible price tags.",
      ],
    });

    toast.success(`Task ${newTaskId} published successfully!`, {
      description: "Now visible to eligible field workers in Bengaluru East.",
    });

    router.push(`/tasks/${newTaskId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-mono text-[#62666D] mb-2 font-semibold">
              <span className="uppercase text-[#F45116]">
                Step {currentStep} of 6: {
                  currentStep === 1 ? "Task Details" :
                  currentStep === 2 ? "Location & Geofence" :
                  currentStep === 3 ? "Schedule & Timing" :
                  currentStep === 4 ? "Evidence & Checklist" :
                  currentStep === 5 ? "Reward & Escrow" : "Review & Publish"
                }
              </span>
              <span>{Math.round((currentStep / 6) * 100)}% Completed</span>
            </div>

            {/* Stepper Dots / Bars */}
            <div className="grid grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all ${
                    s <= currentStep ? "bg-[#F45116]" : "bg-[#D8D4CB]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs">
            {/* STEP 1: Task Details */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-heading font-bold text-[#111111]">
                  Step 1: Task Title & Category
                </h2>
                <p className="text-xs text-[#62666D]">
                  Give your field task a descriptive title so field workers understand the objective.
                </p>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Task Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as TaskCategory })}
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Client / Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Task Description & Scope
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                  />
                </div>
              </div>
            )}

            {/* STEP 2: Location & Geofence */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-heading font-bold text-[#111111]">
                  Step 2: Location & Geofence Perimeter
                </h2>
                <p className="text-xs text-[#62666D]">
                  Workers must be physically within this radius to unlock the camera and submit evidence.
                </p>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Physical Store Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Latitude
                    </label>
                    <input
                      type="number"
                      step="0.0001"
                      value={formData.lat}
                      onChange={(e) => setFormData({ ...formData, lat: parseFloat(e.target.value) })}
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Longitude
                    </label>
                    <input
                      type="number"
                      step="0.0001"
                      value={formData.lng}
                      onChange={(e) => setFormData({ ...formData, lng: parseFloat(e.target.value) })}
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-mono uppercase text-[#111111] font-semibold">
                      Allowed Verification Radius
                    </label>
                    <span className="text-xs font-mono font-bold text-[#F45116]">
                      {formData.allowedRadiusMeters} meters
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="25"
                    value={formData.allowedRadiusMeters}
                    onChange={(e) => setFormData({ ...formData, allowedRadiusMeters: parseInt(e.target.value) })}
                    className="w-full accent-[#F45116] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#62666D] mt-1">
                    <span>50m (Strict inside store)</span>
                    <span>150m (Recommended)</span>
                    <span>1000m (Large Mall complex)</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Schedule & Timing */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-heading font-bold text-[#111111]">
                  Step 3: Schedule & Window
                </h2>
                <p className="text-xs text-[#62666D]">
                  Set the start time and completion deadline for worker execution.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Start Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Submission Deadline
                    </label>
                    <input
                      type="datetime-local"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Expected On-Site Duration (Minutes)
                  </label>
                  <input
                    type="number"
                    value={formData.expectedDurationMinutes}
                    onChange={(e) => setFormData({ ...formData, expectedDurationMinutes: parseInt(e.target.value) })}
                    className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: Evidence & Checklist */}
            {currentStep === 4 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-heading font-bold text-[#111111]">
                  Step 4: Required Evidence & Verification Checklist
                </h2>
                <p className="text-xs text-[#62666D]">
                  Field workers must complete each mandatory checklist item before submission.
                </p>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Mandatory Photos Count
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.requiredPhotosCount}
                    onChange={(e) => setFormData({ ...formData, requiredPhotosCount: parseInt(e.target.value) })}
                    className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-2 font-semibold">
                    Checklist Items ({checklist.length})
                  </label>
                  <div className="space-y-2 mb-4">
                    {checklist.map((item, idx) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-[#F4F2EC] rounded-lg border border-[#D8D4CB]"
                      >
                        <span className="text-xs text-[#111111] font-medium">
                          {idx + 1}. {item.label}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeChecklistItem(item.id)}
                          className="text-[#C83B36] hover:opacity-80 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newChecklistText}
                      onChange={(e) => setNewChecklistText(e.target.value)}
                      placeholder="Add an item, e.g. Count facings of 500ml variants..."
                      className="flex-1 text-xs p-2.5 rounded-lg border border-[#D8D4CB] bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={addChecklistItem}
                      className="px-4 py-2 bg-[#111111] text-white text-xs font-semibold rounded-lg hover:bg-black"
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Reward & Escrow */}
            {currentStep === 5 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-heading font-bold text-[#111111]">
                  Step 5: Task Reward & Worker Allocation
                </h2>
                <p className="text-xs text-[#62666D]">
                  Specify the payout per approved task. Funds are locked into escrow until operations approval.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Reward Payout (₹ INR)
                    </label>
                    <input
                      type="number"
                      step="50"
                      value={formData.rewardAmount}
                      onChange={(e) => setFormData({ ...formData, rewardAmount: parseInt(e.target.value) })}
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Required Workers
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.workerCount}
                      onChange={(e) => setFormData({ ...formData, workerCount: parseInt(e.target.value) })}
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#62666D]">Total Escrow Commitment:</span>
                  <span className="text-base font-bold text-[#111111]">
                    ₹{formData.rewardAmount * formData.workerCount}
                  </span>
                </div>
              </div>
            )}

            {/* STEP 6: Review & Publish */}
            {currentStep === 6 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-heading font-bold text-[#111111]">
                  Step 6: Review & Publish Task
                </h2>
                <p className="text-xs text-[#62666D]">
                  Review the full parameters before broadcasting this task to field agents in Bengaluru East.
                </p>

                <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] space-y-3 text-xs">
                  <div>
                    <span className="font-mono text-[#62666D] text-[10px] uppercase">Title:</span>
                    <div className="font-heading font-bold text-sm text-[#111111]">{formData.title}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-mono text-[#62666D] text-[10px] uppercase">Category:</span>
                      <div className="font-semibold text-[#111111]">{formData.category}</div>
                    </div>
                    <div>
                      <span className="font-mono text-[#62666D] text-[10px] uppercase">Client:</span>
                      <div className="font-semibold text-[#111111]">{formData.businessName}</div>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[#62666D] text-[10px] uppercase">Location:</span>
                    <div className="font-semibold text-[#111111]">{formData.address} ({formData.allowedRadiusMeters}m geofence)</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-mono text-[#62666D] text-[10px] uppercase">Reward:</span>
                      <div className="font-mono font-bold text-[#0B8059]">₹{formData.rewardAmount}</div>
                    </div>
                    <div>
                      <span className="font-mono text-[#62666D] text-[10px] uppercase">Photos Required:</span>
                      <div className="font-semibold text-[#111111]">{formData.requiredPhotosCount} Photos</div>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[#62666D] text-[10px] uppercase">Checklist items:</span>
                    <div className="font-semibold text-[#111111]">{checklist.length} verification points</div>
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-[#D8D4CB] flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold border border-[#D8D4CB] rounded-lg text-[#111111] hover:bg-[#F4F2EC]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 6 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePublish}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#0B8059] hover:bg-[#096B4A] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  <span>Broadcast Task to Field Network</span>
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

