import { motion } from "framer-motion";
import { useAboutParallax } from "./AboutParallax";

export default function AboutGlow() {
  const { x, y } = useAboutParallax();

  return (
    <>
      {/* Left Cyan Glow */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [-20, 20, -20],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
        className="
          absolute

          -left-40
          top-16

          sm:h-[420px]
          sm:w-[420px]

          lg:-left-56
          lg:h-[560px]
          lg:w-[560px]

          h-[340px]
          w-[340px]

          rounded-full

          bg-cyan-500/10

          blur-[140px]
        "
      />

      {/* Right Blue Glow */}
      <motion.div
        animate={{
          x: [25, -25, 25],
          y: [15, -15, 15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate(${-x}px, ${-y}px)`,
        }}
        className="
          absolute

          -right-40
          bottom-0

          sm:h-[420px]
          sm:w-[420px]

          lg:-right-56
          lg:h-[540px]
          lg:w-[540px]

          h-[340px]
          w-[340px]

          rounded-full

          bg-blue-500/10

          blur-[150px]
        "
      />

      {/* Center Accent Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-1/2

          h-[320px]
          w-[320px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/10

          blur-[120px]
        "
      />
    </>
  );
}