"use client";
import { ReactNode, Fragment } from "react";
import { motion, useIsPresent } from "framer-motion";

interface Props {
  children: ReactNode;
  layoutId: string;
}
export const PageAnimationWrapper = ({ children, layoutId }: Props) => {
  const isPresent = useIsPresent();
  return (
    <motion.div layoutId={layoutId}>
      {children}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed inset-0 z-20 bg-blue-700"
      />
    </motion.div>
  );
};
