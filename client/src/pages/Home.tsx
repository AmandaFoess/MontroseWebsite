import { Link } from "wouter";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
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
} from "lucide-react";
import heroImage from "@assets/generated_images/landing_page_hero_development_aerial.png";
import projectsData from "@/data/projects.json";
import wagnerGlenImage from "@assets/generated_images/wagner_glen_project_showcase.png";
import theFoundryImage from "@assets/generated_images/the_foundry_project_showcase.png";
import universityTownesImage from "@assets/generated_images/university_townes_project_showcase.png";

const imageMap: Record<string, string> = {
  "wagner_glen_project_showcase.png": wagnerGlenImage,
  "the_foundry_project_showcase.png": theFoundryImage,
  "university_townes_project_showcase.png": universityTownesImage,
};

export default function Home() {
  const services = [
    { icon: Building2, title: "Land Acquisition" },
    { icon: Search, title: "Site Evaluation & Due Diligence" },
    { icon: Map, title: "Conceptual Site Planning" },
    { icon: FileText, title: "Land Use Analysis & Rezoning" },
    { icon: Wrench, title: "Engineering & Construction Docs" },
    { icon: ClipboardCheck, title: "Permitting & Entitlements" },
    { icon: HardHat, title: "Pre-Construction" },
    { icon: HomeIcon, title: "Site Construction" },
    { icon: Building2, title: "Vertical Construction" },
    { icon: CheckCircle2, title: "Close Out" },
  ];

  const featuredProjects = projectsData.slice(0, 3).map((project) => ({
    ...project,
    imageSrc: imageMap[project.image] || wagnerGlenImage,
    status: project.status as "Completed" | "Under Construction" | "Planned",
  }));

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Transforming Land Into Lasting Value"
        subtitle="We lead with data, innovation, and stakeholder alignment to deliver high-performing real estate development projects."
        imageSrc={heroImage}
        showCTA={true}
        ctaText="View Projects"
        ctaLink="/projects"
        variant="full"
      />

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
              <ServiceCard key={service.title} icon={service.icon} title={service.title} />
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

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of our landmark developments that demonstrate our expertise and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Development Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life with our comprehensive development services.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-get-in-touch">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
