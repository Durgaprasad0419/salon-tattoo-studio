import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, MapPin, Star, ShieldCheck, Users, Sparkles, Award, HeartHandshake, Clock, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-salon.jpg";
import interior1 from "@/assets/gallery-interior1.jpg";
import interior2 from "@/assets/gallery-interior2.jpg";
import tattoo from "@/assets/service-tattoo.jpg";
import makeup from "@/assets/service-makeup.jpg";
import hair from "@/assets/service-hair.jpg";
import facial from "@/assets/service-facial.jpg";
import real1 from "@/assets/real-salon1.jpg";
import real2 from "@/assets/real-salon2.jpg";
import real3 from "@/assets/real-salon3.jpg";
import real4 from "@/assets/real-salon4.jpg";
import { SITE, telLink, waLink } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { WhatsAppIcon } from "@/components/site/Navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dreams Family Salon & Tattoo Studio | Best Salon in ECIL Hyderabad" },
      { name: "description", content: SITE.description },
      { property: "og:title", content: "Dreams Family Salon & Tattoo Studio | Best Salon in ECIL Hyderabad" },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <GalleryPreview />
      <ReviewsPreview />
      <CTABand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-20 pt-20">
      <img
        src={hero}
        alt="Dreams Family Salon luxury interior"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary mb-6">
            <span className="h-px w-10 bg-primary" /> ECIL · Hyderabad
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Dreams Family Salon <br /> & <span className="gold-text italic">Tattoo Studio</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-xl">
            {SITE.tagline}. A premium destination for hair, skin, makeup and bold body art — crafted with care, finished with finesse.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-gold btn-gold-hover text-sm">
              <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
            </a>
            <a href={telLink}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-outline-gold text-sm">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={SITE.directions} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm text-foreground/80 hover:text-primary border border-border hover:border-primary/40 transition">
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
              </div>
              <span>Trusted by 1000+ families</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Open today · {SITE.hours}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary/70 text-xs uppercase tracking-[0.3em]"
      >
        Scroll
      </motion.div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Signature Crafted Experiences"
          subtitle="From precision cuts to ink that tells your story — every service is delivered by skilled artists using premium products."
        />
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition shadow-lg">
            <Sparkles className="h-4 w-4" /> Explore All Services <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={telLink} className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-outline-gold text-sm">
            <Phone className="h-4 w-4" /> Book via Phone Call
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm text-foreground/80 hover:text-primary border border-border hover:border-primary/40 transition">
            <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.slice(0, 8).map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}


function WhyChooseUs() {
  const items = [
    { icon: Award, title: "Experienced Professionals", desc: "A team of certified senior stylists, beauty experts and tattoo artists." },
    { icon: Sparkles, title: "Premium Equipment", desc: "International brands and modern tools for safe, salon-grade results." },
    { icon: ShieldCheck, title: "Hygienic Environment", desc: "Sterilised tools, single-use needles and clinical-grade cleanliness." },
    { icon: Users, title: "Family Friendly", desc: "Services thoughtfully designed for men, women and kids — all under one roof." },
    { icon: HeartHandshake, title: "Customer First", desc: "Personalised consultations to make sure every visit feels tailored to you." },
    { icon: Star, title: "Loved by Hyderabad", desc: "Hundreds of 5-star reviews from happy regulars across the city." },
  ];
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-black to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Why Choose Us" title="The Dreams Difference" subtitle="A premium standard of care that keeps our chairs full and our clients smiling." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group glass-card rounded-2xl p-7 hover:border-primary/50 transition"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [real1, real4, real2, real3, interior1, hair];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Gallery" title="A Glimpse Inside Dreams" subtitle="Step into our world — premium interiors, talented artists and beautiful transformations." />
        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {imgs.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className={`relative overflow-hidden rounded-xl border border-primary/20 group ${i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"}`}
            >
              <img src={src} alt={`Salon gallery ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-outline-gold text-sm">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviewsPreview() {
  const reviews = [
    { name: "Priya R.", text: "Absolutely loved my bridal makeup! The team made me feel like royalty on my big day.", rating: 5 },
    { name: "Arjun M.", text: "Best beard styling in ECIL. The ambience is premium and the staff are super skilled.", rating: 5 },
    { name: "Sneha K.", text: "Got my first tattoo here. Hygienic, professional and the design came out perfect.", rating: 5 },
  ];
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-black to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Reviews" title="Loved by Our Guests" subtitle="Real words from real clients across Hyderabad." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="flex gap-0.5 mb-4 text-primary">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed italic">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-semibold">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Verified guest</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/reviews" className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-outline-gold text-sm">
            Read All Reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 sm:p-14 text-center">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Ready to Glow?</p>
            <h2 className="font-display text-4xl sm:text-5xl">
              Book your appointment <span className="gold-text italic">today</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Reserve your seat in seconds. Our team will confirm on WhatsApp.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-gold btn-gold-hover text-sm">
                <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a href={telLink} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-outline-gold text-sm">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
