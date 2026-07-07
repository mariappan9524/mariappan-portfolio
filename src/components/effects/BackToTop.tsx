import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          transition={{
            duration: 0.25,
          }}
          whileHover={{
            scale: 1.08,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed

            bottom-6
            right-6

            z-[100]

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-full

            border
            border-cyan-400/20

            bg-slate-900/70

            backdrop-blur-xl

            shadow-[0_0_35px_rgba(34,211,238,.18)]

            transition-all
          "
        >
          <ArrowUp
            className="
              h-5
              w-5

              text-cyan-300
            "
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}