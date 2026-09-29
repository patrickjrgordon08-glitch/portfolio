import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';

import '@/styles/globals.css';

import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { portfolioProfile } from '@/libs/portfolioProfile';

const themeScript = `
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
`;

const inter = Inter({
  variable: '--font-portfolio-inter',
  subsets: ['latin'],
});

const fraunces = Fraunces({
  variable: '--font-portfolio-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: portfolioProfile.metadataTitle,
  description: portfolioProfile.metadataDescription,
  openGraph: {
    title: portfolioProfile.metadataTitle,
    description: portfolioProfile.metadataDescription,
    type: 'website',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className='portfolio-root flex min-h-full flex-col'>
        <Nav />
        <main className='flex-1'>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
