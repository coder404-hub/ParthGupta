"use client";

import { motion } from 'framer-motion';
import { Database, Server, Cloud, Cpu, Activity, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type Project = {
  id: string;
  name: string;
  description: string;
  nodes: { id: string; label: string; icon: React.ReactNode; type: string }[];
  connections: { from: string; to: string }[];
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Distributed Order System",
    description: "High-throughput order processing using message queues.",
    nodes: [
      { id: "A", label: "Client", icon: <Cpu size={16} />, type: "client" },
      { id: "B", label: "Load Balancer", icon: <Server size={16} />, type: "network" },
      { id: "C", label: "Order Service", icon: <Activity size={16} />, type: "compute" },
      { id: "D", label: "PostgreSQL", icon: <Database size={16} />, type: "db" },
    ],
    connections: [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "C", to: "D" }
    ]
  },
  {
    id: "p2",
    name: "Real-time Notification Engine",
    description: "WebSocket-based service for instant user alerts.",
    nodes: [
      { id: "A", label: "Frontend", icon: <Cpu size={16} />, type: "client" },
      { id: "B", label: "API Gateway", icon: <Cloud size={16} />, type: "network" },
      { id: "C", label: "Redis Pub/Sub", icon: <Database size={16} />, type: "db" },
      { id: "D", label: "Worker", icon: <Server size={16} />, type: "compute" },
    ],
    connections: [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "C", to: "D" },
      { from: "D", to: "A" }
    ]
  }
];

export default function ArchitectureGallery() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto relative z-10" id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
        className="space-y-16"
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-200">/architecture/gallery</h2>
          <div className="h-[1px] flex-1 bg-circuit" />
        </div>

        {PROJECTS.map((project, idx) => (
          <ProjectDiagram key={project.id} project={project} index={idx} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectDiagram({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="group relative border border-circuit rounded-xl bg-obsidian/80 backdrop-blur-sm p-6 overflow-hidden transition-colors hover:border-neon-cyan/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-neon-cyan mb-2 group-hover:text-shadow-neon transition-all">{project.name}</h3>
        <p className="text-slate-400 text-sm">{project.description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 py-8 relative">
        {project.nodes.map((node, i) => (
          <div key={node.id} className="flex items-center">
            <motion.div 
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border border-circuit bg-black/50 z-10 relative
                ${isHovered ? 'shadow-[0_0_15px_rgba(0,240,255,0.2)] border-neon-cyan/30' : ''}
                transition-all duration-300
              `}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className={isHovered ? "text-neon-cyan" : "text-slate-500"}>
                {node.icon}
              </div>
              <span className="text-xs text-slate-300 font-medium whitespace-nowrap">{node.label}</span>
            </motion.div>

            {/* Connection Line */}
            {i < project.nodes.length - 1 && (
              <div className="w-12 sm:w-20 flex items-center justify-center relative -mx-2 z-0">
                <div className={`h-[1px] w-full bg-circuit absolute ${isHovered ? 'opacity-20' : ''}`} />
                {isHovered && (
                  <motion.div 
                    initial={{ left: 0, opacity: 0 }}
                    animate={{ left: "100%", opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute z-10 text-neon-cyan"
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
