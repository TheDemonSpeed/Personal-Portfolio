import { motion } from "motion/react";
import { Tilt } from "./Tilt";

const groups = [
  {
    title: "Frontend & UI",
    items: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Responsive UI/UX", "Cross-Browser"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "Mongoose ODM", "PostgreSQL", "Query Optimization", "Indexing", "Schema Design"],
  },
  {
    title: "Languages & Frameworks",
    items: ["JavaScript ES6+", "SQL", "Node.js", "Express.js", "Python"],
  },
  {
    title: "Tools & Concepts",
    items: ["Git", "GitHub", "Vercel", "REST APIs", "MVC", "Aggregation Pipelines", "Server-Side Pagination"],
  },
];

export function Skills() {
  return (
    <section className="relative px-6 md:px-12 py-24 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-primary mb-6">
            [ 04 / Toolkit ]
          </div>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="uppercase text-[14vw] md:text-[7.5vw] leading-[0.85] tracking-[-0.02em]">
            The <br /><span style={{ fontFamily: "var(--font-serif)" }} className="italic font-normal normal-case text-primary">stack</span>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
            Tools, frameworks and patterns I reach for when shipping production systems —
            from optimized schemas and aggregation pipelines to component-driven frontends.
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <Tilt intensity={12} glare className="bg-card border border-border p-7 group hover:bg-primary hover:text-primary-foreground transition-colors duration-500 rounded-sm h-full">
                <div style={{ fontFamily: "var(--font-mono)", transform: "translateZ(30px)" }} className="text-[10px] uppercase tracking-[0.25em] mb-4 opacity-60">
                  0{i + 1}
                </div>
                <div style={{ fontFamily: "var(--font-display)", transform: "translateZ(60px)" }} className="text-2xl md:text-3xl uppercase mb-5 tracking-tight">
                  {g.title}
                </div>
                <ul style={{ transform: "translateZ(25px)" }} className="space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                      — {it}
                    </li>
                  ))}
                </ul>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
