import { MotionProps } from "framer-motion";

export const sectionAnimation: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  variants: {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.75,
      transition: {
        when: "afterChildren",
        duration: 0.5,
      },
    },
  },
};

export const heroImageAnimation: MotionProps = {
  //   initial: "hidden",
  //   animate: "visible", enabling these two make the animations come in alot faster lets try to understand why later
  transition: { duration: 0.5 },
  exit: { opacity: 0 },
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: "50vw", opacity: 0 },
  },
};

export const fadeInAnimation: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  exit: { opacity: 0 },
  variants: {
    visible: (i: number) => ({
      opacity: 1,
      transition: { duration: i + 0.3 ?? 0.3 },
    }),
    hidden: { opacity: 0 },
  },
};
