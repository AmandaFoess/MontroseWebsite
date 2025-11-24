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
  const height = variant === "full" ? "h-[600px] md:h-[700px]" : "h-[200px] md:h-[250px]";
  const textColor = imageSrc ? "text-white" : "text-foreground";
  const subtitleColor = imageSrc ? "text-white/90" : "text-muted-foreground";

  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden ${!imageSrc ? 'bg-card' : ''}`}>
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
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-4 tracking-tight`}>
          {title}
        </h1>
        <p className={`text-base md:text-lg lg:text-xl ${subtitleColor} mb-6 max-w-3xl mx-auto font-medium`}>
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
