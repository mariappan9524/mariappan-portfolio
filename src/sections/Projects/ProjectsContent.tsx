import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { projectData } from "./projectData";
import ProjectShowcase from "./ProjectShowcase";

export default function ProjectsContent() {
  const [activeProject, setActiveProject] = useState(0);

  const currentProject = projectData[activeProject];

  const nextProject = () => {
    setActiveProject((prev) =>
      prev === projectData.length - 1 ? 0 : prev + 1
    );
  };

  const previousProject = () => {
    setActiveProject((prev) =>
      prev === 0 ? projectData.length - 1 : prev - 1
    );
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Top Navigation */}

      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={previousProject}
          className="
            flex
            items-center
            gap-2

            rounded-full

            border
            border-white/10

            bg-white/5

            px-5
            py-3

            text-sm
            text-slate-300

            transition-all
            duration-300

            hover:border-cyan-400/30
            hover:bg-cyan-500/10
            hover:text-white
          "
        >
          <ArrowLeft size={18} />
          Previous
        </button>

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Project
          </p>

          <motion.p
            key={activeProject}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="
              mt-2

              text-2xl

              font-bold

              text-white
            "
          >
            {(activeProject + 1)
              .toString()
              .padStart(2, "0")}
            <span className="text-slate-500">
              {" "}
              /{" "}
              {projectData.length
                .toString()
                .padStart(2, "0")}
            </span>
          </motion.p>
        </div>

        <button
          onClick={nextProject}
          className="
            flex
            items-center
            gap-2

            rounded-full

            border
            border-white/10

            bg-white/5

            px-5
            py-3

            text-sm
            text-slate-300

            transition-all
            duration-300

            hover:border-cyan-400/30
            hover:bg-cyan-500/10
            hover:text-white
          "
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Project Tabs */}

      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {projectData.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(index)}
            className="
              relative

              overflow-hidden

              rounded-full

              px-5
              py-2.5

              text-sm

              font-medium

              transition-all
            "
          >
            {activeProject === index && (
              <motion.div
                layoutId="active-project"
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 28,
                }}
                className={`
                  absolute
                  inset-0

                  rounded-full

                  bg-gradient-to-r

                  ${project.accent}

                  opacity-20
                `}
              />
            )}

            <span
              className={`
                relative
                z-10

                ${
                  activeProject === index
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }
              `}
            >
              {project.title}
            </span>
          </button>
        ))}
      </div>

      {/* Showcase */}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -30,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <ProjectShowcase
            project={currentProject}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}