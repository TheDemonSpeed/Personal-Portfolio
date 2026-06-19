import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const projects = [
  {
    n: "01",
    title: "Crestfield Law Group",
    tag: "Frontend · React · CSS3",
    desc: "Sleek corporate frontend platform tailored for a professional legal practice — production-ready responsive layout with consistent cross-device accessibility.",
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1400&h=900&fit=crop&auto=format",
    year: "2025",
  },
  {
    n: "02",
    title: "CoCrumble Web App",
    tag: "React · Component Architecture",
    desc: "Independent modern frontend featuring custom navigation modules and interactive elements — decoupled, scalable, backend-ready.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&h=900&fit=crop&auto=format",
    year: "2025",
  },
  {
    n: "03",
    title: "Car WebO — Automotive Showcase",
    tag: "React · Asset Optimization",
    desc: "Dynamic rich-media frontend interface focused on interactive asset presentation. Lazy-loaded media for rapid mobile layout delivery.",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&h=900&fit=crop&auto=format",
    year: "2024",
  },
  {
    n: "04",
    title: "E-Commerce Admin Dashboard",
    tag: "React · Redux · REST",
    desc: "High-performance admin UI for products, real-time inventory and order tracking. Centralized state via Redux — eliminated prop-drilling, lifted component reuse by 40%.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop&auto=format",
    year: "2024",
  },
  {
    n: "05",
    title: "MongoDB REST API & Portfolio",
    tag: "Node · Express · MongoDB · Mongoose",
    desc: "Optimized MongoDB schema layer with object-level Mongoose validation. Explicit indexes on hot query fields lifted read execution speeds ~30%.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=900&fit=crop&auto=format",
    year: "2024",
  },
  {
    n: "06",
    title: "AXIU Platform",
    tag: "Next.js · React · MongoDB",
    desc: "Founding contributor — architected MVPs and platform layouts, owned real-time client resource allocation engine and led production deployment cycles.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=900&fit=crop&auto=format",
    year: "2026",
  },
];

export function Work() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="work" className="relative px-6 md:px-12 py-24 md:py-40">
      <div className="flex items-end justify-between mb-16 md:mb-24 flex-wrap gap-6">
        <div>
          <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
            [ 02 / Selected Work ]
          </div>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="uppercase text-[14vw] md:text-[10vw] leading-[0.85] tracking-[-0.02em]">
            The <span style={{ fontFamily: "var(--font-serif)" }} className="italic font-normal normal-case text-primary">archive</span>
          </h2>
        </div>
        <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          06 entries · 2024—2026
        </div>
      </div>

      <ul className="border-t border-border">
        {projects.map((p, i) => (
          <motion.li
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="group relative border-b border-border"
          >
            <a href="#" className="grid grid-cols-12 items-center py-6 md:py-8 px-2 gap-4 transition-colors">
              <div className="col-span-2 md:col-span-1" style={{ fontFamily: "var(--font-mono)" }}>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">N°·{p.n}</span>
              </div>
              <div className="col-span-10 md:col-span-5">
                <div
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-3xl md:text-5xl uppercase leading-none tracking-tight transition-colors group-hover:text-primary"
                >
                  {p.title}
                </div>
              </div>
              <div className="col-span-8 md:col-span-4" style={{ fontFamily: "var(--font-mono)" }}>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</span>
              </div>
              <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-4">
                <span style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{p.year}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:text-primary group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </a>

            {/* Floating hover image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: hover === i ? 1 : 0, scale: hover === i ? 1 : 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block pointer-events-none absolute top-1/2 right-[20%] -translate-y-1/2 w-[340px] h-[220px] z-10 overflow-hidden rounded-sm bg-muted"
            >
              <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </motion.div>
          </motion.li>
        ))}
      </ul>

      {/* Mobile cards with image */}
      <div className="md:hidden grid grid-cols-1 gap-6 mt-10">
        {projects.slice(0, 3).map((p) => (
          <div key={p.n} className="rounded-sm overflow-hidden bg-card border border-border">
            <div className="aspect-[16/10] bg-muted">
              <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">N°·{p.n} · {p.year}</div>
              <div style={{ fontFamily: "var(--font-display)" }} className="text-2xl uppercase mb-2">{p.title}</div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
