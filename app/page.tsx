import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const interests = [
  {
    name: "Sports",
    symbol: "◉",
    note: "Looking beyond the scoreboard.",
    detail:
      "Player patterns, match decisions, and the stories behind the numbers. A question about a game often becomes my next project.",
    href: "/projects",
    action: "Explore the projects",
  },
  {
    name: "Computers",
    symbol: "⌘",
    note: "Taking things apart. Making things work.",
    detail:
      "From Python experiments to a Discord bot in C#, I like turning something I’m curious about into something I can use.",
    href: "/projects",
    action: "See what I’ve built",
  },
  {
    name: "Games",
    symbol: "✚",
    note: "Always room for another adventure.",
    detail:
      "Pokémon, Inazuma Eleven, and worlds worth exploring. I like games that make you care about the journey, the characters, and the choices along the way.",
    href: "/about",
    action: "More about me",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="trainer-hero">
        <div className="hero-copy">
          <p className="welcome-note">
            <span aria-hidden="true">◆</span> A different kind of trainer
          </p>
          <h1>
            Curiosity
            <br />
            has no type.
          </h1>
          <p className="hero-description">
            I’m Nitish. Into sports, computers, and games. I follow what
            interests me, build things to understand it, and leave room for the
            unexpected.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              Browse my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/about">
              Meet the person
            </Link>
          </div>
          <p className="availability">
            <span /> Open to opportunities & collaborations
          </p>
        </div>
        <div className="profile-display">
          <PhotoPlaceholder />
          <span className="profile-caption">
            No single class. No fixed route.
          </span>
        </div>
      </section>
      <section className="interest-section" aria-labelledby="interests-heading">
        <div className="interest-intro">
          <h2 id="interests-heading">My three starting points.</h2>
          <p>Choose one to learn more.</p>
        </div>
        <div className="interest-notes">
          {interests.map((interest) => (
            <details className="interest-note" key={interest.name}>
              <summary>
                <span className="interest-symbol" aria-hidden="true">
                  {interest.symbol}
                </span>
                <span>
                  <strong>{interest.name}</strong>
                  <small>{interest.note}</small>
                </span>
                <span className="note-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="interest-detail">
                <p>{interest.detail}</p>
                <Link className="text-link" href={interest.href}>
                  {interest.action} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="work-section" aria-labelledby="work-heading">
        <div className="section-title">
          <div>
            <p className="chapter-label">Selected work</p>
            <h2 id="work-heading">Ideas, evolved.</h2>
          </div>
          <Link className="text-link" href="/projects">
            View all work <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </section>
      <section className="hello-banner">
        <div>
          <span className="banner-icon" aria-hidden="true">
            ✉
          </span>
          <div>
            <h2>Leave a note. Start something.</h2>
            <p>
              A project, an opportunity, or a shared interest. I’d love to hear
              about it.
            </p>
          </div>
        </div>
        <Link className="button" href="/contact">
          Say hello <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
