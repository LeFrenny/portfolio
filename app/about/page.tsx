import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
export const metadata: Metadata = { title: "About" };
const skills = [
  "Python",
  "FastAPI",
  "Computer vision",
  "C#",
  "C++",
  "Julia",
  "R",
  "Linux",
  "PostgreSQL",
  "Git",
];
export default function AboutPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Inside the cover"
        title="More than a job title."
        description="I’m Nitish. Sports, computers, and games are the three worlds I keep coming back to."
      />
      <div className="about-grid">
        <div className="about-story">
          <h2>Curiosity tends to cross over.</h2>
          <p>
            A question about a player can turn into a data project. An interest
            in games can turn into a Discord bot. I like that space where the
            things I enjoy become things I can make.
          </p>
          <p>
            My background is in computer engineering, and I’m studying
            statistics and data analytics. I’ve worked with sports analysis,
            computer vision, and software. I’m still exploring where those paths
            can lead.
          </p>
          <p>
            This site is a little of all of that: a place for my work, the
            things I’m learning, and some personality along the way.
          </p>
          <a className="button button-primary" href="/resume.pdf" download>
            Download my resume <span aria-hidden="true">↓</span>
          </a>
        </div>
        <PhotoPlaceholder />
      </div>
      <section className="background-section">
        <div>
          <p className="chapter-label">Along the way</p>
          <h2>A bit of background</h2>
        </div>
        <dl className="background-list">
          <div>
            <dt>Lovely Professional University</dt>
            <dd>MSc Statistics & Data Analytics</dd>
          </div>
          <div>
            <dt>Delhi Technological University</dt>
            <dd>B.Tech Computer Engineering</dd>
          </div>
          <div>
            <dt>Global Sports Coaching Academy</dt>
            <dd>Academy Analyst — sports analytics and coaching science</dd>
          </div>
          <div>
            <dt>Research</dt>
            <dd>Co-authored an IEEE publication on human–animal conflict</dd>
          </div>
        </dl>
      </section>
      <section className="toolkit">
        <h2>Things I work with</h2>
        <ul className="tags">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <p>
          Have something interesting in mind?{" "}
          <Link className="text-link" href="/contact">
            Let’s talk.
          </Link>
        </p>
      </section>
    </>
  );
}
