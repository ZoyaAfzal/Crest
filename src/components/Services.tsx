import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading, SectionLabel } from "@/components/SectionLabel";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const previews = [p1, p2, p3, p4, p1, p2];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative bg-[var(--secondary)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div className="space-y-5">
            <SectionLabel>Services</SectionLabel>
            <SectionHeading>
              Everything you need,{" "}
              <em className="italic text-[var(--accent-gold)]">built to last.</em>
            </SectionHeading>
          </div>
          <p className="text-foreground/70 md:text-lg">
            From a single villa to a 60-storey tower, we self-perform the work that defines the
            brand structural steel, concrete, façade, mechanical and millwork.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-start">
          <ul className="divide-y divide-border border-y border-border">
            {siteConfig.services.map((s, i) => (
              <li key={s.title}>
                <button
                  onClick={() => setActive(i)}
                  className="group flex w-full items-center justify-between py-8 text-left transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-[var(--accent-gold)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-3xl transition-colors md:text-4xl ${
                        active === i ? "text-[var(--accent-gold)]" : "text-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  <svg
                    className={`h-5 w-5 transition-transform ${active === i ? "rotate-90 text-[var(--accent-gold)]" : "text-foreground/40"}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pb-6"
                    >
                      <p className="pl-14 text-foreground/70 leading-relaxed">{s.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface)] md:sticky md:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={previews[active]}
                  alt={siteConfig.services[active].title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                    Service · {String(active + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-3xl">
                    {siteConfig.services[active].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
