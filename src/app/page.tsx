import DataFlowBackground from "@/components/DataFlowBackground";
import TerminalHero from "@/components/TerminalHero";
import ArchitectureGallery from "@/components/ArchitectureGallery";
import TechPulseSkills from "@/components/TechPulseSkills";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Layer */}
      <DataFlowBackground />

      {/* Content Layers with Scan-Line Reveal */}
      <div className="relative z-10">
        <TerminalHero />
        <ArchitectureGallery />
        <TechPulseSkills />
        <ContactSection />
      </div>

      {/* Global CSS animation for the radar scan-line effect across the page */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-overlay">
        <div className="w-full h-32 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent animate-[scanline_8s_linear_infinite]" />
      </div>
    </main>
  );
}
