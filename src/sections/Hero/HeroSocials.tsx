import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSocials() {
  return (
    <div className="mt-10 flex gap-6 text-2xl">
      <motion.div
        whileHover={{ scale: 1.2, y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub className="cursor-pointer text-slate-400 transition-colors hover:text-white" />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2, y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaLinkedin className="cursor-pointer text-slate-400 transition-colors hover:text-cyan-400" />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2, y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaEnvelope className="cursor-pointer text-slate-400 transition-colors hover:text-red-400" />
      </motion.div>
    </div>
  );
}