import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function HeroSocials() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/mariappan9524",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/mariappan-petchiappan-7bb65019b",
      color: "hover:text-cyan-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:vineethp117@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <div
      className="
        mt-10

        flex
        items-center

        gap-6
      "
    >
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target={
            social.name === "Email"
              ? "_self"
              : "_blank"
          }
          rel="noopener noreferrer"
          aria-label={social.name}
          whileHover={{
            scale: 1.18,
            y: -5,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.2,
          }}
          className={`
            text-2xl

            text-slate-400

            transition-all
            duration-300

            ${social.color}
          `}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}