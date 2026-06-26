import { motion, useInView } from 'framer-motion';
import { BrainCircuit, ClipboardCheck, GitBranch, Gauge, Rocket } from 'lucide-react';
import { useRef } from 'react';

const buildSteps = [
  {
    icon: ClipboardCheck,
    title: 'Understand the problem',
    description: 'Clarify the business goal, users, constraints, and success criteria before choosing a model or architecture.',
  },
  {
    icon: BrainCircuit,
    title: 'Design the AI workflow',
    description: 'Map the LLM, retrieval, agent, model, API, and human review boundaries into a maintainable system design.',
  },
  {
    icon: GitBranch,
    title: 'Build reliable pipelines',
    description: 'Create data, retrieval, evaluation, and model pipelines that are observable, testable, and easy to iterate.',
  },
  {
    icon: Gauge,
    title: 'Evaluate tradeoffs',
    description: 'Measure quality, latency, cost, and failure cases so the system behaves well beyond the happy path.',
  },
  {
    icon: Rocket,
    title: 'Deploy and improve',
    description: 'Ship with feedback loops, monitoring, and practical iteration so production behavior keeps getting better.',
  },
];

export const BuildProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="build" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            How I Build <span className="gradient-text">AI Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A practical engineering workflow for turning AI ideas into reliable, production-ready systems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {buildSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
