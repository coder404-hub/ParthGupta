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
    <section className="py-20 px-6 max-w-5xl mx-auto relative z-10" id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-200">/tech/pulse</h2>
          <div className="h-[1px] flex-1 bg-circuit" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              className="relative group p-4 border border-circuit rounded-lg bg-obsidian text-center overflow-hidden flex flex-col items-center justify-center h-32"
            >
               {/* Heartbeat pulse animation behind the text */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + Math.random(), // slight random offset for organic feel
                  ease: "easeInOut"
                }}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full blur-xl"
                style={{ backgroundColor: skill.color }}
              />

              <div className="relative z-10">
                <div className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </div>
                <div className="text-xs text-slate-500 font-mono mt-2">
                  [{skill.type}]
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
