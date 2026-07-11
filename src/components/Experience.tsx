import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Calendar, ChevronDown, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';

const experiences = [
  {
    title: 'AI Engineer',
    company: 'Min Sone AS',
    period: 'Aug 2025 – Present',
    location: 'Oslo, Norway',
    description:
      'Building applied AI products and client workflows across LLM/RAG systems, generative AI, backend APIs, and cloud deployment.',
    achievements: [
      'Building an LLM-powered course-builder platform that generates branching interactive training flows from user prompts using Python, TypeScript/Next.js, React, Tailwind CSS, Docker, Nginx, and Azure.',
      'Identified and implemented a more cost-efficient safety-training workflow for an electrical-industry client by combining generative video with interactive e-learning tools, then turned the validated workflow into a reusable AI course-builder platform.',
      'Built and deployed a production RAG chatbot for Norwegian legal and workplace documents using Azure OpenAI, FastAPI, FAISS vector search, and Docker, enabling content-grounded answers with source citations through a secure API and embeddable web widget.',
    ],
    technologies: [
      'LLMs',
      'RAG',
      'Azure OpenAI',
      'FastAPI',
      'FAISS',
      'Docker',
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Nginx',
      'Azure',
    ],
  },
  {
    title: 'Industrial PhD Researcher',
    company: 'Simula Metropolitan Center for Digital Engineering',
    period: 'Jan 2022 – Apr 2025',
    location: 'Oslo, Norway',
    description:
      'Worked on applied AI and machine learning research for biological data and generative computer vision systems, with a focus on reproducible pipelines, model evaluation, and published research.',
    achievements: [
      'Built a Python/scikit-learn pipeline to classify dry eye disease from high-dimensional tear-film metabolomics data, comparing LR, XGBoost, RF, SVM, MLP, and k-NN with cross-validation and hyperparameter tuning.',
      'Built an ML-Peaks pipeline for ChIP-Seq peak detection using sliding-window feature extraction, LDA-based feature reduction, and scikit-learn classifiers including SVM, XGBoost, and AdaBoost.',
      'Optimized audio feature extraction for real-time talking portrait synthesis by integrating Whisper-Tiny with RAD-NeRF and ER-NeRF, reducing audio feature extraction latency while preserving lip-sync and rendering quality.',
    ],
    technologies: [
      'Python',
      'scikit-learn',
      'XGBoost',
      'SVM',
      'AdaBoost',
      'LDA',
      'Whisper-Tiny',
      'RAD-NeRF',
      'ER-NeRF',
      'Model Evaluation',
      'Bioinformatics',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'University of Tehran',
    period: 'Feb 2021 – Dec 2021',
    location: 'Tehran, Iran',
    description:
      'Developed deep learning and computer vision research pipelines for medical image segmentation and person re-identification.',
    achievements: [
      'Developed a PyTorch-based SinGAN-Seg pipeline for medical image segmentation, generating synthetic polyp images and corresponding masks from single annotated examples to improve training under limited-data conditions.',
      'Developed and evaluated a Keras-based person re-identification research pipeline using a Siamese CNN architecture, EfficientNet transfer learning, pairwise verification loss, and CMC evaluation on the CUHK01 dataset.',
      'Connected model implementation, experiment design, and evaluation through code and paper-based research outputs.',
    ],
    technologies: [
      'PyTorch',
      'Keras',
      'Computer Vision',
      'Medical Imaging',
      'Segmentation',
      'Siamese CNN',
      'EfficientNet',
      'CMC Evaluation',
      'Deep Learning',
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my AI engineering, applied ML research, and computer vision work across industry and academic environments.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <motion.div
                  key={exp.title + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />
                  <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />

                  <motion.div
                    className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${
                      isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                    }`}
                    whileHover={{ scale: 1.005 }}
                    layout
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 md:gap-6 mb-6">
                        <div className="shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <span className="font-display font-bold text-xl gradient-text">
                              {index === 0 ? 'AI' : 'R'}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-base font-semibold text-primary mb-2">
                            {exp.company}
                          </h4>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-primary" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={14} className="text-primary" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        {isExpanded ? 'Show Less' : 'View Details'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 1 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 space-y-6 border-t border-border/50 mt-2">
                            <div className="pt-6">
                              <h5 className="text-sm font-semibold text-foreground mb-3">
                                Verified highlights
                              </h5>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement) => (
                                  <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="text-sm font-semibold text-foreground mb-3">
                                Relevant technologies
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
