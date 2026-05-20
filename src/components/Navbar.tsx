import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--background)]/70 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="flex items-center gap-2.5">
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
            <span className="font-display text-xl tracking-tight">{siteConfig.brand}</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {siteConfig.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative font-condensed text-[13px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent-gold)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">Start a Project</a>
          </Button>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden">
            <div className="space-y-1.5">
              <span className="block h-px w-7 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-7 bg-foreground" />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[var(--background)]"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-display text-xl">{siteConfig.brand}</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-3xl">
                ×
              </button>
            </div>
            <nav className="mt-12 flex flex-col items-center gap-6">
              {siteConfig.nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-display text-4xl"
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
