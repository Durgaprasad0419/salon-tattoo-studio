import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import interior1 from "@/assets/gallery-interior1.jpg";
import interior2 from "@/assets/gallery-interior2.jpg";
import { Heart, Sparkles, Target, Users } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Dreams Family Salon & Tattoo Studio, ECIL Hyderabad" },
      { name: "description", content: "Discover the story, vision and values behind Dreams Family Salon & Tattoo Studio — a premium beauty destination in ECIL, Hyderabad." },
      { property: "og:title", content: "About Dreams Family Salon & Tattoo Studio" },
      { property: "og:description", content: "Our story, mission and the artists behind Hyderabad's loved family salon." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Story</p>
            <h1 className="font-display text-5xl sm:text-6xl leading-tight">
              Where Beauty Meets <span className="gold-text italic">Artistry</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Dreams Family Salon & Tattoo Studio was born from a simple belief — every guest deserves a premium experience without leaving their neighborhood. Tucked in the heart of ECIL, Hyderabad, our studio is a sanctuary where hair, skin and ink come together under one luxurious roof.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From precision haircuts and bridal glow-ups to bold custom tattoos, every service is delivered by experienced professionals using premium products and the strictest hygiene standards. We're proud to be a family-friendly destination loved by Hyderabad.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <img src={interior1} alt="Dreams Salon interior" width={1280} height={896} loading="lazy" className="rounded-2xl border border-primary/20 shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-primary/20 blur-3xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background via-black to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Stand For" title="Mission & Vision" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { icon: Target, title: "Our Mission", desc: "To deliver world-class hair, beauty and tattoo experiences with premium care, hygiene and personalised service for every guest who walks in." },
              { icon: Sparkles, title: "Our Vision", desc: "To be Hyderabad's most loved family salon and tattoo studio — a place where confidence is crafted and stories are inked." },
              { icon: Users, title: "Family First", desc: "Services for men, women and kids — designed for every age, mood and occasion in a welcoming environment." },
              { icon: Heart, title: "Customer Approach", desc: "We listen first, recommend honestly, and never compromise on quality, hygiene or your comfort." },
            ].map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-8">
                  <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{it.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Journey" title="A Timeline of Craft" />
          <div className="mt-14 relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            {[
              { year: "Day One", title: "A vision is born", desc: "Founded in ECIL with a dream — bring premium salon experiences to every family in Hyderabad." },
              { year: "Growth", title: "Hair, skin & beauty", desc: "Expanded with senior stylists, international products and a luxurious interior loved by regulars." },
              { year: "Today", title: "Tattoo Studio added", desc: "Our certified tattoo artists bring custom designs, fine line and bold black & grey to life — hygienically and artfully." },
              { year: "Tomorrow", title: "Always evolving", desc: "New treatments, fresh trends and the same warm welcome — we're always growing for you." },
            ].map((step, i) => (
              <motion.div key={step.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-10 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                <div className={`${i % 2 ? "sm:text-left sm:pl-10" : "sm:text-right sm:pr-10"}`}>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{step.year}</p>
                  <h3 className="font-display text-2xl mt-1">{step.title}</h3>
                  <p className="text-muted-foreground mt-2">{step.desc}</p>
                </div>
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(212,175,55,0.2)]" />
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img src={interior2} alt="Salon lounge" loading="lazy" width={1024} height={1280} className="w-full max-h-[480px] object-cover rounded-2xl border border-primary/20" />
          <p className="mt-6 text-center text-muted-foreground text-sm">
            Visit us at <span className="text-primary">{SITE.address}</span> · Open {SITE.hours}
          </p>
        </div>
      </section>
    </>
  );
}
