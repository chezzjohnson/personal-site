import Link from "next/link";
import { ExperienceTile } from "@/components/ExperienceTile";
import { SiteNav } from "@/components/SiteNav";

const orgLogos: { src: string; alt: string; bg?: "white" | "black" | string }[] = [
  { src: "/experience/logo-white.png", alt: "Logo" },
  { src: "/experience/mass-healing-white.png", alt: "Mass Healing" },
  { src: "/experience/NYS_Assembly_Official_Seal.png", alt: "NYS Assembly" },
  { src: "/experience/PROP_Logo.jpeg", alt: "PROP", bg: "white" },
  { src: "/experience/ssdp-logo.png", alt: "SSDP", bg: "#146f8e" },
  { src: "/experience/TAG_logo_white.jpeg", alt: "TAG", bg: "black" },
];

export default function ExperiencePage() {
  return (
    <>
      <SiteNav />
      <main>
        <div className="fade-up max-w-3xl">
          <p className="text-sm tracking-wide text-subtle">Experience</p>
          <p className="mt-4 text-lg leading-8 text-[hsl(var(--fg))] sm:text-xl">
            Experience in government, political consulting, and nonprofits, driven by a commitment to public health reform to improve mental health outcomes.

          </p>
          <p className="mt-3 text-sm text-subtle">
            <Link className="link" href="/">
              Back to About
            </Link>
          </p>
        </div>

        <div className="mt-10 border-t border-subtle" />

        <section className="pt-12" id="overview">
          <h2 className="mb-4 text-sm font-medium tracking-wide text-subtle">
            Worked at…
          </h2>
          <div className="grid grid-cols-3 justify-items-center gap-5">
            {orgLogos.map(({ src, alt, bg }) => (
              <ExperienceTile key={src} src={src} alt={alt} bg={bg} />
            ))}
          </div>

          <div className="mt-16 border-t border-subtle pt-10">
            <h2 className="mb-4 text-sm font-medium tracking-wide text-subtle">
              Leadership and Representation
            </h2>
            <ul className="space-y-4 text-[15px] leading-7 text-muted sm:text-base">
              <li>
                President &amp; Founder, Fordham University &amp; NYC Community
                Chapters | Students for Sensible Drug Policy (SSDP)
              </li>
              <li>NGO Representative to the United Nations (2025)</li>
              <li>
                Invited Speaker | 12th International Youth Conference (IYC12)
                (2025)
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap justify-center gap-5">
              <ExperienceTile src="/experience/un-logo-official.svg" alt="United Nations" bg="white" />
              <ExperienceTile src="/experience/iyc-logo.png" alt="International Youth Conference" bg="white" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
