import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE, telLink, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/Navbar";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Dreams Family Salon & Tattoo Studio ECIL Hyderabad" },
      { name: "description", content: `Call ${SITE.phone} or visit Dreams Family Salon & Tattoo Studio at ECIL, Hyderabad. Open ${SITE.hours} all days.` },
      { property: "og:title", content: "Contact Dreams Salon" },
      { property: "og:description", content: "Phone, WhatsApp, directions and hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const cards = [
    { icon: Phone, title: "Call Us", value: SITE.phone, href: telLink, cta: "Tap to call" },
    { icon: MapPin, title: "Visit Us", value: SITE.address, href: SITE.mapsUrl, cta: "View on Maps" },
    { icon: Clock, title: "Open Hours", value: SITE.hours, sub: "All days · Mon – Sun" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="We'd Love to See You" subtitle="Reach out on WhatsApp, call us, or simply walk in — we're right in ECIL, Hyderabad." />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const Inner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7 h-full hover:border-primary/50 transition"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-foreground/85">{c.value}</p>
                {c.sub && <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>}
                {c.cta && <p className="mt-3 text-sm text-primary">{c.cta} →</p>}
              </motion.div>
            );
            return c.href ? (
              <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{Inner}</a>
            ) : <div key={c.title}>{Inner}</div>;
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-gold btn-gold-hover text-sm">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
          <a href={telLink} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-outline-gold text-sm">
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
          <a href={SITE.directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm border border-border hover:border-primary/40 text-foreground/80 hover:text-primary transition">
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-primary/20">
          <iframe
            src={SITE.mapsEmbed}
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dreams Family Salon & Tattoo Studio location"
            className="w-full block"
          />
        </div>
      </div>
    </section>
  );
}
