import { motion } from "motion/react";

export function Marquee() {
  const items = ["React.js", "✦", "Node.js", "✦", "MongoDB", "✦", "Express", "✦", "Next.js", "✦", "MySQL", "✦", "Redux", "✦", "Mongoose", "✦", "TypeScript", "✦"];
  return (
    <div className="relative border-y border-border py-6 overflow-hidden bg-primary text-primary-foreground">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-6xl uppercase tracking-tight">
            {it}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
