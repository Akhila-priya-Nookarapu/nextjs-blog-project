import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "posts");

function serializePost(data, content, slug) {
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date ? String(data.date) : "",
    content,
  };
}

export function getPosts() {
  return fs.readdirSync(dir).map((file) => {
    const slug = file.replace(".mdx", "");
    const raw = fs.readFileSync(path.join(dir, file));
    const { data, content } = matter(raw);

    return serializePost(data, content, slug);
  });
}

export function getPost(slug) {
  const raw = fs.readFileSync(path.join(dir, slug + ".mdx"));
  const { data, content } = matter(raw);

  return serializePost(data, content, slug);
}
