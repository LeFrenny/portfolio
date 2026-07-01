import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const skills = [
  "Python",
  "FastAPI",
  "Computer Vision",
  "4D-Humans / SMPL",
  "ViTPose",
  "C#",
  "C++",
  "Julia",
  "R",
  "Linux Systems",
  "PostgreSQL",
  "SQL",
  "Git",
];

const timeline = [
  {
    label: "DTU",
    detail:
      "B.Tech Computer Engineering — algorithms, systems, and engineering foundations.",
  },
  {
    label: "IEEE",
    detail:
      "Co-authored publication — Digital Fenching: A Solution to Human-Animal Conflict.",
  },
  {
    label: "GSCA",
    detail:
      "Academy Analyst at Global Sports Coaching Academy — sports analytics and coaching science in practice.",
  },
  {
    label: "LPU",
    detail:
      "MSc Statistics & Data Analytics — graduate research in statistical modeling and ML theory.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="$ whoami"
        title="About"
        description="MSc student and CV engineer. I work at the intersection of computer vision, sports science, and statistical modeling."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Bio */}
        <section className="hud-panel p-6">
          <p className="hud-label">{"// mission briefing"}</p>
          <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
            <Image
              src="/nitish.png"
              alt="Nitish"
              width={100}
              height={100}
              className="rounded-full object-cover ring-2 ring-terminal/60 shrink-0"
            />
            <p className="leading-7 text-ink-muted">
              MSc Statistics & Data Analytics candidate at LPU. B.Tech Computer
              Engineering from DTU. Academy Analyst at GSCA. IEEE co-authored
              publication. I work at the intersection of computer vision, sports
              science, and statistical modeling — building things that actually
              hold up outside the notebook.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="hud-panel p-6">
          <p className="hud-label">{"// skill tree"}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-sm border border-line-base bg-bg-panel-soft px-4 py-3 font-display text-sm text-ink transition-all duration-200 hover:border-terminal hover:text-terminal"
              >
                <span className="mr-2 text-terminal">▸</span>
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Resume download strip */}
      <div className="mt-6 flex flex-col items-start justify-between gap-4 border-l-2 border-terminal bg-terminal/5 px-6 py-5 sm:flex-row sm:items-center">
        <p className="font-display text-sm uppercase tracking-[0.14em] text-terminal">
          DOSSIER // Full CV available for download
        </p>
        <a
          href="/resume.pdf"
          download
          className="whitespace-nowrap border border-terminal bg-terminal/10 px-4 py-2 font-display text-sm text-terminal transition-all duration-200 hover:bg-terminal hover:text-bg-base"
        >
          [ download resume.pdf ]
        </a>
      </div>

      {/* Timeline */}
      <section className="hud-panel mt-6 p-6">
        <p className="hud-label">{"// story log"}</p>
        <div className="relative mt-6 grid gap-5 before:absolute before:bottom-4 before:left-[2.35rem] before:top-4 before:w-px before:bg-line-base">
          {timeline.map((item, index) => (
            <div
              key={item.label}
              className="relative grid gap-3 border border-line-base bg-bg-panel-soft p-4 pl-20 transition-all duration-200 hover:translate-x-1 hover:border-terminal sm:grid-cols-[8rem_1fr]"
            >
              <span className="absolute left-4 top-4 border border-terminal bg-bg-base px-2 py-1 font-display text-xs text-terminal">
                CH.{String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-kernel">{item.label}</h2>
              <p className="text-sm leading-6 text-ink-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
