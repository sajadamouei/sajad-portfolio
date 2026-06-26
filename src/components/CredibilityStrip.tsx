import { motion } from 'framer-motion';

const credibilityItems = [
  'PhD in AI',
  '4+ years AI/ML',
  'Production RAG',
  'Azure OpenAI',
  'FastAPI/Docker',
  'Computer Vision',
];

export const CredibilityStrip = () => {
  return (
    <section className="relative py-8 border-y border-border/50 bg-secondary/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {credibilityItems.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-center text-sm font-medium text-foreground backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
