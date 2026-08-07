import { NextResponse } from 'next/server';

import { sendEmail } from '@/libs/email';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const recipient = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_FROM;

  try {
    if (!recipient) {
      console.warn('CONTACT_TO_EMAIL is not configured; portfolio inquiry was not emailed:', {
        name,
        email,
      });
      return NextResponse.json({ ok: true });
    }

    await sendEmail({
      to: recipient,
      subject: `New portfolio inquiry from ${name}`,
      replyTo: String(email),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send portfolio contact email', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
