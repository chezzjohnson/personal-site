import Image from "next/image";

type ExperienceTileProps = {
  src?: string;
  alt?: string;
  bg?: "white" | "black" | (string & {});
  children?: React.ReactNode;
};

const TILE_SIZE = 140;

const bgClasses: Record<string, string> = {
  white: "bg-white",
  black: "bg-black",
};

export function ExperienceTile({ src, alt = "", bg, children }: ExperienceTileProps) {
  const isSvg = src?.toLowerCase().endsWith(".svg");
  const bgStyle = bg && !bgClasses[bg] ? { backgroundColor: bg } : undefined;
  const bgClass = bg && bgClasses[bg] ? bgClasses[bg] : !bgStyle ? "bg-white/[0.02]" : "";
  const hoverClass = bg ? "" : "hover:bg-white/[0.04]";

  return (
    <div
      className={[
        "flex shrink-0 items-center justify-center rounded-2xl border border-subtle p-4",
        bgClass,
        "h-[140px] w-[140px]",
        "transition-all duration-200",
        "hover:border-[hsl(var(--accent)/0.35)]",
        hoverClass,
      ].join(" ")}
      style={bgStyle}
    >
      {src ? (
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ minHeight: 0, minWidth: 0 }}
        >
          {isSvg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="max-h-full max-w-full object-contain object-center"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={TILE_SIZE - 32}
              height={TILE_SIZE - 32}
              className="object-contain object-center"
              sizes={`${TILE_SIZE - 32}px`}
              unoptimized
            />
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
