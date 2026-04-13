'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Mail, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '@/components/language-context';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function BottomNavigation() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navigationItems = [
    { name: t('nav.home.label'), href: '/', icon: Home },
    { name: t('nav.projects.label'), href: '/proyectos', icon: Briefcase },
    { name: t('nav.contact.label'), href: '/contacto', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="flex items-center justify-around py-3">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-cyan-500 dark:text-cyan-400'
                  : 'text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* Language toggle */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
        >
          <Globe size={24} />
          <span className="text-xs font-medium">{language === 'en' ? 'EN' : 'ES'}</span>
        </button>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all text-slate-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            <span className="text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        )}
      </div>
    </nav>
  );
}