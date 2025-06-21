import { Variants, Transition } from "framer-motion";

// Limit `type` to valid Framer Motion AnimationGeneratorType values
export type SlideIn = {
  opacity?: number;
  delay?: number;
  duration?: number;
  type?: "tween" | "spring" | "inertia" | "keyframes";
  isMobile?: boolean;
};

export const slideIn = (
  x?: number | string,
  y?: number | string,
  options?: SlideIn
): Variants => {
  return {
    initial: {
      x: x ?? -50,
      y: y ?? 50,
      opacity: options?.opacity ?? 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: options?.duration ?? 0.5,
        delay: options?.delay ?? 0,
        type: options?.type ?? "tween",
        ease: "easeOut",
      } as Transition, // 👈 this helps satisfy strict TS type checking
    },
  };
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.4,
      ease: "easeOut",
      type: "tween",
    },
  },
};
