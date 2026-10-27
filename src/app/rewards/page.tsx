"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useChaseHorseStore } from "@/lib/store";
import { 
  Wallet, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Filter, 
  Info,
  Building,
  CreditCard
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

export default function RewardsPage() {
  const { metrics, isDemoMode } = useChaseHorseStore();
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const transactions = [
    {
      id: "TX-89104",
      taskId: "CH-24817",
      title: "Shelf audit — beverages aisle",
      amount: 450,
      status: "pending_review",
      date: "Today, 10:24 AM",
      worker: "Ravi K.",
      business: "Apex Retail Brands",
    },
    {
      id: "TX-89103",
      taskId: "CH-24816",
      title: "Signage check & entrance branding",
      amount: 300,
      status: "paid",
      date: "Today, 09:50 AM",
      worker: "Arun S.",
      business: "MetroMart",
    },
    {
      id: "TX-89102",
      taskId: "CH-24814",
      title: "Store audit — checkout POS signage",
      amount: 400,
      status: "paid",
      date: "Today, 08:45 AM",
      worker: "Vikram D.",
      business: "ValueStore",
    },
    {
      id: "TX-89101",
      taskId: "CH-24810",
      title: "Chiller temperature & planogram",
      amount: 550,
      status: "payment_processing",
      date: "Yesterday, 04:15 PM",
      worker: "Kavya R.",
      business: "FreshFoods",
    },
    {
      id: "TX-89100",
      taskId: "CH-24808",
      title: "Promotional banner inspection",
      amount: 350,
      status: "rework_hold",
      date: "Yesterday, 02:30 PM",
      worker: "Priya M.",
      business: "RetailMax",
    },
  ];

  const filtered = filterStatus === "all" 
    ? transactions 
    : transactions.filter((t) => t.status === filterStatus);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#D8D4CB] gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E6DE] border border-[#D8D4CB] text-xs font-mono text-[#F45116] uppercase tracking-wider mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#F45116]" />
                Escrow & Disbursements
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111111]">
                Task Rewards & Payment Transparency
              </h1>
              <p className="mt-2 text-sm text-[#62666D]">
                Every rupee is tracked with clear status labels from task posting through escrow and verified payout.
              </p>
            </div>

            {isDemoMode && (
              <span className="text-xs font-mono bg-[#FDF6E8] text-[#9C680C] px-3 py-1.5 rounded-lg border border-[#E9AA36]/40 self-start sm:self-auto">
                Demo Account Ledger
              </span>
            )}
          </div>

          {/* 4 Status Explanation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="p-5 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#E9AA36] bg-[#FDF6E8] px-2 py-0.5 rounded">
                  Pending Review
                </span>
                <Clock className="w-4 h-4 text-[#E9AA36]" />
              </div>
              <div className="text-sm font-heading font-bold text-[#111111]">Escrow Locked</div>
              <p className="mt-1 text-xs text-[#62666D]">
                Evidence submitted and undergoing automated AI checks + operations review.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#3566D6] bg-[#EBF1FD] px-2 py-0.5 rounded">
                  Payment Processing
                </span>
                <CreditCard className="w-4 h-4 text-[#3566D6]" />
              </div>
              <div className="text-sm font-heading font-bold text-[#111111]">Clearing Batch</div>
              <p className="mt-1 text-xs text-[#62666D]">
                Approved by operations lead. Payout queued in the 2-hour banking batch.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#0B8059] bg-[#E7F6F0] px-2 py-0.5 rounded">
                  Paid
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#0B8059]" />
              </div>
              <div className="text-sm font-heading font-bold text-[#111111]">Disbursed to UPI</div>
              <p className="mt-1 text-xs text-[#62666D]">
                Funds transferred successfully with reference UTR number provided.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#D8D4CB] shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#C83B36] bg-[#FAEBEA] px-2 py-0.5 rounded">
                  Rework Hold
                </span>
                <Info className="w-4 h-4 text-[#C83B36]" />
              </div>
              <div className="text-sm font-heading font-bold text-[#111111]">Awaiting Correction</div>
              <p className="mt-1 text-xs text-[#62666D]">
                Reward held while worker resubmits corrected photo or missing checklist item.
              </p>
            </div>
          </div>

          {/* Transactions Ledger */}
          <div className="bg-white rounded-2xl border border-[#D8D4CB] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#D8D4CB] gap-4">
              <div>
                <h3 className="text-xl font-heading font-bold text-[#111111]">
                  Recent Disbursement Ledger
                </h3>
                <p className="text-xs text-[#62666D] font-mono mt-0.5">
                  Real-time view of field worker payouts across Bengaluru East
                </p>
              </div>

              {/* Status Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {["all", "pending_review", "payment_processing", "paid", "rework_hold"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setFilterStatus(st)}
                    className={cn(
                      "px-3 py-1 text-xs font-mono rounded-lg transition-colors capitalize",
                      filterStatus === st
                        ? "bg-[#111111] text-white font-bold"
                        : "bg-[#F4F2EC] text-[#62666D] hover:text-[#111111]"
                    )}
                  >
                    {st.replace("_", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#D8D4CB] text-[#62666D] font-mono">
                    <th className="py-3 px-3">Transaction ID</th>
                    <th className="py-3 px-3">Task & Business</th>
                    <th className="py-3 px-3">Field Worker</th>
                    <th className="py-3 px-3">Amount</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-right">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8D4CB]/60">
                  {filtered.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[#F4F2EC]/50 transition-colors">
                      <td className="py-3 px-3 font-mono font-bold text-[#111111]">
                        {tx.id}
                        <div className="text-[10px] text-[#62666D] font-normal">{tx.taskId}</div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-[#111111]">{tx.title}</div>
                        <div className="text-[11px] text-[#62666D]">{tx.business}</div>
                      </td>
                      <td className="py-3 px-3 font-medium text-[#111111]">
                        {tx.worker}
                      </td>
                      <td className="py-3 px-3 font-mono font-bold text-[#111111]">
                        ₹{tx.amount}
                      </td>
                      <td className="py-3 px-3">
                        <span
                          className={cn(
                            "inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase font-medium",
                            tx.status === "paid" && "bg-[#E7F6F0] text-[#0B8059]",
                            tx.status === "payment_processing" && "bg-[#EBF1FD] text-[#3566D6]",
                            tx.status === "pending_review" && "bg-[#FDF6E8] text-[#E9AA36]",
                            tx.status === "rework_hold" && "bg-[#FAEBEA] text-[#C83B36]"
                          )}
                        >
                          {tx.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right font-mono text-[#62666D]">
                        {tx.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

