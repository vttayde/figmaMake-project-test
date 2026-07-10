import * as React from "react";
import { cn } from "./ui/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function SectionContainer({
  children,
  className,
  narrow = false,
}: SectionContainerProps) {
  return (
    <section className={cn(`mx-auto px-6 ${narrow ? "max-w-4xl" : "max-w-7xl"}`, className)}>
      {children}
    </section>
  );
}
