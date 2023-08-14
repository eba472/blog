import Link from "next/link";
import { Card } from "../components/cards";
import { ideas } from "./ideas";

export default function Projects() {
  return (
    <section className="text-base/loose p-1">
      <h2 className="text-2xl/6 mb-8">New project ideas</h2>
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
        {ideas.map((idea) => (
          <Card>
            <Link href={`/projects/${idea.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {idea.date ? (
                      <time dateTime={new Date(idea.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(idea.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    {idea.slug}
                  </span>
                </div>

                <h2
                  id="idea-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {idea.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {idea.description}
                </p>
              </article>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
