import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full mix-blend-difference hidden md:block"
      animate={{
        x: pos.x - (hover ? 24 : 6),
        y: pos.y - (hover ? 24 : 6),
        width: hover ? 48 : 12,
        height: hover ? 48 : 12,
        backgroundColor: "#ff8000",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
    />
  );
}
