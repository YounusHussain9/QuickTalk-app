--  this is the first migration file and this is the up migration , which means we are moving forward

-- if not exist sci text it will add this extension to our database so we can use this data type 
create extension if not exists citext;


--users table

create table if not exists public.users (
id bigserial primary key,
username citext unique not null,
password text,
avatar text,
is_admin boolean default false,
created_at timestamp default now(),
updated_at timestamp default now()
);


-- post table

create table if not exists public.posts (
    id bigserial primary key,
    user_id bigint references public.users (id),
    created_at timestamp default now(),
    updated_at timestamp default now() 
);


-- follows table

create table if not exists public.follows (
    user_id bigint not null references public.users (id),
    follower_id bigint not null references public.users (id),
    created_at timestamp default now(),
    updated_at timestamp default now() 
);



-- indexes
create index posts_user_id_index on public.posts (user_id);
create index follows_user_id_index on public.follows (user_id);
create index follows_follower_id_index on public.follows (follower_id);