import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, CirclePlay, ExternalLink, FileText, Github, Globe } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

const categories = [
  'All Projects',
  'LLM & RAG',
  'Agentic AI',
  'Computer Vision',
  'Applied ML',
  'APIs & Deployment',
] as const;

const PROJECT_PREVIEW_LIMIT = 6;

type FilterCategory = (typeof categories)[number];
type ProjectCategory = Exclude<FilterCategory, 'All Projects'>;

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  categories: ProjectCategory[];
  techStack: string[];
  image: string;
  status?: 'In Progress';
  links: {
    github?: string;
    paper?: string;
    website?: string;
    publicLaunch?: string;
    demo?: string;
  };
};

const projects = [
  {
    id: 'ai-course-builder-platform',
    title: 'AI Course Builder Platform',
    shortDescription:
      'Building an LLM-powered course-builder platform that generates branching interactive training flows from user prompts. The platform combines prompt-driven content generation, workflow design, frontend integration, and cloud-ready deployment using Python, TypeScript, Next.js, Docker, Nginx, and Azure.',
    categories: ['Agentic AI', 'LLM & RAG', 'APIs & Deployment'],
    techStack: ['LLM Apps', 'Agentic Workflows', 'Course Generation', 'Next.js', 'Docker', 'Azure'],
    image: '/images/ai-course-builder.png',
    status: 'In Progress',
    links: {
      website: 'https://www.agocourse.com/',
    },
  },
  {
    id: 'ai-safety-training-workflow',
    title: 'AI Safety Training Workflow',
    shortDescription:
      'Identified a cost-efficient alternative to custom video/game-based safety training by combining generative video and interactive e-learning tools for a client in the electrical industry, then transformed the validated workflow into a scalable AI course-builder platform.',
    categories: ['Agentic AI', 'Applied ML'],
    techStack: ['Generative AI', 'E-learning', 'Workflow Design', 'Client Use Case', 'AI Prototyping'],
    image: 'images/ai-safety-training-workflow.png',
    links: {
      demo: 'https://www.youtube.com/watch?v=8cJFxUlBtaM',
    },
  },
  {
    id: 'production-rag-chatbot',
    title: 'Production RAG Chatbot',
    shortDescription:
      'Built and deployed a RAG-based chatbot for Norwegian legal and workplace-related documents, using Azure OpenAI, FAISS vector search, FastAPI, Docker, and an embeddable web widget. The system provides content-grounded answers with source citations through a secure API.',
    categories: ['LLM & RAG', 'APIs & Deployment'],
    techStack: ['RAG', 'Azure OpenAI', 'FAISS', 'FastAPI', 'Docker', 'Source Citations'],
    image: 'images/production-rag-chatbot.png',
    links: {
      publicLaunch:
        'https://krifa.no/medlemsfordel/krifas-nye-chatbot-din-digitale-hjelper-som-ikke-tar-paskeferie/',
    },
  },
  {
    id: 'dry-eye-disease-classification',
    title: 'Dry Eye Disease Classification',
    shortDescription:
      'Built a machine learning pipeline for classifying dry eye disease from high-dimensional tear-film metabolomics data. The project compared multiple models, including logistic regression, XGBoost, random forest, SVM, MLP, and k-NN, with cross-validation and hyperparameter tuning.',
    categories: ['Applied ML'],
    techStack: ['scikit-learn', 'XGBoost', 'Biomedical AI', 'Model Evaluation', 'Feature Engineering'],
    image: '/images/dry-eye-classification.png',
    links: {
      github: 'https://github.com/sajadamouei/classification-metabolomics',
      paper: 'https://www.mdpi.com/2075-4418/14/23/2696',
    },
  },
  {
    id: 'ml-peaks-chip-seq-peak-detection',
    title: 'ML-Peaks: ChIP-Seq Peak Detection',
    shortDescription:
      'Developed an ML-based pipeline for ChIP-Seq peak detection using sliding-window feature extraction, LDA-based dimensionality reduction, and classical machine learning classifiers such as SVM, XGBoost, and AdaBoost.',
    categories: ['Applied ML'],
    techStack: ['Bioinformatics', 'ChIP-Seq', 'Feature Extraction', 'LDA', 'XGBoost', 'SVM'],
    image: '/images/ml-peaks-chip-seq.png',
    links: {
      github: 'https://github.com/sajadamouei/Peak-detection-chip-seq',
      paper: 'https://ieeexplore.ieee.org/abstract/document/10178738',
    },
  },
  {
    id: 'talking-portrait-audio-feature-optimization',
    title: 'Talking Portrait Audio Feature Optimization',
    shortDescription:
      'Optimized audio feature extraction for real-time talking portrait synthesis by integrating Whisper-Tiny with RAD-NeRF and ER-NeRF. The work focused on reducing audio feature extraction latency while preserving lip-sync and rendering quality.',
    categories: ['Computer Vision', 'Applied ML'],
    techStack: ['Generative AI', 'Computer Vision', 'Whisper-Tiny', 'RAD-NeRF', 'ER-NeRF', 'Latency Optimization'],
    image: '/images/talking-portrait-optimization.png',
    links: {
      github: 'https://github.com/pegahsalehi/Whisper-AFE-TalkingHeadsGen',
      paper: 'https://www.mdpi.com/2504-2289/9/3/59',
    },
  },
  {
    id: 'singan-seg-medical-image-segmentation',
    title: 'SinGAN-Seg Medical Image Segmentation',
    shortDescription:
      'Developed a PyTorch-based medical image segmentation pipeline using SinGAN-Seg to generate synthetic polyp images and corresponding masks from single annotated examples. The project focused on improving segmentation under limited-data conditions.',
    categories: ['Computer Vision', 'Applied ML'],
    techStack: ['Computer Vision', 'PyTorch', 'Medical Imaging', 'Segmentation', 'Data Augmentation'],
    image: '/images/singan-seg-segmentation.png',
    links: {
      github: 'https://github.com/vlbthambawita/singan-seg-polyp',
      paper: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0267976',
    },
  },
  {
    id: 'person-re-identification-with-siamese-cnn',
    title: 'Person Re-Identification with Siamese CNN',
    shortDescription:
      'Developed and evaluated a person re-identification research pipeline using Keras, Siamese CNN architecture, EfficientNet transfer learning, pairwise verification loss, and CMC evaluation on the CUHK01 dataset.',
    categories: ['Computer Vision', 'Applied ML'],
    techStack: ['Computer Vision', 'Keras', 'Siamese CNN', 'EfficientNet', 'Person Re-ID', 'CMC Evaluation'],
    image: '/images/person-reid-siamese-cnn.png',
    links: {
      github: 'https://github.com/sajadamouei/Person-Re-ID-with-light-weight-network',
      paper: 'https://ieeexplore.ieee.org/abstract/document/9303722',
    },
  },
] satisfies Project[];

