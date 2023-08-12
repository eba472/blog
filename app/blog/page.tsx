import utilStyles from "./../styles/utils.module.css";
import { getSortedBlogsData } from "../../lib/blog";
import Link from "next/link";
import Date from "../components/date";

export const metadata = {
  title: "Eba personal blog about software engineering",
};

export default async function Post({ params }) {
  const blogs = getSortedBlogsData();
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {blogs.map(({ id, date, title }) => {
          return (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
