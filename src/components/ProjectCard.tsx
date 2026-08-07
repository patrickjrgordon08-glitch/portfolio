"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/libs/portfolioProjects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow hover:shadow-xl"
      >
        <div
          className="relative flex h-64 items-end overflow-hidden p-6 transition-transform duration-500 group-hover:scale-[1.03] sm:h-80"
          style={{ background: project.cover }}
        >
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View case study
          </span>
        </div>
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {project.category} &middot; {project.year}
            </p>
            <h3 className="mt-2 text-xl font-medium tracking-tight text-neutral-900">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">{project.client}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-900" />
        </div>
      </Link>
    </motion.div>
  );
}
