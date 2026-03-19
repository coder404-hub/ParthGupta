"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const BOOT_SEQUENCE = [
  "Initialize system.... OK",
  "Loading architecture dependencies.... OK",
  "Mounting infrastructure.... OK",
  "Checking database connections.... OK",
  "Starting core modules.... OK",
  "System ready.",
  "> Hi, I'm a Backend Developer.",
  "> I architect and build scalable systems."
];

export default function TerminalHero() {
  const [lines, setLines] = useState<string[]>([]);
  const [typingLine, setTypingLine] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= BOOT_SEQUENCE.length) return;

    const fullText = BOOT_SEQUENCE[currentIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      setTypingLine(fullText.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setLines((prev) => [...prev, fullText]);
          setTypingLine("");
          setCurrentIndex((prev) => prev + 1);
        }, 400); // Wait before next line
      }
    }, 40); // typing speed

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-black border border-circuit rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.1)] relative"
      >
        {/* Terminal Header */}
        <div className="bg-circuit/50 border-b border-circuit px-4 py-2 flex items-center gap-2">
          <Terminal size={16} className="text-neon-cyan" />
          <span className="text-xs text-slate-400 font-medium tracking-widest">system@admin:~</span>
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-600" />
            <div className="w-3 h-3 rounded-full bg-slate-600" />
            <div className="w-3 h-3 rounded-full bg-neon-cyan/80 shadow-[0_0_8px_#00f0ff]" />
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base leading-relaxed h-[350px] overflow-y-auto">
          {lines.map((line, idx) => (
            <div key={idx} className={`${line.startsWith('>') ? 'text-neon-cyan mt-4' : 'text-slate-400'}`}>
              {line}
            </div>
          ))}
          {currentIndex < BOOT_SEQUENCE.length && (
            <div className={`${BOOT_SEQUENCE[currentIndex].startsWith('>') ? 'text-neon-cyan mt-4' : 'text-slate-400'} inline-flex items-center`}>
              {typingLine}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2.5 h-4 bg-neon-cyan ml-1"
              />
            </div>
          )}
          {currentIndex >= BOOT_SEQUENCE.length && (
             <motion.div 
               animate={{ opacity: [1, 0] }} 
               transition={{ repeat: Infinity, duration: 0.8 }}
               className="inline-block w-2.5 h-4 bg-neon-cyan mt-4"
             />
          )}
        </div>
      </motion.div>
    </section>
  );
}
