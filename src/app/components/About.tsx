import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tilt } from "./Tilt";

const stats = [
  { v: "30%", l: "Read-speed lift via indexing" },
  { v: "40%", l: "Component reuse increase" },
  { v: "06", l: "Production projects shipped" },
  { v: "03", l: "IIT Kanpur — Pitch Premier" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-24 md:py-40 bg-secondary text-secondary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60 mb-6">
            [ 01 / About ]
          </div>
          <Tilt intensity={10} glare className="relative aspect-[4/5] rounded-sm overflow-hidden bg-muted">
            <div style={{ transform: "translateZ(40px)" }} className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542385151-efd9bf16dc34?w=900&h=1100&fit=crop&auto=format"
                alt="Developer at work"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            <div style={{ transform: "translateZ(80px)" }} className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.25em] text-white">Nagpur · Maharashtra</div>
              <div style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.25em] text-white">EST. 2024</div>
            </div>
          </Tilt>
        </motion.div>

        <div className="md:col-span-7 md:pt-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--font-display)" }}
            className="uppercase text-[10vw] md:text-[7vw] leading-[0.9] tracking-[-0.02em]"
          >
            Built for <span className="text-primary">speed</span>.<br />
            Wired for <span style={{ fontFamily: "var(--font-serif)" }} className="italic font-normal normal-case text-primary">scale</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 max-w-xl text-secondary-foreground/70 leading-relaxed"
          >
            I'm a results-driven Full-Stack MERN developer and database specialist building scalable web applications,
            modern frontend interfaces, and resilient backend layers. Recognised nationally as runner-up at
            Techkriti'26, IIT Kanpur for software architecture & business strategy.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.08 }}
              >
                <Tilt intensity={14} className="bg-secondary border border-secondary-foreground/15 p-6 group hover:bg-primary hover:text-primary-foreground transition-colors duration-500 rounded-sm h-full">
                  <div style={{ fontFamily: "var(--font-display)", transform: "translateZ(40px)" }} className="text-5xl md:text-6xl leading-none mb-3">{s.v}</div>
                  <div style={{ fontFamily: "var(--font-mono)", transform: "translateZ(20px)" }} className="text-[10px] uppercase tracking-[0.2em] opacity-70">{s.l}</div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
