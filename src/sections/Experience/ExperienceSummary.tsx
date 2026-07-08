import {
  memo,
  useMemo,
} from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { experienceData } from "./experienceData";

import usePerformanceMode from "../../hooks/usePerformanceMode";

function ExperienceSummary() {
  const experience =
    experienceData[0];

  const reduceMotion =
    useReducedMotion();

  const {
    enableHoverEffects,
    enableGlowAnimation,
  } = usePerformanceMode();

  const stats = useMemo(
    () => [
      {
        value: "4+",
        label: "Years Experience",
        color: "text-cyan-400",
      },
      {
        value: "3",
        label: "Enterprise Products",
        color: "text-violet-400",
      },
      {
        value: "10+",
        label: "Enterprise Modules",
        color: "text-emerald-400",
      },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      "Enterprise Web Applications",
      "Responsive User Interfaces",
      "REST API Integration",
      "Reusable Component Architecture",
      "Performance Optimization",
      "Azure DevOps Workflow",
    ],
    []
  );

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 26,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.15,
      }}

      transition={{
        duration: 0.45,
      }}

      whileHover={
        enableHoverEffects
          ? {
              y: -5,
            }
          : undefined
      }

      className="
group
relative

overflow-hidden

rounded-[28px]
lg:rounded-[36px]

border
border-white/10

bg-gradient-to-br
from-slate-900/95
via-slate-900/90
to-slate-950

backdrop-blur-md
lg:backdrop-blur-3xl

p-5
sm:p-8
lg:p-10

transition-all
duration-300

hover:border-cyan-400/30

lg:hover:shadow-[0_35px_90px_rgba(34,211,238,0.15)]
"
    >

      {/* Background Glow */}

      <motion.div

        animate={
          enableGlowAnimation &&
          !reduceMotion
            ? {
                scale: [1, 1.06, 1],
                opacity: [0.08, 0.18, 0.08],
              }
            : undefined
        }

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
pointer-events-none

absolute

-right-20
-top-20

lg:-right-24
lg:-top-24

h-[220px]
w-[220px]

sm:h-[260px]
sm:w-[260px]

lg:h-[320px]
lg:w-[320px]

rounded-full

bg-cyan-500

blur-[70px]
lg:blur-[120px]
"
      />

      <div className="relative">

        {/* Stats */}
        {/* Stats */}

<div
  className="
grid

grid-cols-1
sm:grid-cols-3

gap-4
sm:gap-6

pb-8

border-b
border-white/10
"
>

  {stats.map((item) => (

    <div
      key={item.label}
      className="
group

relative

rounded-2xl

border
border-white/10

bg-white/[0.03]

p-5
sm:p-6

text-center

transition-all
duration-300

hover:border-cyan-400/30
hover:bg-cyan-500/[0.04]

lg:hover:-translate-y-1
"
    >

      <h2
        className={`
text-4xl
sm:text-5xl

font-black

${item.color}
`}
      >
        {item.value}
      </h2>

      <p
        className="
mt-3

text-[11px]
sm:text-xs

font-semibold

uppercase

tracking-[0.20em]
sm:tracking-[0.30em]

text-slate-400
"
      >
        {item.label}
      </p>

    </div>

  ))}

</div>

{/* Role Summary */}
{/* Role Summary */}

<div
  className="
grid

gap-8

py-8
lg:py-10

border-b
border-white/10

lg:grid-cols-[1fr_auto]
"
>

  {/* Left */}

  <div>

    <p
      className="
text-xs
sm:text-sm

font-semibold

uppercase

tracking-[0.20em]
sm:tracking-[0.30em]

text-cyan-400
"
    >
      Current Position
    </p>

    <h2
      className="
mt-3

text-[30px]
sm:text-[38px]
lg:text-5xl

font-black

leading-tight

text-white
"
    >
      {experience.role}
    </h2>

    <p
      className="
mt-3

text-lg
sm:text-xl

font-semibold

text-cyan-400
"
    >
      {experience.company}
    </p>

    <p
      className="
