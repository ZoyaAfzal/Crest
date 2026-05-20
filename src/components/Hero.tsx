import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-construction.jpg";
import { siteConfig } from "@/lib/siteConfig";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden grain"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <motion.img
          src={heroImg}
          alt="Crestforge construction site at dusk"
          className="h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-[var(--background)]/55 to-[var(--background)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-40 pt-32 md:px-10 md:pb-48"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 inline-flex w-fit items-center gap-3 border border-[var(--accent-gold)]/40 bg-[var(--background)]/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--accent-gold)] backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-gold)]" />
          {siteConfig.hero.badge}
        </motion.div>

        <h1 className="font-display text-balance text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.98] tracking-tight">
          {siteConfig.hero.title.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {i === 1 ? (
                  <>
                    We build <em className="italic text-[var(--accent-gold)]">legacies.</em>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-8 max-w-xl text-base text-foreground/75 md:text-lg"
        >
          {siteConfig.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg">
            <a href="#work">
              Explore Our Work
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-current">
                  <svg className="h-3 w-3 translate-x-px" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Reel
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-none bg-black/90 p-0 overflow-hidden">
              <DialogHeader className="sr-only">
                <DialogTitle>Crestforge Legacy Reel</DialogTitle>
              </DialogHeader>
              <div className="flex aspect-video w-full items-center justify-center bg-black/90 text-foreground">
                <div className="text-center">
                  <div className="font-display text-4xl text-[var(--accent-gold)]">Coming Soon</div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] opacity-60">
                    Architectural Cinematic Reel
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-[var(--background)]/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1400px] grid-cols-3 divide-x divide-border px-2 md:px-6">
          {siteConfig.hero.stats.map((s) => (
            <div key={s.label} className="px-4 py-6 md:py-7">
              <div className="font-display text-3xl md:text-5xl">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 font-condensed text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-[11px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
