import { motion } from "motion/react";

const exp = [
  {
    org: "AXIU",
    role: "Founder · Lead Developer",
    period: "Active",
    location: "axiu.space",
    bullets: [
      "Architected and deployed high-performance web apps and custom MVPs with React, Next.js and Python backends.",
      "Contributed to the official AXIU web platform — responsive layouts, optimized UI elements for premium UX.",
      "Designed flexible MongoDB layers for real-time client resource allocation engines.",
      "Led cross-functional ops — onboarding, task distribution, production deployment cycles.",
    ],
  },
  {
    org: "Pegasus Technologies",
    role: "MERN Fullstack Developer Intern",
    period: "Jan — May 2024",
    location: "Nagpur, MH",
    bullets: [
      "Completed an intensive full-stack module design & architecture internship program.",
      "Integrated frontend modules with MongoDB, Express.js, React.js and Node.js codebases.",
      "Constructed, unit-tested and patched complex production features for live software & client deliverables.",
      "Commended by the Managing Director for clean, production-ready source code.",
    ],
  },
];

const certs = [
  { y: "2026", t: "Second Runner-Up — Pitch Premier", o: "IIT Kanpur · Techkriti'26" },
  { y: "2026", t: "Techkriti Innovation Challenge", o: "IIT Kanpur — Final track participant" },
  { y: "—", t: "Full-Stack Development & Technical Leadership", o: "AXIU" },
  { y: "2024", t: "MERN Fullstack Training & Internship", o: "Pegasus Technologies" },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 py-24 md:py-40 bg-secondary text-secondary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60 mb-6">
            [ 03 / Career ]
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ fontFamily: "var(--font-display)" }}
            className="uppercase text-[12vw] md:text-[6.5vw] leading-[0.9] tracking-[-0.02em] sticky top-32"
          >
            Track <br />
            <span style={{ fontFamily: "var(--font-serif)" }} className="italic font-normal normal-case text-primary">record</span>
          </motion.h2>
        </div>

        <div className="md:col-span-8 space-y-2">
          {exp.map((e, i) => (
            <motion.div
              key={e.org}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="border-t border-secondary-foreground/15 pt-8 pb-10 group"
            >
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                <div style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-6xl uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                  {e.org}
                </div>
                <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.2em] text-secondary-foreground/60">
                  {e.period} · {e.location}
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-serif)" }} className="italic text-xl mb-5 text-secondary-foreground/80">
                {e.role}
              </div>
              <ul className="space-y-2 max-w-2xl">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-secondary-foreground/75 leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Certifications */}
          <div className="pt-12 mt-8">
            <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-secondary-foreground/60 mb-6">
              ✦ Certifications & Achievements
            </div>
            <div className="border-t border-secondary-foreground/15">
              {certs.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-secondary-foreground/15 items-center group hover:bg-primary/5 transition-colors"
                >
                  <div className="col-span-2" style={{ fontFamily: "var(--font-mono)" }}>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-secondary-foreground/60">{c.y}</span>
                  </div>
                  <div className="col-span-7 md:col-span-7" style={{ fontFamily: "var(--font-display)" }}>
                    <span className="text-lg md:text-2xl uppercase tracking-tight">{c.t}</span>
                  </div>
                  <div className="col-span-3 text-right" style={{ fontFamily: "var(--font-mono)" }}>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-secondary-foreground/60">{c.o}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
