"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Box, UserCheck, Camera, CheckCircle2 } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Task created",
      subtitle: "Store audit · 2 km radius",
      description: "Business defines task requirements, geofenced radius, required photos, and payout.",
      icon: Box,
      accent: "bg-[#FDF6E8] text-[#E9AA36] border-[#E9AA36]/40",
    },
    {
      number: "02",
      title: "Worker accepts",
      subtitle: "Visits physical location",
      description: "Eligible nearby field worker claims task, navigates to location, and performs GPS check-in.",
      icon: UserCheck,
      accent: "bg-[#EBF1FD] text-[#3566D6] border-[#3566D6]/40",
    },
    {
      number: "03",
      title: "Evidence submitted",
      subtitle: "3 photos · Digital checklist",
      description: "Worker captures geotagged photos and completes step-by-step checklist on site.",
      icon: Camera,
      accent: "bg-[#F4F2EC] text-[#F45116] border-[#F45116]/40",
    },
    {
      number: "04",
      title: "Reviewed & approved",
      subtitle: "Reward released instantly",
      description: "AI-assisted checks run immediately, followed by operations review and wallet payout.",
      icon: CheckCircle2,
      accent: "bg-[#E7F6F0] text-[#0B8059] border-[#0B8059]/40",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-[#D8D4CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F45116] font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111111] tracking-tight">
              From task to approval, with complete visibility.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#62666D] max-w-2xl">
              A simple, transparent workflow that connects businesses, field workers and operations teams.
            </p>
          </div>

          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#111111] hover:text-[#F45116] transition-colors shrink-0"
          >
            <span>See detailed process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Steps Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] p-5 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#62666D]">
                      {step.number}
                    </span>
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${step.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-heading font-bold text-[#111111] group-hover:text-[#F45116] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-[#F45116] mt-0.5 mb-2 font-medium">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-[#62666D] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D8D4CB]/60 flex items-center justify-between text-[11px] font-mono text-[#62666D]">
                  <span>Step {idx + 1} of 4</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/30 group-hover:bg-[#F45116] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

