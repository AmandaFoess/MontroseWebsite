import ValueCard from "../ValueCard";
import { Award, Leaf, Lightbulb, Shield, Users, Handshake } from "lucide-react";

export default function ValueCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      <ValueCard
        icon={Award}
        title="Excellence"
        description="We strive for excellence in every aspect of our work."
      />
      <ValueCard
        icon={Leaf}
        title="Sustainability"
        description="We minimize environmental impact and promote long term value."
      />
      <ValueCard
        icon={Lightbulb}
        title="Innovation"
        description="We embrace technologies to create forward-thinking development solutions."
      />
      <ValueCard
        icon={Shield}
        title="Integrity"
        description="We uphold transparency and ethical behavior in all we do."
      />
      <ValueCard
        icon={Users}
        title="Community"
        description="Our projects enhance and integrate with the surrounding communities."
      />
      <ValueCard
        icon={Handshake}
        title="Partnership"
        description="We value collaboration with clients, contractors, and community members."
      />
    </div>
  );
}
