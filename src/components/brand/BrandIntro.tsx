"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChaseHorseLogo } from "./ChaseHorseLogo";
import { useChaseHorseStore } from "@/lib/store";

interface BrandIntroProps {
  onComplete?: () => void;
  forcePlay?: boolean;
}

export function BrandIntro({ onComplete, forcePlay = false }: BrandIntroProps) {
  const [stage, setStage] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [shouldShow, setShouldShow] = useState(false);
  const { setIntroCompleted } = useChaseHorseStore();

  useEffect(() => {
    // Check if reduced motion is requested
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && !forcePlay) {
      setIntroCompleted(true);
      if (onComplete) onComplete();
      return;
    }

    // Check if session has already viewed the intro
    const hasViewed = sessionStorage.getItem("chasehorse-intro-viewed");
    if (hasViewed && !forcePlay) {
      setIntroCompleted(true);
      if (onComplete) onComplete();
      return;
    }

    setShouldShow(true);

    // Timeline orchestrator: total ~1.9s
    const t1 = setTimeout(() => setStage(2), 500);  // Step 1 -> Step 2
    const t2 = setTimeout(() => setStage(3), 1000); // Step 2 -> Step 3
    const t3 = setTimeout(() => setStage(4), 1450); // Step 3 -> Step 4 (Ivory switch)
    const t4 = setTimeout(() => {
      setStage(5); // Complete
      sessionStorage.setItem("chasehorse-intro-viewed", "true");
      setIntroCompleted(true);
      if (onComplete) onComplete();
    }, 1900);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [forcePlay, onComplete, setIntroCompleted]);

  const skipIntro = () => {
    setStage(5);
    sessionStorage.setItem("chasehorse-intro-viewed", "true");
    setIntroCompleted(true);
    if (onComplete) onComplete();
  };

  if (!shouldShow || stage === 5) {
    return null;
  }

  const isIvoryStage = stage === 4;

  return (
    <AnimatePresence>
      <motion.div
        key="brand-intro-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundColor: isIvoryStage ? "#F4F2EC" : "#0A0A09",
          transition: "background-color 0.4s ease",
        }}
      >
        {/* Skip button */}
        <button
          onClick={skipIntro}
          className={`absolute top-6 right-6 z-50 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all ${
            isIvoryStage
              ? "border-[#D8D4CB] text-[#62666D] hover:text-[#111111] hover:border-[#111111]"
              : "border-white/20 text-white/60 hover:text-white hover:border-white/40"
          }`}
        >
          Skip Intro [Esc]
        </button>

        {/* Cinematic Flare & Grid effects in dark mode */}
        {!isIvoryStage && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,81,22,0.18),transparent_65%)]" />
            <div className="absolute inset-0 opacity-20 bg-grid-pattern pointer-events-none" />
            
            {/* Horizontal anamorphic light beam */}
            <motion.div
              animate={{
                opacity: stage >= 2 ? [0.4, 0.9, 0.4] : 0.2,
                scaleX: stage >= 2 ? [0.8, 1.4, 1.1] : 0.6,
              }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-[2px] w-full max-w-4xl bg-gradient-to-r from-transparent via-[#F45116] to-transparent blur-[1px]"
            />
          </>
        )}

        {/* Content Stages Container */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-xl">
          {/* STAGE 1: Glowing orange square */}
          {stage === 1 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-16 h-16 rounded-xl border-2 border-[#F45116] flex items-center justify-center shadow-[0_0_30px_rgba(244,81,22,0.5)]">
                <div className="w-4 h-4 bg-[#F45116] rounded-sm animate-pulse" />
              </div>
              <p className="mt-8 text-xs font-mono tracking-wider text-white/70">
                Loading your field operations experience...
              </p>
              <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full bg-[#F45116]"
                />
              </div>
            </motion.div>
          )}

          {/* STAGE 2: Golden Flare & Brand Intro */}
          {stage === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <ChaseHorseLogo variant="light" size="lg" priority />
                <motion.div
                  initial={{ left: "-30%", opacity: 0 }}
                  animate={{ left: "120%", opacity: [0, 1, 0] }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                />
              </div>
              <p className="mt-6 text-xs font-mono tracking-wider text-white/70">
                Preparing your operations...
              </p>
              <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#F45116] w-[65%]" />
              </div>
            </motion.div>
          )}

          {/* STAGE 3: Light Sweep & High Contrast */}
          {stage === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <ChaseHorseLogo variant="light" size="lg" />
                <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-[#F45116]/20 to-transparent blur-xl pointer-events-none" />
              </div>
              <p className="mt-6 text-xs font-mono tracking-wider text-[#E9AA36]">
                Almost there...
              </p>
              <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#F45116] w-[88%]" />
              </div>
            </motion.div>
          )}

          {/* STAGE 4: Clean Ivory Background Lockup */}
          {stage === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <ChaseHorseLogo variant="dark" size="lg" />
              <p className="mt-6 text-xs font-mono tracking-wider text-[#62666D]">
                Welcome to ChaseHorse
              </p>
              <div className="mt-4 w-48 h-1 bg-[#D8D4CB] rounded-full overflow-hidden">
                <div className="h-full bg-[#F45116] w-full transition-all duration-300" />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

