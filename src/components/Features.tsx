import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading, SectionLabel } from "@/components/SectionLabel";

export function Features() {
  return (
    <section className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div className="space-y-5">
            <SectionLabel>Core Features</SectionLabel>
            <SectionHeading>
              What sets <em className="italic text-[var(--accent-gold)]">us</em> apart.
            </SectionHeading>
          </div>
          <p className="text-foreground/70 md:text-lg">
            Three decades of refusing shortcuts. Every Crestforge project is the product of in-house
            designers, engineers and trades — accountable from breaking ground to ribbon cutting.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {siteConfig.features.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[var(--background)] p-10 transition-colors hover:bg-[var(--surface)]"
            >
              <div className="font-mono text-xs text-[var(--accent-gold)]">{f.n} / 03</div>
              <h3 className="mt-6 font-display text-3xl">{f.title}</h3>
              <p className="mt-4 text-foreground/65">{f.desc}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent-gold)] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
