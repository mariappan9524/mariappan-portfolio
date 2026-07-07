import { motion } from "framer-motion";
import type { SkillCategoryType } from "./skillsData";

interface SkillSectionProps {
  category: SkillCategoryType;
}

export default function SkillSection({
  category,
}: SkillSectionProps) {
  const Icon = category.icon;

  return (
    <motion.div
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

        rounded-[38px]

        border
        border-white/10

        bg-gradient-to-br
        from-slate-900
        via-slate-900/95
        to-slate-950

        p-12

        shadow-[0_30px_90px_rgba(0,0,0,0.45)]
      "
    >
      {/* Glow */}

      <div
        className={`
          absolute
          -right-32
          -top-32

          h-96
          w-96

          rounded-full

          bg-gradient-to-br

          ${category.color}

          opacity-10

          blur-[140px]
        `}
      />

      <div
        className="
          relative

          grid

          items-center

          gap-20

          lg:grid-cols-[380px_1fr]
        "
      >
        {/* LEFT */}

        <div>
          <div
            className={`
              flex
              h-24
              w-24
              items-center
              justify-center

              rounded-[28px]

              bg-gradient-to-br

              ${category.color}

              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            `}
          >
            <Icon
              size={44}
              className="text-white"
            />
          </div>

          <p
            className="
              mt-10

              text-sm

              uppercase

              tracking-[0.3em]

              text-cyan-400
            "
          >
            {category.subtitle}
          </p>

          <h2
            className="
              mt-4

              text-5xl

              font-bold

              leading-tight

              text-white
            "
          >
            {category.title}
          </h2>

          <p
            className="
              mt-8

              leading-8

              text-slate-400
            "
          >
            {category.description}
          </p>

          <div
            className="
              mt-10

              inline-flex

              rounded-full

              border
              border-cyan-400/20

              bg-cyan-500/10

              px-6
              py-3

              text-sm

              font-medium

              text-cyan-300
            "
          >
            {category.experience}
          </div>
        </div>

        {/* RIGHT */}

        <div>
          <p
            className="
              mb-8

              text-lg

              font-semibold

              text-white
            "
          >
            Technologies
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-4
            "
          >
            {category.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                className="
                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-6
                  py-4

                  text-base

                  font-medium

                  text-slate-200

                  transition-all

                  duration-300

                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                "
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}