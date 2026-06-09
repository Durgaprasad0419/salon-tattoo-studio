import { motion } from "motion/react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Navbar";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
      className="fixed bottom-5 right-5 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform group-hover:scale-110">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </motion.a>
  );
}
