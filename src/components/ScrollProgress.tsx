"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100] shadow-[0_0_10px_rgba(99,102,241,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
