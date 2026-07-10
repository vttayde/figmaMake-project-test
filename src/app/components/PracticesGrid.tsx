import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { SectionContainer } from "./SectionContainer";
import { practices } from "../../data/practices";

export function PracticesGrid() {
  return (
    <SectionContainer>
      <SectionHeading
        title={"Different practices.\nOne delivery rhythm."}
        titleClassName="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {practices.map((practice, i) => (
          <FadeIn key={practice.title} className="bg-[#0a0a0a] p-10 md:p-16 relative group overflow-hidden">
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
    </SectionContainer>
  );
}
