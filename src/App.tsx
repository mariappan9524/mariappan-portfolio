import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import AnimatedBackground from "./components/effects/AnimatedBackground";
import ScrollProgress from "./components/effects/ScrollProgress";

import LoadingScreen from "./components/loading/LoadingScreen";

import useLoading from "./hooks/useLoading";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import BackToTop from "./components/effects/BackToTop";
function App() {
  const loading = useLoading();

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <main
            key="portfolio"
            className="
              relative
              z-10
              overflow-x-hidden
              text-white
            "
          >
            <AnimatedBackground />
            <ScrollProgress />

            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Projects />

            <Experience />

            <Contact />

            <Footer />
            <BackToTop />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;