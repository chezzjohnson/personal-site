import Link from "next/link";
import { AppTile, type AppTileProps } from "@/components/AppTile";
import { SiteNav } from "@/components/SiteNav";

export default function AppsPage() {
  const projects: AppTileProps[] = [
    {
      name: "Leafit",
      description:
        "Created for users to quit or take a break from cannabis use. Provides structure and support for the full journey—from day one through long-term change. Tracks mood, withdrawal symptoms, and progress; surfaces evidence-based educational content and coping tools; keeps data private on-device.",
      href: "https://apps.apple.com/us/app/leafit-quit-weed-now/id6757109700",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bc/c9/51/bcc9514c-a393-03b0-afe8-11a7661d1426/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    },
  ];

  return (
    <>
      <SiteNav />
      <main>
        <div className="fade-up max-w-3xl">
          <p className="text-sm tracking-wide text-subtle">Apps</p>
          <p className="mt-4 text-lg leading-8 text-[hsl(var(--fg))] sm:text-xl">
            I build mobile apps that provide mental health support and make technology a resource for improved mental health outcomes.
          </p>
        </div>

        <div className="mt-10 border-t border-subtle" />

        <section className="pt-12" id="projects">
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((p) => (
              <AppTile key={p.name} {...p} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
