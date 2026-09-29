'use client';

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  function toggleTheme() {
    const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
  }

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label='Toggle color theme'
      title='Toggle color theme'
      className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/70 text-neutral-700 transition-all hover:-translate-y-0.5 hover:border-black hover:text-black dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white'
    >
      <Moon className='h-4 w-4 dark:hidden' />
      <Sun className='hidden h-4 w-4 dark:block' />
    </button>
  );
}
