import { NextRequest, NextResponse } from 'next/server';

import { supabaseAdmin } from '@/lib/supabase-admin';
import { turnstileEnabled, verifyTurnstile } from '@/lib/turnstile';

/** A person cannot fill in the form faster than this. */
const MIN_FILL_MS = 3000;

// ── In-memory Rate Limiter ──────────────────────────────────────────────────
// Tracks submissions per IP. Resets after the time window.
// Simple but effective for single-instance deployments (Netlify Functions).
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 10; // max 10 form submissions per hour per IP

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return false;
    }

    // Reset if window has expired
    if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return false;
    }

    // Check if over limit
    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return true;
    }

    // Increment count
    record.count++;
    return false;
}

// Periodic cleanup to prevent memory leaks (every 10 minutes)
setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
        if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
            rateLimitMap.delete(ip);
        }
    }
}, 10 * 60 * 1000);

// ── API Handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            || req.headers.get('x-real-ip')
            || 'unknown';

        // Check rate limit
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many submissions. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await req.json().catch(() => null);

        // ── Bot check 1: the hidden trap field ──────────────────────────────
        // People never see it; bots that fill in every field fill it too. The
        // sender gets the normal "thank you" and nothing is sent anywhere, so
        // a bot learns nothing from the reply.
        if (typeof body?.extra_info === 'string' && body.extra_info.trim() !== '') {
            console.warn('Contact form: dropped a submission that filled the hidden trap field');
            return NextResponse.json({ success: true });
        }

        // Validate required fields. A visitor leaves one way to reach them:
        // a phone number or an email, whichever they prefer.
        const phone: string = typeof body?.phone === 'string' ? body.phone.trim() : '';
        const email: string = typeof body?.email === 'string' ? body.email.trim() : '';
        if (!body || !body.name || !body.message || (!phone && !email)) {
            return NextResponse.json(
                { error: 'Missing required fields: name, message, and a phone number or email are required' },
                { status: 400 }
            );
        }

        const { name, company, companyWebsite, message } = body;
        // "subject" replaces the legacy "service" field; accept either for backward-compat
        const subject: string = body.subject ?? body.service ?? '';

        // ── Phone number validation ─────────────────────────────────────────
        // Only allow digits, +, -, spaces, parentheses
        const phoneAllowedPattern = /^[0-9+\-\s()]+$/;
        const phoneDigits = phone.replace(/\D/g, '');
        if (phone) {
            if (!phoneAllowedPattern.test(phone)) {
                return NextResponse.json(
                    { error: 'Phone number contains invalid characters. Only digits, +, -, spaces, and parentheses are allowed.' },
                    { status: 400 }
                );
            }
            if (phoneDigits.length < 7) {
                return NextResponse.json(
                    { error: 'Phone number must contain at least 7 digits.' },
                    { status: 400 }
                );
            }
            if (phone.length > 20) {
                return NextResponse.json(
                    { error: 'Phone number is too long.' },
                    { status: 400 }
                );
            }
        }

        // ── Email validation ────────────────────────────────────────────────
        if (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))) {
            return NextResponse.json(
                { error: 'Email address is not valid.' },
                { status: 400 }
            );
        }

        // ── Name validation ─────────────────────────────────────────────────
        if (name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters.' },
                { status: 400 }
            );
        }

        // ── Message validation ──────────────────────────────────────────────
        if (message.trim().length < 10) {
            return NextResponse.json(
                { error: 'Message must be at least 10 characters.' },
                { status: 400 }
            );
        }

        // Basic input sanitization — reject suspiciously long inputs
        if (
            name.length > 200 ||
            phone.length > 50 ||
            (company && company.length > 200) ||
            (companyWebsite && companyWebsite.length > 300) ||
            (subject && subject.length > 200) ||
            message.length > 5000
        ) {
            return NextResponse.json(
                { error: 'Input exceeds maximum allowed length' },
                { status: 400 }
            );
        }

        // ── Bot check 2: faster than a person can type ──────────────────────
        // The form reports how long it had been open. Missing means an old
        // copy of the page, or a request that did not come from the form.
        const elapsedMs = Number(body.elapsed_ms);
        if (!Number.isFinite(elapsedMs)) {
            return NextResponse.json(
                { error: 'Please refresh the page and send your message again.' },
                { status: 400 }
            );
        }
        if (elapsedMs < MIN_FILL_MS) {
            console.warn(`Contact form: refused a submission sent ${Math.round(elapsedMs)} ms after the form opened`);
            return NextResponse.json(
                { error: 'That was very quick. Please wait a few seconds and press Submit again.' },
                { status: 400 }
            );
        }

        // ── Bot check 3: Cloudflare Turnstile, when its keys are set ────────
        if (turnstileEnabled()) {
            const check = await verifyTurnstile(body.turnstileToken, ip);
            if (!check.ok) {
                console.warn('Contact form: Turnstile check failed:', check.reason);
                return NextResponse.json(
                    { error: 'We could not confirm you are a person. Please refresh the page and try again, or message us on WhatsApp.' },
                    { status: 403 }
                );
            }
        }

        // ── Dispatch submission to webhooks ─────────────────────────────────
        // 1. ARC AI CRM hook (ARC_WEBHOOK_URL). Its address is a secret: it is
        //    kept only in the hosting settings, never in this code, because
        //    this repository is public and anyone holding the address can
        //    create CRM leads directly.
        // 2. Make.com automation (MAKE_WEBHOOK_URL), if configured.
        const arcWebhookUrl = process.env.ARC_WEBHOOK_URL;
        const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
        if (!arcWebhookUrl) {
            console.error('ARC_WEBHOOK_URL is not set: this enquiry was not sent to the CRM');
        }

        const jsonHeaders = { 'Content-Type': 'application/json' };

        const websiteUrl = body.website ?? body.companyWebsite ?? '';

        // Only the shapes the tracker produces are forwarded, bounded in length,
        // so this cannot become a way to write arbitrary text into the CRM.
        const id = (v: unknown, pattern: RegExp): string | null =>
            typeof v === 'string' && pattern.test(v) ? v : null;
        const analyticsIds = {
            ...(id(body.lead_id, /^lead_[A-Za-z0-9-]{8,80}$/) ? { lead_id: body.lead_id } : {}),
            ...(id(body.analytics_session_id, /^s_[A-Za-z0-9-]{8,100}$/)
                ? { analytics_session_id: body.analytics_session_id }
                : {}),
            ...(id(body.analytics_visitor_id, /^v_[A-Za-z0-9-]{8,100}$/)
                ? { analytics_visitor_id: body.analytics_visitor_id }
                : {}),
            ...(body.test === true ? { test: true } : {}),
        };

        const dispatches: { target: string; request: Promise<Response> }[] = [];
        if (arcWebhookUrl) {
            dispatches.push({
                target: 'ARC webhook',
                request: fetch(arcWebhookUrl, {
                    method: 'POST',
                    headers: jsonHeaders,
                    body: JSON.stringify({
                        name,
                        website: websiteUrl,
                        phone,
                        ...(email ? { email } : {}),
                        company: company || '',
                        message,
                        subject: subject || '',
                        // Where they actually came from. The form stashes this
                        // on the landing page, because by the time somebody
                        // reaches the contact page the campaign parameters are
                        // two or three clicks behind them. Without it every
                        // enquiry is recorded as "website".
                        ...(body.utm ? { utm: body.utm } : {}),
                        ...(body.referrer ? { referrer: body.referrer } : {}),
                        ...(body.landing_url ? { landing_url: body.landing_url } : {}),
                        ...(body.ref ? { ref: body.ref } : {}),
                        // The analytics side of the enquiry. The form mints
                        // lead_id before it sends and records the same id on
                        // its conversion event, so the CRM's lead ledger can
                        // match this exact lead to this exact conversion.
                        ...analyticsIds,
                    }),
                }),
            });
        }

        if (makeWebhookUrl) {
            dispatches.push({
                target: 'Make webhook',
                request: fetch(makeWebhookUrl, {
                    method: 'POST',
                    headers: jsonHeaders,
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        company,
                        companyWebsite,
                        subject,
                        // preserve the legacy key so existing Make scenarios keep mapping
                        service: subject,
                        message,
                    }),
                }),
            });
        }

        // The website's own record of the enquiry (admin → Contacts). It used
        // to be written from the visitor's browser with the public key, which
        // let bots write there directly; now only a submission that passed the
        // checks above is saved. A failure here never blocks the reply.
        const websiteRecord = (async () => {
            if (!supabaseAdmin) return;
            try {
                const { error } = await supabaseAdmin.rpc('submit_contact_form', {
                    p_full_name: name,
                    ...(phone ? { p_phone: phone } : {}),
                    p_email: email || null,
                    p_company: company || null,
                    p_subject: subject || null,
                    p_message: message,
                    p_source: 'website contact form',
                });
                if (error) console.error('Website contact record failed:', error.message);
            } catch (error) {
                console.error('Website contact record failed:', error);
            }
        })();

        const results = await Promise.allSettled(dispatches.map((d) => d.request));
        await websiteRecord;

        // Log any failures for observability
        results.forEach((result, i) => {
            const target = dispatches[i].target;
            if (result.status === 'rejected') {
                console.error(`${target} request failed:`, result.reason);
            } else if (!result.value.ok) {
                console.error(`${target} responded with`, result.value.status, result.value.statusText);
            }
        });

        // Treat the submission as delivered if at least one destination accepted it
        const anyDelivered = results.some((r) => r.status === 'fulfilled' && r.value.ok);

        if (!anyDelivered) {
            return NextResponse.json(
                { error: 'Failed to process your request. Please try again later.' },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
