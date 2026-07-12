import { motion, useInView } from 'framer-motion';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from '@/hooks/use-toast';

const collaborationTypes = ['AI Role', 'Freelance', 'Project', 'Collaboration'];
const contactEmail = 'sajad.amouei@gmail.com';
const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [collaborationType, setCollaborationType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedFirstName || !trimmedLastName || !trimmedEmail || !collaborationType || !trimmedMessage) {
      setErrorMessage('Please complete all fields before sending.');
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!CONTACT_FORM_ENDPOINT) {
      console.warn('TODO: Set CONTACT_FORM_ENDPOINT to enable contact form submissions.');
      setErrorMessage('Contact form is not configured yet.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: trimmedFirstName,
          lastName: trimmedLastName,
          email: trimmedEmail,
          collaborationType,
          message: trimmedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error('Contact form submission failed.');
      }

      setSuccessMessage('Thanks — your message has been sent. I’ll get back to you soon.');
      setFirstName('');
      setLastName('');
      setEmail('');
      setCollaborationType('');
      setMessage('');
    } catch {
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setIsEmailCopied(true);
      window.setTimeout(() => setIsEmailCopied(false), 1800);
    } catch {
      toast({
        title: 'Copy email',
        description: contactEmail,
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reach out about AI engineering roles, LLM/RAG systems, agentic workflows, freelance projects, or applied AI collaborations.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <form onSubmit={handleSubmit} className="glass-card flex h-full flex-col p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold mb-6">
                Let's build something useful with AI
              </h3>
              <div className="flex flex-1 flex-col space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="First name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label id="collaboration_type_label" className="block text-sm font-medium mb-2">
                    Collaboration Type
                  </label>
                  <input type="hidden" name="collaborationType" value={collaborationType} />
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-labelledby="collaboration_type_label"
                  >
                    {collaborationTypes.map((type) => {
                      const isSelected = collaborationType === type;

                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setCollaborationType(type)}
                          aria-pressed={isSelected}
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                            isSelected
                              ? 'border-primary/60 bg-primary/15 text-primary shadow-sm shadow-primary/10'
                              : 'border-border bg-secondary/30 text-muted-foreground hover:border-primary/35 hover:bg-secondary/50 hover:text-foreground'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about the role, project, or AI system you have in mind..."
                  />
                </div>

                {(errorMessage || successMessage) && (
                  <p
                    className={`text-sm font-medium ${
                      errorMessage ? 'text-red-300' : 'text-emerald-300'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {errorMessage || successMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card flex h-full flex-col gap-6 p-6 sm:p-8"
          >
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h3 className="font-display text-lg font-semibold mb-4">Download CV</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="/cv/Sajad-Amouei-Sheshkal-CV-EN.pdf"
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/35 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-primary/40 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  <Download size={16} aria-hidden="true" className="text-primary/80" />
                  Download CV English
                </a>
                <a
                  href="/cv/Sajad-Amouei-Sheshkal-CV-NO.pdf"
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/35 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-primary/40 hover:bg-secondary/50"
                >
                  <Download size={16} aria-hidden="true" className="text-primary/80" />
                  Download CV Norwegian
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h3 className="font-display text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex w-full cursor-pointer items-center gap-4 rounded-xl border border-border/60 bg-secondary/25 p-5 text-left transition-colors hover:border-primary/35 hover:bg-secondary/40"
                  aria-label="Copy email address"
                >
                  <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-muted-foreground">Email</span>
                    <span className="break-all font-medium text-foreground">{contactEmail}</span>
                  </span>
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/40 text-primary"
                    title={isEmailCopied ? 'Copied' : 'Copy email address'}
                  >
                    {isEmailCopied ? (
                      <Check size={16} aria-hidden="true" />
                    ) : (
                      <Copy size={16} aria-hidden="true" />
                    )}
                  </span>
                </button>

                <div className="flex cursor-default items-center gap-4 rounded-xl border border-border/60 bg-secondary/25 p-5 transition-colors hover:border-primary/35 hover:bg-secondary/40">
                  <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground">Oslo, Norway</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h3 className="font-display text-lg font-semibold mb-4">Follow Me</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://github.com/sajadamouei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-primary/40 hover:bg-secondary/50"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github size={17} aria-hidden="true" className="text-primary/80" />
                    GitHub
                  </span>
                  <ExternalLink size={14} aria-hidden="true" className="text-muted-foreground" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sheshkal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-primary/40 hover:bg-secondary/50"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin size={17} aria-hidden="true" className="text-primary/80" />
                    LinkedIn
                  </span>
                  <ExternalLink size={14} aria-hidden="true" className="text-muted-foreground" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=3S5ZwukAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-primary/40 hover:bg-secondary/50 sm:col-span-2"
                >
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap size={17} aria-hidden="true" className="text-primary/80" />
                    Google Scholar
                  </span>
                  <ExternalLink size={14} aria-hidden="true" className="text-muted-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
