"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useChaseHorseStore } from "@/lib/store";
import { Search, MapPin, Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TasksCatalogPage() {
  const { tasks } = useChaseHorseStore();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = tasks.filter((t) => {
    const matchesFilter = filter === "all" || t.status === filter;
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.businessName.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EC]">
      <SiteHeader />

      <main className="flex-1 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#D8D4CB] gap-4">
            <div>
              <h1 className="text-3xl font-heading font-extrabold text-[#111111]">
                Field Tasks Directory
              </h1>
              <p className="mt-1 text-xs text-[#62666D]">
                Browse active field audits and verifications across Bengaluru East
              </p>
            </div>

            <Link
              href="/tasks/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F45116] hover:bg-[#D9430D] text-white text-xs font-semibold rounded-lg shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Post a New Task</span>
            </Link>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
              {["all", "open", "in_progress", "in_review", "approved", "rework_requested"].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilter(st)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg capitalize transition-colors",
                    filter === st
                      ? "bg-[#111111] text-white font-bold"
                      : "bg-white text-[#62666D] border border-[#D8D4CB] hover:text-[#111111]"
                  )}
                >
                  {st.replace("_", " ")}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#62666D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-xs pl-8 pr-3 py-2 rounded-lg border border-[#D8D4CB] bg-white w-full sm:w-64 focus:ring-1 focus:ring-[#F45116] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Grid of Task Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-xl border border-[#D8D4CB] p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#D8D4CB]">
                    <span className="font-bold text-[#111111]">{t.id}</span>
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded text-[10px] uppercase font-bold",
                        t.status === "approved" && "bg-[#E7F6F0] text-[#0B8059]",
                        t.status === "in_review" && "bg-[#FDF6E8] text-[#E9AA36]",
                        t.status === "rework_requested" && "bg-[#FAEBEA] text-[#C83B36]",
                        t.status === "open" && "bg-[#EBF1FD] text-[#3566D6]"
                      )}
                    >
                      {t.status.replace("_", " ")}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-bold text-[#111111] mt-3 line-clamp-1">
                    {t.title}
                  </h3>

                  <p className="text-xs text-[#62666D] font-mono mt-0.5">
                    {t.businessName} · {t.category}
                  </p>

                  <p className="mt-2 text-xs text-[#62666D] line-clamp-2">
                    {t.description}
                  </p>

                  <div className="mt-4 p-2.5 bg-[#F4F2EC] rounded-lg border border-[#D8D4CB] text-[11px] font-mono flex items-center gap-1.5 text-[#111111]">
                    <MapPin className="w-3.5 h-3.5 text-[#F45116] shrink-0" />
                    <span className="truncate">{t.location.address}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#D8D4CB] flex items-center justify-between">
                  <div className="text-base font-heading font-extrabold text-[#0B8059]">
                    ₹{t.rewardAmount}
                  </div>

                  <Link
                    href={`/tasks/${t.id}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#111111] hover:text-[#F45116]"
                  >
                    <span>View Task</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

