import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: "charpeakshay360@gmail.com", href: "mailto:charpeakshay360@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/akshay-charpe", href: "https://linkedin.com/in/akshay-charpe" },
  { label: "GitHub", value: "github.com/TheDemonSpeed", href: "https://github.com/TheDemonSpeed" },
  { label: "Phone", value: "+91 86684 04902", href: "tel:+918668404902" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 py-24 md:py-40 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full -z-10"
        style={{ background: "radial-gradient(circle, rgba(255,128,0,0.18), transparent 70%)" }}
      />

      <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-primary mb-6">
        [ 05 / Get in touch ]
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ fontFamily: "var(--font-display)" }}
        className="uppercase text-[18vw] md:text-[14vw] leading-[0.82] tracking-[-0.03em]"
      >
        Let's <br /><span className="text-primary">build</span> <span style={{ fontFamily: "var(--font-serif)" }} className="italic font-normal normal-case">something</span>
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <ul className="border-t border-border">
            {links.map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="border-b border-border group"
              >
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-6 px-2 hover:px-6 transition-all duration-500"
                >
                  <div className="flex items-baseline gap-6">
                    <span style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      ↳ {l.label}
                    </span>
                    <span style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl uppercase tracking-tight group-hover:text-primary transition-colors">
                      {l.value}
                    </span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 group-hover:text-primary group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 md:col-start-9 flex flex-col gap-6">
          <div className="border border-border rounded-sm p-6">
            <div style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Based in
            </div>
            <div style={{ fontFamily: "var(--font-display)" }} className="text-3xl uppercase tracking-tight">
              Nagpur,<br />Maharashtra
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Open to opportunities</span>
            </div>
          </div>

          <div className="border border-border rounded-sm p-6">
            <div style={{ fontFamily: "var(--font-mono)" }} className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Languages
            </div>
            <div style={{ fontFamily: "var(--font-serif)" }} className="italic text-2xl">
              English · Hindi · Marathi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
