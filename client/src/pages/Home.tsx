import { Link } from "wouter";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Search,
  Map,
  FileText,
  ClipboardCheck,
  HardHat,
  Home as HomeIcon,
  CheckCircle2,
  ArrowRight,
  Calendar,
  MapPin,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@assets/generated_images/landing_page_hero_development_aerial.png";
import { COMPANY, ADDRESS } from "@/lib/constants";

export default function Home() {
  const services: { icon: LucideIcon; title: string }[] = [
    { icon: Building2, title: "Land Acquisition" },
    { icon: Search, title: "Site Evaluation & Due Diligence" },
    { icon: Map, title: "Conceptual Site Planning" },
    { icon: FileText, title: "Land Use Analysis & Rezoning" },
    { icon: ClipboardCheck, title: "Design & Permitting" },
    { icon: HardHat, title: "Pre-Construction" },
    { icon: HomeIcon, title: "Site Construction" },
    { icon: Building2, title: "Vertical Construction" },
    { icon: CheckCircle2, title: "Close Out" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Transforming Land Into Lasting Value"
        subtitle="We lead with data, innovation, and stakeholder alignment to deliver high-performing real estate development projects."
        imageSrc={heroImage}
        showCTA={true}
        ctaText="View Our Services"
        ctaLink="/services"
        variant="full"
      />

      {/* Credibility Bar */}
      <section className="py-6 bg-[hsl(210_10%_12%)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-sm text-gray-200 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Founded {COMPANY.foundedYear}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{ADDRESS.display}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-600" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive land development services tailored to meet the unique needs of the project.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-10 mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm font-medium">{service.title}</span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg">
                View More Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-16 md:py-24 bg-[hsl(162_20%_96%)]">
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
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
