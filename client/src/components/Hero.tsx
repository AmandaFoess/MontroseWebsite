import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  variant?: "full" | "compact";
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  showCTA = false,
  ctaText = "View Projects",
  ctaLink = "/projects",
  variant = "full",
}: HeroProps) {
  const height = variant === "full" ? "h-[600px] md:h-[700px]" : "h-[400px]";

  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium">
          {subtitle}
        </p>
        {showCTA && (
          <a href={ctaLink} data-testid="button-hero-cta">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-border"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
