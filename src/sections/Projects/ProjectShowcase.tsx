import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import type { Project } from "./projectData";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({
  project,
}: ProjectShowcaseProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(600);
  const mouseY = useMotionValue(350);

  const glowX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
  });

  const rotateX = useSpring(
    useTransform(mouseY, [0, 700], [2.5, -2.5]),
    {
      stiffness: 150,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [0, 1200], [-2.5, 2.5]),
    {
      stiffness: 150,
      damping: 22,
    }
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(600);
        mouseY.set(350);
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1800,
        transformStyle: "preserve-3d",
      }}
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-white/10

        bg-gradient-to-br
        from-slate-900/95
        via-slate-900/90
        to-slate-950

        p-6

        backdrop-blur-3xl

        shadow-[0_40px_120px_rgba(0,0,0,0.45)]
      "
    >
      {/* Mouse Glow */}

      <motion.div
        style={{
          left: glowX,
          top: glowY,
        }}
        className="
          pointer-events-none

          absolute
          z-10

          h-[260px]
          w-[260px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/10

          blur-[100px]
        "
      />

      {/* Animated Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className={`
          absolute

          -right-36
          -top-36

          h-[380px]
          w-[380px]

          rounded-full

          bg-gradient-to-br

          ${project.accent}

          blur-[140px]
        `}
      />

      {/* Main Layout */}

      <div
        className="
          relative

          grid

          items-start

          gap-6

          lg:grid-cols-[1.3fr_0.7fr]
        "
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.15,
          }}
        >
                      {/* Browser Frame */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[24px]

              border
              border-white/10

              bg-slate-900

              shadow-[0_25px_70px_rgba(0,0,0,0.45)]
            "
          >
            {/* Floating Bottom Glow */}

            <div
              className="
                absolute

                -bottom-10
                left-1/2

                h-32
                w-32

                -translate-x-1/2

                rounded-full

                bg-cyan-500/20

                blur-[70px]
              "
            />

            {/* Browser Header */}

            <div
              className="
                flex
                items-center
                justify-between

                border-b
                border-white/10

                bg-white/[0.04]

                px-4
                py-2
              "
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />

                <div className="h-3 w-3 rounded-full bg-yellow-500" />

                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div
                className="
                  rounded-full

                  bg-white/5

                  px-4
                  py-1

                  text-[11px]

                  text-slate-400
                "
              >
                Enterprise Application
              </div>

              <div className="w-10" />
            </div>

            {/* Reflection */}

            <motion.div
              animate={{
                x: ["-140%", "180%"],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none

                absolute
                left-0
                top-0

                z-20

                h-full
                w-24

                rotate-12

                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            />

            {/* Screenshot */}

            <motion.img
              src={project.image}
              alt={project.title}
              initial={{
                scale: 1.02,
              }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                w-full

                h-[320px]

                object-cover
                object-top
              "
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <div className="space-y-4">
                        {/* Category */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <span
                className={`
                  inline-flex
                  items-center

                  rounded-full

                  bg-gradient-to-r

                  ${project.accent}

                  px-3
                  py-1.5

                  text-[11px]
                  font-semibold

                  uppercase
                  tracking-[0.22em]

                  text-white
                `}
              >
                {project.category}
              </span>
            </motion.div>

            {/* Title */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2
                className="
                  text-3xl
lg:text-[38px]

                  font-black

                  leading-tight

                  text-white
                "
              >
                {project.title}
              </h2>

              <p
                className="
                  mt-1

                  text-base

                  font-medium

                  text-cyan-400
                "
              >
                {project.subtitle}
              </p>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="
                text-[15px]

                leading-7

                text-slate-400
              "
            >
              {project.description}
            </motion.p>

            {/* Status */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-emerald-500/20

                bg-emerald-500/10

                px-3
                py-2

                text-xs
                font-medium

                text-emerald-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              {project.status}
            </motion.div>

            {/* Technologies */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    className="
                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.04]

                      px-3
                      py-1.5

                      text-xs

                      text-slate-300

                      transition-all
                    "
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contributions */}

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3
                className="
                  mb-3

                  text-base

                  font-semibold

                  text-white
                "
              >
                My Contributions
              </h3>

              <div className="space-y-2">
                {project.contributions.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      x: 4,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <div
                      className="
                        mt-[9px]

                        h-1.5
                        w-1.5

                        rounded-full

                        bg-cyan-400
                      "
                    />

                    <p
                      className="
                        text-[14px]

                        leading-6

                        text-slate-400
                      "
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
                        {/* Bottom Divider */}

            {/* <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                delay: 0.55,
                duration: 0.5,
              }}
              className="
                origin-left

                h-px

                bg-gradient-to-r
                from-cyan-400/50
                via-white/20
                to-transparent
              "
            /> */}

            {/* Footer */}

            {/* <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
              "
            >
              <div>
                <p
                  className="
                    text-xs

                    uppercase

                    tracking-[0.25em]

                    text-slate-500
                  "
                >
                  Project Type
                </p>

                <p
                  className="
                    mt-1

                    text-sm

                    font-medium

                    text-white
                  "
                >
                  Enterprise Solution
                </p>
              </div>

              <div
                className="
                  rounded-full

                  border
                  border-cyan-500/20

                  bg-cyan-500/10

                  px-4
                  py-2

                  text-xs
                  font-medium

                  text-cyan-300
                "
              >
                Private Repository
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Glow */}

      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute

          left-1/2
          bottom-[-120px]

          h-[260px]
          w-[260px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500

          blur-[140px]
        "
      />
    </motion.div>
  );
}