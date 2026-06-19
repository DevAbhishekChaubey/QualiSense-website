export const EASE = [0.25, 0.1, 0.25, 1] as const;

export const DURATION = {
  page: 0.18,
  section: 0.28,
  item: 0.22,
  hero: 0.35,
} as const;

export const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: DURATION.page, ease: EASE },
};

export const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: DURATION.section, ease: EASE },
};

export const textWord = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: DURATION.item, ease: 'easeOut' as const },
  wordDelay: 0.03,
};

export const ctaInView = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: DURATION.section, ease: EASE },
};

export const quoteInView = {
  initial: { opacity: 0, scale: 0.97 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: DURATION.hero, ease: EASE },
};

export const slideInView = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: DURATION.section, ease: EASE },
};

export const tabPanel = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction * 40,
  }),
  animate: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: -direction * 40,
  }),
  transition: { duration: 0.2, ease: 'easeOut' as const },
};
