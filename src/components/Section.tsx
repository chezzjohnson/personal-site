import type { ReactNode } from "react";

export function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="fade-up scroll-mt-24 py-8 sm:py-10">
      <h2 className="mb-3 font-[var(--font-serif)] text-xl tracking-tight sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-7 text-muted sm:text-base">
        {children}
      </div>
    </section>
  );
}



