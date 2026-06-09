import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Phone, X, M as Menu, A as ArrowRight, a as MapPin, C as Clock } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
const appCss = "/assets/styles-DfqjGtaw.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logo = "/assets/logo-DeNB6CvT.png";
const SITE = {
  name: "Dreams Family Salon & Tattoo Studio",
  phone: "+91 9849007058",
  phoneRaw: "+919849007058",
  whatsapp: "919849007058",
  whatsappMessage: "Hello Dreams Family Salon & Tattoo Studio, I would like to book an appointment.",
  address: "ECIL, Hyderabad, Telangana, India",
  hours: "8:00 AM – 10:00 PM",
  hoursMachine: "Mo-Su 08:00-22:00",
  mapsUrl: "https://share.google/TqCg2pwV9vYKJPYUV",
  mapsEmbed: "https://www.google.com/maps?q=Dreams+Family+Salon+Tattoo+Studio+ECIL+Hyderabad&output=embed",
  directions: "https://www.google.com/maps/dir/?api=1&destination=Dreams+Family+Salon+and+Tattoo+Studio+ECIL+Hyderabad",
  tagline: "Hair • Skin • Tattoo • Makeup • Piercing",
  description: "Dreams Family Salon & Tattoo Studio provides premium hair styling, beard grooming, beauty services, facials, makeup, tattoos, piercing, and grooming in ECIL, Hyderabad."
};
const waLink = (msg = SITE.whatsappMessage) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const telLink = `tel:${SITE.phoneRaw}`;
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 py-2" : "bg-gradient-to-b from-background/60 to-transparent py-4"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", "aria-label": SITE.name, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logo,
                alt: `${SITE.name} logo`,
                width: 48,
                height: 48,
                className: "h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg gold-text font-semibold tracking-wide", children: "Dreams" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Salon & Tattoo Studio" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.to,
              activeOptions: { exact: item.to === "/" },
              className: "relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group",
              activeProps: { className: "text-primary" },
              children: [
                item.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-4 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" })
              ]
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: telLink,
                className: "hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full btn-outline-gold text-sm",
                "aria-label": "Call now",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Call" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: waLink(),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gold btn-gold-hover text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Now" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "lg:hidden p-2 text-primary",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Toggle menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "lg:hidden overflow-hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex flex-col gap-1", children: [
              nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: item.to,
                  onClick: () => setOpen(false),
                  className: "px-4 py-3 rounded-md text-foreground/90 hover:bg-primary/10 hover:text-primary transition",
                  activeProps: { className: "text-primary bg-primary/10" },
                  activeOptions: { exact: item.to === "/" },
                  children: item.label
                },
                item.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink, className: "flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full btn-outline-gold text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  " Call"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full btn-gold btn-gold-hover text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
                  " WhatsApp"
                ] })
              ] })
            ] })
          }
        ) })
      ]
    }
  );
}
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.671 5.503l-.999 3.648 3.817-.85zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-24 border-t border-primary/20 bg-gradient-to-b from-background to-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 gold-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: SITE.name, width: 56, height: 56, className: "h-14 w-14 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl gold-text font-semibold", children: "Dreams" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Salon & Tattoo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: "A premium family salon & tattoo studio crafting confidence through hair, skin, beauty and bold ink in ECIL, Hyderabad." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm uppercase tracking-[0.2em] text-primary mb-4", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [
          ["Home", "/"],
          ["About", "/about"],
          ["Services", "/services"],
          ["Gallery", "/gallery"],
          ["Reviews", "/reviews"],
          ["Contact", "/contact"]
        ].map(([label, to]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "text-foreground/70 hover:text-primary inline-flex items-center gap-1 transition group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" }),
          label
        ] }) }, to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm uppercase tracking-[0.2em] text-primary mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-foreground/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: SITE.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink, className: "flex items-center gap-2 text-foreground/70 hover:text-primary transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary" }),
            " ",
            SITE.phone
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-foreground/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              SITE.hours,
              " · All days"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SITE.mapsUrl, target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "View on Google Maps →" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm uppercase tracking-[0.2em] text-primary mb-4", children: "Book Instantly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Reserve your slot in seconds — our team replies on WhatsApp." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: waLink(),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 px-5 py-3 rounded-full btn-gold btn-gold-hover text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
              " Chat on WhatsApp"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-2 justify-between items-center text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        SITE.name,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with care in Hyderabad." })
    ] }) })
  ] });
}
function WhatsAppFloat() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: waLink(),
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { delay: 1, type: "spring", stiffness: 200, damping: 18 },
      className: "fixed bottom-5 right-5 z-40 group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-7 w-7" }) })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-display gold-text", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-full btn-gold btn-gold-hover px-6 py-3 text-sm", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please try again or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full btn-gold btn-gold-hover px-5 py-2.5 text-sm",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full btn-outline-gold px-5 py-2.5 text-sm", children: "Go home" })
    ] })
  ] }) });
}
const ldJson = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE.name,
  image: "/og-image.jpg",
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ECIL",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN"
  },
  url: "/",
  openingHours: SITE.hoursMachine,
  priceRange: "₹₹",
  sameAs: [SITE.mapsUrl]
};
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dreams Family Salon & Tattoo Studio | Best Salon in ECIL Hyderabad" },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.name },
      { name: "keywords", content: "Dreams Family Salon, Salon in ECIL Hyderabad, Best Salon ECIL, Tattoo Studio ECIL, Beauty Salon Hyderabad, Hair Salon Hyderabad, Bridal Makeup Hyderabad, Piercing ECIL" },
      { name: "theme-color", content: "#0F0F0F" },
      { property: "og:title", content: "Dreams Family Salon & Tattoo Studio | Best Salon in ECIL Hyderabad" },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.name },
      { name: "twitter:description", content: SITE.description }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ldJson) }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFloat, {})
  ] }) });
}
const BASE_URL = "";
const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/gallery", changefreq: "monthly", priority: "0.7" },
  { path: "/reviews", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" }
];
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) => [
          `  <url>`,
          `    <loc>${BASE_URL}${e.path}</loc>`,
          `    <changefreq>${e.changefreq}</changefreq>`,
          `    <priority>${e.priority}</priority>`,
          `  </url>`
        ].join("\n")).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./services-CKlL8c-T.mjs");
