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
            The goal of my work is to improve public health by utilizing{" "}
            <Link className="link" href="/experience">
              policy
            </Link>
            ,{" "}
            <Link className="link" href="/writings">
              writing
            </Link>
            ,{" "}
            <Link className="link mr-1" href="/apps">
              technology
            </Link>
            and medicine as mediums of action to improve mental health outcomes.{" "}
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
                <Link className="link" href="/experience">
                  Experience
                </Link>
              </div>
              <p className="mt-2 text-[15px] leading-7 text-muted">
                Advancing legislation to improve mental health outcomes and advocating to expand access to mental health treatments.
              </p>
            </div>

            <div className="rounded-2xl border border-subtle bg-white/[0.02] p-5">
              <div className="text-xs tracking-wide text-subtle">
                <Link className="link" href="/writings">
                  Writings
                </Link>
              </div>
              <p className="mt-2 text-[15px] leading-7 text-muted">
                Writing about policy and public health issues that shift culture towards a greater awareness for mental health problems facing our society, and the solutions to those problems.
              
              </p>
            </div>

            <div className="rounded-2xl border border-subtle bg-white/[0.02] p-5">
              <div className="text-xs tracking-wide text-subtle">
                <Link className="link" href="/apps">
                  Mobile Apps
                </Link>
              </div>
              <p className="mt-2 text-[15px] leading-7 text-muted">
              Building mobile apps that provide mental health support and make technology a resource for improved mental health outcomes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}