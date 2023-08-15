import { getAllPostIds, getBlogData } from "../../../lib/blog";
import Date from "../../components/date";

export async function generateMetadata({ params }) {
  const blog = await getBlogData(params.id);
  return {
    title: blog.title,
  };
}

export default async function Post({ params }) {
  const blog = await getBlogData(params.id);
  return (
    <article>
      <h1 className="leading-tight font-extrabold tracking-tighter my-4">
        {blog.title}
      </h1>
      <div className="text-gray-500">
        <Date dateString={blog.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
    </article>
  );
}

export async function generateStaticParams() {
  return getAllPostIds();
}
