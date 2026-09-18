export default function Crest({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 190"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M80 8 148 43v67l-68 72-68-72V43Z"
        fill="var(--surface)"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path d="M80 17 140 48v58l-60 64Z" fill="currentColor" />
      <path
        d="m39 112 24-57 34 58 24-57"
        stroke="var(--accent)"
        strokeWidth="13"
        strokeLinejoin="bevel"
      />
      <path d="M61 133h38M69 142h22" stroke="var(--accent)" strokeWidth="3" />
    </svg>
  );
}
