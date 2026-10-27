"use client";

import React from "react";
import { ChaseHorseLogo } from "../brand/ChaseHorseLogo";

export function TrustBanner() {
  const brands = [
    { name: "Apex Retail Brands", tag: "FMCG / Retail" },
    { name: "MetroMart", tag: "Hypermarkets" },
    { name: "FreshFoods", tag: "Cold Chain Grocery" },
    { name: "ValueStore", tag: "Convenience Chain" },
    { name: "QuickKart", tag: "Dark Stores & Q-Commerce" },
    { name: "RetailMax", tag: "Electronics MegaStores" },
  ];

  return (
    <section className="bg-white border-t border-[#D8D4CB] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-wider text-[#62666D] mb-8">
          Trusted by businesses across India
        </p>

        {/* Enterprise Logos Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-transparent hover:border-[#D8D4CB] hover:bg-[#F4F2EC] transition-all group"
            >
              <div className="text-sm font-heading font-extrabold text-[#111111] group-hover:text-[#F45116] transition-colors text-center">
                {b.name}
              </div>
              <div className="text-[10px] font-mono text-[#62666D] mt-0.5">
                {b.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Dark Stats Band from Reference Image */}
        <div className="mt-12 bg-[#111111] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="shrink-0">
            <ChaseHorseLogo variant="light" size="sm" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto text-center md:text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">50K+</div>
              <div className="text-[11px] font-mono text-white/60">Tasks completed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">5K+</div>
              <div className="text-[11px] font-mono text-white/60">Active field workers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">500+</div>
              <div className="text-[11px] font-mono text-white/60">Business locations</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-[#0B8059]">99%</div>
              <div className="text-[11px] font-mono text-white/60">Verification accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

