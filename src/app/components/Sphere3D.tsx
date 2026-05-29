import { motion } from "motion/react";

export function Sphere3D() {
  const rings = 10;
  return (
    <div
      className="relative pointer-events-none"
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]"
      >
        {Array.from({ length: rings }).map((_, i) => {
          const rot = (i / rings) * 180;
          return (
            <div
              key={`a-${i}`}
              className="absolute inset-0 rounded-full border border-primary/35"
              style={{ transform: `rotateY(${rot}deg)` }}
            />
          );
        })}
        {Array.from({ length: rings }).map((_, i) => {
          const rot = (i / rings) * 180;
          return (
            <div
              key={`b-${i}`}
              className="absolute inset-0 rounded-full border border-primary/20"
              style={{ transform: `rotateX(${rot}deg)` }}
            />
          );
        })}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
        />
        <div className="absolute inset-1/3 rounded-full bg-primary/15 blur-2xl" />
      </motion.div>
    </div>
  );
}
