"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "Errnd",
    description: "A startup-ready platform for posting tasks and localized service exchange. Features real-time task tracking and secure user authentication.",
    tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    link: "https://github.com/coder404-hub/",
  },
  {
    title: "Career Recommender",
    description: "AI-driven career discovery platform with personalized roadmaps and resume analysis to help students find their ideal paths.",
    tech: ["AI/ML", "Next.js", "Vercel Edge", "Tailwind CSS"],
    link: "https://career-recomender-o33h.vercel.app/",
  },
  {
    title: "Sewadar Insurance",
    description: "Professional insurance marketing portal with real-time consultation features and lead management integration.",
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API", "Lucide Icons"],
    link: "https://sewadarinsurancemarketing.vercel.app/",
  }
];

export default function ProjectCards() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">Projects</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wide">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
