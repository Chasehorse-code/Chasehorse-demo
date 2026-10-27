"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ChaseHorseLogo } from "@/components/brand/ChaseHorseLogo";
import { toast } from "sonner";
import { ArrowRight, Mail, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Password recovery link dispatched to your registered address.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#D8D4CB] shadow-sm max-w-md w-full p-8">
          <div className="text-center mb-6">
            <ChaseHorseLogo size="sm" variant="dark" className="mx-auto mb-3" />
            <h1 className="text-2xl font-heading font-extrabold text-[#111111]">
              Recover Account Access
            </h1>
            <p className="mt-1 text-xs text-[#62666D]">
              Enter your registered work email or phone number to receive a secure login token.
            </p>
          </div>

          {submitted ? (
            <div className="text-center p-6 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30">
              <div className="w-10 h-10 rounded-full bg-[#0B8059] text-white flex items-center justify-center mx-auto mb-3 font-bold">
                ✓
              </div>
              <h3 className="text-sm font-heading font-bold text-[#111111]">
                Check Your Inbox
              </h3>
              <p className="mt-1 text-xs text-[#62666D]">
                A password reset authorization link has been sent to <span className="font-mono font-bold text-[#111111]">{email}</span>.
              </p>
              <div className="mt-6">
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#111111] hover:text-[#F45116]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Sign In</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                  Registered Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#62666D] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. operations@chasehorse.com"
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
              >
                <span>Send Reset Link</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <Link
                  href="/sign-in"
                  className="text-xs font-mono text-[#62666D] hover:text-[#111111]"
                >
                  Remembered password? Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

