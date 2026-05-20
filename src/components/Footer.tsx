import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[var(--background)] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center border border-[var(--accent-gold)] text-[var(--accent-gold)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 21 L12 3 L21 21 Z" />
                  <path d="M8 17 H16" />
                </svg>
              </span>
              <span className="font-display text-xl">{siteConfig.brand}</span>
            </div>
            <p className="max-w-sm text-sm text-foreground/65">
              {siteConfig.tagline}. Building structures the world remembers.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-sm items-center border-b border-border"
            >
              <input
                placeholder="Your email"
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-foreground/40 focus:outline-none"
              />
              <button className="font-condensed text-[11px] uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                Subscribe →
              </button>
            </form>
          </div>

          <FooterCol title="Pages" links={["Work", "Services", "About", "Careers", "Contact"]} />
          <FooterCol
            title="Services"
            links={["Commercial", "Residential", "Infrastructure", "Renovation", "Interiors"]}
          />
          <FooterCol
            title="Company"
            links={["Studio", "Press", "Style Guide", "Licenses", "Changelog"]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <div />
          <a
            href="https://axistechgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-[var(--accent-gold)]"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-gold)]">
        {title}
      </div>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
