import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { W as WhatsAppIcon, w as waLink } from "./router-DAdx9RJF.mjs";
import { h as hair, c as color, s as spa, b as beard, f as facial, m as makeup, t as tattoo, p as piercing, n as nails } from "./service-nails-DRKfVe9S.mjs";
import { f as Scissors, g as Palette, D as Droplets, B as Brush, c as Sparkles, F as Flower2, h as Crown, G as Gem, H as Heart, i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: index % 4 * 0.08 },
      className: "group relative overflow-hidden rounded-2xl glass-card hover:border-primary/50 transition-all duration-500",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: service.image,
              alt: service.title,
              loading: "lazy",
              width: 1024,
              height: 768,
              className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] uppercase tracking-[0.18em] text-primary border border-primary/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
            " ",
            service.category
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground group-hover:gold-text transition", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: service.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: service.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary/90 border border-primary/20", children: b }, b)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: waLink(`Hi Dreams Salon, I'd like to book: ${service.title}.`),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-4 w-4" }),
                " Book on WhatsApp",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const SERVICES = [
  {
    slug: "hair-cut-styling",
    title: "Hair Cut & Styling",
    category: "Hair",
    image: hair,
    icon: Scissors,
    description: "Precision cuts and signature styling by senior artists, tailored to your face shape and lifestyle.",
    benefits: ["Senior stylists", "Modern & classic cuts", "Blow-dry finish"]
  },
  {
    slug: "hair-coloring",
    title: "Hair Coloring",
    category: "Hair",
    image: color,
    icon: Palette,
    description: "Global colour, highlights, balayage and gloss with premium ammonia-free brands.",
    benefits: ["Ammonia-free options", "Balayage & highlights", "Long-lasting shine"]
  },
  {
    slug: "hair-spa",
    title: "Hair Spa & Treatments",
    category: "Hair",
    image: spa,
    icon: Droplets,
    description: "Deep conditioning, scalp therapy and keratin care to revive damaged hair.",
    benefits: ["Scalp therapy", "Keratin & smoothening", "Damage repair"]
  },
  {
    slug: "beard-grooming",
    title: "Beard Grooming",
    category: "Grooming",
    image: beard,
    icon: Brush,
    description: "Sharp beard sculpting, hot-towel shaves and luxury aftercare for the modern man.",
    benefits: ["Hot-towel shave", "Beard sculpting", "Premium aftercare"]
  },
  {
    slug: "facial-treatments",
    title: "Facial Treatments",
    category: "Beauty",
    image: facial,
    icon: Sparkles,
    description: "Customised facials, brightening, anti-ageing and hydra treatments using premium skincare.",
    benefits: ["Brightening & anti-ageing", "Hydra glow", "Skin-type specific"]
  },
  {
    slug: "skin-care",
    title: "Skin Care",
    category: "Beauty",
    image: facial,
    icon: Flower2,
    description: "Targeted skin therapies for clear, glowing and balanced skin.",
    benefits: ["Acne care", "Pigmentation", "Glow boosters"]
  },
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    category: "Beauty",
    image: makeup,
    icon: Crown,
    description: "HD & airbrush bridal looks crafted to last from haldi to reception — your day, your glow.",
    benefits: ["HD & airbrush", "Pre-bridal packages", "Drape & hair styling"]
  },
  {
    slug: "tattoo-studio",
    title: "Tattoo Studio",
    category: "Tattoo",
    image: tattoo,
    icon: Gem,
    description: "Custom tattoo design, fine line, black & grey and colour realism by certified artists in a hygienic studio.",
    benefits: ["Custom designs", "Sterile equipment", "Aftercare support"]
  },
  {
    slug: "ear-piercing",
    title: "Ear & Body Piercing",
    category: "Additional",
    image: piercing,
    icon: Heart,
    description: "Safe, hygienic piercing with sterilised tools and aftercare guidance for all ages.",
    benefits: ["Single-use needles", "Family friendly", "Aftercare kit"]
  },
  {
    slug: "manicure-pedicure",
    title: "Manicure & Pedicure",
    category: "Additional",
    image: nails,
    icon: Sparkles,
    description: "Spa manicure, pedicure, nail art and gel polish in a relaxing premium setup.",
    benefits: ["Spa mani-pedi", "Gel & nail art", "Hand & foot massage"]
  }
];
const SERVICE_CATEGORIES = [
  "Hair",
  "Grooming",
  "Beauty",
  "Tattoo",
  "Additional"
];
export {
  SERVICE_CATEGORIES as S,
  SERVICES as a,
  ServiceCard as b
};