mt-5

max-w-3xl

text-sm
sm:text-[15px]

leading-7
sm:leading-8

text-slate-400
"
    >
      {experience.description}
    </p>

  </div>

  {/* Right */}

  <div
    className="
flex
flex-wrap

gap-3

lg:flex-col
lg:items-end
"
  >

    {[
      experience.period,
      experience.employmentType,
      experience.location,
    ].map((item, index) => (

      <div
        key={item}
        className={`
rounded-full

px-5
py-2.5

text-sm

transition-all
duration-300

${
  index === 0
    ? "border border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
    : "border border-white/10 bg-white/[0.05] text-slate-300"
}

${
  enableHoverEffects
    ? "hover:-translate-y-1"
    : ""
}
`}
      >
        {item}
      </div>

    ))}

  </div>

</div>

{/* Core Expertise */}
{/* Core Expertise */}

<div
  className="
py-8
lg:py-10

border-b
border-white/10
"
>

  <div
    className="
flex
flex-col

gap-5

lg:flex-row
lg:items-center
lg:justify-between
"
  >

    <div>

      <p
        className="
text-xs
sm:text-sm

font-semibold

uppercase

tracking-[0.22em]
sm:tracking-[0.30em]

text-cyan-400
"
      >
        Core Expertise
      </p>

      <h3
        className="
mt-2

text-[28px]
sm:text-3xl

font-bold

text-white
"
      >
        Technologies I Work With
      </h3>

    </div>

    <div
      className="
w-fit

rounded-full

border
border-white/10

bg-white/[0.05]

px-5
py-2

text-sm

text-slate-300
"
    >
      10+ Enterprise Modules
    </div>

  </div>

  <div
    className="
mt-8

flex
flex-wrap

gap-3
"
  >

    {experience.technologies.map((tech) => (

      <div
        key={tech}
        className={`
group

rounded-full

border
border-white/10

bg-white/[0.04]

px-5
py-3

transition-all
duration-300

${
  enableHoverEffects
    ? `
hover:-translate-y-1
hover:border-cyan-400/30
hover:bg-cyan-500/[0.05]
`
    : ""
}
`}
      >

        <span
          className="
text-sm

font-medium

text-slate-300

transition-colors
duration-300

group-hover:text-white
"
        >
          {tech}
        </span>

      </div>

    ))}

  </div>

</div>

{/* Professional Highlights */}
{/* Professional Highlights */}

<div className="pt-8 lg:pt-10">

  <div
    className="
flex
flex-col

gap-5

lg:flex-row
lg:items-center
lg:justify-between
"
  >

    <div>

      <p
        className="
text-xs
sm:text-sm

font-semibold

uppercase

tracking-[0.22em]
sm:tracking-[0.30em]

text-cyan-400
"
      >
        Professional Highlights
      </p>

      <h3
        className="
mt-2

text-[28px]
sm:text-3xl

font-bold

text-white
"
      >
        What I Deliver
      </h3>

    </div>

    <div
      className="
w-fit

rounded-full

border
border-cyan-500/20

bg-cyan-500/10

px-5
py-2

text-sm

text-cyan-300
"
    >
      Production Ready Solutions
    </div>

  </div>

  <div
    className="
mt-8

grid

gap-5

md:grid-cols-2
"
  >

    {highlights.map((item) => (

      <div
        key={item}
        className={`
flex
items-center

gap-4

transition-transform
duration-300

${
  enableHoverEffects
    ? "hover:translate-x-1"
    : ""
}
`}
      >

        <div
          className="
flex

h-10
w-10

shrink-0

items-center
justify-center

rounded-full

bg-cyan-500/10

font-bold

text-cyan-400
"
        >
          ✓
        </div>

        <span
          className="
text-sm
sm:text-[15px]

font-medium

text-slate-300
"
        >
          {item}
        </span>

      </div>

    ))}

  </div>

</div>
      </div>

    </motion.div>

  );

}

export default memo(ExperienceSummary);