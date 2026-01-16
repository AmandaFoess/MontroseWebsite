import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  name: string;
  location: string;
  description: string;
  imageSrc: string;
  status?: "Planned" | "Under Construction" | "Completed";
}

export default function ProjectCard({
  name,
  location,
  description,
  imageSrc,
  status = "Completed",
}: ProjectCardProps) {
  const statusColors = {
    Planned: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "Under Construction": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    Completed: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-project-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle className="text-2xl">{name}</CardTitle>
          <Badge className={`${statusColors[status]} no-default-hover-elevate no-default-active-elevate`}>
            {status}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
