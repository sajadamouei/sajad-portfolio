import { motion } from 'framer-motion';

const credibilityItems = [
  {
    value: 'Industrial Research',
    label: 'APPLIED AI/ML PROJECTS',
  },
  {
    value: '4+ Years',
    label: 'AI/ML EXPERIENCE',
  },
  {
    value: '200+',
    label: 'RESEARCH CITATIONS',
  },
  {
    value: '7+',
    label: 'COMPLETED PROJECTS',
  },
];

export const CredibilityStrip = () => {
  return (
    <section className="relative py-8 sm:py-10 border-y border-border/50 bg-secondary/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {credibilityItems.map((item) => (
            <article
              key={item.value}
              className="group cursor-default select-none rounded-xl border border-border/60 bg-card/55 px-3 py-4 text-center outline-none backdrop-blur-xl transition-colors duration-300 hover:border-primary/30 hover:bg-card/65 focus:outline-none focus-visible:outline-none sm:rounded-2xl sm:px-5 [-webkit-tap-highlight-color:transparent]"
            >
              <p className="font-display text-lg font-bold leading-tight gradient-text sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-2 text-[0.65rem] font-semibold tracking-wide text-muted-foreground sm:text-xs">
                {item.label}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
