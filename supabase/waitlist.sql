create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'landing-page',
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

drop policy if exists "Anyone can join the waitlist" on public.waitlist;

create policy "Anyone can join the waitlist"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);
