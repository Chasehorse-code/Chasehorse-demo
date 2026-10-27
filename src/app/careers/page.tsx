"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { toast } from "sonner";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Wallet, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  UploadCloud, 
  X,
  UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

interface JobOpening {
  id: string;
  title: string;
  badge: string;
  location: string;
  type: string;
  payout: string;
  desc: string;
  responsibilities: string[];
  requirements: string[];
}

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<string | null>("job-1");
  const [applyModalJob, setApplyModalJob] = useState<JobOpening | null>(null);

  // Application Drawer State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hub: "Bengaluru Central",
    experience: "1-3 years",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const jobs: JobOpening[] = [
    {
      id: "job-1",
      title: "On-Field Logiworkx CX Lead",
      badge: "10 OPEN POSITIONS · URGENT",
      location: "Bengaluru / Mumbai / Delhi NCR / Chennai",
      type: "Flexible / Full-Time",
      payout: "₹35,000 – ₹55,000 / month + Field Payouts",
      desc: "Boots-on-the-ground support at transit terminals, fulfillment warehouses, and retail receiving gates. Inspect consignments, verify tamper seals, and secure customer receiving signatures.",
      responsibilities: [
        "Perform physical cargo and container inspection before gate release.",
        "Record digital GPS start and end coordinates with ChaseHorse mobile app.",
        "Capture photo evidence of seals, pallet straps, and bill of lading documents.",
        "Coordinate handover directly with plant or hospital reception supervisors.",
      ],
      requirements: [
        "Smartphone with GPS and camera capabilities.",
        "Familiarity with retail goods receiving or warehouse dock operations.",
        "High integrity and attention to detail for audit verification.",
      ],
    },
    {
      id: "job-2",
      title: "Cold Chain IoT Telematics Specialist",
      badge: "ENGINEERING & OPS",
      location: "Bengaluru Central Hub",
      type: "Full-Time",
      payout: "₹60,000 – ₹85,000 / month",
      desc: "Manage IoT temperature sensor provisioning, calibration, and BLE data sync for pharmaceutical and vaccine corridors.",
      responsibilities: [
        "Configure BLE temperature loggers for +2°C to +8°C vaccine consignments.",
        "Investigate temperature excursion alerts and notify carrier dispatchers.",
        "Perform regular sensor calibration audits per GDP standards.",
      ],
      requirements: [
        "Background in Electronics, Telematics, or Supply Chain Technology.",
        "2+ years experience with IoT devices or cold-chain logistics.",
      ],
    },
    {
      id: "job-3",
      title: "Freight Dispatch Operations Manager",
      badge: "MANAGEMENT",
      location: "Mumbai Port Terminal Hub",
      type: "Full-Time",
      payout: "₹80,000 – ₹1,20,000 / month",
      desc: "Lead 24/7 cross-dock terminal operations, multi-axle trailer placement, and driver trip advance disbursals.",
      responsibilities: [
        "Manage daily lane capacity matching across 18 regional corridors.",
        "Supervise terminal dock turnaround times to stay under 45 minutes.",
        "Oversee emergency vehicle replacement and 8D complaint resolution.",
      ],
      requirements: [
        "5+ years in logistics management, freight forwarding, or 3PL operations.",
        "Strong team leadership and escalation handling skills.",
      ],
    },
    {
      id: "job-4",
      title: "Reverse Logistics Quality Inspector",
      badge: "EXPANSION",
      location: "Delhi NCR Logistics Park",
      type: "Full-Time",
      payout: "₹40,000 – ₹60,000 / month",
      desc: "Inspect customer returns, classify returned retail electronics and apparel, and upload itemized condition reports.",
      responsibilities: [
        "Grade customer returned merchandise into Grade A, B, and C.",
        "Document serial numbers and original brand packaging condition.",
        "Mitigate fraudulent return claims with photographic evidence.",
      ],
      requirements: [
        "Experience in e-commerce fulfillment or retail return docks.",
        "Basic computer and mobile app literacy.",
      ],
    },
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Application Received", {
        description: `Thank you, ${formData.name}. Our talent lead will review your profile within 48 hours.`,
      });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              Careers at ChaseHorse
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] leading-tight">
              Build India's most reliable field operations network.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#62666D] leading-relaxed">
              We empower on-ground professionals and field engineers with real-time mobile tools, transparent compensation, and career growth.
            </p>
          </div>

          {/* Job Openings List */}
          <div className="space-y-4 mb-16">
            {jobs.map((job) => {
              const isExpanded = expandedId === job.id;
              return (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-[#D8D4CB] overflow-hidden shadow-xs transition-all"
                >
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : job.id)}
                    className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase bg-[#FDF6E8] text-[#F45116] px-2 py-0.5 rounded font-bold">
                          {job.badge}
                        </span>
                        <span className="text-xs font-mono text-[#62666D]">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-bold text-[#111111]">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#62666D] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#F45116]" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-[#0B8059] font-bold">
                          <Wallet className="w-3.5 h-3.5" /> {job.payout}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplyModalJob(job);
                          setSubmitted(false);
                        }}
                        className="px-5 py-2 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                      >
                        Apply Now
                      </button>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-[#62666D] transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </div>
                  </div>

                  {/* Expanded Scope & Requirements */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#D8D4CB]/60 bg-[#F4F2EC]/40 space-y-4 text-xs">
                      <p className="text-[#62666D] leading-relaxed">{job.desc}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div>
                          <h4 className="font-mono font-bold text-[#111111] uppercase mb-2">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-1.5 text-[#62666D]">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B8059] shrink-0 mt-0.5" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-mono font-bold text-[#111111] uppercase mb-2">
                            Qualifications &amp; Requirements:
                          </h4>
                          <ul className="space-y-1.5 text-[#62666D]">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F45116] shrink-0 mt-1.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Application Drawer */}
      {applyModalJob && (
        <div
          onClick={() => setApplyModalJob(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl border border-[#D8D4CB] shadow-2xl p-6 sm:p-8 max-w-lg w-full"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CB]">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#F45116] uppercase">
                  Application For
                </span>
                <h3 className="text-xl font-heading font-bold text-[#111111]">
                  {applyModalJob.title}
                </h3>
              </div>
              <button
                onClick={() => setApplyModalJob(null)}
                className="p-1 rounded-lg text-[#62666D] hover:text-[#111111]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#0B8059] mx-auto mb-3" />
                <h4 className="text-base font-heading font-bold text-[#111111]">
                  Application Successfully Submitted
                </h4>
                <p className="text-xs text-[#62666D] mt-1">
                  Our talent team for the {formData.hub} hub will contact you shortly.
                </p>
                <button
                  onClick={() => setApplyModalJob(null)}
                  className="mt-6 px-5 py-2 bg-[#111111] text-white text-xs font-mono font-bold rounded-lg"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="py-4 space-y-4 text-xs">
                <div>
                  <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Varma"
                    className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@email.com"
                      className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Preferred Hub
                    </label>
                    <select
                      value={formData.hub}
                      onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                    >
                      <option value="Bengaluru Central">Bengaluru Central</option>
                      <option value="Mumbai Port">Mumbai Port</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Chennai Harbor">Chennai Harbor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Relevant Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                    >
                      <option value="0-1 years">Fresher / 0-1 years</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>

                {/* Simulated Resume Upload */}
                <div>
                  <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Resume / Work Experience Profile
                  </label>
                  <div
                    onClick={() => setFileName("Ramesh_Resume_ChaseHorse.pdf")}
                    className="p-4 rounded-xl border border-dashed border-[#D8D4CB] bg-[#F4F2EC] flex flex-col items-center justify-center cursor-pointer hover:border-[#F45116]"
                  >
                    <UploadCloud className="w-6 h-6 text-[#62666D] mb-1" />
                    <span className="text-xs font-mono text-[#111111]">
                      {fileName ? `Attached: ${fileName}` : "Click to attach PDF / DOCX profile"}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#F45116] hover:bg-[#D9430D] text-white font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? "Submitting application..." : "Send Application"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}

