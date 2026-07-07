import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

import resume from "../../assets/resume/Mariappan_Resume.pdf";

export default function HeroButtons() {
  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Mariappan_Resume.pdf";
    link.click();
  };

  return (
    <div
      className="
        mt-8

        flex
        flex-col
        sm:flex-row

        w-full
        sm:w-auto

        gap-4
      "
    >
      {/* Hire Me */}
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="w-full sm:w-auto"
      >
        <Button
          onClick={handleHireMe}
          className="
            w-full
            sm:w-auto

            min-w-[180px]

            h-12
          "
        >
          Hire Me
        </Button>
      </motion.div>

      {/* Download Resume */}
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="w-full sm:w-auto"
      >
        <Button
          variant="outline"
          onClick={handleDownloadResume}
          className="
            w-full
            sm:w-auto

            min-w-[180px]

            h-12
          "
        >
          Download Resume
        </Button>
      </motion.div>
    </div>
  );
}