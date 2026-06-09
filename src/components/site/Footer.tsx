import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, telLink, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Navbar";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-primary/20 bg-gradient-to-b from-background to-black">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt={SITE.name} width={56} height={56} className="h-14 w-14 object-contain" />
            <div className="flex flex-col">
              <span className="font-display text-xl gold-text font-semibold">Dreams</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Salon & Tattoo</span>
            </div>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A premium family salon & tattoo studio crafting confidence through hair, skin, beauty and bold ink in ECIL, Hyderabad.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Gallery", "/gallery"],
              ["Reviews", "/reviews"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-foreground/70 hover:text-primary inline-flex items-center gap-1 transition group">
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-foreground/70">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li>
              <a href={telLink} className="flex items-center gap-2 text-foreground/70 hover:text-primary transition">
                <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2 text-foreground/70">
              <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>{SITE.hours} · All days</span>
            </li>
            <li>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                View on Google Maps →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Book Instantly</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Reserve your slot in seconds — our team replies on WhatsApp.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full btn-gold btn-gold-hover text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-2 justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted with care in Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}
