import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          -left-40
          top-20
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-500/12
          ${isMobile ? "blur-[90px]" : "blur-[170px]"}
        `}
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          right-[-220px]
          top-[25%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/10
          ${isMobile ? "blur-[100px]" : "blur-[180px]"}
        `}
      />

      {/* Violet Glow */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          -bottom-48
          left-1/3
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-500/10
          ${isMobile ? "blur-[100px]" : "blur-[180px]"}
        `}
      />

      {/* Accent Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          top-[15%]
          right-[18%]
          h-[220px]
          w-[220px]
          rounded-full
          bg-cyan-400/8
          ${isMobile ? "blur-[70px]" : "blur-[120px]"}
        `}
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-72
          bg-gradient-to-t
          from-slate-950
          to-transparent
        "
      />
    </div>
  );
}