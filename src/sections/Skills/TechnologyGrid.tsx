import {
  memo,
  type ReactNode,
} from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiFlutter,
  SiDart,
  SiExpress,
  SiPostman,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import usePerformanceMode from "../../hooks/usePerformanceMode";

interface Props {
  technologies: string[];
}

const iconMap: Record<string, ReactNode> = {
  React: <FaReact className="text-cyan-400" />,
  Angular: <FaAngular className="text-red-500" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS3: <FaCss3Alt className="text-sky-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,
  "Material UI": <SiMui className="text-blue-400" />,
  Flutter: <SiFlutter className="text-sky-400" />,
  Dart: <SiDart className="text-blue-300" />,
  "REST APIs": <TbApi className="text-emerald-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-white" />,
  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <FaGithub className="text-white" />,
  "VS Code": <VscVscode className="text-blue-400" />,
  Postman: <SiPostman className="text-orange-500" />,
};

function TechnologyGrid({
  technologies,
}: Props) {

  const reduceMotion = useReducedMotion();

  const {
    isMobile,
  } = usePerformanceMode();

  const enableHover = !isMobile;

  return (

    <div
      className="
grid
grid-cols-2

gap-3
sm:gap-4
"
    >

      {technologies.map((tech, index) => (

        <motion.div
          key={tech}
          initial={{
            opacity: 0,
            y: isMobile ? 8 : 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: isMobile ? 0.18 : 0.35,
            delay: index * 0.03,
          }}
          whileHover={
            enableHover
              ? {
                  y: -6,
                  scale: 1.03,
                }
              : undefined
          }
          whileTap={{
            scale: 0.98,
          }}
          className="
group
relative

overflow-hidden

rounded-xl

border
border-white/10

bg-gradient-to-br
from-white/[0.05]
to-white/[0.02]

backdrop-blur-sm
lg:backdrop-blur-xl

p-3
sm:p-4

transition-all
duration-300

hover:border-cyan-400/40
hover:bg-cyan-500/[0.05]

lg:hover:shadow-[0_18px_50px_rgba(34,211,238,0.18)]

will-change-transform
"
        >
                      {/* Hover Glow */}

          <div
            className="
absolute
left-0
top-0

h-px
w-full

bg-gradient-to-r
from-transparent
via-white/20
to-transparent

opacity-0

transition-opacity
duration-300

group-hover:opacity-100
"
          />

          <div
            className="
absolute

-right-10
-top-10

h-36
w-36

rounded-full

bg-cyan-400/12

blur-[40px]
lg:blur-[70px]

opacity-0

transition-opacity
duration-300

group-hover:opacity-100
"
          />

          <div
            className="
relative

flex
items-center

gap-3
sm:gap-4
"
          >

            {/* Icon */}

            <motion.div
              animate={
                !reduceMotion && !isMobile
                  ? {
                      y: [0, -3, 0],
                    }
                  : undefined
              }
              whileHover={
                enableHover
                  ? {
                      rotate: 8,
                      scale: 1.12,
                    }
                  : undefined
              }
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.12,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 0.2,
                },
                scale: {
                  duration: 0.2,
                },
              }}
              className="
flex

h-10
w-10

sm:h-11
sm:w-11

lg:h-12
lg:w-12

items-center
justify-center

rounded-xl

bg-white/[0.06]

text-xl
sm:text-2xl
"
            >
              {iconMap[tech]}
            </motion.div>

            {/* Text */}

            <div>

              <h4
                className="
text-sm
sm:text-[15px]

font-semibold

text-white

transition-colors
duration-300

group-hover:text-cyan-200
"
              >
                {tech}
              </h4>

              <p
                className="
mt-1

text-[11px]
sm:text-xs

text-slate-400

transition-colors
duration-300

group-hover:text-slate-300
"
              >
                Professional Experience
              </p>

            </div>

          </div>

          {/* Bottom Line */}

          {!isMobile && (

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.2,
              }}
              whileHover={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
absolute

bottom-0

left-4
right-4

sm:left-6
sm:right-6

h-px

origin-left

bg-gradient-to-r
from-cyan-400/60
via-cyan-300/20
to-transparent
"
            />

          )}

        </motion.div>

      ))}

    </div>

  );

}

export default memo(TechnologyGrid);