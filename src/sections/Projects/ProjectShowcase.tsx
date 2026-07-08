import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import type { Project } from "./projectData";

import usePerformanceMode from "../../hooks/usePerformanceMode";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const { isMobile, enableRotation, enableGlowAnimation } =
    usePerformanceMode();

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

  const rotateX = useSpring(useTransform(mouseY, [0, 700], [2.5, -2.5]), {
    stiffness: 150,
    damping: 22,
  });

  const rotateY = useSpring(useTransform(mouseX, [0, 1200], [-2.5, 2.5]), {
    stiffness: 150,
    damping: 22,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableRotation || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (enableRotation) {
          mouseX.set(600);
          mouseY.set(350);
        }
      }}
      style={{
        rotateX: enableRotation ? rotateX : undefined,

        rotateY: enableRotation ? rotateY : undefined,

        transformPerspective: enableRotation ? 1800 : undefined,

        transformStyle: enableRotation ? "preserve-3d" : undefined,
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
        duration: 0.45,
      }}
      className="
relative
overflow-hidden

rounded-[24px]
lg:rounded-[28px]

border
border-white/10

bg-gradient-to-br
from-slate-900/95
via-slate-900/90
to-slate-950

p-4
sm:p-5
lg:p-6

backdrop-blur-lg
lg:backdrop-blur-3xl

shadow-[0_25px_60px_rgba(0,0,0,0.35)]
lg:shadow-[0_40px_120px_rgba(0,0,0,0.45)]

will-change-transform
"
    >
      {/* Mouse Glow */}

      {enableRotation && (
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
      )}

      {/* Background Glow */}

      <motion.div
        animate={
          enableGlowAnimation
            ? {
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.28, 0.15],
              }
            : undefined
        }
        transition={
          enableGlowAnimation
            ? {
                duration: 8,
                repeat: Infinity,
              }
            : undefined
        }
        className={`
absolute

-right-24
-top-24

lg:-right-36
lg:-top-36

h-[240px]
w-[240px]

sm:h-[300px]
sm:w-[300px]

lg:h-[380px]
lg:w-[380px]

rounded-full

bg-gradient-to-br

${project.accent}

${isMobile ? "blur-[70px]" : "blur-[140px]"}
`}
      />

      {/* Main Layout */}

      <div
        className="
relative

grid
grid-cols-1

gap-6
lg:gap-8

items-start

lg:grid-cols-[1.3fr_0.7fr]
"
      >
        {/* LEFT SIDE */}

        <div>
          {/* Browser Frame */}

          <div
            className="
relative

overflow-hidden

rounded-[20px]
lg:rounded-[24px]

border
border-white/10

bg-slate-900

shadow-[0_20px_50px_rgba(0,0,0,0.35)]
lg:shadow-[0_25px_70px_rgba(0,0,0,0.45)]
"
          >
            {/* Floating Bottom Glow */}

            <div
              className={`
absolute

-bottom-10
left-1/2

h-24
w-24

lg:h-32
lg:w-32

-translate-x-1/2

rounded-full

bg-cyan-500/20

${isMobile ? "blur-[30px]" : "blur-[70px]"}
`}
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

px-3
py-2

sm:px-4
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

px-3
py-1

sm:px-4

text-[10px]
sm:text-[11px]

text-slate-400
"
              >
                Enterprise Application
              </div>

              <div className="w-8 sm:w-10" />
            </div>

            {/* Reflection */}

            {enableRotation && (
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
            )}

            {/* Screenshot */}

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="
w-full

h-[240px]
sm:h-[280px]
lg:h-[320px]

object-cover
object-top

transition-transform
duration-300

lg:hover:scale-[1.03]
"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div>
          <div className="space-y-4">
            {/* Category */}

            <span
              className={`
inline-flex
items-center

rounded-full

bg-gradient-to-r

${project.accent}

px-3
py-1.5

text-[10px]
sm:text-[11px]

font-semibold

uppercase

tracking-[0.18em]
sm:tracking-[0.22em]

text-white
`}
            >
              {project.category}
            </span>

            {/* Title */}

            <div>
              <h2
                className="
text-[28px]
sm:text-[32px]
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

text-sm
sm:text-base

font-medium

text-cyan-400
"
              >
                {project.subtitle}
              </p>
            </div>

            {/* Description */}

            <p
              className="
text-sm
sm:text-[15px]

leading-7

text-slate-400
"
            >
              {project.description}
            </p>

            {/* Status */}

            <div
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
            </div>

            {/* Technologies */}

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
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
duration-300

lg:hover:-translate-y-1
lg:hover:border-cyan-400/30
lg:hover:text-white
"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Glow */}

      <motion.div
        animate={
          enableGlowAnimation
            ? {
                opacity: [0.08, 0.18, 0.08],
                scale: [1, 1.05, 1],
              }
            : undefined
        }
        transition={
          enableGlowAnimation
            ? {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`
absolute

left-1/2
bottom-[-120px]

h-[220px]
w-[220px]

sm:h-[260px]
sm:w-[260px]

lg:h-[340px]
lg:w-[340px]

-translate-x-1/2

rounded-full

bg-gradient-to-r

${project.accent}

opacity-20

${isMobile ? "blur-[70px]" : "blur-[140px]"}
`}
      />

      {/* Border Shine */}

      {!isMobile && (
        <motion.div
          animate={{
            x: ["-120%", "140%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
pointer-events-none

absolute
top-0
left-0

h-full
w-24

rotate-12

bg-gradient-to-r
from-transparent
via-white/5
to-transparent
"
        />
      )}
    </motion.div>
  );
}
