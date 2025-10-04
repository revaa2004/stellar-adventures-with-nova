import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import coverImage from "@/assets/cover-nova.jpg";

interface CoverPageProps {
  onStart: () => void;
}

export const CoverPage = ({ onStart }: CoverPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 stellar-glow rounded-2xl" />
          <img
            src={coverImage}
            alt="Nova looking through telescope at starry sky"
            className="w-full h-[500px] object-cover rounded-2xl border-2 border-primary/40"
          />
        </div>
        
        <div className="space-y-4 animate-float">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-accent animate-twinkle" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Nova's Space Weather Journey
            </h1>
            <Sparkles className="w-8 h-8 text-accent animate-twinkle" />
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join Nova on an extraordinary adventure through the cosmos as she discovers 
            the wonders of space weather, from blazing solar flares to dancing auroras
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-4">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              7 Chapters
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              30-45 Minutes
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Ages 13-15
            </span>
          </div>
        </div>
        
        <Button 
          variant="cosmic" 
          size="lg" 
          onClick={onStart}
          className="text-lg px-12 py-6 h-auto"
        >
          Begin Your Journey
        </Button>
      </div>
    </div>
  );
};
