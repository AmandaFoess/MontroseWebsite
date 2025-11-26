import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import projectsData from "@/data/projects.json";
import wagnerGlenImage from "@assets/generated_images/wagner_glen_project_showcase.png";
import theFoundryImage from "@assets/generated_images/the_foundry_project_showcase.png";
import universityTownesImage from "@assets/generated_images/university_townes_project_showcase.png";

type ProjectStatus = "All" | "Completed" | "Under Construction" | "Planned";

const imageMap: Record<string, string> = {
  "wagner_glen_project_showcase.png": wagnerGlenImage,
  "the_foundry_project_showcase.png": theFoundryImage,
  "university_townes_project_showcase.png": universityTownesImage,
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>("All");

  const projects = projectsData.map((project) => ({
    ...project,
    imageSrc: imageMap[project.image] || wagnerGlenImage,
    status: project.status as "Completed" | "Under Construction" | "Planned",
  }));

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
              <ProjectCard key={project.id} {...project} />
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
