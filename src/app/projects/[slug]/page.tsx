import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Prakash Kumar`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
      <Link
        className="text-sm text-slate-400 transition hover:text-emerald-200"
        href="/#projects"
      >
        ← All projects
      </Link>

      <article className="mt-16">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-300">
          PROJECT
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          {project.summary}
        </p>

        <section className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            Highlights
          </h2>
          <ul className="mt-5 space-y-4 text-slate-300">
            {project.highlights.map((highlight) => (
              <li className="flex gap-3 leading-7" key={highlight}>
                <span aria-hidden="true" className="text-emerald-300">
                  /
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 border-t border-white/10 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            Built with
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-10 flex gap-6 border-t border-white/10 pt-8 text-sm font-medium">
          <a
            className="text-white underline decoration-white/30 underline-offset-4 transition hover:text-emerald-200"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            View source on GitHub ↗
          </a>
          {project.live && (
            <a
              className="text-white underline decoration-white/30 underline-offset-4 transition hover:text-emerald-200"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Open live demo ↗
            </a>
          )}
        </div>
      </article>
    </main>
  );
}
