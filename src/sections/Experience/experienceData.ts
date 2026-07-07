export interface Experience {
  id: number;

  company: string;

  role: string;

  period: string;

  location: string;

  employmentType: string;

  description: string;

  technologies: string[];

  achievements: string[];

  projects: string[];

  accent: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,

    company: "Brigita Pvt Ltd",

    role: "Senior Frontend Developer",

    period: "2022 — Present",

    location: "Tamil Nadu, India",

    employmentType: "Full Time",

    description:
      "Working as a Senior Frontend Developer, building enterprise web and mobile applications using React, Angular and Flutter. I develop scalable user interfaces, integrate REST APIs, optimize application performance and collaborate closely with backend teams to deliver secure, production-ready business solutions.",

    technologies: [
      "React",
      "Angular",
      "Flutter",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Tailwind CSS",
      "REST API",
      "Azure DevOps",
      "Git",
    ],

    achievements: [
      "Developed enterprise-scale React and Angular applications",
      "Built reusable UI component architecture",
      "Integrated secure REST APIs",
      "Optimized application performance",
      "Implemented responsive UI across desktop and mobile devices",
      "Collaborated with backend and QA teams",
      "Managed code using Azure DevOps and Git",
      "Delivered production-ready enterprise solutions",
    ],

    projects: [
      "Visitor Management System",
      "Nock Point Business Development Platform",
      "Patient Visitor Management Kiosk",
    ],

    accent: "from-cyan-500 via-sky-500 to-blue-500",
  },
];