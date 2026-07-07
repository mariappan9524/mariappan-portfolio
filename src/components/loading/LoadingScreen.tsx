import { motion } from "framer-motion";
import logo from "../../assets/logo/mp-logo.png";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        overflow-hidden

        bg-slate-950
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute

          h-[500px]
          w-[500px]

          rounded-full

          bg-cyan-500/10

          blur-[160px]
        "
      />

      {/* Content */}

      <div
        className="
          relative

          flex
          flex-col
          items-center
        "
      >
        {/* Logo */}

        <motion.img
          src={logo}
          alt="Mariappan Logo"
          animate={{
            scale: [1, 1.06, 1],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-28
            w-28

            select-none
          "
        />

        {/* Title */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-8

            text-2xl

            font-bold

            text-white
          "
        >
          Mariappan Portfolio
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-2

            text-slate-400
          "
        >
          Initializing Experience...
        </motion.p>

        {/* Progress */}

        <div
          className="
            mt-10

            h-[6px]
            w-[240px]

            overflow-hidden

            rounded-full

            bg-white/10
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="
              h-full

              rounded-full

              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500
            "
          />
        </div>

        {/* Footer */}

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mt-6

            text-sm

            tracking-[0.25em]

            text-cyan-300
          "
        >
          SENIOR FRONTEND DEVELOPER
        </motion.p>
      </div>
    </motion.div>
  );
}