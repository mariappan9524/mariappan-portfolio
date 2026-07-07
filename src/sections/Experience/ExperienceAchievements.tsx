import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const achievements = [
  {
    icon: LayoutDashboard,
    title: "Enterprise Applications",
  },
  {
    icon: Cpu,
    title: "REST API Integration",
  },
  {
    icon: Smartphone,
    title: "Cross Platform Development",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
  },
  {
    icon: ShieldCheck,
    title: "Azure DevOps Workflow",
  },
  {
    icon: CheckCircle2,
    title: "Reusable Component Architecture",
  },
];

export default function ExperienceAchievements() {
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
        hover:shadow-[0_30px_80px_rgba(34,211,238,0.15)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -left-20
          -bottom-20

          h-72
          w-72

          rounded-full

          bg-blue-500/10

          blur-[120px]
        "
      />

      <div className="relative">
        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.30em]

            text-cyan-400
          "
        >
          Highlights
        </span>

        <h3
          className="
            mt-3

            text-3xl

            font-bold

            text-white
          "
        >
          Professional Impact
        </h3>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  x: 5,
                }}
                className="
                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-4
                  py-4

                  transition-all
                  duration-300

                  hover:border-cyan-400/30
                  hover:bg-cyan-500/[0.05]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-xl

                    bg-cyan-500/10

                    text-cyan-400
                  "
                >
                  <Icon size={22} />
                </div>

                <p
                  className="
                    text-sm

                    font-medium

                    text-white
                  "
                >
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}