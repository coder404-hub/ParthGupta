"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const BOOT_SEQUENCE = [
  "Initialize system.... OK",
  "Loading student_profile: Parth Gupta.... OK",
  "Status: Currently exploring the depths of Code & College life.",
  "Mounting core_skills.... OK",
  "System ready.",
  "> Hi, I'm Parth Gupta.",
  "> I'm a student developer curious about how the digital world is built.",
  "> Learning everyday, one line of code at a time."
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative"
      >
        {/* Terminal Header */}
        <div className="bg-white/5 px-6 py-4 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase ml-2">Session: zsh — 80x24</span>
        </div>

        {/* Terminal Body */}
        <div className="p-8 font-mono text-sm leading-relaxed min-h-[300px] overflow-y-auto">
          {lines.map((line, idx) => (
            <div key={idx} className={`${line.startsWith('>') ? 'text-indigo-400 mt-6 font-semibold' : 'text-slate-500'}`}>
              {line}
            </div>
          ))}
          {currentIndex < BOOT_SEQUENCE.length && (
            <div className={`${BOOT_SEQUENCE[currentIndex].startsWith('>') ? 'text-indigo-400 mt-6 font-semibold' : 'text-slate-500'} inline-flex items-center`}>
              {typingLine}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-1.5 h-4 bg-indigo-500/50 ml-2"
              />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
