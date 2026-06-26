import { motion, useInView } from 'framer-motion';
import { FileText, Microscope, PlusCircle } from 'lucide-react';
import { useRef } from 'react';

const researchItems = [
  {
    icon: Microscope,
    title: 'PhD research in AI',
    description: 'Research focus summary to add. Keep this concise and aligned with the final dissertation or current research direction.',
  },
  {
    icon: FileText,
    title: 'Selected publication title to add',
    description: 'Venue, year, co-authors, and link to add when available.',
  },
  {
    icon: PlusCircle,
    title: 'Additional research output to add',
    description: 'Use this space for a paper, thesis chapter, preprint, poster, or technical report.',
  },
];

export const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="research" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Selected Research & <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Placeholder entries for verified research work, publications, and academic outputs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
