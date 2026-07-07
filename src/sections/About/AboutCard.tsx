import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

interface AboutCardProps {
  value: string;
  title: string;
  icon: ReactNode;
  subtitle?: string;
  large?: boolean;
  wide?: boolean;
}

export default function AboutCard({
  value,
  title,
  icon,
  subtitle,
  large = false,
  wide = false,
}: AboutCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={clsx(
        "group",
        "relative",
        "overflow-hidden",
        "rounded-3xl",
        "border",
        "border-white/10",
        "bg-white/[0.03]",
        "backdrop-blur-xl",
        "transition-all",
        "duration-300",
        "hover:border-cyan-400/30",
        "hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]",
        large ? "p-8" : "p-6",
        wide && "w-full"
      )}
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-500/5
          to-blue-500/5
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
          text-cyan-400
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* Value */}
      <h3
        className={clsx(
          "relative",
          "z-10",
          "font-bold",
          "text-white",
          large ? "text-5xl" : "text-3xl"
        )}
      >
        {value}
      </h3>

      {/* Title */}
      <p
        className={clsx(
          "relative",
          "z-10",
          "mt-2",
          "font-medium",
          "text-white",
          large && "text-lg"
        )}
      >
        {title}
      </p>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="
            relative
            z-10
            mt-3
            leading-7
            text-slate-400
          "
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}