import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { SectionContainer } from "./SectionContainer";
import { Button } from "./ui/button";

export function DecisionSection() {
  return (
    <SectionContainer className="text-center" narrow>
      <FadeIn>
        <SectionHeading
          eyebrow="Ready to compare notes?"
          title="If these are the checks your team cares about, we're ready to talk through them."
          description="Bring your security, procurement, platform, or delivery questions. We'll help you understand what's already in place and where more detail may be useful."
          align="center"
          titleClassName="leading-tight"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button className="bg-white text-black hover:bg-zinc-200" variant="outline">
            Talk through readiness
          </Button>
          <Button className="text-white border-b border-white/30 pb-1 hover:border-white" variant="ghost">
            Keep exploring
          </Button>
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
