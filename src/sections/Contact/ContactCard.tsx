import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { contactData } from "./contactData";

export default function ContactCard() {
  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail size={20} />;

      case "phone":
        return <Phone size={20} />;

      case "location":
        return <MapPin size={20} />;

      case "linkedin":
        return <FaLinkedin size={20} />;

      case "github":
        return <FaGithub size={20} />;

      default:
        return <Mail size={20} />;
    }
  };

  return (
    <>
      {contactData.map((item, index) => (
        <motion.a
          key={item.title}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={
            item.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
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
            delay: index * 0.08,
            duration: 0.45,
          }}
          whileHover={{
            y: -4,
          }}
          className="
            group
            relative
            overflow-hidden

            rounded-2xl

            border
            border-white/10

            bg-white/[0.04]

            p-5

            transition-all
            duration-300

            hover:border-cyan-400/40
            hover:bg-cyan-500/[0.05]
            hover:shadow-[0_18px_45px_rgba(34,211,238,0.16)]
          "
        >
          {/* Hover Glow */}

          <div
            className="
              absolute
              inset-0

              opacity-0

              bg-gradient-to-br
              from-cyan-500/5
              via-transparent
              to-blue-500/5

              transition-opacity
              duration-300

              group-hover:opacity-100
            "
          />

          <div className="relative flex items-center gap-4">
            {/* Icon */}

            <div
              className="
                flex

                h-12
                w-12

                shrink-0

                items-center
                justify-center

                rounded-xl

                bg-cyan-500/10

                text-cyan-400

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:bg-cyan-500/20
              "
            >
              {getIcon(item.type)}
            </div>

            {/* Text */}

            <div className="min-w-0 flex-1">
              <p
                className="
                  text-xs

                  uppercase

                  tracking-[0.25em]

                  text-slate-500
                "
              >
                {item.title}
              </p>

              <h3
                className="
                  mt-1

                  truncate

                  text-base

                  font-semibold

                  text-white
                "
              >
                {item.value}
              </h3>
            </div>

            {/* Arrow */}

            {item.href !== "#" && (
              <ArrowUpRight
                size={18}
                className="
                  shrink-0

                  text-slate-500

                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-cyan-400
                "
              />
            )}
          </div>
        </motion.a>
      ))}
    </>
  );
}