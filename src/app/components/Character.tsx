import { motion } from "motion/react";

export function Character() {
  const float = {
    animate: { y: [0, -14, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  };

  return (
    <div
      className="relative w-[300px] h-[380px] md:w-[440px] md:h-[520px] pointer-events-none"
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
    >
      {/* Rotating orbit ring behind character */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-primary/25"
        style={{ transform: "rotateX(70deg)" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-primary/15"
        style={{ transform: "rotateX(70deg) rotateZ(30deg)" }}
      />

      {/* Floating code chips */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-2 md:left-0 bg-background border border-primary/40 rounded px-3 py-1.5 shadow-lg"
        style={{ fontFamily: "var(--font-mono)", transform: "translateZ(80px)" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary">{"<dev/>"}</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-16 right-2 md:right-0 bg-primary text-primary-foreground rounded px-3 py-1.5 shadow-lg"
        style={{ fontFamily: "var(--font-mono)", transform: "translateZ(60px)" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">React · Node</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 left-0 bg-background border border-border rounded px-3 py-1.5 shadow-lg"
        style={{ fontFamily: "var(--font-mono)", transform: "translateZ(70px)" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">{"{ }"}</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary ml-2">MongoDB</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], x: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-8 right-4 bg-background border border-primary/40 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        style={{ transform: "translateZ(90px)" }}
      >
        <span style={{ fontFamily: "var(--font-display)" }} className="text-primary text-xl">✦</span>
      </motion.div>

      {/* CHARACTER — SVG developer */}
      <motion.div
        {...float}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: "translateZ(40px)" }}
      >
        <svg viewBox="0 0 320 380" className="w-full h-full drop-shadow-[0_30px_40px_rgba(255,128,0,0.25)]">
          {/* Shadow ellipse */}
          <motion.ellipse
            cx="160" cy="360" rx="90" ry="8"
            fill="rgba(255,128,0,0.25)"
            animate={{ rx: [90, 70, 90], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Chair back */}
          <rect x="100" y="240" width="120" height="20" rx="4" fill="#2a2a2a" />
          <rect x="155" y="260" width="10" height="60" fill="#2a2a2a" />

          {/* Body — hoodie */}
          <path d="M90 270 Q90 220 160 220 Q230 220 230 270 L230 340 L90 340 Z" fill="#ff8000" />
          <path d="M90 270 Q90 220 160 220 Q230 220 230 270 L225 290 L95 290 Z" fill="#e07000" />
          {/* Hood */}
          <path d="M115 220 Q115 200 160 200 Q205 200 205 220 Z" fill="#1a1a1a" />

          {/* Head */}
          <circle cx="160" cy="170" r="44" fill="#f5d6b3" />
          {/* Hair */}
          <path d="M118 168 Q120 130 160 128 Q200 130 202 168 Q200 145 160 142 Q120 145 118 168 Z" fill="#2a1a0d" />
          <path d="M120 160 Q140 150 165 152 Q140 158 120 168 Z" fill="#2a1a0d" />

          {/* Glasses */}
          <circle cx="142" cy="178" r="11" fill="none" stroke="#1a1a1a" strokeWidth="3" />
          <circle cx="178" cy="178" r="11" fill="none" stroke="#1a1a1a" strokeWidth="3" />
          <line x1="153" y1="178" x2="167" y2="178" stroke="#1a1a1a" strokeWidth="2" />
          {/* Glasses gleam */}
          <motion.circle
            cx="139" cy="175" r="3" fill="#fff"
            animate={{ opacity: [0.8, 0.3, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle
            cx="175" cy="175" r="3" fill="#fff"
            animate={{ opacity: [0.8, 0.3, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
          />

          {/* Smile */}
          <path d="M150 198 Q160 206 170 198" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Headphones */}
          <path d="M114 168 Q114 130 160 128 Q206 130 206 168" stroke="#1a1a1a" strokeWidth="6" fill="none" />
          <rect x="108" y="160" width="14" height="22" rx="5" fill="#1a1a1a" />
          <rect x="198" y="160" width="14" height="22" rx="5" fill="#1a1a1a" />
          <motion.rect
            x="110" y="164" width="3" height="14" rx="1" fill="#ff8000"
            animate={{ scaleY: [0.4, 1, 0.6, 1, 0.4], originY: 0.5 }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />

          {/* Laptop base */}
          <rect x="80" y="320" width="160" height="14" rx="3" fill="#1a1a1a" />
          <rect x="85" y="322" width="150" height="2" fill="#3a3a3a" />
          {/* Laptop screen */}
          <rect x="92" y="270" width="136" height="56" rx="3" fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="2" />
          {/* Animated code lines on screen */}
          <motion.g
            animate={{ opacity: [1, 1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <motion.rect
              x="100" y="278" width="40" height="3" rx="1" fill="#ff8000"
              animate={{ width: [10, 50, 30, 60] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.rect
              x="100" y="286" width="60" height="3" rx="1" fill="#f5f1ea"
              animate={{ width: [30, 80, 40, 70] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 0.2 }}
            />
            <motion.rect
              x="108" y="294" width="50" height="3" rx="1" fill="#8a8680"
              animate={{ width: [20, 60, 35, 55] }}
              transition={{ duration: 2.1, repeat: Infinity, delay: 0.1 }}
            />
            <motion.rect
              x="108" y="302" width="40" height="3" rx="1" fill="#ff8000"
              animate={{ width: [15, 45, 25, 50] }}
              transition={{ duration: 1.9, repeat: Infinity, delay: 0.3 }}
            />
            <motion.rect
              x="100" y="310" width="80" height="3" rx="1" fill="#f5f1ea"
              animate={{ width: [40, 95, 60, 85] }}
              transition={{ duration: 2.3, repeat: Infinity, delay: 0.15 }}
            />
            <motion.rect
              x="100" y="318" width="30" height="3" rx="1" fill="#8a8680"
              animate={{ width: [10, 35, 20, 40] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.25 }}
            />
          </motion.g>

          {/* Left arm — static */}
          <path d="M100 280 Q92 305 110 322" stroke="#ff8000" strokeWidth="22" fill="none" strokeLinecap="round" />
          {/* Right arm — typing animation */}
          <motion.g
            animate={{ rotate: [0, -4, 0, -2, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ originX: "220px", originY: "280px" }}
          >
            <path d="M220 280 Q230 305 210 322" stroke="#ff8000" strokeWidth="22" fill="none" strokeLinecap="round" />
            {/* Hand */}
            <circle cx="210" cy="322" r="9" fill="#f5d6b3" />
          </motion.g>
          {/* Left hand */}
          <circle cx="110" cy="322" r="9" fill="#f5d6b3" />

          {/* Blink */}
          <motion.rect
            x="131" y="176" width="22" height="0" fill="#f5d6b3"
            animate={{ height: [0, 0, 0, 0, 0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.85, 0.9, 0.92, 0.96, 1] }}
          />
          <motion.rect
            x="167" y="176" width="22" height="0" fill="#f5d6b3"
            animate={{ height: [0, 0, 0, 0, 0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.85, 0.9, 0.92, 0.96, 1] }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
