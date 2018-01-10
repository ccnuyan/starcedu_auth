set search_path = starcedu_auth;

create table authorization_code(
  code varchar  primary key default starcedu_auth.random_string(16) not null,
  client varchar(64) not null,
  user_id bigint not null,
  created_at timestamptz default now(),
  expired_in timestamptz default now()
);