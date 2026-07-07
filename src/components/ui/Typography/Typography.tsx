import type { ReactNode } from "react";

type Variant =
  | "hero"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "caption";

interface TypographyProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variants = {
  hero: "text-6xl md:text-7xl font-bold tracking-tight",
  h1: "text-5xl font-bold",
  h2: "text-4xl font-bold",
  h3: "text-2xl font-semibold",
  body: "text-lg text-slate-400",
  caption: "text-sm text-slate-500",
};

export default function Typography({
  children,
  variant = "body",
  className = "",
}: TypographyProps) {
  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  );
}