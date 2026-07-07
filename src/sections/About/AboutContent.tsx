import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Typography from "../../components/ui/Typography";
import Button from "../../components/ui/Button";

import { container, fadeUp } from "../../animations/hero";

import resume from "../../assets/resume/Mariappan_Resume.pdf";

const skills = [
  "Enterprise Web Apps",
  "React & Angular",
  "Flutter Development",
  "Clean Architecture",
  "Performance",
  "Responsive UI",
];

export default function AboutContent() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Mariappan_Resume.pdf";
    link.click();
  };

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
        max-w-xl

        text-center
        lg:text-left
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

          text-[11px]
          sm:text-xs

          font-semibold

          uppercase
          tracking-[0.28em]

          text-cyan-400
        "
      >
        About Me
      </motion.span>

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        className="mt-5"
      >
        <Typography
          variant="h1"
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl

            font-extrabold

            leading-tight

            tracking-tight
          "
        >
          Who I Am &
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            What I Build
          </span>
        </Typography>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={fadeUp}
        className="
          mt-6

          mx-auto
          lg:mx-0

          h-[2px]
          w-20

          rounded-full

          bg-gradient-to-r
          from-cyan-400
          to-transparent
        "
      />

      {/* Description */}
      <motion.div
        variants={fadeUp}
        className="mt-6 space-y-5"
      >
        <Typography
          className="
            leading-7
            sm:leading-8

            text-slate-300
          "
        >
          I'm{" "}
          <span className="font-semibold text-white">
            Mariappan P
          </span>
          , a Senior Frontend Developer with
          <span className="font-semibold text-cyan-400">
            {" "}4+ years
          </span>
          {" "}of experience building scalable enterprise applications using
          <span className="font-semibold text-white">
            {" "}React, Angular, TypeScript
          </span>
          {" "}and
          <span className="font-semibold text-cyan-400">
            {" "}Flutter
          </span>.
        </Typography>

        <Typography
          className="
            leading-7
            sm:leading-8

            text-slate-400
          "
        >
          I focus on clean architecture, performance, and building modern,
          maintainable digital products with exceptional user experiences.
        </Typography>
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={fadeUp}
        className="
          mt-8

          grid
          grid-cols-1
          sm:grid-cols-2

          gap-x-8
          gap-y-4
        "
      >
        {skills.map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              gap-3
            "
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />

            <span className="text-sm text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        className="
          mt-10

          flex
          justify-center
          lg:justify-start
        "
      >
        <Button
          onClick={handleDownloadResume}
        >
          Download Resume
        </Button>
      </motion.div>
    </motion.div>
  );
}