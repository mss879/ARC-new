-- 1. Create the chat_logs table
create table if not exists chat_logs (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  ip_address text,
  user_location text,
  messages jsonb not null,
  metadata jsonb
);

-- 2. Enable Row Level Security (RLS)
alter table chat_logs enable row level security;

-- 3. Create Policy: Allow anyone (anon) to INSERT logs (so the chatbot can save chats)
-- Note: In our API route implementation, we use the Service Role key, which bypasses RLS.
-- However, if we ever wanted client-side logging, this would be needed.
-- For now, purely backend logging via Service Key requires NO policy if bypassing RLS, 
-- but it's good practice to have RLS enabled to block random public reads.

-- 4. Create Policy: Allow ONLY Authenticated Users (Admins) to READ logs
create policy "Allow select for authenticated" on chat_logs
  for select
  using (auth.role() = 'authenticated');

-- 5. (Optional) Policy to allow saving from Anon if NOT using Service Key
-- create policy "Allow insert for all" on chat_logs for insert with check (true);
