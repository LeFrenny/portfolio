import PostCard from "@/components/PostCard";
import SectionHeader from "@/components/SectionHeader";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <SectionHeader
        eyebrow="$ cat ./logs"
        title="Blog"
        description="Technical writeups, devlogs, and notes on ML, data engineering, and sports analytics."
      />
      <div className="grid gap-5">
        {posts.length === 0 ? (
          <p className="font-display text-sm text-ink-muted">
            {"// no logs recorded yet"}
          </p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}
