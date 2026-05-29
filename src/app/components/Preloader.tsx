import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    if (phase !== "loading") return;
    const start = performance.now();
    const dur = 2200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setCount(100);
        setTimeout(() => setPhase("reveal"), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  useEffect(() => {
    if (phase === "reveal") {
      const t = setTimeout(() => {
        setPhase("done");
        onDone();
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [phase, onDone]);

  const ease = [0.85, 0, 0.15, 1] as const;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[200] bg-background overflow-hidden flex flex-col"
          exit={{ pointerEvents: "none" }}
        >
          {/* Top meta */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex items-start justify-between px-6 md:px-12 pt-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <div>N°·04 / Akshay Charpe</div>
              <div className="text-primary mt-1">— Portfolio MMXXVI</div>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-right">
              <div>Nagpur · India</div>
              <div className="mt-1">Loading sequence</div>
            </div>
          </motion.div>

          {/* Center big number */}
          <div className="flex-1 flex items-center justify-center relative">
            {/* Animated rings */}
            <motion.div
              initial={{ scale: 0, opacity: 0.4 }}
              animate={{ scale: [0, 1.4, 1.4], opacity: [0.4, 0.15, 0] }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="absolute w-[420px] h-[420px] rounded-full border border-primary"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{ scale: [0, 1, 1], opacity: [0.3, 0.1, 0] }}
              transition={{ duration: 2.2, delay: 0.3, ease: "easeOut" }}
              className="absolute w-[280px] h-[280px] rounded-full border border-primary"
            />

            <motion.div
              exit={{ y: "-110%" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="relative"
            >
              <div
                style={{ fontFamily: "var(--font-display)" }}
                className="leading-none tracking-[-0.05em] flex items-end"
              >
                <span className="text-[28vw] md:text-[20vw]">{String(count).padStart(2, "0")}</span>
                <span className="text-primary text-[6vw] md:text-[4vw] mb-[3vw]">%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom row */}
          <div className="px-6 md:px-12 pb-8">
            <motion.div
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex items-end justify-between mb-5"
            >
              <div style={{ fontFamily: "var(--font-display)" }} className="uppercase">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.2 }}
                    className="text-4xl md:text-6xl tracking-tight leading-none"
                  >
                    Welcome to the
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.35 }}
                    className="text-4xl md:text-6xl tracking-tight leading-none text-primary"
                  >
                    <span style={{ fontFamily: "var(--font-serif)" }} className="italic font-normal">/</span> archive
                  </motion.div>
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-right">
                <div>Asset stream</div>
                <div className="text-primary mt-1">Online</div>
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="relative h-px w-full bg-border overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                transition={{ duration: 0.2, ease: "linear" }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-0 bg-primary"
              />
            </div>
          </div>

          {/* Reveal curtain — slides up to expose site */}
          <motion.div
            initial={{ y: 0 }}
            animate={phase === "reveal" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0 bg-background z-[201] pointer-events-none"
            style={{ display: phase === "reveal" ? "block" : "none" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
