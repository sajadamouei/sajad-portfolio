import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Brain, Database, Layers, Layout, Server, Terminal } from 'lucide-react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'LLM, RAG & Agents',
    icon: Brain,
    accent: 'text-cyan-300',
    skills: [
      'LLMs',
      'RAG',
      'LangChain',
      'Prompt Engineering',
      'Embeddings',
      'Vector Search',
      'Agentic Workflows',
      'LLM Evaluation',
    ],
  },
  {
    title: 'Backend, Cloud & Deployment',
    icon: Server,
    accent: 'text-teal-300',
    skills: [
      'FastAPI',
      'REST APIs',
      'Docker',
      'Azure OpenAI',
      'Azure AI Services',
      'Nginx',
      'CI/CD',
      'API Integration',
    ],
  },
  {
    title: 'ML & Deep Learning',
    icon: Layers,
    accent: 'text-emerald-300',
    skills: [
      'PyTorch',
      'Keras',
      'scikit-learn',
      'XGBoost',
      'Deep Learning',
      'Computer Vision',
      'Transfer Learning',
      'Model Evaluation',
    ],
  },
  {
    title: 'Data & Evaluation',
    icon: Database,
    accent: 'text-sky-300',
    skills: [
      'SQL',
      'PostgreSQL',
      'FAISS',
      'Pandas',
      'NumPy',
      'SciPy',
      'Feature Engineering',
      'Cross-validation',
    ],
  },
  {
    title: 'Frontend & Product UI',
    icon: Layout,
    accent: 'text-yellow-200',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Programming & Tools',
    icon: Terminal,
    accent: 'text-green-300',
    skills: ['Python', 'TypeScript', 'Git', 'MATLAB', 'C#', 'C++'],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build LLM applications, retrieval systems, applied ML pipelines, and production-ready AI services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card flex min-h-[250px] flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/80"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 shadow-sm shadow-primary/10">
                    <Icon size={22} aria-hidden="true" className={category.accent} />
                  </div>
                  <h3 className="font-display font-semibold text-lg leading-snug text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="rounded-full border border-border/70 bg-secondary/35 px-3 py-1.5 text-sm font-medium text-slate-200/90 transition-colors hover:border-primary/30 hover:bg-secondary/45 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
