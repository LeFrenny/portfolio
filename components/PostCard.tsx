import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="note-card">
      <p className="chapter-label">{post.date}</p>
      <h2>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
      <ul className="tags">
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <Link className="text-link" href={`/blog/${post.slug}`}>
        Read this note <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
