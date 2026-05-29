import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Sphere3D } from "./Sphere3D";
import { Character } from "./Character";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const utc = d.getTime() + d.getTimezoneOffset() * 60 * 1000;
      const ist = new Date(utc + istOffset);
      setTime(ist.toLocaleTimeString("en-US", { hour12: false }));
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} style={{ position: "relative" }} className="min-h-[100svh] overflow-hidden flex flex-col justify-end px-6 md:px-12 pb-12 pt-32">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* Animated orange blur */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full -z-10"
        style={{ background: "radial-gradient(circle, rgba(255,128,0,0.18), transparent 70%)" }}
      />

      {/* 3D rotating wireframe sphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[-120px] md:right-[2vw] top-[20vh] -z-[1]"
      >
        <Sphere3D />
      </motion.div>

      {/* Animated developer character */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-2 md:right-[5vw] top-[14vh] z-[2]"
      >
        <Character />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* Top meta */}
        <div className="flex items-start justify-between mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground space-y-1"
          >
            <div>[ N°·04 / Developer ]</div>
            <div>Nagpur, India · {time} IST</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            style={{ fontFamily: "var(--font-mono)" }}
            className="hidden md:block text-right text-[11px] uppercase tracking-[0.25em] text-muted-foreground space-y-1"
          >
            <div>Portfolio · MMXXVI</div>
            <div>Full-Stack · MERN · DB</div>
          </motion.div>
        </div>

        {/* MASSIVE name */}
        <div className="relative">
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="uppercase leading-[0.82] tracking-[-0.02em]"
          >
            {["AKSHAY", "CHARPE"].map((word, wi) => (
              <div key={word} className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease, delay: 0.4 + wi * 0.12 }}
                  className="block text-[18vw] md:text-[14vw] lg:text-[13vw]"
                >
                  {word.split("").map((ch, ci) => (
                    <motion.span
                      key={ci}
                      whileHover={{ color: "#ff8000", y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block cursor-default"
                    >
                      {ch}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </h1>
        </div>

        {/* Bottom row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.1 }}
            className="md:col-span-5"
          >
            <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
              ✦ Currently
            </div>
            <p style={{ fontFamily: "var(--font-serif)" }} className="text-2xl md:text-3xl leading-[1.2] italic text-foreground/90">
              Full-Stack MERN engineer & database specialist crafting fast, resilient web systems from <span className="text-primary not-italic" style={{ fontFamily: "var(--font-display)" }}>SCHEMA</span> to <span className="text-primary not-italic" style={{ fontFamily: "var(--font-display)" }}>SCREEN</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.25 }}
            className="md:col-span-4 md:col-start-9 flex flex-col gap-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center justify-between border border-foreground/20 hover:border-primary rounded-full px-7 py-5 transition-colors"
            >
              <span style={{ fontFamily: "var(--font-display)" }} className="text-2xl uppercase tracking-wider group-hover:text-primary transition-colors">
                View Work
              </span>
              <span className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500" />
                <ArrowUpRight className="absolute w-5 h-5 text-primary-foreground -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              </span>
            </a>
            <div className="flex items-center justify-between px-2">
              <span style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">06 projects</span>
              <span style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">2024 — present</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
