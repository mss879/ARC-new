import { NextRequest, NextResponse } from 'next/server';

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

        // Validate required fields
        if (!body || !body.name || !body.phone || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, phone, and message are required' },
                { status: 400 }
            );
        }

        const { name, phone, company, companyWebsite, message } = body;
        // "subject" replaces the legacy "service" field; accept either for backward-compat
        const subject: string = body.subject ?? body.service ?? '';

        // ── Phone number validation ─────────────────────────────────────────
        // Only allow digits, +, -, spaces, parentheses
        const phoneAllowedPattern = /^[0-9+\-\s()]+$/;
        const phoneDigits = phone.replace(/\D/g, '');
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

        // ── Dispatch submission to webhooks ─────────────────────────────────
        // 1. ARC AI CRM hook — always sent (public endpoint, no secret required)
        // 2. Make.com automation — only if MAKE_WEBHOOK_URL is configured
        const arcWebhookUrl = process.env.ARC_WEBHOOK_URL
            || 'https://www.arcai.online/api/public/hooks/4a98dacf2cb64d9cabb8504e662830f3efb957f6da7e42f8b949c311d675fc09';
        const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;

        const jsonHeaders = { 'Content-Type': 'application/json' };

        const websiteUrl = body.website ?? body.companyWebsite ?? '';

        // Build the dispatch list. Index 0 is always the ARC webhook.
        const dispatches: { target: string; request: Promise<Response> }[] = [
            {
                target: 'ARC webhook',
                request: fetch(arcWebhookUrl, {
                    method: 'POST',
                    headers: jsonHeaders,
                    body: JSON.stringify({
                        name,
                        website: websiteUrl,
                        phone,
                        company: company || '',
                        message,
                        subject: subject || '',
                    }),
                }),
            },
        ];

        if (makeWebhookUrl) {
            dispatches.push({
                target: 'Make webhook',
                request: fetch(makeWebhookUrl, {
                    method: 'POST',
                    headers: jsonHeaders,
                    body: JSON.stringify({
                        name,
                        phone,
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

        const results = await Promise.allSettled(dispatches.map((d) => d.request));

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
