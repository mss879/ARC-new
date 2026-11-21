-- Contact form lockdown (21 November 2026)
--
-- Run once in the WEBSITE's Supabase project (SQL editor), after the website
-- release that moves this call to the server.
--
-- submit_contact_form() is SECURITY DEFINER and, like any function without
-- explicit grants, could be called by anyone holding the public (anon) key,
-- which ships in the website's JavaScript. The contact form used to call it
-- from the visitor's browser; it is now called only by the website's server
-- (/api/contact, after the bot checks) and by the AI chat and voice agent,
-- all with the service role. This stops anyone else from calling it.

do $$
declare
  fn regprocedure;
begin
  for fn in
    select p.oid::regprocedure
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = 'submit_contact_form'
  loop
    execute format('revoke execute on function %s from public, anon, authenticated', fn);
    execute format('grant execute on function %s to service_role', fn);
  end loop;
end $$;

-- Check: only service_role (and the function's owner) should be listed.
select grantee, privilege_type
from information_schema.routine_privileges
where routine_schema = 'public' and routine_name = 'submit_contact_form';
