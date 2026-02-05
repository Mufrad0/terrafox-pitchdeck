import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { Clock, FileCheck, Zap } from "lucide-react";

export const CompetitionSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Competitive Landscape</SlideTitle>
      <SlideTakeaway>
        Incumbents have relationships. TerraFox wins on speed, repeatability, and audit trail.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 2x2 Matrix - Properly structured */}
          <div className="bg-card border border-border rounded-2xl p-8">
            {/* Matrix header */}
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-muted-foreground">Speed vs. Audit Readiness</p>
            </div>
            
            {/* Matrix grid */}
            <div className="relative">
              {/* Y-axis label */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                <span className="text-xs text-muted-foreground">Audit Ready →</span>
              </div>
              
              {/* X-axis label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs text-muted-foreground">Speed →</span>
              </div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 ml-4">
                {/* Top Left - Traditional (High Audit, Slow) */}
                <div className="aspect-square bg-muted/30 rounded-xl border border-border flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-muted border-2 border-border mx-auto flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">Traditional</p>
                    <p className="text-xs text-muted-foreground">Consultants</p>
                  </div>
                </div>

                {/* Top Right - TerraFox (High Audit, Fast) */}
                <div className="aspect-square bg-primary/10 rounded-xl border-2 border-primary flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary mx-auto flex items-center justify-center mb-2">
                      <FileCheck className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm font-bold text-primary">TerraFox</p>
                  </div>
                </div>

                {/* Bottom Left - Empty (Low Audit, Slow) */}
                <div className="aspect-square bg-muted/10 rounded-xl border border-dashed border-border flex items-center justify-center p-4">
                  <p className="text-xs text-muted-foreground/50">Low value</p>
                </div>

                {/* Bottom Right - Point Tools (Low Audit, Fast) */}
                <div className="aspect-square bg-muted/20 rounded-xl border border-border flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-muted border border-border mx-auto flex items-center justify-center mb-2">
                      <Zap className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">Point Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend cards */}
          <div className="space-y-5">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Traditional Consultants</h4>
              </div>
              <p className="text-base text-muted-foreground mb-2">✓ Trusted and comprehensive</p>
              <p className="text-base text-destructive">✗ Slow, expensive, limited scale</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Zap className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Point Solutions</h4>
              </div>
              <p className="text-base text-muted-foreground mb-2">✓ Narrow automation</p>
              <p className="text-base text-destructive">✗ Not end-to-end, weak audit trail</p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary">TerraFox</h4>
              </div>
              <p className="text-base text-foreground">Instant, cited, jurisdiction-aware, repeatable outputs</p>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
