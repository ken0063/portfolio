import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check initial theme safely (if document exists)
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled
          ? 'bg-(--bg-secondary)/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50">
          <div className="text-(--color-accent-current) font-bold text-3xl tracking-tighter flex items-center">
            <span className="mr-1">≡</span>
            <span className="text-(--text-primary) font-primary">Kenneth</span>
            <span className="text-(--text-primary) font-primary font-light">Olukotun</span>
          </div>
          <div className="hidden sm:block text-[10px] uppercase text-(--text-muted) tracking-widest mt-1">
            Software Engineer
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-(--text-muted) hover:text-(--text-primary) transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=olukotunken@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-(--text-primary) text-(--text-primary) hover:bg-(--text-primary) hover:text-(--bg-primary) transition-all font-medium text-sm"
            >
              Contact me
            </a>

            <button
              onClick={toggleTheme}
              className="p-1 rounded-full border border-(--text-muted) flex items-center w-14 h-8 relative transition-colors bg-(--bg-secondary)"
              aria-label="Toggle theme"
            >
              <div
                className={cn(
                  "absolute top-1 left-1 w-6 h-6 rounded-full bg-(--color-accent-current) transition-transform duration-300",
                  !isDark && "translate-x-6"
                )}
              />
              <div className="w-6 h-6 flex items-center justify-center z-10">
                <Moon size={14} className={cn("transition-colors", isDark ? "text-white" : "text-(--text-muted)")} />
              </div>
              <div className="w-6 h-6 flex items-center justify-center z-10">
                <Sun size={14} className={cn("transition-colors", !isDark ? "text-yellow-500" : "text-(--text-muted)")} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex z-50 md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-(--text-primary)"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-(--color-accent-current) relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'fixed inset-0 bg-(--bg-primary) z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden',
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          <ul className="flex flex-col items-center gap-6 text-xl font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-(--text-primary) hover:text-(--color-accent-current) transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=olukotunken@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 rounded-full border border-(--text-primary) text-(--text-primary) hover:bg-(--text-primary) hover:text-(--bg-primary) transition-all font-medium text-lg mt-4"
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
}
