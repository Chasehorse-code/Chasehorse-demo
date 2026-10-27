"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ChaseHorseLogo } from "@/components/brand/ChaseHorseLogo";
import { useChaseHorseStore } from "@/lib/store";
import { toast } from "sonner";
import { ArrowRight, Lock, Mail, ShieldCheck, Check } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const { setUserRole } = useChaseHorseStore();
  const [role, setRole] = useState<"operations" | "business" | "worker">("operations");
  const [email, setEmail] = useState("ops.lead@chasehorse.com");
  const [password, setPassword] = useState("••••••••••••");
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleChange = (selectedRole: "operations" | "business" | "worker") => {
    setRole(selectedRole);
    if (selectedRole === "operations") {
      setEmail("ops.lead@chasehorse.com");
    } else if (selectedRole === "business") {
      setEmail("brand.manager@apexbrands.in");
    } else {
      setEmail("ravi.worker@chasehorse.in");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setUserRole(role);
      toast.success(`Signed in as ${role === "operations" ? "Operations Lead" : role === "business" ? "Business Client" : "Field Worker"}`);
      if (role === "operations") {
        router.push("/operations");
      } else if (role === "business") {
        router.push("/tasks/new");
      } else {
        router.push("/field-workers");
      }
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#D8D4CB] shadow-sm max-w-md w-full p-8">
          <div className="text-center mb-6">
            <ChaseHorseLogo size="sm" variant="dark" className="mx-auto mb-3" />
            <h1 className="text-2xl font-heading font-extrabold text-[#111111]">
              Sign in to ChaseHorse
            </h1>
            <p className="mt-1 text-xs text-[#62666D]">
              Select your operational account role to continue
            </p>
          </div>

          {/* Role Selector Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] mb-6">
            <button
              type="button"
              onClick={() => handleRoleChange("operations")}
              className={`py-1.5 text-xs font-mono rounded-lg transition-all ${
                role === "operations"
                  ? "bg-[#111111] text-white font-bold shadow-xs"
                  : "text-[#62666D] hover:text-[#111111]"
              }`}
            >
              Operations
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange("business")}
              className={`py-1.5 text-xs font-mono rounded-lg transition-all ${
                role === "business"
                  ? "bg-[#111111] text-white font-bold shadow-xs"
                  : "text-[#62666D] hover:text-[#111111]"
              }`}
            >
              Business
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange("worker")}
              className={`py-1.5 text-xs font-mono rounded-lg transition-all ${
                role === "worker"
                  ? "bg-[#111111] text-white font-bold shadow-xs"
                  : "text-[#62666D] hover:text-[#111111]"
              }`}
            >
              Field Worker
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                Work Email / Phone
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#62666D] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-mono uppercase text-[#111111] font-semibold">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#F45116] hover:underline font-mono"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#62666D] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              <span>{isLoading ? "Authenticating session..." : "Continue to Dashboard"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#D8D4CB] text-center text-xs text-[#62666D]">
            Need a new account?{" "}
            <Link href="/join" className="text-[#F45116] font-semibold hover:underline">
              Join ChaseHorse
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

