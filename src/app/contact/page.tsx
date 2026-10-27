"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { toast } from "sonner";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "enterprise_pilot",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Operational Inquiry Received", {
        description: "Our Bengaluru operations lead will respond within 4 business hours.",
      });
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact info */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#F45116]" />
                Operations HQ
              </div>

              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111111]">
                Connect with ChaseHorse Field Operations
              </h1>

              <p className="mt-4 text-sm text-[#62666D] leading-relaxed">
                Whether deploying a nationwide store audit pilot or inquiring about field workforce onboarding, our team is directly reachable.
              </p>

              <div className="mt-8 space-y-4 text-xs font-mono">
                <div className="p-4 bg-white rounded-xl border border-[#D8D4CB] flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F45116] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#111111]">Central Command Hub</div>
                    <div className="text-[#62666D] mt-0.5">
                      100ft Road, Indiranagar, Bengaluru, Karnataka 560038
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#D8D4CB] flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#F45116] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#111111]">Direct Operations Email</div>
                    <div className="text-[#62666D] mt-0.5">operations@chasehorse.com</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#D8D4CB] flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#F45116] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#111111]">Enterprise Phone Dispatch</div>
                    <div className="text-[#62666D] mt-0.5">+91 80 4920 1800 (Mon–Sat 08:00–20:00)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-10 shadow-xs">
              <h2 className="text-2xl font-heading font-bold text-[#111111] mb-2">
                Send an Operational Inquiry
              </h2>
              <p className="text-xs text-[#62666D] mb-6">
                Tell us about your field verification scope or retail auditing requirements.
              </p>

              {submitted ? (
                <div className="p-8 bg-[#E7F6F0] rounded-xl border border-[#0B8059]/30 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#0B8059] mx-auto mb-3" />
                  <h3 className="text-base font-heading font-bold text-[#111111]">
                    Inquiry Logged in Queue
                  </h3>
                  <p className="text-xs text-[#62666D] mt-1">
                    Thank you, {form.name}. A representative from the Bengaluru East hub will reach out to {form.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", company: "", inquiryType: "enterprise_pilot", message: "" });
                    }}
                    className="mt-5 text-xs font-mono font-bold text-[#F45116] hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="v.sharma@brand.in"
                        className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                        Organization / Retailer
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="e.g. Apex Consumer Brands"
                        className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                        Inquiry Category
                      </label>
                      <select
                        value={form.inquiryType}
                        onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                        className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                      >
                        <option value="enterprise_pilot">Enterprise Pilot (100+ stores)</option>
                        <option value="custom_checklist">Custom Checklist & Planogram</option>
                        <option value="field_worker_network">Field Worker Partnership</option>
                        <option value="billing_escrow">Escrow & Billing Questions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#111111] mb-1 font-semibold">
                      Operational Requirements Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Specify estimated store count, city locations, and required photographic deliverables..."
                      className="w-full text-xs p-3 rounded-lg border border-[#D8D4CB] bg-[#F4F2EC] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#F45116]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>{isSubmitting ? "Dispatching ticket..." : "Send Operational Inquiry"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

