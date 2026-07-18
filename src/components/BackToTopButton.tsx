import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 400;

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > SCROLL_THRESHOLD);

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={`fixed bottom-5 right-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary via-teal-300 to-accent text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-8 sm:right-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 ${
        isVisible
          ? 'pointer-events-auto scale-100 opacity-100'
          : 'pointer-events-none scale-90 opacity-0'
      }`}
    >
      <ArrowUp size={19} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
};
