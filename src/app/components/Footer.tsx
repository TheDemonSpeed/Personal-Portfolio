import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="px-6 md:px-12 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6">
            <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] opacity-70 mb-4">
              ✦ End of file
            </div>
            <div style={{ fontFamily: "var(--font-display)" }} className="uppercase text-5xl md:text-7xl leading-[0.9] tracking-tight">
              Drive, ship,<br />repeat.
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-8" style={{ fontFamily: "var(--font-mono)" }}>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-3">Index</div>
            <ul className="space-y-1.5 text-sm uppercase tracking-wider">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#work" className="hover:underline">Work</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-3" style={{ fontFamily: "var(--font-mono)" }}>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-3">Socials</div>
            <ul className="space-y-1.5 text-sm uppercase tracking-wider">
              <li><a href="https://github.com/TheDemonSpeed" className="hover:underline">GitHub ↗</a></li>
              <li><a href="https://linkedin.com/in/akshay-charpe" className="hover:underline">LinkedIn ↗</a></li>
              <li><a href="mailto:charpeakshay360@gmail.com" className="hover:underline">Email ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Giant signature */}
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-display)" }}
          className="uppercase leading-[0.8] tracking-[-0.03em] text-[26vw] border-t border-primary-foreground/30 pt-4"
        >
          Akshay Charpe
        </motion.div>

        <div className="flex items-center justify-between flex-wrap gap-4 mt-4 pt-4 border-t border-primary-foreground/30" style={{ fontFamily: "var(--font-mono)" }}>
          <span className="text-[10px] uppercase tracking-[0.25em] opacity-70">© MMXXVI Akshay Charpe · All rights reserved</span>
          <span className="text-[10px] uppercase tracking-[0.25em] opacity-70">Crafted with React · Motion · Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
