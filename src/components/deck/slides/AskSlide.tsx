import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { useOfFunds } from "@/data/deckData";
import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";

export const AskSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>The Ask</SlideTitle>
      <SlideTakeaway>
        $500K pre-seed to ship product and acquire first customers.
      </SlideTakeaway>

      <SlideContent>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Investment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-primary/5 border border-primary rounded-xl p-5 flex-1"
          >
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Raising</p>
                <p className="text-3xl font-bold text-foreground">$500K</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Instrument</p>
                <p className="text-lg font-semibold text-foreground">Post-Money SAFE</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Valuation Cap</p>
                <p className="text-lg font-semibold text-foreground">$3.33M post-money</p>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-5"
          >
            <h3 className="font-semibold text-foreground mb-2 text-sm">Contact</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground text-sm">daniel@terrafox.site</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-foreground text-sm">terrafox.site</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Use of Funds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-5 mt-6"
        >
          <h3 className="font-semibold text-foreground mb-3 text-sm">Use of Funds</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useOfFunds.map((item, index) => (
              <div key={item.label} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-foreground text-xs">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};
