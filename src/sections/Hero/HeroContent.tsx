import { motion } from "framer-motion";
import { container, fadeUp } from "../../animations/hero";

import Typography from "../../components/ui/Typography";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import TypewriterText from "../../components/ui/TypewriterText";

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="
        w-full
        max-w-2xl

        text-center
        lg:text-left
      "
    >
      {/* Availability Badge */}
      <motion.div variants={fadeUp}>
        <span
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-emerald-400/30

            bg-emerald-500/10

            px-4
            py-2

            text-xs
            sm:text-sm

            font-medium

            text-emerald-300
          "
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

          Available for Frontend & Flutter Opportunities
        </span>
      </motion.div>

      {/* Hero Title */}
      <motion.div
        variants={fadeUp}
        className="mt-6"
      >
        <Typography
          variant="hero"
          className="
            leading-tight
            text-white
          "
        >
          Hi, I'm
          <br />

          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            Mariappan P
          </span>
        </Typography>
      </motion.div>

      {/* Typewriter */}
      <motion.div variants={fadeUp}>
        <Typography
          variant="h2"
          className="
            mt-5
            text-cyan-400
          "
        >
          <TypewriterText />
        </Typography>
      </motion.div>

      {/* Description */}
      <motion.div variants={fadeUp}>
        <Typography
          className="
            mt-6

            mx-auto
            lg:mx-0

            max-w-xl

            leading-7
            sm:leading-8
          "
        >
          Senior Frontend Developer with 4+ years of experience building
          scalable web applications using React, Angular, TypeScript, and
          modern frontend technologies. Currently expanding my expertise
          into Flutter to build high-quality cross-platform mobile
          applications with clean architecture and exceptional user
          experiences.
        </Typography>
      </motion.div>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        className="
          mt-8

          flex
          justify-center
          lg:justify-start
        "
      >
        <HeroButtons />
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={fadeUp}
        className="
          mt-8

          flex
          justify-center
          lg:justify-start
        "
      >
        <HeroSocials />
      </motion.div>
    </motion.div>
  );
}