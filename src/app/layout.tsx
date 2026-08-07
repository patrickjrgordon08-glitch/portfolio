import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';

import '@/styles/globals.css';

import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { portfolioProfile } from '@/libs/portfolioProfile';

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
    <html lang='en' className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className='portfolio-root flex min-h-full flex-col'>
        <Nav />
        <main className='flex-1'>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
