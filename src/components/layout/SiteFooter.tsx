"use client";

import React from "react";
import Link from "next/link";
import { ChaseHorseLogo } from "../brand/ChaseHorseLogo";
import { ShieldCheck, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Operational Metrics Banner */}
        <div className="pb-12 mb-12 border-b border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-bold text-[#F45116]">50K+</div>
            <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-mono">Tasks completed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-bold text-white">5K+</div>
            <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-mono">Active field workers</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-bold text-white">500+</div>
            <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-mono">Business locations</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-bold text-[#0B8059]">99%</div>
            <div className="mt-1 text-xs text-white/60 uppercase tracking-wider font-mono">Verification accuracy</div>
          </div>
        </div>

        {/* Main Footer Links & Brand info */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <ChaseHorseLogo variant="light" size="md" />
            <p className="mt-4 text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
              Growth Enabling Logiworkx Partner. ChaseHorse connects businesses with verified nearby field workers across India with geofenced check-ins, geotagged evidence, and complete operational audit trails.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F45116]" />
                <span>Bengaluru Hub: 100ft Rd, Indiranagar, Karnataka 560038</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F45116]" />
                <span>operations@chasehorse.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4 font-semibold">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link>
              </li>
              <li>
                <Link href="/businesses" className="hover:text-white transition-colors">For Businesses</Link>
              </li>
              <li>
                <Link href="/field-workers" className="hover:text-white transition-colors">For Field Workers</Link>
              </li>
              <li>
                <Link href="/verification" className="hover:text-white transition-colors">Verification System</Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:text-white transition-colors">Rewards & Payouts</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4 font-semibold">
              Operations
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/operations" className="hover:text-white transition-colors">Operations Board</Link>
              </li>
              <li>
                <Link href="/tasks/new" className="hover:text-white transition-colors">Post Field Task</Link>
              </li>
              <li>
                <Link href="/tasks/CH-24817" className="hover:text-white transition-colors">Live Task Inspection</Link>
              </li>
              <li>
                <Link href="/operations/review/CH-24817" className="hover:text-white transition-colors">Review Queue</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">Help Center & FAQ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4 font-semibold">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
              </li>
              <li>
                <span className="text-white/40">Privacy Policy (India DPDPA)</span>
              </li>
              <li>
                <span className="text-white/40">Terms of Operations</span>
              </li>
              <li>
                <span className="text-white/40">Field Worker Code of Conduct</span>
              </li>
              <li>
                <span className="text-white/40">Security & Tamper Proofing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {currentYear} ChaseHorse Logiworkx Partner Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-white/60">
              <span className="w-2 h-2 rounded-full bg-[#0B8059]" />
              Field Services Operational · All India Hubs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

