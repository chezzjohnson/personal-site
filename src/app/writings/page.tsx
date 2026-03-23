import Link from "next/link";
import { ArticlesSection } from "@/components/ArticlesSection";
import type { ContentCardProps } from "@/components/ContentCard";
import { PublicationTile } from "@/components/PublicationTile";
import { Section } from "@/components/Section";
import { SiteNav } from "@/components/SiteNav";

const publications = [
  {
    name: "The Fordham Ram",
    description:
      "Fordham University's journal of record since 1918. Student newspaper covering news, opinion, culture, and sports across the Fordham community.",
    href: "https://thefordhamram.com",
    logo: "/writings/fordham-ram-r.png",
  },
  {
    name: "Psychedelic State(s) of America",
    description:
      "Independent media and advocacy platform for psychedelic policy reform, journalism, and culture. Covers regulatory developments, science, and community perspectives.",
    href: "https://www.psychedelicamericas.org",
    logo: "/writings/psychedelic-states-of-america.png",
  },
];

const articles: ContentCardProps[] = [
  {
    title: "Trump's Attempt to End Birthright Citizenship Is a Dangerous Power Grab",
    excerpt:
      "The executive order defies over a century of legal precedent and judicial authority. A fight to preserve the separation of powers.",
    publication: "The Fordham Ram",
    publicationLogo: "/writings/fordham-ram-r.png",
    date: "Feb 2025",
    href: "https://thefordhamram.com/opinion/trumps-attempt-to-end-birthright-citizenship-is-a-dangerous-power-grab/",
    tags: ["Opinion", "Law", "Constitutional Law"],
  },
  {
    title: "The Consequences of Trump's Student Visa Vendetta",
    excerpt:
      "How visa revocations became a direct assault on free speech and academic freedom—and why universities had to fight back.",
    publication: "The Fordham Ram",
    publicationLogo: "/writings/fordham-ram-r.png",
    date: "Apr 2025",
    href: "https://thefordhamram.com/opinion/the-consequences-of-trumps-student-visa-vendetta/",
    tags: ["Opinion", "Law", "Immigration Law"],
  },
  {
    title: "Journalism Will Shape America's Psychedelic Future",
    excerpt:
      "Guest column on the need for accessible psychedelic journalism to empower the public and hold the political class accountable as policy frameworks take shape.",
    publication: "Psychedelic State(s) of America",
    publicationLogo: "/writings/psychedelic-states-of-america.png",
    date: "Jan 2026",
    href: "https://www.psychedelicamericas.org/p/psa-s-psychedelic-state-s-of-the-union-january-27th-2026",
    tags: ["Commentary", "Policy", "Psychedelic Policy"],
  },
];

export default function WritingsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <div className="fade-up max-w-3xl">
          <p className="text-sm tracking-wide text-subtle">Writings</p>
          <p className="mt-4 text-lg leading-8 text-[hsl(var(--fg))] sm:text-xl">
          Writing supports my mission by informing people about the public health issues that our society faces and providing possible solutions to those problems.
          </p>
          
        </div>

        <div className="mt-10 border-t border-subtle" />

        <ArticlesSection articles={articles} />

        <div className="border-t border-subtle" />

        <section className="pb-16 pt-10" id="publications">
          <h2 className="mb-4 text-sm font-medium tracking-wide text-subtle">
            Published in…
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            {publications.map((pub) => (
              <PublicationTile key={pub.name} {...pub} />
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
