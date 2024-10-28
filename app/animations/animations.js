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

export const bounce = {
  initial: {
    y: "300%",
  },
  enter: {
    y: ["300%", 0, "-25%", 0, "-15%", 0, "-7%", 0],
    transition: { duration: 2, ease: [0.65, 0, 0.35, 1] },
  },
};

export const clipPath = (direction) => {
  const config = {
    left: {
      clipStart: "0 100% 0 0",
      clipEnd: "0px var(--border-radius-large) var(--border-radius-large) 0px",
    },
    right: {
      clipStart: "0 0 0 100%",
      clipEnd: "var(--border-radius-large) 0px 0px var(--border-radius-large)",
    },
    top: {
      clipStart: "0 0 100% 0",
      clipEnd: "0px 0px var(--border-radius-large) var(--border-radius-large)",
    },
    bottom: {
      clipStart: "0 0 0 100%",
      clipEnd: "0px 0px var(--border-radius-large) var(--border-radius-large)",
    },
  };

  const { clipStart, clipEnd } = config[direction] || config.top;

  return {
    initial: {
      clipPath: `inset(${clipStart})`,
      WebkitClipPath: `inset(${clipStart})`,
    },
    enter: {
      clipPath: `inset(0 0 0 0 round ${clipEnd})`,
      WebkitClipPath: `inset(0 0 0 0 round ${clipEnd})`,
      transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
    },
    exit: {
      clipPath: `inset(${clipStart})`,
      WebkitClipPath: `inset(${clipStart})`,
      transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
    },
  };
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

export const opacity = {
  initial: {
    opacity: 0,
    scale: 0,
  },

  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.38, 0.005, 0.215, 1] },
  },
};
