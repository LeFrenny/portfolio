import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "whoami", meta: "Background and stack" },
  { href: "/projects", label: "ls projects", meta: "Selected builds" },
  { href: "/blog", label: "cat logs", meta: "Devlogs and notes" },
  { href: "/contact", label: "ssh contact", meta: "Links and email" },
];

const processes = [
  { name: "discord.bot", state: "building", className: "text-warn" },
  { name: "lpu.msc", state: "enrolled", className: "text-warn" },
  { name: "job.search", state: "open", className: "text-terminal" },
  {
    name: "baseball.analytics",
    state: "published",
    className: "text-terminal",
  },
];

const characterStats = [
  ["CODENAME", "Nitish Kumar"],
  ["CLASS", "ML / CV Engineer"],
  ["SUB-CLASS", "Sports Performance Analyst"],
  ["STATUS", "Open to Roles"],
];

export default function HomePage() {
  return (
    <div className="grid gap-8">
      {/* Hero terminal window */}
      <section className="terminal-window animate-fade-up">
        <span className="scanline" />
        <div className="flex items-center gap-2 border-b border-line-base bg-bg-panel-soft px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-error" />
          <span className="h-3 w-3 rounded-full bg-warn" />
          <span className="h-3 w-3 rounded-full bg-terminal" />
          <span className="ml-3 font-display text-xs text-ink-muted">
            frenny@portfolio:~
          </span>
        </div>
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          {/* Left — hero text */}
          <div>
            <p className="font-display text-sm text-terminal">
              $ ./boot-profile.sh
              <span className="ml-1 inline-block h-5 w-2 animate-blink bg-terminal align-middle" />
            </p>
            <pre className="mt-4 font-mono text-xs text-terminal leading-[1.1] sm:text-sm md:text-base overflow-x-auto">
              {`
            ███╗   ██╗██╗████████╗██╗███████╗██╗  ██╗
            ████╗  ██║██║╚══██╔══╝██║██╔════╝██║  ██║
            ██╔██╗ ██║██║   ██║   ██║███████╗███████║
            ██║╚██╗██║██║   ██║   ██║╚════██║██╔══██║
            ██║ ╚████║██║   ██║   ██║███████║██║  ██║
            ╚═╝  ╚═══╝╚═╝   ╚═╝   ╚═╝╚══════╝╚═╝  ╚═╝`}
            </pre>
            <h2 className="mt-6 max-w-4xl font-display text-lg font-bold leading-snug text-ink sm:text-xl">
              ML engineer who builds for the field, not the leaderboard.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-muted">
              CV engineer and data analyst with a background in computer
              engineering and statistical modeling. MSc Statistics & Data
              Analytics at LPU, B.Tech Computer Engineering from DTU. IEEE
              co-author. Open to ML/CV and SWE roles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="border border-terminal bg-terminal/10 px-4 py-2 font-display text-sm text-terminal transition-all duration-200 hover:bg-terminal hover:text-bg-base"
              >
                [ view projects ]
              </Link>
              <a
                href="/resume.pdf"
                download
                className="border border-kernel bg-kernel/10 px-4 py-2 font-display text-sm text-kernel transition-all duration-200 hover:bg-kernel hover:text-bg-base"
              >
                [ download resume ]
              </a>
            </div>
          </div>

          {/* Right — dossier + process monitor */}
          <aside className="grid gap-4">
            {/* Agent dossier card */}
            <div className="cut-panel border border-terminal/50 bg-terminal/5 p-5 shadow-glow">
              <p className="hud-label mb-4">{"// agent dossier"}</p>
              <div className="flex items-start gap-4">
                <Image
                  src="/nitish.png"
                  alt="Nitish"
                  width={72}
                  height={72}
                  className="rounded-full object-cover ring-2 ring-terminal/50 shrink-0"
                />
                <div className="space-y-2 text-sm font-display w-full">
                  {characterStats.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-2 border-b border-line-base pb-1.5 last:border-b-0 last:pb-0"
                    >
                      <span className="text-ink-muted shrink-0">{label}</span>
                      <span className="text-ink text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process monitor */}
            <div className="border border-line-base bg-bg-base p-4 font-display text-sm">
              <p className="text-ink-muted">process monitor</p>
              <div className="mt-4 space-y-3">
                {processes.map((process) => (
                  <div
                    key={process.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-ink">{process.name}</span>
                    <span className={process.className}>{process.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Quick nav grid */}
      <section className="grid gap-4 md:grid-cols-4">
        {quickLinks.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="hud-panel menu-glow p-5 transition-all duration-200 hover:-translate-y-1 hover:border-terminal hover:bg-bg-panel-soft"
          >
            <span className="font-display text-xs text-terminal">
              {index + 1}. command
            </span>
            <span className="mt-6 block font-display text-xl font-bold text-ink">
              {item.label}
            </span>
            <span className="mt-2 block text-sm text-ink-muted">
              {item.meta}
            </span>
          </Link>
        ))}
      </section>

      {/* MOTD + toolchain */}
      <section className="grid gap-5 lg:grid-cols-3">
        <div className="hud-panel cut-panel p-5 lg:col-span-2">
          <p className="hud-label">/etc/motd</p>
          <p className="mt-4 max-w-3xl text-2xl font-bold leading-tight">
            I don&apos;t just train models. I build the systems around them.
          </p>
        </div>
        <div className="hud-panel p-5">
          <p className="hud-label">toolchain</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Python",
              "FastAPI",
              "CV",
              "C#",
              "SQL",
              "AI/ML",
              "R",
              "Linux Systems",
            ].map((item) => (
              <span
                key={item}
                className="rounded-sm border border-line-base bg-bg-panel-soft px-3 py-1.5 font-display text-xs text-ink-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
