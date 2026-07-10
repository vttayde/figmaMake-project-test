import { FadeIn } from "./FadeIn";
import { SectionContainer } from "./SectionContainer";
import { readinessStats } from "../../data/stats";

export function StatsGrid() {
  return (
    <SectionContainer>
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {readinessStats.map((item) => (
            <div
              key={item.title}
              className="bg-[#0a0a0a] p-8 md:p-10 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors"
            >
              <h3 className="text-3xl font-normal text-white mb-6">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
