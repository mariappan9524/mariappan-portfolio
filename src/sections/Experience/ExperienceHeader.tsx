import { motion } from "framer-motion";
import Typography from "../../components/ui/Typography";
import { container, fadeUp } from "../../animations/hero";

export default function ExperienceHeader() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="mx-auto max-w-4xl text-center"
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

          px-5
          py-2

          text-xs
          font-semibold

          uppercase
          tracking-[0.32em]

          text-cyan-400
        "
      >
        My Journey
      </motion.span>

      {/* Heading */}

      <motion.div
        variants={fadeUp}
        className="mt-4"
      >
        <Typography
          variant="h1"
          className="
            text-4xl
            md:text-5xl
            lg:text-[50px]

            font-extrabold

            leading-none
            tracking-tight

            text-white
          "
        >
          Building Enterprise Software{" "}

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            That Powers Businesses
          </span>
        </Typography>
      </motion.div>

      {/* Divider */}

      <motion.div
        variants={fadeUp}
        className="
          mx-auto
          mt-4

          h-px
          w-28

          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />

      {/* Description */}

      <motion.div
        variants={fadeUp}
        className="mt-4"
      >
        <Typography
          className="
            mx-auto
            max-w-3xl

            text-[15px]
            leading-8

            text-slate-400
          "
        >
          Over
          <span className="font-semibold text-white">
            {" "}4+ years{" "}
          </span>

          of professional experience building scalable enterprise web and
          mobile applications using

          <span className="font-semibold text-white">
            {" "}React
          </span>,

          <span className="font-semibold text-white">
            {" "}Angular
          </span>,

          <span className="font-semibold text-cyan-400">
            {" "}Flutter
          </span>

          {" "}and modern frontend technologies with a strong focus on
          performance, maintainability and exceptional user experience.
        </Typography>
      </motion.div>
    </motion.div>
  );
}