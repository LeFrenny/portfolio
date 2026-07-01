import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    return {
      title: `${post.title} | Frenny`,
    };
  } catch {
    return {
      title: "Post not found | Frenny",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <article>
        <SectionHeader
          eyebrow={post.date}
          title={post.title}
          description={post.excerpt}
        />
        <div className="hud-panel p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line-base bg-bg-panel-soft px-2 py-1 font-display text-[11px] text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-ink prose-a:text-terminal prose-strong:text-ink prose-p:text-ink-muted prose-li:text-ink-muted"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
