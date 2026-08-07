import { NextResponse } from 'next/server';

import { createSingleUseSchedulingLink, getDefaultEventType } from '@/libs/calendly';

// Best-effort endpoint: mints a fresh single-use Calendly link for the
// visitor to book a call after they submit the contact form. Always returns
// 200 with `bookingUrl: null` on failure so the client can silently fall back
// to the static calendar link instead of surfacing an error.
export async function POST() {
  try {
    const eventType = await getDefaultEventType();
    if (!eventType) {
      return NextResponse.json({ bookingUrl: null });
    }

    const bookingUrl = await createSingleUseSchedulingLink(eventType.uri);
    return NextResponse.json({ bookingUrl });
  } catch (error) {
    console.error('Failed to create Calendly scheduling link', error);
    return NextResponse.json({ bookingUrl: null });
  }
}
