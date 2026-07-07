import { motion } from "framer-motion";

export default function HeroMeteor() {
  return (
    <motion.div
      initial={{
        x: 250,
        y: -80,
        opacity: 0,
      }}
      animate={{
        x: [-80, -420],
        y: [0, 180],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 14,
        ease: "easeOut",
      }}
      className="
        absolute
        top-20
        right-24
        pointer-events-none
        z-0
      "
    >
      {/* Tail */}
      <div
        className="
          absolute
          h-[2px]
          w-20
          -rotate-45
          rounded-full

          bg-gradient-to-r
          from-cyan-300
          via-cyan-200
          to-transparent

          blur-[1px]
        "
      />

      {/* Head */}
      <div
        className="
          absolute
          -left-1
          -top-1

          h-3
          w-3

          rounded-full

          bg-cyan-200

          shadow-[0_0_12px_rgba(103,232,249,.9)]
        "
      />
    </motion.div>
  );
}