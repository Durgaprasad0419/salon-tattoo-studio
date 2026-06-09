import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Hair, Beauty, Tattoo & More — Dreams Salon ECIL" },
      { name: "description", content: "Explore premium services at Dreams Family Salon & Tattoo Studio: hair styling, coloring, beard grooming, facials, bridal makeup, tattoos, piercing, manicure & more in ECIL, Hyderabad." },
      { property: "og:title", content: "Services — Dreams Family Salon & Tattoo Studio" },
      { property: "og:description", content: "Hair, skin, makeup, tattoo and grooming services in ECIL, Hyderabad." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Premium Care for Every Style"
          subtitle="A complete menu of hair, beauty, grooming and tattoo services — crafted by experienced artists in a luxurious environment."
        />

        {SERVICE_CATEGORIES.map((cat) => {
          const items = SERVICES.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <div key={cat} className="mt-16">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-display text-3xl gold-text">{cat}</h3>
                <span className="h-px flex-1 bg-primary/20" />
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{items.length} services</span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
