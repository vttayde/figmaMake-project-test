import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { proofCases } from "../../data/proofCases";

export function ProofInPractice() {
  return (
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
        {proofCases.map((caseStudy, i) => (
          <FadeIn key={caseStudy.title} delay={i * 0.1}>
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
  );
}
