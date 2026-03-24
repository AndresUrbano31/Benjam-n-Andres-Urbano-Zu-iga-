import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Home, Briefcase, Mail, FileText, User } from 'lucide-react';
import { useState } from 'react';
import backgroundImage from 'figma:asset/0cb28bc1e0c43595b02c27fcf2a8c93e191fd61d.png';

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen text-white pb-20 md:pb-0">
        {/* Header Navigation */}
        <header className="border-b border-white/20 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-shadow">
                    BU
                  </div>
                </div>
                <span className="font-bold text-xl hidden sm:block tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`group flex items-center gap-2 px-5 py-2.5 border-2 rounded-xl transition-all font-medium ${
                        isActive(link.path)
                          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-500/20'
                          : 'border-white/30 hover:border-cyan-400/50 hover:bg-cyan-400/5'
                      }`}
                    >
                      <Icon size={18} className={isActive(link.path) ? 'text-cyan-400' : ''} />
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden border-2 p-2.5 rounded-xl transition-all ${
                  mobileMenuOpen 
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400' 
                    : 'border-white/30 hover:border-cyan-400/50'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl animate-in slide-in-from-top-5 duration-200">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 border-2 rounded-xl transition-all font-medium ${
                        isActive(link.path)
                          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-500/20'
                          : 'border-white/20 hover:border-cyan-400/50 hover:bg-cyan-400/5'
                      }`}
                    >
                      <Icon size={20} className={isActive(link.path) ? 'text-cyan-400' : ''} />
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
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-gradient-to-t from-black/95 to-black/80 backdrop-blur-xl">
          <div className="grid grid-cols-4 h-20">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex flex-col items-center justify-center gap-1.5 transition-all ${
                    active ? 'text-cyan-400' : 'text-white/60 hover:text-white/90'
                  }`}
                >
                  <div className={`relative ${active ? 'scale-110' : ''} transition-transform`}>
                    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
                    {active && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
                    )}
                  </div>
                  <span className={`text-xs font-medium ${active ? 'font-semibold' : ''}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}