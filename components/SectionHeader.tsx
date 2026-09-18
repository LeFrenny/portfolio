type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};
export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="page-heading">
      {eyebrow && <p className="chapter-label">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}
