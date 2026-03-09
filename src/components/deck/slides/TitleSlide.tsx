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
          className="mb-4 md:mb-5"
        >
          <div className="flex flex-row items-center justify-center gap-3 md:gap-4">
            <img src={terrafoxLogo} alt="Terrafox" className="w-14 h-14 md:w-20 md:h-20" />
            <span className="text-4xl md:text-7xl font-bold text-foreground tracking-tight">
              Terrafox
            </span>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, ...deckTransition }}
          className="text-xl md:text-2xl text-muted-foreground font-normal mb-6 md:mb-8"
        >
          Environmental Compliance, Simplified
        </motion.p>
        
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, ...deckTransition }}
          className="text-sm md:text-base text-muted-foreground/70 tracking-widest uppercase mb-4"
        >
          Pre-Seed · Q1 2026
        </motion.p>

        <motion.a
          href="https://www.terrafox.site"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, ...deckTransition }}
          className="text-sm md:text-base text-primary hover:text-primary/80 font-medium transition-colors"
        >
          www.terrafox.site
        </motion.a>
      </SlideContent>
    </SlideLayout>
  );
};
