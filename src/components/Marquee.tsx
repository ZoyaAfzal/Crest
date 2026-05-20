import { siteConfig } from "@/lib/siteConfig";

export function Marquee() {
  const items = [...siteConfig.marquee, ...siteConfig.marquee, ...siteConfig.marquee];
  return (
    <div className="pause-on-hover relative overflow-hidden border-y border-border bg-[var(--secondary)] py-6">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {items.map((word, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-3xl md:text-4xl text-foreground/85">{word}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
