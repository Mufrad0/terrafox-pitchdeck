import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { motion } from "framer-motion";
import { deckTransition, getStaggerDelay } from "../animations";

export const MarketSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Market Opportunity</SlideTitle>
      <SlideTakeaway>
        Large market, clear wedge, expandable geography and products.
      </SlideTakeaway>

      <SlideContent>
        <div className="flex flex-col items-center gap-6">
          {/* Concentric Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: deckTransition.ease }}
            className="relative flex items-center justify-center flex-shrink-0"
          >
            {/* TAM - Outer circle */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-primary/5 border-2 border-primary/20 flex items-center justify-center">
              {/* SAM - Middle circle */}
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                {/* SOM - Inner circle */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-primary">$750M</p>
                    <p className="text-xs text-primary font-medium">SOM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* TAM Label */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ...deckTransition }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 bg-background px-2 py-0.5 rounded-full border border-border"
            >
              <p className="text-sm font-semibold text-foreground">$55B <span className="text-muted-foreground font-normal">TAM</span></p>
            </motion.div>
            {/* SAM Label */}
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, ...deckTransition }}
              className="absolute top-10 -right-2 bg-background px-2 py-0.5 rounded-full border border-border"
            >
              <p className="text-sm font-semibold text-foreground">$10B <span className="text-muted-foreground font-normal">SAM</span></p>
            </motion.div>
          </motion.div>

          {/* Descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, ...deckTransition }}
            className="flex flex-wrap justify-center gap-6 mt-2"
          >
            {[
              { color: "bg-primary/20 border-primary/20", label: "TAM: $55B", desc: "North American Environmental Consulting Services" },
              { color: "bg-primary/30 border-primary/30", label: "SAM: $10B", desc: "Compliance & permitting automatable by software (US + Canada)" },
              { color: "bg-primary border-primary", label: "SOM: $750M", desc: "Construction & infrastructure environmental screening", isPrimary: true }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: getStaggerDelay(index, 0.6), ...deckTransition }}
                className="flex items-start gap-2"
              >
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0 mt-1`} />
                <div>
                  <p className={`font-semibold text-sm ${item.isPrimary ? 'text-primary' : 'text-foreground'}`}>{item.label}</p>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Expansion path */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, ...deckTransition }}
            className="bg-accent rounded-xl px-4 py-2 mt-2"
          >
            <p className="text-sm text-foreground">
              <strong>Expansion:</strong> CA consultants → U.S. markets → Canada, infrastructure, utilities, renewables
            </p>
          </motion.div>
        </div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, ...deckTransition }}
          className="mt-4 pt-3 border-t border-border"
        >
          <p className="text-xs text-muted-foreground">
            Sources: IBISWorld (2025); EPA CEQA/NEPA Compliance Data; Grand View Research; Precedence Research
          </p>
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};