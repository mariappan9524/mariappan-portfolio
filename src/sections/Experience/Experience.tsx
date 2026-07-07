import { motion } from "framer-motion";

import SectionContainer from "../../components/layout/SectionContainer";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceContent from "./ExperienceContent";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden

    pt-3
pb-20
        scroll-mt-24
      "
    >
      {/* Background Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />

      {/* Left Aurora */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute

          -left-60
          top-20

          h-[520px]
          w-[520px]

          rounded-full

          bg-cyan-500

          blur-[180px]
        "
      />

      {/* Right Aurora */}

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute

          -right-60
          bottom-0

          h-[520px]
          w-[520px]

          rounded-full

          bg-blue-500

          blur-[180px]
        "
      />

      {/* Top Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute

          left-1/2
          top-0

          h-[420px]
          w-[420px]

          -translate-x-1/2

          rounded-full

          bg-cyan-400

          blur-[140px]
        "
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute

          bottom-0
          left-1/2

          h-[380px]
          w-[380px]

          -translate-x-1/2

          rounded-full

          bg-sky-500

          blur-[160px]
        "
      />

      {/* Decorative Lines */}

      <div
        className="
          absolute

          left-12
          top-1/2

          h-52
          w-px

          bg-gradient-to-b

          from-transparent
          via-cyan-400/20
          to-transparent
        "
      />

      <div
        className="
          absolute

          right-12
          top-1/3

          h-44
          w-px

          bg-gradient-to-b

          from-transparent
          via-blue-400/20
          to-transparent
        "
      />

      <SectionContainer className="relative z-10">
        <ExperienceHeader />

        <div className="mt-16">
          <ExperienceContent />
        </div>
      </SectionContainer>
    </section>
  );
}