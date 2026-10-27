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
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <ChaseHorseLogo variant="light" size="md" />
            <p className="mt-4 text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
              Growth Enabling Logiworkx Partner (G.E.L.P.). Connecting enterprise supply chains, local commerce, and verified field agents across India with precision GPS tracking, AI verification, and real-time operations command.
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
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F45116]" />
                <span>+91 80 4920 1800 / Toll Free: 1800-CHASE-LOGI</span>
              </div>
            </div>
          </div>

          {/* Platform & Solutions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4 font-semibold">
              G.E.L.P. Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/platform" className="hover:text-white transition-colors">Platform Architecture</Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">Industry Solutions</Link>
              </li>
              <li>
                <Link href="/live-market" className="hover:text-white transition-colors">Live Freight Market</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services & SLA Matrix</Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="hover:text-[#F45116] text-[#F45116] font-medium transition-colors">Instant Rate Quote →</Link>
              </li>
            </ul>
          </div>

          {/* Operations & Verification */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4 font-semibold">
              Field Execution
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/operations" className="hover:text-white transition-colors">Operations Command</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/businesses" className="hover:text-white transition-colors">For Businesses</Link>
              </li>
              <li>
                <Link href="/field-workers" className="hover:text-white transition-colors">For Field Workers</Link>
              </li>
              <li>
                <Link href="/verification" className="hover:text-white transition-colors">Multi-Layer Verification</Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:text-white transition-colors">Rewards & Payouts</Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem & Gear */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4 font-semibold">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/discover" className="hover:text-white transition-colors">Discover & Milestones</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers (Hiring)</Link>
              </li>
              <li>
                <Link href="/merchandise" className="hover:text-white transition-colors">Field Gear Shop</Link>
              </li>
              <li>
                <Link href="/tasks/new" className="hover:text-white transition-colors">Post a Field Task</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">Help Center & FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Trust & Dispatch */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4 font-semibold">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Enterprise Dispatch</Link>
              </li>
              <li>
                <span className="text-white/40">ISO 9001:2015 Logistics</span>
              </li>
              <li>
                <span className="text-white/40">DPDPA India Privacy</span>
              </li>
              <li>
                <span className="text-white/40">Terms of Operations</span>
              </li>
              <li>
                <span className="text-white/40">Security & Anti-Spoof</span>
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

