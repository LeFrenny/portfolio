import Link from "next/link";

const links = [
  { href: "mailto:nitish.kumar.stats@gmail.com", label: "Email" },
  { href: "https://github.com/Solace00", label: "GitHub" },
  { href: "https://www.linkedin.com/in/nitish01/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <div className="hud-panel flex flex-col gap-4 border-t-2 border-terminal px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xs uppercase tracking-[0.16em] text-ink-muted">
          System Online // frenny.dev
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hud-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
