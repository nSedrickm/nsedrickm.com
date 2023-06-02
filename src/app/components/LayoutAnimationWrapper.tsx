"use client";
import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

interface Props {
  children: ReactNode;
}
export const LayoutAnimationWrapper = ({ children }: Props) => {
  return (
    <AnimatePresence mode="wait" >
      {children}
    </AnimatePresence>
  );
};
