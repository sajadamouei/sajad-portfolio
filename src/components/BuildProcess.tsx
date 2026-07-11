import { motion, useInView } from 'framer-motion';
import { BrainCircuit, ClipboardCheck, GitBranch, Gauge, Rocket } from 'lucide-react';
import { useRef } from 'react';

const buildSteps = [
  {
    icon: ClipboardCheck,
    title: 'Understand the real problem',
    description:
      'I start by clarifying the goal, users, constraints, data sources, and success criteria. Before choosing a model or architecture, I want to understand what the system actually needs to solve.',
  },
  {
    icon: BrainCircuit,
    title: 'Design the AI workflow',
    description:
      'I map how the AI system should work end to end, including LLM prompts, retrieval, agents, model logic, APIs, user interaction, and human review where needed.',
  },
  {
    icon: GitBranch,
    title: 'Build reliable pipelines',
    description:
      'I focus on building clear and testable pipelines for data processing, retrieval, model integration, evaluation, and backend services, so the system is easier to debug and improve.',
  },
  {
    icon: Gauge,
    title: 'Evaluate behavior and tradeoffs',
    description:
      'I look beyond the happy path by testing quality, latency, cost, failure cases, and edge cases. For LLM and RAG systems, I also care about grounding, source quality, and answer reliability.',
  },
  {
    icon: Rocket,
    title: 'Deploy, learn, and improve',
    description:
      'I aim to turn AI work into usable products through APIs, cloud deployment, monitoring, and feedback loops. The goal is not just a demo, but a system that can keep improving in real use.',
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
            My approach is practical: start with the real problem, design the right AI workflow, build testable pipelines, evaluate behavior, and deploy systems that can improve through feedback.
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
