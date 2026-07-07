import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const { scrollY } = useScroll();

  // Fade out during the first 150px of scrolling
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ChevronDown className="h-8 w-8 text-cyan-400" />
    </motion.div>
  );
}