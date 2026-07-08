import { motion } from "framer-motion";
import usePerformanceMode from "../../hooks/usePerformanceMode";

export default function HeroEffects() {
  const { isMobile, enableGlowAnimation } = usePerformanceMode();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* LEFT CYAN GLOW */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={
          enableGlowAnimation
            ? {
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.08, 1],
              }
            : undefined
        }
        transition={
          enableGlowAnimation
            ? {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`
absolute
-left-44
top-32

h-[620px]
w-[620px]

rounded-full

bg-cyan-400/20

${isMobile ? "blur-[70px]" : "blur-[160px]"}
`}
      />

      {/* RIGHT BLUE GLOW */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={
          enableGlowAnimation
            ? {
                x: [0, -40, 0],
                y: [0, 35, 0],
                scale: [1, 1.1, 1],
              }
            : undefined
        }
        transition={
          enableGlowAnimation
            ? {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`
absolute
right-[-220px]
top-24

h-[520px]
w-[520px]

rounded-full

bg-blue-500/18

${isMobile ? "blur-[70px]" : "blur-[150px]"}
`}
      />

      {/* PROFILE SPOTLIGHT */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={
          enableGlowAnimation
            ? {
                scale: [1, 1.12, 1],
                opacity: [0.45, 0.85, 0.45],
              }
            : undefined
        }
        transition={
          enableGlowAnimation
            ? {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`
absolute

right-[14%]
top-[18%]

h-[300px]
w-[300px]

rounded-full

bg-cyan-300/18

${isMobile ? "blur-[45px]" : "blur-[100px]"}
`}
      />

      {/* TOP LIGHT */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={
          enableGlowAnimation
            ? {
                y: [0, 25, 0],
                opacity: [0.2, 0.4, 0.2],
              }
            : undefined
        }
        transition={
          enableGlowAnimation
            ? {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`
absolute

left-1/2
top-[-180px]

h-[450px]
w-[450px]

-translate-x-1/2

rounded-full

bg-cyan-500/10

${isMobile ? "blur-[70px]" : "blur-[170px]"}
`}
      />

      {/* SMALL FLOATING GLOW */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={
          enableGlowAnimation
            ? {
                x: [0, 25, 0],
                y: [0, -25, 0],
                scale: [1, 1.15, 1],
              }
            : undefined
        }
        transition={
          enableGlowAnimation
            ? {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`
absolute

left-[45%]
top-[42%]

h-40
w-40

rounded-full

bg-cyan-400/10

${isMobile ? "blur-[35px]" : "blur-[80px]"}
`}
      />

      {/* BOTTOM FADE */}

      <div
        className="
absolute
inset-x-0
bottom-0

h-52

bg-gradient-to-t

from-slate-950/80
to-transparent
"
      />
    </div>
  );
}