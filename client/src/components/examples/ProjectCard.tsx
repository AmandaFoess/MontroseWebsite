import ProjectCard from "../ProjectCard";
import wagnerGlenImage from "@assets/generated_images/wagner_glen_project_showcase.png";
import theFoundryImage from "@assets/generated_images/the_foundry_project_showcase.png";
import universityTownesImage from "@assets/generated_images/university_townes_project_showcase.png";

export default function ProjectCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      <ProjectCard
        name="Wagner Glen"
        location="Charlotte, NC"
        description="Upscale residential development featuring modern homes with premium amenities and thoughtful community planning."
        imageSrc={wagnerGlenImage}
        status="Completed"
        role="Development Lead"
      />
      <ProjectCard
        name="The Foundry"
        location="Raleigh, NC"
        description="Mixed-use urban development combining retail, residential, and community spaces in a vibrant downtown setting."
        imageSrc={theFoundryImage}
        status="Under Construction"
        role="Entitlement Lead"
      />
      <ProjectCard
        name="University Townes"
        location="Durham, NC"
        description="Sustainable residential development with integrated green spaces and community facilities."
        imageSrc={universityTownesImage}
        status="Completed"
        role="Owner's Representative"
      />
    </div>
  );
}
