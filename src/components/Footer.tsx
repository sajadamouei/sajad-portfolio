import { Github, GraduationCap, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/sajadamouei', label: 'GitHub profile', external: true },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sheshkal/', label: 'LinkedIn profile', external: true },
  {
    icon: GraduationCap,
    href: 'https://scholar.google.com/citations?user=3S5ZwukAAAAJ&hl=en&oi=ao',
    label: 'Google Scholar profile',
    external: true,
  },
  { icon: Mail, href: 'mailto:sajad.amouei@gmail.com', label: 'Email Sajad' },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <a href="#" className="font-display text-2xl font-bold mb-6">
            <span className="text-foreground">Sajad</span>{' '}
            <span className="gradient-text">Amouei Sheshkal</span>
          </a>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-icon"
                title={link.label}
                aria-label={link.label}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#research" className="text-muted-foreground hover:text-primary transition-colors">Research</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="text-center text-sm text-muted-foreground">
            <p>Copyright 2026 Sajad Amouei Sheshkal. All rights reserved.</p>
            <p className="mt-1">AI Engineer | LLMs | RAG | Agentic AI | Computer Vision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
