'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon, ChevronDown, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/language-context';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-slate-300 dark:border-slate-600 hover:border-cyan-500 transition-all text-slate-500 dark:text-slate-300 hover:text-cyan-400"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-300 dark:border-slate-600 hover:border-cyan-500 transition-all text-slate-600 dark:text-slate-300 hover:text-cyan-400 text-sm font-semibold"
      >
        <Globe size={16} />
        {language === 'en' ? 'EN' : 'ES'}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden z-50">
          <button
            onClick={() => { setLanguage('en'); setOpen(false); }}
            className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors flex items-center gap-2 ${
              language === 'en'
                ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => { setLanguage('es'); setOpen(false); }}
            className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors flex items-center gap-2 ${
              language === 'es'
                ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            🇨🇴 Español
          </button>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navigationItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: '/proyectos' },
    { name: t('nav.contact'), href: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm hidden md:block transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
            BU
          </div>
          <span className="font-bold text-xl gradient-text">Portfolio</span>
        </Link>

        {/* Nav + Controls */}
        <div className="flex items-center gap-3">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-all duration-300 font-medium px-6 py-2 rounded-full border ${
                pathname === item.href
                  ? 'bg-cyan-500 text-white border-cyan-500'
                  : 'border-slate-300 dark:border-gray-600 text-slate-600 dark:text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}