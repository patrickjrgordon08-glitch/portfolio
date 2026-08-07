import { portfolioProfile } from '@/libs/portfolioProfile';

// Server-only Calendly client. CALENDLY_API_TOKEN is never exposed to the
// browser - only import this file from server components or route handlers.

const CALENDLY_API_BASE = 'https://api.calendly.com';

export type CalendlyEventType = {
  uri: string;
  name: string;
  slug: string;
  active: boolean;
  duration: number;
  scheduling_url: string;
};

function getConfig() {
  const token = process.env.CALENDLY_API_TOKEN;
  const userUri = process.env.CALENDLY_USER_URI;
  if (!token || !userUri) return null;
  return { token, userUri };
}

async function calendlyFetch(
  path: string,
  init?: RequestInit & { revalidate?: number | false }
) {
  const config = getConfig();
  if (!config) throw new Error('Calendly is not configured');

  const { revalidate, ...requestInit } = init ?? {};

  const res = await fetch(`${CALENDLY_API_BASE}${path}`, {
    ...requestInit,
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
      ...requestInit.headers,
    },
    // Mutating requests (POST/PATCH/DELETE) must never be cached; reads default
    // to a 1-hour revalidation window since event types change rarely.
    ...(revalidate === false ? { cache: 'no-store' as const } : { next: { revalidate: revalidate ?? 3600 } }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Calendly API error ${res.status}: ${body}`);
  }

  return res.json();
}

/** Returns the account's active event types, or an empty list if unconfigured/unreachable. */
export async function listEventTypes(): Promise<CalendlyEventType[]> {
  const config = getConfig();
  if (!config) return [];

  try {
    const data = await calendlyFetch(
      `/event_types?user=${encodeURIComponent(config.userUri)}&active=true`
    );
    return data.collection ?? [];
  } catch (error) {
    console.error('Failed to fetch Calendly event types', error);
    return [];
  }
}

/** The primary event type used for the site's "book a call" flows. */
export async function getDefaultEventType(): Promise<CalendlyEventType | null> {
  const eventTypes = await listEventTypes();
  return eventTypes[0] ?? null;
}

/**
 * Creates a single-use Calendly scheduling link for the given event type.
 * Throws if Calendly isn't configured or the request fails - callers should
 * catch and fall back to a static scheduling URL.
 */
export async function createSingleUseSchedulingLink(eventTypeUri: string): Promise<string> {
  const data = await calendlyFetch('/scheduling_links', {
    method: 'POST',
    body: JSON.stringify({
      max_event_count: 1,
      owner: eventTypeUri,
      owner_type: 'EventType',
    }),
    revalidate: false,
  });

  return data.resource.booking_url;
}

/**
 * Best-effort resolution of a bookable Calendly URL: tries the live API first,
 * then falls back to the static profile URL so the site keeps working even if
 * Calendly is unreachable or not configured for this environment.
 */
export async function getCalendlyBookingUrl(): Promise<string> {
  try {
    const eventType = await getDefaultEventType();
    if (eventType?.scheduling_url) return eventType.scheduling_url;
  } catch (error) {
    console.error('Failed to resolve Calendly booking URL', error);
  }
  return portfolioProfile.calendarUrl;
}
