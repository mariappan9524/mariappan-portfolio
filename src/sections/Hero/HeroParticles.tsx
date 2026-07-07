import { motion } from "framer-motion";

const stars = Array.from({ length: 28 }, (_, i) => ({
  id: i,

  left: Math.random() * 100,

  top: Math.random() * 100,

  size: Math.random() * 3 + 1,

  duration: Math.random() * 4 + 2,

  delay: Math.random() * 5,
}));

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-cyan-200"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,

            boxShadow: `
              0 0 6px rgba(255,255,255,.8),
              0 0 12px rgba(34,211,238,.6)
            `,
          }}
          animate={{
            opacity: [0.15, 1, 0.15],

            scale: [0.8, 1.4, 0.8],
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