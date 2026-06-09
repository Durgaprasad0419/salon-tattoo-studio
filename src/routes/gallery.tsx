import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

import interior2 from "@/assets/gallery-interior2.jpg";
import hair from "@/assets/service-hair.jpg";
import color from "@/assets/service-color.jpg";
import beard from "@/assets/service-beard.jpg";
import spa from "@/assets/service-spa.jpg";
import facial from "@/assets/service-facial.jpg";
import makeup from "@/assets/service-makeup.jpg";
import tattoo from "@/assets/service-tattoo.jpg";
import piercing from "@/assets/service-piercing.jpg";
import nails from "@/assets/service-nails.jpg";
import hero from "@/assets/hero-salon.jpg";
import real1 from "@/assets/real-salon1.jpg";
import real2 from "@/assets/real-salon2.jpg";
import real3 from "@/assets/real-salon3.jpg";
import real4 from "@/assets/real-salon4.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Dreams Family Salon & Tattoo Studio ECIL Hyderabad" },
      { name: "description", content: "Step inside Dreams Salon — view our luxurious interiors, hair transformations, tattoo art and beauty services." },
      { property: "og:title", content: "Gallery — Dreams Family Salon & Tattoo Studio" },
      { property: "og:description", content: "Luxury salon interiors, hair, tattoo and beauty work." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

type Cat = "All" | "Salon Interior" | "Hair Styling" | "Tattoo Studio" | "Grooming" | "Beauty Services";

const items: { src: string; cat: Exclude<Cat, "All">; alt: string }[] = [
  { src: real1, cat: "Salon Interior", alt: "Dreams Salon styling chairs and floor" },
  { src: real4, cat: "Salon Interior", alt: "Beauty salon mural and interior" },
  { src: real2, cat: "Salon Interior", alt: "Hair wash and styling station" },
  { src: real3, cat: "Grooming", alt: "Men's barber section with style chart" },
  { src: hero, cat: "Salon Interior", alt: "Salon styling stations" },
  { src: interior2, cat: "Salon Interior", alt: "Reception lounge" },
  { src: hair, cat: "Hair Styling", alt: "Hair styling service" },
  { src: color, cat: "Hair Styling", alt: "Hair coloring service" },
  { src: spa, cat: "Hair Styling", alt: "Hair spa treatment" },
  { src: tattoo, cat: "Tattoo Studio", alt: "Tattoo artist at work" },
  { src: piercing, cat: "Grooming", alt: "Ear piercing service" },
  { src: beard, cat: "Grooming", alt: "Beard grooming and shave" },
  { src: facial, cat: "Beauty Services", alt: "Facial treatment" },
  { src: makeup, cat: "Beauty Services", alt: "Bridal makeup" },
  { src: nails, cat: "Beauty Services", alt: "Manicure and nail art" },
];

const cats: Cat[] = ["All", "Salon Interior", "Hair Styling", "Tattoo Studio", "Grooming", "Beauty Services"];

function Gallery() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Gallery" title="Inside Our Studio" subtitle="A premium space, talented hands, and beautiful transformations." />

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm transition border ${
                active === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/70 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <motion.button
              key={it.src + i}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              onClick={() => setLightbox(it.src)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-primary/20 group relative"
            >
              <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-xs text-primary uppercase tracking-[0.2em]">{it.cat}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute top-5 right-5 text-foreground/80 hover:text-primary">
              <X className="h-7 w-7" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={lightbox} alt="Enlarged view"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl border border-primary/30"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
