import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-cyan-500/20

          bg-cyan-500/10

          px-5
          py-2

          text-sm

          font-semibold

          tracking-wide

          text-cyan-300
        "
      >
        CONTACT
      </motion.div>

      {/* Title */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
        className="
          mt-2

          text-4xl
          lg:text-5xl

          font-black

          leading-tight

          text-white
        "
      >
        Let's Build Something
        <br />

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
          Amazing Together
        </span>
      </motion.h2>

      {/* Subtitle */}

      <motion.p
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
          delay: 0.3,
          duration: 0.6,
        }}
        className="
          mx-auto

          mt-8

          max-w-3xl

          text-lg

          leading-8

          text-slate-400
        "
      >
        I'm always open to discussing new opportunities,
        enterprise frontend development, Flutter applications,
        or collaborating on innovative products.
      </motion.p>
    </div>
  );
}