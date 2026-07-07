import { motion } from "framer-motion";

export default function HeroAssistant() {
  return (
    <motion.div
      initial={{
        x: 240,
        opacity: 0,
      }}
      animate={{
        x: [240, 0, 0, 240],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
      }}
      className="
        absolute
        bottom-8
        right-0
        z-30
      "
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center"
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-cyan-400/20
            blur-2xl
            scale-150
          "
        />

        {/* Head */}

        <div
          className="
            relative

            h-16
            w-16

            rounded-full

            border
            border-cyan-300/40

            bg-white/10

            backdrop-blur-xl

            shadow-[0_0_30px_rgba(34,211,238,.35)]
          "
        >
          {/* Eyes */}

          <motion.div
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              absolute
              left-4
              top-6

              h-2
              w-2

              rounded-full

              bg-cyan-300

              shadow-[0_0_12px_#22d3ee]
            "
          />

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              absolute
              right-4
              top-6

              h-2
              w-2

              rounded-full

              bg-cyan-300

              shadow-[0_0_12px_#22d3ee]
            "
          />

          {/* Smile */}

          <div
            className="
              absolute
              bottom-4
              left-1/2

              h-[2px]
              w-6

              -translate-x-1/2

              rounded-full

              bg-cyan-300/80
            "
          />
        </div>

        {/* Neck */}

        <div className="h-2 w-[2px] bg-cyan-300" />

        {/* Body */}

        <div
          className="
            relative

            h-20
            w-14

            rounded-[18px]

            border
            border-cyan-400/30

            bg-white/10

            backdrop-blur-xl
          "
        >
          <div
            className="
              absolute

              left-1/2
              top-5

              h-7
              w-[2px]

              -translate-x-1/2

              bg-cyan-300/60
            "
          />

          <div
            className="
              absolute

              left-4
              top-8

              h-2
              w-2

              rounded-full

              bg-cyan-300
            "
          />

          <div
            className="
              absolute

              right-4
              top-8

              h-2
              w-2

              rounded-full

              bg-cyan-300
            "
          />
        </div>

        {/* Left Arm */}

        <div
          className="
            absolute

            left-0
            top-[82px]

            h-12
            w-[2px]

            -rotate-45

            rounded-full

            bg-cyan-300
          "
        />

        {/* Right Arm */}

        <motion.div
          animate={{
            rotate: [-30, 35, -30],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="
            absolute

            right-0
            top-[82px]

            origin-top

            h-12
            w-[2px]

            rounded-full

            bg-cyan-300
          "
        />

        {/* Legs */}

        <div className="mt-1 flex gap-4">
          <div className="h-12 w-[2px] rounded-full bg-cyan-300" />
          <div className="h-12 w-[2px] rounded-full bg-cyan-300" />
        </div>
      </motion.div>
    </motion.div>
  );
}