import { Resend } from 'resend';

// Initialize only if key exists to prevent local dev server crashes
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const STUDIO_EMAIL = 'contact@veriable.xyz';
const FROM_NAME = 'veri—able Studio';
// Resend requires your FROM address to be on a verified domain.
// Use your verified domain here. If you haven't verified yet, use onboarding@resend.dev for testing.
const FROM_ADDRESS = `${FROM_NAME} <${STUDIO_EMAIL}>`;

/* ─────────────────────────────────────────────────────────────────────────────
   1. CONTACT FORM — notify studio + confirm to guest
───────────────────────────────────────────────────────────────────────────── */
export async function sendContactNotification(data: {
    name: string;
    email: string;
    company?: string | null;
    message: string;
}) {
    if (!resend) {
        console.log("No RESEND_API_KEY found, skipping sendContactNotification");
        return;
    }

    const { name, email, company, message } = data;

    // 1a. Notify the studio
    await resend.emails.send({
        from: FROM_ADDRESS,
        to: STUDIO_EMAIL,
        subject: `📬 New Brief from ${name}${company ? ` @ ${company}` : ''}`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0b;color:#e3dbd8;padding:40px;border-radius:16px;">
                <div style="border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:24px;margin-bottom:32px;">
                    <h1 style="margin:0;font-size:28px;font-weight:900;letter-spacing:-1px;color:#fff;">New Project Brief</h1>
                    <p style="margin:8px 0 0;color:rgba(255,255,255,0.4);font-size:13px;">Received via veri—able Studio contact form</p>
                </div>
                <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;width:110px;">Name</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-weight:600;color:#fff;">${name}</td></tr>
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Email</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);"><a href="mailto:${email}" style="color:#eb5160;text-decoration:none;">${email}</a></td></tr>
                    ${company ? `<tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Company</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:#fff;">${company}</td></tr>` : ''}
                    <tr><td style="padding:16px 0;vertical-align:top;color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Message</td><td style="padding:16px 0;color:rgba(255,255,255,0.8);line-height:1.7;">${message.replace(/\n/g, '<br/>')}</td></tr>
                </table>
                <div style="margin-top:40px;padding:24px;background:rgba(235,81,96,0.08);border:1px solid rgba(235,81,96,0.2);border-radius:12px;">
                    <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">Reply directly to this email to respond to <strong style="color:#eb5160;">${email}</strong></p>
                </div>
            </div>
        `,
        replyTo: email,
    });

    // 1b. Confirm receipt to the guest
    await resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: `We got your brief, ${name.split(' ')[0]} ✓`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0b;color:#e3dbd8;padding:40px;border-radius:16px;">
                <h1 style="font-size:32px;font-weight:900;letter-spacing:-1.5px;color:#fff;margin:0 0 8px;">Message Received.</h1>
                <p style="color:rgba(255,255,255,0.4);font-size:14px;margin:0 0 32px;">veri—able Studio</p>
                <p style="color:rgba(255,255,255,0.7);line-height:1.7;margin:0 0 24px;">Hey ${name.split(' ')[0]},</p>
                <p style="color:rgba(255,255,255,0.7);line-height:1.7;margin:0 0 24px;">Your brief has landed with our team. We typically respond within <strong style="color:#fff;">24 hours</strong> — often faster.</p>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:24px;margin:32px 0;">
                    <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,0.3);">Your message</p>
                    <p style="margin:0;color:rgba(255,255,255,0.6);line-height:1.7;font-style:italic;">"${message.substring(0, 280)}${message.length > 280 ? '…' : ''}"</p>
                </div>
                <p style="color:rgba(255,255,255,0.5);font-size:13px;line-height:1.7;">While you wait, feel free to explore our <a href="https://veriable.xyz/#work" style="color:#eb5160;text-decoration:none;">case studies</a> or check out our <a href="https://veriable.xyz/#pricing" style="color:#eb5160;text-decoration:none;">pricing</a>.</p>
                <div style="margin-top:40px;border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
                    <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.2);">veri—able Studio · Ikeja, Lagos · Nigeria</p>
                </div>
            </div>
        `,
    });
}

