import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./SectionHeader-BFlrEbjY.mjs";
import { t as telLink, S as SITE, W as WhatsAppIcon, w as waLink } from "./router-DAdx9RJF.mjs";
import { P as Phone, a as MapPin, C as Clock, N as Navigation } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Contact() {
  const cards = [{
    icon: Phone,
    title: "Call Us",
    value: SITE.phone,
    href: telLink,
    cta: "Tap to call"
  }, {
    icon: MapPin,
    title: "Visit Us",
    value: SITE.address,
    href: SITE.mapsUrl,
    cta: "View on Maps"
  }, {
    icon: Clock,
    title: "Open Hours",
    value: SITE.hours,
    sub: "All days · Mon – Sun"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Contact", title: "We'd Love to See You", subtitle: "Reach out on WhatsApp, call us, or simply walk in — we're right in ECIL, Hyderabad." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: cards.map((c, i) => {
      const Icon = c.icon;
      const Inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
      }, className: "glass-card rounded-2xl p-7 h-full hover:border-primary/50 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-foreground/85", children: c.value }),
        c.sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: c.sub }),
        c.cta && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-primary", children: [
          c.cta,
          " →"
        ] })
      ] });
      return c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", children: Inner }, c.title) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: Inner }, c.title);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-gold btn-gold-hover text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
        " WhatsApp Us"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink, className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-outline-gold text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
        " Call ",
        SITE.phone
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: SITE.directions, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm border border-border hover:border-primary/40 text-foreground/80 hover:text-primary transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "h-4 w-4" }),
        " Get Directions"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 overflow-hidden rounded-2xl border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: SITE.mapsEmbed, width: "100%", height: "450", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Dreams Family Salon & Tattoo Studio location", className: "w-full block" }) })
  ] }) });
}
export {
  Contact as component
};
