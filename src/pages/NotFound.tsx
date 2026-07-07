import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-slate-950
        px-6
      "
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-500/20
          blur-[170px]
        "
      />

      <div className="relative z-10 max-w-xl text-center">
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-8xl
            font-black
            tracking-tight
            text-transparent
            bg-gradient-to-r
            from-cyan-400
            via-sky-400
            to-blue-500
            bg-clip-text
            sm:text-9xl
          "
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="
            mt-6
            text-3xl
            font-bold
            text-white
          "
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-5
            leading-8
            text-slate-400
          "
        >
          The page you're looking for doesn't exist or may have
          been moved.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={goHome}
          className="
            mt-10

            inline-flex
            items-center
            gap-3

            rounded-full

            bg-gradient-to-r
            from-cyan-500
            to-blue-500

            px-7
            py-3

            font-semibold
            text-white

            shadow-[0_20px_45px_rgba(34,211,238,0.25)]

            transition-all
          "
        >
          <Home size={18} />
          Back to Home
        </motion.button>
      </div>
    </section>
  );
}