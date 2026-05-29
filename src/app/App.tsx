import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";
import { Preloader } from "./components/Preloader";
import { Background } from "./components/Background";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [loading]);

  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <AnimatePresence>
        {loading && <Preloader key="pre" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Background />
      <Cursor />
      <Nav />
      <motion.main
        style={{ position: "relative" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: loading ? 0 : 0.1 }}
      >
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}
