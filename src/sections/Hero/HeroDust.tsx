import { motion } from "framer-motion";

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 18 + 18,
  delay: Math.random() * 10,
}));

export default function HeroDust() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            background:
              "radial-gradient(circle, rgba(103,232,249,.8), rgba(103,232,249,0))",
            filter: "blur(1px)",
          }}
          animate={{
            y: [-20, -160],
            x: [0, 8, -6, 0],
            opacity: [0, 0.15, 0.25, 0.15, 0],
            scale: [0.6, 1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}