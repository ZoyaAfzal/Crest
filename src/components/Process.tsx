import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading, SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/button";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom hook for smooth auto-scrolling
  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += delta * 0.05;
      if (
        containerRef.current.scrollLeft >=
        (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 2
      ) {
        containerRef.current.scrollLeft = 0;
      }
    }
  });

  return (
    <section id="process" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div className="space-y-5">
            <SectionLabel>Our Process</SectionLabel>
            <SectionHeading>
              Five disciplined steps,{" "}
              <em className="italic text-[var(--accent-gold)]">zero surprises.</em>
            </SectionHeading>
          </div>
          <p className="text-foreground/70 md:text-lg">
            Each step is owned by a senior partner. Weekly visibility into budget, schedule and
            quality, built into our proprietary client portal.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="mt-20 flex gap-6 overflow-x-hidden px-6 md:px-10 cursor-grab active:cursor-grabbing"
      >
        {[...siteConfig.process, ...siteConfig.process].map((p, i) => (
          <div
            key={i}
            className="relative w-[85vw] shrink-0 border border-border bg-[var(--surface)] p-8 md:w-[480px] md:p-10"
          >
            <div className="font-mono text-xs text-[var(--accent-gold)]">{p.n} / 05</div>
            <h3 className="mt-6 font-display text-4xl">{p.title}</h3>
            <p className="mt-4 text-foreground/70 text-lg">{p.desc}</p>
            <p className="mt-6 text-foreground/50 text-sm leading-relaxed border-t border-border pt-6">
              {p.details}
            </p>
            <div className="mt-10 h-px w-full bg-border">
              <div className="h-px w-1/3 bg-[var(--accent-gold)]" />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-[1400px] px-6 md:px-10">
        <Button asChild size="lg">
          <a href="#contact">
            Start Your Project
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </Button>
      </div>
    </section>
  );
}
