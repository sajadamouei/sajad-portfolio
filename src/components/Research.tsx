import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, FileText, GraduationCap } from 'lucide-react';
import { useRef, useState } from 'react';

const PUBLICATION_PREVIEW_LIMIT = 4;

const researchMetrics = ['216+ citations', 'h-index 4', 'i10-index 3'];

const publications = [
  {
    title: 'Multimodal Integration Challenges in Emotionally Expressive Child Avatars for Training Applications',
    venue: 'Nordic Machine Intelligence, 2025',
    description:
      'Recent research outputs exploring emotionally expressive and AI-generated avatars for training and interaction scenarios.',
    tags: ['Generative AI', 'Avatars', 'Multimodal AI', 'Human-AI Interaction'],
    links: {
      paper: 'https://journals.uio.no/NMI/article/view/12537',
    },
  },
  {
    title: 'Comparative Analysis of Audio Feature Extraction for Real-Time Talking Portrait Synthesis',
    venue: 'Big Data and Cognitive Computing, 2025',
    description:
      'Compared audio feature extraction methods for real-time talking portrait synthesis and integrated Whisper-Tiny with RAD-NeRF and ER-NeRF to reduce latency while preserving lip-sync quality.',
    tags: ['Generative AI', 'Talking Portraits', 'Whisper-Tiny', 'RAD-NeRF', 'ER-NeRF'],
    links: {
      paper: 'https://www.mdpi.com/2504-2289/9/3/59',
    },
  },
  {
    title: 'Classifying Dry Eye Disease Using Machine Learning and Metabolomics Data',
    venue: 'Diagnostics, 2024',
    description:
      'Built and evaluated machine learning pipelines for classifying dry eye disease from high-dimensional tear-film metabolomics data.',
    tags: ['Biomedical ML', 'scikit-learn', 'XGBoost', 'Model Evaluation'],
    links: {
      paper: 'https://www.mdpi.com/2075-4418/14/23/2696',
    },
  },
  {
    title: 'ML-Peaks: ChIP-Seq Peak Detection Using Machine Learning',
    venue: 'IEEE CBMS, 2023',
    description:
      'Developed an ML-based ChIP-Seq peak detection pipeline using sliding-window feature extraction, LDA-based feature reduction, and classical ML classifiers.',
    tags: ['Bioinformatics', 'ChIP-Seq', 'Feature Extraction', 'SVM', 'XGBoost'],
    links: {
      paper: 'https://ieeexplore.ieee.org/abstract/document/10178738',
    },
  },
  {
    title: 'SinGAN-Seg: Synthetic Training Data Generation for Medical Image Segmentation',
    venue: 'PLOS ONE, 2022',
    description:
      'Generated synthetic polyp images and segmentation masks from single annotated examples to support medical image segmentation under limited-data conditions.',
    tags: ['Medical Imaging', 'Segmentation', 'PyTorch', 'Data Augmentation'],
    links: {
      paper: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0267976',
    },
  },
  {
    title: 'An Improved Person Re-Identification Method by Light-Weight Convolutional Neural Network',
    venue: 'ICCKE, 2020',
    description:
      'Developed and evaluated a person re-identification research pipeline using a lightweight CNN-based approach, transfer learning, and CMC evaluation.',
    tags: ['Computer Vision', 'Person Re-ID', 'Keras', 'CNN', 'CMC Evaluation'],
    links: {
      paper: 'https://ieeexplore.ieee.org/abstract/document/9303722',
    },
  },
];

export const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAllPublications, setShowAllPublications] = useState(false);

  const visiblePublications = showAllPublications
    ? publications
    : publications.slice(0, PUBLICATION_PREVIEW_LIMIT);

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
            Selected papers and research outputs from my work in applied machine learning, computer vision, biomedical AI, and generative models.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex flex-col gap-4 rounded-xl border border-border/60 bg-card/40 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap gap-2">
              {researchMetrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-slate-200"
                >
                  {metric}
                </span>
              ))}
            </div>
            <a
              href="https://scholar.google.com/citations?user=3S5ZwukAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              aria-label="View Google Scholar profile"
              title="View Google Scholar profile"
            >
              <GraduationCap size={16} aria-hidden="true" />
              Google Scholar
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </motion.div>

          <div className="space-y-4">
            {visiblePublications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card/70 md:px-6"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-sm font-medium text-primary">{publication.venue}</p>
                    <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                      {publication.title}
                    </h3>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2 md:justify-end">
                    {publication.links.paper && (
                      <a
                        href={publication.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/25 px-3 py-2 text-xs font-medium text-slate-200/90 transition-colors hover:border-primary/40 hover:bg-secondary/50 hover:text-white"
                        aria-label={`Read paper: ${publication.title}`}
                        title="Read paper"
                      >
                        <FileText size={14} aria-hidden="true" className="text-primary/80" />
                        Paper
                      </a>
                    )}
                    {publication.links.scholar && (
                      <a
                        href={publication.links.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/25 px-3 py-2 text-xs font-medium text-slate-200/90 transition-colors hover:border-primary/40 hover:bg-secondary/50 hover:text-white"
                        aria-label={`View Google Scholar entry: ${publication.title}`}
                        title="View Google Scholar entry"
                      >
                        <GraduationCap size={14} aria-hidden="true" className="text-primary/80" />
                        Google Scholar
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {publications.length > PUBLICATION_PREVIEW_LIMIT && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 text-center"
            >
              <button
                type="button"
                onClick={() => setShowAllPublications((current) => !current)}
                className="btn-secondary"
              >
                {showAllPublications ? 'Show fewer publications' : 'View all publications'}
                {showAllPublications ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
