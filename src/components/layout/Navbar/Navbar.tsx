import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Logo from "../Navbar/Logo";
import { navigation } from "../../../constants/navigation";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHireMe = () => {
    handleScroll("contact");
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = "";

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          currentSection = id;
        }
      });

      setActiveItem(currentSection === "home" ? "" : currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection);

    return () =>
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 96;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Container>
          <nav
            className="
              mt-5
              flex
              h-[68px]
              items-center
              justify-between

              rounded-full

              border
              border-white/10

              bg-slate-900/60

              px-5
              lg:px-7

              backdrop-blur-2xl

              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            "
          >
            <Logo />

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className={`
                      group
                      relative
                      overflow-hidden

                      rounded-full

                      px-4
                      py-2

                      text-sm
                      font-medium

                      transition-colors
                      duration-300

                      ${
                        activeItem === item.id
                          ? "text-white"
                          : "text-slate-300 hover:text-white"
                      }
                    `}
                  >
                    {activeItem === item.id && (
                      <motion.span
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 28,
                          mass: 0.8,
                        }}
                        className="
                          absolute
                          inset-0

                          rounded-full

                          border
                          border-cyan-400/10

                          bg-gradient-to-r
                          from-cyan-500/10
                          to-blue-500/10

                          backdrop-blur-md
                        "
                      />
                    )}

                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop Hire Me */}
            <div className="hidden lg:flex items-center border-l border-white/10 pl-4">
              <Button onClick={handleHireMe}>
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="
                lg:hidden

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-xl

                border
                border-white/10

                bg-slate-900/70

                text-white

                transition-all
                duration-300

                hover:border-cyan-400/40
                hover:text-cyan-400
              "
            >
              <Menu size={22} />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0

              z-[999]

              bg-slate-950/90

              backdrop-blur-2xl
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="
                absolute
                right-6
                top-6

                rounded-xl

                border
                border-white/10

                p-3

                text-white

                hover:border-cyan-400
              "
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="
                flex
                h-full

                flex-col

                items-center
                justify-center

                gap-8
              "
            >
              {navigation.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  onClick={() => handleScroll(item.id)}
                  className={`
                    text-3xl

                    font-semibold

                    transition-colors

                    ${
                      activeItem === item.id
                        ? "text-cyan-400"
                        : "text-white hover:text-cyan-400"
                    }
                  `}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="pt-6">
                <Button onClick={handleHireMe}>
                  Hire Me
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}