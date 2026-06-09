import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./SectionHeader-BFlrEbjY.mjs";
import { W as WhatsAppIcon, w as waLink, S as SITE } from "./router-DAdx9RJF.mjs";
import { S as Star, U as Users, b as ShieldCheck, Q as Quote, H as Heart } from "../_libs/lucide-react.mjs";
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
const REVIEWS = [{
  name: "Priya Reddy",
  text: "Got my bridal makeup done at Dreams and I felt like a queen. The artists are talented and the ambience is so luxurious. Highly recommend!",
  rating: 5
}, {
  name: "Arjun Mehta",
  text: "Best beard styling experience in ECIL. Hot towel shave, premium products and a great vibe. My go-to spot.",
  rating: 5
}, {
  name: "Sneha Kumar",
  text: "Loved my hair color! Senior stylist took time to understand what I wanted. Will be back for more.",
  rating: 5
}, {
  name: "Rahul Verma",
  text: "Got a custom tattoo done — fully sanitised, single-use needles and the design came out exactly as I imagined.",
  rating: 5
}, {
  name: "Anjali S.",
  text: "Family friendly salon. Took my kids for a haircut, staff was patient and gentle. Loved the interior too.",
  rating: 5
}, {
  name: "Karthik P.",
  text: "Hair spa was so relaxing. They use premium products and the head massage was top tier. Coming back monthly.",
  rating: 5
}, {
  name: "Divya N.",
  text: "Facial left my skin glowing for days. Hygienic, clean and professional service.",
  rating: 5
}, {
  name: "Mohan K.",
  text: "Ear piercing for my daughter was quick, safe and painless. Loved the care they took.",
  rating: 5
}, {
  name: "Lakshmi R.",
  text: "Beautiful manicure and pedicure session. Felt pampered the entire time. Worth every rupee.",
  rating: 5
}];
function Reviews() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Reviews", title: "Loved by Hyderabad", subtitle: "Real stories from real guests. Thank you for trusting us with your style." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto text-center", children: [{
      icon: Star,
      label: "4.9★ rating",
      desc: "Across platforms"
    }, {
      icon: Users,
      label: "1000+ guests",
      desc: "Served with care"
    }, {
      icon: ShieldCheck,
      label: "100% hygienic",
      desc: "Sterilised tools"
    }].map((s) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 mx-auto text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-2xl gold-text", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: s.desc })
      ] }, s.label);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: REVIEWS.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
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
    }, className: "relative glass-card rounded-2xl p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-5 right-5 h-8 w-8 text-primary/15" }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Google Review" })
        ] })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-7 w-7 mx-auto text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl", children: "Your turn next?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Book your appointment and join our family of happy guests." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-gold btn-gold-hover text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
        " Book on WhatsApp"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
        "Or call ",
        SITE.phone
      ] })
    ] })
  ] }) }) });
}
export {
  Reviews as component
};
