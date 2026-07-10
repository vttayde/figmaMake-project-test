import { FadeIn } from "./FadeIn";
import { deliverySteps } from "../../data/deliverySteps";

export function DeliveryTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-normal text-white mb-20 max-w-2xl">
          Readiness is not a document. It shows up in delivery.
        </h2>
      </FadeIn>

      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-20 pb-8">
        {deliverySteps.map((step, i) => (
          <FadeIn key={step.phase} delay={i * 0.2}>
            <div className="relative pl-12 md:pl-20">
              <div className="absolute top-1.5 -left-[5px] w-2.5 h-2.5 rounded-full bg-red-600 border-4 border-[#0a0a0a] box-content" />
              <div className="absolute top-8 left-0 w-8 md:w-12 h-px bg-white/10" />
              <h3 className="text-2xl font-normal text-white mb-4">{step.phase}</h3>
              <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
