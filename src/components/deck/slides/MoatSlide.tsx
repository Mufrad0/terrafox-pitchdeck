import { SlideLayout, SlideTitle, SlideTakeaway, SlideContent } from "../SlideLayout";
import { moatItems } from "@/data/deckData";
import { Map, Database, Workflow, Users } from "lucide-react";

const icons = [Map, Database, Workflow, Users];

export const MoatSlide = () => {
  return (
    <SlideLayout>
      <SlideTitle>Why We Win</SlideTitle>
      <SlideTakeaway>
        Defensibility from jurisdiction logic, reproducible data pipelines, and workflow integration.
      </SlideTakeaway>

      <SlideContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Static Flywheel */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px]">
              {/* Outer dashed circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40" />
              
              {/* Inner filled circle */}
              <div className="absolute inset-10 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">Flywheel</p>
                  <p className="text-sm text-muted-foreground mt-1">More usage → Better outputs</p>
                </div>
              </div>

              {/* Labels positioned around the circle */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-card px-4 py-2 rounded-full border border-border text-sm font-medium shadow-sm">
                More Jurisdictions
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-card px-4 py-2 rounded-full border border-border text-sm font-medium shadow-sm">
                More Users
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-4 py-2 rounded-full border border-border text-sm font-medium shadow-sm">
                Better Outputs
              </div>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-card px-4 py-2 rounded-full border border-border text-sm font-medium shadow-sm">
                More Templates
              </div>
            </div>
          </div>

          {/* Moat items - 2x2 grid */}
          <div className="grid grid-cols-1 gap-5">
            {moatItems.map((item, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-5 bg-card border border-border rounded-xl p-5"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-base text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SlideContent>
    </SlideLayout>
  );
};
