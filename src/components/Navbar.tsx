import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#about', label: 'About' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display text-xl font-bold">
            <span className="gradient-text">{`{ SA }`}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Contact Me
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-foreground"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] min-h-screen bg-background md:hidden"
            >
              <div className="section-container py-4">
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-xl font-bold"
                  >
                    <span className="gradient-text">{`{ SA }`}</span>
                  </a>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground"
                    aria-label="Close navigation menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-center gap-7">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary text-sm w-fit mt-2"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
