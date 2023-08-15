import { getSortedBlogsData } from "../../lib/blog";
import Link from "next/link";
import Date from "../components/date";

export const metadata = {
  title: "Eba personal blog about software engineering",
};

export default async function Post({ params }) {
  const blogs = getSortedBlogsData();
  return (
    <section className="text-base/loose p-1">
      <h2>Blog</h2>
      <ul className="list-none p-0 m-0">
        {blogs.map(({ id, date, title }) => {
          return (
            <li className="mb-5" key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
