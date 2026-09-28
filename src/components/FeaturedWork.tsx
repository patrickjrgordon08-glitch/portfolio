import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/libs/portfolioProjects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function FeaturedWork() {
  return (
    <section id="work" className="section-white px-6 pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Selected work
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Case studies, not just screenshots.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-800"
            >
              View all work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
