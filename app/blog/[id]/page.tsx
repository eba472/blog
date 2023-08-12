import { getAllPostIds, getBlogData } from "../../../lib/blog";
import Head from "next/head";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";

export async function generateMetadata({ params }) {
  const blog = await getBlogData(params.id);
  return {
    title: blog.title,
  };
}

export default async function Post({ params }) {
  const blog = await getBlogData(params.id);
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{blog.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={blog.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
      </article>
    </>
  );
}

export async function generateStaticParams() {
  return getAllPostIds();
}
