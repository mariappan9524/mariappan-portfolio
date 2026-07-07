import {
  Laptop2,
  Smartphone,
  Database,
  Wrench,
} from "lucide-react";

export interface SkillCategoryType {
  title: string;
  subtitle: string;
  description: string;
  experience: string;
  icon: typeof Laptop2;
  color: string;
  technologies: string[];
}

export const skillsData: SkillCategoryType[] = [
  {
    title: "Frontend Development",
    subtitle: "Building modern web experiences",
    description:
      "I specialize in developing scalable enterprise web applications using modern frontend technologies with a strong focus on performance, clean architecture, accessibility and responsive user experiences.",

    experience: "4+ Years Experience",

    icon: Laptop2,

    color: "from-cyan-500 via-sky-500 to-blue-600",

    technologies: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "HTML5",
      "CSS3",
    ],
  },

  {
    title: "Mobile Development",

    subtitle: "Cross-platform application development",

    description:
      "Currently expanding my expertise by building modern Flutter applications with clean UI architecture, responsive layouts and native-like performance.",

    experience: "Currently Building",

    icon: Smartphone,

    color: "from-violet-500 via-fuchsia-500 to-pink-500",

    technologies: [
      "Flutter",
      "Dart",
    ],
  },

  {
    title: "Backend Integration",

    subtitle: "Connecting applications with powerful APIs",

    description:
      "Experienced in integrating enterprise applications with REST APIs, authentication services and backend systems while maintaining scalable frontend architecture.",

    experience: "API Integration",

    icon: Database,

    color: "from-emerald-500 via-teal-500 to-cyan-500",

    technologies: [
      "REST APIs",
      "Node.js",
      "Express.js",
    ],
  },

  {
    title: "Development Workflow",

    subtitle: "Professional engineering practices",

    description:
      "I use modern development workflows including Git and collaborative version control to deliver reliable software efficiently within agile teams.",

    experience: "Daily Workflow",

    icon: Wrench,

    color: "from-orange-500 via-amber-500 to-yellow-500",

    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];