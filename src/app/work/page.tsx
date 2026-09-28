'use client';

import { useMemo, useState } from 'react';

import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import { projects } from '@/libs/portfolioProjects';

export default function WorkPage() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className='px-6 py-20'>
      <div className='mx-auto max-w-6xl'>
        <Reveal>
          <p className='text-xs font-semibold uppercase tracking-widest text-neutral-400'>
            Selected work
          </p>
          <h1 className='mt-3 max-w-2xl text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl'>
            Every project here shipped a measurable result, not just a mockup.
          </h1>
        </Reveal>

        <Reveal delay={0.1} className='mt-10 flex flex-wrap gap-2'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                active === cat
                  ? 'border-transparent bg-black text-white'
                  : 'border-black/15 text-neutral-600 hover:border-black hover:bg-black hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className='mt-12 grid gap-8 sm:grid-cols-2'>
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
