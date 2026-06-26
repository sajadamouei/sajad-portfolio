import { motion, useInView } from 'framer-motion';
import { Brain, Code2, Database, Eye, Server, Users } from 'lucide-react';
import { useRef } from 'react';

const highlights = [
  {
    icon: Brain,
    title: 'LLM Systems',
    description: 'Designing practical LLM workflows with retrieval, prompting, evaluation, and guardrails.',
  },
  {
    icon: Database,
    title: 'RAG Engineering',
    description: 'Building retrieval pipelines around clean data, embeddings, vector search, and measurable answer quality.',
  },
  {
    icon: Code2,
    title: 'Agentic AI',
    description: 'Creating tool-using AI workflows that connect models with APIs, business logic, and human oversight.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Applying deep learning and vision models to image-based AI problems.',
  },
  {
    icon: Server,
    title: 'Production Backend',
    description: 'Turning AI capabilities into API-driven services with FastAPI, Docker, cloud deployment, and monitoring.',
  },
  {
    icon: Users,
    title: 'Product Thinking',
    description: 'Starting from user needs and operational constraints so AI systems solve the right problem.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI engineer focused on reliable systems, practical model integration, and production readiness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am Sajad Amouei Sheshkal, an Oslo-based PhD in AI and AI Engineer specializing in LLMs, RAG, Agentic AI, and Computer Vision. My work is centered on building AI systems that move beyond demos and become reliable software products.
              </p>
              <p>
                I care about the full engineering path: understanding the user problem, designing the architecture, building retrieval and model pipelines, evaluating behavior, and deploying systems that can improve through feedback. Additional verified bio details, employers, publications, and project outcomes can be added here as they are finalized.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
