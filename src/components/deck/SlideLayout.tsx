import { ReactNode } from "react";
import { motion } from "framer-motion";
import { deckTransition } from "./animations";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

export const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  // Check if we're in PDF export mode (set by PDFExportButton)
  const isExporting = document.body.classList.contains('pdf-exporting');
  
  if (isExporting) {
    return (
      <div
        className={`w-full h-full flex flex-col p-10 md:p-14 lg:p-20 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: deckTransition.ease }}
      className={`w-full h-full flex flex-col p-10 md:p-14 lg:p-20 ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface SlideTitleProps {
  children: ReactNode;
  className?: string;
}

export const SlideTitle = ({ children, className = "" }: SlideTitleProps) => (
  <motion.h1
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.05, ...deckTransition }}
    className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-3 ${className}`}
  >
    {children}
  </motion.h1>
);

interface SlideTakeawayProps {
  children: ReactNode;
}

export const SlideTakeaway = ({ children }: SlideTakeawayProps) => (
  <motion.p
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.12, ...deckTransition }}
    className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-2 mb-10 max-w-4xl leading-relaxed"
  >
    {children}
  </motion.p>
);

interface SlideContentProps {
  children: ReactNode;
  className?: string;
}

export const SlideContent = ({ children, className = "" }: SlideContentProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.18, duration: 0.4, ease: deckTransition.ease }}
    className={`flex-1 flex flex-col justify-center ${className}`}
  >
    {children}
  </motion.div>
);
