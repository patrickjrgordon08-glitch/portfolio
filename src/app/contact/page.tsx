import { ArrowUpRight, Calendar, Clock, Mail, MapPin } from 'lucide-react';

import CalendlyInlineWidget from '@/components/CalendlyInlineWidget';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { getCalendlyBookingUrl } from '@/libs/calendly';
import { portfolioProfile } from '@/libs/portfolioProfile';

export default async function ContactPage() {
  // Resolved live from the Calendly API when configured, falling back to the
  // static profile URL otherwise - see src/libs/calendly.ts.
  const bookingUrl = await getCalendlyBookingUrl();

  return (
    <div className='px-6 py-20'>
      <div className='mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.3fr]'>
        <div>
          <Reveal>
            <p className='text-xs font-semibold tracking-widest text-neutral-400 uppercase'>
              Contact
            </p>
            <h1 className='mt-3 text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl'>
              Let&apos;s build something worth remembering.
            </h1>
            <p className='mt-6 max-w-md text-lg leading-relaxed text-neutral-600'>
              Tell me about your project below, or reach out directly. I read every
              message myself and reply quickly.
            </p>
          </Reveal>

          <Reveal delay={0.15} className='mt-10 space-y-5'>
            <div className='flex items-center gap-3 text-sm text-neutral-700'>
              <Mail className='h-4 w-4 text-[var(--accent)]' />
              <a href={`mailto:${portfolioProfile.email}`} className='hover:text-black'>
                {portfolioProfile.email}
              </a>
            </div>
            <div className='flex items-center gap-3 text-sm text-neutral-700'>
              <Clock className='h-4 w-4 text-[var(--accent)]' />
              <span>{portfolioProfile.responseTime}</span>
            </div>
            <div className='flex items-center gap-3 text-sm text-neutral-700'>
              <MapPin className='h-4 w-4 text-[var(--accent)]' />
              <span>{portfolioProfile.location}</span>
            </div>
          </Reveal>

          <Reveal
            delay={0.2}
            className='mt-10 flex flex-col items-start gap-3 rounded-2xl border border-black/10 bg-white p-6'
          >
            <div className='flex items-center gap-3 text-sm font-medium text-neutral-900'>
              <Calendar className='h-4 w-4 text-[var(--accent)]' />
              Prefer to talk it through?
            </div>
            <p className='text-sm leading-relaxed text-neutral-600'>
              Grab a slot on my calendar and we&apos;ll walk through your project live.
            </p>
            <a
              href={bookingUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-outline group px-5 py-2.5'
            >
              {portfolioProfile.calendarCta}
              <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm defaultBookingUrl={bookingUrl} />
        </Reveal>
      </div>

      <Reveal delay={0.15} className='mx-auto mt-16 max-w-6xl'>
        <div className='rounded-2xl border border-black/10 bg-white p-6'>
          <p className='mb-4 text-sm font-medium text-neutral-900'>
            Or grab a time right here
          </p>
          <CalendlyInlineWidget url={bookingUrl} />
        </div>
      </Reveal>
    </div>
  );
}
