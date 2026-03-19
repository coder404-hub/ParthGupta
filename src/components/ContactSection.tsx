"use client";

import { motion } from 'framer-motion';
import { Copy, Terminal, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto relative z-10" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-200">/api/v1/contact</h2>
          <div className="h-[1px] flex-1 bg-circuit" />
        </div>

        <div className="bg-obsidian border border-circuit rounded-lg overflow-hidden shadow-lg">
          {/* Mock API Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-circuit bg-black/40">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 text-xs font-bold bg-green-900/40 text-green-400 rounded">POST</span>
              <span className="text-sm font-mono text-slate-300">/message/send</span>
            </div>
            <div className="text-xs text-slate-500 font-mono flex items-center gap-1">
              <Terminal size={14} /> REST API
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-circuit">
            {/* Request Body Area wrapper */}
            <div className="bg-obsidian p-6">
              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">Request Headers</h3>
              <div className="space-y-2 font-mono text-sm mb-8">
                <div className="flex"><span className="text-slate-400 w-24">Content-Type</span><span className="text-neon-cyan">application/json</span></div>
                <div className="flex"><span className="text-slate-400 w-24">Authorization</span><span className="text-neon-cyan">Bearer your_token</span></div>
              </div>

              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">Endpoints</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded border border-circuit bg-black/50 hover:border-slate-700 transition-colors">
                  <span className="text-sm font-mono text-slate-300">Email</span>
                  <button 
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-neon-cyan transition-colors"
                  >
                    {copied ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-circuit bg-black/50 hover:border-slate-700 transition-colors block cursor-pointer"
                >
                  <span className="text-sm font-mono text-slate-300">GitHub</span>
                  <span className="text-neon-cyan text-xs">external_link↗</span>
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-circuit bg-black/50 hover:border-slate-700 transition-colors block cursor-pointer"
                >
                  <span className="text-sm font-mono text-slate-300">LinkedIn</span>
                  <span className="text-neon-cyan text-xs">external_link↗</span>
                </a>
              </div>
            </div>

            {/* Request Body Code Sample */}
            <div className="bg-[#0a0a0a] p-6 relative">
              <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">Example Payload</h3>
              <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
{`{
  "sender": {
    "name": "string",
    "email": "string"
  },
  "message": "Looking for a backend engineer...",
  "urgent": true
}`}
              </pre>

              <div className="absolute bottom-6 left-6 right-6">
                 <button className="w-full py-3 bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan font-mono text-sm rounded transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                   execute_request()
                 </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
