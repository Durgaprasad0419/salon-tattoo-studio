import { motion } from "motion/react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 flex items-center gap-3 justify-center">
          <span className="h-px w-8 bg-primary/60" /> {eyebrow} <span className="h-px w-8 bg-primary/60" />
        </p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-medium text-foreground">
        {title.split(" ").slice(0, -2).join(" ")}{" "}
        <span className="gold-text italic font-normal">{title.split(" ").slice(-2).join(" ")}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
