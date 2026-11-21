import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          aria-label="Prakash Kumar, home"
          className="font-mono text-sm font-semibold tracking-widest text-white"
          href="/"
        >
          PK<span className="text-emerald-300">.</span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm text-slate-400">
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"
        />
        <div className="relative max-w-3xl">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]" />
            Full-stack developer
          </p>
          <h1 className="mt-7 text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-7xl">
            Building useful things for the{" "}
            <span className="text-slate-500">web.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I&apos;m Prakash Kumar. I build full-stack products, real-time
            experiences, and reliable APIs with TypeScript, Node.js, React, and
            Next.js. My toolkit spans Express.js, PostgreSQL, MongoDB, Redis,
            Socket.IO, JWT, Razorpay, Docker, AWS, Turborepo, and pnpm.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              href="#projects"
            >
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-sm font-medium text-slate-300 underline decoration-white/25 underline-offset-4 transition hover:text-white"
              href="https://github.com/prakash-kumar592"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile ↗
            </a>
          </div>
        </div>
        <div className="relative mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-wider text-slate-500">
          <span>Product-minded engineering</span>
          <span aria-hidden="true" className="text-emerald-300">/</span>
          <span>Backend systems</span>
          <span aria-hidden="true" className="text-emerald-300">/</span>
          <span>Real-time applications</span>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl scroll-mt-12 px-6 py-20 sm:px-10 sm:py-24"
        id="projects"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projects
            </h2>
          </div>
          <p className="max-w-md leading-7 text-slate-400">
            A few things I&apos;ve been building, from competitive coding to
            dependable financial systems.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              index={String(index + 1).padStart(2, "0")}
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>

      <section
        className="mx-auto grid w-full max-w-6xl gap-12 border-t border-white/10 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-2"
        id="about"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
            A little about me
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Thoughtful software, built end to end.
          </h2>
        </div>
        <div className="space-y-5 leading-7 text-slate-400">
          <p>
            I enjoy taking ideas from the first API endpoint to the final
            interface. My work spans real-time collaboration, authentication,
            payments, and data-heavy backend services.
          </p>
          <p>
            I care about clear interfaces between systems, useful product
            details, and building software that behaves reliably under real
            conditions.
          </p>
        </div>
      </section>

      <footer
        className="mx-auto flex w-full max-w-6xl flex-col gap-5 border-t border-white/10 px-6 py-12 sm:px-10 md:flex-row md:items-end md:justify-between"
        id="contact"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
            Get in touch
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Have a good problem to solve?
          </h2>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            className="text-slate-300 underline decoration-white/25 underline-offset-4 transition hover:text-white"
            href="https://github.com/prakash-kumar592"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="text-slate-300 underline decoration-white/25 underline-offset-4 transition hover:text-white"
            href="https://github.com/prakash-kumar592?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Repositories ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
