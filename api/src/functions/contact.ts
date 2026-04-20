import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { Resend } from 'resend';

interface ContactBody {
  firstName: string;
  lastName?: string;
  email: string;
  company?: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request: HttpRequest, _context: InvocationContext): Promise<HttpResponseInit> => {
    const body = (await request.json()) as ContactBody;
    const { firstName, lastName, email, company, message } = body;

    if (!firstName?.trim() || !email?.trim() || !message?.trim()) {
      return {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'firstName, email, and message are required' }),
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const name = `${escapeHtml(firstName)}${lastName ? ` ${escapeHtml(lastName)}` : ''}`;

    await resend.emails.send({
      from: 'contact@xerikos.com',
      to: 'alec.harrison@xerikos.com',
      replyTo: email,
      subject: `New inquiry from ${firstName}${lastName ? ` ${lastName}` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    };
  },
});
