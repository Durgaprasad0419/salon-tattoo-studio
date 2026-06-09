import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./SectionHeader-BFlrEbjY.mjs";
import { i as interior2 } from "./gallery-interior2-CG39v2KB.mjs";
import { h as hair, c as color, s as spa, t as tattoo, p as piercing, b as beard, f as facial, m as makeup, n as nails } from "./service-nails-DRKfVe9S.mjs";
import { r as real1, a as real4, b as real2, c as real3, h as hero } from "./real-salon4-BlZTwobi.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const items = [{
  src: real1,
  cat: "Salon Interior",
  alt: "Dreams Salon styling chairs and floor"
}, {
  src: real4,
  cat: "Salon Interior",
  alt: "Beauty salon mural and interior"
}, {
  src: real2,
  cat: "Salon Interior",
  alt: "Hair wash and styling station"
}, {
  src: real3,
  cat: "Grooming",
  alt: "Men's barber section with style chart"
}, {
  src: hero,
  cat: "Salon Interior",
  alt: "Salon styling stations"
}, {
  src: interior2,
  cat: "Salon Interior",
  alt: "Reception lounge"
}, {
  src: hair,
  cat: "Hair Styling",
  alt: "Hair styling service"
}, {
  src: color,
  cat: "Hair Styling",
  alt: "Hair coloring service"
}, {
  src: spa,
  cat: "Hair Styling",
  alt: "Hair spa treatment"
}, {
  src: tattoo,
  cat: "Tattoo Studio",
  alt: "Tattoo artist at work"
}, {
  src: piercing,
  cat: "Grooming",
  alt: "Ear piercing service"
}, {
  src: beard,
  cat: "Grooming",
  alt: "Beard grooming and shave"
}, {
  src: facial,
  cat: "Beauty Services",
  alt: "Facial treatment"
}, {
  src: makeup,
  cat: "Beauty Services",
  alt: "Bridal makeup"
}, {
  src: nails,
  cat: "Beauty Services",
  alt: "Manicure and nail art"
}];
const cats = ["All", "Salon Interior", "Hair Styling", "Tattoo Studio", "Grooming", "Beauty Services"];
function Gallery() {
  const [active, setActive] = reactExports.useState("All");
  const [lightbox, setLightbox] = reactExports.useState(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Gallery", title: "Inside Our Studio", subtitle: "A premium space, talented hands, and beautiful transformations." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-2 justify-center", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c), className: `px-4 py-2 rounded-full text-sm transition border ${active === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:border-primary/50 hover:text-primary"}`, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]", children: filtered.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { layout: true, initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.4,
        delay: i % 6 * 0.05
      }, onClick: () => setLightbox(it.src), className: "mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-primary/20 group relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.src, alt: it.alt, loading: "lazy", className: "w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary uppercase tracking-[0.2em]", children: it.cat }) })
      ] }, it.src + i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightbox && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, onClick: () => setLightbox(null), className: "fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLightbox(null), "aria-label": "Close", className: "absolute top-5 right-5 text-foreground/80 hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
        scale: 0.9
      }, animate: {
        scale: 1
      }, exit: {
        scale: 0.9
      }, src: lightbox, alt: "Enlarged view", className: "max-h-[85vh] max-w-[92vw] rounded-2xl border border-primary/30" })
    ] }) })
  ] });
}
export {
  Gallery as component
};
