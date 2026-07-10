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
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-['Lexend',sans-serif] font-light selection:bg-red-900/30 overflow-x-hidden">
      
      {/* Navigation (Mock) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-white font-normal text-lg tracking-wide">InfoBeans</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Trust</a>
            <a href="#" className="hover:text-white transition-colors">Checks</a>
            <a href="#" className="hover:text-white transition-colors">Delivery</a>
            <a href="#" className="hover:text-white transition-colors">People</a>
          </div>
          <button className="text-sm font-normal text-white border border-white/20 px-5 py-2 hover:bg-white/5 transition-colors">
            Get in touch
          </button>
        </div>
      </nav>

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
