"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ChevronDown, ArrowRight, HelpCircle, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    category: "For Businesses",
    question: "How do businesses post tasks on ChaseHorse?",
    answer: "Businesses define task parameters—including address, geofenced radius (50m to 5km), required photos, step-by-step checklist, and reward amount. Once funded into escrow, tasks are dispatched immediately to eligible nearby field agents.",
  },
  {
    category: "For Businesses",
    question: "How does ChaseHorse prevent fake or duplicate photos?",
    answer: "Our system combines hardware-level camera enforcement (uploads from the gallery are blocked), real-time EXIF timestamp and GPS telemetry matching, and perceptual hashing algorithms that cross-check images against our historical repository of 50,000+ audits.",
  },
  {
    category: "Field Workers",
    question: "How do field workers get paid?",
    answer: "Once a submission passes automated AI checks and receives operations sign-off, the agreed reward is credited to the worker's ChaseHorse wallet. Earnings can be withdrawn directly via UPI or IMPS within 2 hours.",
  },
  {
    category: "Field Workers",
    question: "What happens if a task submission needs rework?",
    answer: "If a photo is blurry, a barcode is unreadable, or a checklist item was missed, the operations team requests rework with clear instructions. The worker is notified via app push and given a 2-hour grace period to recapture the evidence within the geofence.",
  },
  {
    category: "Verification",
    question: "What is the allowed GPS geofence radius?",
    answer: "Geofences typically range from 50 meters (for standalone high-street retail stores) to 200 meters (for large shopping malls or hypermarkets). The mobile app continuously cross-references device coordinates against the target latitude and longitude.",
  },
  {
    category: "Trust & Safety",
    question: "Does ChaseHorse share workers' exact location data?",
    answer: "No. Location telemetry is captured solely for task verification during active check-in and submission windows. In compliance with the India Digital Personal Data Protection Act (DPDPA), precise continuous tracking is not performed.",
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              Help Center & Knowledge Base
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111111]">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-sm text-[#62666D]">
              Clear answers on task creation, location verification, audit standards, and payouts.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#D8D4CB] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#F45116] font-bold">
                        {faq.category}
                      </span>
                      <h3 className="text-sm font-heading font-bold text-[#111111] mt-0.5">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-[#62666D] transition-transform duration-200 shrink-0",
                        isOpen && "rotate-180 text-[#F45116]"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#62666D] leading-relaxed border-t border-[#D8D4CB]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact prompt box */}
          <div className="mt-12 p-6 bg-white rounded-2xl border border-[#D8D4CB] text-center shadow-xs">
            <h4 className="text-base font-heading font-bold text-[#111111]">
              Have a specific operational question?
            </h4>
            <p className="mt-1 text-xs text-[#62666D]">
              Our operations lead and enterprise support team in Bengaluru are ready to assist.
            </p>
            <div className="mt-5 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                <span>Contact Operations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

