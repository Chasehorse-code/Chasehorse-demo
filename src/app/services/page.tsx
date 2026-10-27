"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { 
  Cpu, 
  Zap, 
  AlertTriangle, 
  RotateCcw, 
  Truck, 
  HeartHandshake, 
  Wallet, 
  Thermometer, 
  GitMerge, 
  Leaf,
  Plus, 
  Check, 
  ArrowRight, 
  X,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: string;
  name: string;
  tier: "t1" | "t2" | "t3";
  tierLabel: string;
  desc: string;
  sla: string;
  deliverables: string[];
  icon: any;
}

export default function ServicesPage() {
  const [filterTier, setFilterTier] = useState<"all" | "t1" | "t2" | "t3">("all");
  const [search, setSearch] = useState("");
  const [compareList, setCompareList] = useState<ServiceItem[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  const servicesData: ServiceItem[] = [
    {
      id: "dt-1",
      name: "Digital Transformation Connectors",
      tier: "t1",
      tierLabel: "Tier 1 · Core",
      icon: Cpu,
      desc: "Connect legacy ERP dispatch waybills directly to field devices with automatic data validation.",
      sla: "24 Hours Go-Live",
      deliverables: ["API connectors to SAP / Oracle", "Electronic waybill ingest", "Real-time dispatch sync"],
    },
    {
      id: "ch-deploy",
      name: "CH Deploy On-Field CX Lead",
      tier: "t1",
      tierLabel: "Tier 1 · Core",
      icon: Zap,
      desc: "Vetted on-ground supervisors deployed in 24 hours for cargo receiving inspection and seal integrity.",
      sla: "24 Hours On-Site",
      deliverables: ["Physical dock gate inspection", "Tamper seal photo verification", "Real-time GPS timestamps"],
    },
    {
      id: "8d-comp",
      name: "8D Root-Cause Complaint Resolution",
      tier: "t1",
      tierLabel: "Tier 1 · Core",
      icon: AlertTriangle,
      desc: "Structured problem-solving for damaged cargo, shortages, and delivery disputes with SLA closure.",
      sla: "4 Hours Containment",
      deliverables: ["Formal 8D investigation report", "Corrective action plan", "Preventive workflow update"],
    },
    {
      id: "rev-log",
      name: "Returns Triage & Reverse Logistics",
      tier: "t1",
      tierLabel: "Tier 1 · Core",
      icon: RotateCcw,
      desc: "Inspection, grading, and rapid inventory reconciliation for retail and e-commerce returns.",
      sla: "Same-Day Grading",
      deliverables: ["Barcode re-scanning", "SKU defect grading (A/B/C)", "RTO claims settlement trail"],
    },
    {
      id: "fleet-mgt",
      name: "Fleet & Driver Operations Management",
      tier: "t2",
      tierLabel: "Tier 2 · Growth",
      icon: Truck,
      desc: "Driver telemetry, route adherence monitoring, maintenance tracking, and fuel optimization.",
      sla: "48 Hours Onboarding",
      deliverables: ["Driver safety scorecard", "Route deviation alerts", "Fuel consumption auditing"],
    },
    {
      id: "cx-mgt",
      name: "Customer Xperience (CX) Management",
      tier: "t2",
      tierLabel: "Tier 2 · Growth",
      icon: HeartHandshake,
      desc: "Proactive delay alerts, recipient live tracking links, and digital proof-of-delivery signatures.",
      sla: "48 Hours Scaling",
      deliverables: ["White-label tracking portal", "Automated SMS/WhatsApp milestones", "CSAT survey loop"],
    },
    {
      id: "trip-fin",
      name: "Trip Finance Working Capital",
      tier: "t2",
      tierLabel: "Tier 2 · Growth",
      icon: Wallet,
      desc: "Up to 80% working capital advance against verified transit slips to keep carriers rolling.",
      sla: "2 Hours Liquidity",
      deliverables: ["Instant fuel card credit", "Toll FASTag auto-refills", "Direct driver payout release"],
    },
    {
      id: "cold-iot",
      name: "Cold-Chain IoT & Temperature Monitoring",
      tier: "t3",
      tierLabel: "Tier 3 · Enterprise",
      icon: Thermometer,
      desc: "BLE sensor logs tracking +2°C to +8°C parameters for vaccines, biologics, and premium dairy.",
      sla: "Continuous Telemetry",
      deliverables: ["Continuous temperature graph", "Excursion alert notifications", "GDP compliance certificates"],
    },
    {
      id: "scm-reeng",
      name: "SCM Process Re-Engineering",
      tier: "t3",
      tierLabel: "Tier 3 · Enterprise",
      icon: GitMerge,
      desc: "Supply chain network redesign, warehouse slotting optimization, and cross-dock blueprinting.",
      sla: "Custom Milestone",
      deliverables: ["Full distribution network audit", "Cross-dock throughput model", "Inventory turn optimizer"],
    },
    {
      id: "esg-carb",
      name: "ESG Carbon Monitoring & Auditing",
      tier: "t3",
      tierLabel: "Tier 3 · Enterprise",
      icon: Leaf,
      desc: "Per-ton-kilometer carbon emissions analytics, green fleet prioritization, and verified ESG reporting.",
      sla: "Monthly Audits",
      deliverables: ["Scope 3 emissions breakdown", "Green corridor certificates", "EV fleet deployment roadmap"],
    },
  ];

  const filtered = servicesData.filter((s) => {
    const matchesTier = filterTier === "all" || s.tier === filterTier;
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.desc.toLowerCase().includes(search.toLowerCase());
    return matchesTier && matchesSearch;
  });

  const toggleCompare = (service: ServiceItem) => {
    if (compareList.some((it) => it.id === service.id)) {
      setCompareList(compareList.filter((it) => it.id !== service.id));
    } else {
      if (compareList.length >= 3) {
        setCompareList([...compareList.slice(1), service]);
      } else {
        setCompareList([...compareList, service]);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-8 border-b border-[#D8D4CB] gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#F45116]" />
                Full Service Catalog
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111111]">
                Modular Capabilities &amp; Field Services
              </h1>
              <p className="mt-2 text-sm text-[#62666D]">
                Deploy individual operational modules or integrate the full G.E.L.P. stack with guaranteed SLAs.
              </p>
            </div>

            {compareList.length > 0 && (
              <button
                onClick={() => setCompareModalOpen(true)}
                className="px-4 py-2 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-mono font-bold rounded-lg shadow-sm flex items-center gap-2"
              >
                <span>Compare {compareList.length} Selected Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
              {[
                { key: "all", label: "All Capabilities (10)" },
                { key: "t1", label: "Tier 1 · Core (24h)" },
                { key: "t2", label: "Tier 2 · Growth (48h)" },
                { key: "t3", label: "Tier 3 · Advanced" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setFilterTier(t.key as any)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg transition-colors font-medium",
                    filterTier === t.key
                      ? "bg-[#111111] text-white font-bold"
                      : "bg-white text-[#62666D] border border-[#D8D4CB] hover:text-[#111111]"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#62666D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search capabilities..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-xs pl-8 pr-3 py-1.5 rounded-lg border border-[#D8D4CB] bg-white w-full sm:w-64 focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => {
              const Icon = s.icon;
              const isSelectedForCompare = compareList.some((it) => it.id === s.id);

              return (
                <div
                  key={s.id}
                  className="bg-white rounded-2xl border border-[#D8D4CB] p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] text-[#F45116] flex items-center justify-center border border-[#D8D4CB]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-[#FDF6E8] text-[#E9AA36] px-2 py-0.5 rounded font-semibold">
                        {s.tierLabel}
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-bold text-[#111111] group-hover:text-[#F45116] transition-colors">
                      {s.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#D8D4CB] space-y-1.5">
                      <div className="text-[11px] font-mono font-semibold text-[#111111]">
                        Deliverables:
                      </div>
                      {s.deliverables.map((del) => (
                        <div key={del} className="flex items-center gap-2 text-xs text-[#62666D]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B8059]" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D8D4CB] flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0B8059]">
                      {s.sla}
                    </span>

                    <button
                      onClick={() => toggleCompare(s)}
                      className={cn(
                        "text-xs font-mono px-2.5 py-1 rounded-md border transition-all flex items-center gap-1",
                        isSelectedForCompare
                          ? "bg-[#111111] text-white border-[#111111]"
                          : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB] hover:bg-[#E9E6DE]"
                      )}
                    >
                      {isSelectedForCompare ? "✓ Added" : "+ Compare"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Comparison Modal */}
      {compareModalOpen && (
        <div
          onClick={() => setCompareModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl border border-[#D8D4CB] shadow-2xl p-6 sm:p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#D8D4CB]">
              <div>
                <h3 className="text-xl font-heading font-bold text-[#111111]">
                  Side-by-Side Service Comparison
                </h3>
                <p className="text-xs text-[#62666D]">
                  Compare operational SLAs, deployment speeds, and key deliverable checklists.
                </p>
              </div>
              <button
                onClick={() => setCompareModalOpen(false)}
                className="p-1 rounded-lg text-[#62666D] hover:text-[#111111]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
              {compareList.map((item) => (
                <div key={item.id} className="p-4 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] space-y-3">
                  <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded font-bold text-[#F45116]">
                    {item.tierLabel}
                  </span>
                  <h4 className="text-sm font-heading font-bold text-[#111111]">{item.name}</h4>
                  <div className="text-xs font-mono font-bold text-[#0B8059]">SLA: {item.sla}</div>
                  <p className="text-xs text-[#62666D]">{item.desc}</p>
                  <div className="pt-2 border-t border-[#D8D4CB] space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#111111]">Included:</span>
                    {item.deliverables.map((d) => (
                      <div key={d} className="text-[11px] text-[#62666D] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B8059]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D8D4CB] flex justify-end gap-3">
              <button
                onClick={() => setCompareList([])}
                className="px-4 py-2 text-xs font-mono border border-[#D8D4CB] rounded-lg text-[#62666D]"
              >
                Clear Selection
              </button>
              <Link
                href="/contact"
                className="px-5 py-2 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg"
              >
                Inquire on These Modules
              </Link>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
