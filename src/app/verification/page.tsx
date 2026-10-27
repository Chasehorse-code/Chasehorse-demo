"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { 
  ShieldCheck, 
  MapPin, 
  Camera, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  FileText, 
  Sparkles,
  RefreshCw,
  SearchCheck
} from "lucide-react";

export default function VerificationPage() {
  const [activeTab, setActiveTab] = useState<"geofence" | "photo" | "ai" | "audit">("geofence");

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              Trust & Quality Assurance
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] leading-tight">
              Multi-layer verification engineered for ground-truth certainty.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#62666D] leading-relaxed">
              Every task executed on ChaseHorse undergoes automated checks and operations oversight to ensure data authenticity, geographic accuracy, and audit compliance.
            </p>
          </div>

          {/* Interactive Inspection Tabs */}
          <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs mb-16">
            <div className="flex flex-wrap gap-2 pb-6 border-b border-[#D8D4CB]">
              <button
                onClick={() => setActiveTab("geofence")}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all ${
                  activeTab === "geofence"
                    ? "bg-[#111111] text-white font-bold"
                    : "bg-[#F4F2EC] text-[#62666D] hover:text-[#111111]"
                }`}
              >
                1. GPS & Geofence Verification
              </button>
              <button
                onClick={() => setActiveTab("photo")}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all ${
                  activeTab === "photo"
                    ? "bg-[#111111] text-white font-bold"
                    : "bg-[#F4F2EC] text-[#62666D] hover:text-[#111111]"
                }`}
              >
                2. Live Camera & EXIF Geotagging
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all ${
                  activeTab === "ai"
                    ? "bg-[#111111] text-white font-bold"
                    : "bg-[#F4F2EC] text-[#62666D] hover:text-[#111111]"
                }`}
              >
                3. Automated AI & Duplicate Checks
              </button>
              <button
                onClick={() => setActiveTab("audit")}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all ${
                  activeTab === "audit"
                    ? "bg-[#111111] text-white font-bold"
                    : "bg-[#F4F2EC] text-[#62666D] hover:text-[#111111]"
                }`}
              >
                4. Human Review & Audit Trail
              </button>
            </div>

            {/* Tab Contents */}
            <div className="pt-8">
              {activeTab === "geofence" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-[#111111]">
                      Task-Specific Geofence Enclosure
                    </h3>
                    <p className="text-sm text-[#62666D] leading-relaxed">
                      Tasks are locked to precise coordinates. Workers can only tap Check In and access submission cameras when their device GPS reports location within the enterprise-configured radius (e.g. 150m for retail stores).
                    </p>
                    <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-[#62666D]">Target Location:</span>
                        <span className="text-[#111111] font-bold">12.9716° N, 77.6412° E</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#62666D]">Allowed Radius:</span>
                        <span className="text-[#111111] font-bold">150 meters</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#62666D]">Actual Worker Distance:</span>
                        <span className="text-[#0B8059] font-bold">18 meters (Within Geofence ✓)</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
                    <div className="text-xs font-mono font-bold text-[#111111] mb-2 uppercase">
                      Live Telemetry Simulation
                    </div>
                    <div className="relative w-full h-48 bg-white rounded-lg border border-[#D8D4CB] flex items-center justify-center overflow-hidden">
                      <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#F45116]/60 bg-[#F45116]/5" />
                      <div className="w-4 h-4 rounded-full bg-[#F45116] flex items-center justify-center text-white text-[9px] font-bold">
                        📍
                      </div>
                      <div className="absolute top-4 left-4 bg-[#111111] text-white text-[10px] font-mono px-2 py-1 rounded">
                        GPS Accuracy: ±3.8m
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "photo" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-[#111111]">
                      Live Camera Only & Anti-Spoofing
                    </h3>
                    <p className="text-sm text-[#62666D] leading-relaxed">
                      Photo uploads from the mobile gallery or photo library are strictly prohibited. Photos must be captured in real-time through the secure ChaseHorse in-app camera viewfinder with embedded cryptographic hardware hashes.
                    </p>
                    <ul className="space-y-2 text-xs text-[#111111]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0B8059]" />
                        Camera EXIF timestamp matched to real-world server time.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0B8059]" />
                        Mock GPS location spoofing detection enabled.
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0B8059]" />
                        Optical device orientation & lighting telemetry recorded.
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6 p-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
                    <div className="text-xs font-mono font-bold text-[#111111] mb-3 uppercase">
                      EXIF Metadata Payload
                    </div>
                    <pre className="text-[11px] font-mono bg-[#111111] text-[#E7F6F0] p-4 rounded-lg overflow-x-auto leading-relaxed">
{`{
  "photoId": "PH-94812",
  "captureTimestamp": "2026-10-27T10:21:14Z",
  "serverSyncDelta": "+0.4s",
  "hardwareModel": "Pixel 8 Pro",
  "gpsLat": 12.971702,
  "gpsLng": 77.641315,
  "altitudeMeters": 912.4,
  "tamperScore": 0.00
}`}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === "ai" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-[#111111]">
                      AI-Assisted Quality & Duplicate Defense
                    </h3>
                    <p className="text-sm text-[#62666D] leading-relaxed">
                      Every photo runs through perceptual hashing and computer vision classification to guarantee that duplicate photos are not submitted across different stores or dates.
                    </p>
                    <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-[#62666D]">Perceptual Hash Duplicate Score:</span>
                        <span className="text-[#0B8059] font-bold">0.02 (Unique)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#62666D]">Visual Classifier Confidence:</span>
                        <span className="text-[#0B8059] font-bold">98.4% Match to Endcap Beverage</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
                    <div className="text-xs font-mono font-bold text-[#111111] mb-2 uppercase">
                      AI Verification Output
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-[#D8D4CB] space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-[#0B8059]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Shelf facings detected: 5 tiers, 30 units visible</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#0B8059]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Price sticker barcode resolution: 300 DPI verified</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#0B8059]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>No image reuse detected against 50,000+ historical audits</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "audit" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-[#111111]">
                      Human Oversight & Immutable Audit Trails
                    </h3>
                    <p className="text-sm text-[#62666D] leading-relaxed">
                      Automated checks assist operations teams but do not replace final review. Operations leads inspect flagged exceptions, initiate structured rework requests, or sign off on approvals.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <Link
                        href="/operations/review/CH-24817"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg"
                      >
                        <span>Open Live Review Queue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-6 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB]">
                    <div className="text-xs font-mono font-bold text-[#111111] mb-2 uppercase">
                      Audit Log Structure
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#D8D4CB] space-y-2 text-[11px] font-mono">
                      <div className="text-[#62666D]">10:24:00 AM — Worker Ravi K. submitted 3 photos</div>
                      <div className="text-[#0B8059]">10:24:04 AM — Automated AI checks passed (Score 98%)</div>
                      <div className="text-[#3566D6]">10:24:05 AM — Queued for Operations Lead approval</div>
                      <div className="text-[#111111] font-bold">10:25:12 AM — Ops Lead signed off · ₹450 released</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Operational Disclaimer from Spec */}
          <div className="p-6 bg-white rounded-2xl border border-[#D8D4CB] max-w-4xl shadow-xs">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#62666D] mb-1">
              Important Verification Disclaimer
            </h4>
            <p className="text-xs text-[#62666D] leading-relaxed">
              Geofence coordinates, device telemetry, and automated AI image filters are designed to provide robust decision support for operations teams. They work in tandem with human review and checklist audits to ensure compliance, but do not independently guarantee commercial authenticity without operational sign-off.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