const projectLinkOptions = [
  {
    key: 'github',
    label: 'View Code',
    ariaLabel: 'View GitHub repository',
    icon: Github,
  },
  {
    key: 'paper',
    label: 'Read Paper',
    ariaLabel: 'View paper',
    icon: FileText,
  },
  {
    key: 'website',
    label: 'Project Website',
    ariaLabel: 'Visit project website',
    icon: ExternalLink,
  },
  {
    key: 'publicLaunch',
    label: 'Public Launch',
    ariaLabel: 'View public launch',
    icon: Globe,
  },
  {
    key: 'demo',
    label: 'Video Demo',
    ariaLabel: 'Watch video demo',
    icon: CirclePlay,
  },
] satisfies {
  key: keyof Project['links'];
  label: string;
  ariaLabel: string;
  icon: typeof Github;
}[];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All Projects');
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) =>
        activeCategory === 'All Projects' || project.categories.includes(activeCategory)
      ),
    [activeCategory]
  );

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, PROJECT_PREVIEW_LIMIT);
  const canToggleProjects = filteredProjects.length > PROJECT_PREVIEW_LIMIT;

  const handleCategoryChange = (category: FilterCategory) => {
    setActiveCategory(category);
    setShowAllProjects(false);
  };

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected projects showing how I work across the full AI development path: understanding the problem, building the model or workflow, evaluating the results, and turning it into something usable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => {
            const projectLinks = projectLinkOptions
              .map(({ key, ...link }) => ({
                ...link,
                href: project.links[key],
              }))
              .filter((link): link is typeof link & { href: string } => Boolean(link.href));

            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[520px]"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {project.status === 'In Progress' && (
                  <span className="absolute right-4 top-4 rounded-full border border-emerald-200/80 bg-emerald-400/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.32)] backdrop-blur-sm">
                    In Progress
                  </span>
                )}
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex min-h-10 flex-wrap items-end gap-3 mt-auto text-sm text-muted-foreground">
                  {projectLinks.length > 0 ? (
                    projectLinks.map(({ label, ariaLabel, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={ariaLabel}
                        title={ariaLabel}
                        className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/25 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary/50 hover:text-foreground"
                      >
                        <Icon size={15} aria-hidden="true" className="text-primary/80" />
                        <span>{label}</span>
                      </a>
                    ))
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground/55">
                      Project link coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {canToggleProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              className="btn-secondary"
            >
              {showAllProjects ? 'Show Less' : 'View All Projects'}
              {showAllProjects ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
