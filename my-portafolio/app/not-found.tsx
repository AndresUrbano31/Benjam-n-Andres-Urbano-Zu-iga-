'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-context';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">
          Page not found
        </h2>
        <p className="dark:text-gray-400 text-slate-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="button-primary inline-flex items-center gap-2">
          Go back home
        </Link>
      </div>
    </div>
  );
}