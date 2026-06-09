import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Star, Quote, ShieldCheck, Users, Heart } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/Navbar";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Dreams Family Salon & Tattoo Studio ECIL Hyderabad" },
      { name: "description", content: "Read what our guests say about Dreams Family Salon & Tattoo Studio — premium hair, beauty and tattoo services in ECIL, Hyderabad." },
      { property: "og:title", content: "Customer Reviews — Dreams Salon" },
      { property: "og:description", content: "Loved by 1000+ guests across Hyderabad." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const REVIEWS = [
  { name: "Priya Reddy", text: "Got my bridal makeup done at Dreams and I felt like a queen. The artists are talented and the ambience is so luxurious. Highly recommend!", rating: 5 },
  { name: "Arjun Mehta", text: "Best beard styling experience in ECIL. Hot towel shave, premium products and a great vibe. My go-to spot.", rating: 5 },
  { name: "Sneha Kumar", text: "Loved my hair color! Senior stylist took time to understand what I wanted. Will be back for more.", rating: 5 },
  { name: "Rahul Verma", text: "Got a custom tattoo done — fully sanitised, single-use needles and the design came out exactly as I imagined.", rating: 5 },
  { name: "Anjali S.", text: "Family friendly salon. Took my kids for a haircut, staff was patient and gentle. Loved the interior too.", rating: 5 },
  { name: "Karthik P.", text: "Hair spa was so relaxing. They use premium products and the head massage was top tier. Coming back monthly.", rating: 5 },
  { name: "Divya N.", text: "Facial left my skin glowing for days. Hygienic, clean and professional service.", rating: 5 },
  { name: "Mohan K.", text: "Ear piercing for my daughter was quick, safe and painless. Loved the care they took.", rating: 5 },
  { name: "Lakshmi R.", text: "Beautiful manicure and pedicure session. Felt pampered the entire time. Worth every rupee.", rating: 5 },
];

function Reviews() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Reviews" title="Loved by Hyderabad" subtitle="Real stories from real guests. Thank you for trusting us with your style." />

          <div className="mt-14 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto text-center">
            {[
              { icon: Star, label: "4.9★ rating", desc: "Across platforms" },
              { icon: Users, label: "1000+ guests", desc: "Served with care" },
              { icon: ShieldCheck, label: "100% hygienic", desc: "Sterilised tools" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="glass-card rounded-2xl p-6">
                  <Icon className="h-6 w-6 mx-auto text-primary" />
                  <p className="mt-3 font-display text-2xl gold-text">{s.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="relative glass-card rounded-2xl p-7"
              >
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/15" />
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
                    <p className="text-xs text-muted-foreground">Google Review</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Heart className="h-7 w-7 mx-auto text-primary" />
            <h3 className="mt-3 font-display text-3xl">Your turn next?</h3>
            <p className="mt-2 text-muted-foreground">Book your appointment and join our family of happy guests.</p>
            <div className="mt-6 flex justify-center">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-gold btn-gold-hover text-sm">
                <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Or call {SITE.phone}</p>
          </div>
        </div>
      </section>
    </>
  );
}
