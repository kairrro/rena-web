import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const actions = {
  contact: async ({ request }) => {
    const data = await request.formData();
    const name = (data.get('name') ?? '').toString().trim();
    const email = (data.get('email') ?? '').toString().trim();
    const message = (data.get('message') ?? '').toString().trim();

    if (!name || !email || !message) {
      return fail(400, {
        error: 'Please fill in every field.',
        name, email, message,
      });
    }

    const webhookUrl = env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL is not set');
      return fail(500, {
        error: 'Something went wrong on our end — try emailing us directly.',
        name, email, message,
      });
    }

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: '@here New project inquiry',
          allowed_mentions: { parse: ['everyone'] },
          embeds: [
            {
              title: 'New project inquiry',
              color: 8146431,
              fields: [
                { name: 'Name', value: name },
                { name: 'Email', value: email },
                { name: 'Message', value: message },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error('Discord webhook failed:', err);
      return fail(500, {
        error: 'Something went wrong — try emailing us directly.',
        name, email, message,
      });
    }

    return { success: true };
  },
};