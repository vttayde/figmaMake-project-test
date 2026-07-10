import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ProofTags } from './components/ProofTags';
import { StatsGrid } from './components/StatsGrid';
import { EnterpriseChecks } from './components/EnterpriseChecks';
import { DecisionSection } from './components/DecisionSection';
import { DeliveryTimeline } from './components/DeliveryTimeline';
import { FadeIn } from './components/FadeIn';
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

        {/* 6. Depth Across Practices */}
        <section className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-16">
              Different practices.<br />One delivery rhythm.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              { title: 'Design & Experience', desc: 'Research, UX, visual systems, product thinking, and experience transformation.' },
              { title: 'AI & Automation', desc: 'AI-assisted workflows, internal tools, copilots, automation, and operational intelligence.' },
              { title: 'Enterprise Platforms', desc: 'ServiceNow, Salesforce, portals, workflows, integrations, and platform modernization.' },
              { title: 'Engineering & Cloud', desc: 'Custom development, scalable architecture, cloud systems, APIs, and delivery execution.' }
            ].map((practice, i) => (
              <FadeIn key={i} className="bg-[#0a0a0a] p-10 md:p-16 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h3 className="text-2xl font-normal text-white mb-4 relative z-10">{practice.title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-sm relative z-10">{practice.desc}</p>
                {/* Abstract line visuals */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                  <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-[0.5]">
                    <path d="M0,50 L100,50 M50,0 L50,100 M25,25 L75,75 M25,75 L75,25" />
                  </svg>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* 7. The People Behind the Work */}
        <section className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-6 max-w-2xl">
              The team you meet is the team that stays close.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mb-16">
              Enterprise work needs continuity. Strategy, design, engineering, and delivery stay connected from the first conversation to handoff.
            </p>
          </FadeIn>

          <div className="flex overflow-x-auto pb-8 hide-scrollbar space-x-6 snap-x">
            {[
              { role: 'Strategy Lead', exp: '15+ yrs', detail: 'Aligns business goals with technical possibilities.' },
              { role: 'Design Lead', exp: '12+ yrs', detail: 'Ensures usability and adoption across complex systems.' },
              { role: 'Engineering Lead', exp: '14+ yrs', detail: 'Architects for scale, security, and maintainability.' },
              { role: 'Delivery Lead', exp: '10+ yrs', detail: 'Maintains cadence, clears blockers, and manages risk.' },
              { role: 'Platform Architect', exp: '15+ yrs', detail: 'Navigates enterprise ecosystems and governance.' }
            ].map((person, i) => (
              <FadeIn key={i} delay={i * 0.1} className="snap-start shrink-0 w-[280px]">
                <div className="p-6 border border-white/10 bg-white/[0.02] h-full">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 mb-6 flex items-center justify-center text-xs text-zinc-500 font-normal">
                    {person.exp}
                  </div>
                  <h3 className="text-lg font-normal text-white mb-2">{person.role}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{person.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* 8. Proof in Practice */}
        <section className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-5xl font-normal text-white max-w-xl">
                Where readiness has already shown up.
              </h2>
              <button className="hidden md:flex items-center text-sm font-normal text-white hover:text-red-400 transition-colors">
                View related work <ArrowUpRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ServiceNow transformation', desc: 'Improved employee self-service, reduced support dependency, and modernized the HRSD experience.' },
              { title: 'AI workplace tools', desc: 'Designed internal AI workflows to improve speed, clarity, and decision support.' },
              { title: 'Enterprise product modernization', desc: 'Reworked legacy platforms into clearer, more scalable digital experiences.' }
            ].map((caseStudy, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group block border border-white/10 bg-[#0a0a0a] p-8 hover:bg-white/[0.03] transition-colors cursor-pointer h-full flex flex-col">
                  <h3 className="text-xl font-normal text-white mb-4 group-hover:text-red-400 transition-colors">{caseStudy.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{caseStudy.desc}</p>
                  <div className="flex items-center text-xs text-white uppercase tracking-wider font-normal mt-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Explore <ArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <button className="md:hidden mt-8 flex items-center text-sm font-normal text-white border-b border-white/30 pb-1 w-fit">
            View related work <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
        </section>

        <SectionDivider />

        {/* 9. Closing CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center pb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-normal text-white mb-8">
              Ready before the first workshop.
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
              If readiness is part of your decision, we can walk through the proof, process, and the people behind the work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-black px-8 py-4 font-normal hover:bg-zinc-200 transition-colors">
                Talk through readiness
              </button>
              <button className="text-white border border-white/20 px-8 py-4 font-normal hover:bg-white/5 transition-colors">
                Explore our work
              </button>
            </div>
          </FadeIn>
        </section>
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
