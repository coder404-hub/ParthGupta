"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative pt-20">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
        
        {/* Profile Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-shrink-0 relative"
        >
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-full border border-indigo-500/20 blur-[1px]" />
          <div className="absolute -inset-1 rounded-full border border-white/10" />
          
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative bg-slate-900 border-2 border-slate-800 shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="Parth Gupta Profile"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Text Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-2xl"
        >
          <div className="space-y-2">
            <h2 className="text-indigo-400 font-medium tracking-widest uppercase text-sm">
              Software Engineer
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Parth Gupta
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            I build scalable backend systems and craft robust digital applications. passion driven 
            by a curiosity to understand how complex systems operate under the hood. 
            Learning everyday, one line of code at a time.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-4 flex gap-4"
          >
            <MagneticButton>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors block"
              >
                View Projects
              </a>
            </MagneticButton>
            <MagneticButton>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors block"
              >
                Contact Me
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
