import { motion } from "framer-motion";
import { useMemo } from "react";

export default function HeroParticles() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const stars = useMemo(
    () =>
      Array.from({ length: isMobile ? 18 : 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      })),
    [isMobile]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-cyan-200 will-change-transform"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            boxShadow: isMobile
              ? "0 0 6px rgba(34,211,238,.45)"
              : `
                  0 0 6px rgba(255,255,255,.8),
                  0 0 12px rgba(34,211,238,.6)
                `,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.85, 1.35, 0.85],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}