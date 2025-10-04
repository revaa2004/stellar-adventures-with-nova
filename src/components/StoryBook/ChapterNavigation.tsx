import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { getTotalChapters } from "@/data/storyData";

interface ChapterNavigationProps {
  currentChapter: number;
  onPrevious: () => void;
  onNext: () => void;
  onHome: () => void;
}

export const ChapterNavigation = ({
  currentChapter,
  onPrevious,
  onNext,
  onHome,
}: ChapterNavigationProps) => {
  const totalChapters = getTotalChapters();
  const isFirst = currentChapter === 1;
  const isLast = currentChapter === totalChapters;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <Button
          variant="cosmic"
          size="sm"
          onClick={onHome}
          className="gap-2"
        >
          <Home className="w-4 h-4" />
          Home
        </Button>

        <div className="flex items-center gap-4">
          <Button
            variant="cosmic"
            size="sm"
            onClick={onPrevious}
            disabled={isFirst}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <span className="text-sm text-muted-foreground font-medium">
            Chapter {currentChapter} of {totalChapters}
          </span>

          <Button
            variant="cosmic"
            size="sm"
            onClick={onNext}
            disabled={isLast}
            className="gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="w-20" /> {/* Spacer for symmetry */}
      </div>
    </div>
  );
};
