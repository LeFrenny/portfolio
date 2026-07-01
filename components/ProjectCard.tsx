import Link from "next/link";

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  stat: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const isActive = project.stat.toLowerCase() === "active";
  const accentClass = isActive ? "border-l-terminal" : "border-l-kernel";
  const topClass = isActive ? "border-t-terminal" : "border-t-kernel";

  return (
    <article
      className={`hud-panel menu-glow flex h-full flex-col justify-between overflow-hidden border-l-2 ${accentClass} border-t-2 ${topClass} hover:border-t-terminal`}
    >
      <div>
        <div className="flex items-center justify-between border-b border-line-base bg-bg-panel-soft px-5 py-3 text-ink">
          <p className="font-display text-xs text-terminal">
            <span className="mr-2 inline-block h-2 w-2 bg-terminal align-middle" />
            repo
          </p>
          <p className="font-display text-xs text-ink-muted">{project.stat}</p>
        </div>
        <div className="p-5">
          <h2 className="font-display text-2xl font-bold leading-tight text-ink">
            {project.name}
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink-muted">
            {project.description}
          </p>
        </div>
      </div>
      <div className="p-5 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-line-base bg-bg-panel-soft px-2 py-1 font-display text-[11px] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={project.href}
          className="mt-5 inline-flex border border-terminal bg-terminal/10 px-3 py-2 font-display text-xs text-terminal transition-all duration-200 hover:bg-terminal hover:text-bg-base"
        >
          [ git repo ]
        </Link>
      </div>
    </article>
  );
}
