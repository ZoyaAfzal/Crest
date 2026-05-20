import { motion } from "framer-motion";
import { SectionHeading, SectionLabel } from "@/components/SectionLabel";
import heroImg from "@/assets/hero-construction.jpg";

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img src={heroImg} alt="About Crestforge" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <SectionLabel>Our Story</SectionLabel>
          <SectionHeading>
            Crafting the foundations of{" "}
            <em className="italic text-[var(--accent-gold)]">tomorrow.</em>
          </SectionHeading>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Founded in 1998, Crestforge was built on a simple premise: construction is not just
              about moving earth, but about masterfully assembling the spaces where human potential
              thrives.
            </p>
            <p>
              For over two decades, we have evolved into a vertically integrated studio. By keeping
              architecture, engineering, and craftsmanship under one roof, we eliminate the friction
              that plagues traditional projects. Every weld, pour, and finish is a statement of our
              commitment to permanence and precision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
