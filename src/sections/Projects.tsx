import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { featuredProjects, additionalProjects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected work"
        title="Featured projects"
        description="A closer look at the projects I've put the most engineering depth into."
      />

      <div className="mt-14 flex flex-col gap-20 sm:mt-16 sm:gap-24">
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </div>

      {additionalProjects.length > 0 && (
        <div className="mt-24 sm:mt-28">
          <SectionHeading title="Additional projects" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
