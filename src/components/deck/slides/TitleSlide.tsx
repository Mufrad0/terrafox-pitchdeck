import { SlideLayout, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { deckTransition } from "../animations";
import terrafoxLogo from "@/assets/terrafox-logo-black.png";

export const TitleSlide = () => {
  return (
    <SlideLayout className="items-center justify-center text-center bg-gradient-to-br from-background via-background to-accent/20">
      <SlideContent className="items-center justify-center w-full">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: deckTransition.ease }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-row items-center justify-center gap-4 md:gap-5">
            <img src={terrafoxLogo} alt="TerraFox" className="w-16 h-16 md:w-24 md:h-24" />
            <span className="text-5xl md:text-8xl font-bold text-foreground tracking-tight">
              TerraFox
            </span>
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, ...deckTransition }}
          className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium mb-5 md:mb-6"
        >
          Compliance Intelligence That Works for You
        </motion.h2>
        
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.38, ...deckTransition }}
          className="text-lg md:text-xl text-muted-foreground"
        >
          Pre-Seed · Q1 2026
        </motion.p>
      </SlideContent>
    </SlideLayout>
  );
};
