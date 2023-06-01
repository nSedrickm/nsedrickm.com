export const sectionAnimation = {
  initial: "hidden",
  whileInView: "visible",
  variants: {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  },
};

export const heroImageAnimation = {
  //   initial: "hidden",
  //   animate: "visible", enabling these two make the animations come in alot faster lets try to understand why later
  transition: { duration: 0.5 },
  exit: { opacity: 0 },
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: "50vw", opacity: 0 },
  },
};
