import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Navbar";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl glass-card hover:border-primary/50 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] uppercase tracking-[0.18em] text-primary border border-primary/30">
          <Icon className="h-3 w-3" /> {service.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-foreground group-hover:gold-text transition">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.benefits.map((b) => (
            <li key={b} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary/90 border border-primary/20">
              {b}
            </li>
          ))}
        </ul>
        <a
          href={waLink(`Hi Dreams Salon, I'd like to book: ${service.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
        >
          <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}
