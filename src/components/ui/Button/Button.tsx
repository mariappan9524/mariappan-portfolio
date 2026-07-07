import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: `
      bg-gradient-to-r
      from-cyan-500
      via-sky-500
      to-blue-600

      text-white

      shadow-[0_10px_30px_rgba(14,165,233,0.35)]

      hover:shadow-[0_20px_45px_rgba(14,165,233,0.45)]
    `,

    secondary: `
      bg-gradient-to-r
      from-violet-600
      to-indigo-600

      text-white

      shadow-[0_10px_30px_rgba(99,102,241,0.35)]

      hover:shadow-[0_20px_45px_rgba(99,102,241,0.45)]
    `,

    outline: `
      border
      border-white/10

      bg-white/[0.03]
      backdrop-blur-xl

      text-white

      hover:border-cyan-400/40
      hover:bg-cyan-500/[0.05]

      shadow-[0_8px_24px_rgba(0,0,0,0.18)]
      hover:shadow-[0_18px_40px_rgba(34,211,238,0.15)]
    `,
  };

  return (
    <button
      className={clsx(
        `
          group
          relative
          inline-flex
          items-center
          justify-center

          overflow-hidden

          rounded-2xl

          px-8
          py-3.5

          text-sm
          font-semibold
          tracking-wide

          transition-all
          duration-300

          hover:-translate-y-1
          hover:scale-[1.02]

          active:scale-[0.98]

          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400/40
          focus:ring-offset-2
          focus:ring-offset-slate-950
        `,
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}