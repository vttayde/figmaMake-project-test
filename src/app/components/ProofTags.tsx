import { FadeIn } from "./FadeIn";
import { SectionContainer } from "./SectionContainer";
import { proofTags } from "../../data/proofTags";

export function ProofTags() {
  return (
    <SectionContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
      {proofTags.map((tag, i) => {
        const Icon = tag.icon;
        return (
          <FadeIn key={tag.label} delay={0.2 + i * 0.1}>
            <div className="flex items-center space-x-3 border border-white/10 px-4 py-3 bg-white/[0.02]">
              <Icon className="w-4 h-4 text-red-500/80" />
              <span className="text-sm text-zinc-300">{tag.label}</span>
            </div>
          </FadeIn>
        );
      })}
    </SectionContainer>
  );
}
