import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCards from "@/components/ProjectCards";
import TechPulseSkills from "@/components/TechPulseSkills";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-obsidian selection:bg-indigo-500/30">
      {/* Subtle Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full mb-24">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectCards />
        <TechPulseSkills />
        <ContactSection />
      </div>
    </main>
  );
}
