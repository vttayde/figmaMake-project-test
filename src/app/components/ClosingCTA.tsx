import { FadeIn } from "./FadeIn";
import { SectionContainer } from "./SectionContainer";
import { Button } from "./ui/button";

export function ClosingCTA() {
  return (
    <SectionContainer className="text-center pb-20" narrow>
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-normal text-white mb-8">
          Ready before the first workshop.
        </h2>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
          If readiness is part of your decision, we can walk through the proof, process, and the people behind the work.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button className="bg-white text-black hover:bg-zinc-200" variant="outline">
            Talk through readiness
          </Button>
          <Button className="text-white border border-white/20 hover:bg-white/5" variant="ghost">
            Explore our work
          </Button>
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
