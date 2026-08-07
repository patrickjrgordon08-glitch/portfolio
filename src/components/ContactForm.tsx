'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm({ defaultBookingUrl }: { defaultBookingUrl: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookingUrl, setBookingUrl] = useState(defaultBookingUrl);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Something went wrong sending your message.');
      }

      setSubmitted(true);

      // Best-effort: mint a fresh single-use Calendly link so the visitor can
      // book immediately. Falls back to the static booking URL on failure.
      fetch('/api/calendly/scheduling-link', { method: 'POST' })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data?.bookingUrl) setBookingUrl(data.bookingUrl);
        })
        .catch(() => {
          // Ignore - bookingUrl stays at defaultBookingUrl.
        });
    } catch {
      setError("Couldn't send your message — please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className='flex flex-col items-start gap-3 rounded-2xl border border-black/10 bg-white p-8'>
        <CheckCircle2 className='h-8 w-8 text-[var(--accent)]' />
        <h3 className='text-xl font-medium text-neutral-950'>Thanks — message received.</h3>
        <p className='text-sm text-neutral-600'>
          I read every inquiry personally and reply within one business day. Talk soon.
        </p>
        <a
          href={bookingUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='btn-primary group mt-2'
        >
          Book a call now
          <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='grid gap-5 rounded-2xl border border-black/10 bg-white p-8'
    >
      <div className='grid gap-5 sm:grid-cols-2'>
        <label className='flex flex-col gap-2 text-sm font-medium text-neutral-700'>
          Name
          <input
            required
            name='name'
            type='text'
            placeholder='Your name'
            className='rounded-lg border border-black/15 px-4 py-3 text-base text-neutral-900 transition-colors outline-none focus:border-black'
          />
        </label>
        <label className='flex flex-col gap-2 text-sm font-medium text-neutral-700'>
          Email
          <input
            required
            name='email'
            type='email'
            placeholder='you@company.com'
            className='rounded-lg border border-black/15 px-4 py-3 text-base text-neutral-900 transition-colors outline-none focus:border-black'
          />
        </label>
      </div>

      <label className='flex flex-col gap-2 text-sm font-medium text-neutral-700'>
        Tell me about the project
        <textarea
          required
          name='message'
          rows={5}
          placeholder='What are you building, and what does success look like?'
          className='rounded-lg border border-black/15 px-4 py-3 text-base text-neutral-900 transition-colors outline-none focus:border-black'
        />
      </label>

      {error && <p className='text-sm font-medium text-red-600'>{error}</p>}

      <button
        type='submit'
        disabled={loading}
        className='btn-primary group mt-2 w-fit disabled:opacity-60'
      >
        {loading ? (
          <>
            Sending
            <Loader2 className='h-4 w-4 animate-spin' />
          </>
        ) : (
          <>
            Send inquiry
            <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
          </>
        )}
      </button>
    </form>
  );
}
