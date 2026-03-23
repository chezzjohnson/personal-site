import Image from "next/image";
import Link from "next/link";

export type ContentCardProps = {
  title: string;
  excerpt: string;
  publication?: string;
  publicationLogo?: string;
  date?: string;
  href: string;
  tags?: string[];
};

export function ContentCard({
  title,
  excerpt,
  publication,
  publicationLogo,
  date,
  href,
  tags,
}: ContentCardProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={[
        "group block rounded-2xl border border-subtle p-5 sm:p-6",
        "transition-colors duration-200",
        "hover:border-[hsl(var(--accent)/0.55)] hover:bg-white/[0.02]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="font-[var(--font-serif)] text-lg tracking-tight text-[hsl(var(--fg))] sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted sm:text-[15px]">
            {excerpt}
          </p>
        </div>
        <div className="hidden shrink-0 text-subtle transition-transform duration-200 group-hover:translate-x-0.5 sm:block">
          →
        </div>
      </div>

      {(publication || date || (tags && tags.length > 0)) && (
        <div className="mt-4 flex flex-col gap-2 border-t border-subtle pt-4 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 truncate">
            {publicationLogo && (
              <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                <Image
                  src={publicationLogo}
                  alt=""
                  width={24}
                  height={24}
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
            )}
            <span className="truncate">
              {[publication, date].filter(Boolean).join(" · ")}
            </span>
          </div>
          {tags && tags.length > 0 ? (
            <div className="truncate">{tags.join(" · ")}</div>
          ) : null}
        </div>
      )}
    </Link>
  );
}



