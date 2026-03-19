"use client";

import { motion } from 'framer-motion';

const SKILLS = [
  { name: "Java", color: "#ED8B00", type: "Language" },
  { name: "C", color: "#A8B9CC", type: "Language" },
  { name: "GitHub", color: "#181717", type: "VCS" },
  { name: "HTML", color: "#E34F26", type: "Frontend" },
  { name: "CSS", color: "#1572B6", type: "Styling" },
];

export default function TechPulseSkills() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Skills</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -2 }}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center transition-all duration-300 hover:border-indigo-500/20"
            >
              <div className="text-sm font-semibold text-slate-300">
                {skill.name}
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                {skill.type}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
