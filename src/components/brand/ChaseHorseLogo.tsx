"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ChaseHorseLogoProps {
  variant?: "dark" | "light" | "metallic";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  showTagline?: boolean;
  priority?: boolean;
}

export function ChaseHorseLogo({
  variant = "dark",
  size = "md",
  className,
  showTagline = true,
  priority = false,
}: ChaseHorseLogoProps) {
  // Height mappings keeping aspect ratio 1024:342 (~3:1)
  const sizeClasses = {
    xs: "h-6 w-auto",
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-14 w-auto",
    xl: "h-20 w-auto",
  };

  const isLight = variant === "light";
  const isMetallic = variant === "metallic";

  return (
    <div className={cn("inline-flex flex-col items-start select-none", className)}>
      <div className="relative flex items-center">
        <Image
          src="/images/chasehorse-brand-logo.png"
          alt="ChaseHorse — Growth Enabling Logiworkx Partner"
          width={1024}
          height={342}
          priority={priority}
          className={cn(
            "object-contain transition-all duration-300",
            sizeClasses[size],
            isLight && "brightness-0 invert contrast-150 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]",
            isMetallic && "brightness-125 contrast-125 drop-shadow-[0_0_15px_rgba(244,81,22,0.4)]",
            variant === "dark" && "mix-blend-multiply"
          )}
        />
      </div>
      {!showTagline && (
        <span className="sr-only">ChaseHorse — Growth Enabling Logiworkx Partner</span>
      )}
    </div>
  );
}

