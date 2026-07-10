import { FadeIn } from "./FadeIn";
import { SectionContainer } from "./SectionContainer";
import { enterpriseChecks } from "../../data/checks";

export function EnterpriseChecks() {
  return (
    <SectionContainer>
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-normal text-white mb-16 max-w-2xl">
          The checks that happen before the first workshop.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enterpriseChecks.map((check, i) => (
          <FadeIn key={check.title} delay={i * 0.1} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
            <div className="group relative border border-white/10 bg-white/[0.02] p-8 h-full overflow-hidden hover:border-red-900/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-normal text-white mb-4">{check.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">{check.desc}</p>

              <div className="mt-auto pt-6 border-t border-white/10 opacity-60 group-hover:opacity-100 group-hover:text-red-400 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-xs uppercase tracking-wider font-normal">What this helps answer:</p>
                <p className="text-sm mt-2 text-zinc-300">{check.answers.replace('Answers: ', '')}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  );
}
