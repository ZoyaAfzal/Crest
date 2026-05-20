import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading, SectionLabel } from "@/components/SectionLabel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Northwind Tower",
    category: "Commercial",
    year: "2024",
    img: p1,
    desc: "A 60-storey mixed-use skyscraper featuring a unique glass-and-steel facade.",
    details:
      "The Northwind Tower stands as a beacon of modern engineering. Our team self-performed the structural steel and facade installation, ensuring the complex geometry was executed with millimeter precision. The building features an innovative double-skin facade that significantly reduces energy consumption while providing panoramic views of the city.",
    stats: ["60 Storeys", "1.2M sq ft", "LEED Platinum"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Cliffside Residence",
    category: "Residential",
    year: "2023",
    img: p2,
    desc: "Luxury private estate cantilevered over the Pacific.",
    details:
      "Perched on a sheer cliff, this residence required advanced post-tensioned concrete techniques to achieve its dramatic 25-foot cantilever. We integrated local stone and timber to ground the structure in its environment, creating a seamless transition between the high-tech interior and the wild coastal landscape.",
    stats: ["12,000 sq ft", "Off-grid capable", "Smart Home OS"],
    span: "",
  },
  {
    title: "Meridian Bridge",
    category: "Infrastructure",
    year: "2024",
    img: p3,
    desc: "Award-winning suspension bridge connecting the industrial district.",
    details:
      "The Meridian Bridge was a critical civil infrastructure project delivered three months ahead of schedule. Using proprietary pre-casting methods, we minimized site disruption and environmental impact on the riverbed. The bridge now serves as a primary artery for the city's growing commercial transport needs.",
    stats: ["1.2km Span", "Carbon-neutral build", "200yr Life Cycle"],
    span: "",
  },
  {
    title: "The Foundry Loft",
    category: "Renovation",
    year: "2023",
    img: p4,
    desc: "Adaptive reuse project transforming a 19th-century plant.",
    details:
      "Restoring a heritage foundry into modern creative lofts required delicate structural reinforcement. We preserved the original exposed brickwork and steel trusses while inserting a new core of high-performance glass and timber. The result is a vibrant workspace that honors its industrial past through a contemporary lens.",
    stats: ["Heritage Grade II", "45 Creative Units", "Rooftop Park"],
    span: "md:col-span-2",
  },
];

const tabs = ["All", "Commercial", "Residential", "Infrastructure", "Renovation"];

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <section id="work" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="space-y-5">
            <SectionLabel>Our Work</SectionLabel>
            <SectionHeading>
              A portfolio of <em className="italic text-[var(--accent-gold)]">excellence.</em>
            </SectionHeading>
          </div>

          <div className="flex flex-wrap items-center gap-1 border border-border p-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`relative px-4 py-2 font-condensed text-[12px] uppercase tracking-[0.18em] transition-colors cursor-pointer ${
                  active === t
                    ? "text-[var(--background)]"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {active === t && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-[var(--accent-gold)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[280px]">
          {filtered.map((p, i) => (
            <Dialog key={p.title}>
              <DialogTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`group relative block overflow-hidden bg-[var(--surface)] text-left cursor-pointer ${p.span}`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.08] group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/30 to-transparent" />

                  {/* gold corner */}
                  <span className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-[var(--accent-gold)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-[var(--accent-gold)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                      <span>{p.category}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
                    <p className="mt-3 max-w-sm text-sm text-foreground/0 transition-colors duration-500 group-hover:text-foreground/70 line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl overflow-hidden border-border bg-[var(--background)] p-0 shadow-2xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-square md:aspect-auto">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                  </div>
                  <div className="flex flex-col p-8 md:p-12">
                    <DialogHeader>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                        {p.category} · {p.year}
                      </div>
                      <DialogTitle className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight">
                        {p.title}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="mt-8 space-y-6">
                      <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                        {p.details}
                      </p>

                      <div className="grid grid-cols-3 gap-4 border-y border-border py-10">
                        {p.stats.map((s) => (
                          <div key={s} className="text-center">
                            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                              Specification
                            </div>
                            <div className="mt-3 font-display text-base md:text-xl text-[var(--accent-gold)]">
                              {s}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* horizontal parallax strip */}
        <div ref={ref} className="mt-20 overflow-hidden border-y border-border py-10">
          <motion.div style={{ x }} className="flex gap-6 whitespace-nowrap">
            {["Home", "About", "Services", "Projects", "Careers", "Blog", "Contact", "Studio"].map(
              (label, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span className="font-display text-5xl md:text-7xl text-foreground/80">
                    {label}
                  </span>
                  <span className="font-mono text-xs text-[var(--accent-gold)]">
                    {i % 2 === 0 ? "POPULAR" : "NEW"}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-gold)]" />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
