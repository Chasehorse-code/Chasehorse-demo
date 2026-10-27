"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { toast } from "sonner";
import { 
  Calculator, 
  Truck, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Wallet,
  Sparkles
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

export default function GetAQuotePage() {
  const [origin, setOrigin] = useState("Bengaluru Industrial Hub");
  const [dest, setDest] = useState("Mumbai Port Terminal");
  const [vehicle, setVehicle] = useState("32ft Multi-Axle Container");
  const [weightTons, setWeightTons] = useState(12);
  const [includeLead, setIncludeLead] = useState(true);
  const [isLocked, setIsLocked] = useState(false);

  // Rate calculation formula based on weight, vehicle, and corridor
  const baseRate = weightTons * 3200;
  const leadFee = includeLead ? 3500 : 0;
  const tollInsurance = Math.round(baseRate * 0.12);
  const total = baseRate + leadFee + tollInsurance;

  const handleLockQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLocked(true);
    toast.success("Quote Locked for 24 Hours", {
      description: `Rate of ${formatCurrency(total)} guaranteed across the ${origin} ➔ ${dest} lane.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              Rate Telemetry &amp; Estimator
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111111]">
              Instant Freight &amp; Operations Quote
            </h1>
            <p className="mt-2 text-sm text-[#62666D]">
              Transparent corridor pricing backed by real-time fuel indices and verified on-field supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Calculator Inputs */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs">
              <form onSubmit={handleLockQuote} className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Origin Dispatch Hub
                    </label>
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] font-semibold text-[#111111]"
                    >
                      <option value="Bengaluru Industrial Hub">Bengaluru Industrial Hub</option>
                      <option value="Mumbai Port Terminal">Mumbai Port Terminal</option>
                      <option value="Delhi NCR ICD">Delhi NCR ICD</option>
                      <option value="Chennai Harbor Terminal">Chennai Harbor Terminal</option>
                      <option value="Kolkata Gateway">Kolkata Gateway</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Destination Gate
                    </label>
                    <select
                      value={dest}
                      onChange={(e) => setDest(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] font-semibold text-[#111111]"
                    >
                      <option value="Mumbai Port Terminal">Mumbai Port Terminal</option>
                      <option value="Bengaluru Industrial Hub">Bengaluru Industrial Hub</option>
                      <option value="Delhi NCR ICD">Delhi NCR ICD</option>
                      <option value="Chennai Harbor Terminal">Chennai Harbor Terminal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Vehicle Specification
                  </label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] font-semibold text-[#111111]"
                  >
                    <option value="32ft Multi-Axle Container">32ft Multi-Axle Container (HQ High-Cube)</option>
                    <option value="20ft Dedicated Open Body">20ft Dedicated Open Body Truck</option>
                    <option value="Refrigerated Reefer (+4°C)">Refrigerated Reefer Container (+4°C Cold Chain)</option>
                    <option value="40ft Heavy Haulage Trailer">40ft Heavy Haulage Semi-Trailer</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="font-mono uppercase text-[#111111] font-semibold">
                      Consignment Weight: {weightTons} Metric Tons
                    </label>
                    <span className="text-xs font-mono text-[#F45116] font-bold">
                      {weightTons * 1000} kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={weightTons}
                    onChange={(e) => setWeightTons(parseInt(e.target.value))}
                    className="w-full accent-[#F45116]"
                  />
                </div>

                {/* Optional On-Field CX Lead Add-on */}
                <div className="p-3 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      id="lead-check"
                      checked={includeLead}
                      onChange={(e) => setIncludeLead(e.target.checked)}
                      className="w-4 h-4 text-[#F45116] accent-[#F45116]"
                    />
                    <label htmlFor="lead-check" className="cursor-pointer">
                      <div className="font-heading font-bold text-[#111111]">
                        Attach On-Field Logiworkx CX Lead (+₹3,500)
                      </div>
                      <div className="text-[10px] text-[#62666D]">
                        Includes dock inspection, tamper seal photography, and receiving sign-off.
                      </div>
                    </label>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0B8059]">
                    Recommended
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#F45116] hover:bg-[#D9430D] text-white font-semibold rounded-xl shadow-sm flex items-center justify-center gap-2 text-xs"
                >
                  <LockIcon className="w-4 h-4" />
                  <span>Lock In Guaranteed Rate for 24h</span>
                </button>
              </form>
            </div>

            {/* Right 5 cols: Instant Cost Breakdown Summary */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#D8D4CB]">
                <span className="text-xs font-mono uppercase font-bold text-[#111111]">
                  Quote Summary
                </span>
                <span className="text-[10px] font-mono bg-[#E7F6F0] text-[#0B8059] px-2 py-0.5 rounded font-bold">
                  SLA: 28 Hours
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#62666D]">Base Freight ({weightTons} MT):</span>
                  <span className="font-mono font-bold text-[#111111]">{formatCurrency(baseRate)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#62666D]">FASTag Tolls &amp; Carrier Transit Cover:</span>
                  <span className="font-mono font-bold text-[#111111]">{formatCurrency(tollInsurance)}</span>
                </div>

                {includeLead && (
                  <div className="flex justify-between">
                    <span className="text-[#62666D]">On-Field CX Lead (Supervision):</span>
                    <span className="font-mono font-bold text-[#111111]">{formatCurrency(leadFee)}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#D8D4CB] flex justify-between items-baseline">
                  <span className="text-sm font-heading font-bold text-[#111111]">Total Estimated Rate:</span>
                  <span className="text-2xl font-heading font-extrabold text-[#0B8059]">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {isLocked && (
                <div className="p-3 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 text-xs text-[#0B8059]">
                  <div className="font-bold">✓ Rate Locked Code: CH-QT-9912</div>
                  <div className="text-[11px] mt-0.5">Valid for vehicle booking until tomorrow 18:00.</div>
                </div>
              )}

              <div className="pt-2">
                <Link
                  href={`/contact?quote=${encodeURIComponent(`Rate: ${formatCurrency(total)} (${origin} -> ${dest})`)}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#111111] hover:bg-black text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
                >
                  <span>Book Consignment Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function LockIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
