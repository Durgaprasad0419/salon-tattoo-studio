import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./SectionHeader-BFlrEbjY.mjs";
import { S as SERVICE_CATEGORIES, a as SERVICES, b as ServiceCard } from "./services-CZIZVJm9.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "./router-DAdx9RJF.mjs";
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
import "../_libs/lucide-react.mjs";
import "./service-nails-DRKfVe9S.mjs";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our Services", title: "Premium Care for Every Style", subtitle: "A complete menu of hair, beauty, grooming and tattoo services — crafted by experienced artists in a luxurious environment." }),
    SERVICE_CATEGORIES.map((cat) => {
      const items = SERVICES.filter((s) => s.category === cat);
      if (!items.length) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl gold-text", children: cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-primary/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
            items.length,
            " services"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service: s, index: i }, s.slug)) })
      ] }, cat);
    })
  ] }) });
}
export {
  ServicesPage as component
};
