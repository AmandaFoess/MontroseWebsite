import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      )}
    </Card>
  );
}
