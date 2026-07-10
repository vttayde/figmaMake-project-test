import { FadeIn } from "./FadeIn";

export function DecisionSection() {
  return (
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
  );
}
