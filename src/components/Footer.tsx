import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { portfolioProfile } from '@/libs/portfolioProfile';

export default function Footer() {
  return (
    <footer className='section-blue border-t border-blue-950/10'>
      <div className='mx-auto max-w-6xl px-6 py-12 sm:py-14'>
        <div className='grid gap-10 md:grid-cols-[2fr_1fr_1fr]'>
          <div>
            <Image
              src='/logo.png'
              alt={`${portfolioProfile.fullName} logo`}
              width={40}
              height={40}
              className='mb-6 rounded-full'
            />
            <p className='max-w-sm text-2xl font-medium tracking-tight text-neutral-900'>
              Have a project that needs a clear point of view?
            </p>
            <Link
              href='/contact'
              className='group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900'
            >
              Let&apos;s talk about it
              <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>
          </div>

          <div className='flex flex-col gap-3 text-sm text-neutral-600'>
            <span className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
              Site
            </span>
            <Link href='/work' className='hover:text-black'>
              Work
            </Link>
            <Link href='/about' className='hover:text-black'>
              About
            </Link>
            <Link href='/contact' className='hover:text-black'>
              Contact
            </Link>
          </div>

          <div className='flex flex-col gap-3 text-sm text-neutral-600'>
            <span className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
              Elsewhere
            </span>
            <a href={`mailto:${portfolioProfile.email}`} className='hover:text-black'>
              {portfolioProfile.email}
            </a>
            <a
              href={portfolioProfile.calendarUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-black'
            >
              Book a call
            </a>
            {portfolioProfile.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-black'
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className='mt-12 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between'>
          <span>
            &copy; {new Date().getFullYear()} {portfolioProfile.fullName}. All rights reserved.
          </span>
          <span>{portfolioProfile.footerTagline}</span>
        </div>
      </div>
    </footer>
  );
}
