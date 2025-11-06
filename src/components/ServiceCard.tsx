import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useImageLoader } from "@/hooks/useImageLoader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  backgroundImage?: string;
  backgroundAlt?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link, backgroundImage, backgroundAlt }: ServiceCardProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { isLoaded, error } = useImageLoader(isVisible ? backgroundImage : undefined);

  return (
    <div ref={ref}>
      <Link to={link}>
        <Card className="group hover-lift hover-glow border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden h-full transition-all duration-300 relative">
        {/* Background Image Layer */}
        {backgroundImage && !error && (
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={backgroundImage}
              alt={backgroundAlt || title}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isLoaded ? 'opacity-60 group-hover:opacity-70 scale-100' : 'opacity-0 scale-105'
              }`}
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/30" />
          </div>
        )}
        
        {/* Content Layer */}
        <CardContent className="relative z-10 p-6 space-y-4">
          <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/30 transition-colors backdrop-blur-sm">
            <Icon className="w-7 h-7 text-[#D25C84]" aria-hidden="true" />
          </div>
          
          <h3 className="font-heading text-xl font-semibold group-hover:text-[#D25C84] transition-colors drop-shadow-lg">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center text-[#D25C84] text-sm font-medium pt-2">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
      </Link>
    </div>
  );
};

export default ServiceCard;
