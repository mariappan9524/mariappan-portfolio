import { motion } from "framer-motion";

export default function HeroOrbs() {
  return (
    <>
      {/* Cyan Orb */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-25, 25, -25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          right-40

          h-[260px]
          w-[260px]

          rounded-full

          bg-cyan-400/5

          blur-[100px]
        "
      />

      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-10

          h-[320px]
          w-[320px]

          rounded-full

          bg-blue-500/5

          blur-[120px]
        "
      />

      {/* Purple Accent */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          right-72

          h-[180px]
          w-[180px]

          rounded-full

          bg-violet-500/4

          blur-[90px]
        "
      />
    </>
  );
}