import { motion } from "framer-motion";
import statsBg from "@/assets/stats-bg.jpg";
import { siteConfig } from "@/lib/siteConfig";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function Stats() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={statsBg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/85 to-[var(--background)]" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-y-12 md:grid-cols-4">
          {siteConfig.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l border-border pl-6"
            >
              <div className="font-display text-5xl md:text-6xl">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-condensed text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <p className="font-display text-balance text-3xl italic leading-tight md:text-4xl">
            “We measure success in decades, not deadlines.
            <span className="text-[var(--accent-gold)]"> The structure outlives us all.”</span>
          </p>
          <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            — Eleanor Crest, Founder
          </footer>
        </motion.blockquote>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {["ISO 9001 Certified", "AGC Member", "LEED Platinum", "Best Builder 2024"].map((b) => (
            <span
              key={b}
              className="border border-border bg-[var(--surface)]/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70 backdrop-blur"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
