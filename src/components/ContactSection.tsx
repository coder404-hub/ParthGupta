"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">Connect</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center space-y-4">
             <div className="text-indigo-400 font-medium tracking-wide uppercase text-xs">Email</div>
             <button 
               onClick={() => {
                 navigator.clipboard.writeText("parthgupta@example.com");
                 setCopied(true);
                 setTimeout(() => setCopied(false), 2000);
               }}
               className="text-slate-400 hover:text-white transition-colors text-sm font-light"
             >
               {copied ? "Copied!" : "parthgupta@example.com"}
             </button>
          </div>

          <a 
            href="https://github.com/coder404-hub/" 
            target="_blank" 
            rel="noreferrer"
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-indigo-500/20 transition-all group"
          >
             <div className="text-indigo-400 font-medium tracking-wide uppercase text-xs group-hover:text-indigo-300 transition-colors">GitHub</div>
             <div className="text-slate-400 text-sm font-light group-hover:text-slate-300 transition-colors">@coder404-hub</div>
          </a>

          <a 
            href="https://www.linkedin.com/in/parth-gupta-a7a230379/" 
            target="_blank" 
            rel="noreferrer"
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-indigo-500/20 transition-all group"
          >
             <div className="text-indigo-400 font-medium tracking-wide uppercase text-xs group-hover:text-indigo-300 transition-colors">LinkedIn</div>
             <div className="text-slate-400 text-sm font-light group-hover:text-slate-300 transition-colors">@parth-gupta</div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
