import visitorManagement from "../../assets/images/Projects/visitor-management.webp";
import nockPoint from "../../assets/images/Projects/nockpoint.webp";
import patientKiosk from "../../assets/images/Projects/patient-kiosk.webp";
import portfolio from "../../assets/images/Projects/portfolio.webp";

export interface Project {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  technologies: string[];
  contributions: string[];
  status: string;
  accent: string;
  image: string;
}

export const projectData: Project[] = [
  {
    id: 1,

    title: "Visitor Management System",

    category: "Enterprise Web Application",

    subtitle: "React Based Enterprise Platform",

    description:
"Enterprise visitor management platform built with React for secure visitor registration and approval workflows.",

    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "REST API",
      "Azure DevOps",
    ],

    contributions: [
      "Developed reusable React components",
      "Built responsive enterprise UI",
      "Integrated REST APIs",
      "Implemented role-based modules",
      "Optimized application performance",
      "Collaborated using Azure DevOps",
    ],

    status: "Production Application",

    accent: "from-cyan-500 to-blue-500",

    image: visitorManagement,
  },

  {
    id: 2,

    title: "Nock Point Business Development",

    category: "Enterprise CRM Platform",

    subtitle: "Angular Multi-Tenant Solution",

    description:
"Multi-tenant Angular CRM platform with Power BI dashboards and enterprise workflow automation.",

    technologies: [
      "Angular",
      "TypeScript",
      "Power BI",
      "REST API",
      "Azure DevOps",
    ],

    contributions: [
      "Developed Angular modules",
      "Created reusable UI components",
      "Implemented tenant architecture",
      "Integrated Power BI dashboards",
      "Connected backend REST APIs",
    ],

    status: "Production Application",

    accent: "from-purple-500 to-fuchsia-500",

    image: nockPoint,
  },

  {
    id: 3,

    title: "Patient Visitor Management Kiosk",

    category: "Healthcare Mobile Application",

    subtitle: "Flutter Cross Platform App",

    description:
"Flutter-based hospital kiosk application for self-service patient and visitor registration.",

    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Material Design",
    ],

    contributions: [
      "Developed Flutter UI",
      "Built reusable widgets",
      "Designed responsive kiosk screens",
      "Integrated REST APIs",
      "Optimized touch interactions",
    ],

    status: "Currently In Development",

    accent: "from-emerald-500 to-teal-500",

    image: patientKiosk,
  },

  {
    id: 4,

    title: "Developer Portfolio",

    category: "Personal Portfolio",

    subtitle: "Modern Frontend Showcase",

    description:
"Premium React portfolio showcasing enterprise web and mobile applications with modern UI.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],

    contributions: [
      "Designed premium UI",
      "Implemented smooth animations",
      "Built reusable components",
      "Optimized performance",
      "Responsive across all devices",
    ],

    status: "Personal Project",

    accent: "from-orange-500 to-amber-500",

    image: portfolio,
  },
];