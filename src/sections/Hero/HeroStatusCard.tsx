import { motion } from "framer-motion";

export default function HeroStatusCard() {
  return (
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
        absolute

        top-2
        right-2

        sm:top-2
        sm:right-4

        md:-top-2
        md:-right-2

        lg:-top-3
        lg:-right-8

        z-30

        rounded-2xl

        border
        border-white/10

        bg-slate-900/70

        backdrop-blur-xl

        px-3
        py-2

        sm:px-4
        sm:py-3

        lg:px-5
        lg:py-4

        shadow-[0_20px_40px_rgba(0,0,0,0.35)]
      "
    >
      <p
        className="
          text-[11px]
          sm:text-xs
          lg:text-sm

          font-semibold
          text-white
          whitespace-nowrap
        "
      >
        ✓ 4+ Years Experience
      </p>

      <p
        className="
          mt-1

          text-[10px]
          sm:text-[11px]
          lg:text-xs

          text-slate-400
          whitespace-nowrap
        "
      >
        React • Angular • Flutter
      </p>
    </motion.div>
  );
}