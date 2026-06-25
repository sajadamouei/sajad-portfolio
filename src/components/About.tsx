import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights through EDA, statistical modeling, and visualization.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building predictive models, ML pipelines, and deploying intelligent systems.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
  },
  {
    icon: Trophy,
    title: 'Problem Solver',
    description: 'Breaking down complex problems into scalable, efficient solutions.',
  },
  {
    icon: Zap,
    title: 'AI Agent Developer',
    description: 'Designing and deploying AI agents & automations using n8n and RAG workflows to connect knowledge, LLMs, and business systems for automated decisioning.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver exceptional results',
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
            Crafting data-driven solutions & intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 4 years of experience in <span className="text-foreground font-medium">Data Science and Data Analytics</span>, my career has been centered around turning data into clarity, intelligence, and real business value. I’ve worked across the full data lifecycle—exploring messy datasets, building ML models, creating dashboards, and developing automation systems that help teams work smarter. Over time, this naturally led me into <span className="text-primary font-medium">AI Agent development</span>, where I now build n8n workflows and RAG-powered assistants that combine domain knowledge with the capabilities of modern LLMs. For me, the most rewarding projects are the ones where analytics and AI come together to make someone’s work easier, faster, or more informed.
              </p>
              <p>
                What motivates me is solving problems that don’t have obvious answers. <span className="text-primary font-medium">Competitive programming</span> shaped the way I think—break the challenge down, explore patterns, and build solutions that are both simple and scalable. Whether I’m designing a data pipeline, optimizing a model, or creating an AI-driven automation, I aim to deliver tools that feel reliable, intuitive, and genuinely helpful. I’m driven by continuous learning, practical impact, and the belief that well-designed data systems can meaningfully improve how people and teams make decisions.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
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
