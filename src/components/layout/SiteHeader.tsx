"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, MapPin, Layers } from "lucide-react";
import { ChaseHorseLogo } from "../brand/ChaseHorseLogo";
import { useChaseHorseStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Businesses", href: "/businesses" },
  { label: "Field workers", href: "/field-workers" },
  { label: "Verification", href: "/verification" },
  { label: "Rewards", href: "/rewards" },
  { label: "Operations", href: "/operations" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDemoMode, toggleDemoMode } = useChaseHorseStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#F4F2EC]/95 backdrop-blur-md border-b border-[#D8D4CB] shadow-sm py-2.5"
            : "bg-[#F4F2EC] border-b border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0"
              aria-label="ChaseHorse Home"
            >
              <ChaseHorseLogo size="sm" variant="dark" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors rounded-full",
                      isActive
                        ? "text-[#111111] font-semibold"
                        : "text-[#62666D] hover:text-[#111111] hover:bg-[#E9E6DE]/60"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F45116] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions & Role Controls */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* Demo Mode Badge */}
              <button
                onClick={toggleDemoMode}
                title="Click to toggle live demo mode"
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-tight transition-colors border",
                  isDemoMode
                    ? "bg-[#FDF6E8] border-[#E9AA36]/60 text-[#9C680C]"
                    : "bg-[#E7F6F0] border-[#0B8059]/40 text-[#0B8059]"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full animate-ping",
                    isDemoMode ? "bg-[#E9AA36]" : "bg-[#0B8059]"
                  )}
                />
                {isDemoMode ? "Demo Mode" : "Connected API"}
              </button>

              <Link
                href="/sign-in"
                className="px-3 py-1.5 text-xs font-medium text-[#111111] hover:text-[#F45116] transition-colors"
              >
                Sign in
              </Link>

              <Link
                href="/join"
                className="px-3 py-1.5 text-xs font-medium text-[#111111] hover:bg-[#E9E6DE] border border-[#D8D4CB] rounded-lg transition-colors"
              >
                Join as worker
              </Link>

              <Link
                href="/tasks/new"
                className="group flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium bg-[#F45116] hover:bg-[#D9430D] text-white rounded-lg shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Post a task</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#111111] hover:bg-[#E9E6DE] rounded-lg border border-[#D8D4CB]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden fixed inset-x-0 top-[60px] z-30 bg-[#F4F2EC] border-b border-[#D8D4CB] shadow-xl overflow-hidden px-4 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-[#E9E6DE] text-[#111111] font-semibold"
                      : "text-[#62666D] hover:bg-[#E9E6DE]/50"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-[#D8D4CB] flex flex-col gap-2.5">
                <Link
                  href="/tasks/new"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#F45116] text-white text-sm font-medium rounded-lg shadow-sm"
                >
                  <span>Post a task</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/sign-in"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center py-2 text-xs font-medium border border-[#D8D4CB] rounded-lg text-[#111111]"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/join"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center py-2 text-xs font-medium border border-[#D8D4CB] rounded-lg text-[#111111]"
                  >
                    Join as worker
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