const Route$5 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services | Hair, Beauty, Tattoo & More — Dreams Salon ECIL"
    }, {
      name: "description",
      content: "Explore premium services at Dreams Family Salon & Tattoo Studio: hair styling, coloring, beard grooming, facials, bridal makeup, tattoos, piercing, manicure & more in ECIL, Hyderabad."
    }, {
      property: "og:title",
      content: "Services — Dreams Family Salon & Tattoo Studio"
    }, {
      property: "og:description",
      content: "Hair, skin, makeup, tattoo and grooming services in ECIL, Hyderabad."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./reviews-BwRjkwRn.mjs");
const Route$4 = createFileRoute("/reviews")({
  head: () => ({
    meta: [{
      title: "Reviews | Dreams Family Salon & Tattoo Studio ECIL Hyderabad"
    }, {
      name: "description",
      content: "Read what our guests say about Dreams Family Salon & Tattoo Studio — premium hair, beauty and tattoo services in ECIL, Hyderabad."
    }, {
      property: "og:title",
      content: "Customer Reviews — Dreams Salon"
    }, {
      property: "og:description",
      content: "Loved by 1000+ guests across Hyderabad."
    }, {
      property: "og:url",
      content: "/reviews"
    }],
    links: [{
      rel: "canonical",
      href: "/reviews"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./gallery-DEsQGiv8.mjs");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery | Dreams Family Salon & Tattoo Studio ECIL Hyderabad"
    }, {
      name: "description",
      content: "Step inside Dreams Salon — view our luxurious interiors, hair transformations, tattoo art and beauty services."
    }, {
      property: "og:title",
      content: "Gallery — Dreams Family Salon & Tattoo Studio"
    }, {
      property: "og:description",
      content: "Luxury salon interiors, hair, tattoo and beauty work."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-ImBwEVLx.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact | Dreams Family Salon & Tattoo Studio ECIL Hyderabad"
    }, {
      name: "description",
      content: `Call ${SITE.phone} or visit Dreams Family Salon & Tattoo Studio at ECIL, Hyderabad. Open ${SITE.hours} all days.`
    }, {
      property: "og:title",
      content: "Contact Dreams Salon"
    }, {
      property: "og:description",
      content: "Phone, WhatsApp, directions and hours."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-Dj7cXIJi.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us | Dreams Family Salon & Tattoo Studio, ECIL Hyderabad"
    }, {
      name: "description",
      content: "Discover the story, vision and values behind Dreams Family Salon & Tattoo Studio — a premium beauty destination in ECIL, Hyderabad."
    }, {
      property: "og:title",
      content: "About Dreams Family Salon & Tattoo Studio"
    }, {
      property: "og:description",
      content: "Our story, mission and the artists behind Hyderabad's loved family salon."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BOxGw-He.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dreams Family Salon & Tattoo Studio | Best Salon in ECIL Hyderabad"
    }, {
      name: "description",
      content: SITE.description
    }, {
      property: "og:title",
      content: "Dreams Family Salon & Tattoo Studio | Best Salon in ECIL Hyderabad"
    }, {
      property: "og:description",
      content: SITE.description
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const ReviewsRoute = Route$4.update({
  id: "/reviews",
  path: "/reviews",
  getParentRoute: () => Route$7
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  ReviewsRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  SITE as S,
  WhatsAppIcon as W,
  router as r,
  telLink as t,
  waLink as w
};
