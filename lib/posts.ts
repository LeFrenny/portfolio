import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostMeta = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[];
};

export type Post = PostMeta & {
  contentHtml: string;
};

type MatterData = {
  title?: string;
  date?: string;
  slug?: string;
  excerpt?: string;
  tags?: string[];
};

function getMarkdownFiles() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

function normalizePost(
  fileName: string,
  content: string,
): PostMeta & { content: string } {
  const { data, content: markdown } = matter(content);
  const frontmatter = data as MatterData;
  const slug = frontmatter.slug ?? fileName.replace(/\.md$/, "");

  return {
    title: frontmatter.title ?? "Untitled Entry",
    date: frontmatter.date ?? "TBD",
    slug,
    excerpt: frontmatter.excerpt ?? "",
    tags: frontmatter.tags ?? [],
    content: markdown,
  };
}

export function getAllPosts(): PostMeta[] {
  return getMarkdownFiles()
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const normalized = normalizePost(fileName, fileContents);

      return {
        title: normalized.title,
        date: normalized.date,
        slug: normalized.slug,
        excerpt: normalized.excerpt,
        tags: normalized.tags,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fileName = getMarkdownFiles().find((name) => {
    const fullPath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return normalizePost(name, fileContents).slug === slug;
  });

  if (!fileName) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const normalized = normalizePost(fileName, fileContents);
  const processedContent = await remark().use(html).process(normalized.content);

  return {
    title: normalized.title,
    date: normalized.date,
    slug: normalized.slug,
    excerpt: normalized.excerpt,
    tags: normalized.tags,
    contentHtml: processedContent.toString(),
  };
}
