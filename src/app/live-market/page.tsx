"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { 
  Truck, 
  MapPin, 
  Warehouse, 
  UserCheck, 
  Wallet, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Navigation,
  Clock,
  Sparkles
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

interface CityNode {
  id: string;
  name: string;
  x: number;
  y: number;
  hubType: string;
  volume: string;
}

export default function LiveMarketPage() {
  const [selectedOrigin, setSelectedOrigin] = useState("BLR");
  const [selectedDest, setSelectedDest] = useState("BOM");
  const [isTravelling, setIsTravelling] = useState(false);
  const [activeTab, setActiveTab] = useState<"book-truck" | "terminal" | "deploy-lead" | "trip-finance">("book-truck");

  // Booking Form State
  const [selectedVehicle, setSelectedVehicle] = useState("Container 32ft");
  const [cargoWeight, setCargoWeight] = useState(4500);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Freight Index Range
  const [chartRange, setChartRange] = useState<"7D" | "1M" | "3M" | "1Y">("1M");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const cities: CityNode[] = [
    { id: "BLR", name: "Bengaluru Hub", x: 280, y: 340, hubType: "Air & Road Hub", volume: "14,200 MT/wk" },
    { id: "BOM", name: "Mumbai Port", x: 200, y: 240, hubType: "Ocean Port & ICD", volume: "28,900 MT/wk" },
    { id: "DEL", name: "Delhi NCR ICD", x: 260, y: 110, hubType: "Inland Multi-modal", volume: "32,400 MT/wk" },
    { id: "MAA", name: "Chennai Harbor", x: 340, y: 350, hubType: "Ocean Port", volume: "18,600 MT/wk" },
    { id: "CCU", name: "Kolkata Gateway", x: 440, y: 190, hubType: "EXIM Corridor", volume: "12,100 MT/wk" },
    { id: "DXB", name: "Dubai Port (EXIM)", x: 90, y: 180, hubType: "Global Hub", volume: "45,000 MT/wk" },
    { id: "SIN", name: "Singapore (EXIM)", x: 560, y: 380, hubType: "Maritime Hub", volume: "58,000 MT/wk" },
  ];

  const originNode = cities.find((c) => c.id === selectedOrigin) || cities[0];
  const destNode = cities.find((c) => c.id === selectedDest) || cities[1];

  const handleSimulateTransit = () => {
    setIsTravelling(true);
    setTimeout(() => {
      setIsTravelling(false);
    }, 2500);
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const indexData = {
    "7D": [142, 144, 141, 145, 148, 146, 149],
    "1M": [135, 138, 140, 139, 143, 145, 148, 150, 149, 152, 151, 154],
    "3M": [128, 132, 130, 136, 139, 144, 142, 147, 151, 155, 153, 158],
    "1Y": [118, 122, 125, 129, 134, 138, 141, 145, 148, 152, 155, 160],
  };

  const activeBars = indexData[chartRange];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              Live Market Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] leading-tight">
              Pan-India &amp; EXIM Multi-Modal Corridor
            </h1>

            <p className="mt-3 text-base sm:text-lg text-[#62666D]">
              Real-time route simulation, freight rate telemetry, instant truck booking, and terminal space allocation across key transit gateways.
            </p>
          </div>

          {/* Interactive Multi-Modal Corridor Map */}
          <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#D8D4CB] gap-4">
              <div>
                <h3 className="text-xl font-heading font-bold text-[#111111]">
                  Transit Corridor Route Simulator
                </h3>
                <p className="text-xs text-[#62666D] font-mono mt-0.5">
                  Select Origin &amp; Destination nodes to simulate transit telemetry
                </p>
              </div>

              {/* Node Selectors */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#62666D]">Origin:</span>
                  <select
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className="p-1.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] font-bold text-[#111111]"
                  >
                    {cities.map((c) => (
                      <option key={c.id} value={c.id}>{c.name} ({c.id})</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[#62666D]">Destination:</span>
                  <select
                    value={selectedDest}
                    onChange={(e) => setSelectedDest(e.target.value)}
                    className="p-1.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] font-bold text-[#111111]"
                  >
                    {cities.map((c) => (
                      <option key={c.id} value={c.id}>{c.name} ({c.id})</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleSimulateTransit}
                  disabled={isTravelling || selectedOrigin === selectedDest}
                  className="px-4 py-1.5 bg-[#F45116] hover:bg-[#D9430D] text-white rounded-lg font-semibold disabled:opacity-50"
                >
                  {isTravelling ? "Simulating GPS Transit..." : "Simulate Transit"}
                </button>
              </div>
            </div>

            {/* SVG Visual Canvas */}
            <div className="relative mt-6 w-full h-[380px] bg-[#111111] rounded-xl overflow-hidden border border-white/10 p-4">
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

              <svg className="w-full h-full" viewBox="0 0 650 420" preserveAspectRatio="xMidYMid meet">
                {/* Background transit connections */}
                <path d="M 280 340 L 200 240 L 260 110 L 440 190 L 340 350 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <path d="M 200 240 L 90 180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M 340 350 L 560 380" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" fill="none" />

                {/* Highlighted active route between selected Origin and Destination */}
                <line
                  x1={originNode.x}
                  y1={originNode.y}
                  x2={destNode.x}
                  y2={destNode.y}
                  stroke="#F45116"
                  strokeWidth="3"
                  strokeDasharray={isTravelling ? "6 6" : "none"}
                />

                {/* Animated Truck vehicle along the line */}
                {isTravelling && (
                  <circle
                    r="6"
                    fill="#F45116"
                    className="shadow-lg drop-shadow-[0_0_8px_#F45116]"
                  >
                    <animateMotion
                      path={`M ${originNode.x} ${originNode.y} L ${destNode.x} ${destNode.y}`}
                      dur="2.5s"
                      repeatCount="1"
                    />
                  </circle>
                )}

                {/* City Nodes */}
                {cities.map((city) => {
                  const isOrigin = city.id === selectedOrigin;
                  const isDest = city.id === selectedDest;
                  return (
                    <g
                      key={city.id}
                      className="cursor-pointer"
                      onClick={() => {
                        if (city.id !== selectedOrigin) setSelectedDest(city.id);
                      }}
                    >
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isOrigin || isDest ? "9" : "6"}
                        fill={isOrigin ? "#F45116" : isDest ? "#0B8059" : "#333333"}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />
                      <text
                        x={city.x + 12}
                        y={city.y + 4}
                        fill="#FFFFFF"
                        fontSize="11"
                        fontFamily="var(--font-jetbrains-mono)"
                        fontWeight={isOrigin || isDest ? "bold" : "normal"}
                      >
                        {city.name} ({city.id})
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Active Route Telemetry Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md text-white p-3 rounded-lg border border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F45116] animate-pulse" />
                  <span className="font-bold">{originNode.name}</span>
                  <span className="text-white/60">➔</span>
                  <span className="font-bold text-[#0B8059]">{destNode.name}</span>
                </div>

                <div className="flex items-center gap-4 text-white/70">
                  <span>Volume: <strong className="text-white">{originNode.volume}</strong></span>
                  <span>Transit SLA: <strong className="text-white">~28 hrs</strong></span>
                  <span>Geofence Status: <strong className="text-[#0B8059]">Active (Telemetry Live)</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Tab Request Stepper & Freight Rate Index Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 cols: 4-Tab Stepper Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs">
              {/* Stepper Tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] mb-6 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("book-truck")}
                  className={cn(
                    "flex-1 py-2 rounded-lg font-bold transition-all text-center",
                    activeTab === "book-truck" ? "bg-[#111111] text-white shadow-xs" : "text-[#62666D] hover:text-[#111111]"
                  )}
                >
                  1. Book Truck
                </button>
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={cn(
                    "flex-1 py-2 rounded-lg font-bold transition-all text-center",
                    activeTab === "terminal" ? "bg-[#111111] text-white shadow-xs" : "text-[#62666D] hover:text-[#111111]"
                  )}
                >
                  2. Terminal Space
                </button>
                <button
                  onClick={() => setActiveTab("deploy-lead")}
                  className={cn(
                    "flex-1 py-2 rounded-lg font-bold transition-all text-center",
                    activeTab === "deploy-lead" ? "bg-[#111111] text-white shadow-xs" : "text-[#62666D] hover:text-[#111111]"
                  )}
                >
                  3. Deploy CX Lead
                </button>
                <button
                  onClick={() => setActiveTab("trip-finance")}
                  className={cn(
                    "flex-1 py-2 rounded-lg font-bold transition-all text-center",
                    activeTab === "trip-finance" ? "bg-[#111111] text-white shadow-xs" : "text-[#62666D] hover:text-[#111111]"
                  )}
                >
                  4. Trip Finance
                </button>
              </div>

              {/* Tab 1: Book Truck */}
              {activeTab === "book-truck" && (
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#111111] mb-1">
                    Book Dedicated Freight Capacity
                  </h3>
                  <p className="text-xs text-[#62666D] mb-6">
                    Guaranteed vehicle placement within 24 hours across 18 industrial corridors.
                  </p>

                  {bookingSuccess ? (
                    <div className="p-6 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 text-center">
                      <CheckCircle2 className="w-10 h-10 text-[#0B8059] mx-auto mb-2" />
                      <h4 className="text-base font-heading font-bold text-[#111111]">Booking Request Dispatched</h4>
                      <p className="text-xs text-[#62666D] mt-1">
                        Assigned vehicle: <strong className="text-[#111111]">{selectedVehicle}</strong> from {originNode.name} to {destNode.name}.
                      </p>
                      <button
                        onClick={() => setBookingSuccess(false)}
                        className="mt-4 text-xs font-mono font-bold text-[#F45116] hover:underline"
                      >
                        Create another dispatch
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleBookSubmit} className="space-y-4 text-xs">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["Mini truck", "Open body", "Container 32ft", "Trailer"].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setSelectedVehicle(v)}
                            className={cn(
                              "p-2.5 rounded-lg border text-center font-mono font-bold transition-colors",
                              selectedVehicle === v ? "bg-[#111111] text-white border-[#111111]" : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB]"
                            )}
                          >
                            {v}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold text-[11px]">
                            Ship From
                          </label>
                          <input
                            type="text"
                            defaultValue={originNode.name}
                            className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC]"
                          />
                        </div>
                        <div>
                          <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold text-[11px]">
                            Ship To
                          </label>
                          <input
                            type="text"
                            defaultValue={destNode.name}
                            className="w-full p-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono uppercase text-[#111111] mb-1 font-semibold text-[11px]">
                          Estimated Cargo Weight (kg): {cargoWeight} kg
                        </label>
                        <input
                          type="range"
                          min="1000"
                          max="25000"
                          step="500"
                          value={cargoWeight}
                          onChange={(e) => setCargoWeight(parseInt(e.target.value))}
                          className="w-full accent-[#F45116]"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3 bg-[#F45116] hover:bg-[#D9430D] text-white font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2"
                        >
                          <span>Confirm Dispatch Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {/* Tab 2: Terminal Space */}
              {activeTab === "terminal" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-[#111111]">
                    Reserve Cross-Dock &amp; Terminal Buffer
                  </h3>
                  <p className="text-xs text-[#62666D]">
                    Secure bonded terminal holding space across Mumbai Port, Bengaluru ICD, and Delhi NCR.
                  </p>
                  <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#62666D]">Available Cross-dock Space:</span>
                      <strong className="text-[#0B8059]">4,200 sq.ft at Mumbai Port</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#62666D]">Storage Type:</span>
                      <strong>Bonded / High-Security CCTV</strong>
                    </div>
                  </div>
                  <Link
                    href="/contact?inquiry=terminal"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white text-xs font-semibold rounded-lg"
                  >
                    <span>Reserve Terminal Bay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* Tab 3: Deploy On-Field Lead */}
              {activeTab === "deploy-lead" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-[#111111]">
                    Deploy On-Field Logiworkx CX Lead
                  </h3>
                  <p className="text-xs text-[#62666D]">
                    Dispatch dedicated verification supervisors to dock gates in 24 hours.
                  </p>
                  <div className="p-4 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 text-xs text-[#0B8059]">
                    ✓ Vetted leads equipped with mobile tamper seal cameras and digital signature receivers.
                  </div>
                  <Link
                    href="/tasks/new"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F45116] text-white text-xs font-semibold rounded-lg"
                  >
                    <span>Deploy Lead Instantly</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* Tab 4: Trip Finance */}
              {activeTab === "trip-finance" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-[#111111]">
                    Instant Trip Finance Working Capital
                  </h3>
                  <p className="text-xs text-[#62666D]">
                    Advance up to 80% of freight value upon loading slip verification to eliminate cashflow bottlenecks.
                  </p>
                  <div className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] text-xs font-mono space-y-1">
                    <div className="flex justify-between">
                      <span>Standard Advance:</span>
                      <strong className="text-[#111111]">80% upon E-way bill validation</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Interest Rate:</span>
                      <strong className="text-[#0B8059]">1.2% per 30-day cycle</strong>
                    </div>
                  </div>
                  <Link
                    href="/rewards"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B8059] text-white text-xs font-semibold rounded-lg"
                  >
                    <span>Apply for Trip Factoring</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right 5 cols: Live Freight Rate Index Chart */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D8D4CB]">
                  <span className="text-xs font-mono uppercase font-bold text-[#111111]">
                    ChaseHorse Freight Rate Index
                  </span>
                  <div className="flex gap-1 text-[10px] font-mono">
                    {(["7D", "1M", "3M", "1Y"] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setChartRange(r)}
                        className={cn(
                          "px-2 py-0.5 rounded",
                          chartRange === r ? "bg-[#111111] text-white font-bold" : "bg-[#F4F2EC] text-[#62666D]"
                        )}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-heading font-extrabold text-[#111111]">
                    ₹{hoveredBar !== null ? activeBars[hoveredBar] * 12 : activeBars[activeBars.length - 1] * 12}
                  </span>
                  <span className="text-xs font-mono text-[#0B8059] font-bold">
                    +4.8% Index Move
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#62666D]">
                  Weighted Pan-India Full-Truckload (FTL) Spot Rate / MT
                </div>

                {/* Bar chart representation */}
                <div className="mt-8 flex items-end gap-1.5 h-44 bg-[#F4F2EC] p-3 rounded-xl border border-[#D8D4CB]">
                  {activeBars.map((val, idx) => {
                    const heightPct = ((val - 110) / 60) * 100;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredBar(idx)}
                        onMouseLeave={() => setHoveredBar(null)}
                        className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer group"
                      >
                        <div
                          style={{ height: `${Math.max(15, heightPct)}%` }}
                          className={cn(
                            "w-full rounded-t transition-all",
                            hoveredBar === idx ? "bg-[#F45116]" : "bg-[#111111] group-hover:bg-[#E9AA36]"
                          )}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D4CB] text-xs font-mono text-[#62666D] flex justify-between">
                <span>Index Base: 100 (2024 Baseline)</span>
                <span className="text-[#0B8059] font-bold">Updated Hourly</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