/* ─────────────────────────────────────────────────────────────────────────────
   2. PAYMENT RESERVATION — notify studio when someone reserves a slot
───────────────────────────────────────────────────────────────────────────── */
export async function sendPaymentReservationNotification(data: {
    name?: string;
    email: string;
    packageName: string;
    amount: number;
    currency: string;
    txRef: string;
    description?: string;
}) {
    if (!resend) {
        console.log("No RESEND_API_KEY found, skipping sendPaymentReservationNotification");
        return;
    }

    const { name, email, packageName, amount, currency, txRef, description } = data;

    // Notify studio
    await resend.emails.send({
        from: FROM_ADDRESS,
        to: STUDIO_EMAIL,
        subject: `💳 Slot Reserved — ${packageName} by ${name || email}`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0b;color:#e3dbd8;padding:40px;border-radius:16px;">
                <div style="background:rgba(235,81,96,0.1);border:1px solid rgba(235,81,96,0.3);border-radius:12px;padding:20px;margin-bottom:32px;text-align:center;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#eb5160;font-weight:900;">New Reservation</p>
                </div>
                <h1 style="margin:0 0 32px;font-size:28px;font-weight:900;letter-spacing:-1px;color:#fff;">Slot Reserved</h1>
                <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;width:130px;">Client</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-weight:600;color:#fff;">${name || 'N/A'}</td></tr>
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Email</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);"><a href="mailto:${email}" style="color:#eb5160;text-decoration:none;">${email}</a></td></tr>
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Package</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:#eb5160;font-weight:700;">${packageName}</td></tr>
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Amount</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-weight:600;color:#fff;">${currency} ${amount.toLocaleString()}</td></tr>
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Tx Ref</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-family:monospace;color:rgba(255,255,255,0.5);font-size:12px;">${txRef}</td></tr>
                    ${description ? `<tr><td style="padding:16px 0;vertical-align:top;color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Brief</td><td style="padding:16px 0;color:rgba(255,255,255,0.7);line-height:1.7;">${description}</td></tr>` : ''}
                </table>
                <p style="margin-top:32px;color:rgba(255,255,255,0.4);font-size:12px;">Payment is pending confirmation from Flutterwave.</p>
            </div>
        `,
        replyTo: email,
    });

    // Confirm to client
    await resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: `Your slot is being secured, ${name ? name.split(' ')[0] : 'there'} 🔒`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0b;color:#e3dbd8;padding:40px;border-radius:16px;">
                <h1 style="font-size:32px;font-weight:900;letter-spacing:-1.5px;color:#fff;margin:0 0 8px;">You're almost in.</h1>
                <p style="color:rgba(255,255,255,0.4);font-size:14px;margin:0 0 32px;">veri—able Studio</p>
                <p style="color:rgba(255,255,255,0.7);line-height:1.7;">Your deposit for the <strong style="color:#eb5160;">${packageName}</strong> package is being processed. Once confirmed by Flutterwave, your slot will be secured and our team will reach out within 24 hours to kick off the discovery call.</p>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:24px;margin:32px 0;">
                    <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,0.3);">Transaction Reference</p>
                    <p style="margin:0;font-family:monospace;color:rgba(255,255,255,0.5);font-size:14px;">${txRef}</p>
                </div>
                <p style="color:rgba(255,255,255,0.5);font-size:13px;">Keep this email for your records. If you have any questions, reply to this email or reach us at <a href="mailto:${STUDIO_EMAIL}" style="color:#eb5160;">${STUDIO_EMAIL}</a>.</p>
                <div style="margin-top:40px;border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
                    <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.2);">veri—able Studio · Ikeja, Lagos · Nigeria</p>
                </div>
            </div>
        `,
    });
}

