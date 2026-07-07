import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { FaReact, FaAngular, FaNodeJs, FaGitAlt } from "react-icons/fa";

import {
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiJavascript,
  SiExpress,
  SiPostman,
  SiDart,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import TechnologyGrid from "./TechnologyGrid";

import type { SkillCategoryType } from "./skillsData";

interface SkillShowcaseProps {
  category: SkillCategoryType;
}

export default function SkillShowcase({ category }: SkillShowcaseProps) {
  const iconMap: Record<string, ReactNode> = {
    "Frontend Development": <FaReact className="text-cyan-400" />,

    "Mobile Development": <SiFlutter className="text-sky-400" />,

    "Backend Integration": <FaNodeJs className="text-emerald-400" />,

    "Development Workflow": <FaGitAlt className="text-orange-400" />,
  };
  const cardRef = useRef<HTMLDivElement>(null);

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
  const rotateX = useSpring(useTransform(mouseY, [0, 500], [5, -5]), {
    stiffness: 140,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [0, 1000], [-5, 5]), {
    stiffness: 140,
    damping: 18,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(500);
        mouseY.set(250);
      }}
      style={{
        rotateX: window.innerWidth >= 1024 ? rotateX : 0,

        rotateY: window.innerWidth >= 1024 ? rotateY : 0,

        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      }}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
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

backdrop-blur-3xl

shadow-[0_30px_80px_rgba(0,0,0,0.35)]
lg:shadow-[0_40px_120px_rgba(0,0,0,0.45)]

will-change-transform
"
    >
      {/* Main Glow */}
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

blur-[80px]
lg:blur-[120px]
"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
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

blur-[90px]
lg:blur-[160px]        `}
      />

      {/* Secondary Glow */}

      <div
        className="
          absolute

          bottom-0
          left-0

         h-52
w-52

sm:h-64
sm:w-64

lg:h-80
lg:w-80

          rounded-full

          bg-cyan-500/5

blur-[70px]
lg:blur-[120px]        "
      />

      <div
        className="
relative

grid

grid-cols-1

gap-8

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
            animate={{
              rotate: [0, 8, 0],
              scale: [1, 1.05, 1],
            }}
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

sm:h-18
sm:w-18

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

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
            }}
            className="
mt-5

text-[10px]
sm:text-[11px]

uppercase

tracking-[0.22em]
sm:tracking-[0.28em]

text-cyan-400
"
          >
            {category.subtitle}
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
            }}
            className="
mt-4

text-3xl
sm:text-[34px]
lg:text-[38px]

font-black

leading-tight

text-white
"
          >
            {category.title}
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
            }}
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
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.45,
            }}
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
          </motion.div>
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

backdrop-blur-xl
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

          <div
            className="
    w-full

    overflow-hidden
  "
          >
            <TechnologyGrid technologies={category.technologies} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
