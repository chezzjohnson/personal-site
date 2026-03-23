import Link from "next/link";

const navItems = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/writings", label: "Writings" },
  { href: "/apps", label: "Apps" },
] as const;

export function SiteNav() {
  return (
    <header className="fade-in mb-12 border-b border-subtle pb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <div className="text-sm tracking-wide text-subtle">Zach Johnson</div>
          <h1 className="font-[var(--font-serif)] text-2xl leading-tight tracking-tight sm:text-3xl">
          </h1>
        </div>

        <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link text-sm text-muted hover:text-[hsl(var(--fg))] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


