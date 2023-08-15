import { getSortedBlogsData } from "../../lib/blog";
import Link from "next/link";
import Date from "../components/date";
import Tag from "../components/tag";

export const metadata = {
  title: "Eba personal blog about software engineering",
};

export default async function Post() {
  const blogs = getSortedBlogsData();
  return (
    <section className="text-base/loose p-1">
      <h1>Blog</h1>
      {blogs.map(({ id, date, title, tags }) => {
        return (
          <div key={id}>
            <div className="flex justify-between">
              <Link href={`/blog/${id}`}>
                {title}
              </Link>
              <small className="text-gray-500 whitespace-nowrap">
                <Date dateString={date} />
              </small>
            </div>
            <div>
              {tags.map((skill) => (
                <Tag key={skill} name={skill} />
              ))}
            </div>
            <hr className="h-px my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          </div>
        );
      })}
    </section>
  );
}
