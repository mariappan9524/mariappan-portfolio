import { motion } from "framer-motion";
import Typography from "../../components/ui/Typography";
import { container, fadeUp } from "../../animations/hero";

export default function ProjectsHeader() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="mx-auto max-w-5xl text-center"
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
        Featured Projects
      </motion.span>

      {/* Heading */}

      <motion.div
        variants={fadeUp}
        className="mt-4"
      >
        <Typography
          variant="h1"
          className="
            mx-auto

            max-w-6xl

            text-2xl
            md:text-4xl
            lg:text-[50px]

            font-extrabold

            leading-[1.05]

            tracking-[-0.03em]

            text-white
          "
        >
          Building Enterprise Applications
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            That Deliver Real Impact
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
            leading-7

            text-slate-400
          "
        >
          A collection of enterprise web and mobile applications
          built using modern technologies with a strong focus on
          scalability, performance, clean architecture, and
          exceptional user experience.
        </Typography>
      </motion.div>
    </motion.div>
  );
}