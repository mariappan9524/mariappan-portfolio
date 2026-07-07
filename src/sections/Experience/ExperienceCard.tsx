import { motion } from "framer-motion";

import type { Experience } from "./experienceData";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        relative
        overflow-hidden

        rounded-[30px]

        border
        border-white/10

        bg-gradient-to-br
        from-slate-900/95
        via-slate-900/90
        to-slate-950

        p-8

        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className={`
          absolute
          -right-28
          -top-28

          h-[320px]
          w-[320px]

          rounded-full

          bg-gradient-to-br

          ${experience.accent}

          blur-[140px]
        `}
      />

      <div
        className="
          relative

          grid

          gap-10

          lg:grid-cols-[90px_1fr]
        "
      >
        {/* Timeline */}

        <div
          className="
            flex
            flex-col
            items-center
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br

              from-cyan-500
              to-blue-500

              text-xl
              font-bold

              text-white

              shadow-[0_0_40px_rgba(34,211,238,0.45)]
            "
          >
            01
          </div>

          <div
            className="
              mt-4

              h-full
              w-[2px]

              rounded-full

              bg-gradient-to-b

              from-cyan-400
              to-transparent
            "
          />
        </div>

        {/* Right */}

        <div className="space-y-6">
                      {/* Period */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
            }}
            className="
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <span
              className={`
                inline-flex
                items-center

                rounded-full

                bg-gradient-to-r

                ${experience.accent}

                px-4
                py-2

                text-xs
                font-semibold

                uppercase
                tracking-[0.22em]

                text-white
              `}
            >
              {experience.period}
            </span>

            <span
              className="
                rounded-full

                border
                border-white/10

                bg-white/[0.04]

                px-4
                py-2

                text-xs

                text-slate-300
              "
            >
              {experience.employmentType}
            </span>
          </motion.div>

          {/* Role */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            <h2
              className="
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
                mt-2

                text-lg

                font-medium

                text-cyan-400
              "
            >
              {experience.company}
            </p>

            <p
              className="
                mt-1

                text-sm

                text-slate-500
              "
            >
              {experience.location}
            </p>
          </motion.div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              max-w-3xl

              text-[15px]

              leading-8

              text-slate-400
            "
          >
            {experience.description}
          </motion.p>

          {/* Technologies */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.35,
            }}
          >
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="
                    rounded-full

                    border
                    border-white/10

                    bg-white/[0.05]

                    px-4
                    py-2

                    text-sm

                    text-slate-300

                    transition-all
                  "
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
                    {/* Enterprise Projects */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.45,
            }}
          >
            <h3
              className="
                mb-4

                text-lg

                font-semibold

                text-white
              "
            >
              Enterprise Projects
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              {experience.projects.map((project, index) => (
                <motion.div
                  key={project}
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
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.04]

                    p-5

                    transition-all
                    duration-300

                    hover:border-cyan-400/30
                    hover:bg-cyan-500/[0.05]
                    hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -right-8
                      -top-8

                      h-24
                      w-24

                      rounded-full

                      bg-cyan-500/10

                      blur-3xl

                      opacity-0

                      transition-opacity

                      duration-500

                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">
                    <div
                      className="
                        mb-3

                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-xl

                        bg-cyan-500/10

                        text-cyan-400

                        font-bold
                      "
                    >
                      {index + 1}
                    </div>

                    <h4
                      className="
                        font-semibold

                        text-white
                      "
                    >
                      {project}
                    </h4>

                    <p
                      className="
                        mt-2

                        text-sm

                        leading-6

                        text-slate-400
                      "
                    >
                      Enterprise production application
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.55,
            }}
          >
            <h3
              className="
                mb-4

                text-lg

                font-semibold

                text-white
              "
            >
              Key Achievements
            </h3>

            <div className="grid gap-3 md:grid-cols-2">
              {experience.achievements.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 4,
                  }}
                  className="
                    flex
                    items-center
                    gap-3

                    rounded-xl

                    border
                    border-white/10

                    bg-white/[0.03]

                    px-4
                    py-3
                  "
                >
                  <div
                    className="
                      h-2
                      w-2

                      rounded-full

                      bg-cyan-400
                    "
                  />

                  <span
                    className="
                      text-sm

                      text-slate-300
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
                  </div>
      </div>
    </motion.div>
  );
}