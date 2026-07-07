import { motion } from "framer-motion";
import { fadeLeft } from "../../animations/hero";

import profile from "../../assets/images/profile.png";

import HeroStatusCard from "./HeroStatusCard";
import HeroAvatarVideo from "./HeroAvatarVideo";

export default function HeroImage() {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      className="
relative
flex
items-center
justify-center

h-[300px]
w-[300px]

sm:h-[340px]
sm:w-[340px]

md:h-[380px]
md:w-[380px]

lg:h-[420px]
lg:w-[420px]
"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[280px]
w-[280px]

sm:h-[320px]
sm:w-[320px]

md:h-[360px]
md:w-[360px]

lg:h-[400px]
lg:w-[400px]
          rounded-full
          bg-cyan-500/20
          blur-[110px]
        "
      />

      {/* Premium Dashed Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[320px]
w-[320px]

sm:h-[360px]
sm:w-[360px]

md:h-[404px]
md:w-[404px]

lg:h-[440px]
lg:w-[440px]
          rounded-full
          border-[2px]
          border-dashed
          border-cyan-300/20
        "
      />

      {/* Orbit Light */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
absolute

h-[320px]
w-[320px]

sm:h-[360px]
sm:w-[360px]

md:h-[404px]
md:w-[404px]

lg:h-[440px]
lg:w-[440px]
"
      >
        <div
          className="
            absolute
            left-1/2
            top-0

            h-3
            w-3

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-cyan-300

            shadow-[0_0_18px_rgba(103,232,249,.95)]
          "
        />
      </motion.div>

      {/* Glass Ring */}
      <div
        className="
          absolute
          h-[310px]
w-[310px]

sm:h-[350px]
sm:w-[350px]

md:h-[392px]
md:w-[392px]

lg:h-[428px]
lg:w-[428px]

          rounded-full

          border
          border-white/10

          bg-white/[0.03]

          backdrop-blur-md
        "
      />

      {/* Animated Gradient Ring */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.015, 1],
        }}
        transition={{
          rotate: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          h-[316px]
w-[316px]

sm:h-[356px]
sm:w-[356px]

md:h-[398px]
md:w-[398px]

lg:h-[434px]
lg:w-[434px]

          rounded-full

          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-cyan-400

          p-[2px]

          opacity-70
        "
      >
        <div className="h-full w-full rounded-full bg-slate-950" />
      </motion.div>

      {/* Profile */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20

         h-[300px]
w-[300px]

sm:h-[330px]
sm:w-[330px]

md:h-[360px]
md:w-[360px]

lg:h-[380px]
lg:w-[380px]

          overflow-hidden

          rounded-full

border-[3px]
          border-cyan-400/30

          bg-slate-900

          shadow-[0_0_70px_rgba(34,211,238,0.22)]
        "
      >
        {/* Glass Reflection */}
        <div
          className="
            absolute
            left-6
top-6

sm:left-8
sm:top-8

h-20
w-20

sm:h-24
sm:w-24

lg:h-28
lg:w-28

            rounded-full

            bg-white/10

            blur-3xl
          "
        />

        {/* Soft Inner Highlight */}
        <div
          className="
            absolute
            inset-0

            rounded-full

            bg-gradient-to-b
            from-white/8
            via-transparent
            to-transparent

            z-10
          "
        />

        <img
          src={profile}
          alt="Mariappan"
          className="
            relative
            z-0

            h-full
            w-full

            object-cover
          "
        />
      </motion.div>

      {/* Avatar */}
      <HeroAvatarVideo />

      {/* Status Card */}
      <div className="absolute inset-0 z-40">
        <HeroStatusCard />
      </div>
    </motion.div>
  );
}
