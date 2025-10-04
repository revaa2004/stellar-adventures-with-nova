import { Chapter } from "@/data/storyData";
import { useEffect, useRef, useState } from "react";

interface ChapterViewProps {
  chapter: Chapter;
}

export const ChapterView = ({ chapter }: ChapterViewProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when chapter changes
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    setImageLoaded(false);
  }, [chapter.id]);

  return (
    <div 
      ref={contentRef}
      className="min-h-screen pb-24 px-4 md:px-8 pt-8 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Chapter Title */}
        <div className="text-center space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/40 text-sm font-medium text-primary">
            Chapter {chapter.id}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {chapter.title}
          </h2>
        </div>

        {/* Chapter Image */}
        <div className="relative">
          <div className={`absolute inset-0 stellar-glow rounded-xl transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} />
          <img
            src={chapter.image}
            alt={chapter.title}
            className={`w-full h-[400px] md:h-[500px] object-cover rounded-xl border-2 border-primary/40 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Chapter Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          {chapter.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-foreground/90 first-letter:text-4xl first-letter:font-bold first-letter:text-accent first-letter:mr-1 first-letter:float-left"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
