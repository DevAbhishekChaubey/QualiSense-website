export const EASE = [0.25, 0.1, 0.25, 1] as const;

export const BLUR = {
  in: 'blur(2px)',
  out: 'blur(0px)',
  subtle: 'blur(1px)',
  emphasis: 'blur(3px)',
} as const;

export const DURATION = {
  page: 0.2,
  section: 0.3,
  item: 0.25,
  hero: 0.4,
} as const;

export const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: BLUR.in },
  show: {
    opacity: 1,
    y: 0,
    filter: BLUR.out,
    transition: { duration: DURATION.section, ease: EASE },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12, scale: 0.99, filter: BLUR.in },
  animate: { opacity: 1, y: 0, scale: 1, filter: BLUR.out },
  exit: { opacity: 0, y: -12, scale: 0.99, filter: BLUR.in },
  transition: { duration: DURATION.page, ease: EASE },
};

export const reveal = {
  initial: { opacity: 0, y: 24, scale: 0.98, filter: BLUR.in },
  whileInView: { opacity: 1, y: 0, scale: 1, filter: BLUR.out },
  transition: { duration: DURATION.section, ease: EASE },
};

export const textWord = {
  initial: { opacity: 0, y: 12, filter: BLUR.subtle },
  whileInView: { opacity: 1, y: 0, filter: BLUR.out },
  transition: { duration: DURATION.item, ease: 'easeOut' as const },
  wordDelay: 0.03,
};

export const ctaInView = {
  initial: { opacity: 0, y: 18, filter: BLUR.in },
  whileInView: { opacity: 1, y: 0, filter: BLUR.out },
  transition: { duration: DURATION.section, ease: EASE },
};

export const quoteInView = {
  initial: { opacity: 0, scale: 0.95, filter: BLUR.emphasis },
  whileInView: { opacity: 1, scale: 1, filter: BLUR.out },
  transition: { duration: DURATION.hero, ease: EASE },
};

export const slideInView = {
  initial: { opacity: 0, x: 24, filter: BLUR.in },
  whileInView: { opacity: 1, x: 0, filter: BLUR.out },
  transition: { duration: DURATION.section, ease: EASE },
};

export const tabPanel = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction * 48,
    filter: BLUR.in,
  }),
  animate: { opacity: 1, x: 0, filter: BLUR.out },
  exit: (direction: number) => ({
    opacity: 0,
    x: -direction * 48,
    filter: BLUR.in,
  }),
  transition: { duration: 0.22, ease: 'easeOut' as const },
};
