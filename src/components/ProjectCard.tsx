import Link from "next/link";
import type { Project } from "@/types/project";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: string;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.05] sm:p-7">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-emerald-300">
          PROJECT {index}
        </span>
        <span aria-hidden="true" className="text-xl text-white/30 transition group-hover:text-emerald-300">
          ↗
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-white">
        <Link
          className="rounded-sm outline-none transition hover:text-emerald-200 focus-visible:ring-2 focus-visible:ring-emerald-300"
          href={`/projects/${project.slug}`}
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 leading-7 text-slate-400">{project.summary}</p>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
        {project.highlights.map((highlight) => (
          <li className="flex gap-3" key={highlight}>
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-5 pt-7 text-sm font-medium">
        <a
          className="text-white underline decoration-white/30 underline-offset-4 transition hover:text-emerald-200 hover:decoration-emerald-200"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        {project.live && (
          <a
            className="text-white underline decoration-white/30 underline-offset-4 transition hover:text-emerald-200 hover:decoration-emerald-200"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live demo <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
