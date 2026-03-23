"use client";

import { useState, useMemo } from "react";
import { ContentCard, type ContentCardProps } from "@/components/ContentCard";

function parseDate(dateStr: string): Date {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const [monthStr, yearStr] = dateStr.split(" ");
  const month = months[monthStr] ?? 0;
  const year = parseInt(yearStr || "0", 10);
  return new Date(year, month);
}

type SortOrder = "new" | "old";

export function ArticlesSection({ articles }: { articles: ContentCardProps[] }) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("new");

  const sorted = useMemo(() => {
    const copy = [...articles];
    copy.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      const da = parseDate(a.date).getTime();
      const db = parseDate(b.date).getTime();
      return sortOrder === "new" ? db - da : da - db;
    });
    return copy;
  }, [articles, sortOrder]);

  return (
    <section id="articles" className="fade-up scroll-mt-24 py-8 sm:py-10">
      <h2 className="mb-4 text-sm font-medium tracking-wide text-subtle">
        Articles
      </h2>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-end">
        <div className="flex items-center gap-2">
          <label htmlFor="article-sort" className="text-xs text-subtle">
            Sort:
          </label>
          <select
            id="article-sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className={[
              "rounded border border-subtle bg-transparent px-2 py-1.5 text-xs text-muted",
              "focus:outline-none focus:ring-2 focus:ring-accent",
            ].join(" ")}
          >
            <option value="new">New → Old</option>
            <option value="old">Old → New</option>
          </select>
        </div>
      </div>
      <div className="mt-4 grid gap-4">
        {sorted.map((a) => (
          <ContentCard key={a.title} {...a} />
        ))}
      </div>
    </section>
  );
}
