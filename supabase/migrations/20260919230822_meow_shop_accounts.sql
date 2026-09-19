create table if not exists public.meow_shop_accounts (
  uid uuid primary key references auth.users(id) on delete cascade,
  email text,
  name text,
  points integer not null default 500,
  installed jsonb not null default '[]'::jsonb,
  last_checkin date,
  updated_at timestamptz not null default now()
);

alter table public.meow_shop_accounts enable row level security;

drop policy if exists "meow own row select" on public.meow_shop_accounts;
create policy "meow own row select" on public.meow_shop_accounts
  for select using (auth.uid() = uid);

drop policy if exists "meow own row insert" on public.meow_shop_accounts;
create policy "meow own row insert" on public.meow_shop_accounts
  for insert with check (auth.uid() = uid);

drop policy if exists "meow own row update" on public.meow_shop_accounts;
create policy "meow own row update" on public.meow_shop_accounts
  for update using (auth.uid() = uid) with check (auth.uid() = uid);

drop policy if exists "meow admin read all" on public.meow_shop_accounts;
create policy "meow admin read all" on public.meow_shop_accounts
  for select using ((auth.jwt() ->> 'email') = 'arink393@gmail.com');
