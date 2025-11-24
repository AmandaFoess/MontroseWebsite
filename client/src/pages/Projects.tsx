import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import wagnerGlenImage from "@assets/generated_images/wagner_glen_project_showcase.png";
import theFoundryImage from "@assets/generated_images/the_foundry_project_showcase.png";
import universityTownesImage from "@assets/generated_images/university_townes_project_showcase.png";

type ProjectStatus = "All" | "Completed" | "Under Construction" | "Planned";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>("All");

  // TODO: remove mock functionality - replace with actual data from backend
  const projects = [
    {
      name: "Wagner Glen",
      location: "Charlotte, NC",
      description: "Upscale residential development featuring modern homes with premium amenities and thoughtful community planning.",
      imageSrc: wagnerGlenImage,
      status: "Completed" as const,
      role: "Development Lead",
    },
    {
      name: "The Foundry",
      location: "Raleigh, NC",
      description: "Mixed-use urban development combining retail, residential, and community spaces in a vibrant downtown setting.",
      imageSrc: theFoundryImage,
      status: "Under Construction" as const,
      role: "Entitlement Lead",
    },
    {
      name: "University Townes",
      location: "Durham, NC",
      description: "Sustainable residential development with integrated green spaces and community facilities.",
      imageSrc: universityTownesImage,
      status: "Completed" as const,
      role: "Owner's Representative",
    },
    {
      name: "Riverside Commons",
      location: "Greensboro, NC",
      description: "Master-planned community with residential and commercial components along the riverfront.",
      imageSrc: wagnerGlenImage,
      status: "Planned" as const,
      role: "Project Manager",
    },
    {
      name: "Tech Park South",
      location: "Durham, NC",
      description: "Modern office park development designed for technology companies and startups.",
      imageSrc: theFoundryImage,
      status: "Under Construction" as const,
      role: "Development Consultant",
    },
    {
      name: "Heritage Village",
      location: "Winston-Salem, NC",
      description: "Historic district revitalization combining preservation with modern amenities.",
      imageSrc: universityTownesImage,
      status: "Completed" as const,
      role: "Entitlement Lead",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.status === activeFilter);

  return (
    <div>
      <Hero
        title="Our Projects"
        subtitle="Explore our portfolio of successful developments across the region."
        variant="compact"
      />

      {/* Filter Tabs and Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Filter Tabs */}
          <div className="mb-12 flex justify-center">
            <Tabs value={activeFilter} onValueChange={(value) => setActiveFilter(value as ProjectStatus)}>
              <TabsList>
                <TabsTrigger value="All" data-testid="tab-all">All</TabsTrigger>
                <TabsTrigger value="Completed" data-testid="tab-completed">Completed</TabsTrigger>
                <TabsTrigger value="Under Construction" data-testid="tab-under-construction">
                  Under Construction
                </TabsTrigger>
                <TabsTrigger value="Planned" data-testid="tab-planned">Planned</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found with status: {activeFilter}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
