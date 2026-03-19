"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  {
    year: "2024 - Present",
    title: "Software Engineering Intern",
    company: "Freelance / Startups",
    description: "Building scalable web applications, designing RESTful APIs, and implementing minimal, responsive frontend interfaces.",
  },
  {
    year: "2025 - 2029",
    title: "Bachelor of Technology",
    company: "University / College",
    description: "Majoring in Computer Science. Core focus on Data Structures, Algorithms, C/C++, and Full-Stack Web Development.",
  },
  {
    year: "2023 - 2024",
    title: "Higher Secondary Education",
    company: "High School",
    description: "Graduated with honors. Developed a strong foundation in Mathematics and early programming concepts.",
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">Timeline</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-4">
          {TIMELINE.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h3 className="text-xl font-semibold text-white tracking-wide">{item.title}</h3>
                <span className="text-indigo-400 text-sm font-mono">{item.year}</span>
              </div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-3">
                {item.company}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
