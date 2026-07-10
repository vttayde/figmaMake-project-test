import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { SectionContainer } from "./SectionContainer";
import { Button } from "./ui/button";
import { proofCases } from "../../data/proofCases";

export function ProofInPractice() {
  return (
    <SectionContainer>
      <SectionHeading
        title="Where readiness has already shown up."
        className="mb-16"
      />
      <Button className="hidden md:inline-flex items-center text-sm text-white hover:text-red-400 transition-colors" variant="ghost">
        View related work <ArrowUpRight className="ml-1 w-4 h-4" />
      </Button>

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

      <Button className="md:hidden mt-8 text-sm text-white border-b border-white/30 pb-1 w-fit hover:bg-white/5" variant="ghost">
        View related work <ArrowUpRight className="ml-1 w-4 h-4" />
      </Button>
    </SectionContainer>
  );
}
