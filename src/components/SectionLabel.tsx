import { motion } from "framer-motion";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--accent-gold)]"
    >
      <span className="h-px w-8 bg-[var(--accent-gold)]" />
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`font-display text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}
