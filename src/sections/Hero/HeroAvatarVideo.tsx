import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import avatarVideo from "../../assets/videos/avatar-intro.webm";
import usePerformanceMode from "../../hooks/usePerformanceMode";

export default function HeroAvatarVideo() {
  const { isMobile } = usePerformanceMode();

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(containerRef, {
    amount: 0.4,
    once: false,
  });

  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{
        opacity: 0,
        x: 18,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        absolute
        z-30

        pointer-events-none
        select-none

        w-[70px]
        bottom-6
        -right-12

        sm:w-[80px]
        sm:bottom-8
        sm:-right-16

        md:w-[90px]
        md:bottom-10
        md:-right-20

        lg:w-[100px]
        lg:bottom-12
        lg:-right-28

        xl:w-[110px]
        xl:bottom-14
        xl:-right-32
      "
    >
      {/* Soft Cyan Glow */}
      <div
        className={`
          absolute
          inset-0

          rounded-full

          bg-cyan-400/15

          ${
            isMobile
              ? "blur-xl scale-75"
              : "blur-3xl scale-75"
          }
        `}
      />

      {/* Avatar Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          relative
          z-10

          w-full
          h-auto

          object-contain

          drop-shadow-[0_16px_24px_rgba(0,0,0,0.35)]
        "
      >
        <source
          src={avatarVideo}
          type="video/webm"
        />
      </video>
    </motion.div>
  );
}