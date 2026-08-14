import { motion, useInView } from 'framer-motion';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { useRef } from 'react';

const educationData = [
  {
    degree: 'Industrial PhD Research in AI for Biological Data',
    institution: 'Oslo Metropolitan University',
    location: 'Oslo, Norway',
    period: 'Jan 2022 – Apr 2025',
    logo: '/logos/education/oslomet.png',
    description:
      'Industrial PhD research focused on artificial intelligence for biological data, applied machine learning, model evaluation, and research pipelines.',
    learnings: [
      'Applied ML research for biological and biomedical data',
      'Machine learning pipelines for metabolomics and ChIP-Seq analysis',
      'Research work connected to published papers and open-source code',
    ],
  },
  {
    degree: 'MSc in Deep Learning for Person Re-Identification',
    institution: 'University of Tehran',
    location: 'Tehran, Iran',
    period: 'Jan 2016 – Jan 2020',
    logo: '/logos/education/ut.png',
    description:
      'Master’s research focused on deep learning for person re-identification using CNN-based architectures, transfer learning, and evaluation on benchmark datasets.',
    learnings: [
      'Siamese CNN and EfficientNet-based person re-identification',
      'Pairwise verification learning and CMC evaluation',
      'Computer vision and deep learning research',
    ],
  },
  {
    degree: 'Bachelor’s Degree in Computer Software Engineering',
    institution: 'Mehrastan University',
    location: 'Iran',
    period: 'Feb 2012 – Mar 2014',
    logo: '/logos/education/mehrastan.png',
    description:
      'Undergraduate education in software engineering, programming, and computer systems.',
    learnings: [
      'Software engineering foundations',
      'Programming and system design fundamentals',
      'Background preparation for later AI and machine learning work',
    ],
  },
  {
    degree: 'Associate’s Degree in Computer Engineering Technology',
    institution: 'Technical and Vocational University',
    location: 'Iran',
    period: 'Sep 2008 – Apr 2011',
    logo: '/logos/education/kardani.png',
    description:
      'Early academic training in computer engineering technology, programming, and technical computing.',
    learnings: [
      'Computer engineering fundamentals',
      'Programming and technical problem solving',
      'Foundation for later software engineering and AI studies',
    ],
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background in AI, deep learning, software engineering, and computer engineering.
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-card/70 rounded-2xl shadow-lg hover:shadow-xl border border-border px-6 flex flex-col mx-auto md:mx-0 backdrop-blur-[2px] transition-all duration-300 ${
                  index < 2 ? 'py-8 md:min-h-[410px]' : 'py-7 md:min-h-[360px]'
                }`}
                style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.25)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 overflow-hidden p-2 group-hover:scale-110 transition-transform">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-1 text-left group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <GraduationCap size={18} /> <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <MapPin size={14} className="text-primary" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-normal text-balance">
                  {edu.description}
                </p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-sm font-semibold text-foreground mb-2">Details:</p>
                  <ul className="space-y-2 mb-2">
                    {edu.learnings.map((learning) => (
                      <li key={learning} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
