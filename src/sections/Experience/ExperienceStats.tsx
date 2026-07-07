import { motion } from "framer-motion";

export default function ExperienceStats() {
  const stats = [
    {
      value: "4+",
      label: "Years Experience",
      color: "from-cyan-500 to-blue-500",
    },
    {
      value: "3",
      label: "Enterprise Projects",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      value: "10+",
      label: "Enterprise Modules",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="space-y-5">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 25,
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
            y: -8,
            scale: 1.03,
          }}
          className="
            group
            relative
            overflow-hidden

            rounded-[28px]

            border
            border-white/10

            bg-gradient-to-br
            from-slate-900/95
            via-slate-900/90
            to-slate-950

            p-7

            backdrop-blur-3xl

            transition-all
            duration-500

            hover:border-cyan-400/30
            hover:shadow-[0_25px_70px_rgba(34,211,238,0.15)]
          "
        >
          {/* Glow */}

          <div
            className={`
              absolute

              -right-16
              -top-16

              h-40
              w-40

              rounded-full

              bg-gradient-to-br

              ${item.color}

              opacity-10

              blur-[80px]
            `}
          />

          <div className="relative">
            <h2
              className={`
                bg-gradient-to-r

                ${item.color}

                bg-clip-text

                text-5xl

                font-black

                text-transparent
              `}
            >
              {item.value}
            </h2>

            <p
              className="
                mt-3

                text-sm

                font-medium

                uppercase

                tracking-[0.25em]

                text-slate-400
              "
            >
              {item.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}