import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
    <>
      {/* Main Header */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
          isScrolled && !isMobileMenuOpen
            ? 'bg-(--bg-secondary)/90 backdrop-blur-md shadow-lg border-b border-(--text-muted)/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Fades out when menu is open to avoid overlap */}
          <a 
            href="#home" 
            className={cn(
              "flex items-center gap-2 z-50 shrink-0 transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            <div className="text-(--color-accent-current) font-bold text-xl sm:text-2xl tracking-tighter flex items-center">
              <span className="mr-1">≡</span>
              <span className="text-(--text-primary) font-primary">Kenneth</span>
              <span className="text-(--text-primary) font-primary font-light hidden lg:inline ml-1">Olukotun</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-(--text-muted) hover:text-(--text-primary) transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-(--color-accent-current) transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-6 z-50">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=olukotunken@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex px-6 py-2 rounded-full border border-(--text-primary) text-(--text-primary) hover:bg-(--text-primary) hover:text-(--bg-primary) transition-all font-bold text-sm"
            >
              Contact me
            </a>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-(--text-muted)/10 transition-colors text-(--text-primary)"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-(--text-primary) hover:bg-(--text-muted)/10 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fully Opaque */}
      <div
        className={cn(
          'fixed inset-0 bg-(--bg-primary) z-40 flex flex-col items-center justify-center transition-all duration-300 lg:hidden',
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible pointer-events-none'
        )}
      >
        <div 
          className={cn(
            "flex flex-col items-center gap-12 transition-all duration-500 delay-100 px-6",
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <ul className="flex flex-col items-center gap-8 text-4xl font-bold">
            {navLinks.map((link, idx) => (
              <li 
                key={link.name}
                className={cn(
                  "transition-all duration-300 delay-[calc(200ms+var(--idx)*100ms)]",
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ "--idx": idx } as React.CSSProperties}
              >
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
          
          <div className="w-16 h-1 bg-(--color-accent-current)/30 rounded-full" />

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=olukotunken@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-10 py-5 rounded-full bg-(--text-primary) text-(--bg-primary) font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Contact me
          </a>
        </div>
      </div>
    </>
  );
}
