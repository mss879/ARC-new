import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Rate limiting
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // max 5 subscriptions per hour per IP

export async function POST(req: NextRequest) {
    try {
        // Rate limit
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            || req.headers.get('x-real-ip')
            || 'unknown';

        const now = Date.now();
        const record = rateLimitMap.get(ip);
        if (record) {
            if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
                rateLimitMap.set(ip, { count: 1, firstRequest: now });
            } else if (record.count >= MAX_REQUESTS) {
                return NextResponse.json(
                    { error: 'Too many requests. Please try again later.' },
                    { status: 429 }
                );
            } else {
                record.count++;
            }
        } else {
            rateLimitMap.set(ip, { count: 1, firstRequest: now });
        }

        const body = await req.json().catch(() => null);

        if (!body || !body.email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        const { email } = body;

        // Honeypot: a field hidden from people and filled by scripts. Answered
        // with a cheerful 200 rather than an error — a bot that is told it
        // failed simply tries again, and this list had collected 66 addresses,
        // most of them from one script working through obfuscated Gmail
        // variants. Nothing is written.
        if (typeof body.company_website === 'string' && body.company_website.trim()) {
            return NextResponse.json({ success: true });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email.length > 254) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        // Use service role client to bypass RLS
        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            process.env.SUPABASE_SERVICE_ROLE_KEY || '',
        );

        const { error } = await supabaseAdmin.rpc('subscribe_email_list', {
            p_email: email,
            p_topic_interest: 'general',
            p_source: 'footer',
            p_source_page: '/',
        });

        if (error) {
            console.error('Newsletter subscription error:', error);
            return NextResponse.json(
                { error: 'Failed to subscribe. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Newsletter API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
