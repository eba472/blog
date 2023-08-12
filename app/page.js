import utilStyles from '../styles/utils.module.css';
import { getSortedBlogsData } from '../lib/blog';
import Link from 'next/link';
import Date from '../components/date';

export const metadata = {
  title: 'Eba personal blog about software engineering.',
}

export default function Home() {
  const blogs = getSortedBlogsData()
  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Eba</strong>, a software engineer based in Tokyo, Japan 🇯🇵🗼.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {blogs.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}