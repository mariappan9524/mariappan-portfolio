import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Laptop2, Smartphone, Database, Wrench } from "lucide-react";

import { skillsData } from "./skillsData";
import SkillShowcase from "./SkillShowcase";

export default function SkillsContent() {
  const [activeTab, setActiveTab] = useState(0);

  const activeSkill = skillsData[activeTab];

  const tabIcons = [Laptop2, Smartphone, Database, Wrench];

  return (
    <div className="mx-auto max-w-5xl">
      {/* Navigation */}

      <motion.div
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
          duration: 0.6,
        }}
        className="flex justify-center px-2"
      >
        <div
          className="
            relative

            inline-flex
            items-center

            max-w-full
            overflow-x-auto
            scrollbar-hide

            rounded-full

            border
            border-white/10

            bg-white/[0.04]

            p-2

            backdrop-blur-lg
            lg:backdrop-blur-2xl

            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          "
        >
          <motion.div
            animate={{
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none

              absolute
              left-8
              right-8
              top-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-cyan-400/40
              to-transparent
            "
          />

          {skillsData.map((item, index) => {
            const Icon = tabIcons[index];

            return (
              <button
                key={item.title}
                onClick={() => setActiveTab(index)}
                aria-label={item.title}
                title={item.title}
                className="
        group
        relative
        overflow-hidden

        rounded-full

        p-3
        sm:px-5
        sm:py-3
        lg:px-6

        transition-all
        duration-300
      "
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="skills-pill"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                      mass: 0.8,
                    }}
                    className={`
            absolute
            inset-0

            rounded-full

            border
            border-white/15

            bg-gradient-to-r

            ${item.color}

            opacity-25

            shadow-[0_0_30px_rgba(255,255,255,0.08)]
          `}
                  />
                )}

                {/* Hover Glow */}
                <div
                  className="
          absolute
          inset-0

          scale-0

          rounded-full

          bg-white/5

          transition-transform
          duration-300

          group-hover:scale-100
        "
                />

                <span
                  className={`
          relative
          z-10

          flex
          items-center
          justify-center

          gap-2

          font-semibold

          transition-colors
          duration-300

          ${
            activeTab === index
              ? "text-white"
              : "text-slate-400 group-hover:text-white"
          }
        `}
                >
                  <motion.div
                    animate={{
                      rotate: activeTab === index ? [0, -5, 5, 0] : 0,
                      scale: activeTab === index ? [1, 1.08, 1] : 1,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  >
                    <Icon size={18} className="sm:size-4" />
                  </motion.div>

                  <span className="hidden sm:inline text-sm">{item.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Showcase */}

      <div className="mt-5 min-h-[420px] sm:min-h-[460px] lg:min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill.title}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SkillShowcase category={activeSkill} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator */}

      <div className="mt-6 flex justify-center gap-2">
        {skillsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              transition-all
              duration-300

              ${
                activeTab === index
                  ? "h-2 w-10 rounded-full bg-cyan-400"
                  : "h-2 w-2 rounded-full bg-white/20 hover:bg-white/40"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
