import { motion } from 'framer-motion';
import { ArrowDown, BrainCircuit, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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

      <div className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-primary font-medium mb-4 text-lg">Hi, I am</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sajad Amouei <span className="gradient-text">Sheshkal</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-6 max-w-2xl"
          >
            AI Engineer specializing in LLMs, RAG, Agentic AI, and Computer Vision
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Oslo-based PhD in AI building production-ready AI systems.
            <br /><br />
            I work across LLM applications, retrieval workflows, agentic systems, backend APIs, and computer vision. This portfolio is being shaped around verified projects, research, and engineering experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={18} className="-rotate-90" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center gap-2">
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] rotate-6 transform scale-105 blur-sm" />

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-2xl bg-card/50 backdrop-blur-sm cursor-pointer flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />
              <BrainCircuit className="w-24 h-24 text-primary relative z-10" />
              <span className="absolute bottom-10 z-10 font-display text-4xl font-bold gradient-text">SAS</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-card border border-primary/30 p-4 rounded-xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Open to AI Roles</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
