import { motion, useScroll, useTransform } from "motion/react";
import { useMemo } from "react";

export function Background() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const hue = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 6,
        dur: 8 + Math.random() * 10,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ background: "var(--background)" }}
    >
      {/* Animated radial gradient mesh */}
      <motion.div
        style={{ y: orbY, filter: useTransform(hue, (h) => `hue-rotate(${h}deg)`) }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ x: [0, 120, -80, 0], y: [0, -90, 60, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[8%] w-[42vw] h-[42vw] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(255,128,0,0.32), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -100, 80, 0], y: [0, 80, -60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[6%] right-[6%] w-[46vw] h-[46vw] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(255,90,0,0.22), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 90, -60, 0], y: [0, 50, -90, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] left-[40%] w-[34vw] h-[34vw] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(255,160,40,0.18), transparent 70%)" }}
        />
      </motion.div>

      {/* Parallax moving grid */}
      <motion.div
        style={{
          y: gridY,
          backgroundImage:
            "linear-gradient(rgba(245,241,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,234,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        className="absolute -inset-[20%]"
      />

      {/* Diagonal racing lines drifting */}
      <motion.div
        animate={{ backgroundPositionX: ["0px", "200px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--foreground) 0 1px, transparent 1px 60px)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 8px rgba(255,128,0,0.6)",
          }}
          animate={{ y: [0, -80, 0], opacity: [p.opacity, p.opacity * 0.3, p.opacity] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      {/* Subtle scanline vignette */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 3px)",
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
    </div>
  );
}
