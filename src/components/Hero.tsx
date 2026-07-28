import { motion } from 'framer-motion';
import { ArrowDown, ChevronDown, Download, Github, GraduationCap, Linkedin, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TypeWriter } from './TypeWriter';
import heroBg from '@/assets/hero-bg.png';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-24 lg:pb-20">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-primary font-medium mb-4 text-lg">Hi, I am</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight lg:whitespace-nowrap">
              <span className="text-foreground">Sajad</span>{' '}
              <span className="gradient-text">Amouei Sheshkal</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-6 max-w-2xl"
          >
            <TypeWriter
              words={['AI/ML Engineer', 'LLM & RAG | Agents', 'Generative AI | Computer Vision']}
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Oslo-based AI Engineer with industrial PhD research experience, building practical AI systems from research ideas to deployed products.
            <br /><br />
            I work across LLM applications, retrieval pipelines, AI agents, backend APIs, and computer vision. This portfolio highlights selected projects where deep learning research meets production-focused engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mb-10"
          >
            <a
              href="https://github.com/sajadamouei"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sheshkal/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=3S5ZwukAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Google Scholar profile"
            >
              <GraduationCap size={20} />
            </a>
            <a
              href="mailto:sajad.amouei@gmail.com"
              className="social-icon"
              aria-label="Email Sajad"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={18} className="-rotate-90" />
            </a>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="btn-secondary flex items-center gap-2">
                Download CV
                <Download size={18} />
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={10}
                collisionPadding={16}
                className="z-[90] w-48 max-w-[calc(100vw-2rem)] bg-background border-border/70 shadow-2xl"
              >
                <DropdownMenuItem asChild>
                  <a href="/cv/Sajad-Amouei-Sheshkal-CV-EN.pdf" download>
                    English CV
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/cv/Sajad-Amouei-Sheshkal-CV-NO.pdf" download>
                    Norwegian CV
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mt-2 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] rotate-6 transform scale-105 blur-sm" />

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-2xl bg-card/50 backdrop-blur-sm cursor-pointer"
            >
              <img
                src="/images/sajad-profile.png"
                alt="Sajad Amouei Sheshkal"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 right-0 sm:-right-6 bg-card border border-primary/30 p-3 sm:p-4 rounded-xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Open to Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
