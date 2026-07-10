import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { SectionContainer } from "./SectionContainer";
import { teamMembers } from "../../data/team";

export function TeamSection() {
  return (
    <SectionContainer>
      <SectionHeading
        title="The team you meet is the team that stays close."
        description="Enterprise work needs continuity. Strategy, design, engineering, and delivery stay connected from the first conversation to handoff."
      />

      <div className="flex overflow-x-auto pb-8 hide-scrollbar space-x-6 snap-x">
        {teamMembers.map((person, i) => (
          <FadeIn key={person.role} delay={i * 0.1} className="snap-start shrink-0 w-[280px]">
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
    </SectionContainer>
  );
}
