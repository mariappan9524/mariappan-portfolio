import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative",
        "mx-auto",
        "max-w-7xl",
        "px-6",
        "sm:px-8",
        "lg:px-10",
        className
      )}
    >
      {children}
    </section>
  );
}