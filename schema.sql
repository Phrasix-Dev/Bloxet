-- USERS
create table users (
id uuid primary key default gen_random_uuid(),
username text,
avatar text,
bio text,
created_at timestamp default now()
);

-- POSTS
create table posts (
id uuid primary key default gen_random_uuid(),
user_id uuid,
title text,
description text,
budget text,
created_at timestamp default now()
);

-- MESSAGES
create table messages (
id uuid primary key default gen_random_uuid(),
sender text,
receiver text,
message text,
created_at timestamp default now()
);
