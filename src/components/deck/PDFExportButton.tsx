import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

interface PDFExportButtonProps {
  slidesRef: React.RefObject<HTMLDivElement>;
  totalSlides: number;
  onSlideChange: (index: number) => Promise<void>;
}

export const PDFExportButton = ({ slidesRef, totalSlides, onSlideChange }: PDFExportButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    if (!slidesRef.current) return;

    const EXPORT_WIDTH = 1920;
    const EXPORT_HEIGHT = 1080;
    const CAPTURE_SCALE = 2; // renders at 3840x2160 then downscales into the PDF

    const waitForNextPaint = () =>
      new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      );

    const waitForImages = async (root: HTMLElement) => {
      const images = Array.from(root.querySelectorAll("img"));
      if (images.length === 0) return;

      await Promise.all(
        images.map(async (img) => {
          try {
            // If already loaded, decode for best text/image sharpness
            if (img.complete && img.naturalWidth > 0) {
              await img.decode?.().catch(() => undefined);
              return;
            }

            await new Promise<void>((resolve) => {
              const done = () => resolve();
              img.addEventListener("load", done, { once: true });
              img.addEventListener("error", done, { once: true });
            });

            await img.decode?.().catch(() => undefined);
          } catch {
            // ignore
          }
        })
      );
    };

    setIsExporting(true);

    // Add class to disable animations (and let SlideLayout render statically)
    document.body.classList.add("pdf-exporting");

    try {
      // Ensure fonts are loaded before capture (prevents fallback font screenshots)
      await (document as any).fonts?.ready?.catch(() => undefined);

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [EXPORT_WIDTH, EXPORT_HEIGHT],
        compress: true,
      });

      const container = slidesRef.current;

      for (let i = 0; i < totalSlides; i++) {
        await onSlideChange(i);

        // Let React commit + layout settle
        await waitForNextPaint();
        await waitForImages(container);
        await waitForNextPaint();

        const computedBg = window.getComputedStyle(container).backgroundColor;
        const backgroundColor =
          computedBg && computedBg !== "rgba(0, 0, 0, 0)" ? computedBg : "#ffffff";

        const canvas = await html2canvas(container, {
          // Force a consistent 16:9 capture area regardless of current viewport
          width: EXPORT_WIDTH,
          height: EXPORT_HEIGHT,
          windowWidth: EXPORT_WIDTH,
          windowHeight: EXPORT_HEIGHT,

          scale: CAPTURE_SCALE,
          useCORS: true,
          allowTaint: false,
          backgroundColor,
          imageTimeout: 15000,
          logging: false,

          onclone: (clonedDoc) => {
            // Ensure the cloned DOM is also in export mode
            clonedDoc.body.classList.add("pdf-exporting");
            clonedDoc.body.style.margin = "0";

            const clonedContainer = clonedDoc.querySelector(
              "[data-pdf-slide-root='true']"
            ) as HTMLElement | null;

            if (clonedContainer) {
              clonedContainer.style.width = `${EXPORT_WIDTH}px`;
              clonedContainer.style.height = `${EXPORT_HEIGHT}px`;
              clonedContainer.style.overflow = "hidden";
            }
          },
        });

        const imgData = canvas.toDataURL("image/png", 1.0);

        if (i > 0) pdf.addPage();

        // No stretching: canvas is already 16:9 @ 1920x1080 logical size
        pdf.addImage(imgData, "PNG", 0, 0, EXPORT_WIDTH, EXPORT_HEIGHT, undefined, "FAST");
      }

      // Return to first slide after export
      await onSlideChange(0);

      pdf.save("TerraFox-Pitch-Deck.pdf");
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
      document.body.classList.remove("pdf-exporting");
      setIsExporting(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={exportToPDF}
      disabled={isExporting}
      className="gap-2"
    >
      {isExporting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Export PDF
        </>
      )}
    </Button>
  );
};