"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, ClipboardList, MapPin, Camera, ShieldCheck } from "lucide-react";
import { OperationsScene } from "./OperationsScene";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                Field Operations Platform · India
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold text-[#111111] leading-[1.08] tracking-tight"
            >
              Every field task, verified where it happens.
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#62666D] leading-relaxed max-w-xl"
            >
              ChaseHorse connects businesses that need work done on the ground with nearby field workers—and gives operations teams the location record, photo evidence and review trail to sign off on each task.
            </motion.p>

            {/* Dual CTAs & Operations Sign In Link */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="/tasks/new"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F45116] hover:bg-[#D9430D] text-white font-medium text-sm rounded-xl shadow-md transition-all duration-200 active:scale-95"
              >
                <span>Post field tasks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/join"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-[#E9E6DE] text-[#111111] font-medium text-sm rounded-xl border border-[#D8D4CB] shadow-xs transition-all duration-200"
              >
                Join as a field worker
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4"
            >
              <Link
                href="/operations"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#111111] hover:text-[#F45116] transition-colors"
              >
                <span>Operations sign in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Trust statement & 4 Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 pt-8 border-t border-[#D8D4CB] w-full grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#D8D4CB] flex items-center justify-center text-[#F45116]">
                  <ClipboardList className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#111111]">
                  Clear task instructions
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#D8D4CB] flex items-center justify-center text-[#F45116]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#111111]">
                  Location-aware check-ins
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#D8D4CB] flex items-center justify-center text-[#F45116]">
                  <Camera className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#111111]">
                  Photo evidence
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#D8D4CB] flex items-center justify-center text-[#F45116]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#111111]">
                  Transparent review
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Operations Scene */}
          <div className="lg:col-span-7">
            <OperationsScene />
          </div>
        </div>
      </div>
    </section>
  );
}

