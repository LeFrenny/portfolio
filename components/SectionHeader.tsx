type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-4xl border-l-2 border-terminal pl-5">
      <p className="hud-label">&gt;&gt; {eyebrow}</p>
      <div className="cut-panel mt-3 w-fit border border-line-base bg-bg-panel-soft px-5 py-3">
        <h1 className="font-display text-4xl leading-none text-ink sm:text-6xl">
          {title}
        </h1>
      </div>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
      <div className="mt-5 h-px w-full max-w-2xl bg-gradient-to-r from-terminal/60 via-line-base to-transparent" />
    </div>
  );
}
