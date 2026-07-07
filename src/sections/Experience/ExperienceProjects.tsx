import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { experienceData } from "./experienceData";

export default function ExperienceProjects() {
  const experience = experienceData[0];

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
        delay: 0.15,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
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

        backdrop-blur-3xl

        transition-all
        duration-500

        hover:border-cyan-400/30
        hover:shadow-[0_30px_80px_rgba(34,211,238,0.12)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute

          -right-20
          -top-20

          h-72
          w-72

          rounded-full

          bg-cyan-500/10

          blur-[120px]
        "
      />

      <div className="relative">
        <span
          className="
            text-xs

            font-semibold

            uppercase

            tracking-[0.28em]

            text-cyan-400
          "
        >
          Enterprise Projects
        </span>

        <h3
          className="
            mt-3

            text-3xl

            font-bold

            text-white
          "
        >
          Products I've Built
        </h3>

        <div className="mt-8 space-y-4">
          {experience.projects.map((project, index) => (
            <motion.div
              key={project}
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-white/10

                bg-white/[0.04]

                px-5
                py-4

                transition-all
                duration-300

                hover:border-cyan-400/30
                hover:bg-cyan-500/[0.05]
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-xl

                    bg-cyan-500/10

                    font-bold

                    text-cyan-400
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    {project}
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Enterprise Production Application
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={20}
                className="
                  text-slate-500

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}