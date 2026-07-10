import { FadeIn } from "./FadeIn";
import { cn } from "./ui/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <FadeIn>
      <div
        className={cn(
          "max-w-2xl",
          align === "center" ? "mx-auto text-center" : "",
          className,
        )}
      >
        {eyebrow ? (
          <span className="text-xs tracking-[0.2em] text-zinc-500 font-normal uppercase mb-6 block">
            {eyebrow}
          </span>
        ) : null}

        <h2 className={cn("text-3xl md:text-5xl font-normal text-white mb-8", titleClassName)}>
          {title}
        </h2>

        {description ? (
          <p className={cn("text-lg text-zinc-400 mb-12 max-w-2xl", descriptionClassName)}>
            {description}
          </p>
        ) : null}
      </div>
    </FadeIn>
  );
}
