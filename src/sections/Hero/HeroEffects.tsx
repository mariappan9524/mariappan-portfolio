import { motion } from "framer-motion";

export default function HeroEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* LEFT CYAN GLOW */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-44
          top-32

          h-[620px]
          w-[620px]

          rounded-full

          bg-cyan-400/20

          blur-[160px]
        "
      />

      {/* RIGHT BLUE GLOW */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 35, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-220px]
          top-24

          h-[520px]
          w-[520px]

          rounded-full

          bg-blue-500/18

          blur-[150px]
        "
      />

      {/* PROFILE SPOTLIGHT */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.85, 0.45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-[14%]
          top-[18%]

          h-[300px]
          w-[300px]

          rounded-full

          bg-cyan-300/18

          blur-[100px]
        "
      />

      {/* TOP LIGHT */}

      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-[-180px]

          h-[450px]
          w-[450px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/10

          blur-[170px]
        "
      />

      {/* SMALL FLOATING GLOW */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-[45%]
          top-[42%]

          h-40
          w-40

          rounded-full

          bg-cyan-400/10

          blur-[80px]
        "
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