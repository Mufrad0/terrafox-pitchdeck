import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { Clock, FileCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { deckTransition, getStaggerDelay } from "../animations";

const competitors = [
  {
    icon: Clock,
    title: "Traditional Consultants",
    highlight: false,
    pros: ["Trusted and comprehensive"],
    cons: ["Slow (14-56 days)", "Expensive ($15K-$75K)", "Limited scale"]
  },
  {
    icon: Zap,
    title: "Other AI Tools",
    highlight: false,
    pros: ["Fast automation"],
    cons: ["Generic outputs", "No compliance expertise", "Hallucination risk"]
  },
  {
    icon: FileCheck,
    title: "TerraFox",
    highlight: true,
    pros: ["Instant (<60 seconds)", "Cited & audit-ready", "Jurisdiction-aware", "Repeatable outputs"],
    cons: []
  }
];

export const CompetitionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Competitive Landscape</SlideTitle>
      <SlideTakeaway>
        Incumbents have relationships. TerraFox wins on speed, repeatability, and audit trail.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {competitors.map((comp, index) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: getStaggerDelay(index, 0.2), ...deckTransition }}
                className={`rounded-2xl p-6 ${
                  comp.highlight 
                    ? "bg-primary/10 border-2 border-primary" 
                    : "bg-card border border-border"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    comp.highlight ? "bg-primary/20" : "bg-muted"
                  }`}>
                    <Icon className={`w-7 h-7 ${comp.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <h4 className={`text-xl font-semibold ${comp.highlight ? "text-primary" : "text-foreground"}`}>
                    {comp.title}
                  </h4>
                </div>
                <div className="space-y-3">
                  {comp.pros.map((pro) => (
                    <p key={pro} className="text-base text-foreground flex items-center gap-2">
                      <span className="text-primary">✓</span> {pro}
                    </p>
                  ))}
                  {comp.cons.map((con) => (
                    <p key={con} className="text-base text-destructive flex items-center gap-2">
                      <span>✗</span> {con}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, ...deckTransition }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 border border-primary/30">
            <span className="text-lg font-medium text-foreground">
              Speed + Audit Readiness = <span className="text-primary font-bold">TerraFox Advantage</span>
            </span>
          </div>
        </motion.div>
      </SlideContent>
    </SlideLayout>
  );
};