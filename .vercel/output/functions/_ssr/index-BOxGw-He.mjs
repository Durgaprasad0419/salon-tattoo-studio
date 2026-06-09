import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as hero, r as real1, a as real4, b as real2, c as real3 } from "./real-salon4-BlZTwobi.mjs";
import { i as interior1 } from "./gallery-interior1-C50DVoZs.mjs";
import { h as hair } from "./service-nails-DRKfVe9S.mjs";
import { S as SITE, W as WhatsAppIcon, w as waLink, t as telLink } from "./router-DAdx9RJF.mjs";
import { a as SERVICES, b as ServiceCard } from "./services-CZIZVJm9.mjs";
import { S as SectionHeader } from "./SectionHeader-BFlrEbjY.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { P as Phone, a as MapPin, S as Star, C as Clock, c as Sparkles, A as ArrowRight, d as Award, b as ShieldCheck, U as Users, e as HeartHandshake } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedServices, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChooseUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABand, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center overflow-hidden -mt-20 pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Dreams Family Salon luxury interior", width: 1920, height: 1280, fetchPriority: "high", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.8
    }, className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
        " ECIL · Hyderabad"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground", children: [
        "Dreams Family Salon ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text italic", children: "Tattoo Studio" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-lg text-foreground/80 max-w-xl", children: [
        SITE.tagline,
        ". A premium destination for hair, skin, makeup and bold body art — crafted with care, finished with finesse."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-gold btn-gold-hover text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
          " Book on WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink, className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-outline-gold text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " Call Now"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: SITE.directions, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm text-foreground/80 hover:text-primary border border-border hover:border-primary/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
          " Get Directions"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-primary", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trusted by 1000+ families" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
          " Open today · ",
          SITE.hours
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      y: [0, 8, 0]
    }, transition: {
      repeat: Infinity,
      duration: 2
    }, className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-primary/70 text-xs uppercase tracking-[0.3em]", children: "Scroll" })
  ] });
}
function FeaturedServices() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our Services", title: "Signature Crafted Experiences", subtitle: "From precision cuts to ink that tells your story — every service is delivered by skilled artists using premium products." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
        " Explore All Services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink, className: "inline-flex items-center gap-2 px-6 py-3 rounded-full btn-outline-gold text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
        " Book via Phone Call"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm text-foreground/80 hover:text-primary border border-border hover:border-primary/40 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
        " Book on WhatsApp"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: SERVICES.slice(0, 8).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service: s, index: i }, s.slug)) })
  ] }) });
}
function WhyChooseUs() {
  const items = [{
    icon: Award,
    title: "Experienced Professionals",
    desc: "A team of certified senior stylists, beauty experts and tattoo artists."
  }, {
    icon: Sparkles,
    title: "Premium Equipment",
    desc: "International brands and modern tools for safe, salon-grade results."
  }, {
    icon: ShieldCheck,
    title: "Hygienic Environment",
    desc: "Sterilised tools, single-use needles and clinical-grade cleanliness."
  }, {
    icon: Users,
    title: "Family Friendly",
    desc: "Services thoughtfully designed for men, women and kids — all under one roof."
  }, {
    icon: HeartHandshake,
    title: "Customer First",
    desc: "Personalised consultations to make sure every visit feels tailored to you."
  }, {
    icon: Star,
    title: "Loved by Hyderabad",
    desc: "Hundreds of 5-star reviews from happy regulars across the city."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 bg-gradient-to-b from-background via-black to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Why Choose Us", title: "The Dreams Difference", subtitle: "A premium standard of care that keeps our chairs full and our clients smiling." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => {
      const Icon = it.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i % 3 * 0.08
      }, className: "group glass-card rounded-2xl p-7 hover:border-primary/50 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: it.desc })
      ] }, it.title);
    }) })
  ] }) });
}
function GalleryPreview() {
  const imgs = [real1, real4, real2, real3, interior1, hair];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Gallery", title: "A Glimpse Inside Dreams", subtitle: "Step into our world — premium interiors, talented artists and beautiful transformations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-3 sm:grid-cols-3", children: imgs.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: i % 3 * 0.06
    }, className: `relative overflow-hidden rounded-xl border border-primary/20 group ${i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `Salon gallery ${i + 1}`, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full btn-outline-gold text-sm", children: [
      "View Full Gallery ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
function ReviewsPreview() {
  const reviews = [{
    name: "Priya R.",
    text: "Absolutely loved my bridal makeup! The team made me feel like royalty on my big day.",
    rating: 5
  }, {
    name: "Arjun M.",
    text: "Best beard styling in ECIL. The ambience is premium and the staff are super skilled.",
    rating: 5
  }, {
    name: "Sneha K.",
    text: "Got my first tattoo here. Hygienic, professional and the design came out perfect.",
    rating: 5
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 bg-gradient-to-b from-background via-black to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Reviews", title: "Loved by Our Guests", subtitle: "Real words from real clients across Hyderabad." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: i * 0.1
    }, className: "glass-card rounded-2xl p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-4 text-primary", children: [...Array(r.rating)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-primary" }, j)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/85 leading-relaxed italic", children: [
        '"',
        r.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-semibold", children: r.name[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Verified guest" })
        ] })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/reviews", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full btn-outline-gold text-sm", children: [
      "Read All Reviews ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
function CTABand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl glass-card p-10 sm:p-14 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-4", children: "Ready to Glow?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl", children: [
        "Book your appointment ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text italic", children: "today" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "Reserve your seat in seconds. Our team will confirm on WhatsApp." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-gold btn-gold-hover text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
          " Book on WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink, className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-outline-gold text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " ",
          SITE.phone
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  Home as component
};
