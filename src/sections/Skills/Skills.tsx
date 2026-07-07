import { motion } from "framer-motion";

import SectionContainer from "../../components/layout/SectionContainer";
import SkillsHeader from "./SkillsHeader";
import SkillsContent from "./SkillsContent";

export default function Skills() {
  return (
    <section
      id="skills"
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
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          -left-56
          top-16

          h-[520px]
          w-[520px]

          rounded-full

          bg-cyan-500

          opacity-20

          blur-[180px]
        "
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.10, 0.18, 0.10],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          -right-56
          bottom-0

          h-[520px]
          w-[520px]

          rounded-full

          bg-blue-500

          opacity-20

          blur-[180px]
        "
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.10, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          left-1/2
          top-40

          h-[420px]
          w-[420px]

          -translate-x-1/2

          rounded-full

          bg-cyan-400

          opacity-10

          blur-[150px]
        "
      />

      <SectionContainer className="relative z-10">
        <SkillsHeader />

        <div className="mt-5">
          <SkillsContent />
        </div>
      </SectionContainer>
    </section>
  );
}