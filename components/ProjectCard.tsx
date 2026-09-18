import type { Project } from "@/lib/projects";
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-${project.kind}`}>
      <div className="project-art" aria-hidden="true">
        <span className="art-caption">
          {project.kind === "football"
            ? "The match notebook"
            : project.kind === "baseball"
              ? "From the dugout"
              : "A little side adventure"}
        </span>
        {project.kind === "football" ? (
          <div className="mini-pitch">
            <span />
            <i />
            <b />
            <em />
          </div>
        ) : project.kind === "baseball" ? (
          <div className="baseball-diamond">
            <span />
            <i />
            <b />
          </div>
        ) : (
          <div className="bot-face">
            <span>•</span>
            <span>•</span>
            <i />
          </div>
        )}
        <span className="art-spark">✳</span>
      </div>
      <div className="project-body">
        <span className="project-status">
          <i />
          {project.status}
        </span>
        <h3>
          <a href={project.href}>
            {project.name}
            <span aria-hidden="true">↗</span>
          </a>
        </h3>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
