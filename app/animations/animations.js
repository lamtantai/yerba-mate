export const slideIn = {
  initial: {
    y: "100%",
  },

  enter: {
    y: "0%",
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },

  exit: {
    y: "100%",
    transition: { duration: 0.6, ease: [0.38, 0.005, 0.215, 1] },
  },
};

export const bounce = {
  initial: {
    y: "300%",
  },
  enter: {
    y: ["300%", 0, "-25%", 0, "-15%", 0, "-7%", 0],
    transition: { duration: 2, ease: [0.65, 0, 0.35, 1] },
  },
};

export const clipPathButton = {
  initial: {
    clipPath: "inset(0 0 0 calc(100% - 40px)  round 40px 40px 40px 40px)",
  },

  animate: {
    clipPath: "inset(0 0 0 0 round 40px 40px 40px 40px)",
    transition: { duration: 0.3, ease: [0.38, 0.005, 0.215, 1] },
  },

  exit: {
    clipPath: "inset(0 0 0 calc(100% - 40px)  round 40px 40px 40px 40px)",
    transition: { duration: 0.3, ease: [0.38, 0.005, 0.215, 1] },
  },
};
