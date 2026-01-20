
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';


if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL or Anon Key is missing. Check .env.local');
}

// Client for client-side usage (Auth, public reads)
// We check keys to avoid instant crashes, but it won't work without them.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client moved to @/lib/supabase-admin.ts (Server-side only)
