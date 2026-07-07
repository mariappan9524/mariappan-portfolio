import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.15,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        top-0
        left-0

        z-[9999]

        h-[3px]
        w-full

        origin-left

        bg-gradient-to-r
        from-cyan-400
        via-sky-400
        to-blue-500

        shadow-[0_0_12px_rgba(34,211,238,.8)]
      "
    />
  );
}