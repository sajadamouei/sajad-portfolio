import { motion, useInView } from 'framer-motion';
import { ChevronRight, Github } from 'lucide-react';
import { useRef, useState } from 'react';

const categories = [
  'All Projects',
  'LLM & RAG',
  'Agentic AI',
  'Computer Vision',
  'Backend',
];

const projects = [
  {
    title: 'Production RAG System',
    description: 'Project details to add: problem context, data sources, retrieval architecture, evaluation approach, deployment details, and repository link.',
    tags: ['RAG', 'LLMs', 'Vector Search', 'Evaluation'],
    categories: ['LLM & RAG', 'Backend'],
    image: '/project-ai-video.png',
  },
  {
    title: 'Agentic AI Workflow',
    description: 'Project details to add: agent responsibilities, tool integrations, guardrails, orchestration design, and measurable outcomes if verified.',
    tags: ['Agents', 'Prompt Engineering', 'APIs', 'Automation'],
    categories: ['Agentic AI', 'LLM & RAG'],
    image: '/project-plemdo.png',
  },
  {
    title: 'Computer Vision Project',
    description: 'Project details to add: dataset, model architecture, training setup, evaluation method, deployment target, and code link.',
    tags: ['Computer Vision', 'PyTorch', 'Deep Learning'],
    categories: ['Computer Vision'],
    image: '/project-neural.png',
  },
  {
    title: 'FastAPI AI Service',
    description: 'Project details to add: API scope, model integration, Docker setup, cloud deployment, monitoring, and reliability notes.',
    tags: ['FastAPI', 'Docker', 'Azure', 'REST APIs'],
    categories: ['Backend', 'LLM & RAG'],
    image: '/project-ireland-hotel-web.png',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All Projects' || project.categories.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated area for verified AI engineering work across LLMs, RAG, agentic systems, backend services, and computer vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[500px]"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Github size={18} />
                    Link to add
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-secondary">
            Discuss Project Details
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
