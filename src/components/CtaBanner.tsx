import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { portfolioProfile } from '@/libs/portfolioProfile';

export default function CtaBanner() {
  return (
    <section className='bg-black px-6 py-24 text-white'>
      <div className='mx-auto flex max-w-6xl flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between'>
        <Reveal>
          <p className='text-xs font-semibold tracking-widest text-white/40 uppercase'>
            {portfolioProfile.bookingLabel}
          </p>
          <h2 className='mt-3 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl'>
            Have a project on your mind? Let&apos;s make it real.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href='/contact'
            className='group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5'
          >
            Start a project
            <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
