import { motion } from "framer-motion";
import Typography from "../../components/ui/Typography";
import { container, fadeUp } from "../../animations/hero";

export default function SkillsHeader() {
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
        mx-auto
        w-full
        max-w-6xl
        text-center
      "
    >
      {/* Badge */}
      <motion.span
        variants={fadeUp}
        className="
          inline-flex
          items-center

          rounded-full

          border
          border-cyan-500/20

          bg-cyan-500/10

          px-4
          py-2

          sm:px-5

          text-[11px]
          sm:text-xs

          font-semibold

          uppercase
          tracking-[0.28em]

          text-cyan-400
        "
      >
        My Expertise
      </motion.span>

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        className="mt-5"
      >
        <Typography
          variant="h1"
          className="
            mx-auto

            max-w-5xl

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-[58px]

            font-extrabold

            leading-tight

            tracking-tight

            text-white
          "
        >
          Technologies That{" "}

          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500

              bg-clip-text
              text-transparent
            "
          >
            Power My Work
          </span>
        </Typography>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={fadeUp}
        className="
          mx-auto

          mt-6

          h-[2px]
          w-20
          sm:w-28

          rounded-full

          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />

      {/* Description */}
      <motion.div
        variants={fadeUp}
        className="mt-6"
      >
        <Typography
          className="
            mx-auto

            max-w-3xl

            px-2
            sm:px-0

            text-sm
            sm:text-base

            leading-7
            sm:leading-8

            text-slate-400
          "
        >
          I specialize in building modern enterprise applications using
          <span className="font-semibold text-white">
            {" "}React
          </span>,
          <span className="font-semibold text-white">
            {" "}Angular
          </span>,
          <span className="font-semibold text-white">
            {" "}TypeScript
          </span>{" "}
          and
          <span className="font-semibold text-cyan-400">
            {" "}Flutter
          </span>, with a strong focus on performance, scalability and creating
          intuitive user experiences.
        </Typography>
      </motion.div>
    </motion.div>
  );
}