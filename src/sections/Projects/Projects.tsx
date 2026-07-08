import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import SectionContainer from "../../components/layout/SectionContainer";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsContent from "./ProjectsContent";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        pt-3
        pb-20
        scroll-mt-24
      "
    >
      {/* Left Glow */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          pointer-events-none
          absolute
          -left-56
          top-16
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-500
          opacity-20
          ${isMobile ? "blur-[90px]" : "blur-[180px]"}
        `}
      />

      {/* Right Glow */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.10, 0.18, 0.10],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          pointer-events-none
          absolute
          -right-56
          bottom-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-500
          opacity-20
          ${isMobile ? "blur-[90px]" : "blur-[180px]"}
        `}
      />

      {/* Center Glow */}

      <motion.div
        style={{ willChange: "transform" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.10, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          pointer-events-none
          absolute
          left-1/2
          top-40
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-blue-500
          opacity-10
          ${isMobile ? "blur-[80px]" : "blur-[150px]"}
        `}
      />

      <SectionContainer className="relative z-10">
        <ProjectsHeader />

        <div className="mt-6">
          <ProjectsContent />
        </div>
      </SectionContainer>
    </section>
  );
}