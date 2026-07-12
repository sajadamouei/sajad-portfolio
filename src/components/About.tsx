import { motion, useInView } from 'framer-motion';
import { Brain, Code2, Database, Eye, Server, Users } from 'lucide-react';
import { useRef } from 'react';

const highlights = [
  {
    icon: Brain,
    title: 'LLM Systems',
    description:
      'Building practical LLM applications that combine prompts, retrieval, APIs, evaluation, and user-facing workflows.',
  },
  {
    icon: Database,
    title: 'RAG Engineering',
    description:
      'Designing retrieval pipelines with clean data, embeddings, vector search, source grounding, and answer quality in mind.',
  },
  {
    icon: Code2,
    title: 'Agentic AI',
    description:
      'Creating AI workflows that connect models with tools, business logic, APIs, and human review where needed.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description:
      'Applying deep learning to image-based problems, including medical imaging, person re-identification, and generative visual systems.',
  },
  {
    icon: Server,
    title: 'Production Backend',
    description:
      'Turning AI capabilities into API-driven services using FastAPI, Docker, Azure, and deployment-ready architecture.',
  },
  {
    icon: Users,
    title: 'Research Mindset',
    description:
      'Bringing careful evaluation, experiment design, and model understanding from research into practical AI engineering.',
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
            AI Engineer focused on turning research ideas, LLM workflows, and applied ML models into reliable systems that people can actually use.
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
                I am Sajad Amouei Sheshkal, an Oslo-based AI Engineer with industrial PhD research experience in applied machine learning, deep learning, and computer vision.
              </p>
              <p>
                My background started in research, where I worked on computer vision, biomedical AI, generative models, and machine learning pipelines. More recently, my focus has moved toward production-oriented AI systems, especially LLM applications, RAG systems, agentic workflows, APIs, and cloud deployment.
              </p>
              <p>
                I care about building AI systems that are useful beyond demos: systems with clear problem understanding, reliable retrieval or model behavior, practical evaluation, and a path toward real users.
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