/* ─────────────────────────────────────────────────────────────────────────────
   3. FREE PREVIEW PROMO — dedicated email for promo page requests
───────────────────────────────────────────────────────────────────────────── */
export async function sendPromoRequestNotification(data: {
    name: string;
    email: string;
    projectDesc: string;
}) {
    if (!resend) {
        console.log("No RESEND_API_KEY found, skipping sendPromoRequestNotification");
        return;
    }

    const { name, email, projectDesc } = data;

    // Notify studio with a distinct "Promo Request" subject
    await resend.emails.send({
        from: FROM_ADDRESS,
        to: STUDIO_EMAIL,
        subject: `🎁 Free Preview Request from ${name}`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0b;color:#e3dbd8;padding:40px;border-radius:16px;">
                <div style="background:rgba(235,81,96,0.1);border:1px solid rgba(235,81,96,0.3);border-radius:12px;padding:16px 20px;margin-bottom:32px;display:flex;align-items:center;gap:12px;">
                    <span style="font-size:24px;">🎁</span>
                    <div>
                        <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:3px;color:#eb5160;font-weight:900;">Free Preview Promo</p>
                        <p style="margin:4px 0 0;font-size:12px;color:rgba(255,255,255,0.4);">New request from the /promo page</p>
                    </div>
                </div>
                <h1 style="margin:0 0 32px;font-size:26px;font-weight:900;letter-spacing:-1px;color:#fff;">New Preview Request</h1>
                <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;width:110px;">Name</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-weight:600;color:#fff;">${name}</td></tr>
                    <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Email</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);"><a href="mailto:${email}" style="color:#eb5160;text-decoration:none;">${email}</a></td></tr>
                    <tr><td style="padding:16px 0;vertical-align:top;color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;">Project Brief</td><td style="padding:16px 0;color:rgba(255,255,255,0.8);line-height:1.7;">${projectDesc.replace(/\n/g, '<br/>')}</td></tr>
                </table>
                <div style="margin-top:32px;padding:20px;background:rgba(235,81,96,0.06);border:1px solid rgba(235,81,96,0.15);border-radius:12px;">
                    <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">Reply to <strong style="color:#eb5160;">${email}</strong> to follow up on this preview request.</p>
                </div>
            </div>
        `,
        replyTo: email,
    });

    // Confirm to the requester
    await resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: `Your free preview request is in, ${name.split(' ')[0]} 🎁`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0b;color:#e3dbd8;padding:40px;border-radius:16px;">
                <h1 style="font-size:32px;font-weight:900;letter-spacing:-1.5px;color:#fff;margin:0 0 8px;">Request Received.</h1>
                <p style="color:rgba(255,255,255,0.4);font-size:14px;margin:0 0 32px;">veri—able Studio · Free Preview Promo</p>
                <p style="color:rgba(255,255,255,0.7);line-height:1.7;margin:0 0 16px;">Hey ${name.split(' ')[0]},</p>
                <p style="color:rgba(255,255,255,0.7);line-height:1.7;margin:0 0 24px;">We've received your free preview request. Our team will review your brief and get back to you within <strong style="color:#fff;">24–48 hours</strong> to kick things off.</p>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:24px;margin:32px 0;">
                    <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,0.3);">Your brief</p>
                    <p style="margin:0;color:rgba(255,255,255,0.6);line-height:1.7;font-style:italic;">"${projectDesc.substring(0, 280)}${projectDesc.length > 280 ? '…' : ''}"</p>
                </div>
                <p style="color:rgba(255,255,255,0.5);font-size:13px;line-height:1.7;">Remember: the preview is completely free. You only pay if you love it and want to go live. No tricks, no strings.</p>
                <div style="margin-top:40px;border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
                    <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.2);">veri—able Studio · Ikeja, Lagos · Nigeria</p>
                </div>
            </div>
        `,
    });
}

/* ─────────────────────────────────────────────────────────────────────────────
   4. NEWSLETTER — notify studio of new subscriber
───────────────────────────────────────────────────────────────────────────── */
export async function sendNewsletterNotification(data: { name: string; email: string }) {
    if (!resend) {
        console.log("No RESEND_API_KEY found, skipping sendNewsletterNotification");
        return;
    }

    const { name, email } = data;

    await resend.emails.send({
        from: FROM_ADDRESS,
        to: STUDIO_EMAIL,
        subject: `📰 New Newsletter Subscriber — ${name}`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0b;color:#e3dbd8;padding:40px;border-radius:16px;">
                <h1 style="font-size:24px;font-weight:900;letter-spacing:-1px;color:#fff;margin:0 0 24px;">New Newsletter Subscriber</h1>
                <p style="color:rgba(255,255,255,0.7);"><strong style="color:#fff;">${name}</strong> &lt;<a href="mailto:${email}" style="color:#eb5160;">${email}</a>&gt; just signed up for the newsletter via the website footer.</p>
            </div>
        `,
    });

    // Welcome email to subscriber
    await resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: `You're on the list, ${name.split(' ')[0]} ✓`,
        html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0b;color:#e3dbd8;padding:40px;border-radius:16px;">
                <h1 style="font-size:32px;font-weight:900;letter-spacing:-1.5px;color:#fff;margin:0 0 8px;">Welcome to the list.</h1>
                <p style="color:rgba(255,255,255,0.4);font-size:14px;margin:0 0 32px;">veri—able Studio</p>
                <p style="color:rgba(255,255,255,0.7);line-height:1.7;">Hey ${name.split(' ')[0]},</p>
                <p style="color:rgba(255,255,255,0.7);line-height:1.7;">You're now subscribed to insights from veri—able Studio — launch playbooks, technical deep-dives, and the occasional project drop. No spam, ever.</p>
                <p style="color:rgba(255,255,255,0.5);font-size:13px;margin-top:24px;">In the meantime, explore what we build at <a href="https://veriable.xyz" style="color:#eb5160;text-decoration:none;">veriable.xyz</a>.</p>
                <div style="margin-top:40px;border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
                    <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.2);">veri—able Studio · Ikeja, Lagos · Nigeria · <a href="mailto:${STUDIO_EMAIL}" style="color:rgba(255,255,255,0.2);">Unsubscribe</a></p>
                </div>
            </div>
        `,
    });
}
