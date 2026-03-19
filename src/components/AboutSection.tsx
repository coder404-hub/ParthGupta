"use client";

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="max-w-2xl text-lg text-slate-400 leading-relaxed font-light">
          I'm a college student with a deep passion for building clean, efficient, and scalable web solutions. 
          Currently focused on <span className="text-indigo-400 border-b border-indigo-400/30">Java and C development</span>, 
          I love exploring how complex systems work under the hood. 
          <br /><br />
          Whether it's architecting a backend for a startup or crafting personalized career tools, 
          I aim to bridge the gap between creative design and robust engineering.
        </div>
      </motion.div>
    </section>
  );
}
