import { motion } from "framer-motion";

export default function Logo() {
  const handleHomeClick = () => {
    const homeSection = document.getElementById("home");

    if (!homeSection) return;

    window.scrollTo({
      top: homeSection.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={handleHomeClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="flex cursor-pointer items-center gap-3 bg-transparent border-none outline-none"
    >
      {/* Brand Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 text-base font-bold text-white shadow-[0_0_25px_rgba(34,211,238,0.35)]">
        MP
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <span className="text-lg font-semibold tracking-tight text-white">
          Mariappan
        </span>
      </div>
    </motion.button>
  );
}