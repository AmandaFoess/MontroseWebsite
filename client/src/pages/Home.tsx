import { Link } from "wouter";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Search,
  Map,
  FileText,
  Wrench,
  ClipboardCheck,
  HardHat,
  Home as HomeIcon,
  CheckCircle2,
  ArrowRight,
  Calendar,
  MapPin,
  TrendingUp,
} from "lucide-react";
import heroImage from "@assets/generated_images/landing_page_hero_development_aerial.png";

export default function Home() {
  const services = [
    { icon: Building2, title: "Land Acquisition", description: "Strategic identification and securing of development-ready parcels aligned with market demand." },
    { icon: Search, title: "Site Evaluation & Due Diligence", description: "Comprehensive analysis of environmental, geotechnical, and regulatory factors before commitment." },
    { icon: Map, title: "Conceptual Site Planning", description: "Translating project vision into preliminary layouts that maximize land use and value." },
    { icon: FileText, title: "Land Use Analysis & Rezoning", description: "Navigating zoning requirements and entitlement processes to unlock development potential." },
    { icon: Wrench, title: "Engineering & Construction Docs", description: "Coordinating civil, structural, and MEP engineering for permit-ready documentation." },
    { icon: ClipboardCheck, title: "Permitting & Entitlements", description: "Managing the full permitting lifecycle from application through final approval." },
    { icon: HardHat, title: "Pre-Construction", description: "Bid management, contractor selection, and scheduling to set projects up for success." },
    { icon: HomeIcon, title: "Site Construction", description: "Overseeing grading, utilities, and infrastructure to prepare sites for vertical development." },
    { icon: Building2, title: "Vertical Construction", description: "Managing the build from foundation to finish with a focus on quality and timeline." },
    { icon: CheckCircle2, title: "Close Out", description: "Final inspections, punch lists, and turnover to ensure a seamless project completion." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Transforming Land Into Lasting Value"
        subtitle="We lead with data, innovation, and stakeholder alignment to deliver high-performing real estate development projects."
        imageSrc={heroImage}
        showCTA={true}
        ctaText="Explore Our Work"
        ctaLink="/services"
        variant="full"
      />

      {/* Credibility Bar */}
      <section className="py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Founded 2013</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Charlotte, NC</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>Full-Cycle Land Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Scope of Work */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Scope of Work</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive land development services tailored to meet the unique needs of the project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" data-testid="button-learn-more-services">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            A Track Record of Results
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">5</p>
              <p className="text-sm text-muted-foreground">States Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Client Focused</p>
            </div>
          </div>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" variant="outline" data-testid="button-get-in-touch">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
