'use client';

import Script from 'next/script';

/** Embeds the official Calendly inline scheduler for the given event URL. */
export default function CalendlyInlineWidget({ url }: { url: string }) {
  return (
    <>
      <div
        className='calendly-inline-widget'
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script src='https://assets.calendly.com/assets/external/widget.js' strategy='lazyOnload' />
    </>
  );
}
