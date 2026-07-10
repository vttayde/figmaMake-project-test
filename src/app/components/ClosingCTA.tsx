import { FadeIn } from "./FadeIn";

export function ClosingCTA() {
  return (
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
  );
}
