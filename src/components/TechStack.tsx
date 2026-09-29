import Reveal from '@/components/Reveal';
import { portfolioProfile } from '@/libs/portfolioProfile';

export default function TechStack() {
  return (
    <section className='section-white px-6 pt-14 pb-8 sm:pt-16 sm:pb-10'>
      <div className='mx-auto max-w-6xl'>
        <Reveal>
          <p className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
            Core stack
          </p>
          <h2 className='mt-3 max-w-xl text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
            Modern tooling, selected for maintainability.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className='mt-10 flex flex-wrap gap-3'>
          {portfolioProfile.techStack.map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-blue-950/10 bg-blue-50/80 px-4 py-2 text-sm font-medium text-neutral-700 dark:border-white/15 dark:bg-white/5'
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
