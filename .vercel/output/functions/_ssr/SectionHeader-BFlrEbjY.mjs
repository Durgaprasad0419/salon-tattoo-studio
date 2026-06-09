import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: center ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-3 flex items-center gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/60" }),
          " ",
          eyebrow,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl font-medium text-foreground", children: [
          title.split(" ").slice(0, -2).join(" "),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text italic font-normal", children: title.split(" ").slice(-2).join(" ") })
        ] }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: subtitle })
      ]
    }
  );
}
export {
  SectionHeader as S
};
