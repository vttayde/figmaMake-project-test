import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { heroContent } from "../../data/hero";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 md:pt-32 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-[#0a0a0a]/0 to-transparent pointer-events-none" />

      <FadeIn>
        <div className="inline-flex items-center space-x-3 mb-8">
          <span className="w-8 h-px bg-red-600" />
          <span className="text-xs tracking-[0.2em] text-zinc-300 font-normal uppercase">
            {heroContent.label}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl text-white font-normal leading-[1.1] max-w-4xl tracking-tight whitespace-pre-line">
          {heroContent.heading}
        </h1>
        <p className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed text-zinc-400">
          {heroContent.description}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-white text-black px-8 py-4 font-normal hover:bg-zinc-200 transition-colors flex items-center group">
            {heroContent.buttonText}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
