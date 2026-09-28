import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { getAdjacentProjects, getProject, projects } from '@/libs/portfolioProjects';
import { portfolioProfile } from '@/libs/portfolioProfile';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} - ${portfolioProfile.fullName}`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { next } = getAdjacentProjects(slug);

  return (
    <article>
      <header
        className='relative flex min-h-[60vh] flex-col justify-end px-6 pt-32 pb-16 text-white'
        style={{ background: project.cover }}
      >
        <div className='mx-auto w-full max-w-6xl'>
          <Link
            href='/work'
            className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white'
          >
            <ArrowLeft className='h-4 w-4' /> All work
          </Link>
          <Reveal>
            <p className='text-xs font-semibold tracking-widest text-white/60 uppercase'>
              {project.category} &middot; {project.client} &middot; {project.year}
            </p>
            <h1 className='mt-3 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl'>
              {project.title}
            </h1>
          </Reveal>
        </div>
      </header>

      <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[2fr_1fr]'>
        <div className='space-y-14'>
          <Reveal>
            <p className='text-xl leading-relaxed text-neutral-700'>{project.summary}</p>
          </Reveal>

          <Reveal>
            <h2 className='text-2xl font-medium tracking-tight text-neutral-950'>
              The challenge
            </h2>
            <p className='mt-4 leading-relaxed text-neutral-600'>{project.challenge}</p>
          </Reveal>

          <Reveal>
            <h2 className='text-2xl font-medium tracking-tight text-neutral-950'>
              The approach
            </h2>
            <ul className='mt-4 space-y-4'>
              {project.approach.map((step, i) => (
                <li key={i} className='flex gap-4 leading-relaxed text-neutral-600'>
                  <span className='mt-1 text-sm font-semibold text-[var(--accent)]'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className='text-2xl font-medium tracking-tight text-neutral-950'>
              The outcome
            </h2>
            <p className='mt-4 leading-relaxed text-neutral-600'>{project.outcome}</p>

            <div className='surface-card mt-8 grid grid-cols-3 gap-6 rounded-2xl border border-blue-950/10 p-6'>
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className='text-2xl font-medium tracking-tight text-neutral-950'>
                    {m.value}
                  </p>
                  <p className='mt-1 text-xs text-neutral-500'>{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {project.testimonial && (
            <Reveal className='rounded-2xl border border-blue-950/10 bg-blue-50/80 p-8'>
              <p className='text-lg leading-relaxed text-neutral-800'>
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <p className='mt-6 text-sm font-semibold text-neutral-900'>
                {project.testimonial.name}
              </p>
              <p className='text-sm text-neutral-500'>{project.testimonial.title}</p>
            </Reveal>
          )}
        </div>

        <aside className='surface-card h-fit space-y-8 rounded-2xl border border-blue-950/10 p-6 lg:sticky lg:top-24'>
          <div>
            <p className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
              Role
            </p>
            <p className='mt-2 text-sm text-neutral-700'>{project.role}</p>
          </div>
          <div>
            <p className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
              Timeline
            </p>
            <p className='mt-2 text-sm text-neutral-700'>{project.timeline}</p>
          </div>
          <div>
            <p className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
              Services
            </p>
            <div className='mt-2 flex flex-wrap gap-2'>
              {project.services.map((s) => (
                <span
                  key={s}
                  className='rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-neutral-700'
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-black hover:text-black'
            >
              View source on GitHub
              <Code2 className='h-4 w-4' />
            </a>
          )}
          <Link
            href='/contact'
            className='btn-primary group w-full px-5'
          >
            Start a similar project
            <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
          </Link>
        </aside>
      </div>

      {next && (
        <div className='section-white border-t border-blue-950/10 px-6 py-14'>
          <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
            <p className='text-sm text-neutral-500'>Next case study</p>
            <Link
              href={`/work/${next.slug}`}
              className='group flex items-center gap-2 text-2xl font-medium tracking-tight text-neutral-950'
            >
              {next.title}
              <ArrowUpRight className='h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}
