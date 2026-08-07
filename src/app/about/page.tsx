import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';

import CtaBanner from '@/components/CtaBanner';
import Reveal from '@/components/Reveal';
import { portfolioProfile } from '@/libs/portfolioProfile';

const values = [
  {
    title: 'Strategy before shipping',
    description:
      'Every engagement starts with the user and business problem first, then implementation choices follow with clear trade-offs.',
  },
  {
    title: 'Clear communication',
    description:
      'I keep decisions plain-language and transparent so your team always understands what was built and why.',
  },
  {
    title: 'Built to extend',
    description:
      'Clean architecture and thoughtful documentation make future iterations faster, safer, and less expensive.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className='px-6 pt-20 pb-20'>
        <div className='mx-auto max-w-4xl'>
          <div className='grid gap-10 sm:grid-cols-[240px_1fr] sm:items-center'>
            <Reveal>
              <div className='overflow-hidden rounded-2xl border border-black/10 bg-white'>
                <Image
                  src='/profile.jpg'
                  alt={portfolioProfile.fullName}
                  width={720}
                  height={900}
                  sizes='(min-width: 640px) 240px, calc(100vw - 48px)'
                  className='h-auto w-full object-cover'
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
                About
              </p>
              <h1 className='mt-3 text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl'>
                {portfolioProfile.aboutHeadline}
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.15} className='mt-16 grid gap-10 sm:grid-cols-3'>
            {values.map((v) => (
              <div key={v.title}>
                <h3 className='text-lg font-medium tracking-tight text-neutral-950'>
                  {v.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-neutral-600'>
                  {v.description}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.25} className='mt-10 flex flex-wrap items-center gap-4'>
            <Link
              href='/contact'
              className='btn-primary group'
            >
              Get in touch
              <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </Link>
            <a
              href='/resume.pdf'
              download
              className='btn-outline group'
            >
              Download resume
              <Download className='h-4 w-4 transition-transform group-hover:translate-y-0.5' />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
