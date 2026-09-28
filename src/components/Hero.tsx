'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

import { portfolioProfile } from '@/libs/portfolioProfile';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className='section-blue relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24'>
      <div className='mx-auto max-w-6xl'>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-600'
        >
          {portfolioProfile.heroEyebrow}
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className='max-w-4xl text-[2.6rem] leading-[1.05] font-medium tracking-tight text-neutral-950 sm:text-6xl md:text-7xl'
        >
          {portfolioProfile.heroHeadingStart}
          <span className='text-[var(--accent)] italic'> {portfolioProfile.heroHeadingAccent}</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className='mt-6 max-w-xl text-lg text-neutral-600'
        >
          {portfolioProfile.heroIntro}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className='mt-9 flex flex-wrap items-center gap-4'
        >
          <Link
            href='/work'
            className='btn-primary group'
          >
            View selected work
            <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
          </Link>
          <Link
            href='/contact'
            className='btn-outline group'
          >
            Start a project
          </Link>
        </motion.div>
      </div>

      {!shouldReduceMotion && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className='mx-auto mt-16 flex w-full max-w-6xl justify-center text-neutral-400'
        >
          <ArrowDown className='h-5 w-5' />
        </motion.div>
      )}
    </section>
  );
}
