import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Building2,
  Search,
  Map,
  FileText,
  ClipboardCheck,
  HardHat,
  Home as HomeIcon,
  Building,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Land Acquisition",
      description: "Market studies/competitive market analysis, pro forma development, initial site assessment.",
    },
    {
      icon: Search,
      title: "Site Evaluation & Due Diligence",
      description: "Land suitability review, risk identification, budget estimates, project milestone creation, environmental studies, project scope statement, project requirements statement, identify stakeholders.",
    },
    {
      icon: Map,
      title: "Conceptual Site Planning",
      description: "Initial sketch plan development with roads, buildings, utilities, and stormwater based on project vision identifying.",
    },
    {
      icon: FileText,
      title: "Land Use Analysis & Rezoning",
      description: "Zoning analysis, municipal coordination, community meetings/stakeholder engagement, and public hearing support to achieve successful rezoning.",
    },
    {
      icon: ClipboardCheck,
      title: "Design & Permitting",
      description: "Engineering plan oversight, value engineering, project specification development, permit review tracking, agency coordination, comment resolution, and approval management.",
    },
    {
      icon: HardHat,
      title: "Pre-Construction",
      description: "Budget updates, contractor RFPs, proposal review, schedule alignment before construction, resource selection for work packages.",
    },
    {
      icon: HomeIcon,
      title: "Site Construction",
      description: "On-site meeting management, work tracking, issue resolution, contractor invoice review, documenting progress, ensuring work meets plans/specs.",
    },
    {
      icon: Building,
      title: "Vertical Construction",
      description: "Site visits to monitor vertical build progress and document any on-site damages.",
    },
    {
      icon: CheckCircle2,
      title: "Close Out",
      description: "Permit closure, bond release, final documentation delivery, agency coordination, utility as-built coordination, public infrastructure turnover, BMP conversions.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive land development services tailored to meet the unique needs of the project."
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-topo">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Our team is ready to guide you through every phase of development, from initial concept to final delivery.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-contact-us">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
