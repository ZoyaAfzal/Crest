import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading, SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--secondary)] to-[var(--background)]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-36">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <div className="mt-5">
            <SectionHeading>
              Let's build something <em className="italic text-[var(--accent-gold)]">great.</em>
            </SectionHeading>
          </div>
          <p className="mt-6 max-w-md text-foreground/70 md:text-lg">
            Tell us about your site, your timeline and your ambition. A partner replies within 48
            hours.
          </p>

          <dl className="mt-12 space-y-6">
            <div className="flex gap-4 border-l border-[var(--accent-gold)] pl-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Studio
              </dt>
              <dd className="font-display text-lg">{siteConfig.contact.address}</dd>
            </div>
            <div className="flex gap-4 border-l border-[var(--accent-gold)] pl-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Phone
              </dt>
              <dd className="font-display text-lg">{siteConfig.contact.phone}</dd>
            </div>
            <div className="flex gap-4 border-l border-[var(--accent-gold)] pl-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Email
              </dt>
              <dd className="font-display text-lg">{siteConfig.contact.email}</dd>
            </div>
          </dl>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5 border border-border bg-[var(--surface)]/60 p-8 backdrop-blur md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" placeholder="Adelaide Moreau" />
            <Field label="Email" placeholder="you@studio.com" type="email" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Phone" placeholder="+1 212 555 0184" />
            <Field label="Project Type" placeholder="Commercial tower" />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Project Brief
            </label>
            <textarea
              rows={5}
              placeholder="Tell us about the site, scope and timeline…"
              className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground placeholder:text-foreground/35 focus:border-[var(--accent-gold)] focus:outline-none"
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Send Project Brief
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-foreground/35 focus:border-[var(--accent-gold)] focus:outline-none"
      />
    </div>
  );
}
