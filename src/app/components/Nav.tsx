import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center overflow-hidden">
            <span style={{ fontFamily: "var(--font-display)" }} className="text-[18px] tracking-tight text-primary-foreground">AC</span>
          </div>
          <div className="hidden sm:block">
            <div style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">N°·04</div>
            <div style={{ fontFamily: "var(--font-display)" }} className="text-[14px] tracking-wider leading-none uppercase">Akshay Charpe</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.6 }}
              className="relative px-4 py-2 group"
            >
              <span style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.18em] text-foreground/80 group-hover:text-primary transition-colors">
                {l.label}
              </span>
              <span className="absolute left-4 right-4 bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-foreground/30 hover:border-primary hover:text-primary px-5 py-2 rounded-full transition-colors group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.2em]">Available</span>
        </a>

        <button
          aria-label="menu"
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-px bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`w-6 h-px bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden border-t border-border bg-background overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-display)" }} className="text-3xl uppercase tracking-wider">
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
