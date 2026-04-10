'use client';

import Link from 'next/link';
import { Code2, Share2, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '@/components/language-context';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-cyan-500 dark:text-cyan-400">{t('footer.about')}</h3>
            <p className="dark:text-gray-400 text-slate-600 text-sm">{t('footer.about.text')}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-cyan-500 dark:text-cyan-400">{t('footer.links')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="dark:text-gray-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="dark:text-gray-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="dark:text-gray-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  {t('footer.curriculum')}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="dark:text-gray-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-cyan-500 dark:text-cyan-400">{t('footer.follow')}</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-slate-900/50 bg-slate-100 hover:bg-cyan-500/10 dark:text-gray-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
                aria-label="GitHub">
                <Code2 size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-slate-900/50 bg-slate-100 hover:bg-cyan-500/10 dark:text-gray-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
                aria-label="LinkedIn">
                <Share2 size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-slate-900/50 bg-slate-100 hover:bg-cyan-500/10 dark:text-gray-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
                aria-label="Twitter">
                <MessageCircle size={20} />
              </a>
              <a href="mailto:contact@example.com"
                className="p-2 rounded-lg dark:bg-slate-900/50 bg-slate-100 hover:bg-cyan-500/10 dark:text-gray-400 text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
                aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <p className="text-center dark:text-gray-500 text-slate-500 text-sm">
            © {currentYear} Benjamin Urbano. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}