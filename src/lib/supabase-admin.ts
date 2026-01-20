import { createClient } from '@supabase/supabase-js';
import 'server-only';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Supabase URL or Service Role Key is missing. Check .env.local');
}

// Admin client for server-side usage (Bypasses RLS - careful!)
// Only available if the Service Role Key is present (Server-side)
export const supabaseAdmin = (supabaseUrl && supabaseServiceKey)
    ? createClient(supabaseUrl, supabaseServiceKey)
    : undefined;
