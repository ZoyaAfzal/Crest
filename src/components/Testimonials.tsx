import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading, SectionLabel } from "@/components/SectionLabel";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = siteConfig.testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % total), 5500);
    return () => clearInterval(t);
  }, [total]);

  const t = siteConfig.testimonials[i];

  return (
    <section className="relative bg-[var(--secondary)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1100px] text-center">
        <SectionLabel>Voices</SectionLabel>
        <div className="mt-5">
          <SectionHeading className="mx-auto max-w-3xl">
            Trusted by the people who{" "}
            <em className="italic text-[var(--accent-gold)]">demand permanence.</em>
          </SectionHeading>
        </div>

        <div className="relative mt-16 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mx-auto max-w-3xl font-display text-2xl italic leading-snug md:text-3xl">
                “{t.quote}”
              </p>
              <div className="mt-8 font-condensed text-[13px] uppercase tracking-[0.22em]">
                <span className="text-[var(--accent-gold)]">{t.name}</span>
                <span className="text-muted-foreground"> — {t.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {siteConfig.testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 transition-all ${idx === i ? "w-10 bg-[var(--accent-gold)]" : "w-4 bg-border"}`}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
