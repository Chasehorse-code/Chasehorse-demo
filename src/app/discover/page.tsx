"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { 
  ShieldCheck, 
  MapPin, 
  Users, 
  Award, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  HeartHandshake,
  Compass,
  Building
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DiscoverPage() {
  const [activeMilestone, setActiveMilestone] = useState(3);
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  const milestones = [
    {
      year: "2020",
      title: "Foundational Operations & Inception",
      desc: "Launched in Bengaluru to solve ground-level logistics handover bottlenecks, unverified shortages, and reverse-logistics friction.",
      stat: "500 Consignments",
    },
    {
      year: "2022",
      title: "Pan-India Road Freight Corridor",
      desc: "Expanded dedicated full-truckload (FTL) and multi-axle network across 18 industrial logistics hubs and port cities.",
      stat: "50+ Enterprise Clients",
    },
    {
      year: "2024",
      title: "G.E.L.P. Cloud Platform Rollout",
      desc: "Architected the Growth Enabler Logiworkx Platform uniting IoT telematics, mobile CX leads, and 8D complaint management.",
      stat: "10,000+ Tracked Trips",
    },
    {
      year: "2026",
      title: "Global Multi-Modal Expansion",
      desc: "Connected ocean port terminals and EXIM corridors across 120+ countries with verified on-field supervision.",
      stat: "120+ Countries · 1,000+ Employees",
    },
  ];

  const events = [
    {
      id: "ev-1",
      title: "National Cold-Chain & GDP Logistics Summit",
      date: "Nov 14, 2026",
      location: "Bengaluru International Exhibition Centre",
      topic: "Zero-excursion pharmaceutical transport and BLE sensor automation.",
    },
    {
      id: "ev-2",
      title: "Reverse Logistics & E-Commerce Returns Triage",
      date: "Dec 02, 2026",
      location: "Virtual Webinar · Broadcast Live",
      topic: "Mitigating RTO leakage with on-ground verified grading leads.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#F45116]" />
                Discover ChaseHorse
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#111111] leading-tight">
                Who we are &amp; how we transform field logistics.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#62666D] leading-relaxed max-w-xl">
                ChaseHorse bridge the gap between digital supply chain orders and physical ground truth. We build high-accountability verification workflows that protect brands and empower field agents.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-xl shadow-md transition-all"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/careers"
                  className="inline-flex items-center px-6 py-3.5 bg-white hover:bg-[#E9E6DE] text-[#111111] text-xs font-medium rounded-xl border border-[#D8D4CB] transition-colors"
                >
                  View Open Positions
                </Link>
              </div>
            </div>

            {/* Team Meeting Photography */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#D8D4CB] aspect-[4/3] shadow-md bg-white">
              <Image
                src="/images/team-meeting.jpg"
                alt="ChaseHorse Operations Team Meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-xs font-mono">
                  <div className="font-bold text-sm">Central Operations Hub</div>
                  <div className="text-white/80">Indiranagar, Bengaluru, Karnataka</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Milestones */}
          <section className="mb-16 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold">
                Our Evolution
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111111] mt-1">
                Milestones &amp; Growth Trajectory
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={cn(
                    "p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between",
                    activeMilestone === idx
                      ? "bg-[#111111] text-white border-[#111111] shadow-md"
                      : "bg-[#F4F2EC] text-[#111111] border-[#D8D4CB] hover:border-[#111111]"
                  )}
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#F45116]">
                      {m.year}
                    </span>
                    <h3 className="text-sm font-heading font-bold mt-1 mb-2">
                      {m.title}
                    </h3>
                    <p className={cn("text-xs leading-relaxed", activeMilestone === idx ? "text-white/80" : "text-[#62666D]")}>
                      {m.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 font-mono text-xs font-bold text-[#0B8059]">
                    {m.stat}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HSE & Safety Standards */}
          <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#E7F6F0] text-[#0B8059] flex items-center justify-center mb-4 border border-[#0B8059]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#111111]">
                Health, Safety &amp; Environment (HSE) Protocol
              </h3>
              <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                ChaseHorse maintains zero-harm standards across all dock gates and transit yards. Field CX leads undergo mandatory safety inductions, high-visibility vest protocols, and defensive driving telemetry reviews.
              </p>
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#0B8059]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Mandatory PPE enforcement across all partner sorting hubs.</span>
                </div>
                <div className="flex items-center gap-2 text-[#0B8059]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Speed limiter and fatigue monitoring algorithms on all active vehicles.</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FDF6E8] text-[#F45116] flex items-center justify-center mb-4 border border-[#F45116]/30">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#111111]">
                Upcoming Operational Events
              </h3>
              <p className="mt-2 text-xs text-[#62666D] leading-relaxed">
                Meet our leadership and engineering teams at key industry conferences and live technical webinars.
              </p>

              <div className="mt-4 space-y-3">
                {events.map((ev) => (
                  <div key={ev.id} className="p-3 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-heading font-bold text-[#111111]">{ev.title}</div>
                      <div className="text-[10px] font-mono text-[#62666D]">{ev.date} · {ev.location}</div>
                    </div>
                    <button
                      onClick={() => setRegisteredEvent(ev.id)}
                      className="px-3 py-1 bg-[#111111] text-white text-[11px] font-mono rounded hover:bg-[#F45116] transition-colors"
                    >
                      {registeredEvent === ev.id ? "✓ Registered" : "RSVP"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

