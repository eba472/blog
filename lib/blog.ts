import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface Blog {
  id: string;
  contentHtml: string;
  title: string;
  date: string;
}

interface MarkDownHeader {
  title: string;
  date: string;
}

const blogsDirectory = path.join(process.cwd(), "blogs");

export function getSortedBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const tags: string[] = matterResult.data.tags
      ? matterResult.data.tags.split(", ")
      : [];
    return {
      id,
      ...(matterResult.data as MarkDownHeader),
      tags
    };
  });
  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ""),
    };
  });
}

export async function getBlogData(id: string): Promise<Blog> {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as MarkDownHeader),
  };
}
