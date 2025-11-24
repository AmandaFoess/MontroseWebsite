import ServiceCard from "../ServiceCard";
import { Building2, Search, Map } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      <ServiceCard
        icon={Building2}
        title="Land Acquisition"
        description="Market studies, competitive analysis, pro forma development, and initial site assessment."
      />
      <ServiceCard
        icon={Search}
        title="Site Evaluation"
        description="Comprehensive land suitability review, risk identification, and environmental studies."
      />
      <ServiceCard
        icon={Map}
        title="Site Planning"
        description="Initial sketch plan development with roads, buildings, utilities, and stormwater."
      />
    </div>
  );
}
