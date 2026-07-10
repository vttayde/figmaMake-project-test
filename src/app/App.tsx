import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Check, Activity, ShieldCheck, LayoutGrid, Users, Settings, Database, Server, GitMerge } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Divider = () => (
  <div className="w-full h-px bg-white/5 my-24 md:my-32" />
);

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
        {/* 1. Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-20 md:pt-32 relative">
          {/* Abstract Grid Background Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-[#0a0a0a]/0 to-transparent pointer-events-none" />
          
          <FadeIn>
            <div className="inline-flex items-center space-x-3 mb-8">
              <span className="w-8 h-px bg-red-600"></span>
              <span className="text-xs tracking-[0.2em] text-zinc-300 font-normal uppercase">Enterprise Readiness</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-normal leading-[1.1] max-w-4xl tracking-tight">
              Enterprise readiness,<br />before you have to ask.
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed text-zinc-400">
              Before a project begins, enterprise teams are already looking for proof: security, scale, governance, delivery maturity, and the people who will actually do the work.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-black px-8 py-4 font-normal hover:bg-zinc-200 transition-colors flex items-center group">
                Talk through readiness
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>

          {/* Floating Proof Tags */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Security Approved', icon: ShieldCheck },
              { label: 'Procurement Ready', icon: Settings },
              { label: 'Scale Tested', icon: Server },
              { label: 'Governance Aligned', icon: GitMerge }
            ].map((tag, i) => (
              <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                <div className="flex items-center space-x-3 border border-white/10 px-4 py-3 bg-white/[0.02]">
                  <tag.icon className="w-4 h-4 text-red-500/80" />
                  <span className="text-sm text-zinc-300">{tag.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <Divider />

        {/* 2. Readiness Snapshot */}
        <section className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {[
                { title: '20+ years', desc: 'Building enterprise technology with long-term client partnerships.' },
                { title: 'Global delivery', desc: 'Teams structured for distributed stakeholders, time zones, and delivery cycles.' },
                { title: 'Cross-functional', desc: 'Design, engineering, AI, data, and platform teams working together.' },
                { title: 'Enterprise platforms', desc: 'Experience across ServiceNow, Salesforce, cloud, data, AI, and custom digital products.' }
              ].map((item, i) => (
                <div key={i} className="bg-[#0a0a0a] p-8 md:p-10 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
                  <h3 className="text-3xl font-normal text-white mb-6">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <Divider />

        {/* 3. Enterprise Checks */}
        <section className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-16 max-w-2xl">
              The checks that happen before the first workshop.
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Security & Compliance",
                desc: "Policies, controls, certifications, and practices that help security teams move faster.",
                answers: "Answers: Data handling, ISO certs, pentesting routines, and access controls."
              },
              {
                title: "Delivery Governance",
                desc: "Clear ownership, checkpoints, documentation, escalation paths, and visible decision-making.",
                answers: "Answers: Who owns what, how risks are flagged, and reporting cadences."
              },
              {
                title: "Team Stability",
                desc: "Experienced people, role clarity, and continuity from discovery through delivery.",
                answers: "Answers: Resource allocation, senior involvement, and churn mitigation."
              },
              {
                title: "Platform Maturity",
                desc: "Practical understanding of enterprise systems, integrations, governance, and long-term maintainability.",
                answers: "Answers: Architecture standards, tech debt management, and deployment strategies."
              },
              {
                title: "Procurement Confidence",
                desc: "The information buyers usually need, organized before conversations slow down.",
                answers: "Answers: MSA structures, pricing transparency, and vendor onboarding requirements."
              }
            ].map((check, i) => (
              <FadeIn key={i} delay={i * 0.1} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="group relative border border-white/10 bg-white/[0.02] p-8 h-full overflow-hidden hover:border-red-900/50 transition-colors">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-normal text-white mb-4">{check.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">{check.desc}</p>
                  
                  {/* Hover state content */}
                  <div className="mt-auto pt-6 border-t border-white/10 opacity-60 group-hover:opacity-100 group-hover:text-red-400 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-xs uppercase tracking-wider font-normal">What this helps answer:</p>
                    <p className="text-sm mt-2 text-zinc-300">{check.answers.replace('Answers: ', '')}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <Divider />

        {/* 4. Decision Point */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-xs tracking-[0.2em] text-zinc-500 font-normal uppercase mb-6 block">Ready to compare notes?</span>
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-8 leading-tight">
              If these are the checks your team cares about, we're ready to talk through them.
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
              Bring your security, procurement, platform, or delivery questions. We'll help you understand what's already in place and where more detail may be useful.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-black px-8 py-4 font-normal hover:bg-zinc-200 transition-colors">
                Talk through readiness
              </button>
              <button className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                Keep exploring
              </button>
            </div>
          </FadeIn>
        </section>

        <Divider />

        {/* 5. How Readiness Shows Up in Delivery */}
        <section className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-20 max-w-2xl">
              Readiness is not a document. It shows up in delivery.
            </h2>
          </FadeIn>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-20 pb-8">
            {[
              { phase: 'Before the work starts', desc: 'We align on goals, constraints, risks, stakeholders, platform state, and approval needs.' },
              { phase: 'During delivery', desc: 'Design, engineering, product, and client teams stay aligned through visible decisions and structured reviews.' },
              { phase: 'After launch', desc: 'Handoff, adoption, documentation, roadmap clarity, and long-term evolution stay part of the plan.' }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="relative pl-12 md:pl-20">
                  <div className="absolute top-1.5 -left-[5px] w-2.5 h-2.5 rounded-full bg-red-600 border-4 border-[#0a0a0a] box-content" />
                  <div className="absolute top-8 left-0 w-8 md:w-12 h-px bg-white/10" />
                  <h3 className="text-2xl font-normal text-white mb-4">{step.phase}</h3>
                  <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <Divider />

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

        <Divider />

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

        <Divider />

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

        <Divider />

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
