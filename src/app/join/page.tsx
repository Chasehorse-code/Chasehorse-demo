"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ChaseHorseLogo } from "@/components/brand/ChaseHorseLogo";
import { useChaseHorseStore } from "@/lib/store";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, ShieldCheck, User, Building2, MapPin } from "lucide-react";

export default function JoinPage() {
  const router = useRouter();
  const { setUserRole } = useChaseHorseStore();
  const [accountType, setAccountType] = useState<"worker" | "business">("worker");
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    city: "Bengaluru",
    companyName: "",
    gstin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setUserRole(accountType);
      toast.success(
        accountType === "worker"
          ? "Field Worker registration received! Welcome to ChaseHorse."
          : "Business account onboarding initiated. Our enterprise lead will contact you."
      );
      router.push(accountType === "worker" ? "/field-workers" : "/businesses");
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#D8D4CB] shadow-sm max-w-lg w-full p-8">
          <div className="text-center mb-6">
            <ChaseHorseLogo size="sm" variant="dark" className="mx-auto mb-3" />
            <h1 className="text-2xl font-heading font-extrabold text-[#111111]">
              Join the ChaseHorse Platform
            </h1>
            <p className="mt-1 text-xs text-[#62666D]">
              Select whether you are joining as a verified Field Worker or an Enterprise Business.
            </p>
          </div>

          {/* Account Type Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-[#F4F2EC] rounded-xl border border-[#D8D4CB] mb-6">
            <button
              type="button"
              onClick={() => setAccountType("worker")}
              className={`py-2 text-xs font-mono rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                accountType === "worker"
                  ? "bg-[#111111] text-white font-bold shadow-xs"
                  : "text-[#62666D] hover:text-[#111111]"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Field Worker Partner</span>
            </button>
            <button
              type="button"
              onClick={() => setAccountType("business")}
              className={`py-2 text-xs font-mono rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                accountType === "business"
                  ? "bg-[#111111] text-white font-bold shadow-xs"
                  : "text-[#62666D] hover:text-[#111111]"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Business Client</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                {accountType === "worker" ? "Full Name (as per Aadhaar / PAN)" : "Contact Person Name"}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={accountType === "worker" ? "e.g. Ravi Kumar" : "e.g. Neha Sharma"}
                className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
              />
            </div>

            {accountType === "business" && (
              <>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Retail Brands Pvt Ltd"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                    GSTIN / Corporate Tax ID
                  </label>
                  <input
                    type="text"
                    value={formData.gstin}
                    onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                    placeholder="e.g. 29AAAAA0000A1Z5"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                {accountType === "worker" ? "Mobile Phone (for OTP & UPI payout)" : "Official Work Email"}
              </label>
              <input
                type={accountType === "worker" ? "tel" : "email"}
                required
                value={formData.emailOrPhone}
                onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                placeholder={accountType === "worker" ? "+91 98765 43210" : "ops@company.com"}
                className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                Operating Hub / City
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
              >
                <option value="Bengaluru">Bengaluru (East / Central / South)</option>
                <option value="Mumbai">Mumbai (MMR Region)</option>
                <option value="Delhi NCR">Delhi NCR (Gurugram / Noida)</option>
                <option value="Hyderabad">Hyderabad (HITEC / Secunderabad)</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
              >
                <span>{isSubmitting ? "Submitting application..." : "Complete Registration"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="mt-6 pt-4 border-t border-[#D8D4CB] text-center text-xs text-[#62666D]">
            Already registered?{" "}
            <Link href="/sign-in" className="text-[#F45116] font-semibold hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

