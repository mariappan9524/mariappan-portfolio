import {
  lazy,
  Suspense,
} from "react";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import AnimatedBackground from "./components/effects/AnimatedBackground";
import ScrollProgress from "./components/effects/ScrollProgress";
import LoadingScreen from "./components/loading/LoadingScreen";
import BackToTop from "./components/effects/BackToTop";

import useLoading from "./hooks/useLoading";

import Hero from "./sections/Hero";

// Lazy Loaded Sections
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills/Skills"));
const Projects = lazy(() => import("./sections/Projects/Projects"));
const Experience = lazy(() => import("./sections/Experience/Experience"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

function App() {
  const loading = useLoading();

  return (
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

          <Suspense fallback={null}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </Suspense>

          <BackToTop />
        </main>
      )}
    </AnimatePresence>
  );
}

export default App;