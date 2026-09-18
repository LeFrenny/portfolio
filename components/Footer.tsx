import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        <strong>nitish.</strong> Still exploring. Always building.
      </p>
      <div>
        <a href="https://github.com/LeFrenny">GitHub</a>
        <a href="https://www.linkedin.com/in/nitish01/">LinkedIn</a>
        <Link href="/contact">
          Say hello <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <span className="footer-flower" aria-hidden="true">
        ✳
      </span>
    </footer>
  );
}
