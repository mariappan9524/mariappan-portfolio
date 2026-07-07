import { motion } from "framer-motion";
import {
  Briefcase,
  FolderGit2,
  Code2,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    value: "4+",
    label: "Years Experience",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    value: "15+",
    label: "Projects Delivered",
    icon: <FolderGit2 className="h-5 w-5" />,
  },
  {
    value: "10+",
    label: "Core Technologies",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    value: "India",
    label: "Available Worldwide",
    icon: <MapPin className="h-5 w-5" />,
  },
];

const availability = [
  "Full-Time",
  "Remote",
  "Freelance",
];

export default function AboutStats() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      className="space-y-6"
    >
      {/* Stats */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-5
        "
      >
        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              overflow-hidden

              rounded-3xl

              border
              border-white/10

              bg-gradient-to-br
              from-white/[0.05]
              to-white/[0.02]

              p-5
              sm:p-6

              backdrop-blur-xl

              hover:border-cyan-400/40
              hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]

              transition-all
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                right-0
                top-0

                h-24
                w-24

                rounded-full

                bg-cyan-500/5

                blur-3xl
              "
            />

            <div
              className="
                mb-5

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
              {item.icon}
            </div>

            <h3
              className="
                text-3xl
                sm:text-4xl

                font-bold

                text-white
              "
            >
              {item.value}
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-slate-400
              "
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Featured Card */}
      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative
          overflow-hidden

          rounded-3xl

          border
          border-white/10

          bg-gradient-to-br
          from-white/[0.05]
          via-white/[0.03]
          to-cyan-500/[0.04]

          p-6
          sm:p-7

          backdrop-blur-xl

          hover:border-cyan-400/40
          hover:shadow-[0_25px_60px_rgba(34,211,238,0.16)]

          transition-all
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            -right-20
            -top-20

            h-48
            w-48

            rounded-full

            bg-cyan-500/10

            blur-[100px]
          "
        />

        <span
          className="
            text-[11px]

            font-semibold

            uppercase

            tracking-[0.3em]

            text-cyan-400
          "
        >
          EXPERIENCE
        </span>

        <h3
          className="
            mt-4

            text-xl
            sm:text-2xl

            font-bold

            leading-snug

            text-white
          "
        >
          Building scalable enterprise applications with modern frontend
          technologies.
        </h3>

        <p
          className="
            mt-4

            text-sm
            sm:text-[15px]

            leading-7

            text-slate-400
          "
        >
          React, Angular, TypeScript and Flutter focused on clean
          architecture, performance and maintainable code.
        </p>

        <div
          className="
            mt-6

            flex
            flex-wrap

            gap-3
          "
        >
          {availability.map((item) => (
            <div
              key={item}
              className="
                inline-flex
                items-center

                gap-2

                rounded-full

                border
                border-cyan-500/20

                bg-cyan-500/10

                px-3
                py-1.5

                text-xs
                sm:text-sm

                text-slate-200
              "
            >
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />

              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}