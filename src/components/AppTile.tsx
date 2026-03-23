"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type AppTileProps = {
  name: string;
  description: string;
  href?: string;
  logo?: string;
};

export function AppTile({ name, description, href, logo }: AppTileProps) {
  const [expanded, setExpanded] = useState(false);

  const content = (
    <div
      className={[
        "group relative flex w-full max-w-[320px] flex-col items-center rounded-3xl border border-subtle bg-white/[0.02] p-8 sm:p-10",
        "transition-all duration-300 ease-out",
        "hover:border-[hsl(var(--accent)/0.4)] hover:bg-white/[0.04]",
        href && "hover:shadow-[0_0_40px_-12px_hsl(var(--accent)/0.15)]",
        "focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-[hsl(var(--bg))]",
      ].join(" ")}
    >
      {/* Icon - main visual */}
      <div className="relative flex flex-col items-center">
        {logo ? (
          <div
            className={[
              "relative overflow-hidden rounded-[22px] shadow-xl transition-transform duration-300",
              "ring-1 ring-white/5",
              href && "group-hover:scale-105",
            ].join(" ")}
          >
            <Image
              src={logo}
              alt=""
              width={120}
              height={120}
              className="h-24 w-24 sm:h-28 sm:w-28 object-cover"
            />
          </div>
        ) : (
          <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-[22px] bg-white/5" />
        )}

        <h3 className="mt-4 text-center font-[var(--font-serif)] text-lg font-medium tracking-tight text-[hsl(var(--fg))] sm:text-xl">
          {name}
        </h3>

        {/* Collapsible description */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setExpanded((v) => !v);
          }}
          className={[
            "mt-3 flex items-center gap-1.5 text-[13px] text-subtle transition-colors hover:text-muted",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))] rounded",
          ].join(" ")}
          aria-expanded={expanded}
        >
          <span>{expanded ? "Less" : "More"}</span>
          <svg
            className={["h-3.5 w-3.5 transition-transform duration-200", expanded && "rotate-180"].join(" ")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div
        className={[
          "overflow-hidden transition-all duration-300 ease-out",
          expanded ? "mt-4 max-h-[20rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <p className="text-center text-sm leading-relaxed text-muted sm:text-[15px]">
          {description}
        </p>
      </div>

      {/* Arrow for link */}
      {href && (
        <div className="absolute right-5 top-5 hidden shrink-0 text-subtle opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block">
          →
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </Link>
    );
  }

  return content;
}
