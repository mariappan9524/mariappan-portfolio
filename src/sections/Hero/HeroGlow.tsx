import { motion } from "framer-motion";
export default function HeroGlow() {
    
  return (
    <>
      {/* Large Cyan Glow */}
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
        className="
          absolute

          right-24
          top-16

          h-[520px]
          w-[520px]

          rounded-full

          bg-cyan-500/12

          blur-[140px]
        "
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [10, -10, 10],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-0
          top-32

          h-[420px]
          w-[420px]

          rounded-full

          bg-blue-500/10

          blur-[120px]
        "
      />
    </>
  );
}