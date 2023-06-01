"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  layoutId: string;
}

export const PageAnimationWrapper = ({ children, layoutId }: Props) => {
  return (
    <motion.div
      key={layoutId}
      layoutId={layoutId}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      {children}
    </motion.div>
  );
};
