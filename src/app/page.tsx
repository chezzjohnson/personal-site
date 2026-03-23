import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <SiteNav />

      <main>
        <div className="fade-up max-w-3xl">
          <p className="text-sm tracking-wide text-subtle">About</p>
          <p className="mt-4 text-lg leading-8 text-[hsl(var(--fg))] sm:text-xl">
            The goal of my work is to improve public health outcomes,
            particularly in mental health, by leveraging{" "}
            <Link className="link" href="/policy-advocacy">
              policy
            </Link>
            ,{" "}
            <Link className="link" href="/writings">
              writing
            </Link>
            ,{" "}
            <Link className="link" href="/apps">
              technology
            </Link>
            , and medicine as mediums for change.
          </p>
        </div>

        <div className="mt-10 border-t border-subtle" />

        <section id="current-focus" className="fade-up scroll-mt-24 py-8 sm:py-10">
          <h2 className="mb-4 text-sm font-medium tracking-wide text-subtle">
            Current Focus
          </h2>
          <p className="text-[15px] leading-7 text-muted sm:text-base">
          Right now, my work concentrates in three areas—each a different
          pathway toward the same mission.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-subtle bg-white/[0.02] p-5">
              <div className="text-xs tracking-wide text-subtle">
                <Link className="link" href="/policy-advocacy">
                  Policy and Advocacy
                </Link>
              </div>
              <p className="mt-2 text-[15px] leading-7 text-muted">
                Policy and advocacy work in government, political consulting,
                and nonprofits, driven by a commitment to public health reform
                to improve mental health outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-subtle bg-white/[0.02] p-5">
              <div className="text-xs tracking-wide text-subtle">
                <Link className="link" href="/writings">
                  Writings
                </Link>
              </div>
              <p className="mt-2 text-[15px] leading-7 text-muted">
                Writing to inform people about public health issues facing our
                society and providing possible solutions to those problems, so
                we can improve mental health outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-subtle bg-white/[0.02] p-5">
              <div className="text-xs tracking-wide text-subtle">
                <Link className="link" href="/apps">
                  Apps
                </Link>
              </div>
              <p className="mt-2 text-[15px] leading-7 text-muted">
                Building mobile apps that support and improve mental health
                outcomes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}