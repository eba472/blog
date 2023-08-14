import Gallery from "./components/gallery";

export const metadata = {
  title: "Eba personal blog about software engineering.",
};

export default function Home() {
  return (
    <section className="text-base/loose p-1">
      <p className="mb-10 text-center">
        Hello, I&rsquo;m <strong>Eba</strong>,<br/> a software engineer based in
        Tokyo, Japan 🇯🇵🗼.
      </p>
      <Gallery />
    </section>
  );
}
