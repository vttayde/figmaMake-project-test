import { HeroSection } from './components/HeroSection';
import { ProofTags } from './components/ProofTags';
import { StatsGrid } from './components/StatsGrid';
import { EnterpriseChecks } from './components/EnterpriseChecks';
import { DecisionSection } from './components/DecisionSection';
import { DeliveryTimeline } from './components/DeliveryTimeline';
import { PracticesGrid } from './components/PracticesGrid';
import { TeamSection } from './components/TeamSection';
import { ProofInPractice } from './components/ProofInPractice';
import { ClosingCTA } from './components/ClosingCTA';
import { NavBar } from './components/NavBar';
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-['Lexend',sans-serif] font-light selection:bg-red-900/30 overflow-x-hidden">
      <NavBar />

      <main className="pt-32 pb-24">
        <HeroSection />
        <ProofTags />
        <SectionDivider />
        <StatsGrid />
        <SectionDivider />
        <EnterpriseChecks />
        <SectionDivider />
        <DecisionSection />
        <SectionDivider />
        <DeliveryTimeline />
        <SectionDivider />
        <PracticesGrid />
        <SectionDivider />
        <TeamSection />
        <SectionDivider />
        <ProofInPractice />
        <SectionDivider />
        <ClosingCTA />
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
