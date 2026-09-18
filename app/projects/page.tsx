import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
export const metadata: Metadata = { title: "Work" };
export default function ProjectsPage() {
  return (
    <>
      <SectionHeader
        eyebrow="The project archive"
        title="Experiments worth keeping."
        description="A bit of sport, a bit of code, and a lot of figuring things out. Here’s what that looks like in practice."
      />
      <div className="project-grid projects-full">
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
      <p className="page-footnote">
        Want to look under the hood? Each project title opens its GitHub
        repository.
      </p>
    </>
  );
}
