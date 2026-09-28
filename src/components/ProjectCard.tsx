'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

import type { Project } from '@/libs/portfolioProjects';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const previewStyle: CSSProperties = project.previewImage
    ? {
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.48), rgba(0,0,0,0.08)), url(${project.previewImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }
    : { background: project.cover };

  const cardHref = project.liveUrl || `/work/${project.slug}`;
  const isExternal = Boolean(project.liveUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className='overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow hover:shadow-xl'
    >
      <Link
        href={cardHref}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className='group block'
      >
        <div
          className='relative flex h-64 items-end overflow-hidden p-6 transition-transform duration-500 group-hover:scale-[1.03] sm:h-80'
          style={previewStyle}
        >
          <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            {isExternal ? 'View live site' : 'View case study'}
          </span>
        </div>

        <div className='flex items-start justify-between gap-4 p-6'>
          <div>
            <p className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
              {project.category} &middot; {project.year}
            </p>
            <h3 className='mt-2 text-xl font-medium tracking-tight text-neutral-900'>
              {project.title}
            </h3>
            <p className='mt-1 text-sm text-neutral-500'>{project.client}</p>
          </div>
          <ArrowUpRight className='mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-900' />
        </div>
      </Link>

      {(project.liveUrl || project.repositoryUrl) && (
        <div className='border-t border-black/10 px-6 py-4'>
          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 transition-colors hover:text-black'
              >
                Visit live site
                <ArrowUpRight className='h-4 w-4' />
              </a>
            )}
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 transition-colors hover:text-black'
              >
                View source
                <Code2 className='h-4 w-4' />
              </a>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
}
