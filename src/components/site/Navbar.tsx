import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/logo.png";
import { SITE, telLink, waLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 py-2"
          : "bg-gradient-to-b from-background/60 to-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group" aria-label={SITE.name}>
          <img
            src={logo}
            alt={`${SITE.name} logo`}
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base sm:text-lg gold-text font-semibold tracking-wide">
              Dreams
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Salon & Tattoo Studio
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full btn-outline-gold text-sm"
            aria-label="Call now"
          >
            <Phone className="h-4 w-4" />
            <span>Call</span>
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gold btn-gold-hover text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Book Now</span>
          </a>
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-md text-foreground/90 hover:bg-primary/10 hover:text-primary transition"
                  activeProps={{ className: "text-primary bg-primary/10" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <a href={telLink} className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full btn-outline-gold text-sm">
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full btn-gold btn-gold-hover text-sm">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.671 5.503l-.999 3.648 3.817-.85zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/>
    </svg>
  );
}
