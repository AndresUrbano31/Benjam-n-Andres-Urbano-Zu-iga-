"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const { t } = useLanguage();

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
                    <div className="relative w-full h-36">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center text-5xl rounded-lg bg-slate-100 dark:bg-slate-800/50">
                      {project.image}
                    </div>
                  )}
                </div>
                <h3 className="dark:text-white text-slate-900 font-extrabold text-xl mb-3">{project.title}</h3>
                <p className="dark:text-gray-200 text-slate-700 mb-6 flex-grow text-base leading-relaxed font-medium">
                  {t(project.descriptionKey)}
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