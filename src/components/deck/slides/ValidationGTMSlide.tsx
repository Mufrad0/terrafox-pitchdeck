import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { quotes, gtmStages } from "@/data/deckData";
import { Quote, Users, Building2, Globe, Handshake } from "lucide-react";

const stageIcons = [Users, Building2, Globe];

export const ValidationGTMSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Validation & Go-to-Market</SlideTitle>
      <SlideTakeaway>
        The pain is confirmed by senior practitioners. GTM lands with consultants, then expands.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Market Validation */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5 font-medium">Market Validation</p>
            <div className="grid grid-cols-2 gap-4">
              {quotes.map((quote) => (
                <div
                  key={quote.author}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <Quote className="w-5 h-5 text-primary/40 mb-3" />
                  <p className="text-sm text-foreground italic leading-relaxed mb-4">"{quote.text}"</p>
                  <div className="border-t border-border pt-3">
                    <p className="text-sm font-semibold text-foreground">{quote.author}</p>
                    <p className="text-xs text-muted-foreground">{quote.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: GTM Funnel */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5 font-medium">Go-to-Market</p>
            <div className="space-y-4">
              {gtmStages.map((stage, index) => {
                const Icon = stageIcons[index];
                return (
                  <div
                    key={stage.stage}
                    className="bg-primary/10 border border-primary/20 rounded-xl p-5 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-primary uppercase tracking-wide font-medium mb-0.5">{stage.stage}</p>
                      <h4 className="font-semibold text-foreground text-base">{stage.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{stage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 mt-6 p-4 bg-accent/50 rounded-xl border border-border">
              <Handshake className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Ophanim AI</strong> supports sales acquisition and market outreach.
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
