import { Resend } from 'resend';

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const sendEmail = async (data: EmailPayload) => {
  if (!resend) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const from = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  return resend.emails.send({
    from,
    to: data.to,
    subject: data.subject,
    html: data.html,
    replyTo: data.replyTo,
  });
};
