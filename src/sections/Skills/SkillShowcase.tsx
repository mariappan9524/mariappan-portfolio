import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import { useRef } from "react";
import type { ReactNode } from "react";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiFlutter,
} from "react-icons/si";

import TechnologyGrid from "./TechnologyGrid";
import type { SkillCategoryType } from "./skillsData";

import usePerformanceMode from "../../hooks/usePerformanceMode";

interface SkillShowcaseProps {
  category: SkillCategoryType;
}

export default function SkillShowcase({
  category,
}: SkillShowcaseProps) {

  const reduceMotion = useReducedMotion();

  const {
    isMobile,
    enableRotation,
    enableGlowAnimation,
  } = usePerformanceMode();

  const iconMap: Record<string, ReactNode> = {

    "Frontend Development":
      <FaReact className="text-cyan-400" />,

    "Mobile Development":
      <SiFlutter className="text-sky-400" />,

    "Backend Integration":
      <FaNodeJs className="text-emerald-400" />,

    "Development Workflow":
      <FaGitAlt className="text-orange-400" />,
  };

  const cardRef =
    useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(500);

  const mouseY = useMotionValue(250);

  const glowX = useSpring(mouseX, {
    stiffness: 160,
    damping: 20,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 160,
    damping: 20,
  });

  const rotateX = useSpring(
    useTransform(mouseY, [0, 500], [4, -4]),
    {
      stiffness: 140,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [0, 1000], [-4, 4]),
    {
      stiffness: 140,
      damping: 18,
    }
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    if (
      !enableRotation ||
      !cardRef.current
    )
      return;

    const rect =
      cardRef.current.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left
    );

    mouseY.set(
      e.clientY - rect.top
    );
  };

  return (

    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {

        if (enableRotation) {

          mouseX.set(500);
          mouseY.set(250);

        }

      }}
      style={{

        rotateX: enableRotation
          ? rotateX
          : undefined,

        rotateY: enableRotation
          ? rotateY
          : undefined,

        transformPerspective:
          enableRotation
            ? 1400
            : undefined,

        transformStyle:
          enableRotation
            ? "preserve-3d"
            : undefined,
      }}
      initial={{
        opacity: 0,
        y: 24,
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
lg:rounded-[34px]

border
border-white/10

bg-gradient-to-br
from-slate-900/95
via-slate-900/90
to-slate-950

p-5
sm:p-6
lg:p-8

backdrop-blur-md
lg:backdrop-blur-3xl

shadow-[0_30px_80px_rgba(0,0,0,0.35)]
lg:shadow-[0_40px_120px_rgba(0,0,0,0.45)]

will-change-transform
"
    >
            {/* Mouse Glow (Desktop Only) */}

      {enableRotation && !reduceMotion && (
        <motion.div
          style={{
            left: glowX,
            top: glowY,
          }}
          className="
pointer-events-none

absolute

h-[220px]
w-[220px]

sm:h-[260px]
sm:w-[260px]

lg:h-[320px]
lg:w-[320px]

-translate-x-1/2
-translate-y-1/2

rounded-full

bg-cyan-400/10

blur-[70px]
lg:blur-[120px]
"
        />
      )}

      {/* Animated Background Glow */}

      <motion.div
        animate={
          enableGlowAnimation
            ? {
                scale: [1, 1.08, 1],
                opacity: [0.18, 0.28, 0.18],
              }
            : undefined
        }
        transition={
          enableGlowAnimation
            ? {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={`
absolute

-right-20
-top-20

sm:-right-28
sm:-top-28

lg:-right-40
lg:-top-40

h-[240px]
w-[240px]

sm:h-[320px]
sm:w-[320px]

lg:h-[420px]
lg:w-[420px]

rounded-full

bg-gradient-to-br

${category.color}

${isMobile ? "blur-[60px]" : "blur-[150px]"}
`}
      />

      {/* Static Secondary Glow */}

      <div
        className="
absolute

bottom-0
left-0

h-48
w-48

sm:h-60
sm:w-60

lg:h-80
lg:w-80

rounded-full

bg-cyan-500/5

blur-[60px]
lg:blur-[110px]
"
      />

      <div
        className="
relative

grid

grid-cols-1

gap-6

sm:gap-8

md:grid-cols-[220px_1fr]

lg:grid-cols-[250px_1fr]

lg:gap-10

items-start

lg:items-center
"
      >
                {/* LEFT */}

        <div
          className="
text-center

lg:text-left
"
        >
          <motion.div
            animate={
              enableGlowAnimation && !isMobile && !reduceMotion
                ? {
                    rotate: [0, 6, 0],
                    scale: [1, 1.04, 1],
                  }
                : undefined
            }
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className={`
mx-auto
lg:mx-0

flex

h-16
w-16

sm:h-[72px]
sm:w-[72px]

lg:h-20
lg:w-20

items-center
justify-center

rounded-2xl
lg:rounded-3xl

bg-gradient-to-br

${category.color}

shadow-[0_18px_40px_rgba(0,0,0,0.28)]
lg:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
`}
          >
            <div
              className="
text-3xl
sm:text-[34px]
lg:text-4xl

text-white
"
            >
              {iconMap[category.title]}
            </div>
          </motion.div>

          <p
            className="
mt-4
sm:mt-5

text-[10px]
sm:text-[11px]

uppercase

tracking-[0.22em]
sm:tracking-[0.28em]

text-cyan-400
"
          >
            {category.subtitle}
          </p>

          <h2
            className="
mt-4

text-[30px]
sm:text-[34px]
lg:text-[38px]

font-black

leading-tight

text-white
"
          >
            {category.title}
          </h2>

          <p
            className="
mt-4

text-sm
sm:text-[15px]

leading-7
sm:leading-8

text-slate-400
"
          >
            {category.description}
          </p>

          <div
            className="
mt-6

inline-flex

items-center

rounded-full

border
border-cyan-400/20

bg-cyan-500/10

px-4
py-2

sm:px-5
sm:py-2.5

text-xs
sm:text-sm

font-medium

text-cyan-300
"
          >
            {category.experience}
          </div>
        </div>

        {/* RIGHT */}

        <div
          className="
rounded-[20px]
lg:rounded-[24px]

border
border-white/10

bg-white/[0.03]

p-4
sm:p-5
lg:p-6

backdrop-blur-md
lg:backdrop-blur-xl
"
        >
          <h3
            className="
mb-4
lg:mb-6

text-lg
sm:text-xl

font-bold

text-white
"
          >
            Technologies
          </h3>

          <TechnologyGrid
            technologies={category.technologies}
          />
        </div>

      </div>

    </motion.div>
     );
}