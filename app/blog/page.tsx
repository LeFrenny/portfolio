import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
export const metadata: Metadata = { title: "Notes" };
export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <SectionHeader
        eyebrow="Field notes"
        title="Things noticed along the way."
        description="A place for project notes, interesting questions, and things I learn along the way."
      />
      {posts.length ? (
        <div className="notes-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <section className="empty-notebook">
          <span aria-hidden="true">✎</span>
          <h2>A fresh page, for now.</h2>
          <p>
            No notes published yet. In the meantime, there are a few projects to
            explore.
          </p>
          <Link className="button button-primary" href="/projects">
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
        </section>
      )}
    </>
  );
}
