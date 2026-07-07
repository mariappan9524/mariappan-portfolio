import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function FooterContent() {
  return (
    <div className="text-center">
      {/* Logo */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="
            mx-auto

            flex

            h-20
            w-20

            items-center
            justify-center

            rounded-full

            bg-gradient-to-r

            from-cyan-500
            to-blue-600

            text-3xl

            font-black

            text-white

            shadow-lg

            shadow-cyan-500/20
          "
        >
          MP
        </div>
      </motion.div>

      {/* Name */}

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="
          mt-8

          text-4xl

          font-black

          text-white
        "
      >
        Mariappan P
      </motion.h2>

      {/* Role */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="
          mt-3

          text-cyan-400

          text-lg
        "
      >
        Senior Frontend Developer
      </motion.p>

      {/* Tech */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="
          mt-3

          text-slate-400
        "
      >
        React • Angular • Flutter • TypeScript
      </motion.p>

      {/* Social */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="
          mt-10

          flex

          justify-center

          gap-5
        "
      >
        <a
          href="mailto:vineethpl17@gmail.com"
          className="
            flex

            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            border
            border-white/10

            bg-white/5

            text-cyan-400

            transition-all

            duration-300

            hover:-translate-y-1

            hover:border-cyan-400

            hover:bg-cyan-500/10
          "
        >
          <Mail size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/mariappan-petchiappan-7bb65019b"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex

            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            border
            border-white/10

            bg-white/5

            text-cyan-400

            transition-all

            duration-300

            hover:-translate-y-1

            hover:border-cyan-400

            hover:bg-cyan-500/10
          "
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="#hero"
          className="
            flex

            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            border
            border-white/10

            bg-white/5

            text-cyan-400

            transition-all

            duration-300

            hover:-translate-y-1

            hover:border-cyan-400

            hover:bg-cyan-500/10
          "
        >
          <ArrowUpRight size={22} />
        </a>
      </motion.div>

      {/* Divider */}

      <div className="my-12 h-px bg-white/10" />

      {/* Copyright */}

      <p className="text-sm text-slate-500">
        © 2026 Mariappan P • Built with React, TypeScript, Tailwind CSS &
        Framer Motion.
      </p>
    </div>
  );
}