"use client";

import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import robotAnimation from "@/public/robot.json";
import { FaGithub } from "react-icons/fa";
import { Users, BookOpen, Code2, Award, ExternalLink, ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { skillGroups } from "@/data/skills";
import { educationList } from "@/data/education";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-8 lg:px-16 min-h-screen flex items-center bg-slate-50 dark:bg-slate-950">
        <div className="relative max-w-7xl mx-auto w-full">

          {/* Título + Robot */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 animate-fade-in-up">
            <div>
              <h1 className="h1 gradient-text mb-2">Benjamín Andrés Urbano Zúñiga</h1>
              <h2 className="h1 gradient-text mb-6">{t('home.title')}</h2>
              <p className="text-xl dark:text-gray-300 text-slate-800 max-w-2xl font-medium leading-relaxed">
                {t('home.subtitle')}
              </p>
            </div>
            <div className="flex justify-center">
              <Lottie animationData={robotAnimation} loop={true} className="w-full max-w-md" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Welcome Card */}
            <div className="card-hover">
              <div className="card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box"><Users size={32} className="text-cyan-400" /></div>
                  <h2 className="h3 dark:text-white text-slate-900">{t('home.welcome')}</h2>
                </div>
                <p className="dark:text-gray-200 text-slate-700 mb-4 text-base leading-relaxed font-medium">
                  {t('home.welcome.text')}
                </p>
                <p className="dark:text-gray-300 text-slate-600 text-sm font-medium">
                  {t('home.welcome.sub')}
                </p>
              </div>
            </div>

            {/* About Card */}
            <div className="card-hover">
              <div className="card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box"><Award size={32} className="text-cyan-400" /></div>
                  <h2 className="h3 dark:text-white text-slate-900">{t('home.about')}</h2>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center border-b dark:border-slate-700 border-slate-200 pb-2">
                    <span className="dark:text-gray-400 text-slate-500 text-sm font-semibold uppercase tracking-wide">{t('home.name')}</span>
                    <span className="dark:text-white text-slate-900 font-bold text-base">Benjamin Urbano</span>
                  </div>
                  <div className="flex justify-between items-center border-b dark:border-slate-700 border-slate-200 pb-2">
                    <span className="dark:text-gray-400 text-slate-500 text-sm font-semibold uppercase tracking-wide">{t('home.profession')}</span>
                    <span className="text-cyan-500 dark:text-cyan-400 font-bold text-base">{t('home.profession.value')}</span>
                  </div>
                  <div className="flex justify-between items-center border-b dark:border-slate-700 border-slate-200 pb-2">
                    <span className="dark:text-gray-400 text-slate-500 text-sm font-semibold uppercase tracking-wide">{t('home.focus')}</span>
                    <span className="dark:text-white text-slate-900 font-bold text-base">{t('home.focus.value')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="dark:text-gray-400 text-slate-500 text-sm font-semibold uppercase tracking-wide">{t('home.location')}</span>
                    <span className="dark:text-white text-slate-900 font-bold text-base">Colombia</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Link href="/contacto" className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all font-semibold text-cyan-500 dark:text-cyan-400">
                    {t('home.contact.btn')}
                    <ArrowRight size={16} />
                  </Link>
                  <a href="/cv.pdf" download className="inline-flex items-center gap-2 px-4 py-2 button-primary">
                    <Download size={18} />
                    {t('home.download.cv')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-4">
            <h2 className="h2 gradient-text text-center mb-10">{t('home.testimonials')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="card-hover">
                  <div className="card">
                    <p className="dark:text-gray-200 text-slate-700 mb-6 italic text-base leading-relaxed font-medium">
                      "{t(testimonial.textKey)}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500 dark:text-cyan-400 font-bold text-lg">
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="dark:text-white text-slate-900 font-bold text-sm">{t(testimonial.nameKey)}</p>
                        <p className="text-cyan-500 dark:text-cyan-400 text-xs font-semibold">{t(testimonial.roleKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-16 border-t dark:border-slate-700 border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <div className="icon-box"><BookOpen size={40} className="text-cyan-400" /></div>
            <h2 className="h2 gradient-text">{t('edu.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {educationList.map((edu, idx) => (
              <div key={idx} className="card-hover">
                <div className="card">
                  {edu.periodKey && (
                    <div className="inline-block px-3 py-1 bg-cyan-500/15 rounded-full mb-3">
                      <span className="text-cyan-500 dark:text-cyan-400 font-bold text-sm tracking-wide">{t(edu.periodKey)}</span>
                    </div>
                  )}
                  <h3 className="dark:text-white text-slate-900 font-extrabold text-xl mb-2 leading-snug">{t(edu.titleKey)}</h3>
                  {edu.institutionKey && (
                    <p className="text-cyan-500 dark:text-cyan-400 font-semibold mb-3 text-sm">{t(edu.institutionKey)}</p>
                  )}
                  <p className="dark:text-gray-200 text-slate-700 text-base leading-relaxed font-medium">{t(edu.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-16 border-t dark:border-slate-700 border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <div className="icon-box"><Code2 size={40} className="text-cyan-400" /></div>
            <h2 className="h2 gradient-text">{t('skills.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((skillGroup, idx) => (
              <div key={idx} className="card-hover">
                <div className="card">
                  <h3 className="font-extrabold text-cyan-500 dark:text-cyan-400 mb-4 text-lg uppercase tracking-wide">
                    {t(skillGroup.categoryKey)}
                  </h3>
                  <p className="dark:text-gray-200 text-slate-700 text-base leading-relaxed font-medium">
                    {t(skillGroup.skillsKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-16 border-t dark:border-slate-700 border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="section-title mb-0">
              <div className="icon-box"><Code2 size={40} className="text-cyan-400" /></div>
              <h2 className="h2 gradient-text">{t('projects.title')}</h2>
            </div>
            <Link href="/proyectos" className="hidden md:inline-flex items-center gap-2 text-cyan-500 dark:text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
              {t('projects.viewall')}
              <ExternalLink size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, idx) => (
              <div key={idx} className="card-hover">
                <div className="card flex flex-col h-full">
                  <div className="mb-4 relative w-full h-36">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="dark:text-white text-slate-900 font-extrabold text-xl mb-3">{project.title}</h3>
                  <p className="dark:text-gray-200 text-slate-700 mb-4 flex-grow text-base leading-relaxed font-medium">{t(project.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 rounded-full font-semibold">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all font-bold text-cyan-500 dark:text-cyan-400 text-sm">
                      {t('projects.view')}
                      <ExternalLink size={14} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border dark:border-slate-600 border-slate-300 rounded-lg hover:border-cyan-500 dark:hover:bg-slate-800 hover:bg-slate-100 transition-all dark:text-slate-300 text-slate-600 hover:text-cyan-500">
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link href="/proyectos" className="button-primary">{t('projects.viewall')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}