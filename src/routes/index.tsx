import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Features } from "@/components/Features";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crestforge — Premium Construction Since 1998" },
      {
        name: "description",
        content:
          "Crestforge is a vertically integrated construction studio crafting commercial, residential and civil landmarks. 1,600+ projects delivered on time.",
      },
      { property: "og:title", content: "Crestforge — We build legacies" },
      {
        property: "og:description",
        content: "Premium construction studio. 28 years, 1,600+ projects, zero excuses.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Projects />
      <Stats />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
