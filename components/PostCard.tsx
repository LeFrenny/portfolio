import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="hud-panel menu-glow border-l-2 border-l-terminal border-t-2 border-t-kernel p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="hud-label">LOG // {post.date}</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink">
            <Link href={`/blog/${post.slug}`} className="hover:text-terminal">
              {post.title}
            </Link>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-line-base bg-bg-panel-soft px-2 py-1 font-display text-[11px] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-ink-muted">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex font-display text-xs text-kernel hover:text-terminal"
      >
        &gt;&gt; open log
      </Link>
    </article>
  );
}
