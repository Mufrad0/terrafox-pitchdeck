// Unified animation configuration for pitch deck
// Based on best practices: 0.5-0.8s duration, 0.15-0.25s stagger, ease-out curve

export const deckTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1.0] as const, // Smooth ease-out curve
};

export const staggerDelay = 0.12; // Delay between sequential items

// Standard fade-up animation for most elements
export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

// Fade in with subtle scale for emphasis elements
export const fadeScale = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
};

// Slide in from left for flow diagrams
export const slideLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

// Slide in from right
export const slideRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

// Simple fade for subtle elements
export const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

// Helper to create staggered delay
export const getStaggerDelay = (index: number, baseDelay = 0.15) => 
  baseDelay + index * staggerDelay;

// Container variants for staggered children
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.15,
    },
  },
};

// Child variants for use with staggerContainer
export const staggerChild = {
  initial: { opacity: 0, y: 16 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: deckTransition,
  },
};
