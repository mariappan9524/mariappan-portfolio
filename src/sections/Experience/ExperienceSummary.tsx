import { motion } from "framer-motion";

import { experienceData } from "./experienceData";

export default function ExperienceSummary() {
  const experience = experienceData[0];

  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 50,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -6,
  }}
  className="
    group
    relative
    overflow-hidden

    rounded-[36px]

    border
    border-white/10

    bg-gradient-to-br
    from-slate-900/95
    via-slate-900/90
    to-slate-950

    backdrop-blur-3xl

    p-10

    transition-all
    duration-500

    hover:border-cyan-400/30
    hover:shadow-[0_35px_90px_rgba(34,211,238,0.15)]
  "
>
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          -right-24
          -top-24

          h-[320px]
          w-[320px]

          rounded-full

          bg-cyan-500

          blur-[120px]
        "
      />

      <div className="relative">

  {/* Stats */}

  <div
    className="
      grid

      grid-cols-3

      gap-6

      pb-8

      border-b
      border-white/10
    "
  >
    {[
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
    ].map((item, index) => (
      <motion.div
        key={item.label}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.12,
          duration: 0.45,
        }}
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        className="
          group

          relative

          rounded-2xl

          border
          border-white/10

          bg-white/[0.03]

          p-6

          text-center

          transition-all
          duration-300

          hover:border-cyan-400/30
          hover:bg-cyan-500/[0.04]
        "
      >
       <h2
  className={`
    text-5xl
    font-black
    ${item.color}
  `}
>
  {item.value}
</h2>

        <p
          className="
            mt-3

            text-xs

            font-semibold

            uppercase

            tracking-[0.30em]

            text-slate-400
          "
        >
          {item.label}
        </p>
      </motion.div>
    ))}
  </div>

{/* Role Summary */}

<div
  className="
    grid

    gap-8

    py-10

    border-b
    border-white/10

    lg:grid-cols-[1fr_auto]
  "
>
  {/* Left */}

  <motion.div
    initial={{
      opacity: 0,
      x: -20,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.5,
    }}
  >
    <p
      className="
        text-sm

        font-semibold

        uppercase

        tracking-[0.30em]

        text-cyan-400
      "
    >
      Current Position
    </p>

    <h2
      className="
        mt-3

        text-4xl
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

        text-xl

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

        text-[15px]

        leading-8

        text-slate-400
      "
    >
      {experience.description}
    </p>
  </motion.div>

  {/* Right */}

  <motion.div
    initial={{
      opacity: 0,
      x: 20,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.5,
      delay: 0.15,
    }}
    className="
      flex
      flex-col
      gap-4

      lg:items-end
    "
  >
    <div
      className="
        rounded-full

        border
        border-cyan-500/20

        bg-cyan-500/10

        px-5
        py-2.5

        text-sm

        font-semibold

        text-cyan-300
      "
    >
      {experience.period}
    </div>

    <div
      className="
        rounded-full

        border
        border-white/10

        bg-white/[0.05]

        px-5
        py-2.5

        text-sm

        text-slate-300
      "
    >
      {experience.employmentType}
    </div>

    <div
      className="
        rounded-full

        border
        border-white/10

        bg-white/[0.05]

        px-5
        py-2.5

        text-sm

        text-slate-300
      "
    >
      {experience.location}
    </div>
  </motion.div>
</div>

{/* Core Expertise */}

<div
  className="
    py-10

    border-b
    border-white/10
  "
>
  <div
    className="
      flex
      items-center
      justify-between

      flex-wrap

      gap-4
    "
  >
    <div>
      <p
        className="
          text-sm

          font-semibold

          uppercase

          tracking-[0.30em]

          text-cyan-400
        "
      >
        Core Expertise
      </p>

      <h3
        className="
          mt-2

          text-3xl

          font-bold

          text-white
        "
      >
        Technologies I Work With
      </h3>
    </div>

    <div
      className="
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
    {experience.technologies.map((tech, index) => (
      <motion.div
        key={tech}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.05,
        }}
        whileHover={{
          y: -3,
          scale: 1.05,
        }}
        className="
          group

          relative

          rounded-full

          border
          border-white/10

          bg-white/[0.04]

          px-5
          py-3

          transition-all
          duration-300

          hover:border-cyan-400/30
          hover:bg-cyan-500/[0.05]
          hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]
        "
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
      </motion.div>
    ))}
  </div>
</div>

{/* Professional Highlights */}

<div className="pt-10">
  <div
    className="
      flex
      items-center
      justify-between

      flex-wrap

      gap-4
    "
  >
    <div>
      <p
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.30em]
          text-cyan-400
        "
      >
        Professional Highlights
      </p>

      <h3
        className="
          mt-2

          text-3xl

          font-bold

          text-white
        "
      >
        What I Deliver
      </h3>
    </div>

    <div
      className="
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
    {[
      "Enterprise Web Applications",
      "Responsive User Interfaces",
      "REST API Integration",
      "Reusable Component Architecture",
      "Performance Optimization",
      "Azure DevOps Workflow",
    ].map((item, index) => (
      <motion.div
        key={item}
        initial={{
          opacity: 0,
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.08,
        }}
        whileHover={{
          x: 6,
        }}
        className="
          flex
          items-center

          gap-4
        "
      >
        <div
          className="
            flex

            h-10
            w-10

            items-center
            justify-center

            rounded-full

            bg-cyan-500/10

            text-cyan-400

            font-bold
          "
        >
          ✓
        </div>

        <span
          className="
            text-[15px]

            font-medium

            text-slate-300
          "
        >
          {item}
        </span>
      </motion.div>
    ))}
  </div>
</div>
</div>
    </motion.div>
  );
}