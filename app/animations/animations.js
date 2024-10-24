export const slideIn = {
  initial: {
    y: "100%",
  },

  enter: {
    y: "0%",
    transition: { duration: 0.5, ease: [0.38, 0.005, 0.215, 1] },
  },

  exit: {
    y: "100%",
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

export const opacity = {
  initial: {
    opacity: 0.5,
  },

  enter: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.38, 0.005, 0.215, 1] },
  },

  exit: {
    opacity: 0.5,
    transition: { duration: 0.3, ease: [0.38, 0.005, 0.215, 1] },
  },
};
