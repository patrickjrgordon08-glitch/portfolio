'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import { portfolioProfile } from '@/libs/portfolioProfile';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-blue-950/10 bg-blue-50/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-5'>
        <Link href='/' className='flex items-center gap-2.5 text-sm font-semibold tracking-tight'>
          <Image
            src='/logo.png'
            alt={`${portfolioProfile.fullName} logo`}
            width={32}
            height={32}
            className='rounded-full'
            priority
          />
          {portfolioProfile.fullName}
          <span className='text-[var(--accent)]'>.</span>
        </Link>

        <div className='hidden items-center gap-8 md:flex'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm text-neutral-700 transition-colors hover:text-black'
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='btn-primary group gap-1.5 px-4 py-2 font-medium'
          >
            Contact
            <ArrowUpRight className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
          </Link>
        </div>

        <button
          className='md:hidden'
          aria-label='Toggle menu'
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='overflow-hidden border-t border-blue-950/10 bg-blue-50/95 backdrop-blur-xl md:hidden'
          >
            <div className='flex flex-col gap-4 px-6 py-6'>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='text-base font-medium text-neutral-800'
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href='/contact'
                onClick={() => setOpen(false)}
                className='btn-primary group mt-2 w-fit gap-1.5 px-4 py-2 font-medium'
              >
                Contact
                <ArrowUpRight className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
