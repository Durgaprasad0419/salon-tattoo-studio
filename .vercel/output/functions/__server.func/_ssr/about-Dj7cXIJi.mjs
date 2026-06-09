import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as interior1 } from "./gallery-interior1-C50DVoZs.mjs";
import { i as interior2 } from "./gallery-interior2-CG39v2KB.mjs";
import { S as SectionHeader } from "./SectionHeader-BFlrEbjY.mjs";
import { S as SITE } from "./router-DAdx9RJF.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { T as Target, c as Sparkles, U as Users, H as Heart } from "../_libs/lucide-react.mjs";
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
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-4", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl leading-tight", children: [
          "Where Beauty Meets ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text italic", children: "Artistry" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Dreams Family Salon & Tattoo Studio was born from a simple belief — every guest deserves a premium experience without leaving their neighborhood. Tucked in the heart of ECIL, Hyderabad, our studio is a sanctuary where hair, skin and ink come together under one luxurious roof." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "From precision haircuts and bridal glow-ups to bold custom tattoos, every service is delivered by experienced professionals using premium products and the strictest hygiene standards. We're proud to be a family-friendly destination loved by Hyderabad." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 20
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.6,
        delay: 0.1
      }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: interior1, alt: "Dreams Salon interior", width: 1280, height: 896, loading: "lazy", className: "rounded-2xl border border-primary/20 shadow-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-primary/20 blur-3xl" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-to-b from-background via-black to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "What We Stand For", title: "Mission & Vision" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2", children: [{
        icon: Target,
        title: "Our Mission",
        desc: "To deliver world-class hair, beauty and tattoo experiences with premium care, hygiene and personalised service for every guest who walks in."
      }, {
        icon: Sparkles,
        title: "Our Vision",
        desc: "To be Hyderabad's most loved family salon and tattoo studio — a place where confidence is crafted and stories are inked."
      }, {
        icon: Users,
        title: "Family First",
        desc: "Services for men, women and kids — designed for every age, mood and occasion in a welcoming environment."
      }, {
        icon: Heart,
        title: "Customer Approach",
        desc: "We listen first, recommend honestly, and never compromise on quality, hygiene or your comfort."
      }].map((it, i) => {
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
          delay: i * 0.1
        }, className: "glass-card rounded-2xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: it.desc })
        ] }, it.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our Journey", title: "A Timeline of Craft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 relative max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" }),
        [{
          year: "Day One",
          title: "A vision is born",
          desc: "Founded in ECIL with a dream — bring premium salon experiences to every family in Hyderabad."
        }, {
          year: "Growth",
          title: "Hair, skin & beauty",
          desc: "Expanded with senior stylists, international products and a luxurious interior loved by regulars."
        }, {
          year: "Today",
          title: "Tattoo Studio added",
          desc: "Our certified tattoo artists bring custom designs, fine line and bold black & grey to life — hygienically and artfully."
        }, {
          year: "Tomorrow",
          title: "Always evolving",
          desc: "New treatments, fresh trends and the same warm welcome — we're always growing for you."
        }].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
        }, className: `relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-10 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${i % 2 ? "sm:text-left sm:pl-10" : "sm:text-right sm:pr-10"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: step.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mt-1", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: step.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(212,175,55,0.2)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
        ] }, step.year))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: interior2, alt: "Salon lounge", loading: "lazy", width: 1024, height: 1280, className: "w-full max-h-[480px] object-cover rounded-2xl border border-primary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-muted-foreground text-sm", children: [
        "Visit us at ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: SITE.address }),
        " · Open ",
        SITE.hours
      ] })
    ] }) })
  ] });
}
export {
  About as component
};
