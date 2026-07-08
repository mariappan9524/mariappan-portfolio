import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroEffects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* LEFT CYAN GLOW */}

      <motion.div
        style={{ willChange: "transform" }}
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
        className={`
          absolute
          -left-44
          top-32
          h-[620px]
          w-[620px]
          rounded-full
          bg-cyan-400/20
          ${isMobile ? "blur-[90px]" : "blur-[160px]"}
        `}
      />

      {/* RIGHT BLUE GLOW */}

      <motion.div
        style={{ willChange: "transform" }}
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
        className={`
          absolute
          right-[-220px]
          top-24
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-500/18
          ${isMobile ? "blur-[85px]" : "blur-[150px]"}
        `}
      />

      {/* PROFILE SPOTLIGHT */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.85, 0.45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          right-[14%]
          top-[18%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-300/18
          ${isMobile ? "blur-[55px]" : "blur-[100px]"}
        `}
      />

      {/* TOP LIGHT */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          left-1/2
          top-[-180px]
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          ${isMobile ? "blur-[100px]" : "blur-[170px]"}
        `}
      />

      {/* SMALL FLOATING GLOW */}

      <motion.div
        style={{ willChange: "transform" }}
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
        className={`
          absolute
          left-[45%]
          top-[42%]
          h-40
          w-40
          rounded-full
          bg-cyan-400/10
          ${isMobile ? "blur-[45px]" : "blur-[80px]"}
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