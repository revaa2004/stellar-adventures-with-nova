import { useState } from "react";
import { CoverPage } from "@/components/StoryBook/CoverPage";
import { ChapterView } from "@/components/StoryBook/ChapterView";
import { ChapterNavigation } from "@/components/StoryBook/ChapterNavigation";
import { getChapterById, getTotalChapters } from "@/data/storyData";

const Index = () => {
  const [showCover, setShowCover] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(1);

  const handleStart = () => {
    setShowCover(false);
    setCurrentChapter(1);
  };

  const handleHome = () => {
    setShowCover(true);
    setCurrentChapter(1);
  };

  const handleNext = () => {
    if (currentChapter < getTotalChapters()) {
      setCurrentChapter((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentChapter > 1) {
      setCurrentChapter((prev) => prev - 1);
    }
  };

  const chapter = getChapterById(currentChapter);

  if (showCover) {
    return <CoverPage onStart={handleStart} />;
  }

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Chapter not found</p>
      </div>
    );
  }

  return (
    <>
      <ChapterView chapter={chapter} />
      <ChapterNavigation
        currentChapter={currentChapter}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onHome={handleHome}
      />
    </>
  );
};

export default Index;
