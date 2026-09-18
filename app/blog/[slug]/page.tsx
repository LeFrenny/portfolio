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
      title: post.title,
    };
  } catch {
    return {
      title: "Note not found",
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
        <div className="article-panel">
          <ul className="tags">
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div
            className="prose article-prose prose-headings:font-display"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
