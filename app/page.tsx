import Gallery from "./components/gallery";
import utilStyles from "./styles/utils.module.css";

export const metadata = {
  title: "Eba personal blog about software engineering.",
};

export default function Home() {
  return (
    <section className={utilStyles.headingMd}>
      <p>
        Hello, I&rsquo;m <strong>Eba</strong>, a software engineer based in
        Tokyo, Japan 🇯🇵🗼.
      </p>
      <Gallery />
    </section>
  );
}
