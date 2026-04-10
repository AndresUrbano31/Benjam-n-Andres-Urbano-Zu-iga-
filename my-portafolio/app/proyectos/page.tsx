"use client";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: "Profile Cards UI",
      description: "Profile card component built with Next.js and Tailwind CSS. Includes dark and light theme, avatar, stats, and contact button.",
      descriptionEs: "Componente de tarjetas de perfil construido con Next.js y Tailwind CSS. Incluye tema oscuro y claro, avatar, estadísticas y botón de contacto.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "CSS Flexbox"],
      link: "https://taller-practico-five.vercel.app/",
      github: "https://github.com/AndresUrbano31/Taller-Practico",
      image: "/Cards.png",
    },
    {
      title: "Astro Sign Up",
      description: "Registration form with space design. Includes Google and Facebook authentication, input fields, and responsive design with visual panel.",
      descriptionEs: "Formulario de registro con diseño espacial. Incluye autenticación con Google y Facebook, campos de entrada y diseño responsive con panel visual.",
      tags: ["Next.js", "Tailwind CSS", "React", "TypeScript", "CSS Flexbox"],
      link: "https://dise-o-de-interfaces-taller-4.vercel.app/",
      github: "https://github.com/AndresUrbano31/Dise-o-de-interfaces-taller-4",
      image: "/Exploring.png",
    },
    {
      title: "Analytical Dashboard",
      description: "Interactive SaaS dashboard with real-time metrics, session chart, conversion gauge, and navigation sidebar. Built with Next.js and Tailwind CSS.",
      descriptionEs: "Dashboard SaaS interactivo con métricas en tiempo real, gráfico de sesiones, gauge de conversión y sidebar de navegación. Construido con Next.js y Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS", "React", "TypeScript", "CSS Grid"],
      link: "#",
      github: "#",
      image: "/dashboard.png",
    },
    {
      title: "Red Heaven Card",
      description: "Card UI built with Next.js and Tailwind CSS applying Flexbox concepts. Includes image, title, description, and tags with custom styles.",
      descriptionEs: "Card UI construida con Next.js y Tailwind CSS aplicando conceptos de Flexbox. Incluye imagen, título, descripción y tags con estilos personalizados.",
      tags: ["Next.js", "Tailwind CSS", "React", "TypeScript", "CSS Flexbox"],
      link: "https://dise-o-de-interfaces-git-master-andresurbano31s-projects.vercel.app/",
      github: "https://github.com/AndresUrbano31/dise-oDeInterfaces",
      image: "/Card.png",
    },
    {
      title: "Corporate Landing Page",
      description: "Responsive corporate website with smooth animations, interactive sections, and SEO optimization for maximum visibility.",
      descriptionEs: "Sitio web corporativo responsivo con animaciones suaves, secciones interactivas y optimización SEO para máxima visibilidad.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
      link: "#",
      github: "#",
      image: "🌐",
    },
    {
      title: "Fitness Mobile App",
      description: "Exercise tracking application with authentication, progress tracking, and community. Cloud synchronization.",
      descriptionEs: "Aplicación para seguimiento de ejercicio con autenticación, tracking de progreso y comunidad. Sincronización en la nube.",
      tags: ["React Native", "Firebase", "Expo", "Redux"],
      link: "#",
      github: "#",
      image: "💪",
    },
  ];

  return (
    <div
      className="relative min-h-screen py-20 md:py-32 px-6 md:px-8 lg:px-16"
      style={{
        backgroundImage: "url(/AI.png)",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f8fafc",
      }}
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/85 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="h1 gradient-text mb-6">{t('projects.page.title')}</h1>
          <p className="text-xl dark:text-gray-400 text-slate-700 max-w-2xl mx-auto font-medium">
            {t('projects.page.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="card-hover">
              <div className="card flex flex-col h-full">
                <div className="mb-4">
                  {project.image.startsWith("/") ? (
                    <img src={project.image} alt={project.title} className="w-full h-36 object-cover rounded-lg" />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center text-5xl rounded-lg bg-slate-100 dark:bg-slate-800/50">{project.image}</div>
                  )}
                </div>
                <h3 className="dark:text-white text-slate-900 font-extrabold text-xl mb-3">{project.title}</h3>
                <p className="dark:text-gray-200 text-slate-700 mb-6 flex-grow text-base leading-relaxed font-medium">
                  {language === 'en' ? project.description : project.descriptionEs}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 rounded-full font-semibold">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all font-semibold text-cyan-500 dark:text-cyan-400 text-sm">
                    {t('projects.view')}
                    <ExternalLink size={14} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border dark:border-slate-600 border-slate-300 rounded-lg hover:border-cyan-500 dark:hover:bg-slate-800 hover:bg-slate-100 transition-all dark:text-slate-300 text-slate-600 hover:text-cyan-500">
                    <FaGithub size={29} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 md:p-12 text-center">
          <h2 className="h2 mb-4 dark:text-white text-slate-900">{t('projects.cta.title')}</h2>
          <p className="dark:text-gray-400 text-slate-700 mb-8 max-w-2xl mx-auto font-medium">{t('projects.cta.text')}</p>
          <a href="/contacto" className="button-primary inline-block">{t('projects.cta.btn')}</a>
        </div>
      </div>
    </div>
  );
}