import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

const contacts = [
  {
    label: "Email",
    href: "mailto:nitish.kumar.stats@gmail.com",
    value: "nitish.kumar.stats@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Solace00",
    value: "github.com/Solace00",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nitish01/",
    value: "linkedin.com/in/nitish01",
  },
];

export default function ContactPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="$ ssh nitish"
        title="Contact"
        description="Available for ML/CV Engineer and junior SWE roles. Open to opportunities anywhere in the world and remote. Response within 24 hours."
      />
      <section className="grid gap-4">
        {contacts.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hud-panel menu-glow grid gap-2 border-l-2 border-l-kernel p-5 transition-all duration-200 hover:-translate-y-1 hover:border-terminal hover:bg-bg-panel-soft sm:grid-cols-[9rem_1fr]"
          >
            <span className="font-display text-sm text-terminal">
              &gt;_ ping {item.label}
            </span>
            <span className="text-ink-muted">{item.value}</span>
          </Link>
        ))}
      </section>

      {/* Resume download */}
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-l-2 border-terminal bg-terminal/5 px-6 py-5 sm:flex-row sm:items-center">
        <p className="font-display text-sm uppercase tracking-[0.14em] text-terminal">
          FULL DOSSIER // Download CV for complete background and project
          details
        </p>
        <a
          href="/resume.pdf"
          download
          className="whitespace-nowrap border border-terminal bg-terminal/10 px-4 py-2 font-display text-sm text-terminal transition-all duration-200 hover:bg-terminal hover:text-bg-base"
        >
          [ download resume.pdf ]
        </a>
      </div>
    </div>
  );
}
