"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="fixed inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/background.png')` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 min-h-screen text-white">
            {/* Header Navigation */}
            <header className="border-b border-white/20 bg-black/30 backdrop-blur-sm sticky top-0 z-50">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-2">
                    <div className="border-2 border-white p-2 rounded-lg">
                      <div className="w-6 h-6 bg-white"></div>
                    </div>
                    <span className="font-bold text-xl hidden sm:block tracking-wider uppercase">Mi Portafolio</span>
                  </Link>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`px-4 py-2 border-2 rounded-lg transition-all ${
                          isActive(link.path)
                            ? 'border-white bg-white text-black'
                            : 'border-white hover:bg-white/10'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden border-2 border-white p-2 rounded-lg"
                  >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </nav>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/20 bg-black/50">
                  <div className="px-4 py-4 space-y-3">
                    {navLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 border-2 rounded-lg transition-all ${
                            isActive(link.path)
                              ? 'border-white bg-white text-black'
                              : 'border-white hover:bg-white/10'
                          }`}
                        >
                          <Icon size={20} />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </header>

            {/* Main Content */}
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
