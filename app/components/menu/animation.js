export const parent = {
  enter: {
    transition: { staggerChildren: 0.08 },
  },

  exit: {
    transition: { staggerChildren: 0.08 },
  },
};

export const clippathMenuMobile = {
  initial: {
    clipPath: "inset(0 0 100% 0)",
  },

  enter: {
    clipPath:
      "inset(0 0 0 0 round 0 0 var(--border-radius-large) var(--border-radius-large))",
    transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
  },

  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
  },
};

export const clippathMenuDesktop = {
  initial: {
    clipPath: "inset(0 100% 0 0)",
  },

  enter: {
    clipPath:
      "inset(0 0 0 0 round 0 var(--border-radius-large) var(--border-radius-large) 0)",
    transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
  },

  exit: {
    clipPath: "inset(0 100% 0 0)",
    transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
  },
};

export const clippathInRight = {
  initial: {
    clipPath: "inset(0 0 0 100%)",
  },

  enter: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
  },

  exit: {
    clipPath: "inset(0 0 0 100%)",
    transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
  },
};

export const slideInLeft = {
  initial: {
    x: -100,
  },

  enter: {
    x: 0,
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },

  exit: {
    x: -100,
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },
};
