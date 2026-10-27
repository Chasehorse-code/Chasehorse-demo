"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="bg-white py-16 border-t border-[#D8D4CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#111111] text-white overflow-hidden p-8 sm:p-12 border border-[#D8D4CB]">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F45116]" />
              Field Execution At Scale
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
              Ready to streamline your field operations?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Join businesses across India using ChaseHorse for faster, more reliable, and fully verified field execution.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/tasks/new"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F45116] hover:bg-[#D9430D] text-white text-sm font-semibold rounded-xl shadow-lg transition-all"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl border border-white/20 transition-colors"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

