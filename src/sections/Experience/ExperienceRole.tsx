import { motion } from "framer-motion";
import { experienceData } from "./experienceData";

export default function ExperienceRole() {
  const experience = experienceData[0];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.55,
      }}
      whileHover={{
        y: -6,
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
        hover:shadow-[0_35px_90px_rgba(34,211,238,0.15)]
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute

          -right-24
          -top-24

          h-[320px]
          w-[320px]

          rounded-full

          bg-gradient-to-br
          from-cyan-500
          to-blue-500

          blur-[120px]
        "
      />

      <div className="relative">
        {/* Badge */}

        <span
          className="
            inline-flex
            items-center

            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/10

            px-4
            py-2

            text-xs
            font-semibold

            uppercase
            tracking-[0.25em]

            text-cyan-400
          "
        >
          {experience.period}
        </span>

        {/* Role */}

        <h2
          className="
            mt-6

            text-4xl
            lg:text-5xl

            font-black

            leading-tight

            text-white
          "
        >
          {experience.role}
        </h2>

        {/* Company */}

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

        {/* Employment */}

        <div className="mt-5 flex flex-wrap gap-3">
          <span
            className="
              rounded-full

              border
              border-white/10

              bg-white/[0.05]

              px-4
              py-2

              text-sm

              text-slate-300
            "
          >
            {experience.employmentType}
          </span>

          <span
            className="
              rounded-full

              border
              border-white/10

              bg-white/[0.05]

              px-4
              py-2

              text-sm

              text-slate-300
            "
          >
            {experience.location}
          </span>
        </div>

        {/* Description */}

        <p
          className="
            mt-7

            max-w-3xl

            text-[15px]

            leading-8

            text-slate-400
          "
        >
          {experience.description}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">
          {experience.technologies.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{
                y: -3,
                scale: 1.04,
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
      </div>
    </motion.div>
  );
}