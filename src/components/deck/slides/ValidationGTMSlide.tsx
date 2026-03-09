import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { quotes, gtmStages } from "@/data/deckData";
import { Quote, Users, Building2, Globe, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { deckTransition, getStaggerDelay } from "../animations";

const stageIcons = [Users, Building2, Globe];

export const ValidationGTMSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle className="text-3xl md:text-4xl lg:text-5xl mb-1">Validation & Go-to-Market</SlideTitle>
      <SlideTakeaway>
        The pain is confirmed by senior practitioners. GTM lands with consultants, then expands.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Market Validation */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...deckTransition }}
              className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-medium"
            >
              Market Validation
            </motion.p>
            <div className="grid grid-cols-2 gap-2">
              {quotes.map((quote, index) => (
                <motion.div
                  key={quote.author}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: getStaggerDelay(index, 0.25), ...deckTransition }}
                  className="bg-card border border-border rounded-lg p-3"
                >
                  <Quote className="w-3 h-3 text-primary/40 mb-1" />
                  <p className="text-[11px] text-foreground italic leading-snug mb-2">"{quote.text}"</p>
                  <div className="border-t border-border pt-1.5">
                    <p className="text-[11px] font-semibold text-foreground leading-tight">{quote.author}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight">{quote.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: GTM Funnel */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, ...deckTransition }}
              className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-medium"
            >
              Go-to-Market
            </motion.p>
            <div className="space-y-2">
              {gtmStages.map((stage, index) => {
                const Icon = stageIcons[index];
                return (
                  <motion.div
                    key={stage.stage}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: getStaggerDelay(index, 0.3), ...deckTransition }}
                    className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-start gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] text-primary uppercase tracking-wide font-medium">{stage.stage}</p>
                      <h4 className="font-semibold text-foreground text-xs leading-tight">{stage.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-snug">{stage.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, ...deckTransition }}
              className="flex items-center gap-2.5 mt-2.5 p-2.5 bg-accent/50 rounded-lg border border-border"
            >
              <Handshake className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-[11px] text-foreground">
                <strong>Ophanim AI</strong> supports sales acquisition and market outreach.
              </p>
            </motion.div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
