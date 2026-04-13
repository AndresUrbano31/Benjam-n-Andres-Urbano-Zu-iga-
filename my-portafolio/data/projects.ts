export interface Project {
  title: string;
  descriptionKey: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Profile Cards UI",
    descriptionKey: "project.1.description",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "CSS Flexbox"],
    link: "https://taller-practico-five.vercel.app/",
    github: "https://github.com/AndresUrbano31/Taller-Practico",
    image: "/Cards.png",
  },
  {
    title: "Astro Sign Up",
    descriptionKey: "project.2.description",
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript", "CSS Flexbox"],
    link: "https://dise-o-de-interfaces-taller-4.vercel.app/",
    github: "https://github.com/AndresUrbano31/Dise-o-de-interfaces-taller-4",
    image: "/Exploring.png",
  },
  {
    title: "Analytical Dashboard",
    descriptionKey: "project.3.description",
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript", "CSS Grid"],
    link: "#",
    github: "#",
    image: "/dashboard.png",
  },
  {
    title: "Red Heaven Card",
    descriptionKey: "project.4.description",
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript", "CSS Flexbox"],
    link: "https://dise-o-de-interfaces-git-master-andresurbano31s-projects.vercel.app/",
    github: "https://github.com/AndresUrbano31/dise-oDeInterfaces",
    image: "/Card.png",
  },
  {
    title: "Corporate Landing Page",
    descriptionKey: "project.5.description",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    link: "#",
    github: "#",
    image: "🌐",
  },
  {
    title: "Fitness Mobile App",
    descriptionKey: "project.6.description",
    tags: ["React Native", "Firebase", "Expo", "Redux"],
    link: "#",
    github: "#",
    image: "💪",
  },
];