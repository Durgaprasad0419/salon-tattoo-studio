import hair from "@/assets/service-hair.jpg";
import color from "@/assets/service-color.jpg";
import beard from "@/assets/service-beard.jpg";
import spa from "@/assets/service-spa.jpg";
import facial from "@/assets/service-facial.jpg";
import makeup from "@/assets/service-makeup.jpg";
import tattoo from "@/assets/service-tattoo.jpg";
import piercing from "@/assets/service-piercing.jpg";
import nails from "@/assets/service-nails.jpg";

import {
  Scissors, Palette, type LucideIcon, Sparkles, Droplets,
  Flower2, Brush, Heart, Crown, Gem,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  category: "Hair" | "Grooming" | "Beauty" | "Tattoo" | "Additional";
  image: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "hair-cut-styling",
    title: "Hair Cut & Styling",
    category: "Hair",
    image: hair,
    icon: Scissors,
    description: "Precision cuts and signature styling by senior artists, tailored to your face shape and lifestyle.",
    benefits: ["Senior stylists", "Modern & classic cuts", "Blow-dry finish"],
  },
  {
    slug: "hair-coloring",
    title: "Hair Coloring",
    category: "Hair",
    image: color,
    icon: Palette,
    description: "Global colour, highlights, balayage and gloss with premium ammonia-free brands.",
    benefits: ["Ammonia-free options", "Balayage & highlights", "Long-lasting shine"],
  },
  {
    slug: "hair-spa",
    title: "Hair Spa & Treatments",
    category: "Hair",
    image: spa,
    icon: Droplets,
    description: "Deep conditioning, scalp therapy and keratin care to revive damaged hair.",
    benefits: ["Scalp therapy", "Keratin & smoothening", "Damage repair"],
  },
  {
    slug: "beard-grooming",
    title: "Beard Grooming",
    category: "Grooming",
    image: beard,
    icon: Brush,
    description: "Sharp beard sculpting, hot-towel shaves and luxury aftercare for the modern man.",
    benefits: ["Hot-towel shave", "Beard sculpting", "Premium aftercare"],
  },
  {
    slug: "facial-treatments",
    title: "Facial Treatments",
    category: "Beauty",
    image: facial,
    icon: Sparkles,
    description: "Customised facials, brightening, anti-ageing and hydra treatments using premium skincare.",
    benefits: ["Brightening & anti-ageing", "Hydra glow", "Skin-type specific"],
  },
  {
    slug: "skin-care",
    title: "Skin Care",
    category: "Beauty",
    image: facial,
    icon: Flower2,
    description: "Targeted skin therapies for clear, glowing and balanced skin.",
    benefits: ["Acne care", "Pigmentation", "Glow boosters"],
  },
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    category: "Beauty",
    image: makeup,
    icon: Crown,
    description: "HD & airbrush bridal looks crafted to last from haldi to reception — your day, your glow.",
    benefits: ["HD & airbrush", "Pre-bridal packages", "Drape & hair styling"],
  },
  {
    slug: "tattoo-studio",
    title: "Tattoo Studio",
    category: "Tattoo",
    image: tattoo,
    icon: Gem,
    description: "Custom tattoo design, fine line, black & grey and colour realism by certified artists in a hygienic studio.",
    benefits: ["Custom designs", "Sterile equipment", "Aftercare support"],
  },
  {
    slug: "ear-piercing",
    title: "Ear & Body Piercing",
    category: "Additional",
    image: piercing,
    icon: Heart,
    description: "Safe, hygienic piercing with sterilised tools and aftercare guidance for all ages.",
    benefits: ["Single-use needles", "Family friendly", "Aftercare kit"],
  },
  {
    slug: "manicure-pedicure",
    title: "Manicure & Pedicure",
    category: "Additional",
    image: nails,
    icon: Sparkles,
    description: "Spa manicure, pedicure, nail art and gel polish in a relaxing premium setup.",
    benefits: ["Spa mani-pedi", "Gel & nail art", "Hand & foot massage"],
  },
];

export const SERVICE_CATEGORIES: Service["category"][] = [
  "Hair",
  "Grooming",
  "Beauty",
  "Tattoo",
  "Additional",
];
